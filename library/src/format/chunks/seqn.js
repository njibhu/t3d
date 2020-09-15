let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: seqn, versions: 1, strucTab: 0x1884454
  /// ==================================================

  {
    name: "seqn",
    versions: {
      // => Version: 0
      0: function() {
        this.PackAnimSequenceChargeStageV0 = [
          "duration",
          "uint16",
          "endingChargeLevel",
          "uint8"
        ];

        this.PackAnimSequenceStepActionV0 = ["duration", "uint32"];

        this.PackAnimSequenceStepMoveV0 = [
          "duration",
          "uint32",
          "moveRotation",
          ["[]", "float32", 4],
          "facingRotation",
          ["[]", "float32", 4],
          "velocity",
          ["[]", "float32", 2]
        ];

        this.PackAnimSequenceStepV0 = [
          "type",
          "uint8",
          "animationSpeed",
          "float32",
          "flags",
          "uint32",
          "action",
          Utils.getPointerReader(this.PackAnimSequenceStepActionV0),
          "move",
          Utils.getPointerReader(this.PackAnimSequenceStepMoveV0)
        ];

        this.PackAnimSequenceTriggerV0 = [
          "trigger",
          "uint8",
          "time",
          "uint32",
          "flags",
          "uint32"
        ];

        this.PackAnimSequenceDataV0 = [
          "token",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "chargeStages",
          Utils.getArrayReader(this.PackAnimSequenceChargeStageV0),
          "steps",
          Utils.getArrayReader(this.PackAnimSequenceStepV0),
          "triggers",
          Utils.getArrayReader(this.PackAnimSequenceTriggerV0)
        ];

        this.PackAnimSequenceV0 = [
          "sequence",
          Utils.getQWordReader(),
          "animationData",
          Utils.getArrayReader(this.PackAnimSequenceDataV0)
        ];

        this.__root = this.PackAnimSequencesV0 = [
          "sequences",
          Utils.getArrayReader(this.PackAnimSequenceV0)
        ];
      }
    }
  }
];
