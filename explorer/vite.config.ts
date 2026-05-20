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
    port: 8081,
    strictPort: true,
    fs: {
      allow: [".."],
    },
  },
  preview: {
    port: 8081,
    strictPort: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: "../t3dtools.js/t3dworker.js", dest: "static" },
        { src: "../t3dtools.js/t3dworker.wasm", dest: "static" },
        { src: "./external-assets/gw2/Background5_2560_1440.jpg", dest: "static" },
      ],
    }),
  ],
  optimizeDeps: {
    include: ["three", "t3d-lib"],
  },
});
