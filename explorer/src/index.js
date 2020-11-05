const AppRenderer = require("./renderer");

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
  $("#intro").hide();
  $("#choosing-map").show();
}

init();
