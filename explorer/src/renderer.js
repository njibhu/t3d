import $ from "jquery";
import T3D from "t3d-lib";
import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";

const FOG_LENGTH = 5000;

const DEFAULT_LIGHTING = T3D.LightingUtils.DEFAULT_LIGHTING_PROFILE;
const CANVAS_CLEAR_COLOR = T3D.LightingUtils.DEFAULT_CANVAS_CLEAR_COLOR;

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
    this.lightIntensity = DEFAULT_LIGHTING.lightScale;
    this.shadowStrength = DEFAULT_LIGHTING.shadowStrength;
    this.collisionOpacity = 0;
    this.physicsEnabled = false;
    this.loadedMapID = undefined;
    this.controllerType = "fly";

    this.webGLRendererOptions = {
      sortObjects: false,
      logarithmicDepthBuffer: true,
      stencil: false,
      premultipliedAlpha: false,
      antialias: true,
    };

    this._pointerMove = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      up: false,
      down: false,
    };
    this._pointerHandlers = undefined;
    this._onPointerLockChange = undefined;
    this._onPhysicsChange = undefined;
    this._havokCollisionMeshes = [];
    this._collisionPhysicsMeshes = [];
    this._gravityAcceleration = 2800;
    this._jumpVelocity = 900;
    this._playerHeight = 120;
    this._collisionPadding = 18;
    this._groundSnapDistance = 6;
    this._maxFallDistance = 8000;
    this._verticalVelocity = 0;
    this._isGrounded = false;
    this._jumpRequested = false;
    this._hasSafeGroundPosition = false;
    this._lastSafeGroundPosition = new THREE.Vector3();
    this._hasPhysicsFallbackPosition = false;
    this._physicsFallbackPosition = new THREE.Vector3();
    this._raycaster = new THREE.Raycaster();
    this._worldUp = new THREE.Vector3(0, 1, 0);
    this._down = new THREE.Vector3(0, -1, 0);
    this._moveForward = new THREE.Vector3();
    this._moveRight = new THREE.Vector3();
    this._moveDelta = new THREE.Vector3();
    this._candidatePos = new THREE.Vector3();
    this._probeDir = new THREE.Vector3();
    this._probeOrigin = new THREE.Vector3();
    this._slideDeltaX = new THREE.Vector3();
    this._slideDeltaZ = new THREE.Vector3();
    this._collisionProbeHeights = [0, -this._playerHeight * 0.5, -this._playerHeight + 12];
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
      renderers.push({
        renderClass: T3D.HavokRenderer,
        settings: { visible: true, opacity: renderOptions.collOpacity ?? this.collisionOpacity },
      });
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
    if (this._threeContext.controls && "movementSpeed" in this._threeContext.controls) {
      this._threeContext.controls.movementSpeed = value;
    }
  }

  move(x, y, z) {
    const object = this._getControlledObject();

    if (x) {
      object.position.x = x;
    }
    if (y) {
      object.position.y = y;
    }
    if (z) {
      object.position.z = z;
    }
  }

  rotate(rx, ry, rz) {
    const object = this._getControlledObject();

    if (rx) {
      object.rotation.x = rx;
    }
    if (ry) {
      object.rotation.y = ry;
    }
    if (rz) {
      object.rotation.z = rz;
    }
  }

  setLightIntensity(value) {
    this.lightIntensity = value;
    T3D.LightingUtils.scaleDirectionalLights(this._threeContext.sceneLights || [], value);
    this._updateTerrainShadingUniforms();
  }

  setShadowStrength(value) {
    this.shadowStrength = Math.max(0, Math.min(1, value));
    this._syncShadowFillLight();
    this._updateTerrainShadingUniforms();
  }

  setCollisionOpacity(value) {
    const normalized = Math.max(0, Math.min(1, Number(value)));
    if (Number.isNaN(normalized)) {
      return;
    }

    this.collisionOpacity = normalized;

    if (!this._mapContext || !this._renderOptions?.collisions) {
      return;
    }

    const collisions = this._havokCollisionMeshes;
    const transparent = normalized < 1;

    for (const mesh of collisions) {
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const material of materials) {
        if (!material) {
          continue;
        }

        material.opacity = normalized;
        material.transparent = transparent;
        material.depthWrite = !transparent;
        material.needsUpdate = true;
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
    const previousControllerType = this.controllerType;

    if (this._threeContext.controls) {
      if (this._threeContext.controls.isLocked && typeof this._threeContext.controls.unlock === "function") {
        this._threeContext.controls.unlock();
      }
      this._detachPointerLockHandlers();
      this._threeContext.controls.dispose();
    }

    if (controllerType === "orbital") {
      this._threeContext.controls = new MapControls(this._threeContext.camera, this._threeContext.renderer.domElement);
    } else if (controllerType === "fly") {
      this._threeContext.controls = new PointerLockControls(this._threeContext.camera, this._threeContext.renderer.domElement);
      this._attachPointerLockHandlers();
    } else {
      throw new Error("Invalid controller type");
    }

    this.controllerType = controllerType;

    if (controllerType === "fly" && previousControllerType === "orbital") {
      this._snapFlyCameraToGround();
    }

    this._notifyPointerLockChange(this.isPointerLocked());
  }

  cleanupMap() {
    const mapContext = this._mapContext;
    if (this._threeContext.controls?.isLocked && typeof this._threeContext.controls.unlock === "function") {
      this._threeContext.controls.unlock();
    }
    this._mapContext = undefined;
    this._renderOptions = undefined;
    this._activeEnvironmentVariantId = undefined;
    this.physicsEnabled = false;
    this._verticalVelocity = 0;
    this._notifyPhysicsChange(false);
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
    this._havokCollisionMeshes = [];
    this._collisionPhysicsMeshes = [];
    this._hasSafeGroundPosition = false;
    this._hasPhysicsFallbackPosition = false;
    if (mapContext) {
      T3D.disposeEnvironmentResources(mapContext);
    }
    this._notifyPointerLockChange(false);
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
    T3D.LightingUtils.applyRendererColorManagement(context.renderer, { exposure: DEFAULT_LIGHTING.exposure });
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
    const object = this._getControlledObject();
    const pos = object.position;
    const rot = object.rotation;
    return {
      map: this.loadedMapID,
      x: Math.round(pos.x * 1000) / 1000,
      y: Math.round(pos.y * 1000) / 1000,
      z: Math.round(pos.z * 1000) / 1000,
      rx: Math.round(rot.x * 10000) / 10000,
      ry: Math.round(rot.y * 10000) / 10000,
      rz: Math.round(rot.z * 10000) / 10000,
      cameraType: this.controllerType,
      loadZone: !!this._renderOptions?.zone,
      loadProp: !!this._renderOptions?.props,
      showHavok: !!this._renderOptions?.collisions,
      collOpacity: this.collisionOpacity,
      enablePhysics: this.physicsEnabled,
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

  hasCollisionsLoaded() {
    return !!this._renderOptions?.collisions;
  }

  setPhysicsChangeHandler(handler) {
    this._onPhysicsChange = typeof handler === "function" ? handler : undefined;
  }

  isPhysicsEnabled() {
    return this.physicsEnabled;
  }

  setPhysicsEnabled(value, options = {}) {
    const shouldEnable = !!value && this.hasCollisionsLoaded();
    const wasEnabled = this.physicsEnabled;

    this.physicsEnabled = shouldEnable;
    const object = this._getControlledObject();

    if (this.physicsEnabled) {
      this._verticalVelocity = 0;
      this._isGrounded = false;
      this._jumpRequested = false;
      this._physicsFallbackPosition.copy(object.position);
      this._hasPhysicsFallbackPosition = true;
      if (options.applyDefaultOpacity !== false && !wasEnabled) {
        this.setCollisionOpacity(0);
      }
    } else {
      this._verticalVelocity = 0;
      this._isGrounded = false;
      this._jumpRequested = false;
    }

    this._notifyPhysicsChange(this.physicsEnabled);
    return this.physicsEnabled;
  }

  setPointerLockChangeHandler(handler) {
    this._onPointerLockChange = typeof handler === "function" ? handler : undefined;
  }

  isPointerLocked() {
    return this.controllerType === "fly" && !!this._threeContext.controls?.isLocked;
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

    const delta = this._threeContext.clock.getDelta();
    if (this.controllerType === "fly") {
      this._updatePointerLockMovement(delta);
    } else if (typeof this._threeContext.controls.update === "function") {
      this._threeContext.controls.update();
    }

    this._threeContext.renderer.clear();

    // Render first skyCamera
    this._threeContext.skyCamera.quaternion.copy(this._threeContext.camera.quaternion);
    this._threeContext.renderer.render(this._threeContext.skyScene, this._threeContext.skyCamera);

    this._threeContext.renderer.render(this._threeContext.scene, this._threeContext.camera);
  }

  _loadMapCallback(context, renderOptions, externalCallback) {
    this._mapContext = context;
    this._havokCollisionMeshes = [];
    this._collisionPhysicsMeshes = [];

    // Add all the data from the context to the threejs scene
    for (const tile of T3D.getContextValue(context, T3D.TerrainRenderer, "terrainTiles")) {
      this._threeContext.scene.add(tile);
      this._mapMeshes.push(tile);
      this._collisionPhysicsMeshes.push(tile);
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
        this._havokCollisionMeshes.push(collModel);
        this._collisionPhysicsMeshes.push(collModel);
      }
    }

    this.setPhysicsEnabled(!!renderOptions.enablePhysics, {
      applyDefaultOpacity: renderOptions.collOpacity === undefined,
    });

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

    this._physicsFallbackPosition.copy(this._threeContext.camera.position);
    this._hasPhysicsFallbackPosition = true;
  }

  _refreshSceneLights() {
    const { _threeContext: context } = this;
    if (!context.scene) {
      return;
    }

    const existingLights = context.sceneLights || [];
    T3D.LightingUtils.removeLightsFromScene(context.scene, existingLights);

    const envLights = this._mapContext
      ? T3D.getContextValue(this._mapContext, T3D.EnvironmentRenderer, "lights", [])
      : [];

    const nextLights =
      envLights && envLights.length > 0
        ? T3D.LightingUtils.cloneLights(envLights)
        : T3D.LightingUtils.createFallbackLightRig({ directionalIntensity: DEFAULT_LIGHTING.directionalIntensity });

    T3D.LightingUtils.scaleDirectionalLights(nextLights, this.lightIntensity);

    context.sceneLights = nextLights;
    T3D.LightingUtils.addLightsToScene(context.scene, nextLights);

    const terrainTiles = this._mapContext
      ? T3D.getContextValue(this._mapContext, T3D.TerrainRenderer, "terrainTiles", [])
      : [];
    T3D.LightingUtils.applyTerrainSunDirection(terrainTiles, nextLights);

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

  _getControlledObject() {
    const controls = this._threeContext.controls;
    if (!controls) {
      return this._threeContext.camera;
    }

    if (controls.object) {
      return controls.object;
    }

    if (typeof controls.getObject === "function") {
      return controls.getObject();
    }

    return this._threeContext.camera;
  }

  _updatePointerLockMovement(delta) {
    const controls = this._threeContext.controls;
    if (!controls || !controls.isLocked) {
      return;
    }

    if (this.physicsEnabled) {
      this._updatePointerLockPhysicsMovement(delta);
      return;
    }

    const distance = this.movementSpeed * delta;
    const object = this._getControlledObject();

    if (this._pointerMove.forward) controls.moveForward(distance);
    if (this._pointerMove.backward) controls.moveForward(-distance);
    if (this._pointerMove.left) controls.moveRight(-distance);
    if (this._pointerMove.right) controls.moveRight(distance);
    if (this._pointerMove.up) object.position.y += distance;
    if (this._pointerMove.down) object.position.y -= distance;
  }

  _updatePointerLockPhysicsMovement(delta) {
    const controls = this._threeContext.controls;
    const object = this._getControlledObject();

    this._moveDelta.set(0, 0, 0);
    controls.getDirection(this._moveForward);
    this._moveForward.y = 0;
    if (this._moveForward.lengthSq() > 0) {
      this._moveForward.normalize();
      this._moveRight.crossVectors(this._moveForward, this._worldUp).normalize();

      if (this._pointerMove.forward) this._moveDelta.add(this._moveForward);
      if (this._pointerMove.backward) this._moveDelta.sub(this._moveForward);
      if (this._pointerMove.right) this._moveDelta.add(this._moveRight);
      if (this._pointerMove.left) this._moveDelta.sub(this._moveRight);
    }

    if (this._moveDelta.lengthSq() > 0) {
      this._moveDelta.normalize().multiplyScalar(this.movementSpeed * delta);
      this._moveWithHavokCollision(this._moveDelta, object.position);
    }

    this._isGrounded = this._syncGroundState(object.position);

    if (this._jumpRequested && this._isGrounded) {
      this._verticalVelocity = this._jumpVelocity;
      this._isGrounded = false;
    }
    this._jumpRequested = false;

    this._verticalVelocity -= this._gravityAcceleration * delta;
    object.position.y += this._verticalVelocity * delta;
    this._isGrounded = this._syncGroundState(object.position);
    this._applyPhysicsFallSafety(object.position);
  }

  _syncGroundState(position) {
    const groundY = this._findGroundY(position);
    if (groundY === null) {
      return false;
    }

    const minY = groundY + this._playerHeight;
    const gap = position.y - minY;

    if (gap <= this._groundSnapDistance) {
      if (position.y < minY) {
        position.y = minY;
      }
      if (this._verticalVelocity < 0) {
        this._verticalVelocity = 0;
      }
      this._recordSafeGroundPosition(position);
      return true;
    }

    return false;
  }

  _recordSafeGroundPosition(position) {
    this._lastSafeGroundPosition.copy(position);
    this._hasSafeGroundPosition = true;
  }

  _applyPhysicsFallSafety(position) {
    if (!this.physicsEnabled || this._isGrounded) {
      return;
    }

    let lowestAllowed = -Infinity;
    if (this._hasSafeGroundPosition) {
      lowestAllowed = Math.max(lowestAllowed, this._lastSafeGroundPosition.y - this._maxFallDistance);
    }
    if (this._hasPhysicsFallbackPosition) {
      lowestAllowed = Math.max(lowestAllowed, this._physicsFallbackPosition.y - this._maxFallDistance);
    }

    if (position.y >= lowestAllowed) {
      return;
    }

    if (this._hasSafeGroundPosition) {
      position.copy(this._lastSafeGroundPosition);
    } else if (this._hasPhysicsFallbackPosition) {
      position.copy(this._physicsFallbackPosition);
    } else {
      position.y = 0;
    }

    this._verticalVelocity = 0;
    this._jumpRequested = false;
    this._isGrounded = this._syncGroundState(position);

    if (!this._isGrounded) {
      this.setPhysicsEnabled(false, { applyDefaultOpacity: false });
    }
  }

  _moveWithHavokCollision(delta, position) {
    this._candidatePos.copy(position).add(delta);
    if (this._canOccupyPosition(this._candidatePos, position)) {
      position.copy(this._candidatePos);
      return;
    }

    if (delta.x !== 0) {
      this._slideDeltaX.set(delta.x, 0, 0);
      this._candidatePos.copy(position).add(this._slideDeltaX);
      if (this._canOccupyPosition(this._candidatePos, position)) {
        position.copy(this._candidatePos);
      }
    }

    if (delta.z !== 0) {
      this._slideDeltaZ.set(0, 0, delta.z);
      this._candidatePos.copy(position).add(this._slideDeltaZ);
      if (this._canOccupyPosition(this._candidatePos, position)) {
        position.copy(this._candidatePos);
      }
    }
  }

  _canOccupyPosition(candidate, fromPosition) {
    if (!this._collisionPhysicsMeshes.length) {
      return true;
    }

    this._probeDir.copy(candidate).sub(fromPosition);
    const distance = this._probeDir.length();
    if (distance <= 0) {
      return true;
    }

    this._probeDir.divideScalar(distance);

    for (const offsetY of this._collisionProbeHeights) {
      this._probeOrigin.set(fromPosition.x, fromPosition.y + offsetY, fromPosition.z);
      this._raycaster.set(this._probeOrigin, this._probeDir);
      this._raycaster.far = distance + this._collisionPadding;
      const hit = this._raycaster.intersectObjects(this._collisionPhysicsMeshes, true)[0];
      if (hit) {
        return false;
      }
    }

    return true;
  }

  _findGroundY(position) {
    if (!this._collisionPhysicsMeshes.length) {
      return null;
    }

    this._probeOrigin.set(position.x, position.y + this._playerHeight, position.z);
    this._raycaster.set(this._probeOrigin, this._down);
    this._raycaster.far = this._playerHeight * 3;

    const hit = this._raycaster.intersectObjects(this._collisionPhysicsMeshes, true)[0];
    return hit ? hit.point.y : null;
  }

  _snapFlyCameraToGround() {
    if (!this._collisionPhysicsMeshes.length) {
      return;
    }

    const object = this._getControlledObject();
    this._moveForward.set(0, 0, 0);
    object.getWorldDirection(this._moveForward);
    this._moveForward.y = 0;
    if (this._moveForward.lengthSq() === 0) {
      this._moveForward.set(0, 0, -1);
    } else {
      this._moveForward.normalize();
    }

    this._probeOrigin.set(object.position.x, object.position.y + 100000, object.position.z);
    this._raycaster.set(this._probeOrigin, this._down);
    this._raycaster.far = 200000;

    const hit = this._raycaster.intersectObjects(this._collisionPhysicsMeshes, true)[0];
    if (!hit) {
      return;
    }

    object.position.y = hit.point.y + this._playerHeight;

    // Keep heading but level pitch so fly mode starts looking at the horizon.
    this._candidatePos.copy(object.position).add(this._moveForward);
    object.lookAt(this._candidatePos);

    this._verticalVelocity = 0;
    this._isGrounded = true;
    this._jumpRequested = false;
    this._recordSafeGroundPosition(object.position);
    this._physicsFallbackPosition.copy(object.position);
    this._hasPhysicsFallbackPosition = true;
  }

  _attachPointerLockHandlers() {
    this._detachPointerLockHandlers();

    const domElement = this._threeContext.renderer.domElement;
    const onCanvasClick = () => {
      if (this.controllerType !== "fly") {
        return;
      }

      const controls = this._threeContext.controls;
      if (controls && !controls.isLocked) {
        controls.lock();
      }
    };

    const onPointerUnlock = () => {
      this._pointerMove.forward = false;
      this._pointerMove.backward = false;
      this._pointerMove.left = false;
      this._pointerMove.right = false;
      this._pointerMove.up = false;
      this._pointerMove.down = false;
      this._jumpRequested = false;
      this._isGrounded = false;
      this._notifyPointerLockChange(false);
    };

    const onPointerLock = () => {
      this._notifyPointerLockChange(true);
    };

    const onKeyDown = (event) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          this._pointerMove.forward = true;
          break;
        case "KeyS":
        case "ArrowDown":
          this._pointerMove.backward = true;
          break;
        case "KeyA":
        case "ArrowLeft":
          this._pointerMove.left = true;
          break;
        case "KeyD":
        case "ArrowRight":
          this._pointerMove.right = true;
          break;
        case "Space":
          if (this.physicsEnabled) {
            if (!event.repeat) {
              this._jumpRequested = true;
            }
          } else {
            this._pointerMove.up = true;
          }
          event.preventDefault();
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this._pointerMove.down = true;
          break;
      }
    };

    const onKeyUp = (event) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          this._pointerMove.forward = false;
          break;
        case "KeyS":
        case "ArrowDown":
          this._pointerMove.backward = false;
          break;
        case "KeyA":
        case "ArrowLeft":
          this._pointerMove.left = false;
          break;
        case "KeyD":
        case "ArrowRight":
          this._pointerMove.right = false;
          break;
        case "Space":
          this._pointerMove.up = false;
          this._jumpRequested = false;
          event.preventDefault();
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this._pointerMove.down = false;
          break;
      }
    };

    domElement.addEventListener("click", onCanvasClick);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    this._threeContext.controls.addEventListener("lock", onPointerLock);
    this._threeContext.controls.addEventListener("unlock", onPointerUnlock);

    this._pointerHandlers = {
      domElement,
      onCanvasClick,
      onKeyDown,
      onKeyUp,
      onPointerLock,
      onPointerUnlock,
    };
  }

  _detachPointerLockHandlers() {
    if (!this._pointerHandlers) {
      return;
    }

    const controls = this._threeContext.controls;
    const { domElement, onCanvasClick, onKeyDown, onKeyUp, onPointerLock, onPointerUnlock } = this._pointerHandlers;
    domElement.removeEventListener("click", onCanvasClick);
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    if (controls?.removeEventListener) {
      controls.removeEventListener("lock", onPointerLock);
      controls.removeEventListener("unlock", onPointerUnlock);
    }

    this._pointerHandlers = undefined;
  }

  _notifyPointerLockChange(isLocked) {
    if (this._onPointerLockChange) {
      this._onPointerLockChange(isLocked);
    }
  }

  _notifyPhysicsChange(isEnabled) {
    if (this._onPhysicsChange) {
      this._onPhysicsChange(isEnabled);
    }
  }
}
