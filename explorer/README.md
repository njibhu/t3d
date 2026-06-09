# T3D Explorer

A modern, browser-based explorer for Guild Wars 2 map data, built on
[Three.js](https://threejs.org/) and the `t3d-lib` / `t3d-parser` workspace packages.
Open a local `.dat` archive, browse maps by region, and fly through terrain, props, and
collision geometry with orbital or first-person cameras.

This is the TypeScript + Vite rewrite of the legacy explorer (which was pinned to an old
Three.js release with incompatible controls and broken async rendering).

## Quickstart

Install dependencies from the **monorepo root** (this is an npm workspace):

```bash
npm install
```

Build the workspace dependencies the explorer consumes at runtime (the dev server loads
the libraries' built output):

```bash
npm run build -w parser
npm run build -w library
```

Then start the dev server (http://localhost:8081):

```bash
npm run dev -w explorer
```

Click **Open archive** and select a Guild Wars 2 `Gw2.dat` file. Once it has been
indexed, pick a region and a map, then **Load map**.

## Scripts

| Script                             | Description                                                   |
| ---------------------------------- | ------------------------------------------------------------- |
| `npm run dev -w explorer`          | Vite dev server on port 8081                                  |
| `npm run build -w explorer`        | Production bundle into `dist/` (esbuild; does not type-check) |
| `npm run preview -w explorer`      | Preview the production build                                  |
| `npm run typecheck -w explorer`    | `tsc --noEmit` for app code and the Vite config               |
| `npm run test -w explorer`         | Vitest unit/component suite (jsdom)                           |
| `npm run lint:check -w explorer`   | Type-aware ESLint (`typescript-eslint`)                       |
| `npm run format:check -w explorer` | Prettier check                                                |
