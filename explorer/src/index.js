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
  mapRenderer.setupScene();

  /// Handle file pick
  $("#filePicker").change(function (evt) {
    let file = evt.target.files[0];
    // Disable button
    $("#filePicker").prop("disabled", true);

    mapRenderer.localReader = T3D.getLocalReader(file, onReaderCreated, "./static/t3dworker.js", myLogger);
  });

  /// Handle button click
  $("#loadMapBtn").click(onLoadMapClick);
});

/// Callback for when the LocalReader has finished setting up!
function onReaderCreated() {
  $("#fileMapSelect").removeAttr("disabled");
  $("#loadMapBtn").removeAttr("disabled");

  const mapFileList = mapRenderer.localReader.getMapList();
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
  $("#mvntSpeedRange").change(changeMovementSpeed);
  $("#fogRange").removeAttr("disabled");
  $("#fogRange").change((event) => {
    mapRenderer.setFog(event.target.valueAsNumber);
  });

  mapRenderer.loadMap($("#fileMapSelect").val());

  $("#fileMapSelect").prop("disabled", true);

  /// Setup the logger (hacky way because very verbose)
  T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = function () {
    myLogger.log(arguments[0], arguments[0], arguments[1]);
    console.log(arguments[0], arguments[1]);
  };
}

/// Run a renderer manually and populates the data object
function loadMeshes(rendererClass, outRendererData, callback) {
  T3D.runRenderer(
    rendererClass,
    mapRenderer.localReader,
    { visible: true, mapFile: mapRenderer.mapData.mapFile, showUnmaterialized: false },
    mapRenderer.context,
    function () {
      outRendererData.data = T3D.getContextValue(mapRenderer.context, rendererClass, "meshes");
      outRendererData.loaded = true;
      callback();
    }
  );
}

function toggleMeshes(meshType, buttonId) {
  let mapData = mapRenderer.mapData[meshType];
  if (!mapData.enabled) {
    for (const elem of mapData.data) {
      mapRenderer.scene.add(elem);
    }
    mapData.enabled = true;
    $(buttonId)[0].innerHTML = $(buttonId)[0].innerHTML.replace("Load", "Unload");
  } else {
    for (const elem of mapData.data) {
      mapRenderer.scene.remove(elem);
    }
    mapData.enabled = false;
    $(buttonId)[0].innerHTML = $(buttonId)[0].innerHTML.replace("Unload", "Load");
  }
}

/// Action when the load zone props button is clicked
function loadZoneModels() {
  if (!mapRenderer.mapData.zone.loaded) {
    loadMeshes(T3D.ZoneRenderer, mapRenderer.mapData.zone, function () {
      toggleMeshes("zone", "#loadZoneBtn");
    });
  } else {
    toggleMeshes("zone", "#loadZoneBtn");
  }
}

/// Action when the load props button is clicked
function loadPropModels() {
  if (!mapRenderer.mapData.props.loaded) {
    loadMeshes(T3D.PropertiesRenderer, mapRenderer.mapData.props, function () {
      toggleMeshes("props", "#loadPropsBtn");
    });
  } else {
    toggleMeshes("props", "#loadPropsBtn");
  }
}

/// Action when the load collisions button is clicked
function loadCollModels() {
  if (!mapRenderer.mapData.collision.loaded) {
    loadMeshes(T3D.HavokRenderer, mapRenderer.mapData.collision, function () {
      toggleMeshes("collision", "#loadCollBtn");
    });
  } else {
    toggleMeshes("collision", "#loadCollBtn");
  }
}

function changeMovementSpeed(evt) {
  if (mapRenderer.controls) {
    mapRenderer.controls.movementSpeed = evt.target.valueAsNumber;
  }
}
