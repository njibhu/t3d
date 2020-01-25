let Utils = T3D.ParserUtils;

module.exports = [
  /// ==================================================
  /// Chunk: CSCN, versions: 37, strucTab: 0x16E8BC8
  /// ==================================================

  {
    name: "CSCN",
    versions: {
      // => Version: 36, ReferencedFunction: 0xE37660
      36: function() {
        this.PropertyDataV36 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV36 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV36 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV36 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV36 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV36),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV36),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV36),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV36 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV36),
          "track",
          Utils.getArrayReader(this.TrackDataV36),
          "type",
          "uint8"
        ];

        this.SequenceDataV36 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV36)
        ];

        this.ColorDefDataV36 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV36 = [
          "ambientGroundColor",
          this.ColorDefDataV36,
          "ambientSkyColor",
          this.ColorDefDataV36,
          "fillColor",
          this.ColorDefDataV36,
          "hemisphericalColor",
          this.ColorDefDataV36,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV36 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV36 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV36 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV36 = [
          "name",
          Utils.getQWordReader(),
          "index",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV36)
        ];

        this.SpeciesResourceDataV36 = [
          "speciesId",
          ["[]", "uint8", 16],
          "name",
          Utils.getQWordReader(),
          "modelId",
          Utils.getQWordReader(),
          "modelVariant",
          Utils.getQWordReader()
        ];

        this.ResourceDataV36 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV36),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV36),
          "script",
          Utils.getArrayReader(this.ScriptDataV36),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV36),
          "speciesResource",
          Utils.getArrayReader(this.SpeciesResourceDataV36)
        ];

        this.__root = this.SceneDataV36 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV36),
          "resources",
          this.ResourceDataV36,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV36)
        ];
      },

      // => Version: 35
      35: function() {
        this.PropertyDataV35 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV35 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV35 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV35 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV35 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV35),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV35),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV35),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV35 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV35),
          "track",
          Utils.getArrayReader(this.TrackDataV35),
          "type",
          "uint8"
        ];

        this.SequenceDataV35 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV35)
        ];

        this.ColorDefDataV35 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV35 = [
          "ambientGroundColor",
          this.ColorDefDataV35,
          "ambientSkyColor",
          this.ColorDefDataV35,
          "fillColor",
          this.ColorDefDataV35,
          "hemisphericalColor",
          this.ColorDefDataV35,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV35 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV35 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV35 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV35 = [
          "name",
          Utils.getQWordReader(),
          "index",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV35)
        ];

        this.SpeciesResourceDataV35 = [
          "speciesId",
          ["[]", "uint8", 16],
          "name",
          Utils.getQWordReader(),
          "modelId",
          Utils.getQWordReader(),
          "modelVariant",
          Utils.getQWordReader()
        ];

        this.ResourceDataV35 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV35),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV35),
          "script",
          Utils.getArrayReader(this.ScriptDataV35),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV35),
          "speciesResource",
          Utils.getArrayReader(this.SpeciesResourceDataV35)
        ];

        this.__root = this.SceneDataV35 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV35),
          "resources",
          this.ResourceDataV35,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV35)
        ];
      },

      // => Version: 34, ReferencedFunction: 0xE375C0
      34: function() {
        this.PropertyDataV34 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV34 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV34 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV34 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV34 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV34),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV34),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV34),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV34 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV34),
          "track",
          Utils.getArrayReader(this.TrackDataV34),
          "type",
          "uint8"
        ];

        this.SequenceDataV34 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV34)
        ];

        this.ColorDefDataV34 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV34 = [
          "ambientGroundColor",
          this.ColorDefDataV34,
          "ambientSkyColor",
          this.ColorDefDataV34,
          "fillColor",
          this.ColorDefDataV34,
          "hemisphericalColor",
          this.ColorDefDataV34,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV34 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV34 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV34 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV34 = [
          "name",
          Utils.getQWordReader(),
          "index",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV34)
        ];

        this.SpeciesResourceDataV34 = [
          "speciesId",
          ["[]", "uint8", 16],
          "modelId",
          Utils.getQWordReader(),
          "modelVariant",
          Utils.getQWordReader()
        ];

        this.ResourceDataV34 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV34),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV34),
          "script",
          Utils.getArrayReader(this.ScriptDataV34),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV34),
          "speciesResource",
          Utils.getArrayReader(this.SpeciesResourceDataV34)
        ];

        this.__root = this.SceneDataV34 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV34),
          "resources",
          this.ResourceDataV34,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV34)
        ];
      },

      // => Version: 33, ReferencedFunction: 0xE37520
      33: function() {
        this.PropertyDataV33 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV33 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV33 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV33 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV33 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV33),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV33),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV33),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV33 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV33),
          "track",
          Utils.getArrayReader(this.TrackDataV33),
          "type",
          "uint8"
        ];

        this.SequenceDataV33 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV33)
        ];

        this.ColorDefDataV33 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV33 = [
          "ambientGroundColor",
          this.ColorDefDataV33,
          "ambientSkyColor",
          this.ColorDefDataV33,
          "fillColor",
          this.ColorDefDataV33,
          "hemisphericalColor",
          this.ColorDefDataV33,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV33 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV33 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV33 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV33 = [
          "name",
          Utils.getQWordReader(),
          "index",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV33)
        ];

        this.ResourceDataV33 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV33),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV33),
          "script",
          Utils.getArrayReader(this.ScriptDataV33),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV33)
        ];

        this.__root = this.SceneDataV33 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV33),
          "resources",
          this.ResourceDataV33,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV33)
        ];
      },

      // => Version: 32, ReferencedFunction: 0xE37480
      32: function() {
        this.PropertyDataV32 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV32 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV32 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV32 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV32 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV32),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV32),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV32),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV32 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV32),
          "track",
          Utils.getArrayReader(this.TrackDataV32),
          "type",
          "uint8"
        ];

        this.SequenceDataV32 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV32)
        ];

        this.ColorDefDataV32 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV32 = [
          "ambientGroundColor",
          this.ColorDefDataV32,
          "ambientSkyColor",
          this.ColorDefDataV32,
          "fillColor",
          this.ColorDefDataV32,
          "hemisphericalColor",
          this.ColorDefDataV32,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV32 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV32 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV32 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV32 = [
          "name",
          Utils.getQWordReader(),
          "index",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV32)
        ];

        this.ResourceDataV32 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV32),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV32),
          "script",
          Utils.getArrayReader(this.ScriptDataV32),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV32)
        ];

        this.__root = this.SceneDataV32 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV32),
          "resources",
          this.ResourceDataV32,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV32)
        ];
      },

      // => Version: 31, ReferencedFunction: 0xE373E0
      31: function() {
        this.PropertyDataV31 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV31 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV31 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV31 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV31 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV31),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV31),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV31),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV31 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV31),
          "track",
          Utils.getArrayReader(this.TrackDataV31),
          "type",
          "uint8"
        ];

        this.SequenceDataV31 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV31)
        ];

        this.ColorDefDataV31 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV31 = [
          "ambientGroundColor",
          this.ColorDefDataV31,
          "ambientSkyColor",
          this.ColorDefDataV31,
          "fillColor",
          this.ColorDefDataV31,
          "hemisphericalColor",
          this.ColorDefDataV31,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV31 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV31 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV31 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV31 = [
          "name",
          Utils.getQWordReader(),
          "index",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV31)
        ];

        this.ResourceDataV31 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV31),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV31),
          "script",
          Utils.getArrayReader(this.ScriptDataV31),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV31)
        ];

        this.__root = this.SceneDataV31 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV31),
          "resources",
          this.ResourceDataV31,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV31)
        ];
      },

      // => Version: 30, ReferencedFunction: 0xE37390
      30: function() {
        this.PropertyDataV30 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV30 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV30 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV30 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV30 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV30),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV30),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV30),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV30 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV30),
          "track",
          Utils.getArrayReader(this.TrackDataV30),
          "type",
          "uint8"
        ];

        this.SequenceDataV30 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV30)
        ];

        this.ColorDefDataV30 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV30 = [
          "ambientGroundColor",
          this.ColorDefDataV30,
          "ambientSkyColor",
          this.ColorDefDataV30,
          "fillColor",
          this.ColorDefDataV30,
          "hemisphericalColor",
          this.ColorDefDataV30,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV30 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV30 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV30 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV30 = [
          "name",
          Utils.getQWordReader(),
          "index",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV30)
        ];

        this.ResourceDataV30 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV30),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV30),
          "script",
          Utils.getArrayReader(this.ScriptDataV30),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV30)
        ];

        this.__root = this.SceneDataV30 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV30),
          "resources",
          this.ResourceDataV30,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV30)
        ];
      },

      // => Version: 29
      29: function() {
        this.PropertyDataV29 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV29 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV29 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV29 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV29 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV29),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV29),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV29),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV29 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV29),
          "track",
          Utils.getArrayReader(this.TrackDataV29),
          "type",
          "uint8"
        ];

        this.SequenceDataV29 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV29)
        ];

        this.ColorDefDataV29 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV29 = [
          "ambientGroundColor",
          this.ColorDefDataV29,
          "ambientSkyColor",
          this.ColorDefDataV29,
          "fillColor",
          this.ColorDefDataV29,
          "hemisphericalColor",
          this.ColorDefDataV29,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV29 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV29 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV29 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV29 = [
          "guid",
          ["[]", "uint8", 16],
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV29)
        ];

        this.ResourceDataV29 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV29),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV29),
          "script",
          Utils.getArrayReader(this.ScriptDataV29),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV29)
        ];

        this.__root = this.SceneDataV29 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV29),
          "resources",
          this.ResourceDataV29,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV29)
        ];
      },

      // => Version: 28, ReferencedFunction: 0xE372F0
      28: function() {
        this.PropertyDataV28 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV28 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV28 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV28 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV28 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV28),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV28),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV28),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV28 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV28),
          "track",
          Utils.getArrayReader(this.TrackDataV28),
          "type",
          "uint8"
        ];

        this.SequenceDataV28 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV28)
        ];

        this.ColorDefDataV28 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV28 = [
          "ambientGroundColor",
          this.ColorDefDataV28,
          "ambientSkyColor",
          this.ColorDefDataV28,
          "fillColor",
          this.ColorDefDataV28,
          "hemisphericalColor",
          this.ColorDefDataV28,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV28 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV28 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV28 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV28 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV28)
        ];

        this.ResourceDataV28 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV28),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV28),
          "script",
          Utils.getArrayReader(this.ScriptDataV28),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV28)
        ];

        this.__root = this.SceneDataV28 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV28),
          "resources",
          this.ResourceDataV28,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV28)
        ];
      },

      // => Version: 27, ReferencedFunction: 0xE37250
      27: function() {
        this.PropertyDataV27 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV27 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV27 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV27 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV27 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV27),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV27),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV27),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV27 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV27),
          "track",
          Utils.getArrayReader(this.TrackDataV27),
          "type",
          "uint8"
        ];

        this.SequenceDataV27 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV27)
        ];

        this.ColorDefDataV27 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV27 = [
          "ambientGroundColor",
          this.ColorDefDataV27,
          "ambientSkyColor",
          this.ColorDefDataV27,
          "fillColor",
          this.ColorDefDataV27,
          "hemisphericalColor",
          this.ColorDefDataV27,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV27 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV27 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV27 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV27 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV27)
        ];

        this.ResourceDataV27 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV27),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV27),
          "script",
          Utils.getArrayReader(this.ScriptDataV27),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV27)
        ];

        this.__root = this.SceneDataV27 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV27),
          "resources",
          this.ResourceDataV27,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV27)
        ];
      },

      // => Version: 26, ReferencedFunction: 0xE371B0
      26: function() {
        this.PropertyDataV26 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV26 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV26 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV26 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV26 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV26),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV26),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV26),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV26 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV26),
          "track",
          Utils.getArrayReader(this.TrackDataV26),
          "type",
          "uint8"
        ];

        this.SequenceDataV26 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV26)
        ];

        this.ColorDefDataV26 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV26 = [
          "ambientGroundColor",
          this.ColorDefDataV26,
          "ambientSkyColor",
          this.ColorDefDataV26,
          "fillColor",
          this.ColorDefDataV26,
          "hemisphericalColor",
          this.ColorDefDataV26,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV26 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV26 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV26 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV26 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV26)
        ];

        this.ResourceDataV26 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV26),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV26),
          "script",
          Utils.getArrayReader(this.ScriptDataV26),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV26)
        ];

        this.__root = this.SceneDataV26 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV26),
          "resources",
          this.ResourceDataV26,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV26)
        ];
      },

      // => Version: 25, ReferencedFunction: 0xE37110
      25: function() {
        this.PropertyDataV25 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV25 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV25 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV25 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV25 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV25),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV25),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV25),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV25 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV25),
          "track",
          Utils.getArrayReader(this.TrackDataV25),
          "type",
          "uint8"
        ];

        this.SequenceDataV25 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV25)
        ];

        this.ColorDefDataV25 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV25 = [
          "ambientGroundColor",
          this.ColorDefDataV25,
          "ambientSkyColor",
          this.ColorDefDataV25,
          "fillColor",
          this.ColorDefDataV25,
          "hemisphericalColor",
          this.ColorDefDataV25,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV25 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV25 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV25 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV25 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV25)
        ];

        this.ResourceDataV25 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV25),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV25),
          "script",
          Utils.getArrayReader(this.ScriptDataV25),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV25)
        ];

        this.__root = this.SceneDataV25 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV25),
          "resources",
          this.ResourceDataV25,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV25)
        ];
      },

      // => Version: 24, ReferencedFunction: 0xE37070
      24: function() {
        this.PropertyDataV24 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV24 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV24 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV24 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV24 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV24),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV24),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV24),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV24 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV24),
          "track",
          Utils.getArrayReader(this.TrackDataV24),
          "type",
          "uint8"
        ];

        this.SequenceDataV24 = [
          "name",
          Utils.getQWordReader(),
          "playScript",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV24)
        ];

        this.ColorDefDataV24 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV24 = [
          "ambientGroundColor",
          this.ColorDefDataV24,
          "ambientSkyColor",
          this.ColorDefDataV24,
          "fillColor",
          this.ColorDefDataV24,
          "hemisphericalColor",
          this.ColorDefDataV24,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV24 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV24 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV24 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV24 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV24)
        ];

        this.ResourceDataV24 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV24),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV24),
          "script",
          Utils.getArrayReader(this.ScriptDataV24),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV24)
        ];

        this.__root = this.SceneDataV24 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV24),
          "resources",
          this.ResourceDataV24,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV24)
        ];
      },

      // => Version: 23
      23: function() {
        this.PropertyDataV23 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV23 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV23 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV23 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV23 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV23),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV23),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV23),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV23 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV23),
          "track",
          Utils.getArrayReader(this.TrackDataV23),
          "type",
          "uint8"
        ];

        this.SequenceDataV23 = [
          "name",
          Utils.getQWordReader(),
          "updateScript",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "flags",
          "uint32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV23)
        ];

        this.ColorDefDataV23 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV23 = [
          "ambientGroundColor",
          this.ColorDefDataV23,
          "ambientSkyColor",
          this.ColorDefDataV23,
          "fillColor",
          this.ColorDefDataV23,
          "hemisphericalColor",
          this.ColorDefDataV23,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV23 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV23 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV23 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV23 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV23)
        ];

        this.ResourceDataV23 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV23),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV23),
          "script",
          Utils.getArrayReader(this.ScriptDataV23),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV23)
        ];

        this.__root = this.SceneDataV23 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV23),
          "resources",
          this.ResourceDataV23,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV23)
        ];
      },

      // => Version: 22, ReferencedFunction: 0xE36FD0
      22: function() {
        this.PropertyDataV22 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV22 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV22 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV22 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV22 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV22),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV22),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV22),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV22 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV22),
          "track",
          Utils.getArrayReader(this.TrackDataV22),
          "type",
          "uint8"
        ];

        this.SequenceDataV22 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "updateScript",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV22)
        ];

        this.ColorDefDataV22 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV22 = [
          "ambientGroundColor",
          this.ColorDefDataV22,
          "ambientSkyColor",
          this.ColorDefDataV22,
          "fillColor",
          this.ColorDefDataV22,
          "hemisphericalColor",
          this.ColorDefDataV22,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV22 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV22 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV22 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV22 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV22)
        ];

        this.ResourceDataV22 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV22),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV22),
          "script",
          Utils.getArrayReader(this.ScriptDataV22),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV22)
        ];

        this.__root = this.SceneDataV22 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV22),
          "resources",
          this.ResourceDataV22,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV22)
        ];
      },

      // => Version: 21
      21: function() {
        this.PropertyDataV21 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV21 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV21 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV21 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV21 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV21),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV21),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV21),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV21 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV21),
          "track",
          Utils.getArrayReader(this.TrackDataV21),
          "type",
          "uint8"
        ];

        this.SequenceDataV21 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "updateScript",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV21)
        ];

        this.ColorDefDataV21 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV21 = [
          "ambientGroundColor",
          this.ColorDefDataV21,
          "ambientSkyColor",
          this.ColorDefDataV21,
          "fillColor",
          this.ColorDefDataV21,
          "hemisphericalColor",
          this.ColorDefDataV21,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV21 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV21 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV21 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV21 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV21)
        ];

        this.ResourceDataV21 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV21),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV21),
          "script",
          Utils.getArrayReader(this.ScriptDataV21),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV21)
        ];

        this.__root = this.SceneDataV21 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV21),
          "resources",
          this.ResourceDataV21,
          "trackGroup",
          Utils.getPointerReader(this.TrackGroupDataV21)
        ];
      },

      // => Version: 20, ReferencedFunction: 0xE36F30
      20: function() {
        this.PropertyDataV20 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV20 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV20 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV20 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV20 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV20),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV20),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV20),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV20 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV20),
          "track",
          Utils.getArrayReader(this.TrackDataV20),
          "type",
          "uint8"
        ];

        this.SequenceDataV20 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "updateScript",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV20)
        ];

        this.ColorDefDataV20 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV20 = [
          "ambientGroundColor",
          this.ColorDefDataV20,
          "ambientSkyColor",
          this.ColorDefDataV20,
          "fillColor",
          this.ColorDefDataV20,
          "hemisphericalColor",
          this.ColorDefDataV20,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV20 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV20 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV20 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV20 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV20)
        ];

        this.ResourceDataV20 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV20),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV20),
          "script",
          Utils.getArrayReader(this.ScriptDataV20),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV20)
        ];

        this.__root = this.SceneDataV20 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV20),
          "resources",
          this.ResourceDataV20
        ];
      },

      // => Version: 19, ReferencedFunction: 0xE36E90
      19: function() {
        this.PropertyDataV19 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV19 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV19 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV19 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV19 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV19),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV19),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV19),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV19 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV19),
          "track",
          Utils.getArrayReader(this.TrackDataV19),
          "type",
          "uint8"
        ];

        this.SequenceDataV19 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "updateScript",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV19)
        ];

        this.ColorDefDataV19 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV19 = [
          "ambientGroundColor",
          this.ColorDefDataV19,
          "ambientSkyColor",
          this.ColorDefDataV19,
          "fillColor",
          this.ColorDefDataV19,
          "hemisphericalColor",
          this.ColorDefDataV19,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV19 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV19 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV19 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV19 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV19)
        ];

        this.ResourceDataV19 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV19),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV19),
          "script",
          Utils.getArrayReader(this.ScriptDataV19),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV19)
        ];

        this.__root = this.SceneDataV19 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV19),
          "resources",
          this.ResourceDataV19
        ];
      },

      // => Version: 18, ReferencedFunction: 0xE36E90
      18: function() {
        this.PropertyDataV18 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV18 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV18 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV18 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV18 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV18),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV18),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV18),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV18 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV18),
          "track",
          Utils.getArrayReader(this.TrackDataV18),
          "type",
          "uint8"
        ];

        this.SequenceDataV18 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "updateScript",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV18)
        ];

        this.ColorDefDataV18 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV18 = [
          "ambientGroundColor",
          this.ColorDefDataV18,
          "ambientSkyColor",
          this.ColorDefDataV18,
          "fillColor",
          this.ColorDefDataV18,
          "hemisphericalColor",
          this.ColorDefDataV18,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV18 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV18 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV18 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV18 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV18)
        ];

        this.ResourceDataV18 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV18),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV18),
          "script",
          Utils.getArrayReader(this.ScriptDataV18),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV18)
        ];

        this.__root = this.SceneDataV18 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV18),
          "resources",
          this.ResourceDataV18
        ];
      },

      // => Version: 17, ReferencedFunction: 0xE36DF0
      17: function() {
        this.PropertyDataV17 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV17 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV17 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV17 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV17 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV17),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV17),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV17),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV17 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV17),
          "track",
          Utils.getArrayReader(this.TrackDataV17),
          "type",
          "uint8"
        ];

        this.SequenceDataV17 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "updateScript",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV17)
        ];

        this.ColorDefDataV17 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV17 = [
          "ambientGroundColor",
          this.ColorDefDataV17,
          "ambientSkyColor",
          this.ColorDefDataV17,
          "fillColor",
          this.ColorDefDataV17,
          "hemisphericalColor",
          this.ColorDefDataV17,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV17 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV17 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV17 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV17 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV17)
        ];

        this.ResourceDataV17 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV17),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV17),
          "script",
          Utils.getArrayReader(this.ScriptDataV17),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV17)
        ];

        this.__root = this.SceneDataV17 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV17),
          "resources",
          this.ResourceDataV17
        ];
      },

      // => Version: 16, ReferencedFunction: 0xE36D50
      16: function() {
        this.PropertyDataV16 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV16 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV16 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV16 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV16 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV16),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV16),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV16),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV16 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV16),
          "track",
          Utils.getArrayReader(this.TrackDataV16),
          "type",
          "uint8"
        ];

        this.SequenceDataV16 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "updateScript",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV16)
        ];

        this.ColorDefDataV16 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV16 = [
          "ambientGroundColor",
          this.ColorDefDataV16,
          "ambientSkyColor",
          this.ColorDefDataV16,
          "fillColor",
          this.ColorDefDataV16,
          "hemisphericalColor",
          this.ColorDefDataV16,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV16 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV16 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV16 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV16 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV16)
        ];

        this.ResourceDataV16 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV16),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV16),
          "script",
          Utils.getArrayReader(this.ScriptDataV16),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV16)
        ];

        this.__root = this.SceneDataV16 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV16),
          "resources",
          this.ResourceDataV16
        ];
      },

      // => Version: 15
      15: function() {
        this.PropertyDataV15 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV15 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV15 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV15 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV15 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV15),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV15),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV15),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV15 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV15),
          "track",
          Utils.getArrayReader(this.TrackDataV15),
          "type",
          "uint8"
        ];

        this.SequenceDataV15 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "updateScript",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV15)
        ];

        this.ColorDefDataV15 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV15 = [
          "ambientGroundColor",
          this.ColorDefDataV15,
          "ambientSkyColor",
          this.ColorDefDataV15,
          "fillColor",
          this.ColorDefDataV15,
          "hemisphericalColor",
          this.ColorDefDataV15,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV15 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV15 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV15 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV15 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV15)
        ];

        this.ResourceDataV15 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV15),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV15),
          "script",
          Utils.getArrayReader(this.ScriptDataV15),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV15)
        ];

        this.__root = this.SceneDataV15 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV15),
          "resources",
          this.ResourceDataV15
        ];
      },

      // => Version: 14
      14: function() {
        this.PropertyDataV14 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV14 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV14 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV14 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV14 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV14),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV14),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV14),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV14 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV14),
          "track",
          Utils.getArrayReader(this.TrackDataV14),
          "type",
          "uint8"
        ];

        this.SequenceDataV14 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV14)
        ];

        this.ColorDefDataV14 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV14 = [
          "ambientGroundColor",
          this.ColorDefDataV14,
          "ambientSkyColor",
          this.ColorDefDataV14,
          "fillColor",
          this.ColorDefDataV14,
          "hemisphericalColor",
          this.ColorDefDataV14,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV14 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV14 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV14 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV14 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "voiceId",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV14)
        ];

        this.ResourceDataV14 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV14),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV14),
          "script",
          Utils.getArrayReader(this.ScriptDataV14),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV14)
        ];

        this.__root = this.SceneDataV14 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV14),
          "resources",
          this.ResourceDataV14
        ];
      },

      // => Version: 13, ReferencedFunction: 0xE36CD0
      13: function() {
        this.PropertyDataV13 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV13 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV13 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV13 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV13 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV13),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV13),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV13),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV13 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV13),
          "track",
          Utils.getArrayReader(this.TrackDataV13),
          "type",
          "uint8"
        ];

        this.SequenceDataV13 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV13)
        ];

        this.ColorDefDataV13 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV13 = [
          "ambientGroundColor",
          this.ColorDefDataV13,
          "ambientSkyColor",
          this.ColorDefDataV13,
          "fillColor",
          this.ColorDefDataV13,
          "hemisphericalColor",
          this.ColorDefDataV13,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV13 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV13 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV13 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV13 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV13)
        ];

        this.ResourceDataV13 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV13),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV13),
          "script",
          Utils.getArrayReader(this.ScriptDataV13),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV13)
        ];

        this.__root = this.SceneDataV13 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV13),
          "resources",
          this.ResourceDataV13
        ];
      },

      // => Version: 12, ReferencedFunction: 0xE36BE0
      12: function() {
        this.PropertyDataV12 = [
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader(),
          "type",
          "uint8"
        ];

        this.CurveKeyDataV12 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV12 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV12 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV12 = [
          "name",
          Utils.getQWordReader(),
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV12),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV12),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV12),
          "type",
          "uint8"
        ];

        this.TrackGroupDataV12 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV12),
          "track",
          Utils.getArrayReader(this.TrackDataV12),
          "type",
          "uint8"
        ];

        this.SequenceDataV12 = [
          "name",
          Utils.getQWordReader(),
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV12)
        ];

        this.ColorDefDataV12 = [
          "intensity",
          "float32",
          "color",
          ["[]", "uint8", 3]
        ];

        this.AmbientLightDataV12 = [
          "ambientGroundColor",
          this.ColorDefDataV12,
          "ambientSkyColor",
          this.ColorDefDataV12,
          "fillColor",
          this.ColorDefDataV12,
          "hemisphericalColor",
          this.ColorDefDataV12,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV12 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV12 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV12 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV12 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV12)
        ];

        this.ResourceDataV12 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV12),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV12),
          "script",
          Utils.getArrayReader(this.ScriptDataV12),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV12)
        ];

        this.__root = this.SceneDataV12 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV12),
          "resources",
          this.ResourceDataV12
        ];
      },

      // => Version: 11, ReferencedFunction: 0xE36B40
      11: function() {
        this.PropertyDataV11 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV11 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV11 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV11 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV11 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV11),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV11),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV11)
        ];

        this.TrackGroupDataV11 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV11),
          "track",
          Utils.getArrayReader(this.TrackDataV11)
        ];

        this.SequenceDataV11 = [
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV11)
        ];

        this.ColorDefDataV11 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV11 = [
          "ambientGroundColor",
          this.ColorDefDataV11,
          "ambientSkyColor",
          this.ColorDefDataV11,
          "fillColor",
          this.ColorDefDataV11,
          "hemisphericalColor",
          this.ColorDefDataV11,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV11 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV11 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV11 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV11 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV11)
        ];

        this.ResourceDataV11 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV11),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV11),
          "script",
          Utils.getArrayReader(this.ScriptDataV11),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV11)
        ];

        this.__root = this.SceneDataV11 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV11),
          "resources",
          this.ResourceDataV11
        ];
      },

      // => Version: 10, ReferencedFunction: 0xE36AE0
      10: function() {
        this.PropertyDataV10 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV10 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV10 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV10 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV10 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV10),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV10),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV10)
        ];

        this.TrackGroupDataV10 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV10),
          "track",
          Utils.getArrayReader(this.TrackDataV10)
        ];

        this.SequenceDataV10 = [
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV10)
        ];

        this.ColorDefDataV10 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV10 = [
          "ambientGroundColor",
          this.ColorDefDataV10,
          "ambientSkyColor",
          this.ColorDefDataV10,
          "fillColor",
          this.ColorDefDataV10,
          "hemisphericalColor",
          this.ColorDefDataV10,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV10 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV10 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV10 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV10 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV10)
        ];

        this.ResourceDataV10 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV10),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV10),
          "script",
          Utils.getArrayReader(this.ScriptDataV10),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV10)
        ];

        this.__root = this.SceneDataV10 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV10),
          "resources",
          this.ResourceDataV10
        ];
      },

      // => Version: 9, ReferencedFunction: 0xE36A30
      9: function() {
        this.PropertyDataV9 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV9 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV9 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV9 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV9 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV9),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV9),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV9)
        ];

        this.TrackGroupDataV9 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV9),
          "track",
          Utils.getArrayReader(this.TrackDataV9)
        ];

        this.SequenceDataV9 = [
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV9)
        ];

        this.ColorDefDataV9 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV9 = [
          "ambientGroundColor",
          this.ColorDefDataV9,
          "ambientSkyColor",
          this.ColorDefDataV9,
          "fillColor",
          this.ColorDefDataV9,
          "hemisphericalColor",
          this.ColorDefDataV9,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV9 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV9 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV9 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV9 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV9)
        ];

        this.ResourceDataV9 = [
          "crc",
          "uint32",
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV9),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV9),
          "script",
          Utils.getArrayReader(this.ScriptDataV9),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV9)
        ];

        this.__root = this.SceneDataV9 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV9),
          "resources",
          this.ResourceDataV9
        ];
      },

      // => Version: 8
      8: function() {
        this.PropertyDataV8 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV8 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV8 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV8 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV8 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV8),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV8),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV8)
        ];

        this.TrackGroupDataV8 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV8),
          "track",
          Utils.getArrayReader(this.TrackDataV8)
        ];

        this.SequenceDataV8 = [
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV8)
        ];

        this.ColorDefDataV8 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV8 = [
          "ambientGroundColor",
          this.ColorDefDataV8,
          "ambientSkyColor",
          this.ColorDefDataV8,
          "fillColor",
          this.ColorDefDataV8,
          "hemisphericalColor",
          this.ColorDefDataV8,
          "name",
          Utils.getQWordReader()
        ];

        this.FileNameRefDataV8 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.ScriptDataV8 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV8 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV8 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV8)
        ];

        this.ResourceDataV8 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV8),
          "fileNameRef",
          Utils.getArrayReader(this.FileNameRefDataV8),
          "script",
          Utils.getArrayReader(this.ScriptDataV8),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV8)
        ];

        this.__root = this.SceneDataV8 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV8),
          "resources",
          this.ResourceDataV8
        ];
      },

      // => Version: 7, ReferencedFunction: 0xE36950
      7: function() {
        this.PropertyDataV7 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV7 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV7 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV7 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV7 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV7),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV7),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV7)
        ];

        this.TrackGroupDataV7 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV7),
          "track",
          Utils.getArrayReader(this.TrackDataV7)
        ];

        this.SequenceDataV7 = [
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV7)
        ];

        this.ColorDefDataV7 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV7 = [
          "ambientGroundColor",
          this.ColorDefDataV7,
          "ambientSkyColor",
          this.ColorDefDataV7,
          "fillColor",
          this.ColorDefDataV7,
          "hemisphericalColor",
          this.ColorDefDataV7,
          "name",
          Utils.getQWordReader()
        ];

        this.ScriptDataV7 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV7 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV7 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV7)
        ];

        this.ResourceDataV7 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV7),
          "script",
          Utils.getArrayReader(this.ScriptDataV7),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV7)
        ];

        this.__root = this.SceneDataV7 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV7),
          "resources",
          this.ResourceDataV7
        ];
      },

      // => Version: 6, ReferencedFunction: 0xE36880
      6: function() {
        this.PropertyDataV6 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV6 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV6 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV6 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV6 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV6),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV6),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV6)
        ];

        this.TrackGroupDataV6 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV6),
          "track",
          Utils.getArrayReader(this.TrackDataV6)
        ];

        this.SequenceDataV6 = [
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV6)
        ];

        this.ColorDefDataV6 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV6 = [
          "ambientGroundColor",
          this.ColorDefDataV6,
          "ambientSkyColor",
          this.ColorDefDataV6,
          "fillColor",
          this.ColorDefDataV6,
          "hemisphericalColor",
          this.ColorDefDataV6,
          "name",
          Utils.getQWordReader()
        ];

        this.ScriptDataV6 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV6 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV6 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV6)
        ];

        this.ResourceDataV6 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV6),
          "script",
          Utils.getArrayReader(this.ScriptDataV6),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV6)
        ];

        this.__root = this.SceneDataV6 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV6),
          "resources",
          this.ResourceDataV6
        ];
      },

      // => Version: 5, ReferencedFunction: 0xE367E0
      5: function() {
        this.PropertyDataV5 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV5 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV5 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV5 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV5 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV5),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV5),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV5)
        ];

        this.TrackGroupDataV5 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV5),
          "track",
          Utils.getArrayReader(this.TrackDataV5)
        ];

        this.SequenceDataV5 = [
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV5)
        ];

        this.ColorDefDataV5 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV5 = [
          "ambientGroundColor",
          this.ColorDefDataV5,
          "ambientSkyColor",
          this.ColorDefDataV5,
          "fillColor",
          this.ColorDefDataV5,
          "hemisphericalColor",
          this.ColorDefDataV5,
          "name",
          Utils.getQWordReader()
        ];

        this.ScriptDataV5 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV5 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV5 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV5)
        ];

        this.ResourceDataV5 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV5),
          "script",
          Utils.getArrayReader(this.ScriptDataV5),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV5)
        ];

        this.__root = this.SceneDataV5 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV5),
          "resources",
          this.ResourceDataV5
        ];
      },

      // => Version: 4, ReferencedFunction: 0xE36740
      4: function() {
        this.PropertyDataV4 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV4 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV4 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV4 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV4 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV4),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV4),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV4)
        ];

        this.TrackGroupDataV4 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV4),
          "track",
          Utils.getArrayReader(this.TrackDataV4)
        ];

        this.SequenceDataV4 = [
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV4)
        ];

        this.ColorDefDataV4 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV4 = [
          "ambientGroundColor",
          this.ColorDefDataV4,
          "ambientSkyColor",
          this.ColorDefDataV4,
          "fillColor",
          this.ColorDefDataV4,
          "hemisphericalColor",
          this.ColorDefDataV4,
          "name",
          Utils.getQWordReader()
        ];

        this.ScriptDataV4 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV4 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV4 = [
          "name",
          Utils.getQWordReader(),
          "id",
          "uint32",
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV4)
        ];

        this.ResourceDataV4 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV4),
          "script",
          Utils.getArrayReader(this.ScriptDataV4),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV4)
        ];

        this.__root = this.SceneDataV4 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV4),
          "resources",
          this.ResourceDataV4
        ];
      },

      // => Version: 3, ReferencedFunction: 0xE366A0
      3: function() {
        this.PropertyDataV3 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV3 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV3 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV3 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV3 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV3),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV3),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV3)
        ];

        this.TrackGroupDataV3 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV3),
          "track",
          Utils.getArrayReader(this.TrackDataV3)
        ];

        this.SequenceDataV3 = [
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV3)
        ];

        this.ColorDefDataV3 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV3 = [
          "ambientGroundColor",
          this.ColorDefDataV3,
          "ambientSkyColor",
          this.ColorDefDataV3,
          "fillColor",
          this.ColorDefDataV3,
          "hemisphericalColor",
          this.ColorDefDataV3,
          "name",
          Utils.getQWordReader()
        ];

        this.ScriptDataV3 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV3 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV3 = [
          "name",
          Utils.getQWordReader(),
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV3)
        ];

        this.ResourceDataV3 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV3),
          "script",
          Utils.getArrayReader(this.ScriptDataV3),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV3)
        ];

        this.__root = this.SceneDataV3 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV3),
          "resources",
          this.ResourceDataV3
        ];
      },

      // => Version: 2
      2: function() {
        this.PropertyDataV2 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV2 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV2 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV2 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV2 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV2),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV2),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV2)
        ];

        this.TrackGroupDataV2 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV2),
          "track",
          Utils.getArrayReader(this.TrackDataV2)
        ];

        this.SequenceDataV2 = [
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV2)
        ];

        this.ColorDefDataV2 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV2 = [
          "ambientGroundColor",
          this.ColorDefDataV2,
          "ambientSkyColor",
          this.ColorDefDataV2,
          "fillColor",
          this.ColorDefDataV2,
          "hemisphericalColor",
          this.ColorDefDataV2,
          "name",
          Utils.getQWordReader()
        ];

        this.ScriptDataV2 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV2 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV2 = [
          "name",
          Utils.getQWordReader(),
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV2)
        ];

        this.ResourceDataV2 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV2),
          "script",
          Utils.getArrayReader(this.ScriptDataV2),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV2)
        ];

        this.__root = this.SceneDataV2 = [
          "startingSequence",
          Utils.getQWordReader(),
          "sequence",
          Utils.getArrayReader(this.SequenceDataV2),
          "resources",
          this.ResourceDataV2
        ];
      },

      // => Version: 1, ReferencedFunction: 0xE36590
      1: function() {
        this.PropertyDataV1 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV1 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV1 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV1 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV1 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV1),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV1),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV1)
        ];

        this.TrackGroupDataV1 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV1),
          "track",
          Utils.getArrayReader(this.TrackDataV1)
        ];

        this.SequenceDataV1 = [
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV1)
        ];

        this.ColorDefDataV1 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV1 = [
          "ambientGroundColor",
          this.ColorDefDataV1,
          "ambientSkyColor",
          this.ColorDefDataV1,
          "fillColor",
          this.ColorDefDataV1,
          "hemisphericalColor",
          this.ColorDefDataV1,
          "name",
          Utils.getQWordReader()
        ];

        this.ScriptDataV1 = [
          "name",
          Utils.getQWordReader(),
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.TextEntryDataV1 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV1 = [
          "name",
          Utils.getQWordReader(),
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV1)
        ];

        this.ResourceDataV1 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV1),
          "script",
          Utils.getArrayReader(this.ScriptDataV1),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV1)
        ];

        this.__root = this.SceneDataV1 = [
          "sequence",
          Utils.getArrayReader(this.SequenceDataV1),
          "resources",
          this.ResourceDataV1
        ];
      },

      // => Version: 0
      0: function() {
        this.PropertyDataV0 = [
          "type",
          "uint8",
          "value",
          Utils.getQWordReader(),
          "pathVal",
          Utils.getFileNameReader()
        ];

        this.CurveKeyDataV0 = [
          "time",
          "float32",
          "value",
          "float32",
          "inTangent",
          "float32",
          "outTangent",
          "float32"
        ];

        this.FlagKeyDataV0 = ["time", "float32", "value", "float32"];

        this.TriggerKeyDataV0 = [
          "time",
          "float32",
          "flags1",
          "uint8",
          "flags2",
          "uint8",
          "flags3",
          "uint8",
          "flags4",
          "uint8",
          "token1",
          Utils.getQWordReader(),
          "token2",
          Utils.getQWordReader(),
          "value1",
          "float32",
          "value2",
          "float32",
          "value3",
          "float32",
          "value4",
          "float32"
        ];

        this.TrackDataV0 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "curveKey",
          Utils.getArrayReader(this.CurveKeyDataV0),
          "flagKey",
          Utils.getArrayReader(this.FlagKeyDataV0),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV0)
        ];

        this.TrackGroupDataV0 = [
          "name",
          Utils.getQWordReader(),
          "type",
          "uint8",
          "flags",
          "uint32",
          "prop",
          Utils.getArrayReader(this.PropertyDataV0),
          "track",
          Utils.getArrayReader(this.TrackDataV0)
        ];

        this.SequenceDataV0 = [
          "environmentMap",
          Utils.getFileNameReader(),
          "map",
          Utils.getString16Reader(),
          "clientMap",
          Utils.getString16Reader(),
          "name",
          Utils.getQWordReader(),
          "length",
          "float32",
          "trackGroup",
          Utils.getArrayReader(this.TrackGroupDataV0)
        ];

        this.ColorDefDataV0 = [
          "color",
          ["[]", "uint8", 3],
          "intensity",
          "float32"
        ];

        this.AmbientLightDataV0 = [
          "ambientGroundColor",
          this.ColorDefDataV0,
          "ambientSkyColor",
          this.ColorDefDataV0,
          "fillColor",
          this.ColorDefDataV0,
          "hemisphericalColor",
          this.ColorDefDataV0,
          "name",
          Utils.getQWordReader()
        ];

        this.TextEntryDataV0 = [
          "text",
          Utils.getString16Reader(),
          "language",
          "uint8"
        ];

        this.TextResourceDataV0 = [
          "name",
          Utils.getQWordReader(),
          "textEntry",
          Utils.getArrayReader(this.TextEntryDataV0)
        ];

        this.ResourceDataV0 = [
          "ambientLightResource",
          Utils.getArrayReader(this.AmbientLightDataV0),
          "textResource",
          Utils.getArrayReader(this.TextResourceDataV0)
        ];

        this.__root = this.SceneDataV0 = [
          "sequence",
          Utils.getArrayReader(this.SequenceDataV0),
          "resources",
          this.ResourceDataV0
        ];
      }
    }
  }
];
