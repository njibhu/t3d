import { Uint32, DynArray } from "../src/types";

const V0 = {
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
};

export const latest = V0;
export const definitions = { V0 };
export const definitionArray = Object.values(definitions);