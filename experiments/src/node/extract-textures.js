/**
 * cli example:
 * - node ./src/node/extract-textures.js "path/to/Gw2.dat" "outputPath"
 */

const fs = require("fs");
const T3D = require("../../../library/src/T3D-node");

const PNG = require("pngjs").PNG;

if (process.argv.length < 3) {
  console.log("Missing arguments. Expected: filePath, outputFolder");
  process.exit(1);
}

const filePath = process.argv[2];
const outputFolder = process.argv[3];
mkdir(outputFolder);

T3D.getLocalReader(
  filePath,
  async (localReader) => {
    console.log("Loaded!");
    console.log("Scanning archive");
    const fileList = await localReader.readFileList();

    // PNG files
    mkdir(`${outputFolder}/png`);
    const pngFileArray = fileList.filter((file) => file.fileType === "TEXTURE_PNG");
    for (const pngFile of pngFileArray) {
      console.log("PNG", pngFile.baseIdList[0]);
      try {
        const pngFileContent = await localReader.readFile(pngFile.mftId);
        fs.writeFileSync(`${outputFolder}/png/${pngFile.baseIdList[0]}.png`, Buffer.from(pngFileContent.buffer));
      } catch (_err) {
        continue;
      }
    }

    // DDS files
    mkdir(`${outputFolder}/dds`);
    const ddsFileArray = fileList.filter((file) => file.fileType === "TEXTURE_DDS");
    for (const ddsFile of ddsFileArray) {
      console.log("DDS", ddsFile.baseIdList[0]);
      try {
        const ddsFileContent = await localReader.readFile(ddsFile.mftId);
        fs.writeFileSync(`${outputFolder}/dds/${ddsFile.baseIdList[0]}.dds`, Buffer.from(ddsFileContent.buffer));
      } catch (_err) {
        continue;
      }
    }

    // Arenanet Textures
    mkdir(`${outputFolder}/AnetTextures`);
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
      console.log(textureFile.fileType, textureFile.baseIdList[0]);

      const image = await localReader.readFile(textureFile.mftId, true);
      const uica = new Uint8ClampedArray(new Uint8Array(image.buffer));
      const img_png = new PNG({ width: image.imageWidth, height: image.imageHeight });
      img_png.data = Buffer.from(uica);
      img_png.pack().pipe(fs.createWriteStream(`${outputFolder}/AnetTextures/${textureFile.baseIdList[0]}.png`));
    }
    setTimeout(() => {
      process.exit();
    }, 5000);
  },
  "./dist/static/t3dworker.js",
  false
);

function mkdir(folderName) {
  try {
    fs.mkdirSync(folderName);
  } catch (_err) {
    return;
  }
}
