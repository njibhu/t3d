"use strict";

const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const json = require("@rollup/plugin-json");

module.exports = {
    input: './src/T3DLib.ts',
    output: {
        file: './build/T3D.js',
        format: 'iife',
        name: 'T3D',
        sourcemap: true,
        globals: {
          "t3d-parser": "T3DParser"
        },
        banner: `/*
Copyright © 2024 T3D project contributors.

This file is part of the T3D Library.

T3D Library is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

T3D Library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with the T3D Library. If not, see <http://www.gnu.org/licenses/>.
*/
`
    },
    external: ["t3d-parser"],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      json(),
    ]
}
