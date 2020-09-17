$("#filePicker").change(onLoad);

function onLoad(event) {
  let file = event.target.files[0];
  T3D.getLocalReader(file, onLoaded, "../static/t3dworker.js");
}

async function onLoaded(localReader) {
  $(".logs").append("Scanning archive... <br>");
  await localReader.readFileList();

  $(".logs").append("Sorting maps... <br>");
  let maps = localReader.getMapList();
  console.log(maps);

  $(".logs").append("Done <br>");
  $(".fileList").append(JSON.stringify(maps, null, 2));
}
