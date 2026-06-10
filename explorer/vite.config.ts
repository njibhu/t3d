/// <reference types="vitest/config" />
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";

const explorerRoot = path.dirname(fileURLToPath(import.meta.url));
const workerSourceRoot = path.resolve(explorerRoot, "../t3dtools.js");

/**
 * Serves the prebuilt t3dworker.{js,wasm} from the sibling t3dtools.js package during
 * dev (with no-store headers) and copies them into dist/static on build. These files are
 * not importable modules, so they cannot go through normal asset handling.
 */
function t3dWorkerPlugin(): Plugin {
  return {
    name: "explorer-t3d-worker",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0] ?? "";
        if (url !== "/static/t3dworker.js" && url !== "/static/t3dworker.wasm") {
          next();
          return;
        }
        const fileName = path.basename(url);
        fs.readFile(path.join(workerSourceRoot, fileName))
          .then((content) => {
            res.statusCode = 200;
            res.setHeader("Cache-Control", "no-store, must-revalidate");
            res.setHeader("Content-Type", fileName.endsWith(".wasm") ? "application/wasm" : "text/javascript");
            res.end(content);
          })
          .catch(next);
      });
    },
    async generateBundle() {
      const [workerJs, workerWasm] = await Promise.all([
        fs.readFile(path.join(workerSourceRoot, "t3dworker.js")),
        fs.readFile(path.join(workerSourceRoot, "t3dworker.wasm")),
      ]);
      this.emitFile({ type: "asset", fileName: "static/t3dworker.js", source: workerJs });
      this.emitFile({ type: "asset", fileName: "static/t3dworker.wasm", source: workerWasm });
    },
  };
}

export default defineConfig({
  root: explorerRoot,
  base: "./",
  resolve: {
    alias: {
      "t3d-lib": path.resolve(explorerRoot, "../library/build/T3D.mjs"),
      "t3d-parser": path.resolve(explorerRoot, "../parser/build/t3d-parser.mjs"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    target: "es2022",
  },
  server: {
    port: 8081,
    strictPort: true,
    fs: {
      allow: [path.resolve(explorerRoot, "..")],
    },
  },
  preview: {
    port: 8081,
    strictPort: true,
  },
  plugins: [t3dWorkerPlugin()],
  optimizeDeps: {
    include: ["three"],
    exclude: ["t3d-lib", "t3d-parser"],
  },
  test: {
    environment: "jsdom",
    setupFiles: ["test/setup.ts"],
    include: ["test/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/store/**", "src/components/**"],
      thresholds: {
        lines: 70,
        functions: 70,
        statements: 70,
        branches: 70,
      },
    },
  },
});
