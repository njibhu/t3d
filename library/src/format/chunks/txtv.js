let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: txtv, versions: 1, strucTab: 0x1565804
  /// ==================================================

  {
    name: "txtv",
    versions: {
      // => Version: 0
      0: function () {
        this.TextPackVoice = ["textId", "uint32", "voiceId", "uint32"];

        this.__root = this.TextPackVoices = ["voices", Utils.getArrayReader(this.TextPackVoice)];
      },
    },
  },
];
