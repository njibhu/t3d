export namespace V0 {
  export type WaveformDataV0 = {
    data: Array<number>,
    flags: number,
    length: number,
    noteBase: number,
    noteHigh: number,
    noteLow: number,
    numChannels: number,
    numSamples: number,
    waveformDataType: number
  }

}

export namespace V1 {
  export type WaveformDataV1 = {
    length: number,
    offset: number,
    crc: number,
    numSamples: number,
    loopStart: number,
    loopEnd: number,
    flags: number,
    format: number,
    noteBase: number,
    noteHigh: number,
    noteLow: number,
    numChannels: number,
    reserved1: number,
    reserved2: number,
    reserved3: number,
    audioData: Array<number>,
    otherData: Array<number>
  }

}

export namespace V2 {
  export type WaveformDataV2 = {
    length: number,
    offset: number,
    reservedData: ReservedWaveformDataV2,
    reserved1: number,
    reserved2: number,
    crc: number,
    numSamples: number,
    loopStart: number,
    loopEnd: number,
    flags: number,
    format: number,
    reserved3: number,
    reserved4: number,
    reserved5: number,
    numChannels: number,
    reserved6: number,
    reserved7: number,
    reserved8: number,
    audioData: Array<number>,
    otherData: Array<number>
  }

  export type ReservedWaveformDataV2 = {
    reserved1: number,
    reserved2: number,
    reserved3: number,
    reserved4: number
  }

}

