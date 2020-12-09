export namespace V0_N {
  export type TextPackVoices = {
    voices: Array<TextPackVoice>
  }

  export type TextPackVoice = {
    textId: number,
    voiceId: number
  }

}

export type V0 = V0_N.TextPackVoices;

export type V0_U = V0;
