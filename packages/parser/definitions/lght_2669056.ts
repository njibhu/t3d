import { Uint64, FixedArray, Float32, Uint8, Uint32, DynArray, Uint16, Filename, Pointer, String16 } from "../src/types";

module.exports = [
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 1,
    definitions: {
      PackMapLight: {
        type: Uint32,
        position: FixedArray(Float32, 3),
        elevation: Float32,
        azimuth: Float32,
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32
      }
    },
    root: {
      lights: DynArray("PackMapLight")
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 2,
    definitions: {
      PackMapLightgroups: {
        lights: DynArray("PackMapLight")
      },
      PackMapLight: {
        type: Uint32,
        position: FixedArray(Float32, 3),
        elevation: Float32,
        azimuth: Float32,
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      }
    },
    root: {
      groups: DynArray("PackMapLightgroups")
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 3,
    definitions: {
      PackMapLightgroups: {
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapLight: {
        type: Uint32,
        position: FixedArray(Float32, 3),
        elevation: Float32,
        azimuth: Float32,
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        curveType: Uint32
      }
    },
    root: {
      lights: DynArray("PackMapLightgroups")
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 4,
    definitions: {
      PackMapLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      }
    },
    root: {
      lights: DynArray("PackMapLightgroups")
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 5,
    definitions: {
      PackMapLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      }
    },
    root: {
      pointLights: DynArray("PackMapLightgroups"),
      spotLights: DynArray("PackMapPointLightgroups")
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 6,
    definitions: {
      PackMapLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        minExt: FixedArray(Float32, 3),
        maxExt: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        images: DynArray("PackMapVolumeImage")
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: Uint32,
        format: Uint32,
        image: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapLightgroups"),
      spotLights: DynArray("PackMapPointLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight")
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 7,
    definitions: {
      PackMapLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        minExt: FixedArray(Float32, 3),
        maxExt: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        images: DynArray("PackMapVolumeImage")
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: Uint32,
        format: Uint32,
        image: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapLightgroups"),
      spotLights: DynArray("PackMapPointLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight")
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 8,
    definitions: {
      PackMapLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        minExt: FixedArray(Float32, 3),
        maxExt: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        floodPoint: FixedArray(Float32, 3),
        images: DynArray("PackMapVolumeImage")
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: Uint32,
        format: Uint32,
        image: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapLightgroups"),
      spotLights: DynArray("PackMapPointLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight")
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 9,
    definitions: {
      PackMapLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        floodPoint: FixedArray(Float32, 3),
        flags: Uint32,
        images: DynArray("PackMapVolumeImage")
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: Uint32,
        format: Uint32,
        image: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapLightgroups"),
      spotLights: DynArray("PackMapPointLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight")
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 10,
    definitions: {
      PackMapLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve")
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        floodPoint: FixedArray(Float32, 3),
        flags: Uint32,
        images: DynArray("PackMapVolumeImage")
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: FixedArray(Uint32, 2),
        format: Uint32,
        image: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapLightgroups"),
      spotLights: DynArray("PackMapPointLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight")
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 11,
    definitions: {
      PackMapLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        floodPoint: FixedArray(Float32, 3),
        flags: Uint32,
        images: DynArray("PackMapVolumeImage"),
        broadId: Uint16
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: FixedArray(Uint32, 2),
        format: Uint32,
        image: DynArray(Uint8)
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapLightgroups"),
      spotLights: DynArray("PackMapPointLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 12,
    definitions: {
      PackMapLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        floodPoint: FixedArray(Float32, 3),
        flags: Uint32,
        images: DynArray("PackMapVolumeImage"),
        broadId: Uint16
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: FixedArray(Uint32, 2),
        format: Uint32,
        image: DynArray(Uint8)
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapLightgroups"),
      spotLights: DynArray("PackMapPointLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 13,
    definitions: {
      PackMapLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        floodPoints: DynArray(FixedArray(Float32, 3)),
        flags: Uint32,
        images: DynArray("PackMapVolumeImage"),
        broadId: Uint16
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: FixedArray(Uint32, 2),
        format: Uint32,
        image: DynArray(Uint8)
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapLightgroups"),
      spotLights: DynArray("PackMapPointLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLightsV14",
    version: 14,
    definitions: {
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapProtalLight: {
        guid: Uint64,
        fadeCamera: Float32,
        fadeLight: Float32,
        lighten: Float32,
        darken: Float32,
        points: DynArray(FixedArray(Float32, 3)),
        broadId: Uint16
      },
      PackMapSpotLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        floodPoints: DynArray(FixedArray(Float32, 3)),
        flags: Uint32,
        images: DynArray("PackMapVolumeImage"),
        broadId: Uint16
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: FixedArray(Uint32, 2),
        format: Uint32,
        image: DynArray(Uint8)
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapPointLightgroups"),
      portalLights: DynArray("PackMapProtalLight"),
      spotLights: DynArray("PackMapSpotLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLightsV15",
    version: 15,
    definitions: {
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPortalLight: {
        guid: Uint64,
        points: DynArray(FixedArray(Float32, 3)),
        portalData: DynArray("PackMapPortalData"),
        broadId: Uint16
      },
      PackMapPortalData: {
        fadeCamera: Float32,
        fadeLight: Float32,
        lighten: Float32,
        darken: Float32
      },
      PackMapSpotLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapPointLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapPointLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        floodPoints: DynArray(FixedArray(Float32, 3)),
        flags: Uint32,
        images: DynArray("PackMapVolumeImage"),
        broadId: Uint16
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: FixedArray(Uint32, 2),
        format: Uint32,
        image: DynArray(Uint8)
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapPointLightgroups"),
      portalLights: DynArray("PackMapPortalLight"),
      spotLights: DynArray("PackMapSpotLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 16,
    definitions: {
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPortalLight: {
        guid: Uint64,
        points: DynArray(FixedArray(Float32, 3)),
        portalData: DynArray("PackMapPortalData"),
        broadId: Uint16
      },
      PackMapPortalData: {
        fadeCamera: Float32,
        fadeLight: Float32,
        lighten: Float32,
        darken: Float32
      },
      PackMapSpotLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapSpotLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapSpotLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename(),
        shadowData: Pointer("PackMapSpotShadow")
      },
      PackMapSpotShadow: {
        shadowFilename: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        floodPoints: DynArray(FixedArray(Float32, 3)),
        flags: Uint32,
        images: DynArray("PackMapVolumeImage"),
        broadId: Uint16
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: FixedArray(Uint32, 2),
        format: Uint32,
        image: DynArray(Uint8)
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapPointLightgroups"),
      portalLights: DynArray("PackMapPortalLight"),
      spotLights: DynArray("PackMapSpotLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  },
  {
    chunkName: "lght",
    name: "PackMapLights",
    version: 17,
    definitions: {
      PackMapPointLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32
      },
      PackMapCurve: {
        gust: Float32,
        gustFreq: Float32,
        noise: Float32,
        phase: Float32,
        offset: Float32,
        amplitude: Float32,
        curveType: Uint32
      },
      PackMapPortalLight: {
        guid: Uint64,
        points: DynArray(FixedArray(Float32, 3)),
        portalData: DynArray("PackMapPortalData"),
        broadId: Uint16
      },
      PackMapPortalData: {
        fadeCamera: Float32,
        fadeLight: Float32,
        lighten: Float32,
        darken: Float32
      },
      PackMapSpotLightgroups: {
        guid: Uint64,
        lights: DynArray("PackMapSpotLight"),
        curves: DynArray("PackMapCurve"),
        broadId: Uint16
      },
      PackMapSpotLight: {
        position: FixedArray(Float32, 3),
        color: FixedArray(Uint8, 3),
        intensity: Float32,
        nearDistance: Float32,
        farDistance: Float32,
        flags: Uint32,
        direction: FixedArray(Float32, 3),
        upDirection: FixedArray(Float32, 3),
        innerAngle: Float32,
        outerAngle: Float32,
        textureName: Filename(),
        shadowData: Pointer("PackMapSpotShadow")
      },
      PackMapSpotShadow: {
        shadowFilename: Filename()
      },
      PackMapVolumeLight: {
        guid: Uint64,
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        intensities: FixedArray(Float32, 2),
        pack: FixedArray(Float32, 4),
        name: String16(),
        floodPoints: DynArray(FixedArray(Float32, 3)),
        flags: Uint32,
        images: DynArray("PackMapVolumeImage"),
        broadId: Uint16
      },
      PackMapVolumeImage: {
        filename: Filename(),
        dims: FixedArray(Uint32, 2),
        format: Uint32,
        image: DynArray(Uint8)
      },
      PackBroadphaseType: {
        broadphaseData: DynArray(Uint8)
      }
    },
    root: {
      pointLights: DynArray("PackMapPointLightgroups"),
      portalLights: DynArray("PackMapPortalLight"),
      spotLights: DynArray("PackMapSpotLightgroups"),
      volumeLights: DynArray("PackMapVolumeLight"),
      broadPhase: "PackBroadphaseType",
      maxBroadId: Uint16
    }
  }
]