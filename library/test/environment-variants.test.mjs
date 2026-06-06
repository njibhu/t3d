import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import T3D from "../build/T3D-node.cjs";
import { FileParser } from "t3d-parser";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

function getFixturePath(name) {
  return path.join(repoRoot, "parser", "test", "content", name);
}

function toArrayBuffer(buffer) {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

function createStubLocalReader() {
  return {
    loadFile(_fileId, callback, isTexture) {
      if (isTexture) {
        callback(new Uint8Array([0, 0, 0, 255]).buffer, 0, 1, 1);
        return;
      }

      callback(null);
    },
  };
}

async function renderEnvironmentFixture(fixtureName) {
  const raw = fs.readFileSync(getFixturePath(fixtureName));
  const mapFile = new FileParser(toArrayBuffer(raw));
  const context = {};

  await new Promise((resolve) => {
    T3D.runRenderer(T3D.EnvironmentRenderer, createStubLocalReader(), { mapFile }, context, resolve);
  });

  return context;
}

test("mapc1 only exposes the non-empty sky variants", async () => {
  const context = await renderEnvironmentFixture("mapc1.bin");
  const variants = T3D.getContextValue(context, T3D.EnvironmentRenderer, "variants", []);

  assert.equal(variants.length, 2);
  assert.deepEqual(
    variants.map((variant) => variant.id),
    ["global:0:skyModeTex:0", "global:0:skyModeTex:1"]
  );
  assert.equal(T3D.getContextValue(context, T3D.EnvironmentRenderer, "activeVariantId"), variants[0].id);
  assert.equal(T3D.getContextValue(context, T3D.EnvironmentRenderer, "skyBox"), variants[0].skyBox);
  assert.deepEqual(T3D.getContextValue(context, T3D.EnvironmentRenderer, "hazeColor"), variants[0].hazeColor);
});

test("mapc2 keeps all four valid global sky variants", async () => {
  const context = await renderEnvironmentFixture("mapc2.bin");
  const variants = T3D.getContextValue(context, T3D.EnvironmentRenderer, "variants", []);

  assert.equal(variants.length, 4);
  assert.deepEqual(
    variants.map((variant) => variant.id),
    ["global:0:skyModeTex:0", "global:0:skyModeTex:1", "global:0:skyModeTex:2", "global:0:skyModeTex:3"]
  );
  assert.equal(T3D.getContextValue(context, T3D.EnvironmentRenderer, "activeVariantId"), variants[0].id);
});

test("mapc3 can switch the active environment variant on the existing context", async () => {
  const context = await renderEnvironmentFixture("mapc3.bin");
  const variants = T3D.getContextValue(context, T3D.EnvironmentRenderer, "variants", []);
  const targetVariant = variants[1];

  assert.equal(variants.length, 4);
  assert.notEqual(variants[0].id, targetVariant.id);

  const switched = T3D.setEnvironmentVariant(context, targetVariant.id);

  assert.equal(switched?.id, targetVariant.id);
  assert.equal(T3D.getContextValue(context, T3D.EnvironmentRenderer, "activeVariantId"), targetVariant.id);
  assert.equal(T3D.getContextValue(context, T3D.EnvironmentRenderer, "skyBox"), targetVariant.skyBox);
  assert.deepEqual(T3D.getContextValue(context, T3D.EnvironmentRenderer, "hazeColor"), targetVariant.hazeColor);
});
