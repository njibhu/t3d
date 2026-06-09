import { test, expect } from "vitest";
import { createExplorerSessionState, setRendererAntialias, switchCameraMode } from "../src/store/session-state.js";

test("switchCameraMode preserves requested state when collisions exist", () => {
  const initial = createExplorerSessionState({
    mapId: 123,
    cameraMode: "orbital",
    physics: true,
  });

  const next = switchCameraMode(initial, "firstPerson", true);
  expect(next.mapId).toBe(123);
  expect(next.cameraMode).toBe("firstPerson");
  expect(next.physics).toBe(true);
});

test("setRendererAntialias keeps current session context intact", () => {
  const initial = createExplorerSessionState({
    mapId: 123,
    cameraMode: "firstPerson",
    antialias: true,
    layers: { zone: true, props: false, collisions: true },
  });

  const next = setRendererAntialias(initial, false);
  expect(next.mapId).toBe(123);
  expect(next.cameraMode).toBe("firstPerson");
  expect(next.antialias).toBe(false);
  expect(next.layers).toEqual({ zone: true, props: false, collisions: true });
});
