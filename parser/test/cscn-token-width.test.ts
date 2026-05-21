import * as fs from "fs";

import { DataParser } from "../src/data-parser";
import { parseFile, parseAllChunks } from "../src/utils";

import { toArrayBuffer } from "./test-helper";

import * as CSCN from "../definitions/CSCN";

// TriggerKeyData layout (token1/token2 are the typeId=37 fields):
//   time: Float32 (4)
//   flags1..flags4: Uint8 (4 total)
//   token1: Uint32 OR Uint64
//   token2: Uint32 OR Uint64
//   value1..value4: Float32 (16)
//
// Uint32 stride: 4 + 4 + 4 + 4 + 16 = 32
// Uint64 stride: 4 + 4 + 8 + 8 + 16 = 40
const LAYOUTS: Array<{ label: "Uint32" | "Uint64"; tokenWidth: 4 | 8; stride: 32 | 40 }> = [
  { label: "Uint32", tokenWidth: 4, stride: 32 },
  { label: "Uint64", tokenWidth: 8, stride: 40 },
];

interface TriggerRecord {
  time: number;
  flags: [number, number, number, number];
  token1: bigint | number;
  token2: bigint | number;
  values: [number, number, number, number];
}

function readTrigger(dv: DataView, base: number, tokenWidth: 4 | 8): TriggerRecord {
  const time = dv.getFloat32(base, true);
  const flags: [number, number, number, number] = [
    dv.getUint8(base + 4),
    dv.getUint8(base + 5),
    dv.getUint8(base + 6),
    dv.getUint8(base + 7),
  ];
  const token1 = tokenWidth === 4 ? dv.getUint32(base + 8, true) : dv.getBigUint64(base + 8, true);
  const token2Off = base + 8 + tokenWidth;
  const token2 = tokenWidth === 4 ? dv.getUint32(token2Off, true) : dv.getBigUint64(token2Off, true);
  const valuesOff = token2Off + tokenWidth;
  const values: [number, number, number, number] = [
    dv.getFloat32(valuesOff, true),
    dv.getFloat32(valuesOff + 4, true),
    dv.getFloat32(valuesOff + 8, true),
    dv.getFloat32(valuesOff + 12, true),
  ];
  return { time, flags, token1, token2, values };
}

function isPlausibleFloat(x: number): boolean {
  return Number.isFinite(x) && Math.abs(x) < 1e10;
}

interface RecordScore {
  timeFinite: boolean;
  valuesFinite: boolean;
  timePlausible: boolean;
  valuesPlausible: boolean;
}

function scoreRecord(r: TriggerRecord): RecordScore {
  return {
    timeFinite: Number.isFinite(r.time),
    valuesFinite: r.values.every(Number.isFinite),
    timePlausible: isPlausibleFloat(r.time),
    valuesPlausible: r.values.every(isPlausibleFloat),
  };
}

interface CapturedArray {
  arrayPtr: number;
  length: number;
}

// Same trick as the MODL test: run the parser and intercept just the
// triggerKey DynArray calls, then short-circuit them so we don't depend on
// the (possibly wrong) record stride.
function captureTriggerArrays(version: number, dv: DataView, is64Bit: boolean, startPos: number): CapturedArray[] {
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
    if (typeof type === "string" && /^TriggerKeyData/.test(type)) {
      const arrayLength = dvArg.getUint32(pos, true);
      const arrayOffset = this.is64Bit
        ? Number(dvArg.getBigUint64(pos + 4, true))
        : dvArg.getUint32(pos + 4, true);
      if (arrayLength > 0 && arrayOffset !== 0) {
        captured.push({ arrayPtr: pos + 4 + arrayOffset, length: arrayLength });
      }
      return {
        newPosition: pos + this.PTR_SIZE + 4,
        data: [],
      };
    }
    return origDynArray.call(this, key, dvArg, pos, type);
  };

  try {
    const def = CSCN.definitions[`V${version}` as keyof typeof CSCN["definitions"]];
    new DataParser(def, is64Bit).parse(dv, startPos);
  } catch {
    // partial captures are still useful
  } finally {
    proto.DynArray = origDynArray;
  }

  return captured;
}

const CINP_BINS = ["51758.CINP.bin", "3705520.CINP.bin"];

