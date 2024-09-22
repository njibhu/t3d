(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var MapExplorer = {};

	let AppRenderer$1 = class AppRenderer {
	  constructor(logger) {
	    this.logger = logger;

	    /// This example is very inspired by the ModelRenderer example but updated
	    /// using the latest version of the API. This global object for the app contains
	    /// all the important data.

	    /// All renderers must have access to a LocalReader.
	    /// The LocalReader is the object that allows us
	    /// to read from the .dat
	    this.localReader = null;

	    /// The context is an object all the renderer outputs their data to
	    this.context = null;

	    /// THREE js objects
	    this.scene = null;
	    this.skyScene = null;
	    this.camera = null;
	    this.skyCamera = null;
	    this.renderer = null;
	    this.clock = null;
	    this.mouse = null;
	    this.controls = null;
	    this.controlsEnabled = false;

	    /// Data:
	    this._cleanMapData();
	  }

	  /**
	   * Public methods
	   */
	  createLocalReader(file, callback) {
	    this.localReader = T3D.getLocalReader(file, callback, "../static/t3dworker.js", this.logger);
	  }

	  getMapList() {
	    return this.localReader.getMapList();
	  }

	  // Setup schene
	  init() {
	    const canvasWidth = window.innerWidth;
	    const canvasHeight = window.innerHeight;
	    const canvasClearColor = 0x342920; // For happy rendering, always use Van Dyke Brown.
	    const fov = 60;
	    const aspect = canvasWidth / canvasHeight;
	    const fogDistance = Number($("#fogRange").val());

	    this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 100000);
	    this.skyCamera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000000);
	    this.scene = new THREE.Scene();
	    this.skyScene = new THREE.Scene();
	    this.mouse = new THREE.Vector2();

	    this.clock = new THREE.Clock();
	    /// This scene has one ambient light source and three directional lights
	    const ambientLight = new THREE.AmbientLight(0x555555);
	    this.scene.add(ambientLight);

	    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
	    directionalLight1.position.set(0, 0, 1);
	    this.scene.add(directionalLight1);

	    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
	    directionalLight2.position.set(1, 0, 0);
	    this.scene.add(directionalLight2);

	    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.5);
	    directionalLight3.position.set(0, 1, 0);
	    this.scene.add(directionalLight3);

	    // Fog
	    this.scene.fog = new THREE.Fog(0xffffff, fogDistance, fogDistance + 1000);
	    this.camera.far = fogDistance + 1000;
	    this.camera.updateProjectionMatrix();

	    /// Standard THREE renderer with AA
	    this.renderer = new THREE.WebGLRenderer({
	      antialiasing: true,
	      logarithmicDepthBuffer: true,
	      sortObjects: false,
	      stencil: false,
	      premultipliedAlpha: false,
	    });
	    this.renderer.autoClear = false;
	    document.body.appendChild(this.renderer.domElement);
	    this.renderer.setSize(canvasWidth, canvasHeight);
	    this.renderer.setClearColor(canvasClearColor);

	    window.addEventListener("resize", () => {
	      const SCREEN_HEIGHT = window.innerHeight;
	      const SCREEN_WIDTH = window.innerWidth;

	      this.camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
	      this.camera.updateProjectionMatrix();
	      this.skyCamera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
	      this.skyCamera.updateProjectionMatrix();

	      this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	    });

	    this.setupController();

	    /// Note: constant continous rendering from page load
	    this._render();
	  }

	  isCollModelsLoaded() {
	    this.mapData.collision.loaded;
	  }

	  isPropModelsLoaded() {
	    return this.mapData.props.loaded;
	  }

	  isZoneModelsLoaded() {
	    return this.mapData.zone.loaded;
	  }

	  loadMap(mapId) {
	    // Clean previous render states
	    this._cleanMapData();
	    this.mapData.id = mapId;

	    /// Renderer settings (see the documentation of each Renderer for details)
	    const renderers = [
	      {
	        renderClass: T3D.EnvironmentRenderer,
	        settings: {},
	      },
	      {
	        renderClass: T3D.TerrainRenderer,
	        settings: {},
	      },
	    ];
	    /// Load for the first time the renderer and spawn the context
	    T3D.renderMapContentsAsync(
	      this.localReader,
	      this.mapData.id,
	      renderers,
	      (context) => {
	        this._onRendererDone(context);
	      },
	      this.logger
	    );

	    // Cache mapFile for later use
	    if (parseInt(this.mapData.id)) {
	      this.localReader.loadFile(this.mapData.id, (arrayBuffer) => {
	        this.mapData.mapFile = new T3DParser.FileParser(arrayBuffer);
	      });
	    }
	  }

	  loadZoneModels(callback) {
	    this._loadMeshes(T3D.ZoneRenderer, this.mapData.zone, callback);
	  }

	  loadPropModels(callback) {
	    this._loadMeshes(T3D.PropertiesRenderer, this.mapData.props, callback);
	  }

	  loadCollModels(callback) {
	    this._loadMeshes(T3D.HavokRenderer, this.mapData.collision, callback);
	  }

	  setFog(fogDistance) {
	    if (this.scene && this.scene.fog) {
	      this.scene.fog.near = fogDistance;
	      this.scene.fog.far = fogDistance + 1000;
	    }
	    if (this.camera) {
	      this.camera.far = fogDistance + 1000;
	      this.camera.updateProjectionMatrix();
	    }
	  }

	  setMovementSpeed(speed) {
	    if (this.controls) {
	      this.controls.movementSpeed = speed;
	    }
	  }

	  getMovementSpeed() {
	    if (this.controls) {
	      return this.controls.movementSpeed;
	    }

	    return 0;
	  }

	  toggleZoneModels() {
	    return this._toggleModels("zone");
	  }

	  togglePropModels() {
	    return this._toggleModels("props");
	  }

	  toggleCollModels() {
	    return this._toggleModels("collision");
	  }

	  /**
	   * Private methods
	   */

	  _cleanMapData() {
	    this.mapData = {
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
	  }

	  /// Wipes out the data
	  _cleanScene() {
	    for (const type of ["terrain", "props", "zone", "collision"]) {
	      for (const elem of this.mapData[type].data) {
	        this.scene.remove(elem);
	      }
	      this.mapData[type].data = [];
	    }

	    for (const type of ["props", "zone", "collision"]) {
	      this.mapData[type].loaded = false;
	      this.mapData[type].enabled = false;
	    }
	  }

	  /// Run a renderer manually and populates the data object
	  _loadMeshes(rendererClass, outRendererData, callback) {
	    T3D.runRenderer(
	      rendererClass,
	      this.localReader,
	      { visible: true, mapFile: this.mapData.mapFile, showUnmaterialized: false },
	      this.context,
	      () => {
	        outRendererData.data = T3D.getContextValue(this.context, rendererClass, "meshes");
	        outRendererData.loaded = true;
	        callback();
	      }
	    );
	  }

	  setupController() {
	    if (this.controls) {
	      this.controls.dispose();
	    }

	    const controls = new THREE.FlyControls(this.camera, this.renderer.domElement);

	    controls.movementSpeed = Number($("#mvntSpeedRange").val()) | 1000;
	    controls.domElement = this.renderer.domElement;
	    controls.rollSpeed = Math.PI / 6;
	    controls.autoForward = false;
	    controls.dragToLook = true;
	    this.controls = controls;
	  }

	  _render() {
	    commonjsGlobal.stats.update();
	    window.requestAnimationFrame(() => this._render());

	    const delta = this.clock.getDelta();
	    this.controls.update(delta);

	    // Render first skyCamera
	    this.skyCamera.quaternion.copy(this.camera.quaternion);
	    this.renderer.clear(this.renderer.getClearColor());
	    this.renderer.render(this.skyScene, this.skyCamera);

	    this.renderer.render(this.scene, this.camera);
	  }

	  _toggleModels(meshType) {
	    if (this.mapData[meshType].enabled) {
	      for (const elem of this.mapData[meshType].data) {
	        this.scene.remove(elem);
	      }
	      this.mapData[meshType].enabled = false;
	      return false;
	    } else {
	      for (const elem of this.mapData[meshType].data) {
	        this.scene.add(elem);
	      }
	      this.mapData[meshType].enabled = true;
	      return true;
	    }
	  }

	  /// Runs when the ModelRenderer is finished
	  _onRendererDone(context) {
	    this._cleanScene();

	    /// Populate our context with the context returned
	    this.context = context;

	    /// Take all the terrain tiles generated by the TerrainRenderer and add them to the scene
	    for (const elem of T3D.getContextValue(context, T3D.TerrainRenderer, "terrainTiles")) {
	      this.scene.add(elem);
	      this.mapData.terrain.data.push(elem);
	    }

	    /// Skybox
	    const skyBox = T3D.getContextValue(context, T3D.EnvironmentRenderer, "skyBox");
	    this.skyScene.add(skyBox);
	    const hazeColor = T3D.getContextValue(context, T3D.EnvironmentRenderer, "hazeColor");
	    if (hazeColor) {
	      this.renderer.setClearColor(new THREE.Color(hazeColor[2] / 255, hazeColor[1] / 255, hazeColor[0] / 255));
	    }

	    /// Add the water level to the scene
	    const water = T3D.getContextValue(context, T3D.TerrainRenderer, "water");
	    this.scene.add(water);
	    this.mapData.terrain.data.push(water);

	    /// Move the camera initial place depending on the map bounds
	    const bounds = T3D.getContextValue(context, T3D.TerrainRenderer, "bounds");
	    this.camera.position.x = 0;
	    this.camera.position.y = bounds ? bounds.y2 : 0;
	    this.camera.position.z = 0;
	    this.camera.rotation.x = (-90 * Math.PI) / 180;
	  }
	};

	var renderer = AppRenderer$1;

	const AppRenderer = renderer;

	const stats = new Stats();
	$("body").append(stats.domElement);
	$(stats.domElement).hide();
	stats.toggle = () => $(stats.domElement).toggle();
	commonjsGlobal.stats = stats;

	/// Extend Original Logger
	const myLogger = {
	  lastMessageType: null,
	  log: function () {
	    const htmlOutput = $("#log");
	    const str = Array.prototype.slice.call(arguments, 1).join(" ");
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
	    const file = evt.target.files[0];
	    // Disable button
	    $("#filePicker").prop("disabled", true);

	    mapRenderer.createLocalReader(file, onReaderCreated);
	  });

	  /// Handle button click
	  $("#loadMapBtn").click(onLoadMapClick);
	});

	/// Callback for when the LocalReader has finished setting up!
	async function onReaderCreated() {
	  const mapFileList = await mapRenderer.getMapList();
	  const categoryList = mapFileList.reduce((list, map) => {
	    if (!list.includes(map.category)) {
	      list.push(map.category);
	    }
	    return list;
	  }, []);
	  for (const category of categoryList) {
	    const opt = document.createElement("option");
	    opt.disabled = true;
	    opt.innerHTML = category;
	    $("#fileMapSelect").append(opt);

	    for (const map of mapFileList.filter((m) => m.category === category)) {
	      const opt = document.createElement("option");
	      opt.value = map.baseId;
	      opt.innerHTML = map.name; // whatever property it has
	      if (map.baseId === 294938) {
	        opt.setAttribute("selected", true);
	      }

	      // then append it to the select element
	      $("#fileMapSelect").append(opt);
	    }
	  }

	  $("#fileMapSelect").removeAttr("disabled");
	  $("#loadMapBtn").removeAttr("disabled");
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

	return MapExplorer;

})();
//# sourceMappingURL=index.js.map
