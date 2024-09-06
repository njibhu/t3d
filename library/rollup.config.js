import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/T3DLib.ts',
  output: {
    file: 'build/T3D.js',
    format: 'iife',          // Immediately Invoked Function Expression, for browser
    name: 'T3D',       // Global name exposed to globalThis
    sourcemap: true
  },
  external: ['three'],   // External dependencies won't be bundled
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
  ]
};
