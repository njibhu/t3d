import { CameraPose, ExplorerHashState, MapLayerOptions } from "../types";

export function parseHashState(hash: string): ExplorerHashState {
  const params = new URLSearchParams(hash.startsWith("#") ? hash.slice(1) : hash);
  const data: ExplorerHashState = {
    map: parseIntParam(params, "map"),
    x: parseNumberParam(params, "x"),
    y: parseNumberParam(params, "y"),
    z: parseNumberParam(params, "z"),
    rx: parseNumberParam(params, "rx"),
    ry: parseNumberParam(params, "ry"),
    rz: parseNumberParam(params, "rz"),
    fog: parseIntParam(params, "fog"),
    cameraType: parseCameraType(params.get("cameraType")),
    loadZone: parseBooleanParam(params, "loadZone"),
    loadProp: parseBooleanParam(params, "loadProp"),
    showHavok: parseBooleanParam(params, "showHavok"),
  };

  const pitch = parseNumberParam(params, "pitch");
  const yaw = parseNumberParam(params, "yaw");
  if (
    pitch !== undefined &&
    yaw !== undefined &&
    data.rx === undefined &&
    data.ry === undefined &&
    data.rz === undefined
  ) {
    data.rx = -Math.cos(yaw) * Math.cos(pitch);
    data.ry = Math.sin(yaw) * Math.cos(pitch);
    data.rz = -Math.sin(pitch);
  }

  return data;
}

export function buildHashState(
  mapId: number,
  pose: CameraPose,
  cameraType: "fly" | "orbital",
  layers: MapLayerOptions,
  fog: number
): string {
  const params = new URLSearchParams();
  params.set("map", String(mapId));
  params.set("x", roundTo(pose.x, 3));
  params.set("y", roundTo(pose.y, 3));
  params.set("z", roundTo(pose.z, 3));
  params.set("rx", roundTo(pose.rx, 4));
  params.set("ry", roundTo(pose.ry, 4));
  params.set("rz", roundTo(pose.rz, 4));
  params.set("cameraType", cameraType);
  params.set("loadZone", String(layers.zone));
  params.set("loadProp", String(layers.props));
  params.set("showHavok", String(layers.collisions));
  params.set("fog", String(Math.round(fog)));
  return params.toString();
}

function parseIntParam(params: URLSearchParams, key: string): number | undefined {
  const raw = params.get(key);
  if (raw === null || raw === "") return undefined;
  const value = parseInt(raw, 10);
  return Number.isFinite(value) ? value : undefined;
}

function parseNumberParam(params: URLSearchParams, key: string): number | undefined {
  const raw = params.get(key);
  if (raw === null || raw === "") return undefined;
  const value = parseFloat(raw);
  return Number.isFinite(value) ? value : undefined;
}

function parseBooleanParam(params: URLSearchParams, key: string): boolean | undefined {
  const raw = params.get(key);
  if (raw === null || raw === "") return undefined;
  return raw === "true";
}

function parseCameraType(value: string | null): "fly" | "orbital" | undefined {
  return value === "fly" || value === "orbital" ? value : undefined;
}

function roundTo(value: number, digits: number): string {
  const factor = 10 ** digits;
  return String(Math.round(value * factor) / factor);
}
