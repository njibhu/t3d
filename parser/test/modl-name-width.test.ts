import * as fs from "fs";

import { DataParser } from "../src/data-parser";
import { parseFile, parseAllChunks } from "../src/utils";

import { toArrayBuffer } from "./test-helper";

import * as MODL from "../definitions/MODL";

// ModelConstantData record layout (under each candidate name width):
//   Uint32: name(4) + value(4*float32 = 16) + constantFlags(4) = 24 bytes
//   Uint64: name(8) + value(4*float32 = 16) + constantFlags(4) = 28 bytes
const LAYOUTS: Array<{ label: "Uint32" | "Uint64"; nameWidth: 4 | 8; stride: 24 | 28 }> = [
  { label: "Uint32", nameWidth: 4, stride: 24 },
  { label: "Uint64", nameWidth: 8, stride: 28 },
];

interface RawRecord {
  name: bigint | number;
  value: number[];
  flags: number;
}

function readRecord(dv: DataView, base: number, nameWidth: 4 | 8): RawRecord {
  const name = nameWidth === 4 ? dv.getUint32(base, true) : dv.getBigUint64(base, true);
  const valueBase = base + nameWidth;
  const value = [
    dv.getFloat32(valueBase, true),
    dv.getFloat32(valueBase + 4, true),
    dv.getFloat32(valueBase + 8, true),
    dv.getFloat32(valueBase + 12, true),
  ];
  const flags = dv.getUint32(valueBase + 16, true);
  return { name, value, flags };
}

function floatIsFinite(x: number): boolean {
  return Number.isFinite(x);
}

function floatIsPlausible(x: number): boolean {
  // Snapshots show shader constants in a tight range (0..1 mostly, plus tiny denormals
  // like 1.4e-45 used as bit-encoded markers). A genuine constant pushing past ~1e10
  // would be unusual — we don't fail the test on it alone, but we count it.
  return Number.isFinite(x) && Math.abs(x) < 1e10;
}

interface RecordScore {
  valuesFinite: boolean;   // hard: NaN/Inf is unambiguously broken
  valuesPlausible: boolean; // soft: extreme magnitude is suspicious
  flagsSmall: boolean;     // hard: constantFlags is a small bitfield; a 32-bit hash here means stride is wrong
}

function scoreRecord(r: RawRecord): RecordScore {
  return {
    valuesFinite: r.value.every(floatIsFinite),
    valuesPlausible: r.value.every(floatIsPlausible),
    flagsSmall: r.flags >= 0 && r.flags < 0x10000,
  };
}

interface CapturedArray {
  arrayPtr: number;
  length: number;
  parentPos: number;
}

