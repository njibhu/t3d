import $ from "jquery";
import T3D from "t3d-lib";
import * as THREE from "three";
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
    this.useEnvironmentLighting = true;
    this.directionalLightIntensity = 1;
    this.ambientLightIntensity = 1;
    this.fogHazeStrength = 1;
    this.terrainContrast = 0.85;
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
    this._applyFog();
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
    this.setDirectionalLightIntensity(value);
  }

  setRealLightingEnabled(value) {
    this.useEnvironmentLighting = value;
    this._applySceneEnvironment();
  }

  setDirectionalLightIntensity(value) {
    this.directionalLightIntensity = value;
    this._applySceneEnvironment();
  }

  setAmbientLightIntensity(value) {
    this.ambientLightIntensity = value;
    this._applySceneEnvironment();
  }

  setFogHazeStrength(value) {
    this.fogHazeStrength = value;
    this._applyFog();
  }

  setTerrainContrast(value) {
    this.terrainContrast = value;
    this._applyTerrainMaterialSettings();
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
    this._terrainTiles = [];
    this._environmentProfile = undefined;
    this._fogProfile = undefined;
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
    context.scene.fog = new THREE.Fog(0xffffff, this.fog, this.fog + FOG_LENGTH);

    this.setupWebGLRenderer(true);
    this._applySceneEnvironment();
    this._applyFog();
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
      useRealLighting: this.useEnvironmentLighting,
      directionalLightIntensity: this.directionalLightIntensity,
      ambientLightIntensity: this.ambientLightIntensity,
      fogHazeStrength: this.fogHazeStrength,
      terrainContrast: this.terrainContrast,
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
    this._terrainTiles = [];
    for (const tile of T3D.getContextValue(context, T3D.TerrainRenderer, "terrainTiles")) {
      this._threeContext.scene.add(tile);
      this._mapMeshes.push(tile);
      this._terrainTiles.push(tile);
    }
    const water = T3D.getContextValue(context, T3D.TerrainRenderer, "water");
    this._threeContext.scene.add(water);
    this._mapMeshes.push(water);

    const skyBox = T3D.getContextValue(context, T3D.EnvironmentRenderer, "skyBox");
    this._threeContext.skyScene.add(skyBox);
    this._environmentProfile = T3D.getContextValue(context, T3D.EnvironmentRenderer, "environmentLights");
    this._fogProfile = T3D.getContextValue(context, T3D.EnvironmentRenderer, "fogProfile");
    const hazeColor = T3D.getContextValue(context, T3D.EnvironmentRenderer, "hazeColor");
    if (hazeColor) {
      this._threeContext.renderer.setClearColor(
        new THREE.Color(hazeColor[2] / 255, hazeColor[1] / 255, hazeColor[0] / 255)
      );
    }
    this._applySceneEnvironment();
    this._applyFog();
    this._applyTerrainMaterialSettings();

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

  _applySceneEnvironment() {
    if (!this._threeContext.scene) {
      return;
    }

    this._threeContext.sceneLights = T3D.EnvironmentUtils.applyEnvironmentToScene(
      this._threeContext.scene,
      this._threeContext.sceneLights || [],
      this._environmentProfile,
      {
        useEnvironmentLighting: this.useEnvironmentLighting,
        directionalIntensityScale: this.directionalLightIntensity,
        ambientIntensityScale: this.ambientLightIntensity,
      }
    );
  }

  _applyFog() {
    if (!this._threeContext.scene || !this._threeContext.camera || !this._threeContext.scene.fog) {
      return;
    }

    const fogScale = T3D.EnvironmentUtils.getFogDistanceScale(this._fogProfile, this.fogHazeStrength);
    const fogColor = T3D.EnvironmentUtils.blendFogColor(this._fogProfile, this.fogHazeStrength);
    const fogNear = this.fog * fogScale;
    const fogFar = fogNear + FOG_LENGTH;

    this._threeContext.scene.fog.color.copy(fogColor);
    this._threeContext.scene.fog.near = fogNear;
    this._threeContext.scene.fog.far = fogFar;
    this._threeContext.camera.far = fogFar;
    this._threeContext.camera.updateProjectionMatrix();
  }

  _applyTerrainMaterialSettings() {
    if (!this._terrainTiles) {
      return;
    }

    for (const tile of this._terrainTiles) {
      const materials = Array.isArray(tile.material) ? tile.material : [tile.material];
      for (const material of materials) {
        const uniforms = material?.userData?.t3dTerrainUniforms;
        if (uniforms) {
          uniforms.terrainContrast.value = this.terrainContrast;
        }
      }
    }
  }
}
