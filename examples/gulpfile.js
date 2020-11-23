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
    gulp.src(`../t3dtools.js/t3dworker.js`).pipe(rename("t3dworker.js")).pipe(gulp.dest("./dist/static")),
    gulp
      .src([
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

function LocalReaderV2() {
  return [buildExample("LocalReaderV2/index.js"), copyExampleAssets("LocalReaderV2/index.html")];
}

function ModelRenderer() {
  return [buildExample("ModelRenderer/index.js"), copyExampleAssets("ModelRenderer/index.html")];
}

function MapScan() {
  return [buildExample("MapScan/index.js"), copyExampleAssets("MapScan/index.html")];
}

function Tyria2D() {
  return [buildExample("Tyria2D/index.js"), copyExampleAssets("Tyria2D/index.html")];
}

gulp.task("default", () =>
  Promise.all([
    ...statics(),
    ...SimpleMapRenderer(),
    ...MapExplorer(),
    ...LocalReaderV2(),
    ...ModelRenderer(),
    ...Tyria2D(),
    ...MapScan(),
  ])
);

gulp.task("watch", () => {
  const delay = 500;

  gulp.watch("src/SimpleMapRenderer/*", { delay }, Promise.all(SimpleMapRenderer()));
  gulp.watch("src/MapExplorer/*", { delay }, Promise.all(MapExplorer()));
  gulp.watch("src/LocalReaderV2/*", { delay }, Promise.all(LocalReaderV2()));
  gulp.watch("src/ModelRenderer/*", { delay }, Promise.all(ModelRenderer()));
  gulp.watch("src/Tyria2D/*", { delay }, Promise.all(Tyria2D()));
  gulp.watch("src/index.html", { delay }, Promise.all(statics()));
  gulp.watch("../library/src/**/*", { delay }, gulp.series("default"));
});
