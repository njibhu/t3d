import { Uint64, Float32, DynArray, Uint8, FixedArray, Uint32, Pointer } from "./types";

module.exports = [
  {
    chunkName: "cnfg",
    name: "PackAnimConfigV0",
    version: 0,
    definitions: {
      PackAnimAimIKConfigV0: {
        name: Uint64,
        boneEye: Uint64,
        boneSight: Uint64,
        endEffector: Uint64,
        frustumHAngle: Float32,
        frustumVAngle: Float32,
        frustumLength: Float32,
        targetVelocityConstraint: Float32,
        bones: DynArray("PackAnimAimIKBoneV0"),
        targets: DynArray(Uint64),
        flags: Uint8
      },
      PackAnimAimIKBoneV0: {
        boneToken: Uint64,
        clampAngle: Float32,
        weight: Float32,
        smoothingWeight: Float32
      },
      PackAnimIKChainGroupV0: {
        name: Uint64,
        chains: DynArray("PackAnimIKChainV0")
      },
      PackAnimIKChainV0: {
        name: Uint64,
        smoothWeight: FixedArray(Float32, 3),
        hyperExtensionStart: Float32,
        hyperExtensionScale: Float32,
        bones: DynArray(Uint64),
        targetRaycastInfo: Pointer("PackAnimIKRaycastTargetV0"),
        targetMode: Uint8,
        chainType: Uint8
      },
      PackAnimIKRaycastTargetV0: {
        flags: Uint32,
        direction: FixedArray(Float32, 3)
      }
    },
    root: {
      aimIKConfigs: DynArray("PackAnimAimIKConfigV0"),
      chainGroups: DynArray("PackAnimIKChainGroupV0")
    }
  }
]