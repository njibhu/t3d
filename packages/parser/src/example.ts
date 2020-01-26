import {
  FixedArray,
  DynArray,
  RefArray,
  Uint8,
  Float64,
  Uint32,
  Filename,
  Float32,
  Pointer,
  Uint64,
  String16,
  CString,
  Uint16,
  Fileref
} from "./types";

module.exports = [
  {
    chunk: "area",
    name: "PackMapAreas",
    version: 4,
    definitions: {
      PackMapAreaPolygon: { points: FixedArray(Float32, 3), height: Float32 },
      PackMapAreaPortal: {
        position: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3)
      },
      PackMapAreaVolume: {
        portals: DynArray("PackMapAreaPortal"),
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        pointInterior: FixedArray(Float32, 3),
        pointExterior: FixedArray(Float32, 3)
      },
      PackMapArea: {
        token: Uint64,
        type: Uint8,
        floor: Uint8,
        flags: Uint32,
        polygon: "PackMapAreaPolygon",
        volume: Pointer("PackMapAreaVolume")
      },
      PackMapAreaTool: { annotation: String16, renderOffset: Float32 }
    },
    root: {
      areas: DynArray("PackMapArea"),
      areaTools: DynArray("PackMapAreaTool")
    }
  }
];
