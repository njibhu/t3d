//Load version from package.json
const gulp = require("gulp");
const browserify = require("browserify");
const sourcemaps = require("gulp-sourcemaps");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const rename = require("gulp-rename");

function copyExampleAssets(asset) {
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
      ])
      .pipe(gulp.dest("./dist/static")),
  ];
}

function buildExample(entryPoint) {
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

function statics() {
  return [copyExampleAssets("index.html"), ...copyStaticAssets()];
}

function SimpleMapRenderer() {
  return [buildExample("SimpleMapRenderer/index.js"), copyExampleAssets("SimpleMapRenderer/index.html")];
}

function MapExplorer() {
  return [buildExample("MapExplorer/index.js"), copyExampleAssets("MapExplorer/index.html")];
}

function ModelRenderer() {
  return [buildExample("ModelRenderer/index.js"), copyExampleAssets("ModelRenderer/index.html")];
}

function MapScan() {
  return [buildExample("MapScan/index.js"), copyExampleAssets("MapScan/index.html")];
}

gulp.task("default", () =>
  Promise.all([...statics(), ...SimpleMapRenderer(), ...MapExplorer(), ...ModelRenderer(), ...MapScan()])
);