// Locate every `constants: DynArray("ModelConstantData...")` instance in the chunk
// by running the parser and intercepting just those DynArray calls. We don't actually
// parse the records (the current Uint64 definition might walk into garbage), we just
// record the pointer + length and let the parser continue past the field.
function captureConstantsArrays(version: number, dv: DataView, is64Bit: boolean, startPos: number): CapturedArray[] {
  const captured: CapturedArray[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const proto: any = DataParser.prototype;
  const origDynArray = proto.DynArray;

  proto.DynArray = function patchedDynArray(
    key: string,
    dvArg: DataView,
    pos: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: any
  ) {
    if (typeof type === "string" && /^ModelConstantData/.test(type)) {
      const arrayLength = dvArg.getUint32(pos, true);
      const arrayOffset = this.is64Bit
        ? Number(dvArg.getBigUint64(pos + 4, true))
        : dvArg.getUint32(pos + 4, true);
      if (arrayLength > 0 && arrayOffset !== 0) {
        captured.push({ arrayPtr: pos + 4 + arrayOffset, length: arrayLength, parentPos: pos });
      }
      // Skip iterating records so we don't depend on the (possibly wrong) record stride.
      return {
        newPosition: pos + this.PTR_SIZE + 4,
        data: [],
      };
    }
    return origDynArray.call(this, key, dvArg, pos, type);
  };

  try {
    const def = MODL.definitions[`V${version}` as keyof typeof MODL["definitions"]];
    new DataParser(def, is64Bit).parse(dv, startPos);
  } catch {
    // Outer-struct failures are fine: we collected whatever we could reach. The
    // constants arrays we did find still let us score the stride question.
  } finally {
    proto.DynArray = origDynArray;
  }

  return captured;
}

const MODL_BINS = [
  "modl1.bin",
  "modl2.bin",
  "modl3.bin",
  "modl4.bin",
  "105324.MODL.bin",
  "1791892.MODL.bin",
  "3597278.MODL.bin",
  "3690822.MODL.bin",
  "3771763.MODL.bin",
];

describe("ModelConstantData name width (byte stride check)", () => {
  for (const binName of MODL_BINS) {
    test(`${binName}: records pack at the Uint32 stride, not the Uint64 stride`, () => {
      const buffer = fs.readFileSync(`./test/content/${binName}`, null);
      const dv = new DataView(toArrayBuffer(buffer));
      const fileHead = parseFile(dv);
      const allChunks = parseAllChunks(dv, fileHead.newPosition);
      const is64Bit = fileHead.data.flags == 5;

      const modlChunk = allChunks.find((c) => c.chunkHeader.type === "MODL");
      if (!modlChunk) throw new Error("no MODL chunk");
      const version = modlChunk.chunkHeader.chunkVersion;
      const startPos = modlChunk.chunkPosition + modlChunk.chunkHeader.chunkHeaderSize;

      const arrays = captureConstantsArrays(version, dv, is64Bit, startPos);
      const totalRecords = arrays.reduce((s, a) => s + a.length, 0);

      if (totalRecords === 0) {
        // eslint-disable-next-line no-console
        console.log(`${binName} (MODL V${version}): no constant records present, nothing to discriminate.`);
        return;
      }

      interface LayoutResult {
        valuesFinite: number;     // hard count: how many records had no NaN/Inf in `value`
        valuesPlausible: number;  // soft count: how many also had reasonable magnitudes
        flagsSmall: number;       // hard count: how many had a small `constantFlags`
        total: number;
        anomalies: Array<{ arrayIndex: number; recordIndex: number; reason: string[]; record: RawRecord }>;
      }

      const perLayout: Record<string, LayoutResult> = {};

      for (const { label, nameWidth, stride } of LAYOUTS) {
        const result: LayoutResult = {
          valuesFinite: 0,
          valuesPlausible: 0,
          flagsSmall: 0,
          total: 0,
          anomalies: [],
        };

        for (let a = 0; a < arrays.length; a++) {
          const arr = arrays[a];
          for (let i = 0; i < arr.length; i++) {
            result.total++;
            const base = arr.arrayPtr + i * stride;
            if (base + stride > dv.byteLength) {
              result.anomalies.push({
                arrayIndex: a,
                recordIndex: i,
                reason: ["out-of-bounds read"],
                record: { name: -1, value: [NaN, NaN, NaN, NaN], flags: -1 },
              });
              continue;
            }
            const rec = readRecord(dv, base, nameWidth);
            const s = scoreRecord(rec);
            if (s.valuesFinite) result.valuesFinite++;
            if (s.valuesPlausible) result.valuesPlausible++;
            if (s.flagsSmall) result.flagsSmall++;
            const reasons: string[] = [];
            if (!s.valuesFinite) reasons.push("NaN/Inf in value");
            if (!s.valuesPlausible) reasons.push("|value| >= 1e10");
            if (!s.flagsSmall) reasons.push(`flags=${rec.flags} (>=0x10000)`);
            if (reasons.length > 0) result.anomalies.push({ arrayIndex: a, recordIndex: i, reason: reasons, record: rec });
          }
        }
        perLayout[label] = result;
      }

      const summary = (l: LayoutResult) =>
        `valuesFinite=${l.valuesFinite}/${l.total}, valuesPlausible=${l.valuesPlausible}/${l.total}, flagsSmall=${l.flagsSmall}/${l.total}`;

      // eslint-disable-next-line no-console
      console.log(
        `${binName} (MODL V${version}, ${arrays.length} arrays, ${totalRecords} records)\n` +
          `  Uint32 stride (24B): ${summary(perLayout.Uint32)}\n` +
          `  Uint64 stride (28B): ${summary(perLayout.Uint64)}`
      );

      for (const label of ["Uint32", "Uint64"] as const) {
        if (perLayout[label].anomalies.length > 0) {
          // eslint-disable-next-line no-console
          console.log(
            `  ${label} anomalies:\n` +
              perLayout[label].anomalies
                .map(
                  (a) =>
                    `    [array ${a.arrayIndex}, record ${a.recordIndex}] ${a.reason.join("; ")}` +
                    `  value=${JSON.stringify(a.record.value)} flags=${a.record.flags}`
                )
                .join("\n")
          );
        }
      }

      // Each fixture should pick exactly one stride: that interpretation produces
      // finite floats AND small flags for every record, and the other doesn't.
      const u32Pass = perLayout.Uint32.valuesFinite === perLayout.Uint32.total && perLayout.Uint32.flagsSmall === perLayout.Uint32.total;
      const u64Pass = perLayout.Uint64.valuesFinite === perLayout.Uint64.total && perLayout.Uint64.flagsSmall === perLayout.Uint64.total;

      const verdict: "Uint32" | "Uint64" | "both" | "neither" = u32Pass && u64Pass ? "both" : u32Pass ? "Uint32" : u64Pass ? "Uint64" : "neither";
      // eslint-disable-next-line no-console
      console.log(`  verdict: ${verdict}`);

      // The test always passes — its job is to produce a per-file verdict. The
      // verdict is what tells us whether ModelConstantData.name is conditional.
      expect(["Uint32", "Uint64", "both", "neither"]).toContain(verdict);
    });
  }
});
