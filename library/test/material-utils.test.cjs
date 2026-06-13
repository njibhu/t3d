const assert = require("node:assert/strict");
const test = require("node:test");

const { pickMaterialTextures } = require("../src/util/MaterialUtils.ts");

test("pickMaterialTextures recognizes legacy diffuse and normal tokens", () => {
  const material = {
    textures: [
      { token: 27219515885689124n, filename: 123, uvPSInputIndex: 0 },
      { token: 850610087184878n, filename: 456, uvPSInputIndex: 0 },
    ],
    materialFlags: 0,
    texCoordCount: 1,
  };

  const { diffuse, normal } = pickMaterialTextures(material);

  assert.equal(diffuse?.filename, 123);
  assert.equal(normal?.filename, 456);
});

test("pickMaterialTextures falls back to the first populated sampler texture when tokens do not match", () => {
  const material = {
    textures: [
      { token: 0n, filename: 0, uvPSInputIndex: 0 },
      { token: 0n, filename: 789, uvPSInputIndex: 0 },
      { token: 0n, filename: 987, uvPSInputIndex: 0 },
    ],
    materialFlags: 0,
    texCoordCount: 1,
  };

  const { diffuse, normal } = pickMaterialTextures(material, [material.textures[1], material.textures[2]]);

  assert.equal(diffuse?.filename, 789);
  assert.equal(normal, undefined);
});
