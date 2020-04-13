import { Uint32, Float32, Uint8, DynArray, Pointer } from "../src/types";

module.exports = [
  {
    chunkName: "BKCK",
    name: "BankFileDataV0",
    version: 0,
    definitions: {
      AsndFileDataV0: {
        voiceId: Uint32,
        flags: Uint32,
        reserved1: Uint32,
        reserved2: Uint32,
        length: Float32,
        offset: Float32,
        audioData: DynArray(Uint8)
      }
    },
    root: {
      reserved1: Uint32,
      reserved2: Uint32,
      asndFile: DynArray("AsndFileDataV0")
    }
  },
  {
    chunkName: "BKCK",
    name: "BankFileDataV1",
    version: 1,
    definitions: {
      AsndFileDataV1: {
        voiceId: Uint32,
        flags: Uint32,
        reserved1: Uint32,
        reserved2: Uint32,
        length: Float32,
        offset: Float32,
        audioData: DynArray(Uint8)
      }
    },
    root: {
      reserved1: Uint32,
      reserved2: Uint32,
      asndFile: DynArray("AsndFileDataV1")
    }
  },
  {
    chunkName: "BKCK",
    name: "BankFileDataV2",
    version: 2,
    definitions: {
      AsndFileDataV2: {
        voiceId: Uint32,
        flags: Uint32,
        reserved1: Uint32,
        reserved2: Uint32,
        reserved3: Uint32,
        reserved4: Uint32,
        length: Float32,
        offset: Float32,
        reserved5: Uint8,
        reserved6: Uint8,
        reserved7: Uint8,
        reserved8: Uint8,
        audioData: DynArray(Uint8)
      },
      ReservedBankDataV2: {
        reserved1: Uint32,
        reserved2: Uint32,
        reserved3: Uint32,
        reserved4: Uint32
      }
    },
    root: {
      reserved1: Uint32,
      reserved2: Uint32,
      reserved3: Uint32,
      reserved4: Uint32,
      asndFile: DynArray("AsndFileDataV2"),
      reservedData: Pointer("ReservedBankDataV2")
    }
  }
]