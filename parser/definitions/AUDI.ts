import { Filename, Uint32, Float32, FixedArray, DynArray, Uint64, RefString16 } from "../src/types";

export const V0 = {
  chunkName: "audi",
  name: "MapAudio",
  version: 0,
  root: {
    globalAmbientScriptFilename: Filename(),
    globalMusicScriptFilename: Filename()
  }
};

export const V1 = {
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
};

export const V2 = {
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
};

export const V3 = {
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
};

export const V4 = {
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
};

export const V5 = {
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
};

export const V6 = {
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
};

export const V7 = {
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
      annotation: RefString16()
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
};

export const V8 = {
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
      annotation: RefString16()
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
};

export const latest = V8;
export const definitionArray = [V0, V1, V2, V3, V4, V5, V6, V7, V8];