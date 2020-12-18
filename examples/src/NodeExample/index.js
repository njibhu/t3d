var DataStream = require("../../dist/static/DataStream");
global.DataStream = DataStream;

const { Blob, FileReader } = require("vblob");
global.Blob = Blob;
global.FileReader = FileReader;
global.window = {};
global.window.FileReader = FileReader;

var THREE = require("../../dist/static/three");
global.THREE = THREE;
require("../../dist/static/GLTFExporter");

var Worker = require("web-worker");
global.Worker = Worker;

const fs = require("fs");
global.fs = fs;

let T3D = require("../../../library/src/T3DLib");
global.T3D = T3D;

const filePath = process.argv[2];
const archive = { filePath };
archive.filePath = filePath;

T3D.getLocalReader(
  archive,
  async (lr) => {
    console.log("Loaded!");
    const mapFileList = await lr.getMapList();
    console.log(mapFileList[0]);
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
    T3D.renderMapContentsAsync(lr, mapFileList[0].baseId, renderers, (context) => {
      console.log("Map loaded !");
      const scene = new THREE.Scene();
      for (const elem of T3D.getContextValue(context, T3D.TerrainRenderer, "terrainTiles")) {
        scene.add(elem);
      }
      for (const elem of T3D.getContextValue(context, T3D.HavokRenderer, "meshes")) {
        scene.add(elem);
      }

      const exporter = new THREE.GLTFExporter();
      exporter.parse(scene, (gltf) => {
        console.log("Youpi!");
        console.log(JSON.stringify(gltf).length);
        process.exit(0);
      });

      console.log("Scene loaded !");
    });
  },
  "./dist/static/t3dworker.js",
  false
);
