import { String16, Unknown, DynArray, Pointer, Uint64, Fileref, Uint32 } from "../src/types";

export const V0 = {
  chunkName: "mach",
  name: "PackAnimMachinesV0",
  version: 0,
  definitions: {
    PackAnimMachineV0: {
      states: DynArray("PackAnimMachineStateV0")
    },
    PackAnimMachineStateV0: {
      name: String16(),
      actionBlock: Pointer("PackAnimMachineActionBlockV0"),
      actionVariantBlock: Pointer("PackAnimMachineActionVariantBlockV0"),
      transitions: DynArray("PackAnimMachineTransitionV0"),
      variants: DynArray("PackAnimMachineStateVariantV0")
    },
    PackAnimMachineActionBlockV0: {
      actions: DynArray("PackAnimMachineActionV0")
    },
    PackAnimMachineActionV0: {
      actionData: Unknown
    },
    PackAnimMachineActionVariantBlockV0: {
      actionVariants: DynArray("PackAnimMachineActionVariantV0")
    },
    PackAnimMachineActionVariantV0: {
      token: Uint64,
      actionBlock: Pointer("PackAnimMachineActionBlockV0")
    },
    PackAnimMachineTransitionV0: {
      name: String16(),
      targetStateName: String16(),
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
      modelFileRaw: String16(),
      machineIndex: Uint32
    }
  },
  root: {
    machines: DynArray("PackAnimMachineV0"),
    models: DynArray("PackAnimModelV0")
  }
};

export const latest = V0;
export const definitionArray = [V0];