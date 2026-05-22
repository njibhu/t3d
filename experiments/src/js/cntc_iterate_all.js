import $ from "jquery";
import { createLocalReader, getCntcFiles, getMainChunk, readCntcFile } from "./lib/cntc.js";

$("#filePicker").change(function (evt) {
  const file = evt.target.files[0];
  createLocalReader(file, async (localReader) => {
    const fileList = await localReader.readFileList();
    console.log("Sorting the files");

    const cntcFiles = getCntcFiles(fileList);
    const cntcTypes = {};

    console.log("Work:");
    let fileWork = 0;
    for (const entry of cntcFiles) {
      console.log((fileWork += 1));
      const file = await readCntcFile(localReader, entry.mftId);
      const mainChunk = getMainChunk(file);

      for (const chunkEntry of mainChunk.indexEntries) {
        if (!cntcTypes[chunkEntry.type]) {
          cntcTypes[chunkEntry.type] = {
            amount: 0,
            flagged: {},
          };
        }

        cntcTypes[chunkEntry.type].amount += 1;
        cntcTypes[chunkEntry.type].flagged[entry.baseIdList[0]]
          ? (cntcTypes[chunkEntry.type].flagged[entry.baseIdList[0]] += 1)
          : (cntcTypes[chunkEntry.type].flagged[entry.baseIdList[0]] = 1);
      }
    }

    console.log(cntcTypes);
  });
});
