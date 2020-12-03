/**
 * Skybox textures are a little bit particular because we only get 3 textures: Front/left, Right/back and Top.
 * These utils allow us to use the skyboxes as CubeMaps
 */

function getSkyBoxCubeTexture(localReader, fileIdNE, fileIdSW, fileIdT, haze, onerror) {
  // Create dummy textures
}

function getGroundTexture(hazeColorAsInt) {
  // Generate a black texture for the ground
  const size = 1024 * 1024;
  const data = new Uint8Array(4 * size);
  const color = new THREE.Color(hazeColorAsInt);
  const r = Math.floor(color.r * 255);
  const g = Math.floor(color.g * 255);
  const b = Math.floor(color.b * 255);
  const a = 255;

  for (let i = 0; i < size; i++) {
    const stride = i * 4;
    data[stride] = r;
    data[stride + 1] = g;
    data[stride + 2] = b;
    data[stride + 3] = a;
  }

  return new THREE.DataTexture(data, 1024, 1024, THREE.RGBAFormat);
}

function sliceTexture(texture) {
  const width = texture.image.width;
  const height = texture.image.height;
  const data = texture.image.data;

  const newWidth = width / 2;
  const newSize = newWidth * height;
  const pic1Data = new Uint8Array(4 * newSize);
  const pic2Data = new Uint8Array(4 * newSize);

  for (let line = 0; line < height; line++) {
    for (let pixel = 0; pixel < width; pixel++) {
      const pos1 = line * newWidth + pixel;
      const pos2 = line * newWidth + (pixel - newWidth);
      if (pixel < width / 2) {
        const stride = pixel * 4;
        pic1Data[pos1] = data[stride];
        pic1Data[pos1 + 1] = data[stride + 1];
        pic1Data[pos1 + 2] = data[stride + 2];
        pic1Data[pos1 + 3] = data[stride + 3];
      } else {
        const stride = pixel * 4;
        pic2Data[pos2] = data[stride];
        pic2Data[pos2 + 1] = data[stride + 1];
        pic2Data[pos2 + 2] = data[stride + 2];
        pic2Data[pos2 + 3] = data[stride + 3];
      }
    }
  }

  return [pic1Data, pic2Data];
}

module.exports = {
  getSkyBoxCubeTexture,
  getGroundTexture,
};
