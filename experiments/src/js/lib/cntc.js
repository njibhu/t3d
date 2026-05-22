import T3D from "t3d-lib";
import { FileParser } from "t3d-parser";

export const CNTC_FILE_ID = 473992;
export const CNTC_FILTER_MAX_BASE_ID = 1000000;
export const CNTC_ITEM_TYPE = 27;

export function createLocalReader(file, callback, logger) {
  return T3D.getLocalReader(file, callback, "../static/t3dworker.js", logger);
}

export async function readCntcFile(localReader, fileId) {
  const archiveFile = await localReader.readFile(fileId);
  if (!archiveFile?.buffer) {
    throw new Error(`Failed to read cntc file ${fileId}`);
  }
  return new FileParser(archiveFile.buffer);
}

export function getMainChunk(file) {
  const mainChunk = file.getChunk("Main");
  if (!mainChunk?.data) {
    throw new Error(`Missing Main chunk in file type ${file.header?.type ?? "unknown"}`);
  }
  return mainChunk.data;
}

export function getCntcFiles(fileList) {
  return fileList.filter((file) => file.fileType === "PF_cntc");
}

export function getEntries(mainChunk) {
  return mainChunk.indexEntries.map((entry, index) => {
    const begin = entry.offset;
    const end = mainChunk.indexEntries[index + 1] ? mainChunk.indexEntries[index + 1].offset : mainChunk.content.length;

    return {
      ...entry,
      contentSlice: mainChunk.content.slice(begin, end),
    };
  });
}

export function parseGuid(uarr) {
  function hexnum(num) {
    const hex = num.toString(16).toUpperCase();
    return hex.length === 2 ? hex : `0${hex}`;
  }

  return (
    "" +
    hexnum(uarr[3]) +
    hexnum(uarr[2]) +
    hexnum(uarr[1]) +
    hexnum(uarr[0]) +
    "-" +
    hexnum(uarr[5]) +
    hexnum(uarr[4]) +
    "-" +
    hexnum(uarr[7]) +
    hexnum(uarr[6]) +
    "-" +
    hexnum(uarr[8]) +
    hexnum(uarr[9]) +
    "-" +
    hexnum(uarr[10]) +
    hexnum(uarr[11]) +
    hexnum(uarr[12]) +
    hexnum(uarr[13]) +
    hexnum(uarr[14]) +
    hexnum(uarr[15])
  );
}

export function parseId(uarr) {
  const dataView = new DataView(uarr.buffer, uarr.byteOffset, uarr.byteLength);
  return dataView.getUint32(32, true);
}
