export namespace V0_N {
  export type BankFileDataV0 = {
    reserved1: number,
    reserved2: number,
    asndFile: Array<AsndFileDataV0>
  }

  export type AsndFileDataV0 = {
    voiceId: number,
    flags: number,
    reserved1: number,
    reserved2: number,
    length: number,
    offset: number,
    audioData: Array<number>
  }

}

export type V0 = V0_N.BankFileDataV0;

export namespace V1_N {
  export type BankFileDataV1 = {
    reserved1: number,
    reserved2: number,
    asndFile: Array<AsndFileDataV1>
  }

  export type AsndFileDataV1 = {
    voiceId: number,
    flags: number,
    reserved1: number,
    reserved2: number,
    length: number,
    offset: number,
    audioData: Array<number>
  }

}

export type V1 = V1_N.BankFileDataV1;

export namespace V2_N {
  export type BankFileDataV2 = {
    reserved1: number,
    reserved2: number,
    reserved3: number,
    reserved4: number,
    asndFile: Array<AsndFileDataV2>,
    reservedData: ReservedBankDataV2
  }

  export type AsndFileDataV2 = {
    voiceId: number,
    flags: number,
    reserved1: number,
    reserved2: number,
    reserved3: number,
    reserved4: number,
    length: number,
    offset: number,
    reserved5: number,
    reserved6: number,
    reserved7: number,
    reserved8: number,
    audioData: Array<number>
  }

  export type ReservedBankDataV2 = {
    reserved1: number,
    reserved2: number,
    reserved3: number,
    reserved4: number
  }

}

export type V2 = V2_N.BankFileDataV2;

export type V0_U = V0 | V1 | V2;
export type V1_U = V1 | V2;
export type V2_U = V2;
