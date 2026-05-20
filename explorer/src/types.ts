export type Theme = "light" | "dark";
export type ControllerType = "fly" | "orbital";

export interface MapEntry {
  name: string;
  category: string;
  categoryIndex: number;
  baseId: number;
}

export interface MapLayerOptions {
  zone: boolean;
  props: boolean;
  collisions: boolean;
}

export interface CameraPose {
  x: number;
  y: number;
  z: number;
  rx: number;
  ry: number;
  rz: number;
}

export interface ExplorerHashState {
  map?: number;
  x?: number;
  y?: number;
  z?: number;
  rx?: number;
  ry?: number;
  rz?: number;
  cameraType?: ControllerType;
  loadZone?: boolean;
  loadProp?: boolean;
  showHavok?: boolean;
  fog?: number;
}

export interface ExplorerPreferences {
  theme: Theme | null;
  movementSpeed: number;
  fog: number;
  antialias: boolean;
  cameraType: ControllerType;
}
