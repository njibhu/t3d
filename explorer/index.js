(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var src = {};

	const CANVAS_CLEAR_COLOR = 0x342920;
	const FOG_LENGTH = 5000;

	let AppRenderer$1 = class AppRenderer {
	  constructor(stats) {
	    this.localReader = undefined;
	    this._threeContext = {};
	    this._mapMeshes = [];
	    this._mapContext = undefined;
	    this._renderOptions = undefined;
	    this.stats = stats;

	    // Defaults
	    this.fog = 25000;
	    this.movementSpeed = 10000;
	    this.lightIntensity = 0.5;
	    this.loadedMapID = undefined;
	    this.controllerType = "fly";

	    this.webGLRendererOptions = {
	      sortObjects: false,
	      logarithmicDepthBuffer: true,
	      stencil: false,
	      premultipliedAlpha: false,
	      antialiasing: true,
	    };
	  }

	  /** PUBLIC methods */
	  createLocalReader(file, callback) {
	    this.localReader = T3D.getLocalReader(file, callback, "./static/t3dworker.js");
	  }

	  getMapList() {
	    return this.localReader.getMapList();
	  }

	  scanArchiveForMaps() {
	    return this.localReader.readFileList();
	  }

	  loadMap(mapId, renderOptions, callback) {
	    if (this.loadedMapID) {
	      this.cleanupMap();
	    }

	    this.loadedMapID = mapId;
	    this._renderOptions = renderOptions;

	    const renderers = [
	      { renderClass: T3D.EnvironmentRenderer, settings: {} },
	      { renderClass: T3D.TerrainRenderer, settings: {} },
	    ];

	    if (renderOptions.zone) {
	      renderers.push({ renderClass: T3D.ZoneRenderer, settings: { visible: true } });
	    }
	    if (renderOptions.props) {
	      renderers.push({ renderClass: T3D.PropertiesRenderer, settings: { visible: true } });
	    }
	    if (renderOptions.collisions) {
	      renderers.push({ renderClass: T3D.HavokRenderer, settings: { visible: true } });
	    }

	    T3D.renderMapContentsAsync(this.localReader, this.loadedMapID, renderers, (context) => {
	      this._loadMapCallback(context, renderOptions, callback);
	    });
	  }

	  setFogDistance(value) {
	    this.fog = value;
	    if (this._threeContext.scene && this._threeContext.scene.fog) {
	      this._threeContext.scene.fog.near = this.fog;
	      this._threeContext.scene.fog.far = this.fog + FOG_LENGTH;
	    }
	    if (this._threeContext.camera) {
	      this._threeContext.camera.far = this.fog + FOG_LENGTH;
	      this._threeContext.camera.updateProjectionMatrix();
	    }
	  }

	  setMovementSpeed(value) {
	    this.movementSpeed = value;
	    if (this._threeContext.controls) {
	      this._threeContext.controls.movementSpeed = value;
	    }
	  }

	  move(x, y, z) {
	    if (x) {
	      this._threeContext.controls.object.position.x = x;
	    }
	    if (y) {
	      this._threeContext.controls.object.position.y = y;
	    }
	    if (z) {
	      this._threeContext.controls.object.position.z = z;
	    }
	  }

	  rotate(rx, ry, rz) {
	    if (rx) {
	      this._threeContext.controls.object.rotation.x = rx;
	    }
	    if (ry) {
	      this._threeContext.controls.object.rotation.y = ry;
	    }
	    if (rz) {
	      this._threeContext.controls.object.rotation.z = rz;
	    }
	  }

	  setLightIntensity(value) {
	    this.lightIntensity = value;
	    if (this._threeContext.sceneLights) {
	      for (const light of this._threeContext.sceneLights) {
	        light.intensity = value;
	      }
	    }
	  }

	  takeScreenShot() {
	    const newWindow = window.open("", "");
	    newWindow.document.title = "T3D Explorer Screenshot";
	    const image = new Image();

	    this._threeContext.renderer.clear(this._threeContext.renderer.getClearColor());
	    // Render first skyCamera
	    this._threeContext.renderer.render(this._threeContext.skyScene, this._threeContext.skyCamera);
	    this._threeContext.renderer.render(this._threeContext.scene, this._threeContext.camera);
	    image.src = this._threeContext.renderer.domElement.toDataURL();
	    newWindow.document.body.appendChild(image);
	  }

	  setupController(controllerType = "fly") {
	    if (this._threeContext.controls) {
	      this._threeContext.controls.dispose();
	    }

	    if (controllerType === "orbital") {
	      this._threeContext.controls = new THREE.OrbitControls(
	        this._threeContext.camera,
	        this._threeContext.renderer.domElement
	      );

	      this._threeContext.controls.enableZoom = true;
	    } else if (controllerType === "fly") {
	      this._threeContext.controls = new THREE.FlyControls(
	        this._threeContext.camera,
	        this._threeContext.renderer.domElement
	      );

	      this._threeContext.controls.movementSpeed = this.movementSpeed;
	      this._threeContext.controls.rollSpeed = Math.PI / 6;
	      this._threeContext.controls.autoForward = false;
	      this._threeContext.controls.dragToLook = true;
	    } else {
	      throw new Error("Invalid controller type");
	    }

	    this.controllerType = controllerType;
	  }

	  cleanupMap() {
	    this._mapContext = undefined;
	    this._renderOptions = undefined;
	    this.loadedMapID = undefined;
	    for (const mesh of this._mapMeshes) {
	      this._threeContext.scene.remove(mesh);
	    }
	    for (const skyBox of this._threeContext.skyScene.children) {
	      this._threeContext.skyScene.remove(skyBox);
	    }
	    this._mapMeshes = [];
	  }

	  setupScene() {
	    const { _threeContext: context } = this;

	    context.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100000);
	    context.skyCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100000);
	    context.scene = new THREE.Scene();
	    context.skyScene = new THREE.Scene();
	    context.clock = new THREE.Clock();

	    context.ambientLight = new THREE.AmbientLight(0x555555);
	    context.scene.add(context.ambientLight);

	    context.sceneLights = [
	      new THREE.DirectionalLight(0xffffff, this.lightIntensity),
	      new THREE.DirectionalLight(0xffffff, this.lightIntensity),
	      new THREE.DirectionalLight(0xffffff, this.lightIntensity),
	    ];
	    context.sceneLights[0].position.set(0, 0, 1);
	    context.sceneLights[0].position.set(0, 1, 0);
	    context.sceneLights[0].position.set(1, 0, 0);
	    for (const light of context.sceneLights) {
	      context.scene.add(light);
	    }

	    context.scene.fog = new THREE.Fog(0xffffff, this.fog, this.fog + FOG_LENGTH);
	    context.camera.far = this.fog + FOG_LENGTH;
	    context.camera.updateProjectionMatrix();

	    this.setupWebGLRenderer(true);
	    this.setupController();
	    this._render();
	  }

	  onWindowResize() {
	    const { _threeContext: context } = this;
	    if (context.renderer && context.camera && context.skyCamera) {
	      context.camera.aspect = window.innerWidth / window.innerHeight;
	      context.camera.updateProjectionMatrix();
	      context.renderer.setSize(window.innerWidth, window.innerHeight);
	      context.skyCamera.aspect = window.innerWidth / window.innerHeight;
	      context.skyCamera.updateProjectionMatrix();
	    }
	  }

	  // This function is safe to be called whenever the active webgl context is not rendering on screen
	  setupWebGLRenderer(hidden) {
	    const { _threeContext: context } = this;
	    const oldRenderer = context.renderer;
	    context.renderer = new THREE.WebGLRenderer(this.webGLRendererOptions);
	    context.renderer.autoClear = false;
	    context.renderer.setSize(window.innerWidth, window.innerHeight);
	    context.renderer.setClearColor(CANVAS_CLEAR_COLOR);
	    if (hidden) {
	      $(context.renderer.domElement).hide();
	    }
	    if (oldRenderer) {
	      $(oldRenderer.domElement).remove();
	    }
	    $("#explorer").append(context.renderer.domElement);
	  }

	  getUrlData() {
	    const controls = this._threeContext.controls;
	    const pos = controls.object.position;
	    const rot = controls.object.rotation;
	    return {
	      map: this.loadedMapID,
	      x: Math.round(pos.x * 1000) / 1000,
	      y: Math.round(pos.y * 1000) / 1000,
	      z: Math.round(pos.z * 1000) / 1000,
	      rx: Math.round(rot.x * 10000) / 10000,
	      ry: Math.round(rot.y * 10000) / 10000,
	      rz: Math.round(rot.z * 10000) / 10000,
	      cameraType: this.controllerType,
	      loadZone: !!this._renderOptions.zone,
	      loadProp: !!this._renderOptions.props,
	      showHavok: !!this._renderOptions.collisions,
	      fog: this.fog,
	    };
	  }

	  /** PRIVATE methods */
	  _render() {
	    this.stats.update();
	    window.requestAnimationFrame(() => this._render());
	    this._threeContext.controls.update(this._threeContext.clock.getDelta());

	    this._threeContext.renderer.clear(this._threeContext.renderer.getClearColor());

	    // Render first skyCamera
	    this._threeContext.skyCamera.quaternion.copy(this._threeContext.camera.quaternion);
	    this._threeContext.renderer.render(this._threeContext.skyScene, this._threeContext.skyCamera);

	    this._threeContext.renderer.render(this._threeContext.scene, this._threeContext.camera);
	  }

	  _loadMapCallback(context, renderOptions, externalCallback) {
	    this._mapContext = context;

	    // Add all the data from the context to the threejs scene
	    for (const tile of T3D.getContextValue(context, T3D.TerrainRenderer, "terrainTiles")) {
	      this._threeContext.scene.add(tile);
	      this._mapMeshes.push(tile);
	    }
	    const water = T3D.getContextValue(context, T3D.TerrainRenderer, "water");
	    this._threeContext.scene.add(water);
	    this._mapMeshes.push(water);

	    const skyBox = T3D.getContextValue(context, T3D.EnvironmentRenderer, "skyBox");
	    this._threeContext.skyScene.add(skyBox);
	    const hazeColor = T3D.getContextValue(context, T3D.EnvironmentRenderer, "hazeColor");
	    if (hazeColor) {
	      this._threeContext.renderer.setClearColor(
	        new THREE.Color(hazeColor[2] / 255, hazeColor[1] / 255, hazeColor[0] / 255)
	      );
	    }

	    if (renderOptions.zone) {
	      for (const zoneModel of T3D.getContextValue(context, T3D.ZoneRenderer, "meshes")) {
	        this._threeContext.scene.add(zoneModel);
	        this._mapMeshes.push(zoneModel);
	      }
	    }
	    if (renderOptions.props) {
	      for (const propModel of T3D.getContextValue(context, T3D.PropertiesRenderer, "meshes")) {
	        this._threeContext.scene.add(propModel);
	        this._mapMeshes.push(propModel);
	      }
	    }
	    if (renderOptions.collisions) {
	      for (const collModel of T3D.getContextValue(context, T3D.HavokRenderer, "meshes")) {
	        this._threeContext.scene.add(collModel);
	        this._mapMeshes.push(collModel);
	      }
	    }

	    // Move camera
	    const bounds = T3D.getContextValue(context, T3D.TerrainRenderer, "bounds");
	    this._resetCameraLocation(bounds);

	    // If set fog is too small to see the map we increase it
	    if (this.fog < bounds.y2 * 1.5) {
	      this.setFogDistance(bounds.y2 * 2);
	    }

	    return externalCallback();
	  }

	  _resetCameraLocation(bounds) {
	    if (this.controllerType === "fly") {
	      this._threeContext.camera.position.x = 0;
	      this._threeContext.camera.position.y = bounds ? bounds.y2 : 0;
	      this._threeContext.camera.position.z = 0;
	      this._threeContext.camera.rotation.x = (-90 * Math.PI) / 180;
	    } else {
	      this._threeContext.camera.position.x = 0;
	      this._threeContext.camera.position.y = 0;
	      this._threeContext.camera.position.z = 0;
	    }
	  }
	};

	var renderer = AppRenderer$1;

	let UI$1 = class UI {
	  constructor(appRenderer) {
	    this.appRenderer = appRenderer;

	    this.showingProgress = false;
	    this.archiveLoaded = false;
	    this.mapFileList = [];
	    this.autoLoad = undefined;
	    this.shouldUpdateUrl = false;

	    this.urlUpdateInterval = setInterval(() => this.updateUrl(), 100);
	    this.lastUrlData = "";
	  }

	  init() {
	    this.appRenderer.setupScene();

	    T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = (name, value) => {
	      console.log(name, value);
	      if (this.showingProgress) {
	        $("#loadingName").text(name);
	        $("#loadingValue").text(`${value}%`);
	      }
	    };

	    T3D.Logger.logFunctions[T3D.Logger.TYPE_ERROR] = (error) => {
	      console.error(error);
	      // If we receive an error before the archive is loaded that means that parsing the archive failed
	      if (!this.archiveLoaded) {
	        $("#intro").fadeIn();
	      }
	    };

	    this.setupIntro();
	    this.setupMapChoice();
	    this.setupMapExplorer();

	    this.appRenderer.setMovementSpeed(parseInt($("#mvntSpeedRange").val(), 10));
	    this.appRenderer.setFogDistance(parseInt($("#fogRange").val(), 10));
	    this.appRenderer.renderHook = (data) => this.updateUrl(data);

	    $("canvas").on("wheel", (event) => this.onMouseWheel(event));

	    this.checkAutoLoad();
	  }

	  /*
	   * SETUPS
	   */
	  setupIntro() {
	    $("#filePickerInput").on("change", (event) => this.onFileSelected(event));
	    $("#filePickerButton").on("click", () => $("#filePickerInput").trigger("click"));
	  }
	  setupMapChoice() {
	    $("#categorySelect").on("change", () => this.genMapSelect());
	    $("#mapLoadButton").on("click", () => this.onMapLoadClick());
	    $("#scanMapLink").on("click", () => this.onScanMapClick());
	  }
	  setupMapExplorer() {
	    $("#switchControllerType").on("click", () => {
	      if (this.appRenderer.controllerType === "fly") {
	        this.appRenderer.setupController("orbital");
	      } else {
	        this.appRenderer.setupController("fly");
	      }
	    });
	    $("#goToMapSelectButton").on("click", () => this.onBackToMapSelect());
	    $("#takeScreenshot").on("click", () => this.appRenderer.takeScreenShot());
	    $("#mvntSpeedRange").on("change", (event) => this.appRenderer.setMovementSpeed(event.target.valueAsNumber));
	    $("#fogRange").on("change", (event) => this.appRenderer.setFogDistance(event.target.valueAsNumber));

	    window.addEventListener("resize", () => this.appRenderer.onWindowResize());
	  }

	  /*
	   * HANDLERS
	   */
	  onFileSelected(event) {
	    const file = event.target.files[0];
	    $("#intro").slideUp(() => {
	      this.appRenderer.createLocalReader(file, async () => {
	        this.archiveLoaded = true;
	        this.mapFileList = await this.appRenderer.getMapList();
	        this.fillMapChoiceSelect();
	        // User might enter an non-existant ID so we only trigger autoload if we find the map
	        if (this.autoLoad && this.mapFileList.find((i) => i.baseId === this.autoLoad.map)) {
	          return this.onAutoLoad();
	        }
	        $("#choose-map").fadeIn();
	      });
	    });
	  }

	  onAutoLoad() {
	    const mapId = this.autoLoad.map;
	    const renderOptions = {
	      zone: this.autoLoad.loadZone === undefined ? false : this.autoLoad.loadZone,
	      props: this.autoLoad.loadProp === undefined ? true : this.autoLoad.loadProp,
	      collisions: this.autoLoad.showHavok === undefined ? false : this.autoLoad.showHavok,
	    };
	    this.showingProgress = true;
	    $("#loading-ui").fadeIn();
	    this.appRenderer.loadMap(mapId, renderOptions, () => {
	      this.appRenderer.setupController(this.autoLoad.cameraType || "fly");
	      this.appRenderer.move(this.autoLoad.x, this.autoLoad.y, this.autoLoad.z);
	      this.appRenderer.rotate(this.autoLoad.rx, this.autoLoad.ry, this.autoLoad.rz);
	      // Don't forget to cleanup autoLoad, if not it might break map choice UI
	      this.autoLoad = undefined;
	      this.onMapLoaded();
	    });
	  }

	  onMapLoadClick() {
	    // Anti aliasing option can only be enabled when creating the webgl context
	    // So we update that first if needed
	    const aaEnabled = $("#enableAA").is(":checked");
	    if (this.appRenderer.webGLRendererOptions.antialiasing !== aaEnabled) {
	      this.appRenderer.webGLRendererOptions.antialiasing = aaEnabled;
	      this.appRenderer.setupWebGLRenderer(true);
	    }

	    const mapId = $("#mapSelect").val();
	    const renderOptions = {
	      zone: $("#loadZone").is(":checked"),
	      props: $("#loadProps").is(":checked"),
	      collisions: $("#loadColl").is(":checked"),
	    };
	    $("#choose-map").slideUp(() => {
	      this.showingProgress = true;
	      $("#loading-ui").fadeIn();
	    });
	    this.appRenderer.loadMap(mapId, renderOptions, () => {
	      // Reset the position of the camera if we already loaded a previous map
	      this.appRenderer.setupController();
	      this.onMapLoaded();
	    });
	  }

	  onMapLoaded() {
	    this.showingProgress = false;
	    $("#loading-ui").slideUp(() => {
	      $("canvas").fadeIn();
	      $("#controls").fadeIn();
	      $("#loadingName").text("Loading...");
	      $("#loadingValue").text("");
	    });
	    // Sync the input ranges with their value in the appRenderer
	    $("#fogRange").val(this.appRenderer.fog);
	    $("#mvntSpeedRange").val(this.appRenderer.movementSpeed);
	    this.shouldUpdateUrl = true;
	  }

	  onBackToMapSelect() {
	    $("#controls").slideUp(() => {
	      $("canvas").hide(0);
	      $("#choose-map").fadeIn();
	      this.appRenderer.cleanupMap();
	      this.updateUrl(true);
	      this.shouldUpdateUrl = false;
	    });
	  }

	  onFileScanDone() {
	    this.showingProgress = false;
	    $("#loading-ui").slideUp(() => {
	      $("#choose-map").fadeIn();
	      $("#loadingName").text("Loading...");
	      $("#loadingValue").text("");
	    });
	  }

	  onScanMapClick() {
	    $("#choose-map").slideUp(() => {
	      $("#loadingName").text("Scanning...");
	      this.showingProgress = true;
	      $("#loading-ui").fadeIn(async () => {
	        await this.appRenderer.scanArchiveForMaps();
	        this.mapFileList = await this.appRenderer.getMapList();
	        this.fillMapChoiceSelect();
	        this.onFileScanDone();
	      });
	    });
	  }

	  onMouseWheel(event) {
	    const newSpeed =
	      event.originalEvent.deltaY < 0
	        ? Math.min(this.appRenderer.movementSpeed + 100, 10000)
	        : Math.max(this.appRenderer.movementSpeed - 100, 500);

	    this.appRenderer.setMovementSpeed(newSpeed);
	    $("#mvntSpeedRange").val(newSpeed);
	  }

	  /* UTILS */

	  /**
	   * This function generates the content of the map selector
	   * and NOT the category one
	   */
	  genMapSelect() {
	    const category = $("#categorySelect").val();
	    $("#mapSelect").empty();
	    for (const map of this.mapFileList) {
	      if (map.category === category) {
	        const opt = document.createElement("option");
	        opt.value = map.baseId;
	        opt.innerHTML = map.name;
	        $("#mapSelect").append(opt);
	      }
	    }
	  }

	  /**
	   * This function generates the content of the category selector
	   * and NOT the map one
	   */
	  fillMapChoiceSelect() {
	    const categoryList = this.mapFileList
	      .sort((a, b) => a.categoryIndex - b.categoryIndex)
	      .reduce((categories, map) => {
	        if (categories.indexOf(map.category) === -1) {
	          categories.push(map.category);
	        }
	        return categories;
	      }, []);
	    for (const category of categoryList) {
	      const opt = document.createElement("option");
	      opt.value = category;
	      opt.innerHTML = category;
	      $("#categorySelect").append(opt);
	    }
	    this.genMapSelect();
	  }

	  updateUrl(shouldClear = false) {
	    if (this.shouldUpdateUrl) {
	      if (shouldClear) {
	        window.location.hash = "";
	      } else {
	        const urlData = $.param(this.appRenderer.getUrlData());
	        if (this.lastUrlData !== urlData) {
	          window.location.hash = urlData;
	          this.lastUrlData = urlData;
	        }
	      }
	    }
	  }

	  checkAutoLoad() {
	    const urlData = getParsedUrl();
	    if (urlData.map) {
	      this.autoLoad = urlData;
	    }
	  }
	};

	function getParsedUrl() {
	  const data = deparam(window.location.hash.slice(1));
	  data.map = data.map ? parseInt(data.map) : undefined;
	  data.x = data.x ? parseInt(data.x) : undefined;
	  data.y = data.y ? parseInt(data.y) : undefined;
	  data.z = data.z ? parseInt(data.z) : undefined;
	  data.rx = data.rx ? parseFloat(data.rx) : undefined;
	  data.ry = data.ry ? parseFloat(data.ry) : undefined;
	  data.rz = data.rz ? parseFloat(data.rz) : undefined;
	  data.loadZone = data.loadZone ? data.loadZone === "true" : undefined;
	  data.loadProp = data.loadProp ? data.loadProp === "true" : undefined;
	  data.showHavok = data.showHavok ? data.showHavok === "true" : undefined;
	  data.fog = data.fog ? parseInt(data.fog) : undefined;

	  // Backward compatibility with Tyria3DApp
	  if (data.pitch && data.yaw) {
	    const pitch = parseFloat(data.pitch);
	    const yaw = parseFloat(data.yaw);
	    // convert pitch yaw to xyz rotations:
	    data.rx = -Math.cos(yaw) * Math.cos(pitch);
	    data.ry = Math.sin(yaw) * Math.cos(pitch);
	    data.rz = -Math.sin(pitch);
	  }

	  return data;
	}

	function deparam(queryString) {
	  try {
	    const parameters = {};
	    const chunks = queryString.split("&");
	    for (const chunk of chunks) {
	      const [key, value] = chunk.split("=");
	      parameters[decodeURIComponent(key)] = decodeURIComponent(value);
	    }
	    return parameters;
	  } catch (error) {
	    console.error(error);
	    return {};
	  }
	}

	var ui$1 = UI$1;

	const AppRenderer = renderer;
	const UI = ui$1;

	const stats = new Stats();
	$("body").append(stats.domElement);
	$(stats.domElement).hide();
	stats.toggle = () => $(stats.domElement).toggle();

	const appRenderer = new AppRenderer(stats);
	const ui = new UI(appRenderer);

	ui.init();

	// Allow user to access appRenderer
	// This is not used by the app itself
	commonjsGlobal.appRenderer = appRenderer;
	commonjsGlobal.ui = ui;
	commonjsGlobal.stats = stats;

	return src;

})();
//# sourceMappingURL=index.js.map
