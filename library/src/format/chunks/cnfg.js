let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: cnfg, versions: 1, strucTab: 0x1884668
  /// ==================================================

  {
    name: "cnfg",
    versions: {
      // => Version: 0
      0: function () {
        this.PackAnimAimIKBoneV0 = [
          "boneToken",
          Utils.getQWordReader(),
          "clampAngle",
          "float32",
          "weight",
          "float32",
          "smoothingWeight",
          "float32",
        ];

        this.PackAnimAimIKConfigV0 = [
          "name",
          Utils.getQWordReader(),
          "boneEye",
          Utils.getQWordReader(),
          "boneSight",
          Utils.getQWordReader(),
          "endEffector",
          Utils.getQWordReader(),
          "frustumHAngle",
          "float32",
          "frustumVAngle",
          "float32",
          "frustumLength",
          "float32",
          "targetVelocityConstraint",
          "float32",
          "bones",
          Utils.getArrayReader(this.PackAnimAimIKBoneV0),
          "targets",
          Utils.getArrayReader(Utils.getQWordReader()),
          "flags",
          "uint8",
        ];

        this.PackAnimIKRaycastTargetV0 = ["flags", "uint32", "direction", ["[]", "float32", 3]];

        this.PackAnimIKChainV0 = [
          "name",
          Utils.getQWordReader(),
          "smoothWeight",
          ["[]", "float32", 3],
          "hyperExtensionStart",
          "float32",
          "hyperExtensionScale",
          "float32",
          "bones",
          Utils.getArrayReader(Utils.getQWordReader()),
          "targetRaycastInfo",
          Utils.getPointerReader(this.PackAnimIKRaycastTargetV0),
          "targetMode",
          "uint8",
          "chainType",
          "uint8",
        ];

        this.PackAnimIKChainGroupV0 = [
          "name",
          Utils.getQWordReader(),
          "chains",
          Utils.getArrayReader(this.PackAnimIKChainV0),
        ];

        this.__root = this.PackAnimConfigV0 = [
          "aimIKConfigs",
          Utils.getArrayReader(this.PackAnimAimIKConfigV0),
          "chainGroups",
          Utils.getArrayReader(this.PackAnimIKChainGroupV0),
        ];
      },
    },
  },
];
