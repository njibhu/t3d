'use strict';

//Load version from package.json
const version = require('./package.json').version;

/* Gulp modules and requires */
const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const log = require('gulplog');
const uglifyjs = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = composer(uglifyjs, console);

gulp.task('T3D', function(){
	// set up the browserify instance on a task basis
	let b = browserify({
		entries: './src/T3DLib.js',
		debug: true,
		standalone: 'T3D'
	});

	return b.bundle()
		.pipe(source(`T3D-${version}.js`))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
			// Add transformation tasks to the pipeline here.
			.pipe(uglify())
			.on('error', log.error)
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('build'))
		.pipe(gulp.dest('./examples/static'));
});

gulp.task('formats', function(){
	let b = browserify({
		entries: './src/format/chunks/AllFormats.js',
		debug: true,
	});

	return b.bundle()
		.pipe(source(`T3D-${version}.Formats.js`))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
			.pipe(uglify())
			.on('error', log.error)
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('build'))
		.pipe(gulp.dest('./examples/static'));
})

gulp.task('watch', function() {
	gulp.watch(['src/**/*.js'], gulp.series('T3D'));
});
  
gulp.task('default', gulp.series('T3D'));
