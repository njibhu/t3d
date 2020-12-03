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
    gulp.src(`../t3dtools.js/t3dworker.js`).pipe(rename("t3dworker.js")).pipe(gulp.dest("./dist/static")),
    gulp
      .src([
        `../node_modules/three/build/three.js`,
        `../node_modules/three/examples/js/controls/FlyControls.js`,
        `../node_modules/three/examples/js/controls/OrbitControls.js`,
        `../node_modules/three/examples/js/controls/FirstPersonControls.js`,
        `../node_modules/jquery/dist/jquery.js`,
        `../node_modules/DataStream.js/DataStream.js`,
        `../library/build/T3D.js`,
        `../library/build/T3D.js.map`,
        `./external-assets/gw2/Background1_2400_1200.jpg`,
        `./external-assets/gw2/Background2_3840_2026.jpg`,
        `./external-assets/github/GitHub-Mark-120px-plus.png`,
      ])
      .pipe(gulp.dest("./dist/static")),
  ];
}

function Explorer() {
  return [buildExample("index.js"), copyExampleAssets("index.html"), copyExampleAssets("style.css")];
}

gulp.task("default", () => Promise.all([...copyStaticAssets(), ...Explorer()]));

gulp.task("watch", () => {
  const delay = 500;

  gulp.watch("src/*", { delay }, Promise.all(Explorer()));
  gulp.watch("../library/src/**/*", { delay }, gulp.series("default"));
});
