# Api demo

## Render a map

```ts
import { Archive } from "newlib";

const archive = new Archive(buffer);

const options = {
  render: {
    terrain: true,
    props: true,
    zoneProps: true,
    physics: false,
  },
};
const mapData = await archive.renderMapFile(id, options);
```

Internally the environmentRenderer, HavokRenderer, PropertiesRenderer, TerrainRenderer and ZoneRenderer become submodules of the mapRenderer module.

## Render a model

```ts
import { Archive } from "newlib";

const archive = new Archive(buffer);

const options = {
  render: {
    // Should be default
    loadTextures: true,
    meshFormat: "THREE.js",
  },
};
const mapData = await archive.renderModelFile(id, options);
```

Shared logic between different renderer modules is shared through a common folder: utils/RenderUtils

MapFileList could become its own package
