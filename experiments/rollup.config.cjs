const copy = require("rollup-plugin-copy");
const { globSync } = require("glob");

module.exports = {
  input: globSync("src/js/*.js"),
  output: {
    dir: "dist/js",
    format: "es",
  },
  plugins: [
    copy({
      targets: [{ src: "src/**/*.html", dest: "dist/" }],
    }),
    // Static dependencies
    copy({
      targets: [
        { src: "../t3dtools.js/t3dworker.js", dest: "dist/static" },
        { src: "../t3dtools.js/t3dworker.wasm", dest: "dist/static" },
        { src: "../node_modules/w2ui/w2ui-1.4.3.min.js", dest: "dist/static" },
        { src: "../node_modules/w2ui/w2ui-1.4.3.min.css", dest: "dist/static" },
        { src: "../node_modules/three/build/three.js", dest: "dist/static" },
        { src: "../node_modules/three/examples/js/controls/FlyControls.js", dest: "dist/static" },
        { src: "../node_modules/three/examples/js/controls/PointerLockControls.js", dest: "dist/static" },
        { src: "../node_modules/three/examples/js/controls/OrbitControls.js", dest: "dist/static" },
        { src: "../node_modules/three/examples/js/exporters/OBJExporter.js", dest: "dist/static" },
        { src: "../node_modules/three/examples/js/exporters/GLTFExporter.js", dest: "dist/static" },
        { src: "../node_modules/jquery/dist/jquery.js", dest: "dist/static" },
        { src: "../library/build/T3D.js", dest: "dist/static" },
        { src: "../library/build/T3D.js.map", dest: "dist/static" },
        { src: "../parser/build/t3d-parser.js", dest: "dist/static" },
        { src: "../parser/build/t3d-parser.js.map", dest: "dist/static" },
      ],
    }),
  ],
};
