import { Filename, Uint32, Float32, FixedArray, DynArray, Uint64, String16 } from "../src/types";

module.exports = [
  {
    chunkName: "audi",
    name: "MapAudio",
    version: 0,
    root: {
      globalAmbientScriptFilename: Filename(),
      globalMusicScriptFilename: Filename()
    }
  },
  {
    chunkName: "audi",
    name: "MapAudio",
    version: 1,
    definitions: {
      PackMapAudioRegion: {
        regionType: Uint32,
        overrideMode: Uint32,
        filenameSource: Filename(),
        filenameAmbient: Filename(),
        filenameMusic: Filename(),
        points: DynArray(FixedArray(Float32, 3)),
        position: FixedArray(Float32, 3),
        orientation: FixedArray(Float32, 3),
        fadeBand: Float32,
        height: Float32,
        radius: Float32
      }
    },
    root: {
      globalAmbientScriptFilename: Filename(),
      globalMusicScriptFilename: Filename(),
      audioRegions: DynArray("PackMapAudioRegion")
    }
  },
  {
    chunkName: "audi",
    name: "MapAudio",
    version: 2,
    definitions: {
      PackMapAudioRegion: {
        regionType: Uint32,
        overrideMode: Uint32,
        filenameSource: Filename(),
        filenameAmbient: Filename(),
        filenameMusic: Filename(),
        points: DynArray(FixedArray(Float32, 3)),
        position: FixedArray(Float32, 3),
        orientation: FixedArray(Float32, 3),
        fadeBand: Float32,
        height: Float32,
        radius: Float32
      }
    },
    root: {
      globalAmbientScriptFilename: Filename(),
      globalMusicScriptFilename: Filename(),
      globalAmbientUnderwaterScriptFilename: Filename(),
      globalMusicUnderwaterScriptFilename: Filename(),
      audioRegions: DynArray("PackMapAudioRegion")
    }
  },
  {
    chunkName: "audi",
    name: "MapAudio",
    version: 3,
    definitions: {
      PackMapAudioRegion: {
        regionType: Uint32,
        overrideMode: Uint32,
        filenameSourceDay: Filename(),
        filenameAmbientDay: Filename(),
        filenameMusicDay: Filename(),
        filenameSourceNight: Filename(),
        filenameAmbientNight: Filename(),
        filenameMusicNight: Filename(),
        points: DynArray(FixedArray(Float32, 3)),
        position: FixedArray(Float32, 3),
        orientation: FixedArray(Float32, 3),
        fadeBand: Float32,
        height: Float32,
        radius: Float32
      }
    },
    root: {
      filenameAmbientDaySurface: Filename(),
      filenameMusicDaySurface: Filename(),
      filenameAmbientDayUnderwater: Filename(),
      filenameMusicDayUnderwater: Filename(),
      filenameAmbientNightSurface: Filename(),
      filenameMusicNightSurface: Filename(),
      filenameAmbientNightUnderwater: Filename(),
      filenameMusicNightUnderwater: Filename(),
      audioRegions: DynArray("PackMapAudioRegion")
    }
  },
  {
    chunkName: "audi",
    name: "MapAudio",
    version: 4,
    definitions: {
      PackMapAudioRegion: {
        regionType: Uint32,
        overrideMode: Uint32,
        filenameSourceDay: Filename(),
        filenameAmbientDay: Filename(),
        filenameMusicDay: Filename(),
        filenameSourceNight: Filename(),
        filenameAmbientNight: Filename(),
        filenameMusicNight: Filename(),
        points: DynArray(FixedArray(Float32, 3)),
        position: FixedArray(Float32, 3),
        orientation: FixedArray(Float32, 3),
        fadeBand: Float32,
        height: Float32,
        radius: Float32,
        guid: Uint64
      }
    },
    root: {
      filenameAmbientDaySurface: Filename(),
      filenameMusicDaySurface: Filename(),
      filenameAmbientDayUnderwater: Filename(),
      filenameMusicDayUnderwater: Filename(),
      filenameAmbientNightSurface: Filename(),
      filenameMusicNightSurface: Filename(),
      filenameAmbientNightUnderwater: Filename(),
      filenameMusicNightUnderwater: Filename(),
      audioRegions: DynArray("PackMapAudioRegion")
    }
  },
  {
    chunkName: "audi",
    name: "MapAudio",
    version: 5,
    definitions: {
      PackMapAudioRegion: {
        regionType: Uint32,
        overrideMode: Uint32,
        filenameSourceDay: Filename(),
        filenameAmbientDay: Filename(),
        filenameSourceNight: Filename(),
        filenameAmbientNight: Filename(),
        points: DynArray(FixedArray(Float32, 3)),
        position: FixedArray(Float32, 3),
        orientation: FixedArray(Float32, 3),
        fadeBand: Float32,
        height: Float32,
        radius: Float32,
        guid: Uint64,
        flags: Uint32
      }
    },
    root: {
      filenameAmbientDaySurface: Filename(),
      filenameAmbientDayUnderwater: Filename(),
      filenameAmbientNightSurface: Filename(),
      filenameAmbientNightUnderwater: Filename(),
      audioRegions: DynArray("PackMapAudioRegion")
    }
  },
  {
    chunkName: "audi",
    name: "MapAudio",
    version: 6,
    definitions: {
      PackMapAudioRegion: {
        regionType: Uint32,
        overrideMode: Uint32,
        filenameSourceDay: Filename(),
        filenameAmbientDay: Filename(),
        filenameSourceNight: Filename(),
        filenameAmbientNight: Filename(),
        filenameInterior: Filename(),
        exteriorVolume: Float32,
        priority: Uint32,
        points: DynArray(FixedArray(Float32, 3)),
        position: FixedArray(Float32, 3),
        orientation: FixedArray(Float32, 3),
        fadeBand: Float32,
        height: Float32,
        radius: Float32,
        guid: Uint64,
        flags: Uint32
      }
    },
    root: {
      filenameAmbientDaySurface: Filename(),
      filenameAmbientDayUnderwater: Filename(),
      filenameAmbientNightSurface: Filename(),
      filenameAmbientNightUnderwater: Filename(),
      audioRegions: DynArray("PackMapAudioRegion")
    }
  },
  {
    chunkName: "audi",
    name: "MapAudio",
    version: 7,
    definitions: {
      PackMapAudioRegion: {
        regionType: Uint32,
        overrideMode: Uint32,
        filenameSourceDay: Filename(),
        filenameAmbientDay: Filename(),
        filenameSourceNight: Filename(),
        filenameAmbientNight: Filename(),
        filenameInterior: Filename(),
        exteriorVolume: Float32,
        priority: Uint32,
        points: DynArray(FixedArray(Float32, 3)),
        position: FixedArray(Float32, 3),
        orientation: FixedArray(Float32, 3),
        fadeBand: Float32,
        height: Float32,
        radius: Float32,
        guid: Uint64,
        flags: Uint32
      },
      PackMapAudioRegionTool: {
        annotation: String16()
      }
    },
    root: {
      filenameAmbientDaySurface: Filename(),
      filenameAmbientDayUnderwater: Filename(),
      filenameAmbientNightSurface: Filename(),
      filenameAmbientNightUnderwater: Filename(),
      audioRegions: DynArray("PackMapAudioRegion"),
      audioRegionTools: DynArray("PackMapAudioRegionTool")
    }
  },
  {
    chunkName: "audi",
    name: "MapAudio",
    version: 8,
    definitions: {
      PackMapAudioRegion: {
        regionType: Uint32,
        overrideMode: Uint32,
        filenameSourceDay: Filename(),
        filenameAmbientDay: Filename(),
        filenameSourceNight: Filename(),
        filenameAmbientNight: Filename(),
        filenameInterior: Filename(),
        exteriorVolume: Float32,
        priority: Uint32,
        points: DynArray(FixedArray(Float32, 3)),
        position: FixedArray(Float32, 3),
        orientation: FixedArray(Float32, 3),
        fadeBand: Float32,
        height: Float32,
        radius: Float32,
        guid: Uint64,
        flags: Uint32
      },
      PackMapAudioRegionTool: {
        annotation: String16()
      },
      PackMapAudioDep: {
        dependency: Filename(),
        flags: Uint32
      }
    },
    root: {
      filenameAmbientDaySurface: Filename(),
      filenameAmbientDayUnderwater: Filename(),
      filenameAmbientNightSurface: Filename(),
      filenameAmbientNightUnderwater: Filename(),
      audioRegions: DynArray("PackMapAudioRegion"),
      audioRegionTools: DynArray("PackMapAudioRegionTool"),
      audioDepArray: DynArray("PackMapAudioDep")
    }
  }
]