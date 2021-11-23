"use strict";

/* Gulp modules and requires */
const browserify = require("browserify");
const gulp = require("gulp");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const sourcemaps = require("gulp-sourcemaps");
const log = require("gulplog");
const uglifyjs = require("uglify-es");
const composer = require("gulp-uglify/composer");
const uglify = composer(uglifyjs, console);
const tsify = require("tsify");

gulp.task("T3D", function () {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: "./src/T3DLib.js",
    debug: true,
    standalone: "T3D",
  }).plugin(tsify, {
    allowJs: true,
  });

  return (
    b
      .bundle()
      .pipe(source(`T3D.js`))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      // Add transformation tasks to the pipeline here.
      .pipe(uglify())
      .on("error", log.error)
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("build"))
  );
});

gulp.task("copy", function () {
  return gulp
    .src([`./build/T3D.js`, `./build/T3D.js.map`])
    .pipe(gulp.dest("../examples/dist/static"))
    .pipe(gulp.dest("../explorer/dist/static"));
});

gulp.task("watch", function () {
  gulp.watch(["src/**/*.js"], gulp.series("T3D"));
});

gulp.task("default", gulp.series("T3D"));
