"use strict";

const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
    input: './src/main.ts',
    output: {
        file: './build/t3d-parser.js',
        format: 'iife',
        name: 'FileParser',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
    ]
}
