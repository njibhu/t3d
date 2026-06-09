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

| Script | Description |
| --- | --- |
| `npm run dev -w explorer` | Vite dev server on port 8081 |
| `npm run build -w explorer` | Production bundle into `dist/` (esbuild; does not type-check) |
| `npm run preview -w explorer` | Preview the production build |
| `npm run typecheck -w explorer` | `tsc --noEmit` for app code and the Vite config |
| `npm run test -w explorer` | Vitest unit/component suite (jsdom) |
| `npm run lint:check -w explorer` | Type-aware ESLint (`typescript-eslint`) |
| `npm run format:check -w explorer` | Prettier check |

## Architecture

The app is framework-free but reactive. State lives in small stores; a tiny signals
primitive drives the UI so components subscribe instead of being manually re-rendered.

```
main.ts            Bootstrap: progress bus, logger, mounts App.
app.ts             Composition root — owns stores + scene, wires UI.
store/
  reactive.ts      signal() / computed() / effect() — the reactivity primitive.
  archive-store.ts .dat opening + incremental map indexing (observable).
  url-state.ts     Shareable URL-hash (de)serialization, with legacy aliases.
  layer-state.ts   Zone / props / collisions load + visibility state machine.
  session-state.ts Camera mode, physics, antialias (non-persisted).
  map-catalog.ts   Region/map combobox option builders + filtering.
  progress-bus.ts  Bridges t3d-lib progress logging to the UI.
components/
  component.ts     Base class: lifecycle + listener/binding disposal (destroy()).
  combobox.ts      Accessible autocomplete.
  segmented-control.ts / progress-bar.ts
scene/
  explorer-scene.ts Three.js scene: rendering, cameras, lighting, physics.
errors.ts          toError / toErrorMessage helpers.
```

State is split three ways: **URL state** (bookmarkable), **session state** (per-tab,
not persisted), and **layer runtime state** (load/visibility tracking).

## Notes for contributors

- Components must extend `Component` and register listeners via `this.listen(...)` and
  bindings via `this.bind(...)` so they tear down cleanly in `destroy()`.
- `typecheck` compiles the `t3d-lib` / `t3d-parser` **source** (the libraries publish
  `.ts` as their types and do not emit `.d.ts`). Until they emit declarations, explorer's
  `tsc` is coupled to their source type-health. `build` (Vite/esbuild) is independent of
  this and always reflects the runtime bundle.
