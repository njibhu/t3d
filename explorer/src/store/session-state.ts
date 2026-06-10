import { DEFAULT_LAYER_SELECTION, type CameraMode, type LayerKey } from "../types.js";

export interface ExplorerSessionState {
  mapId: number | null;
  cameraMode: CameraMode;
  antialias: boolean;
  physics: boolean;
  layers: Record<LayerKey, boolean>;
}

export function createExplorerSessionState(init: Partial<ExplorerSessionState> = {}): ExplorerSessionState {
  return {
    mapId: init.mapId ?? null,
    cameraMode: init.cameraMode ?? "orbital",
    antialias: init.antialias ?? true,
    physics: init.physics ?? false,
    layers: init.layers ?? { ...DEFAULT_LAYER_SELECTION },
  };
}

export function switchCameraMode(
  state: ExplorerSessionState,
  nextMode: CameraMode,
  collisionsAvailable: boolean
): ExplorerSessionState {
  return {
    ...state,
    cameraMode: nextMode,
    physics: collisionsAvailable ? state.physics : false,
  };
}

export function setRendererAntialias(state: ExplorerSessionState, antialias: boolean): ExplorerSessionState {
  return {
    ...state,
    antialias,
  };
}
