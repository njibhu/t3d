import { DEFAULT_LAYER_SELECTION, LAYER_KEYS, type LayerKey, type LayerRuntimeState } from "../types.js";

export type LayerStateRecord = Record<LayerKey, LayerRuntimeState>;

export function createLayerState(
  initialSelection: Partial<Record<LayerKey, boolean>> = DEFAULT_LAYER_SELECTION
): LayerStateRecord {
  return {
    zone: makeEntry(initialSelection.zone ?? DEFAULT_LAYER_SELECTION.zone),
    props: makeEntry(initialSelection.props ?? DEFAULT_LAYER_SELECTION.props),
    collisions: makeEntry(initialSelection.collisions ?? DEFAULT_LAYER_SELECTION.collisions),
  };
}

export function markLayerLoading(state: LayerStateRecord, key: LayerKey): LayerStateRecord {
  return updateState(state, key, {
    requested: true,
    status: "loading",
    error: null,
  });
}

export function setLayerRequested(state: LayerStateRecord, key: LayerKey, requested: boolean): LayerStateRecord {
  return updateState(state, key, {
    requested,
    status: requested ? (state[key].loaded ? "on" : "off") : "off",
    error: requested ? null : state[key].error,
  });
}

export function markLayerVisible(state: LayerStateRecord, key: LayerKey): LayerStateRecord {
  return updateState(state, key, {
    requested: true,
    loaded: true,
    status: "on",
    error: null,
  });
}

export function markLayerHidden(state: LayerStateRecord, key: LayerKey): LayerStateRecord {
  return updateState(state, key, {
    requested: false,
    status: "off",
    error: null,
  });
}

export function markLayerError(state: LayerStateRecord, key: LayerKey, error: string): LayerStateRecord {
  return updateState(state, key, {
    requested: false,
    status: "error",
    error,
  });
}

export function visibleLayerSelection(state: LayerStateRecord): Record<LayerKey, boolean> {
  return Object.fromEntries(LAYER_KEYS.map((key) => [key, state[key].requested])) as Record<LayerKey, boolean>;
}

function makeEntry(requested: boolean): LayerRuntimeState {
  return {
    requested,
    loaded: false,
    status: "off",
    error: null,
  };
}

function updateState(state: LayerStateRecord, key: LayerKey, patch: Partial<LayerRuntimeState>): LayerStateRecord {
  return {
    ...state,
    [key]: {
      ...state[key],
      ...patch,
    },
  };
}
