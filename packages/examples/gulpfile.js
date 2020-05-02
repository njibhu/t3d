//Load version from package.json
const gulp = require("gulp");
const browserify = require("browserify");
const sourcemaps = require("gulp-sourcemaps");
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');

function copyExampleAssets(asset){
  gulp.src(`./src/${asset}`)
    .pipe(rename(asset))
    .pipe(gulp.dest('./dist/'));
}

function copyStaticAssets(){
  return [
    gulp.src(`./node_modules/t3d-toolsjs/t3dworker.js`)
      .pipe(rename("t3dworker.js"))
      .pipe(gulp.dest('./dist/static')),
    gulp.src([`./node_modules/w2ui/w2ui-1.4.3.min.js`, `./node_modules/w2ui/w2ui-1.4.3.min.css`])
      .pipe(gulp.dest('./dist/static'))
  ]
}

function buildExample(entryPoint) {
  const b = browserify({
    entries: [`./src/${entryPoint}`],
    debug: true
  });

  return b.bundle()
    .pipe(source(`./src/${entryPoint}`))
    .pipe(rename(entryPoint))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("./"))

    .pipe(gulp.dest("./dist"))
}

gulp.task("examples", () =>
  Promise.all([
    copyExampleAssets("index.html"),
    buildExample("MapRenderer/index.js"),
    copyExampleAssets("MapRenderer/index.html"),
    buildExample("LocalReaderV2/index.js"),
    copyExampleAssets("LocalReaderV2/index.html"),
    buildExample("ModelRenderer/index.js"),
    copyExampleAssets("ModelRenderer/index.html"),
    buildExample("Tyria2D/index.js"),
    copyExampleAssets("Tyria2D/index.html"),
    ...copyStaticAssets()
  ])
);



gulp.task("default", gulp.series(["examples"]));