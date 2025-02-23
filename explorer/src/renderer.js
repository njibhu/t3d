import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";

const CANVAS_CLEAR_COLOR = 0x342920;
const FOG_LENGTH = 5000;

export default class AppRenderer {
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
    this.lightIntensity = 1.25;
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

    this._threeContext.renderer.clear();
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
      this._threeContext.controls = new MapControls(this._threeContext.camera, this._threeContext.renderer.domElement);
    } else if (controllerType === "fly") {
      this._threeContext.controls = new FlyControls(this._threeContext.camera, this._threeContext.renderer.domElement);

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

    this._threeContext.renderer.clear();

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
      this._threeContext.camera.position.y = bounds ? bounds.y2 : 0;
      this._threeContext.camera.position.z = 0;
    }
  }
}
