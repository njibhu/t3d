import { RDataView } from "./rdataview";
import { anetTypes } from "./anet-types";

interface Struct {
  name: string;
  members?: { [name: string]: any };
  definitions?: { [name: string]: { [fieldName: string]: string } };
}

interface versionStruct {
  name: string;
  chunkName: string;
  root: { [name: string]: string };
  version: number;
  definitions?: { [name: string]: { [fieldName: string]: string } };
}

interface StructTabParserOptions {
  debug?: boolean;
  continueOnUnknownMembers?: boolean;
  logger?: (message: string) => void;
}

interface StructMetadata {
  kind: "simple" | "struct";
  markerAddress: number;
  structName?: string;
  structNameAddress?: number;
  terminatorAddress?: number;
}

interface ParsedMember {
  name: string;
  type: string;
  definition?: Struct;
  unknownTypeId?: number;
}

/**
 * This parser is the detailed chunk definition parser.
 * It will iterate through all the structures and generate a parser file for each chunks.
 */
export class StructTabParser {
  private rdataView: RDataView;
  private continueOnUnknownMembers: boolean;
  private debugEnabled: boolean;
  private logger: (message: string) => void;
  private currentChunkName?: string;
  private currentVersion?: number;
  private structMetadataCache: Map<number, StructMetadata>;
  public typesSet: Set<string>;

  constructor(dataView: DataView, rdataMin: number, rdataMax: number, options: StructTabParserOptions = {}) {
    this.rdataView = new RDataView(dataView, rdataMin, rdataMax);
    this.continueOnUnknownMembers = options.continueOnUnknownMembers ?? false;
    this.debugEnabled = options.debug ?? false;
    this.logger = options.logger ?? console.error;
    this.structMetadataCache = new Map();
  }

  public parseStructTab(address: number, nbVersions: number, chunkName: string): versionStruct[] {
    let currentAddress = address;
    let loopIndex = nbVersions - 1;
    const historyDepth = 100;
    const versionDefinitions: versionStruct[] = [];
    const previousChunkName = this.currentChunkName;
    const previousVersion = this.currentVersion;

    this.currentChunkName = chunkName;

    while (loopIndex >= 0 && loopIndex >= nbVersions - historyDepth) {
      currentAddress = this.rdataView.getAddress(address + 24 * loopIndex);
      if (currentAddress > 0) {
        this.currentVersion = loopIndex;
        this.debug(`Parsing root struct version=${loopIndex} rootAddress=${toHex(currentAddress)}`);
        const rootStruct = this.parseStruct(currentAddress);

        if (!rootStruct.members) {
          throw new Error("The root struct must have members");
        }

        versionDefinitions.push({
          chunkName: `'${chunkName}'`,
          name: `'${rootStruct.name}'`,
          version: loopIndex,
          definitions: rootStruct.definitions,
          root: rootStruct.members,
        });
      }
      loopIndex -= 1;
    }

    this.currentChunkName = previousChunkName;
    this.currentVersion = previousVersion;

    // We reverse the array to get the last version last
    return versionDefinitions.reverse();
  }

  getSimpleTypeName(address: number, pathSegments: string[] = []): string {
    const typeId = this.rdataView.getUint8(address);
    const typeFactory = anetTypes[typeId];

    if (!typeFactory) {
      this.debug(
        [
          `Unknown simple typeId=${typeId}`,
          `structAddress=${toHex(address)}`,
          `path=${this.formatPath(pathSegments)}`,
          `availableTypeIds=${Object.keys(anetTypes).join(",")}`,
        ].join(" ")
      );
      throw new TypeError(`Unknown simple type id ${typeId} at ${toHex(address)}`);
    }

    const typeName = typeFactory();
    this.debug(
      [
        `Resolved simple type at ${toHex(address)}`,
        `path=${this.formatPath(pathSegments)}`,
        `typeId=${typeId}`,
        `=> ${typeName}`,
      ].join(" ")
    );

    // Add public types to be imported into the public typesSet
    this.typesSet.add(typeName.split("(")[0]);

    return typeName;
  }

