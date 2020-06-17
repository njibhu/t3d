(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1])

//# sourceMappingURL=index.js.map
