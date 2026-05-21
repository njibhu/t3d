import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "node:path";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "t3d-lib": path.resolve(__dirname, "../library/build/T3D.mjs"),
      "t3d-parser": path.resolve(__dirname, "../parser/build/t3d-parser.mjs"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    target: "es2022",
  },
  server: {
    port: 8080,
    strictPort: true,
    fs: {
      allow: [".."],
    },
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: "../t3dtools.js/t3dworker.js", dest: "static" },
        { src: "../t3dtools.js/t3dworker.wasm", dest: "static" },
      ],
      // Reload the page when the worker is rebuilt so the new code is picked up.
      watch: { reloadPageOnChange: true },
    }),
    {
      // The browser HTTP-caches Worker scripts, so after a WSL rebuild of
      // t3dworker.js/.wasm an open tab will keep running the stale version.
      // Dev-only middleware that forces a fresh fetch for those files.
      name: "no-cache-t3dworker",
      apply: "serve",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && /\/static\/t3dworker\.(?:js|wasm)(?:\?|$)/.test(req.url)) {
            res.setHeader("Cache-Control", "no-store, must-revalidate");
          }
          next();
        });
      },
    },
  ],
  optimizeDeps: {
    include: ["three"],
    // t3d-lib and t3d-parser are file-aliased to ../{library,parser}/build/*.mjs.
    // Pre-bundling them caches the file content in node_modules/.vite/deps and
    // does NOT auto-invalidate when those files change — meaning a fresh
    // library/parser build won't be picked up until the cache is cleared.
    // Excluding them makes Vite serve the alias targets directly each request.
    exclude: ["t3d-lib", "t3d-parser"],
  },
});
