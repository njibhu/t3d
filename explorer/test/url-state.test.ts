import { test, expect } from "vitest";
import { createDefaultExplorerUrlState, parseExplorerUrl, serializeExplorerUrl } from "../src/store/url-state.js";

test("parseExplorerUrl understands legacy explorer aliases", () => {
  const state = parseExplorerUrl(
    "#map=294938&cameraType=fly&x=12&y=34&z=56&rx=0.1&ry=0.2&rz=0.3&loadZone=false&loadProp=true&showHavok=true&collOpacity=0.5&enablePhysics=true&fog=42000&li=1.2&sh=0.4&env=global:0:skyModeTex:0"
  );

  expect(state.mapId).toBe(294938);
  expect(state.cameraMode).toBe("firstPerson");
  expect(state.position).toEqual({ x: 12, y: 34, z: 56 });
  expect(state.rotation).toEqual({ x: 0.1, y: 0.2, z: 0.3 });
  expect(state.layers).toEqual({ zone: false, props: true, collisions: true });
  expect(state.physics).toBe(true);
  expect(state.fog).toBe(42000);
  expect(state.lightIntensity).toBe(1.2);
  expect(state.shadowStrength).toBe(0.4);
  expect(state.environmentId).toBe("global:0:skyModeTex:0");
});

test("serializeExplorerUrl writes normalized keys", () => {
  const state = createDefaultExplorerUrlState();
  state.mapId = 42;
  state.cameraMode = "firstPerson";
  state.position = { x: 1.2345, y: 678.9, z: -12.1 };
  state.rotation = { x: 0.15, y: -0.45, z: 0.01 };
  state.orbitalTarget = { x: 10, y: 20, z: 30 };
  state.layers.collisions = true;
  state.physics = true;
  state.environmentId = "override:1:skyModeCubeTex:0";
  state.antialias = false;

  const hash = serializeExplorerUrl(state);
  expect(hash).toMatch(/mode=firstPerson/);
  expect(hash).toMatch(/collisions=1/);
  expect(hash).toMatch(/physics=1/);
  expect(hash).toMatch(/aa=0/);
  expect(hash).toMatch(/env=override%3A1%3AskyModeCubeTex%3A0/);
  expect(hash).not.toMatch(/cameraType=/);
  expect(hash).not.toMatch(/showHavok=/);
});

test("top-down camera mode and clip plane round-trip through the URL", () => {
  const state = createDefaultExplorerUrlState();
  state.mapId = 42;
  state.cameraMode = "topDown";
  state.clipEnabled = true;
  state.clipHeight = 12000;
  state.orthoZoom = 1.75;

  const restored = parseExplorerUrl(`#${serializeExplorerUrl(state)}`);
  expect(restored.cameraMode).toBe("topDown");
  expect(restored.clipEnabled).toBe(true);
  expect(restored.clipHeight).toBe(12000);
  expect(restored.orthoZoom).toBe(1.75);
});
