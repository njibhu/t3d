const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const { FileParser } = require("t3d-parser");
const {
  default: EnvironmentRenderer,
  setActiveEnvironmentVariant,
  disposeEnvironmentResources,
} = require("../src/dataRenderer/EnvironmentRenderer.ts");

const repoRoot = path.resolve(__dirname, "..", "..");

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
  const renderer = new EnvironmentRenderer(createStubLocalReader(), { mapFile }, context);

  await new Promise((resolve) => {
    renderer.renderAsync(resolve);
  });

  return context;
}

function getEnvironmentOutput(context) {
  return context[EnvironmentRenderer.rendererName];
}

test("mapc1 only exposes the non-empty sky variants", async () => {
  const context = await renderEnvironmentFixture("mapc1.bin");
  const output = getEnvironmentOutput(context);
  const { variants } = output;

  assert.equal(variants.length, 2);
  assert.deepEqual(
    variants.map((variant) => variant.id),
    ["global:0:skyModeTex:0", "global:0:skyModeTex:1"]
  );
  assert.equal(output.activeVariantId, variants[0].id);
  assert.equal(output.skyBox, variants[0].skyBox);
  assert.deepEqual(output.hazeColor, variants[0].hazeColor);
});

test("mapc2 keeps all four valid global sky variants", async () => {
  const context = await renderEnvironmentFixture("mapc2.bin");
  const output = getEnvironmentOutput(context);
  const { variants } = output;

  assert.equal(variants.length, 4);
  assert.deepEqual(
    variants.map((variant) => variant.id),
    ["global:0:skyModeTex:0", "global:0:skyModeTex:1", "global:0:skyModeTex:2", "global:0:skyModeTex:3"]
  );
  assert.equal(output.activeVariantId, variants[0].id);
});

test("mapc3 can switch the active environment variant on the existing context", async () => {
  const context = await renderEnvironmentFixture("mapc3.bin");
  const output = getEnvironmentOutput(context);
  const targetVariant = output.variants[1];

  assert.equal(output.variants.length, 4);
  assert.notEqual(output.variants[0].id, targetVariant.id);

  const switched = setActiveEnvironmentVariant(context, targetVariant.id);

  assert.equal(switched?.id, targetVariant.id);
  assert.equal(output.activeVariantId, targetVariant.id);
  assert.equal(output.skyBox, targetVariant.skyBox);
  assert.deepEqual(output.hazeColor, targetVariant.hazeColor);
});

test("disposing environment resources clears prepared variants and legacy aliases", async () => {
  const context = await renderEnvironmentFixture("mapc2.bin");

  disposeEnvironmentResources(context);
  disposeEnvironmentResources(context);

  const output = getEnvironmentOutput(context);
  assert.deepEqual(output.variants, []);
  assert.equal(output.activeVariantId, null);
  assert.equal(output.skyBox, null);
  assert.equal(output.hazeColor, null);
});
