import { Uint32, DynArray } from "./types";

module.exports = [
  {
    chunkName: "txtv",
    name: "TextPackVoices",
    version: 0,
    definitions: {
      TextPackVoice: {
        textId: Uint32,
        voiceId: Uint32
      }
    },
    root: {
      voices: DynArray("TextPackVoice")
    }
  }
]