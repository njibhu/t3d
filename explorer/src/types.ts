export type CameraMode = "orbital" | "firstPerson";
export type LayerKey = "zone" | "props" | "collisions";
export type LayerStatus = "off" | "loading" | "on" | "error";

export interface Vector3Like {
  x: number;
  y: number;
  z: number;
}

export interface ComboboxOption {
  id: string;
  label: string;
  meta?: string;
  keywords?: string[];
  /** Optional leading image (e.g. an expansion/season logo) shown before the label. */
  icon?: string;
}

export interface MapDefinition {
  name: string;
  category: string;
  baseId: number;
  categoryIndex: number;
}

export interface ExplorerUrlState {
  mapId: number | null;
  cameraMode: CameraMode;
  position: Vector3Like | null;
  rotation: Vector3Like | null;
  orbitalTarget: Vector3Like | null;
  layers: Record<LayerKey, boolean>;
  fog: number;
  movementSpeed: number;
  lightIntensity: number;
  shadowStrength: number;
  collisionOpacity: number;
  physics: boolean;
  environmentId: string | null;
  antialias: boolean;
}

export interface LayerRuntimeState {
  requested: boolean;
  loaded: boolean;
  status: LayerStatus;
  error: string | null;
}

export interface ProgressState {
  visible: boolean;
  label: string;
  pct: number | null;
  detail?: string;
  tone?: "accent" | "error" | "muted";
}

export interface CameraSnapshot {
  mode: CameraMode;
  position: Vector3Like;
  rotation: Vector3Like;
  orbitalTarget: Vector3Like | null;
}

export const LAYER_KEYS: LayerKey[] = ["zone", "props", "collisions"];

export const DEFAULT_LAYER_SELECTION: Record<LayerKey, boolean> = {
  zone: true,
  props: true,
  collisions: false,
};
