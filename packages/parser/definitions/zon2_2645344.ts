import { Filename, Uint32, Uint8, FixedArray, Float32, DynArray, Pointer, String16, Uint64, Uint16 } from "../src/types";

module.exports = [
  {
    chunkName: "zon2",
    name: "PackMapZonesV12",
    version: 11,
    definitions: {
      PackMapZoneDefV12: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV12"),
        timeStamp: Uint64
      },
      PackMapZoneLayerDefV12: {
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        noise: Uint8,
        layerFlags: Uint32,
        modelArray: DynArray("PackMapZoneModelV12"),
        subModel: Pointer("PackMapZoneModelV12")
      },
      PackMapZoneModelV12: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32
      },
      PackMapZoneV12: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV12"),
        collideData: DynArray("PackMapZoneCollideDataV12"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2))
      },
      PackMapZoneEncodingDataV12: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV12: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV12"),
      zoneArray: DynArray("PackMapZoneV12")
    }
  },
  {
    chunkName: "zon2",
    name: "PackMapZonesV13",
    version: 12,
    definitions: {
      PackMapZoneDefV13: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV13"),
        timeStamp: Uint64
      },
      PackMapZoneLayerDefV13: {
        type: Uint8,
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        noise: Uint8,
        layerFlags: Uint32,
        modelArray: DynArray("PackMapZoneModelV13"),
        subModel: Pointer("PackMapZoneModelV13")
      },
      PackMapZoneModelV13: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32
      },
      PackMapZoneV13: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV13"),
        collideData: DynArray("PackMapZoneCollideDataV13"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2))
      },
      PackMapZoneEncodingDataV13: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV13: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV13"),
      zoneArray: DynArray("PackMapZoneV13")
    }
  },
  {
    chunkName: "zon2",
    name: "PackMapZonesV14",
    version: 13,
    definitions: {
      PackMapZoneDefV14: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV14"),
        timeStamp: Uint64,
        pageTable: Pointer("PackMapZonePageTableV2")
      },
      PackMapZoneLayerDefV14: {
        type: Uint8,
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        noise: Uint8,
        layerFlags: Uint32,
        modelArray: DynArray("PackMapZoneModelV14"),
        subModel: Pointer("PackMapZoneModelV14")
      },
      PackMapZoneModelV14: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32
      },
      PackMapZonePageTableV2: {
        pageArray: DynArray("PackMapZonePageV2"),
        flags: Uint32
      },
      PackMapZonePageV2: {
        flags: DynArray(Uint8),
        chunkCoord: FixedArray(Uint32, 2),
        seed: Uint8,
        paintFlags: DynArray(Uint32)
      },
      PackMapZoneV14: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV14"),
        collideData: DynArray("PackMapZoneCollideDataV14"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2))
      },
      PackMapZoneEncodingDataV14: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV14: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV14"),
      zoneArray: DynArray("PackMapZoneV14")
    }
  },
  {
    chunkName: "zon2",
    name: "PackMapZonesV15",
    version: 14,
    definitions: {
      PackMapZoneDefV15: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV15"),
        timeStamp: Uint64,
        pageTable: Pointer("PackMapZonePageTableV3")
      },
      PackMapZoneLayerDefV15: {
        type: Uint8,
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        noise: Uint8,
        layerFlags: Uint32,
        modelArray: DynArray("PackMapZoneModelV15"),
        subModel: Pointer("PackMapZoneModelV15")
      },
      PackMapZoneModelV15: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32,
        hslOffset: FixedArray(Float32, 3)
      },
      PackMapZonePageTableV3: {
        pageArray: DynArray("PackMapZonePageV3"),
        flags: Uint32
      },
      PackMapZonePageV3: {
        flags: DynArray(Uint8),
        chunkCoord: FixedArray(Uint32, 2),
        seed: Uint8,
        paintFlags: DynArray(Uint32)
      },
      PackMapZoneV15: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV15"),
        collideData: DynArray("PackMapZoneCollideDataV15"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2))
      },
      PackMapZoneEncodingDataV15: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV15: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV15"),
      zoneArray: DynArray("PackMapZoneV15")
    }
  },
  {
    chunkName: "zon2",
    name: "PackMapZonesV16",
    version: 15,
    definitions: {
      PackMapZoneDefV16: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV16"),
        timeStamp: Uint64,
        pageTable: Pointer("PackMapZonePageTableV4")
      },
      PackMapZoneLayerDefV16: {
        type: Uint8,
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        noise: Uint8,
        layerFlags: Uint32,
        modelArray: DynArray("PackMapZoneModelV16"),
        subModel: Pointer("PackMapZoneModelV16")
      },
      PackMapZoneModelV16: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32,
        hslOffset: FixedArray(Float32, 3)
      },
      PackMapZonePageTableV4: {
        pageArray: DynArray("PackMapZonePageV4"),
        flags: Uint32
      },
      PackMapZonePageV4: {
        flags: DynArray(Uint8),
        chunkCoord: FixedArray(Uint32, 2),
        seed: Uint8,
        paintFlags: DynArray(Uint32)
      },
      PackMapZoneV16: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV16"),
        collideData: DynArray("PackMapZoneCollideDataV16"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2)),
        broadId: Uint16
      },
      PackMapZoneEncodingDataV16: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV16: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV16"),
      zoneArray: DynArray("PackMapZoneV16"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "zon2",
    name: "PackMapZonesV17",
    version: 16,
    definitions: {
      PackMapZoneDefV17: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV17"),
        timeStamp: Uint64,
        pageTable: Pointer("PackMapZonePageTableV5")
      },
      PackMapZoneLayerDefV17: {
        type: Uint8,
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        noise: Uint8,
        layerFlags: Uint32,
        modelArray: DynArray("PackMapZoneModelV17"),
        subModel: Pointer("PackMapZoneModelV17")
      },
      PackMapZoneModelV17: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32,
        hslOffset: FixedArray(Float32, 3)
      },
      PackMapZonePageTableV5: {
        pageArray: DynArray("PackMapZonePageV5"),
        flags: Uint32
      },
      PackMapZonePageV5: {
        flags: DynArray(Uint8),
        chunkCoord: FixedArray(Uint32, 2),
        seed: Uint8,
        paintFlags: DynArray(Uint32)
      },
      PackMapZoneV17: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV17"),
        collideData: DynArray("PackMapZoneCollideDataV17"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2)),
        broadId: Uint16
      },
      PackMapZoneEncodingDataV17: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV17: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV17"),
      zoneArray: DynArray("PackMapZoneV17"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "zon2",
    name: "PackMapZonesV18",
    version: 17,
    definitions: {
      PackMapZoneDefV18: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV18"),
        timeStamp: Uint64,
        pageTable: Pointer("PackMapZonePageTableV6")
      },
      PackMapZoneLayerDefV18: {
        type: Uint8,
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        hslRanges: FixedArray(FixedArray(Float32, 2), 3),
        noise: Uint8,
        layerFlags: Uint32,
        materialname: Filename(),
        modelArray: DynArray("PackMapZoneModelV18"),
        subModel: Pointer("PackMapZoneModelV18")
      },
      PackMapZoneModelV18: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32,
        hslOffset: FixedArray(Float32, 3),
        zOffsets: FixedArray(Uint8, 2)
      },
      PackMapZonePageTableV6: {
        pageArray: DynArray("PackMapZonePageV6"),
        flags: Uint32
      },
      PackMapZonePageV6: {
        flags: DynArray(Uint8),
        chunkCoord: FixedArray(Uint32, 2),
        seed: Uint8,
        paintFlags: DynArray(Uint32)
      },
      PackMapZoneV18: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV18"),
        collideData: DynArray("PackMapZoneCollideDataV18"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2)),
        broadId: Uint16
      },
      PackMapZoneEncodingDataV18: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV18: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV18"),
      zoneArray: DynArray("PackMapZoneV18"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "zon2",
    name: "PackMapZonesV19",
    version: 18,
    definitions: {
      PackMapZoneDefV19: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV19"),
        timeStamp: Uint64,
        pageTable: Pointer("PackMapZonePageTableV7")
      },
      PackMapZoneLayerDefV19: {
        type: Uint8,
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        hslRanges: FixedArray(FixedArray(Float32, 2), 4),
        noise: Uint8,
        layerFlags: Uint32,
        materialname: Filename(),
        modelArray: DynArray("PackMapZoneModelV19"),
        subModel: Pointer("PackMapZoneModelV19")
      },
      PackMapZoneModelV19: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32,
        hslOffset: FixedArray(Float32, 3),
        zOffsets: FixedArray(Uint8, 2)
      },
      PackMapZonePageTableV7: {
        pageArray: DynArray("PackMapZonePageV7"),
        flags: Uint32
      },
      PackMapZonePageV7: {
        flags: DynArray(Uint8),
        chunkCoord: FixedArray(Uint32, 2),
        seed: Uint8,
        paintFlags: DynArray(Uint32)
      },
      PackMapZoneV19: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV19"),
        collideData: DynArray("PackMapZoneCollideDataV19"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2)),
        broadId: Uint16
      },
      PackMapZoneEncodingDataV19: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV19: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV19"),
      zoneArray: DynArray("PackMapZoneV19"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "zon2",
    name: "PackMapZonesV20",
    version: 19,
    definitions: {
      PackMapZoneDefV20: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV20"),
        timeStamp: Uint64,
        pageTable: Pointer("PackMapZonePageTableV8")
      },
      PackMapZoneLayerDefV20: {
        type: Uint8,
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        hslRanges: FixedArray(FixedArray(Float32, 2), 3),
        instanceScaleJitter: Float32,
        noise: Uint8,
        layerFlags: Uint32,
        materialname: Filename(),
        modelArray: DynArray("PackMapZoneModelV20"),
        subModel: Pointer("PackMapZoneModelV20")
      },
      PackMapZoneModelV20: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32,
        hslOffset: FixedArray(Float32, 3),
        zOffsets: FixedArray(Uint8, 2)
      },
      PackMapZonePageTableV8: {
        pageArray: DynArray("PackMapZonePageV8"),
        flags: Uint32
      },
      PackMapZonePageV8: {
        flags: DynArray(Uint8),
        chunkCoord: FixedArray(Uint32, 2),
        seed: Uint8,
        paintFlags: DynArray(Uint32)
      },
      PackMapZoneV20: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV20"),
        collideData: DynArray("PackMapZoneCollideDataV20"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2)),
        broadId: Uint16
      },
      PackMapZoneEncodingDataV20: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV20: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV20"),
      zoneArray: DynArray("PackMapZoneV20"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "zon2",
    name: "PackMapZonesV21",
    version: 20,
    definitions: {
      PackMapZoneDefV21: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV21"),
        timeStamp: Uint64,
        pageTable: Pointer("PackMapZonePageTableV9")
      },
      PackMapZoneLayerDefV21: {
        type: Uint8,
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        hslRanges: FixedArray(FixedArray(Float32, 2), 4),
        instanceScaleJitter: Float32,
        noise: Uint8,
        layerFlags: Uint32,
        materialname: Filename(),
        modelArray: DynArray("PackMapZoneModelV21"),
        subModel: Pointer("PackMapZoneModelV21")
      },
      PackMapZoneModelV21: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32,
        hslOffset: FixedArray(Float32, 3),
        zOffsets: FixedArray(Uint8, 2)
      },
      PackMapZonePageTableV9: {
        pageArray: DynArray("PackMapZonePageV9"),
        flags: Uint32
      },
      PackMapZonePageV9: {
        flags: DynArray(Uint8),
        chunkCoord: FixedArray(Uint32, 2),
        seed: Uint8,
        paintFlags: DynArray(Uint32)
      },
      PackMapZoneV21: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV21"),
        collideData: DynArray("PackMapZoneCollideDataV21"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2)),
        broadId: Uint16
      },
      PackMapZoneEncodingDataV21: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV21: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV21"),
      zoneArray: DynArray("PackMapZoneV21"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "zon2",
    name: "PackMapZonesV22",
    version: 21,
    definitions: {
      PackMapZoneDefV22: {
        defFilename: Filename(),
        token: Uint32,
        layerDefArray: DynArray("PackMapZoneLayerDefV22"),
        timeStamp: Uint64,
        pageTable: Pointer("PackMapZonePageTableV10"),
        reserved: String16()
      },
      PackMapZoneLayerDefV22: {
        type: Uint8,
        height: Uint8,
        width: Uint8,
        radiusGround: Uint8,
        sortGroup: Uint8,
        tiling: Uint8,
        scaleRange: FixedArray(Float32, 2),
        probability: Float32,
        fadeRange: FixedArray(Float32, 2),
        rotRange: FixedArray(FixedArray(Float32, 2), 3),
        hslRanges: FixedArray(FixedArray(Float32, 2), 4),
        instanceScaleJitter: Float32,
        noise: Uint8,
        layerFlags: Uint32,
        materialname: Filename(),
        modelArray: DynArray("PackMapZoneModelV22"),
        subModel: Pointer("PackMapZoneModelV22"),
        reserved: String16()
      },
      PackMapZoneModelV22: {
        filename: Filename(),
        probability: Float32,
        flags: Uint32,
        hslOffset: FixedArray(Float32, 3),
        zOffsets: FixedArray(Uint8, 2)
      },
      PackMapZonePageTableV10: {
        pageArray: DynArray("PackMapZonePageV10"),
        flags: Uint32
      },
      PackMapZonePageV10: {
        flags: DynArray(Uint8),
        chunkCoord: FixedArray(Uint32, 2),
        seed: Uint8,
        paintFlags: DynArray(Uint32),
        string: String16()
      },
      PackMapZoneV22: {
        zoneFlags: Uint32,
        vertRect: FixedArray(Uint32, 4),
        waterHeight: Float32,
        seed: Uint8,
        defToken: Uint32,
        range: FixedArray(Float32, 2),
        zPos: Float32,
        flags: DynArray(Uint8),
        encodeData: DynArray("PackMapZoneEncodingDataV22"),
        collideData: DynArray("PackMapZoneCollideDataV22"),
        offsetData: DynArray(Uint16),
        vertices: DynArray(FixedArray(Float32, 2)),
        broadId: Uint16,
        reserved: String16()
      },
      PackMapZoneEncodingDataV22: {
        index: Uint16,
        offset: Uint8
      },
      PackMapZoneCollideDataV22: {
        normalX: Float32,
        normalY: Float32,
        zPos: Float32
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      zoneDefArray: DynArray("PackMapZoneDefV22"),
      zoneArray: DynArray("PackMapZoneV22"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16,
      string: String16()
    }
  }
]