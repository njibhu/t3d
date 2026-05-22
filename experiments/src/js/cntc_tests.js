import $ from "jquery";
import {
  CNTC_ITEM_TYPE,
  createLocalReader,
  getCntcFiles,
  getEntries,
  getMainChunk,
  parseGuid,
  parseId,
  readCntcFile,
} from "./lib/cntc.js";

$("#filePicker").change(function (evt) {
  const file = evt.target.files[0];
  createLocalReader(file, async (localReader) => {
    const fileList = await localReader.readFileList();
    console.log("Sorting the files");

    const cntcFiles = getCntcFiles(fileList);
    const items = [];
    console.log(cntcFiles);

    console.log("Work:");
    let fileWork = 0;
    for (const entry of cntcFiles) {
      console.log((fileWork += 1));
      const file = await readCntcFile(localReader, entry.mftId);
      const mainChunk = getMainChunk(file);

      for (const chunkEntry of getEntries(mainChunk)) {
        if (chunkEntry.type === CNTC_ITEM_TYPE) {
          const itemId = parseId(chunkEntry.contentSlice);
          const guid = parseGuid(chunkEntry.contentSlice);
          items.push(itemId);
          if (itemId === 85192) {
            console.log("ITEM FOUND:", itemId, guid);
          }
        }
      }
    }
  });
});
