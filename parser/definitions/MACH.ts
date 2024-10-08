import { RefString16, Uint32, DynArray, Pointer, Uint64, Fileref, FixedArray, Uint8 } from "../src/types";

const V0 = {
  chunkName: "mach",
  name: "PackAnimMachinesV0",
  version: 0,
  definitions: {
    PackAnimMachineV0: {
      states: DynArray("PackAnimMachineStateV0")
    },
    PackAnimMachineStateV0: {
      name: RefString16(),
      actionBlock: Pointer("PackAnimMachineActionBlockV0"),
      actionVariantBlock: Pointer("PackAnimMachineActionVariantBlockV0"),
      transitions: DynArray("PackAnimMachineTransitionV0"),
      variants: DynArray("PackAnimMachineStateVariantV0")
    },
    PackAnimMachineActionBlockV0: {
      actions: DynArray("PackAnimMachineActionV0")
    },
    PackAnimMachineActionV0: {
      actionData: Uint32
    },
    PackAnimMachineActionVariantBlockV0: {
      actionVariants: DynArray("PackAnimMachineActionVariantV0")
    },
    PackAnimMachineActionVariantV0: {
      token: Uint64,
      actionBlock: Pointer("PackAnimMachineActionBlockV0")
    },
    PackAnimMachineTransitionV0: {
      name: RefString16(),
      targetStateName: RefString16(),
      actionBlock: Pointer("PackAnimMachineActionBlockV0"),
      variants: DynArray("PackAnimMachineTransitionVariantV0")
    },
    PackAnimMachineTransitionVariantV0: {
      token: Uint64,
      actionBlock: Pointer("PackAnimMachineActionBlockV0")
    },
    PackAnimMachineStateVariantV0: {
      token: Uint64,
      actionBlock: Pointer("PackAnimMachineActionBlockV0"),
      actionVariantBlock: Pointer("PackAnimMachineActionVariantBlockV0"),
      transitions: DynArray("PackAnimMachineTransitionV0")
    },
    PackAnimModelV0: {
      modelFileId: Fileref(),
      modelFileRaw: RefString16(),
      machineIndex: Uint32
    }
  },
  root: {
    machines: DynArray("PackAnimMachineV0"),
    models: DynArray("PackAnimModelV0")
  }
};

const V1 = {
  chunkName: "mach",
  name: "PackAnimMachinesV1",
  version: 1,
  definitions: {
    PackAnimMachineV1: {
      states: DynArray("PackAnimMachineStateV1")
    },
    PackAnimMachineStateV1: {
      name: RefString16(),
      actionBlock: Pointer("PackAnimMachineActionBlockV1"),
      actionVariantBlock: Pointer("PackAnimMachineActionVariantBlockV1"),
      transitions: DynArray("PackAnimMachineTransitionV1"),
      variants: DynArray("PackAnimMachineStateVariantV1")
    },
    PackAnimMachineActionBlockV1: {
      actions: DynArray("PackAnimMachineActionV1")
    },
    PackAnimMachineActionV1: {
      actionData: Uint32
    },
    PackAnimMachineActionVariantBlockV1: {
      actionVariants: DynArray("PackAnimMachineActionVariantV1")
    },
    PackAnimMachineActionVariantV1: {
      token: Uint64,
      actionBlock: Pointer("PackAnimMachineActionBlockV1")
    },
    PackAnimMachineTransitionV1: {
      name: RefString16(),
      targetStateName: RefString16(),
      actionBlock: Pointer("PackAnimMachineActionBlockV1"),
      variants: DynArray("PackAnimMachineTransitionVariantV1")
    },
    PackAnimMachineTransitionVariantV1: {
      token: Uint64,
      actionBlock: Pointer("PackAnimMachineActionBlockV1")
    },
    PackAnimMachineStateVariantV1: {
      token: Uint64,
      actionBlock: Pointer("PackAnimMachineActionBlockV1"),
      actionVariantBlock: Pointer("PackAnimMachineActionVariantBlockV1"),
      transitions: DynArray("PackAnimMachineTransitionV1")
    },
    PackAnimModelV1: {
      modelFileId: Fileref(),
      modelFileRaw: RefString16(),
      machineIndex: Uint32,
      listeners: FixedArray(Uint8, 16)
    }
  },
  root: {
    machines: DynArray("PackAnimMachineV1"),
    models: DynArray("PackAnimModelV1")
  }
};

export const latest = V1;
export const definitions = { V0, V1 };
export const definitionArray = Object.values(definitions);