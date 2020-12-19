module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-tabs": "error",
    camelcase: 0,
    "no-var": "error",
    eqeqeq: "error",
    semi: ["error", "always"],
    "prefer-const": "error",
  },
};
