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
      .src(`./node_modules/t3d-toolsjs/t3dworker.js`)
      .pipe(rename("t3dworker.js"))
      .pipe(gulp.dest("./dist/static")),
    gulp
      .src([
        `../../node_modules/w2ui/w2ui-1.4.3.min.js`,
        `../../node_modules/w2ui/w2ui-1.4.3.min.css`,
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

function MapRenderer() {
  return [
    buildExample("MapRenderer/index.js"),
    copyExampleAssets("MapRenderer/index.html"),
  ];
}

function LocalReaderV2() {
  return [
    buildExample("LocalReaderV2/index.js"),
    copyExampleAssets("LocalReaderV2/index.html"),
  ];
}

function ModelRenderer() {
  return [
    buildExample("ModelRenderer/index.js"),
    copyExampleAssets("ModelRenderer/index.html"),
  ];
}

function Tyria2D() {
  return [
    buildExample("Tyria2D/index.js"),
    copyExampleAssets("Tyria2D/index.html"),
  ];
}

gulp.task("default", () =>
  Promise.all([
    ...statics(),
    ...MapRenderer(),
    ...LocalReaderV2(),
    ...ModelRenderer(),
    ...Tyria2D(),
  ])
);

gulp.task("watch", () => {
  const delay = 500;

  gulp.watch("src/MapRenderer/*", { delay }, Promise.all(MapRenderer()));
  gulp.watch("src/LocalReaderV2/*", { delay }, Promise.all(LocalReaderV2()));
  gulp.watch("src/ModelRenderer/*", { delay }, Promise.all(ModelRenderer()));
  gulp.watch("src/Tyria2D/*", { delay }, Promise.all(Tyria2D()));
  gulp.watch("src/index.html", { delay }, Promise.all(statics()));
  gulp.watch(
    "node_modules/t3d-lib/src/**/*",
    { delay },
    gulp.series("default")
  );
});
