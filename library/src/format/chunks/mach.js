let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: mach, versions: 2, strucTab: 0x1884620
  /// ==================================================

  {
    name: "mach",
    versions: {
      // => Version: 1
      1: function () {
        this.PackAnimMachineActionV1 = [
          "actionData",
          "uint32", // Replaced unknown type: 0x1C
        ];

        this.PackAnimMachineActionBlockV1 = ["actions", Utils.getArrayReader(this.PackAnimMachineActionV1)];

        this.PackAnimMachineActionVariantV1 = [
          "token",
          Utils.getQWordReader(),
          "actionBlock",
          Utils.getPointerReader(this.PackAnimMachineActionBlockV1),
        ];

        this.PackAnimMachineActionVariantBlockV1 = [
          "actionVariants",
          Utils.getArrayReader(this.PackAnimMachineActionVariantV1),
        ];

        this.PackAnimMachineTransitionVariantV1 = [
          "token",
          Utils.getQWordReader(),
          "actionBlock",
          Utils.getPointerReader(this.PackAnimMachineActionBlockV1),
        ];

        this.PackAnimMachineTransitionV1 = [
          "name",
          Utils.getString16Reader(),
          "targetStateName",
          Utils.getString16Reader(),
          "actionBlock",
          Utils.getPointerReader(this.PackAnimMachineActionBlockV1),
          "variants",
          Utils.getArrayReader(this.PackAnimMachineTransitionVariantV1),
        ];

        this.PackAnimMachineStateVariantV1 = [
          "token",
          Utils.getQWordReader(),
          "actionBlock",
          Utils.getPointerReader(this.PackAnimMachineActionBlockV1),
          "actionVariantBlock",
          Utils.getPointerReader(this.PackAnimMachineActionVariantBlockV1),
          "transitions",
          Utils.getArrayReader(this.PackAnimMachineTransitionV1),
        ];

        this.PackAnimMachineStateV1 = [
          "name",
          Utils.getString16Reader(),
          "actionBlock",
          Utils.getPointerReader(this.PackAnimMachineActionBlockV1),
          "actionVariantBlock",
          Utils.getPointerReader(this.PackAnimMachineActionVariantBlockV1),
          "transitions",
          Utils.getArrayReader(this.PackAnimMachineTransitionV1),
          "variants",
          Utils.getArrayReader(this.PackAnimMachineStateVariantV1),
        ];

        this.PackAnimMachineV1 = ["states", Utils.getArrayReader(this.PackAnimMachineStateV1)];

        this.PackAnimModelV1 = [
          "modelFileId",
          Utils.getFileNameReader(),
          "modelFileRaw",
          Utils.getString16Reader(),
          "machineIndex",
          "uint32",
          "listeners",
          ["[]", "uint8", 16],
        ];

        this.__root = this.PackAnimMachinesV1 = [
          "machines",
          Utils.getArrayReader(this.PackAnimMachineV1),
          "models",
          Utils.getArrayReader(this.PackAnimModelV1),
        ];
      },

      // => Version: 0
      0: function () {
        this.PackAnimMachineActionV0 = [
          "actionData",
          "uint32", // Replaced unknown type: 0x1C
        ];

        this.PackAnimMachineActionBlockV0 = ["actions", Utils.getArrayReader(this.PackAnimMachineActionV0)];

        this.PackAnimMachineActionVariantV0 = [
          "token",
          Utils.getQWordReader(),
          "actionBlock",
          Utils.getPointerReader(this.PackAnimMachineActionBlockV0),
        ];

        this.PackAnimMachineActionVariantBlockV0 = [
          "actionVariants",
          Utils.getArrayReader(this.PackAnimMachineActionVariantV0),
        ];

        this.PackAnimMachineTransitionVariantV0 = [
          "token",
          Utils.getQWordReader(),
          "actionBlock",
          Utils.getPointerReader(this.PackAnimMachineActionBlockV0),
        ];

        this.PackAnimMachineTransitionV0 = [
          "name",
          Utils.getString16Reader(),
          "targetStateName",
          Utils.getString16Reader(),
          "actionBlock",
          Utils.getPointerReader(this.PackAnimMachineActionBlockV0),
          "variants",
          Utils.getArrayReader(this.PackAnimMachineTransitionVariantV0),
        ];

        this.PackAnimMachineStateVariantV0 = [
          "token",
          Utils.getQWordReader(),
          "actionBlock",
          Utils.getPointerReader(this.PackAnimMachineActionBlockV0),
          "actionVariantBlock",
          Utils.getPointerReader(this.PackAnimMachineActionVariantBlockV0),
          "transitions",
          Utils.getArrayReader(this.PackAnimMachineTransitionV0),
        ];

        this.PackAnimMachineStateV0 = [
          "name",
          Utils.getString16Reader(),
          "actionBlock",
          Utils.getPointerReader(this.PackAnimMachineActionBlockV0),
          "actionVariantBlock",
          Utils.getPointerReader(this.PackAnimMachineActionVariantBlockV0),
          "transitions",
          Utils.getArrayReader(this.PackAnimMachineTransitionV0),
          "variants",
          Utils.getArrayReader(this.PackAnimMachineStateVariantV0),
        ];

        this.PackAnimMachineV0 = ["states", Utils.getArrayReader(this.PackAnimMachineStateV0)];

        this.PackAnimModelV0 = [
          "modelFileId",
          Utils.getFileNameReader(),
          "modelFileRaw",
          Utils.getString16Reader(),
          "machineIndex",
          "uint32",
        ];

        this.__root = this.PackAnimMachinesV0 = [
          "machines",
          Utils.getArrayReader(this.PackAnimMachineV0),
          "models",
          Utils.getArrayReader(this.PackAnimModelV0),
        ];
      },
    },
  },
];
