import $ from "jquery";
import T3D from "t3d-lib";
import * as THREE from "three";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";

const CANVAS_CLEAR_COLOR = 0x342920;
const FOG_LENGTH = 5000;

const DEFAULT_LIGHTING = T3D.LightingUtils?.DEFAULT_LIGHTING_PROFILE ?? {
  directionalIntensity: 0.7,
  exposure: 0.95,
};

export default class AppRenderer {
  constructor(stats) {
    this.localReader = undefined;
    this._threeContext = {};
    this._mapMeshes = [];
    this._mapContext = undefined;
    this._renderOptions = undefined;
    this._activeEnvironmentVariantId = undefined;
    this.stats = stats;

    // Defaults
    this.fog = 25000;
    this.movementSpeed = 10000;
    this.lightIntensity = 1;
    this.shadowStrength = 0.6;
    this.loadedMapID = undefined;
    this.controllerType = "fly";

    this.webGLRendererOptions = {
      sortObjects: false,
      logarithmicDepthBuffer: true,
      stencil: false,
      premultipliedAlpha: false,
      antialias: true,
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
    if (T3D.LightingUtils?.scaleDirectionalLights) {
      T3D.LightingUtils.scaleDirectionalLights(this._threeContext.sceneLights || [], value);
    } else if (this._threeContext.sceneLights) {
      for (const light of this._threeContext.sceneLights) {
        if (light.isDirectionalLight) {
          light.intensity = value;
        }
      }
    }

    this._updateTerrainShadingUniforms();
  }

  setShadowStrength(value) {
    this.shadowStrength = Math.max(0, Math.min(1, value));
    this._syncShadowFillLight();
    this._updateTerrainShadingUniforms();
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
    const mapContext = this._mapContext;
    this._mapContext = undefined;
    this._renderOptions = undefined;
    this._activeEnvironmentVariantId = undefined;
    this.loadedMapID = undefined;
    for (const mesh of this._mapMeshes) {
      this._threeContext.scene.remove(mesh);
    }
    for (const skyBox of Array.from(this._threeContext.skyScene.children)) {
      this._threeContext.skyScene.remove(skyBox);
    }
    this._mapMeshes = [];
    this._refreshSceneLights();
    if (this._threeContext.renderer) {
      this._threeContext.renderer.setClearColor(CANVAS_CLEAR_COLOR);
    }
    if (this._threeContext.scene?.fog) {
      this._threeContext.scene.fog.color.set(CANVAS_CLEAR_COLOR);
    }
    if (mapContext) {
      T3D.disposeEnvironmentResources(mapContext);
    }
  }

  setupScene() {
    const { _threeContext: context } = this;

    context.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100000);
    context.skyCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100000);
    context.scene = new THREE.Scene();
    context.skyScene = new THREE.Scene();
    context.clock = new THREE.Clock();

    context.scene.fog = new THREE.Fog(CANVAS_CLEAR_COLOR, this.fog, this.fog + FOG_LENGTH);
    context.camera.far = this.fog + FOG_LENGTH;
    context.camera.updateProjectionMatrix();

