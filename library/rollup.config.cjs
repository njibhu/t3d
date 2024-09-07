"use strict";

const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
    input: './src/T3DLib.ts',
    output: {
        file: './build/T3D.js',
        format: 'iife',
        name: 'T3D',
        sourcemap: true
    },
    external: ["t3d-parser"],
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
    ]
}