import { Float32, Uint32, Pointer, Uint8, DynArray } from "./types";

module.exports = [
  {
    chunkName: "ASND",
    name: "WaveformDataV0",
    version: 0,
    root: {
      data: DynArray(Uint8),
      flags: Uint32,
      length: Float32,
      noteBase: Uint8,
      noteHigh: Uint8,
      noteLow: Uint8,
      numChannels: Uint8,
      numSamples: Uint32,
      waveformDataType: Uint8
    }
  },
  {
    chunkName: "ASND",
    name: "WaveformDataV1",
    version: 1,
    root: {
      length: Float32,
      offset: Float32,
      crc: Uint32,
      numSamples: Uint32,
      loopStart: Uint32,
      loopEnd: Uint32,
      flags: Uint32,
      format: Uint8,
      noteBase: Uint8,
      noteHigh: Uint8,
      noteLow: Uint8,
      numChannels: Uint8,
      reserved1: Uint8,
      reserved2: Uint8,
      reserved3: Uint8,
      audioData: DynArray(Uint8),
      otherData: DynArray(Uint8)
    }
  },
  {
    chunkName: "ASND",
    name: "WaveformDataV2",
    version: 2,
    definitions: {
      ReservedWaveformDataV2: {
        reserved1: Uint32,
        reserved2: Uint32,
        reserved3: Uint32,
        reserved4: Uint32
      }
    },
    root: {
      length: Float32,
      offset: Float32,
      reservedData: Pointer("ReservedWaveformDataV2"),
      reserved1: Uint32,
      reserved2: Uint32,
      crc: Uint32,
      numSamples: Uint32,
      loopStart: Uint32,
      loopEnd: Uint32,
      flags: Uint32,
      format: Uint8,
      reserved3: Uint8,
      reserved4: Uint8,
      reserved5: Uint8,
      numChannels: Uint8,
      reserved6: Uint8,
      reserved7: Uint8,
      reserved8: Uint8,
      audioData: DynArray(Uint8),
      otherData: DynArray(Uint8)
    }
  }
]