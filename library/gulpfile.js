"use strict";

/* Gulp modules and requires */
const gulp = require("gulp");
const rollup = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');

gulp.task('T3D', () => {
	return rollup
		.rollup({
			input: './src/T3DLib.ts',
      plugins: [
        resolve(),
        commonjs(),
        typescript(),
      ]
		})
		.then(bundle => {
			return bundle.write({
				file: './build/T3D.js',
				format: 'iife',
				name: 'T3D',
				sourcemap: true
			});
		});
});

// Default task
gulp.task('default', gulp.series('T3D'));