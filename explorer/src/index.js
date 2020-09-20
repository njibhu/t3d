/// This example is very inspired by the ModelRenderer example but updated
/// using the latest version of the API. This global object for the app contains
/// all the important data.
const cleanMapData = {
  id: null,
  mapFile: null,
  terrain: {
    data: [],
  },
  collision: {
    enabled: false,
    loaded: false,
    data: [],
  },
  props: {
    enabled: false,
    loaded: false,
    data: [],
  },
  zone: {
    enabled: false,
    loaded: false,
    data: [],
  },
};

const mapRenderer = {
  /// All renderers must have access to a LocalReader.
  /// The LocalReader is the object that allows us
  /// to read from the .dat
  localReader: null,

  /// The context is an object all the renderer outputs their data to
  context: null,

  /// THREE js objects
  scene: null,
  camera: null,
  renderer: null,
  clock: null,
  mouse: null,
  controls: null,
  controlsEnabled: false,

  /// Data:
  mapData: Object.assign({}, cleanMapData),
};

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

$(document).ready(function () {
  /// Build TREE scene
  setupScene();

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
    setFog(event.target.valueAsNumber);
  });

  // Clean previous render states
  mapRenderer.mapData = Object.assign({}, cleanMapData);

  /// Get selected file id
  mapRenderer.mapData.id = $("#fileMapSelect").val();
  console.log($("#fileMapSelect").val());
  $("#fileMapSelect").prop("disabled", true);

  /// Renderer settings (see the documentation of each Renderer for details)
  let renderers = [
    {
      renderClass: T3D.EnvironmentRenderer,
      settings: {},
    },
    {
      renderClass: T3D.TerrainRenderer,
      settings: {},
    },
  ];

  /// Setup the logger (hacky way because very verbose)
  T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = function () {
    myLogger.log(arguments[0], arguments[0], arguments[1]);
    console.log(arguments[0], arguments[1]);
  };

  /// Load for the first time the renderer and spawn the context
  T3D.renderMapContentsAsync(mapRenderer.localReader, mapRenderer.mapData.id, renderers, onRendererDone, myLogger);

  /// And store the mapfile for future use
  loadMapFile(mapRenderer.mapData.id, function (data) {
    mapRenderer.mapData.mapFile = data;
  });
}

/// Runs when the ModelRenderer is finshed
function onRendererDone(context) {
  cleanScene();

  /// Populate our context with the context returned
  mapRenderer.context = context;

  /// Take all the terrain tiles generated by the TerrainRenderer and add them to the scene
  for (const elem of T3D.getContextValue(context, T3D.TerrainRenderer, "terrainTiles")) {
    mapRenderer.scene.add(elem);
    mapRenderer.mapData.terrain.data.push(elem);
  }

  /// Add the water level to the scene
  let water = T3D.getContextValue(context, T3D.TerrainRenderer, "water");
  mapRenderer.scene.add(water);
  mapRenderer.mapData.terrain.data.push(water);

  /// Move the camera initial place depending on the map bounds
  let bounds = T3D.getContextValue(context, T3D.TerrainRenderer, "bounds");
  mapRenderer.camera.position.x = 0;
  mapRenderer.camera.position.y = bounds ? bounds.y2 : 0;
  mapRenderer.camera.position.z = 0;
  mapRenderer.camera.rotation.x = (-90 * Math.PI) / 180;
}

/// It's usually not needed to keep the mapFile independently but
/// because we're loading the colision/props/zone models manually, it is.
function loadMapFile(fileId, callback) {
  if (parseInt(fileId)) {
    mapRenderer.localReader.loadFile(fileId, function (arrayBuffer) {
      let ds = new DataStream(arrayBuffer, 0, DataStream.LITTLE_ENDIAN);
      let mapFile = new T3D.GW2File(ds, 0);
      callback(mapFile);
    });
  }
}

/// Run a renderer manually and populates the data object
function loadMeshes(rendererClass, outRendererData, callback) {
  T3D.runRenderer(
    rendererClass,
    mapRenderer.localReader,
    { visible: true, mapFile: mapRenderer.mapData.mapFile },
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

/// Wipes out the data
function cleanScene() {
  for (const type of ["terrain", "props", "zone", "collision"]) {
    for (const elem of mapRenderer.mapData[type].data) {
      mapRenderer.scene.remove(elem);
    }
    mapRenderer.mapData[type].data = [];
  }

  for (const type of ["props", "zone", "collision"]) {
    mapRenderer.mapData[type].loaded = false;
    mapRenderer.mapData[type].enabled = false;
  }
}

/// Basic THREE stuff, don't mind it
function setupScene() {
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  let canvasClearColor = 0x342920; // For happy rendering, always use Van Dyke Brown.
  let fov = 60;
  let aspect = canvasWidth / canvasHeight;
  const fogDistance = Number($("#fogRange").val());

  mapRenderer.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 100000);

  mapRenderer.scene = new THREE.Scene();

  mapRenderer.mouse = new THREE.Vector2();

  mapRenderer.clock = new THREE.Clock();
  /// This scene has one ambient light source and three directional lights
  let ambientLight = new THREE.AmbientLight(0x555555);
  mapRenderer.scene.add(ambientLight);

  let directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight1.position.set(0, 0, 1);
  mapRenderer.scene.add(directionalLight1);

  let directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight2.position.set(1, 0, 0);
  mapRenderer.scene.add(directionalLight2);

  let directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight3.position.set(0, 1, 0);
  mapRenderer.scene.add(directionalLight3);

  // Fog
  mapRenderer.scene.fog = new THREE.Fog(0xffffff, fogDistance, fogDistance + 1000);
  mapRenderer.camera.far = fogDistance + 1000;
  mapRenderer.camera.updateProjectionMatrix();

  /// Standard THREE renderer with AA
  mapRenderer.renderer = new THREE.WebGLRenderer({
    antialiasing: true,
    logarithmicDepthBuffer: true,
    sortObjects: false,
    stencil: false,
    premultipliedAlpha: false,
  });
  document.body.appendChild(mapRenderer.renderer.domElement);
  mapRenderer.renderer.setSize(canvasWidth, canvasHeight);
  mapRenderer.renderer.setClearColor(canvasClearColor);

  window.addEventListener("resize", () => {
    const SCREEN_HEIGHT = window.innerHeight;
    const SCREEN_WIDTH = window.innerWidth;

    mapRenderer.camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    mapRenderer.camera.updateProjectionMatrix();

    mapRenderer.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  });

  setupController();

  /// Note: constant continous rendering from page load
  render();
}

function setFog(fogDistance) {
  if (mapRenderer.scene && mapRenderer.scene.fog) {
    mapRenderer.scene.fog.near = fogDistance;
    mapRenderer.scene.fog.far = fogDistance + 1000;
  }
  if (mapRenderer.camera) {
    mapRenderer.camera.far = fogDistance + 1000;
    mapRenderer.camera.updateProjectionMatrix();
  }
}

function setupController() {
  if (!mapRenderer.controls) {
    let controls = new THREE.FlyControls(mapRenderer.camera, mapRenderer.renderer.domElement);

    controls.movementSpeed = Number($("#mvntSpeedRange").val()) | 1000;
    controls.domElement = mapRenderer.renderer.domElement;
    controls.rollSpeed = Math.PI / 6;
    controls.autoForward = false;
    controls.dragToLook = true;
    mapRenderer.controls = controls;
  }
}

function render() {
  window.requestAnimationFrame(render);

  let delta = mapRenderer.clock.getDelta();
  mapRenderer.controls.update(delta);

  mapRenderer.renderer.render(mapRenderer.scene, mapRenderer.camera);
}
