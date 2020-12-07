//Load version from package.json
const gulp = require("gulp");

function copyStaticAssets() {
  return [
    gulp
      .src([
        `../t3dtools.js/t3dworker.js`,
        `../t3dtools.js/t3dworker.wasm`,
        `../node_modules/w2ui/w2ui-1.4.3.min.js`,
        `../node_modules/w2ui/w2ui-1.4.3.min.css`,
        `../node_modules/three/build/three.js`,
        `../node_modules/three/examples/js/controls/FlyControls.js`,
        `../node_modules/three/examples/js/controls/PointerLockControls.js`,
        `../node_modules/three/examples/js/controls/OrbitControls.js`,
        `../node_modules/three/examples/js/exporters/OBJExporter.js`,
        `../node_modules/jquery/dist/jquery.js`,
        `../node_modules/DataStream.js/DataStream.js`,
        `../library/build/T3D.js`,
        `../library/build/T3D.js.map`,
      ])
      .pipe(gulp.dest("./dist/static")),
  ];
}

function copyExperiments() {
  return [gulp.src("src/**/*").pipe(gulp.dest("dist/"))];
}

gulp.task("default", () => Promise.all([copyExperiments(), ...copyStaticAssets()]));