    this.setupWebGLRenderer(true);
    this._refreshSceneLights();
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
    T3D.LightingUtils?.applyRendererColorManagement(context.renderer, { exposure: DEFAULT_LIGHTING.exposure });
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
      env: this._activeEnvironmentVariantId,
      li: Math.round(this.lightIntensity * 1000) / 1000,
      sh: Math.round(this.shadowStrength * 1000) / 1000,
    };
  }

  getEnvironmentVariants() {
    if (!this._mapContext) return [];
    return T3D.getContextValue(this._mapContext, T3D.EnvironmentRenderer, "variants", []);
  }

  getActiveEnvironmentVariantId() {
    return this._activeEnvironmentVariantId;
  }

  setEnvironmentVariant(variantId) {
    if (!this._mapContext) return null;
    const variant = T3D.setEnvironmentVariant(this._mapContext, variantId);
    if (!variant) return null;
    this._activeEnvironmentVariantId = variant.id;
    this._applyEnvironmentFromContext();
    return variant;
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

    this._activeEnvironmentVariantId = T3D.getContextValue(context, T3D.EnvironmentRenderer, "activeVariantId");
    this._applyEnvironmentFromContext();

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

    this._updateTerrainShadingUniforms();

    return externalCallback();
  }

  _updateTerrainShadingUniforms() {
    if (!this._mapContext) {
      return;
    }

    const terrainTiles = T3D.getContextValue(this._mapContext, T3D.TerrainRenderer, "terrainTiles", []);
    for (const tile of terrainTiles) {
      const material = tile?.material;
      if (!material) {
        continue;
      }

      const materialList = Array.isArray(material) ? material : [material];
      for (const mat of materialList) {
        if (!mat?.uniforms) {
          continue;
        }

        if (mat.uniforms.lightScale) {
          mat.uniforms.lightScale.value = this.lightIntensity;
        }
        if (mat.uniforms.shadowStrength) {
          mat.uniforms.shadowStrength.value = this.shadowStrength;
        }
      }
    }
  }

  _syncShadowFillLight() {
    const { _threeContext: context } = this;
    if (!context.scene) {
      return;
    }

    if (!context.shadowFillLight) {
      context.shadowFillLight = new THREE.HemisphereLight(0xffffff, 0x6f6456, 0);
      context.scene.add(context.shadowFillLight);
    }

    const minFill = 0.05;
    const maxFill = 0.9;
    const liftAmount = 1 - this.shadowStrength;
    context.shadowFillLight.intensity = minFill + (maxFill - minFill) * liftAmount;
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

  _refreshSceneLights() {
    const { _threeContext: context } = this;
    if (!context.scene) {
      return;
    }

    const existingLights = context.sceneLights || [];
    if (T3D.LightingUtils?.removeLightsFromScene) {
      T3D.LightingUtils.removeLightsFromScene(context.scene, existingLights);
    } else {
      existingLights.forEach((light) => context.scene.remove(light));
    }

    const envLights = this._mapContext
      ? T3D.getContextValue(this._mapContext, T3D.EnvironmentRenderer, "lights", [])
      : [];
    let nextLights;

    if (envLights && envLights.length > 0) {
      nextLights = T3D.LightingUtils?.cloneLights(envLights) ?? envLights.map((light) => light.clone());
    } else if (T3D.LightingUtils?.createFallbackLightRig) {
      nextLights = T3D.LightingUtils.createFallbackLightRig({
        directionalIntensity: DEFAULT_LIGHTING.directionalIntensity,
      });
    } else {
      nextLights = [new THREE.AmbientLight(0x777777)];
      for (const dir of [
        [0, 1, 0],
        [1, 2, 1],
        [-1, -2, -1],
      ]) {
        const light = new THREE.DirectionalLight(0xffffff, DEFAULT_LIGHTING.directionalIntensity);
        light.position.set(dir[0], dir[1], dir[2]).normalize();
        nextLights.push(light);
      }
    }

    if (T3D.LightingUtils?.scaleDirectionalLights) {
      T3D.LightingUtils.scaleDirectionalLights(nextLights, this.lightIntensity);
    } else {
      nextLights.forEach((light) => {
        if (light.isDirectionalLight) {
          light.intensity *= this.lightIntensity;
        }
      });
    }

    context.sceneLights = nextLights;
    if (T3D.LightingUtils?.addLightsToScene) {
      T3D.LightingUtils.addLightsToScene(context.scene, nextLights);
    } else {
      nextLights.forEach((light) => context.scene.add(light));
    }

    this._syncShadowFillLight();
  }

  _applyEnvironmentFromContext() {
    for (const skyBox of Array.from(this._threeContext.skyScene.children)) {
      this._threeContext.skyScene.remove(skyBox);
    }

    const skyBox = T3D.getContextValue(this._mapContext, T3D.EnvironmentRenderer, "skyBox");
    if (skyBox) {
      this._threeContext.skyScene.add(skyBox);
    }

    const hazeColor = T3D.getContextValue(this._mapContext, T3D.EnvironmentRenderer, "hazeColor");
    if (hazeColor) {
      const haze = new THREE.Color(hazeColor[2] / 255, hazeColor[1] / 255, hazeColor[0] / 255);
      this._threeContext.renderer.setClearColor(haze);
      if (this._threeContext.scene?.fog) {
        this._threeContext.scene.fog.color.copy(haze);
      }
    } else {
      this._threeContext.renderer.setClearColor(CANVAS_CLEAR_COLOR);
      if (this._threeContext.scene?.fog) {
        this._threeContext.scene.fog.color.set(CANVAS_CLEAR_COLOR);
      }
    }

    this._refreshSceneLights();
  }
}
