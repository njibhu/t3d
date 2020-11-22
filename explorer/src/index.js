const AppRenderer = require("./renderer");
const { setupMapChooser } = require("./ui");

function init() {
  const mapRenderer = new AppRenderer();
  mapRenderer.init();

  //Register actions on init page
  $("#filePickerInput").on("change", function (evt) {
    let file = evt.target.files[0];
    mapRenderer.createLocalReader(file, onReaderCreated);
  });
  $("#filePickerButton").on("click", () => $("#filePickerInput").trigger("click"));

  global.mapRenderer = mapRenderer;
}

function onReaderCreated() {
  console.log("onReaderCreated");
  $("#intro").slideUp(() => {
    $("#choose-map").show(onShowMapChooser);
  });
}

function onShowMapChooser() {
  const mapFileList = global.mapRenderer.getMapList();
  console.log(mapFileList);
  setupMapChooser(mapFileList);
}

init();
