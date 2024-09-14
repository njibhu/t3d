export type FileTypes = keyof typeof fileChunkMap;
export type ChunkTypes = {
  [K in FileTypes]: keyof (typeof fileChunkMap)[K];
}[FileTypes];
export type DefinitionTypes = {
  [K in FileTypes]: {
    [SubKey in keyof (typeof fileChunkMap)[K]]: (typeof fileChunkMap)[K][SubKey];
  }[keyof (typeof fileChunkMap)[K]];
}[FileTypes];

export const fileChunkMap = {
  cntc: { Main: "MAIN_4" },
  hvkC: { havk: "HAVK" },
  ASND: { ASND: "ASND" },
  AMAT: { GRMT: "GRMT", DX9S: "DX9S", BGFX: "BGFX" },
  AMSP: { AMSP: "AMSP" },
  MODL: {
    MODL: "MODL",
    SKEL: "SKEL",
    COLL: "COLL",
    ANIM: "ANIM",
    ROOT: "ROOT",
    GAME: "GAME",
    GEOM: "GEOM",
    PRPS: "PRPS",
  },
  //AFNT: {"AFNT"},
  CINP: { CSCN: "CSCN" },
  prlt: { mfst: "MFST_2" },
  txtm: { txtm: "TXTM" },
  eula: { eula: "EULA" },
  PIMG: { PGTB: "PGTB" },
  mapc: {
    parm: "PARM",
    trn: "TRN",
    trni: "TRNI",
    surf: "SURF",
    area: "AREA",
    laye: "LAYE",
    msn: "MSN",
    cube: "CUBE",
    havk: "HAVK",
    zon2: "ZON2",
    shex: "SHEX",
    octm: "OCTM",
    prp2: "PRP2",
    rive: "RIVE",
    dcal: "DCAL",
    env: "ENV",
    audi: "AUDI",
    lght: "LGHT",
    exp: "EXP",
  },
  emoc: { anim: "ANIM_3" },
  // STAR: { STAR: "" },
  ABIX: { BIDX: "BIDX" },
  mpsd: { shad: "SHAD" },
  txtV: { vari: "VARI" },
  mMet: { Main: "MAIN_5" },
  txtv: { txtv: "TXTV" },
  anic: { seqn: "SEQN", mach: "MACH", fall: "FALL", cnfg: "CNFG" },
  cmaC: { main: "MAIN_3" },
  // cmpc: {"error",},
  // CDHS: { CDHS: "CDHS" }, // not in definitions
  ABNK: { BKCK: "BKCK" },
  // bone: { scal: "" },
} as const;
