import eslint from '@eslint/js';
import globals from "globals";

export default [
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        Stats: "readonly",
        THREE: "readonly",
        T3D: "writable",
        T3DParser: "readonly",
        $: "readonly",
        w2ui: "readonly",
        w2popup: "readonly",
      },
    }
  }
];