  parseMember(address: number, structPath: string[]): ParsedMember {
    const typeId = this.rdataView.getUint16(address);
    const memberPath = [...structPath, "<pending-name>"];
    const rawMemberNamePointer = this.rdataView.getUint64(address + 8);
    const memberNameAddress = this.rdataView.getAddress(address + 8);
    const memberName = this.rdataView.getAsciiString(memberNameAddress);
    memberPath[memberPath.length - 1] = memberName;

    const rawSubTypePointer = this.rdataView.getUint64(address + 16);
    const subTypeAddress = this.rdataView.getAddress(address + 16);
    const hasCustomSubType =
      subTypeAddress > 0 ? this.rdataView.getUint8(this.rdataView.getAddress(subTypeAddress + 8)) != 0 : true;
    const memberDefinition =
      subTypeAddress > 0
        ? this.parseStruct(subTypeAddress, this.extendSubtypePath(structPath, memberName, typeId))
        : undefined;
    const subTypeAmount = subTypeAddress > 0 ? this.rdataView.getUint32(address + 24) : undefined;
    const typeFactory = anetTypes[typeId];

    this.debug(
      [
        `Parsing member at ${toHex(address)}`,
        `path=${this.formatPath(memberPath)}`,
        `name=${memberName}`,
        `typeId=${typeId}`,
        `rawNamePointer=${toHex64(rawMemberNamePointer)}`,
        `memberNameAddress=${toHex(memberNameAddress)}`,
        `rawSubTypePointer=${toHex64(rawSubTypePointer)}`,
        `subTypeAddress=${toHex(subTypeAddress)}`,
        `hasCustomSubType=${hasCustomSubType}`,
        `subTypeAmount=${subTypeAmount ?? "undefined"}`,
        `subTypeName=${memberDefinition?.name ?? "undefined"}`,
      ].join(" ")
    );

    if (!typeFactory) {
      this.debug(
        [
          `Unknown member typeId=${typeId}`,
          `address=${toHex(address)}`,
          `path=${this.formatPath(memberPath)}`,
          `name=${memberName}`,
          `rawNamePointer=${toHex64(rawMemberNamePointer)}`,
          `subTypeAddress=${toHex(subTypeAddress)}`,
          `rawSubTypePointer=${toHex64(rawSubTypePointer)}`,
          `subTypeName=${memberDefinition?.name ?? "undefined"}`,
          `subTypeAmount=${subTypeAmount ?? "undefined"}`,
          `availableTypeIds=${Object.keys(anetTypes).join(",")}`,
        ].join(" ")
      );
      this.logUnknownMemberDiagnostics(address, memberPath);
      if (this.continueOnUnknownMembers) {
        return {
          name: memberName,
          type: `UnknownType_${typeId}`,
          unknownTypeId: typeId,
        };
      }
      throw new TypeError(`Unknown member type id ${typeId} for ${memberName} at ${toHex(address)}`);
    }

    const memberType = typeFactory(
      hasCustomSubType,
      memberDefinition ? memberDefinition.name : undefined,
      subTypeAmount
    );
    this.debug(
      `Resolved member ${memberName} at ${toHex(address)} path=${this.formatPath(memberPath)} => ${memberType}`
    );

    // Add public types to be imported into the public typesSet
    if (!memberType.startsWith("'")) {
      // Ignore custom types extra params
      const definitionSplit = memberType.split("(");
      const mainType = definitionSplit[0];
      this.typesSet.add(mainType);

      // A native type can also have a native subtype which also needs to be imported
      if (definitionSplit.length > 1) {
        if (!definitionSplit[1].startsWith("'") && definitionSplit[1] !== ")") {
          const match = /[a-zA-Z0-9]*/.exec(definitionSplit[1]);
          if (match) {
            this.typesSet.add(match[0]);
          }
          const deepMatch = /\(([a-zA-Z0-9]*)/.exec(memberDefinition?.name || "");
          if (deepMatch && deepMatch[1] !== "") {
            this.typesSet.add(deepMatch[1]);
          }
        }
      }
    }

    if (hasCustomSubType) {
      return {
        name: memberName,
        type: memberType,
        definition: memberDefinition,
      };
    } else {
      return { name: memberName, type: memberType };
    }
  }

  parseStruct(address: number, pathSegments: string[] = []): Struct {
    let currentAddress = address;
    const structMetadata = this.inspectStruct(address);
    const structPath =
      structMetadata.kind === "struct" && structMetadata.structName
        ? [...pathSegments, structMetadata.structName]
        : pathSegments;

    this.debug(
      [
        `Parsing struct at ${toHex(address)}`,
        `path=${this.formatPath(structPath)}`,
        `kind=${structMetadata.kind}`,
        `markerAddress=${toHex(structMetadata.markerAddress)}`,
        `terminatorAddress=${toHex(structMetadata.terminatorAddress)}`,
        `structNameAddress=${toHex(structMetadata.structNameAddress)}`,
        `structName=${structMetadata.structName ?? "undefined"}`,
      ].join(" ")
    );

    // Simple types
    if (structMetadata.kind === "simple") {
      const simpleType = this.getSimpleTypeName(address, pathSegments);
      this.debug(`Struct at ${toHex(address)} path=${this.formatPath(pathSegments)} is a simple type ${simpleType}`);

      return { name: simpleType };
    }

    const members: { [name: string]: string } = {};
    const definitions: { [name: string]: any } = {};
    const unknownMembers: ParsedMember[] = [];
    let unknownStreakStartAddress: number | undefined;
    let unknownStreakTypeId: number | undefined;
    let unknownStreakLength = 0;

    while (this.rdataView.getUint16(currentAddress) != 0) {
      const memberAddress = currentAddress;
      const { name, type, definition, unknownTypeId } = this.parseMember(currentAddress, structPath);

      if (unknownTypeId !== undefined) {
        unknownMembers.push({ name, type, definition, unknownTypeId });

        if (unknownStreakTypeId === unknownTypeId) {
          unknownStreakLength += 1;
        } else {
          this.flushUnknownStreak(unknownStreakStartAddress, unknownStreakTypeId, unknownStreakLength, structPath);
          unknownStreakStartAddress = memberAddress;
          unknownStreakTypeId = unknownTypeId;
          unknownStreakLength = 1;
        }
      } else {
        this.flushUnknownStreak(unknownStreakStartAddress, unknownStreakTypeId, unknownStreakLength, structPath);
        unknownStreakStartAddress = undefined;
        unknownStreakTypeId = undefined;
        unknownStreakLength = 0;
      }

      if (definition) {
        definitions[definition.name] = definition.members;
        if (definition.definitions) {
          for (const [key, value] of Object.entries(definition.definitions)) {
            definitions[key] = value;
          }
        }
      }

      if (name === null) {
        break;
      }
      if (unknownTypeId === undefined) {
        members[getUniqueKey(members, name)] = type;
      }
      currentAddress += 32;
    }

    this.flushUnknownStreak(unknownStreakStartAddress, unknownStreakTypeId, unknownStreakLength, structPath);

    const structName = structMetadata.structName ?? "";

    if (unknownMembers.length > 0) {
      const unknownSummary = unknownMembers.map((member) => `${member.name}:${member.unknownTypeId}`).join(", ");
      this.debug(
        [
          `Struct contains unknown members`,
          `path=${this.formatPath(structPath)}`,
          `structName=${structName}`,
          `unknownMembers=${unknownSummary}`,
          `terminatorAddress=${toHex(structMetadata.terminatorAddress)}`,
        ].join(" ")
      );
      throw new TypeError(
        `Unknown member type ids in ${structName || "struct"} at ${toHex(address)}: ${unknownMembers
          .map((member) => `${member.name}=${member.unknownTypeId}`)
          .join(", ")}`
      );
    }

    if (Object.keys(definitions).length > 0) {
      return { name: structName, members, definitions };
    } else {
      return { name: structName, members };
    }
  }

  private debug(message: string): void {
    if (this.debugEnabled) {
      const context = [`chunk=${this.currentChunkName ?? "unknown"}`, `version=${this.currentVersion ?? "unknown"}`];
      this.logger(`[StructTabParser] [${context.join(" ")}] ${message}`);
    }
  }

  private inspectStruct(address: number): StructMetadata {
    const cached = this.structMetadataCache.get(address);
    if (cached) {
      return cached;
    }

    const markerAddress = this.rdataView.getAddress(address + 8);

    if (markerAddress >= 0 && this.rdataView.getUint8(markerAddress) === 0) {
      const metadata: StructMetadata = {
        kind: "simple",
        markerAddress,
      };
      this.structMetadataCache.set(address, metadata);
      return metadata;
    }

    let currentAddress = address;
    while (this.rdataView.getUint16(currentAddress) != 0) {
      currentAddress += 32;
    }

    const structNameAddress = this.rdataView.getAddress(currentAddress + 8);
    const metadata: StructMetadata = {
      kind: "struct",
      markerAddress,
      terminatorAddress: currentAddress,
      structNameAddress,
      structName: this.rdataView.getAsciiString(structNameAddress),
    };
    this.structMetadataCache.set(address, metadata);
    return metadata;
  }

  private extendSubtypePath(structPath: string[], memberName: string, typeId: number): string[] {
    const childSegment = typeId === 1 || typeId === 2 || typeId === 3 ? `${memberName}[]` : memberName;
    return [...structPath, childSegment];
  }

  private formatPath(pathSegments: string[]): string {
    return pathSegments.length > 0 ? pathSegments.join(" -> ") : "<root>";
  }

  private logUnknownMemberDiagnostics(address: number, memberPath: string[]): void {
    const nextRecordOffsets = [0, 32, 64];
    const qwordOffsets = [0, 8, 16, 24];

    this.debug(
      [
        `Unknown member payload diagnostics`,
        `path=${this.formatPath(memberPath)}`,
        `record=${this.formatBytes(address, 32)}`,
        `namePointerBytes=${this.formatBytes(address + 8, 8)}`,
        `subTypePointerBytes=${this.formatBytes(address + 16, 8)}`,
      ].join(" ")
    );

    for (const offset of nextRecordOffsets) {
      const recordAddress = address + offset;
      this.debug(`Nearby record +${offset} at ${toHex(recordAddress)} raw=${this.formatBytes(recordAddress, 32)}`);
    }

    for (const offset of qwordOffsets) {
      const rawValue = this.rdataView.getUint64(address + offset);
      this.debug(
        [
          `Unknown member qword probe`,
          `path=${this.formatPath(memberPath)}`,
          `offset=+${offset}`,
          `raw=${toHex64(rawValue)}`,
          this.describePotentialAddress(rawValue),
        ].join(" ")
      );
    }
  }

  private formatBytes(address: number, byteLength: number): string {
    return this.rdataView
      .getBytes(address, byteLength)
      .map((value) => value.toString(16).toUpperCase().padStart(2, "0"))
      .join(" ");
  }

  private describePotentialAddress(rawValue: number): string {
    const relativeAddress = this.rdataView.toRelativeAddress(rawValue);

    if (relativeAddress < 0) {
      return "addressCandidate=outside-rdata";
    }

    if (relativeAddress === 0) {
      return "addressCandidate=null";
    }

    const asciiPreview = this.rdataView.getAsciiString(relativeAddress);
    return `addressCandidate=${toHex(relativeAddress)} asciiPreview=${asciiPreview || "<non-ascii>"}`;
  }

  private flushUnknownStreak(
    startAddress: number | undefined,
    typeId: number | undefined,
    length: number,
    structPath: string[]
  ): void {
    if (startAddress === undefined || typeId === undefined || length === 0) {
      return;
    }

    this.debug(
      [
        `Unknown member streak`,
        `path=${this.formatPath(structPath)}`,
        `typeId=${typeId}`,
        `startAddress=${toHex(startAddress)}`,
        `memberCount=${length}`,
        `byteCount=${length * 32}`,
      ].join(" ")
    );
  }
}

/*
 * Sometimes some fields are defined multiple times.
 * To not break parsing, we just append an underscore to the field name.
 * This functions ensures that the field name is unique.
 *
 * Also, yes, last ones need the underscore, not the first ones, because if we'd rename
 * the fields, it would change the order of the fields in the javascript object.
 * And that would break parsing. (Otherwise we'd need to unshift the fields)
 */
function getUniqueKey(obj: Record<string, any>, name: string): string {
  if (Object.prototype.hasOwnProperty.call(obj, name)) {
    return getUniqueKey(obj, `${name}_`);
  } else {
    return name;
  }
}

function toHex(value: number | undefined): string {
  if (value === undefined) {
    return "undefined";
  }

  return `0x${value.toString(16).toUpperCase()}`;
}

function toHex64(value: number): string {
  return `0x${value.toString(16).toUpperCase()}`;
}
