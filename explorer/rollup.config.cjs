const copy = require('rollup-plugin-copy');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');

module.exports = {
  input: "src/index.js",
  output: {
    dir: 'dist/',
    format: 'es',
  },
  plugins: [
    resolve(),
    commonjs(),
    copy({
      targets: [
        { src: 'src/*.html', dest: 'dist/' },
        { src: 'src/*.css', dest: 'dist/' },
      ],
    }),
    // Static dependencies
    copy({
      targets: [
        `../t3dtools.js/t3dworker.js`,
        `../t3dtools.js/t3dworker.wasm`,
        `../node_modules/three/build/three.js`,
        `../node_modules/three/examples/js/controls/FlyControls.js`,
        `../node_modules/three/examples/js/controls/OrbitControls.js`,
        `../node_modules/three/examples/js/controls/PointerLockControls.js`,
        `../node_modules/three/examples/js/libs/stats.min.js`,
        `../node_modules/jquery/dist/jquery.js`,
        `../library/build/T3D.js`,
        `../library/build/T3D.js.map`,
        `../parser/build/t3d-parser.js`,
        `../parser/build/t3d-parser.js.map`,
        `./external-assets/gw2/Background1_2400_1200.jpg`,
        `./external-assets/gw2/Background2_3840_2026.jpg`,
        `./external-assets/gw2/Background3_4096x2027.jpg`,
        `./external-assets/github/GitHub-Mark-120px-plus.png`,
      ].map(src => ({ src, dest: 'dist/static' })),
    }),
  ],
};
