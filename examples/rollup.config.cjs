const copy = require('rollup-plugin-copy');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = [
  {
    input: 'src/empty.js',  // Dummy input since we are just copying files
    output: {
      dir: 'dist/static',
      format: 'es',
    },
    plugins: [
      copy({
        targets: [
          { src: '../t3dtools.js/t3dworker.js', dest: 'dist/static' },
          { src: '../t3dtools.js/t3dworker.wasm', dest: 'dist/static' },
          { src: '../node_modules/w2ui/w2ui-1.4.3.min.js', dest: 'dist/static' },
          { src: '../node_modules/w2ui/w2ui-1.4.3.min.css', dest: 'dist/static' },
          { src: '../node_modules/three/build/three.js', dest: 'dist/static' },
          { src: '../node_modules/three/examples/js/libs/stats.min.js', dest: 'dist/static' },
          { src: '../node_modules/three/examples/js/controls/FlyControls.js', dest: 'dist/static' },
          { src: '../node_modules/three/examples/js/controls/PointerLockControls.js', dest: 'dist/static' },
          { src: '../node_modules/three/examples/js/controls/OrbitControls.js', dest: 'dist/static' },
          { src: '../node_modules/three/examples/js/exporters/OBJExporter.js', dest: 'dist/static' },
          { src: '../node_modules/jquery/dist/jquery.js', dest: 'dist/static' },
          { src: '../library/build/T3D.js', dest: 'dist/static' },
          { src: '../library/build/T3D.js.map', dest: 'dist/static' },
          { src: '../parser/build/t3d-parser.js', dest: 'dist/static' },
          { src: '../parser/build/t3d-parser.js.map', dest: 'dist/static' },
        ],
      }),
    ],
  },

  // Build for SimpleMapRenderer
  {
    input: 'src/SimpleMapRenderer/index.js',
    output: {
      file: 'dist/SimpleMapRenderer/index.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      copy({
        targets: [
          { src: 'src/SimpleMapRenderer/index.html', dest: 'dist/SimpleMapRenderer' },
        ],
      }),
    ],
  },

  // Build for MapExplorer
  {
    input: 'src/MapExplorer/index.js',
    output: {
      file: 'dist/MapExplorer/index.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      copy({
        targets: [
          { src: 'src/MapExplorer/index.html', dest: 'dist/MapExplorer' },
        ],
      }),
    ],
  },

  // Build for ModelRenderer
  {
    input: 'src/ModelRenderer/index.js',
    output: {
      file: 'dist/ModelRenderer/index.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      copy({
        targets: [
          { src: 'src/ModelRenderer/index.html', dest: 'dist/ModelRenderer' },
        ],
      }),
    ],
  },

  // Build for MapScan
  {
    input: 'src/MapScan/index.js',
    output: {
      file: 'dist/MapScan/index.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      copy({
        targets: [
          { src: 'src/MapScan/index.html', dest: 'dist/MapScan' },
        ],
      }),
    ],
  },
];
