//TODO: make a verbose example of how to use the new LocalReader API.

let lr;
$("#filePicker").change(function(evt){
    let file = evt.target.files[0];
    T3D.getLocalReader(file, function(result){
        lr = result;
        lr.readFileList().then((res) => {
            console.log("Sorting the files");
            let myFiles = res.filter(i => i.fileType === "PF_cntc");
            console.log("Work:");
            for (let elt of myFiles){
                lr.readFile(elt.mftId).then((r) => {
                    let file = new T3D.GW2File(new DataStream(r.buffer), 0);
                    let mainChunk = file.getChunk('Main').data;
                    console.log(elt.baseIdList[0], mainChunk.typeInfos.length, mainChunk.content.length, res.buffer.byteLength);
                });
                
            }
        });
    }, '../static/t3dworker.js'); 
});
