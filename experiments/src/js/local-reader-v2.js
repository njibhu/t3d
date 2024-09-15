//TODO: make a verbose example of how to use the new LocalReader API.

$("#filePicker").change(function (evt) {
  const file = evt.target.files[0];
  T3D.getLocalReader(
    file,
    async (localReader) => {
      const fileList = await localReader.readFileList();
      console.log("Sorting the files");
      const myFiles = fileList.filter((i) => i.fileType === "PF_cntc");
      const myFilesData = {};
      await Promise.all(
        myFiles.map((elt) =>
          localReader.readFile(elt.mftId).then((r) => {
            myFilesData[elt.mftId] = new FileParser(r.buffer);
            console.log("Done with", elt.mftId);
          })
        )
      );
      console.log("Work:");
      for (const elt of myFiles) {
        const file = myFilesData[elt.mftId];
        const mainChunk = file.getChunk("Main").data;
        console.log(elt.baseIdList[0], mainChunk.typeInfos.length, mainChunk.content.length, file.ds.byteLength);
      }
    },
    "../static/t3dworker.js"
  );
});
