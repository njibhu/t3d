const AppRenderer = require("./renderer");

/// Extend Original Logger
let myLogger = {
  lastMessageType: null,
  log: function () {
    let htmlOutput = $("#log");
    let str = Array.prototype.slice.call(arguments, 1).join(" ");
    if (arguments[1] === myLogger.lastMessageType) {
      $("#log p:last-of-type")[0].innerHTML = str;
    } else {
      htmlOutput.append($("<p>-------------</p>"));
      htmlOutput.append($("<p>" + str + "</p>"));
    }
    htmlOutput[0].scrollTop = htmlOutput[0].scrollHeight;
    myLogger.lastMessageType = arguments[1];
  },
};

const mapRenderer = new AppRenderer(myLogger);

$(document).ready(function () {
  /// Build TREE scene
  mapRenderer.init();

  /// Handle file pick
  $("#filePicker").change(function (evt) {
    let file = evt.target.files[0];
    // Disable button
    $("#filePicker").prop("disabled", true);

    mapRenderer.createLocalReader(file, onReaderCreated);
  });

  /// Handle button click
  $("#loadMapBtn").click(onLoadMapClick);
});

/// Callback for when the LocalReader has finished setting up!
async function onReaderCreated() {
  $("#fileMapSelect").removeAttr("disabled");
  $("#loadMapBtn").removeAttr("disabled");

  const mapFileList = await mapRenderer.getMapList();
  const categoryList = mapFileList.reduce((list, map) => {
    if (!list.includes(map.category)) {
      list.push(map.category);
    }
    return list;
  }, []);
  for (const category of categoryList) {
    let opt = document.createElement("option");
    opt.disabled = true;
    opt.innerHTML = category;
    $("#fileMapSelect").append(opt);

    for (const map of mapFileList.filter((m) => m.category === category)) {
      let opt = document.createElement("option");
      opt.value = map.baseId;
      opt.innerHTML = map.name; // whatever property it has
      if (map.baseId === 294938) {
        opt.setAttribute("selected", true);
      }

      // then append it to the select element
      $("#fileMapSelect").append(opt);
    }
  }
}

/// The insterresting part!
function onLoadMapClick() {
  $("#loadMapBtn").prop("disabled", true);
  $("#loadCollBtn").click(loadCollModels);
  $("#loadCollBtn").removeAttr("disabled");
  $("#loadPropsBtn").click(loadPropModels);
  $("#loadPropsBtn").removeAttr("disabled");
  $("#loadZoneBtn").click(loadZoneModels);
  $("#loadZoneBtn").removeAttr("disabled");
  $("#mvntSpeedRange").removeAttr("disabled");
  $("#mvntSpeedRange").change((event) => mapRenderer.setMovementSpeed(event.target.valueAsNumber));
  $("#fogRange").removeAttr("disabled");
  $("#fogRange").change((event) => {
    mapRenderer.setFog(event.target.valueAsNumber);
  });
  $("#controllerReset").click(() => mapRenderer.setupController());
  $("#controllerReset").removeAttr("disabled");

  $("canvas").on("wheel", onMouseWheel);

  mapRenderer.loadMap($("#fileMapSelect").val());

  $("#fileMapSelect").prop("disabled", true);

  /// Setup the logger (hacky way because very verbose)
  T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = function () {
    myLogger.log(arguments[0], arguments[0], arguments[1]);
    console.log(arguments[0], arguments[1]);
  };
}

/// Action when the load zone props button is clicked
function loadZoneModels() {
  const buttonId = "#loadZoneBtn";
  if (!mapRenderer.isZoneModelsLoaded()) {
    mapRenderer.loadZoneModels(function () {
      mapRenderer.toggleZoneModels();
      $(buttonId)[0].innerHTML = $(buttonId)[0].innerHTML.replace("Load", "Unload");
    });
  } else {
    mapRenderer.toggleZoneModels();
    $(buttonId)[0].innerHTML = $(buttonId)[0].innerHTML.replace("Unload", "Load");
  }
}

/// Action when the load props button is clicked
function loadPropModels() {
  const buttonId = "#loadPropsBtn";
  if (!mapRenderer.isPropModelsLoaded()) {
    mapRenderer.loadPropModels(function () {
      mapRenderer.togglePropModels();
      $(buttonId)[0].innerHTML = $(buttonId)[0].innerHTML.replace("Load", "Unload");
    });
  } else {
    mapRenderer.togglePropModels();
    $(buttonId)[0].innerHTML = $(buttonId)[0].innerHTML.replace("Unload", "Load");
  }
}

/// Action when the load collisions button is clicked
function loadCollModels() {
  const buttonId = "#loadCollBtn";
  if (!mapRenderer.isCollModelsLoaded()) {
    mapRenderer.loadCollModels(function () {
      mapRenderer.toggleCollModels();
      $(buttonId)[0].innerHTML = $(buttonId)[0].innerHTML.replace("Load", "Unload");
    });
  } else {
    mapRenderer.toggleCollModels();
    $(buttonId)[0].innerHTML = $(buttonId)[0].innerHTML.replace("Unload", "Load");
  }
}

function onMouseWheel(event) {
  let newSpeed;
  if (event.originalEvent.deltaY < 0) {
    newSpeed = Math.min(mapRenderer.getMovementSpeed() + 100, 10000);
  } else {
    newSpeed = Math.max(mapRenderer.getMovementSpeed() - 100, 500);
  }
  mapRenderer.setMovementSpeed(newSpeed);
  $("#mvntSpeedRange").val(newSpeed);
}
