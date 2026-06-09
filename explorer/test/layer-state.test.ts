import { test, expect } from "vitest";
import {
  createLayerState,
  markLayerError,
  markLayerHidden,
  markLayerLoading,
  markLayerVisible,
  visibleLayerSelection,
} from "../src/store/layer-state.js";

test("layer state transitions from requested to loaded and hidden", () => {
  let state = createLayerState({ zone: true, props: false, collisions: false });
  expect(state.zone.requested).toBe(true);
  expect(state.zone.loaded).toBe(false);

  state = markLayerLoading(state, "zone");
  expect(state.zone.status).toBe("loading");

  state = markLayerVisible(state, "zone");
  expect(state.zone.loaded).toBe(true);
  expect(state.zone.requested).toBe(true);

  state = markLayerHidden(state, "zone");
  expect(state.zone.requested).toBe(false);
  expect(visibleLayerSelection(state)).toEqual({ zone: false, props: false, collisions: false });
});

test("layer errors preserve the failed layer key", () => {
  const state = markLayerError(createLayerState(), "collisions", "boom");
  expect(state.collisions.status).toBe("error");
  expect(state.collisions.error).toBe("boom");
});
