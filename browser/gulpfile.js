//Load version from package.json
const gulp = require("gulp");
const browserify = require("browserify");
const sourcemaps = require("gulp-sourcemaps");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const rename = require("gulp-rename");

function copyAssets(asset) {
  gulp.src(`./src/${asset}`).pipe(rename(asset)).pipe(gulp.dest("./dist/"));
}

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
        `../parser/build/t3d-parser.js`,
        `../parser/build/t3d-parser.js.map`,
      ])
      .pipe(gulp.dest("./dist/static")),
  ];
}

function build(entryPoint) {
  const b = browserify({
    entries: [`./src/${entryPoint}`],
    debug: true,
  });

  return b
    .bundle()
    .pipe(source(`./src/${entryPoint}`))
    .pipe(rename(entryPoint))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist"));
}

gulp.task("default", () => Promise.all([copyStaticAssets(), copyAssets("index.html"), build("index.js")]));