describe("TriggerKeyData token width (byte stride check on CSCN)", () => {
  for (const binName of CINP_BINS) {
    test(`${binName}: detect typeId=37 width from byte stride`, () => {
      const buffer = fs.readFileSync(`./test/content/${binName}`, null);
      const dv = new DataView(toArrayBuffer(buffer));
      const fileHead = parseFile(dv);
      const allChunks = parseAllChunks(dv, fileHead.newPosition);
      const is64Bit = fileHead.data.flags == 5;

      const cscnChunk = allChunks.find((c) => c.chunkHeader.type === "CSCN");
      if (!cscnChunk) {
        // eslint-disable-next-line no-console
        console.log(`${binName}: no CSCN chunk, skipping`);
        return;
      }
      const version = cscnChunk.chunkHeader.chunkVersion;
      const startPos = cscnChunk.chunkPosition + cscnChunk.chunkHeader.chunkHeaderSize;

      const arrays = captureTriggerArrays(version, dv, is64Bit, startPos);
      const totalRecords = arrays.reduce((s, a) => s + a.length, 0);

      if (totalRecords === 0) {
        // eslint-disable-next-line no-console
        console.log(`${binName} (CSCN V${version}): no TriggerKey records, skipping`);
        return;
      }

      interface LayoutResult {
        timeFinite: number;
        timePlausible: number;
        valuesFinite: number;
        valuesPlausible: number;
        total: number;
        anomalies: Array<{ arrayIndex: number; recordIndex: number; reason: string[]; record: TriggerRecord }>;
      }

      const perLayout: Record<string, LayoutResult> = {};

      for (const { label, tokenWidth, stride } of LAYOUTS) {
        const result: LayoutResult = {
          timeFinite: 0,
          timePlausible: 0,
          valuesFinite: 0,
          valuesPlausible: 0,
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
                record: { time: NaN, flags: [0, 0, 0, 0], token1: -1, token2: -1, values: [NaN, NaN, NaN, NaN] },
              });
              continue;
            }
            const rec = readTrigger(dv, base, tokenWidth);
            const s = scoreRecord(rec);
            if (s.timeFinite) result.timeFinite++;
            if (s.timePlausible) result.timePlausible++;
            if (s.valuesFinite) result.valuesFinite++;
            if (s.valuesPlausible) result.valuesPlausible++;

            const reasons: string[] = [];
            if (!s.timeFinite) reasons.push("NaN/Inf in time");
            else if (!s.timePlausible) reasons.push(`|time|=${r(rec.time)} >= 1e10`);
            if (!s.valuesFinite) reasons.push("NaN/Inf in values");
            else if (!s.valuesPlausible) reasons.push(`|value| >= 1e10`);
            if (reasons.length > 0) result.anomalies.push({ arrayIndex: a, recordIndex: i, reason: reasons, record: rec });
          }
        }
        perLayout[label] = result;
      }

      const summary = (l: LayoutResult) =>
        `time finite=${l.timeFinite}/${l.total} plausible=${l.timePlausible}/${l.total}, ` +
        `values finite=${l.valuesFinite}/${l.total} plausible=${l.valuesPlausible}/${l.total}`;

      // eslint-disable-next-line no-console
      console.log(
        `${binName} (CSCN V${version}, ${arrays.length} arrays, ${totalRecords} records)\n` +
          `  Uint32 stride (32B): ${summary(perLayout.Uint32)}\n` +
          `  Uint64 stride (40B): ${summary(perLayout.Uint64)}`
      );

      for (const label of ["Uint32", "Uint64"] as const) {
        if (perLayout[label].anomalies.length > 0) {
          // eslint-disable-next-line no-console
          console.log(
            `  ${label} first 5 anomalies:\n` +
              perLayout[label].anomalies
                .slice(0, 5)
                .map(
                  (a) =>
                    `    [array ${a.arrayIndex}, record ${a.recordIndex}] ${a.reason.join("; ")} ` +
                    `time=${r(a.record.time)} values=${JSON.stringify(a.record.values.map(r))}`
                )
                .join("\n")
          );
        }
      }

      const u32Pass = perLayout.Uint32.timeFinite === perLayout.Uint32.total && perLayout.Uint32.valuesFinite === perLayout.Uint32.total;
      const u64Pass = perLayout.Uint64.timeFinite === perLayout.Uint64.total && perLayout.Uint64.valuesFinite === perLayout.Uint64.total;
      const verdict = u32Pass && u64Pass ? "both" : u32Pass ? "Uint32" : u64Pass ? "Uint64" : "neither";
      // eslint-disable-next-line no-console
      console.log(`  verdict: ${verdict}`);

      expect(["Uint32", "Uint64", "both", "neither"]).toContain(verdict);
    });
  }
});

function r(x: number): string | number {
  return Number.isFinite(x) ? Number(x.toPrecision(4)) : `${x}`;
}
