import { Float32, Uint32, Uint8, QWord } from "./types";
import { String16, Pointer, List, Struct } from "./types";

const area = {
  chunk: "area",
  name: "PackMapAreas",
  version: 4,
  definitions: {
    PackMapAreaPolygon: { points: List(Float32, 3), height: Float32 },
    PackMapAreaPortal: {
      position: List(Float32, 3),
      rotation: List(Float32, 3)
    },
    PackMapAreaVolume: {
      portals: List("PackMapAreaPortal"),
      position: List(Float32, 3),
      extents: List(Float32, 3),
      pointInterior: List(Float32, 3),
      pointExterior: List(Float32, 3)
    },
    PackMapArea: {
      token: QWord,
      type: Uint8,
      floor: Uint8,
      flags: Uint32,
      polygon: Struct("PackMapAreaPolygon"),
      volume: Pointer("PackMapAreaVolume")
    },
    PackMapAreaTool: { annotation: String16, renderOffset: Float32 }
  },
  root: { areas: List("PackMapArea"), areaTools: List("PackMapAreaTool") }
};

module.exports = {
  area: [area]
};
