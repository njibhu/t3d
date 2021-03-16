/**
 * cli example:
 * - node ./src/node/generateGLTF.js "path/to/Gw2.dat" "outputPath" mapId
 * (186397 - snowden drifts)
 */

const fs = require("fs");
const T3D = require("../../../library/src/T3D-node");
require("../../dist/static/GLTFExporter");

if (process.argv.length < 4) {
  console.log("Missing arguments. Expected: filePath, outputFolder, mapId");
  process.exit(1);
}

const filePath = process.argv[2];
const outputFolder = process.argv[3];
const mapId = Number.parseInt(process.argv[4]);
if (isNaN(mapId) || mapId < 0) {
  console.log("The mapId is not valid");
  process.exit(1);
}

T3D.getLocalReader(
  filePath,
  async (lr) => {
    console.log("Loaded!");
    const renderers = [
      {
        renderClass: T3D.EnvironmentRenderer,
        settings: {},
      },
      {
        renderClass: T3D.TerrainRenderer,
        settings: {
          export: true,
        },
      },
      {
        renderClass: T3D.HavokRenderer,
        settings: {
          export: true,
        },
      },
    ];
    T3D.renderMapContentsAsync(lr, mapId, renderers, (context) => {
      console.log("Map loaded !");
      const scene = new THREE.Scene();
      for (const elem of T3D.getContextValue(context, T3D.TerrainRenderer, "terrainTiles")) {
        scene.add(elem);
      }
      for (const elem of T3D.getContextValue(context, T3D.HavokRenderer, "meshes")) {
        scene.add(elem);
      }

      console.log("Scene loaded !");

      const exporter = new THREE.GLTFExporter();
      exporter.parse(scene, (gltf) => {
        fs.writeFileSync(`${outputFolder}/${mapId}.gltf`, JSON.stringify(gltf));
        process.exit(0);
      });
    });
  },
  "./dist/static/t3dworker.js",
  false
);
