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

function copyStaticAssets() {
  return [
    gulp
      .src(`../t3dtools.js/t3dworker.js`)
      .pipe(rename("t3dworker.js"))
      .pipe(gulp.dest("./dist/static")),
  ];
}

function Explorer() {
  return [buildExample("index.js"), copyExampleAssets("index.html")];
}

gulp.task("default", () => Promise.all([...copyStaticAssets(), ...Explorer()]));

gulp.task("watch", () => {
  const delay = 500;

  gulp.watch("src/*", { delay }, Promise.all(Explorer()));
  gulp.watch(
    "node_modules/t3d-lib/src/**/*",
    { delay },
    gulp.series("default")
  );
});
