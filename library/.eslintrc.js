module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ["eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    THREE: "readonly",
    DataStream: "readonly",
    T3D: "writable",
    "$": "readonly",
    "w2ui": "readonly",
    "w2popup": "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-tabs": 0,
    camelcase: 0,
    "no-var": "error",
    eqeqeq: "error",
    semi: ["error", "always"]
  }
};
