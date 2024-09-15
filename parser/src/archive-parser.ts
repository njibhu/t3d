import { ArchiveDefinitions } from "./struct-definitions";
import { DataParser } from "./data-parser";
import { sliceFile } from "./utils";
import type { ArchiveHeader, MFTTable } from "./interfaces";

// Public functions
export async function readArchive(file: File): Promise<{ archiveHeader: ArchiveHeader, metaTable: MFTTable["table"], indexTable: Array<number>}> {
  try {
    const archiveHeader = parseANDatHeader(await sliceFile(file, 0, 40));
    if (!archiveHeader) {
      throw new Error("Invalid ANDat header");
    }
    const mftData = parseMFTTable(await sliceFile(file, Number(archiveHeader.mftOffset), archiveHeader.mftSize));
    if (!mftData) {
      throw new Error("Invalid MFT table");
    }
    const indexTable = parseMFTIndex(await sliceFile(file, mftData.mftIndexOffset, mftData.mftIndexSize), mftData.mftIndexSize);

    return {
      archiveHeader,
      metaTable: mftData.table,
      indexTable,
    };
  } catch (error) {
    console.error("Couldn't parse archive", error);
    throw error;
  }
}


// Private functions
function parseANDatHeader(buffer: ArrayBuffer): ArchiveHeader | undefined {
  const ds = new DataView(buffer);
  const header = new DataParser({ root: ArchiveDefinitions.ARCHIVE_HEADER_FORMAT }, false).parse(ds).data;
  if (header.magic !== "AN\u001A") {
    console.error("ANDat header is not valid", header.magic);
    return undefined;
  }
  return header;
}

function parseMFTTable(buffer: ArrayBuffer): MFTTable | undefined {
  const dataView = new DataView(buffer);
  const headerParse = new DataParser({ root: ArchiveDefinitions.MFT_TABLE_HEADER }, false, true).parse(dataView);
  const header: MFTTable["header"] = headerParse.data;
  if (header.magic !== "Mft\u001A") {
    console.error("MFTTable header is not valid", header.magic);
    return undefined;
  }
  
  const fullTable: MFTTable["table"] = [];
  let cursor = headerParse.newPosition;
  for(let i = 1; i < header.nbOfEntries; i++) {
    const item = new DataParser({ root: ArchiveDefinitions.MFT_TABLE_ENTRY}, false).parse(dataView, cursor);
    cursor = item.newPosition;
    fullTable[i] = item.data;
  }

  return {
    header,
    table: fullTable,
    mftIndexOffset: Number(fullTable[2].offset),
    mftIndexSize: fullTable[2].size,
  };
}

function parseMFTIndex(buffer: ArrayBuffer, size: number): Array<number> {
  const length = size / 8;
  const indexTable = [];

  const dataView = new DataView(buffer);
  for (let i = 0; i < length; i++) {
    const id = dataView.getUint32(i * 8, true);
    const mftIndex = dataView.getUint32(i * 8 + 4, true);
    indexTable[id] = mftIndex;
  }

  return indexTable;
}
