import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

// Explorer-scoped flat config. Unlike the repo-root config (legacy JS + jQuery/w2ui
// globals), the rewrite is strict TypeScript with no global library objects, so we lint
// it with type-aware typescript-eslint rules instead.
export default tseslint.config(
  {
    ignores: ["dist/**", ".test-dist/**", "node_modules/**"],
  },
  eslint.configs.recommended,
  // Type-aware linting for application source and tests (the tsconfig project).
  {
    files: ["src/**/*.ts", "test/**/*.ts"],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/only-throw-error": "error",
    },
  },
  // Node-side config files (Vite/ESLint config) are linted without type information.
  {
    files: ["*.mjs", "vite.config.ts"],
    extends: [tseslint.configs.base],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
);
