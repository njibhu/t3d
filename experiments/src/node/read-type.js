/**
 * cli example:
 * - node ./src/node/extract-textures.js "path/to/Gw2.dat" "outputPath"
 */

const T3D = require("../../../library/src/T3D-node");
const fs = require("fs");

if (process.argv.length < 3) {
  console.log("Missing arguments. Expected: filePath");
  process.exit(1);
}

const filePath = process.argv[2];

T3D.getLocalReader(
  filePath,
  async (localReader) => {
    console.log("Loaded!");

    const fileList = await localReader.readFileList();
    fs.writeFileSync("../temp/files.json", JSON.stringify(fileList));

    const baseId = 2295507;
    const res = await localReader._readFileType(baseId);
    console.log(res);

    process.exit();
  },
  "./dist/static/t3dworker.js",
  false
);
