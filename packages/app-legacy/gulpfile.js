"use strict";

const version = require("./package.json").version;

const browserify = require("browserify");
const gulp = require("gulp");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const log = require("gulplog");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const uglifyjs = require("uglify-es");
const composer = require("gulp-uglify/composer");
const uglify = composer(uglifyjs, console);
const watch = require("gulp-watch");
const batch = require("gulp-batch");

gulp.task("default", function() {
  // set up the browserify instance on a task basis
  let b = browserify({
    entries: "./src/Tyria3DApp.js",
    glob: "./src/**/*.js",
    debug: true
  });

  return (
    b
      .bundle()
      .pipe(source(`T3DAPP-${version}.min.js`))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      // Add transformation tasks to the pipeline here.
      //.pipe(uglify())
      .on("error", log.error)
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./dist/build/"))
  );
});

gulp.task("three-bundle", function() {
  return gulp
    .src([
      "./dist/vendor/three/three.js",
      "./dist/vendor/three/DDSLoader.js",
      "./dist/vendor/three/FirstPersonControls.js",
      "./dist/vendor/three/OBJLoader.js",
      "./dist/vendor/three/OrbitControls.js",
      "./dist/vendor/three/PointerLockControls.js",
      "./dist/vendor/three/Projector.js",
      "./dist/vendor/three/TrackballControls.js"
    ])
    .pipe(concat({ path: "three-bundle.js" }))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/build/vendor"));
});

gulp.task("sass", function() {
  return gulp
    .src("./dist/css/sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(rename("__3d.css"))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("watch", function() {
  watch(
    "./src/**/*.js",
    batch(function(events, done) {
      gulp.start("t3dapp", done);
    })
  );
});
