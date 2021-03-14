/**
 * cli example:
 * - node ./src/node/extract-textures.js "path/to/Gw2.dat" "outputPath"
 */

const DataStream = require("../../dist/static/DataStream");
global.DataStream = DataStream;

const { Blob, FileReader } = require("vblob");
global.Blob = Blob;
global.FileReader = FileReader;
global.window = {};
global.window.FileReader = FileReader;

const THREE = require("../../dist/static/three");
global.THREE = THREE;
require("../../dist/static/GLTFExporter");

const Worker = require("web-worker");
global.Worker = Worker;

const fs = require("fs");
global.fs = fs;

const T3D = require("../../../library/src/T3DLib");
global.T3D = T3D;

const PNG = require("pngjs").PNG;

if (process.argv.length < 3) {
  console.log("Missing arguments. Expected: filePath, outputFolder");
  process.exit(1);
}

const filePath = process.argv[2];
const outputFolder = process.argv[3];

T3D.getLocalReader(
  filePath,
  async (localReader) => {
    console.log("Loaded!");
    console.log("Scanning archive");
    const fileList = await localReader.readFileList();
    const textureFileArray = fileList.filter(
      (file) =>
        file.fileType === "TEXTURE_ATEP" ||
        file.fileType === "TEXTURE_ATEX" ||
        file.fileType === "TEXTURE_ATEC" ||
        file.fileType === "TEXTURE_ATET" ||
        file.fileType === "TEXTURE_ATEU" ||
        file.fileType === "TEXTURE_ATTX"
    );

    for (const textureFile of textureFileArray) {
      console.log(textureFile.baseIdList[0]);

      const image = await localReader.readFile(textureFile.mftId, true);
      const uica = new Uint8ClampedArray(new Uint8Array(image.buffer));
      const img_png = new PNG({ width: image.imageWidth, height: image.imageHeight });
      img_png.data = Buffer.from(uica);
      img_png.pack().pipe(fs.createWriteStream(`${outputFolder}/${textureFile.baseIdList[0]}.png`));
    }
    setTimeout(() => {
      process.exit();
    }, 5000);
  },
  "./dist/static/t3dworker.js",
  false
);
