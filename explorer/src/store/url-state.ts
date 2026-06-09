import { DEFAULT_LAYER_SELECTION, type CameraMode, type ExplorerUrlState, type Vector3Like } from "../types.js";

const DEFAULT_STATE: ExplorerUrlState = {
  mapId: null,
  cameraMode: "orbital",
  position: null,
  rotation: null,
  orbitalTarget: null,
  layers: { ...DEFAULT_LAYER_SELECTION },
  fog: 25000,
  movementSpeed: 10000,
  lightIntensity: 1,
  shadowStrength: 0.6,
  collisionOpacity: 0,
  physics: false,
  environmentId: null,
  antialias: true,
};

export function createDefaultExplorerUrlState(): ExplorerUrlState {
  return structuredClone(DEFAULT_STATE);
}

export function parseExplorerUrl(hash: string): ExplorerUrlState {
  const params = new URLSearchParams(hash.startsWith("#") ? hash.slice(1) : hash);
  const state = createDefaultExplorerUrlState();

  state.mapId = readInt(params, "map");
  state.cameraMode = parseCameraMode(params.get("mode") ?? params.get("cameraType")) ?? state.cameraMode;
  state.position = readVector(params, ["x", "y", "z"]);
  state.rotation = readVector(params, ["rx", "ry", "rz"]);
  state.orbitalTarget = readVector(params, ["tx", "ty", "tz"]);
  state.layers = {
    zone: readBoolean(params, "zone") ?? readBoolean(params, "loadZone") ?? state.layers.zone,
    props: readBoolean(params, "props") ?? readBoolean(params, "loadProp") ?? state.layers.props,
    collisions: readBoolean(params, "collisions") ?? readBoolean(params, "showHavok") ?? state.layers.collisions,
  };
  state.fog = readFloat(params, "fog") ?? state.fog;
  state.movementSpeed = readFloat(params, "speed") ?? readFloat(params, "mv") ?? state.movementSpeed;
  state.lightIntensity = readFloat(params, "light") ?? readFloat(params, "li") ?? state.lightIntensity;
  state.shadowStrength = readFloat(params, "shadow") ?? readFloat(params, "sh") ?? state.shadowStrength;
  state.collisionOpacity = readFloat(params, "collOpacity") ?? state.collisionOpacity;
  state.physics = readBoolean(params, "physics") ?? readBoolean(params, "enablePhysics") ?? state.physics;
  state.environmentId = params.get("env") || params.get("environment") || null;
  state.antialias = readBoolean(params, "aa") ?? state.antialias;

  return state;
}

export function serializeExplorerUrl(state: ExplorerUrlState): string {
  const params = new URLSearchParams();

  if (state.mapId != null) {
    params.set("map", String(state.mapId));
  }
  params.set("mode", state.cameraMode);

  writeVector(params, ["x", "y", "z"], state.position);
  writeVector(params, ["rx", "ry", "rz"], state.rotation, 4);
  writeVector(params, ["tx", "ty", "tz"], state.orbitalTarget);

  writeBoolean(params, "zone", state.layers.zone, DEFAULT_STATE.layers.zone);
  writeBoolean(params, "props", state.layers.props, DEFAULT_STATE.layers.props);
  writeBoolean(params, "collisions", state.layers.collisions, DEFAULT_STATE.layers.collisions);
  writeNumber(params, "fog", state.fog, DEFAULT_STATE.fog);
  writeNumber(params, "speed", state.movementSpeed, DEFAULT_STATE.movementSpeed);
  writeNumber(params, "light", state.lightIntensity, DEFAULT_STATE.lightIntensity, 3);
  writeNumber(params, "shadow", state.shadowStrength, DEFAULT_STATE.shadowStrength, 3);
  writeNumber(params, "collOpacity", state.collisionOpacity, DEFAULT_STATE.collisionOpacity, 3);
  writeBoolean(params, "physics", state.physics, DEFAULT_STATE.physics);
  writeBoolean(params, "aa", state.antialias, DEFAULT_STATE.antialias);

  if (state.environmentId) {
    params.set("env", state.environmentId);
  }

  return params.toString();
}

function parseCameraMode(value: string | null): CameraMode | null {
  if (!value) return null;
  if (value === "orbital") return "orbital";
  if (value === "firstPerson" || value === "fly") return "firstPerson";
  return null;
}

function readVector(params: URLSearchParams, keys: [string, string, string]): Vector3Like | null {
  const x = readFloat(params, keys[0]);
  const y = readFloat(params, keys[1]);
  const z = readFloat(params, keys[2]);
  if (x == null || y == null || z == null) {
    return null;
  }
  return { x, y, z };
}

function writeVector(
  params: URLSearchParams,
  keys: [string, string, string],
  value: Vector3Like | null,
  precision = 3
): void {
  if (!value) return;
  writeNumber(params, keys[0], value.x, null, precision);
  writeNumber(params, keys[1], value.y, null, precision);
  writeNumber(params, keys[2], value.z, null, precision);
}

function readInt(params: URLSearchParams, key: string): number | null {
  const value = params.get(key);
  if (!value) return null;
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function readFloat(params: URLSearchParams, key: string): number | null {
  const value = params.get(key);
  if (!value) return null;
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function readBoolean(params: URLSearchParams, key: string): boolean | null {
  const value = params.get(key);
  if (value == null || value === "") return null;
  if (value === "true" || value === "1") return true;
  if (value === "false" || value === "0") return false;
  return null;
}

function writeBoolean(params: URLSearchParams, key: string, value: boolean, defaultValue: boolean): void {
  if (value !== defaultValue) {
    params.set(key, value ? "1" : "0");
  }
}

function writeNumber(
  params: URLSearchParams,
  key: string,
  value: number,
  defaultValue: number | null,
  precision = 0
): void {
  if (defaultValue != null && Math.abs(value - defaultValue) < Math.pow(10, -precision) / 2) {
    return;
  }
  params.set(key, formatNumber(value, precision));
}

function formatNumber(value: number, precision: number): string {
  if (precision <= 0) {
    return String(Math.round(value));
  }
  return String(Math.round(value * 10 ** precision) / 10 ** precision);
}

export function urlStateFromScene(
  base: ExplorerUrlState,
  camera: {
    cameraMode: CameraMode;
    position: Vector3Like;
    rotation: Vector3Like;
    orbitalTarget: Vector3Like | null;
  }
): ExplorerUrlState {
  return {
    ...base,
    cameraMode: camera.cameraMode,
    position: camera.position,
    rotation: camera.rotation,
    orbitalTarget: camera.orbitalTarget,
  };
}
