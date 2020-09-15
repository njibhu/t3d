let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: AMSP, versions: 30, strucTab: 0x16CF138
  /// ==================================================

  {
    name: "AMSP",
    versions: {
      // => Version: 29
      29: function() {
        this.DspDataV29 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV29 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV29)
        ];

        this.BussDataV29 = [
          "name",
          Utils.getQWordReader(),
          "output",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "normalizeFadeTime",
          "float32",
          "normalizeThreshold",
          "float32",
          "normalizeMaxAmp",
          "float32",
          "compressorThreshold",
          "float32",
          "compressorAttack",
          "float32",
          "compressorRelease",
          "float32",
          "compressorGainMakeup",
          "float32",
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV29)
        ];

        this.EnvelopePointDataV29 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV29 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV29),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV29 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV29 = [
          "time",
          this.RangeDataV29,
          "value",
          this.RangeDataV29
        ];

        this.DynamicParamDataV29 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV29),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV29),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV29 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV29,
          "highPass",
          this.DynamicParamDataV29,
          "pan3D",
          this.DynamicParamDataV29,
          "reverb",
          this.DynamicParamDataV29,
          "spread3D",
          this.DynamicParamDataV29,
          "volumeA",
          this.DynamicParamDataV29,
          "volumeB",
          this.DynamicParamDataV29,
          "lfe",
          this.DynamicParamDataV29
        ];

        this.CategoryDynamicDataV29 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "highPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32",
          "minAudible",
          "uint32",
          "maxAudibleLQ",
          "uint32",
          "maxAudibleHG",
          "uint32"
        ];

        this.CategoryDataV29 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV29),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV29),
          "focusReserve",
          "float32",
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8",
          "priority",
          "uint8"
        ];

        this.MaterialDataV29 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "absorptionLF",
          "float32",
          "absorptionMF",
          "float32",
          "absorptionHF",
          "float32",
          "occlusion",
          "float32"
        ];

        this.MusicConditionDataV29 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV29 = [
          "condition",
          Utils.getQWordReader(),
          "language",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8",
          "noteBase",
          "uint8",
          "noteMin",
          "uint8",
          "noteMax",
          "uint8"
        ];

        this.MusicPlaylistDataV29 = [
          "category",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "primaryPlaylistId",
          Utils.getQWordReader(),
          "secondaryPlaylistId",
          Utils.getQWordReader(),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV29),
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "flags",
          "uint32",
          "initialSilence",
          this.RangeDataV29,
          "intervalSilence",
          this.RangeDataV29,
          "maxPlayLength",
          this.RangeDataV29,
          "volume",
          this.DynamicParamDataV29,
          "fileIterateMode",
          "uint8"
        ];

        this.PropertyDataV29 = [
          "name",
          Utils.getQWordReader(),
          "tokenValue",
          Utils.getQWordReader(),
          "floatValue",
          "float32"
        ];

        this.ReverbDataV29 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.ScriptRefDataV29 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.SnapshotDataV29 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV29),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV29),
          "priority",
          "uint8"
        ];

        this.MusicExternalDataV29 = [
          "name",
          Utils.getQWordReader(),
          "externalPlaylist",
          Utils.getString16Reader()
        ];

        this.AudioSettingsDataV29 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "echoLevel",
          "float32",
          "focusTransition",
          "float32",
          "memoryPool",
          "float32",
          "reverbLevel",
          "float32",
          "minChannelsLQ",
          "uint32",
          "maxChannelsLQ",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDataV29),
          "category",
          Utils.getArrayReader(this.CategoryDataV29),
          "material",
          Utils.getArrayReader(this.MaterialDataV29),
          "musicCondition",
          Utils.getArrayReader(this.MusicConditionDataV29),
          "musicPlaylist",
          Utils.getArrayReader(this.MusicPlaylistDataV29),
          "property",
          Utils.getArrayReader(this.PropertyDataV29),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV29),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV29),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV29),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader(),
          "musicExternal",
          Utils.getArrayReader(this.MusicExternalDataV29)
        ];

        this.HandlerDataV29 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.MetaSoundDataV29 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV29),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV29),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV29),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV29,
          "pan",
          this.DynamicParamDataV29,
          "pitch",
          this.DynamicParamDataV29,
          "pitchMS",
          this.DynamicParamDataV29,
          "volume",
          this.DynamicParamDataV29,
          "volumeMS",
          this.DynamicParamDataV29,
          "initialDelay",
          this.RangeDataV29,
          "playLength",
          this.RangeDataV29,
          "positionOffsetAngle",
          this.RangeDataV29,
          "positionRange",
          this.RangeDataV29,
          "repeatCount",
          this.RangeDataV29,
          "repeatTime",
          this.RangeDataV29,
          "replayDelay",
          this.RangeDataV29,
          "startTimeOffset",
          this.RangeDataV29,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.TriggerMarkerDataV29 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV29 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV29)
        ];

        this.__root = this.ScriptFileDataV29 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "snapshot",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV29),
          "handler",
          Utils.getArrayReader(this.HandlerDataV29),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV29),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV29),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV29),
          "property",
          Utils.getArrayReader(this.PropertyDataV29),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8",
          "musicMutePriority",
          "uint8",
          "soundPoolMode",
          "uint8"
        ];
      },

      // => Version: 28
      28: function() {
        this.DspDataV28 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV28 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV28)
        ];

        this.BussDataV28 = [
          "name",
          Utils.getQWordReader(),
          "output",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "normalizeFadeTime",
          "float32",
          "normalizeThreshold",
          "float32",
          "normalizeMaxAmp",
          "float32",
          "compressorThreshold",
          "float32",
          "compressorAttack",
          "float32",
          "compressorRelease",
          "float32",
          "compressorGainMakeup",
          "float32",
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV28)
        ];

        this.EnvelopePointDataV28 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV28 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV28),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV28 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV28 = [
          "time",
          this.RangeDataV28,
          "value",
          this.RangeDataV28
        ];

        this.DynamicParamDataV28 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV28),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV28),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV28 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV28,
          "highPass",
          this.DynamicParamDataV28,
          "pan3D",
          this.DynamicParamDataV28,
          "reverb",
          this.DynamicParamDataV28,
          "spread3D",
          this.DynamicParamDataV28,
          "volumeA",
          this.DynamicParamDataV28,
          "volumeB",
          this.DynamicParamDataV28,
          "lfe",
          this.DynamicParamDataV28
        ];

        this.CategoryDynamicDataV28 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "highPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32",
          "minAudible",
          "uint32",
          "maxAudibleLQ",
          "uint32",
          "maxAudibleHG",
          "uint32"
        ];

        this.CategoryDataV28 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV28),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV28),
          "focusReserve",
          "float32",
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8",
          "priority",
          "uint8"
        ];

        this.MaterialDataV28 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "absorptionLF",
          "float32",
          "absorptionMF",
          "float32",
          "absorptionHF",
          "float32",
          "occlusion",
          "float32"
        ];

        this.MusicConditionDataV28 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV28 = [
          "condition",
          Utils.getQWordReader(),
          "language",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8",
          "noteBase",
          "uint8",
          "noteMin",
          "uint8",
          "noteMax",
          "uint8"
        ];

        this.MusicPlaylistDataV28 = [
          "category",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "primaryPlaylistId",
          Utils.getQWordReader(),
          "secondaryPlaylistId",
          Utils.getQWordReader(),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV28),
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "flags",
          "uint32",
          "initialSilence",
          this.RangeDataV28,
          "intervalSilence",
          this.RangeDataV28,
          "maxPlayLength",
          this.RangeDataV28,
          "volume",
          this.DynamicParamDataV28,
          "fileIterateMode",
          "uint8"
        ];

        this.PropertyDataV28 = [
          "name",
          Utils.getQWordReader(),
          "tokenValue",
          Utils.getQWordReader(),
          "floatValue",
          "float32"
        ];

        this.ReverbDataV28 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.ScriptRefDataV28 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.SnapshotDataV28 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV28),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV28),
          "priority",
          "uint8"
        ];

        this.AudioSettingsDataV28 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "echoLevel",
          "float32",
          "focusTransition",
          "float32",
          "memoryPool",
          "float32",
          "reverbLevel",
          "float32",
          "minChannelsLQ",
          "uint32",
          "maxChannelsLQ",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDataV28),
          "category",
          Utils.getArrayReader(this.CategoryDataV28),
          "material",
          Utils.getArrayReader(this.MaterialDataV28),
          "musicCondition",
          Utils.getArrayReader(this.MusicConditionDataV28),
          "musicPlaylist",
          Utils.getArrayReader(this.MusicPlaylistDataV28),
          "property",
          Utils.getArrayReader(this.PropertyDataV28),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV28),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV28),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV28),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV28 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.MetaSoundDataV28 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV28),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV28),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV28),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV28,
          "pan",
          this.DynamicParamDataV28,
          "pitch",
          this.DynamicParamDataV28,
          "pitchMS",
          this.DynamicParamDataV28,
          "volume",
          this.DynamicParamDataV28,
          "volumeMS",
          this.DynamicParamDataV28,
          "initialDelay",
          this.RangeDataV28,
          "playLength",
          this.RangeDataV28,
          "positionOffsetAngle",
          this.RangeDataV28,
          "positionRange",
          this.RangeDataV28,
          "repeatCount",
          this.RangeDataV28,
          "repeatTime",
          this.RangeDataV28,
          "replayDelay",
          this.RangeDataV28,
          "startTimeOffset",
          this.RangeDataV28,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.TriggerMarkerDataV28 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV28 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV28)
        ];

        this.__root = this.ScriptFileDataV28 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "snapshot",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV28),
          "handler",
          Utils.getArrayReader(this.HandlerDataV28),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV28),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV28),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV28),
          "property",
          Utils.getArrayReader(this.PropertyDataV28),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8",
          "musicMutePriority",
          "uint8",
          "soundPoolMode",
          "uint8"
        ];
      },

      // => Version: 27
      27: function() {
        this.DspDataV27 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV27 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV27)
        ];

        this.BussDataV27 = [
          "name",
          Utils.getQWordReader(),
          "output",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "normalizeFadeTime",
          "float32",
          "normalizeThreshold",
          "float32",
          "normalizeMaxAmp",
          "float32",
          "compressorThreshold",
          "float32",
          "compressorAttack",
          "float32",
          "compressorRelease",
          "float32",
          "compressorGainMakeup",
          "float32",
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV27)
        ];

        this.EnvelopePointDataV27 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV27 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV27),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV27 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV27 = [
          "time",
          this.RangeDataV27,
          "value",
          this.RangeDataV27
        ];

        this.DynamicParamDataV27 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV27),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV27),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV27 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV27,
          "highPass",
          this.DynamicParamDataV27,
          "pan3D",
          this.DynamicParamDataV27,
          "reverb",
          this.DynamicParamDataV27,
          "spread3D",
          this.DynamicParamDataV27,
          "volumeA",
          this.DynamicParamDataV27,
          "volumeB",
          this.DynamicParamDataV27,
          "lfe",
          this.DynamicParamDataV27
        ];

        this.CategoryDynamicDataV27 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "highPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32",
          "minAudible",
          "uint32",
          "maxAudibleLQ",
          "uint32",
          "maxAudibleHG",
          "uint32"
        ];

        this.CategoryDataV27 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV27),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV27),
          "focusReserve",
          "float32",
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8",
          "priority",
          "uint8"
        ];

        this.MaterialDataV27 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "absorptionLF",
          "float32",
          "absorptionMF",
          "float32",
          "absorptionHF",
          "float32",
          "occlusion",
          "float32"
        ];

        this.MusicConditionDataV27 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV27 = [
          "condition",
          Utils.getQWordReader(),
          "language",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8",
          "noteBase",
          "uint8",
          "noteMin",
          "uint8",
          "noteMax",
          "uint8"
        ];

        this.MusicPlaylistDataV27 = [
          "category",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "primaryPlaylistId",
          Utils.getQWordReader(),
          "secondaryPlaylistId",
          Utils.getQWordReader(),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV27),
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "flags",
          "uint32",
          "initialSilence",
          this.RangeDataV27,
          "intervalSilence",
          this.RangeDataV27,
          "maxPlayLength",
          this.RangeDataV27,
          "volume",
          this.DynamicParamDataV27,
          "fileIterateMode",
          "uint8"
        ];

        this.PropertyDataV27 = [
          "name",
          Utils.getQWordReader(),
          "tokenValue",
          Utils.getQWordReader(),
          "floatValue",
          "float32"
        ];

        this.ReverbDataV27 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.ScriptRefDataV27 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.SnapshotDataV27 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV27),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV27),
          "priority",
          "uint8"
        ];

        this.AudioSettingsDataV27 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "echoLevel",
          "float32",
          "focusTransition",
          "float32",
          "memoryPool",
          "float32",
          "reverbLevel",
          "float32",
          "minChannelsLQ",
          "uint32",
          "maxChannelsLQ",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDataV27),
          "category",
          Utils.getArrayReader(this.CategoryDataV27),
          "material",
          Utils.getArrayReader(this.MaterialDataV27),
          "musicCondition",
          Utils.getArrayReader(this.MusicConditionDataV27),
          "musicPlaylist",
          Utils.getArrayReader(this.MusicPlaylistDataV27),
          "property",
          Utils.getArrayReader(this.PropertyDataV27),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV27),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV27),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV27),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV27 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.MetaSoundDataV27 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV27),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV27),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV27),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV27,
          "pan",
          this.DynamicParamDataV27,
          "pitch",
          this.DynamicParamDataV27,
          "pitchMS",
          this.DynamicParamDataV27,
          "volume",
          this.DynamicParamDataV27,
          "volumeMS",
          this.DynamicParamDataV27,
          "initialDelay",
          this.RangeDataV27,
          "playLength",
          this.RangeDataV27,
          "positionOffsetAngle",
          this.RangeDataV27,
          "positionRange",
          this.RangeDataV27,
          "repeatCount",
          this.RangeDataV27,
          "repeatTime",
          this.RangeDataV27,
          "startTimeOffset",
          this.RangeDataV27,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.TriggerMarkerDataV27 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV27 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV27)
        ];

        this.__root = this.ScriptFileDataV27 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "snapshot",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV27),
          "handler",
          Utils.getArrayReader(this.HandlerDataV27),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV27),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV27),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV27),
          "property",
          Utils.getArrayReader(this.PropertyDataV27),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8",
          "musicMutePriority",
          "uint8"
        ];
      },

      // => Version: 26
      26: function() {
        this.DspDataV26 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV26 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV26)
        ];

        this.BussDataV26 = [
          "name",
          Utils.getQWordReader(),
          "output",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "normalizeFadeTime",
          "float32",
          "normalizeThreshold",
          "float32",
          "normalizeMaxAmp",
          "float32",
          "compressorThreshold",
          "float32",
          "compressorAttack",
          "float32",
          "compressorRelease",
          "float32",
          "compressorGainMakeup",
          "float32",
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV26)
        ];

        this.EnvelopePointDataV26 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV26 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV26),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV26 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV26 = [
          "time",
          this.RangeDataV26,
          "value",
          this.RangeDataV26
        ];

        this.DynamicParamDataV26 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV26),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV26),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV26 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV26,
          "highPass",
          this.DynamicParamDataV26,
          "pan3D",
          this.DynamicParamDataV26,
          "reverb",
          this.DynamicParamDataV26,
          "spread3D",
          this.DynamicParamDataV26,
          "volumeA",
          this.DynamicParamDataV26,
          "volumeB",
          this.DynamicParamDataV26,
          "lfe",
          this.DynamicParamDataV26
        ];

        this.CategoryDynamicDataV26 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "highPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32",
          "minAudible",
          "uint32",
          "maxAudibleLQ",
          "uint32",
          "maxAudibleHG",
          "uint32"
        ];

        this.CategoryDataV26 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV26),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV26),
          "focusReserve",
          "float32",
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8",
          "priority",
          "uint8"
        ];

        this.MaterialDataV26 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "absorptionLF",
          "float32",
          "absorptionMF",
          "float32",
          "absorptionHF",
          "float32",
          "occlusion",
          "float32"
        ];

        this.MusicConditionDataV26 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV26 = [
          "condition",
          Utils.getQWordReader(),
          "language",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8",
          "noteBase",
          "uint8",
          "noteMin",
          "uint8",
          "noteMax",
          "uint8"
        ];

        this.MusicPlaylistDataV26 = [
          "category",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "primaryPlaylistId",
          Utils.getQWordReader(),
          "secondaryPlaylistId",
          Utils.getQWordReader(),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV26),
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "flags",
          "uint32",
          "initialSilence",
          this.RangeDataV26,
          "intervalSilence",
          this.RangeDataV26,
          "maxPlayLength",
          this.RangeDataV26,
          "volume",
          this.DynamicParamDataV26,
          "fileIterateMode",
          "uint8"
        ];

        this.ReverbDataV26 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV26 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV26),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV26),
          "priority",
          "uint8"
        ];

        this.AudioSettingsDataV26 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "memoryPool",
          "float32",
          "reverbLevel",
          "float32",
          "minChannelsLQ",
          "uint32",
          "maxChannelsLQ",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDataV26),
          "category",
          Utils.getArrayReader(this.CategoryDataV26),
          "material",
          Utils.getArrayReader(this.MaterialDataV26),
          "musicCondition",
          Utils.getArrayReader(this.MusicConditionDataV26),
          "musicPlaylist",
          Utils.getArrayReader(this.MusicPlaylistDataV26),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV26),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV26),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV26 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.MetaSoundDataV26 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV26),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV26),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV26),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV26,
          "pan",
          this.DynamicParamDataV26,
          "pitch",
          this.DynamicParamDataV26,
          "pitchMS",
          this.DynamicParamDataV26,
          "volume",
          this.DynamicParamDataV26,
          "volumeMS",
          this.DynamicParamDataV26,
          "initialDelay",
          this.RangeDataV26,
          "playLength",
          this.RangeDataV26,
          "positionOffsetAngle",
          this.RangeDataV26,
          "positionRange",
          this.RangeDataV26,
          "repeatCount",
          this.RangeDataV26,
          "repeatTime",
          this.RangeDataV26,
          "startTimeOffset",
          this.RangeDataV26,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV26 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV26 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV26 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV26)
        ];

        this.__root = this.ScriptFileDataV26 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "snapshot",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV26),
          "handler",
          Utils.getArrayReader(this.HandlerDataV26),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV26),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV26),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV26),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8",
          "musicMutePriority",
          "uint8"
        ];
      },

      // => Version: 25
      25: function() {
        this.DspDataV25 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV25 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV25)
        ];

        this.BussDataV25 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV25)
        ];

        this.EnvelopePointDataV25 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV25 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV25),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV25 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV25 = [
          "time",
          this.RangeDataV25,
          "value",
          this.RangeDataV25
        ];

        this.DynamicParamDataV25 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV25),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV25),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV25 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV25,
          "highPass",
          this.DynamicParamDataV25,
          "pan3D",
          this.DynamicParamDataV25,
          "reverb",
          this.DynamicParamDataV25,
          "spread3D",
          this.DynamicParamDataV25,
          "volumeA",
          this.DynamicParamDataV25,
          "volumeB",
          this.DynamicParamDataV25
        ];

        this.CategoryDynamicDataV25 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "highPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV25 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV25),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV25),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.MaterialDataV25 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "absorptionLF",
          "float32",
          "absorptionMF",
          "float32",
          "absorptionHF",
          "float32",
          "occlusion",
          "float32"
        ];

        this.MusicConditionDataV25 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV25 = [
          "condition",
          Utils.getQWordReader(),
          "language",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8",
          "noteBase",
          "uint8",
          "noteMin",
          "uint8",
          "noteMax",
          "uint8"
        ];

        this.MusicPlaylistDataV25 = [
          "category",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "primaryPlaylistId",
          Utils.getQWordReader(),
          "secondaryPlaylistId",
          Utils.getQWordReader(),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV25),
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "flags",
          "uint32",
          "initialSilence",
          this.RangeDataV25,
          "intervalSilence",
          this.RangeDataV25,
          "maxPlayLength",
          this.RangeDataV25,
          "volume",
          this.DynamicParamDataV25,
          "fileIterateMode",
          "uint8"
        ];

        this.ReverbDataV25 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV25 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV25),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV25),
          "priority",
          "uint8"
        ];

        this.AudioSettingsDataV25 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV25),
          "category",
          Utils.getArrayReader(this.CategoryDataV25),
          "material",
          Utils.getArrayReader(this.MaterialDataV25),
          "musicCondition",
          Utils.getArrayReader(this.MusicConditionDataV25),
          "musicPlaylist",
          Utils.getArrayReader(this.MusicPlaylistDataV25),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV25),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV25),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV25 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.MetaSoundDataV25 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV25),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV25),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV25),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV25,
          "pan",
          this.DynamicParamDataV25,
          "pitch",
          this.DynamicParamDataV25,
          "pitchMS",
          this.DynamicParamDataV25,
          "volume",
          this.DynamicParamDataV25,
          "volumeMS",
          this.DynamicParamDataV25,
          "initialDelay",
          this.RangeDataV25,
          "playLength",
          this.RangeDataV25,
          "positionOffsetAngle",
          this.RangeDataV25,
          "positionRange",
          this.RangeDataV25,
          "repeatCount",
          this.RangeDataV25,
          "repeatTime",
          this.RangeDataV25,
          "startTimeOffset",
          this.RangeDataV25,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV25 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV25 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV25 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV25)
        ];

        this.__root = this.ScriptFileDataV25 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "snapshot",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV25),
          "handler",
          Utils.getArrayReader(this.HandlerDataV25),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV25),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV25),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV25),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8",
          "musicMutePriority",
          "uint8"
        ];
      },

      // => Version: 24
      24: function() {
        this.DspDataV24 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV24 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV24)
        ];

        this.BussDataV24 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV24)
        ];

        this.EnvelopePointDataV24 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV24 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV24),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV24 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV24 = [
          "time",
          this.RangeDataV24,
          "value",
          this.RangeDataV24
        ];

        this.DynamicParamDataV24 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV24),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV24),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV24 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV24,
          "highPass",
          this.DynamicParamDataV24,
          "pan3D",
          this.DynamicParamDataV24,
          "reverb",
          this.DynamicParamDataV24,
          "spread3D",
          this.DynamicParamDataV24,
          "volumeA",
          this.DynamicParamDataV24,
          "volumeB",
          this.DynamicParamDataV24
        ];

        this.CategoryDynamicDataV24 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "highPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV24 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV24),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV24),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.MusicConditionDataV24 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV24 = [
          "condition",
          Utils.getQWordReader(),
          "language",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8",
          "noteBase",
          "uint8",
          "noteMin",
          "uint8",
          "noteMax",
          "uint8"
        ];

        this.MusicPlaylistDataV24 = [
          "category",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "primaryPlaylistId",
          Utils.getQWordReader(),
          "secondaryPlaylistId",
          Utils.getQWordReader(),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV24),
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "flags",
          "uint32",
          "initialSilence",
          this.RangeDataV24,
          "intervalSilence",
          this.RangeDataV24,
          "maxPlayLength",
          this.RangeDataV24,
          "volume",
          this.DynamicParamDataV24,
          "fileIterateMode",
          "uint8"
        ];

        this.ReverbDataV24 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV24 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV24),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV24),
          "priority",
          "uint8"
        ];

        this.AudioSettingsDataV24 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV24),
          "category",
          Utils.getArrayReader(this.CategoryDataV24),
          "musicCondition",
          Utils.getArrayReader(this.MusicConditionDataV24),
          "musicPlaylist",
          Utils.getArrayReader(this.MusicPlaylistDataV24),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV24),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV24),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV24 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.MetaSoundDataV24 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV24),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV24),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV24),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV24,
          "pan",
          this.DynamicParamDataV24,
          "pitch",
          this.DynamicParamDataV24,
          "pitchMS",
          this.DynamicParamDataV24,
          "volume",
          this.DynamicParamDataV24,
          "volumeMS",
          this.DynamicParamDataV24,
          "initialDelay",
          this.RangeDataV24,
          "playLength",
          this.RangeDataV24,
          "positionOffsetAngle",
          this.RangeDataV24,
          "positionRange",
          this.RangeDataV24,
          "repeatCount",
          this.RangeDataV24,
          "repeatTime",
          this.RangeDataV24,
          "startTimeOffset",
          this.RangeDataV24,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV24 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV24 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV24 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV24)
        ];

        this.__root = this.ScriptFileDataV24 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "snapshot",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV24),
          "handler",
          Utils.getArrayReader(this.HandlerDataV24),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV24),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV24),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV24),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8",
          "musicMutePriority",
          "uint8"
        ];
      },

      // => Version: 23
      23: function() {
        this.DspDataV23 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV23 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV23)
        ];

        this.BussDataV23 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV23)
        ];

        this.EnvelopePointDataV23 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV23 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV23),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV23 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV23 = [
          "time",
          this.RangeDataV23,
          "value",
          this.RangeDataV23
        ];

        this.DynamicParamDataV23 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV23),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV23),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV23 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV23,
          "highPass",
          this.DynamicParamDataV23,
          "pan3D",
          this.DynamicParamDataV23,
          "reverb",
          this.DynamicParamDataV23,
          "spread3D",
          this.DynamicParamDataV23,
          "volumeA",
          this.DynamicParamDataV23,
          "volumeB",
          this.DynamicParamDataV23
        ];

        this.CategoryDynamicDataV23 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "highPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV23 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV23),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV23),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.MusicConditionDataV23 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV23 = [
          "condition",
          Utils.getQWordReader(),
          "language",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MusicPlaylistDataV23 = [
          "category",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "primaryPlaylistId",
          Utils.getQWordReader(),
          "secondaryPlaylistId",
          Utils.getQWordReader(),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV23),
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "flags",
          "uint32",
          "initialSilence",
          this.RangeDataV23,
          "intervalSilence",
          this.RangeDataV23,
          "maxPlayLength",
          this.RangeDataV23,
          "volume",
          this.DynamicParamDataV23,
          "fileIterateMode",
          "uint8"
        ];

        this.ReverbDataV23 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV23 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV23),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV23),
          "priority",
          "uint8"
        ];

        this.AudioSettingsDataV23 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV23),
          "category",
          Utils.getArrayReader(this.CategoryDataV23),
          "musicCondition",
          Utils.getArrayReader(this.MusicConditionDataV23),
          "musicPlaylist",
          Utils.getArrayReader(this.MusicPlaylistDataV23),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV23),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV23),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV23 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.MetaSoundDataV23 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV23),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV23),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV23),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV23,
          "pan",
          this.DynamicParamDataV23,
          "pitch",
          this.DynamicParamDataV23,
          "pitchMS",
          this.DynamicParamDataV23,
          "volume",
          this.DynamicParamDataV23,
          "volumeMS",
          this.DynamicParamDataV23,
          "initialDelay",
          this.RangeDataV23,
          "playLength",
          this.RangeDataV23,
          "positionOffsetAngle",
          this.RangeDataV23,
          "positionRange",
          this.RangeDataV23,
          "repeatCount",
          this.RangeDataV23,
          "repeatTime",
          this.RangeDataV23,
          "startTimeOffset",
          this.RangeDataV23,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV23 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV23 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV23 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV23)
        ];

        this.__root = this.ScriptFileDataV23 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "snapshot",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV23),
          "handler",
          Utils.getArrayReader(this.HandlerDataV23),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV23),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV23),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV23),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8",
          "musicMutePriority",
          "uint8"
        ];
      },

      // => Version: 22
      22: function() {
        this.DspDataV22 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV22 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV22)
        ];

        this.BussDataV22 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV22)
        ];

        this.EnvelopePointDataV22 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV22 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV22),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV22 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV22 = [
          "time",
          this.RangeDataV22,
          "value",
          this.RangeDataV22
        ];

        this.DynamicParamDataV22 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV22),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV22),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV22 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV22,
          "highPass",
          this.DynamicParamDataV22,
          "pan3D",
          this.DynamicParamDataV22,
          "reverb",
          this.DynamicParamDataV22,
          "spread3D",
          this.DynamicParamDataV22,
          "volumeA",
          this.DynamicParamDataV22,
          "volumeB",
          this.DynamicParamDataV22
        ];

        this.CategoryDynamicDataV22 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "highPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV22 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV22),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV22),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.MusicConditionDataV22 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV22 = [
          "condition",
          Utils.getQWordReader(),
          "language",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MusicPlaylistDataV22 = [
          "category",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "primaryPlaylistId",
          Utils.getQWordReader(),
          "secondaryPlaylistId",
          Utils.getQWordReader(),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV22),
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "flags",
          "uint32",
          "initialSilence",
          this.RangeDataV22,
          "intervalSilence",
          this.RangeDataV22,
          "maxPlayLength",
          this.RangeDataV22,
          "volume",
          this.DynamicParamDataV22,
          "fileIterateMode",
          "uint8"
        ];

        this.ReverbDataV22 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV22 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV22),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV22),
          "priority",
          "uint8"
        ];

        this.AudioSettingsDataV22 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV22),
          "category",
          Utils.getArrayReader(this.CategoryDataV22),
          "musicCondition",
          Utils.getArrayReader(this.MusicConditionDataV22),
          "musicPlaylist",
          Utils.getArrayReader(this.MusicPlaylistDataV22),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV22),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV22),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV22 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.MetaSoundDataV22 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV22),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV22),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV22),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV22,
          "pan",
          this.DynamicParamDataV22,
          "pitch",
          this.DynamicParamDataV22,
          "pitchMS",
          this.DynamicParamDataV22,
          "volume",
          this.DynamicParamDataV22,
          "volumeMS",
          this.DynamicParamDataV22,
          "initialDelay",
          this.RangeDataV22,
          "playLength",
          this.RangeDataV22,
          "positionOffsetAngle",
          this.RangeDataV22,
          "positionRange",
          this.RangeDataV22,
          "repeatCount",
          this.RangeDataV22,
          "repeatTime",
          this.RangeDataV22,
          "startTimeOffset",
          this.RangeDataV22,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV22 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV22 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV22 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV22)
        ];

        this.__root = this.ScriptFileDataV22 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "snapshot",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV22),
          "handler",
          Utils.getArrayReader(this.HandlerDataV22),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV22),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV22),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV22),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 21
      21: function() {
        this.DspDataV21 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV21 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV21)
        ];

        this.BussDataV21 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV21)
        ];

        this.EnvelopePointDataV21 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV21 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV21),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV21 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV21 = [
          "time",
          this.RangeDataV21,
          "value",
          this.RangeDataV21
        ];

        this.DynamicParamDataV21 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV21),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV21),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV21 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV21,
          "pan3D",
          this.DynamicParamDataV21,
          "reverb",
          this.DynamicParamDataV21,
          "spread3D",
          this.DynamicParamDataV21,
          "volumeA",
          this.DynamicParamDataV21,
          "volumeB",
          this.DynamicParamDataV21
        ];

        this.CategoryDynamicDataV21 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV21 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV21),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV21),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.MusicConditionDataV21 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV21 = [
          "condition",
          Utils.getQWordReader(),
          "language",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MusicPlaylistDataV21 = [
          "category",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "primaryPlaylistId",
          Utils.getQWordReader(),
          "secondaryPlaylistId",
          Utils.getQWordReader(),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV21),
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "flags",
          "uint32",
          "initialSilence",
          this.RangeDataV21,
          "intervalSilence",
          this.RangeDataV21,
          "maxPlayLength",
          this.RangeDataV21,
          "volume",
          this.DynamicParamDataV21,
          "fileIterateMode",
          "uint8"
        ];

        this.ReverbDataV21 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV21 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV21),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV21),
          "priority",
          "uint8"
        ];

        this.AudioSettingsDataV21 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV21),
          "category",
          Utils.getArrayReader(this.CategoryDataV21),
          "musicCondition",
          Utils.getArrayReader(this.MusicConditionDataV21),
          "musicPlaylist",
          Utils.getArrayReader(this.MusicPlaylistDataV21),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV21),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV21),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV21 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.MetaSoundDataV21 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV21),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV21),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV21),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV21,
          "pan",
          this.DynamicParamDataV21,
          "pitch",
          this.DynamicParamDataV21,
          "pitchMS",
          this.DynamicParamDataV21,
          "volume",
          this.DynamicParamDataV21,
          "volumeMS",
          this.DynamicParamDataV21,
          "initialDelay",
          this.RangeDataV21,
          "playLength",
          this.RangeDataV21,
          "positionOffsetAngle",
          this.RangeDataV21,
          "positionRange",
          this.RangeDataV21,
          "repeatCount",
          this.RangeDataV21,
          "repeatTime",
          this.RangeDataV21,
          "startTimeOffset",
          this.RangeDataV21,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV21 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV21 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV21 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV21)
        ];

        this.__root = this.ScriptFileDataV21 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "snapshot",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV21),
          "handler",
          Utils.getArrayReader(this.HandlerDataV21),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV21),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV21),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV21),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 20
      20: function() {
        this.DspDataV20 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV20 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV20)
        ];

        this.BussDataV20 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV20)
        ];

        this.EnvelopePointDataV20 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV20 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV20),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV20 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV20 = [
          "time",
          this.RangeDataV20,
          "value",
          this.RangeDataV20
        ];

        this.DynamicParamDataV20 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV20),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV20),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV20 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV20,
          "pan3D",
          this.DynamicParamDataV20,
          "reverb",
          this.DynamicParamDataV20,
          "spread3D",
          this.DynamicParamDataV20,
          "volumeA",
          this.DynamicParamDataV20,
          "volumeB",
          this.DynamicParamDataV20
        ];

        this.CategoryDynamicDataV20 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV20 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV20),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV20),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV20 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV20 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV20),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV20),
          "priority",
          "uint8"
        ];

        this.AudioSettingsDataV20 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV20),
          "category",
          Utils.getArrayReader(this.CategoryDataV20),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV20),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV20),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV20 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV20 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV20 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV20),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV20),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV20),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV20,
          "pan",
          this.DynamicParamDataV20,
          "pitch",
          this.DynamicParamDataV20,
          "pitchMS",
          this.DynamicParamDataV20,
          "volume",
          this.DynamicParamDataV20,
          "volumeMS",
          this.DynamicParamDataV20,
          "initialDelay",
          this.RangeDataV20,
          "playLength",
          this.RangeDataV20,
          "positionOffsetAngle",
          this.RangeDataV20,
          "positionRange",
          this.RangeDataV20,
          "repeatCount",
          this.RangeDataV20,
          "repeatTime",
          this.RangeDataV20,
          "startTimeOffset",
          this.RangeDataV20,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV20 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV20 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV20 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV20)
        ];

        this.__root = this.ScriptFileDataV20 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "snapshot",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV20),
          "handler",
          Utils.getArrayReader(this.HandlerDataV20),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV20),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV20),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV20),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 19, ReferencedFunction: 0xE21080
      19: function() {
        this.DspDataV19 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV19 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV19)
        ];

        this.BussDataV19 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV19)
        ];

        this.EnvelopePointDataV19 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV19 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV19),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV19 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV19 = [
          "time",
          this.RangeDataV19,
          "value",
          this.RangeDataV19
        ];

        this.DynamicParamDataV19 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV19),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV19),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV19 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV19,
          "pan3D",
          this.DynamicParamDataV19,
          "reverb",
          this.DynamicParamDataV19,
          "spread3D",
          this.DynamicParamDataV19,
          "volumeA",
          this.DynamicParamDataV19,
          "volumeB",
          this.DynamicParamDataV19
        ];

        this.CategoryDynamicDataV19 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV19 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV19),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV19),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV19 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV19 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV19),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV19),
          "priority",
          "uint8"
        ];

        this.AudioSettingsDataV19 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV19),
          "category",
          Utils.getArrayReader(this.CategoryDataV19),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV19),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV19),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV19 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV19 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV19 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV19),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV19),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV19),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV19,
          "pan",
          this.DynamicParamDataV19,
          "pitch",
          this.DynamicParamDataV19,
          "pitchMS",
          this.DynamicParamDataV19,
          "volume",
          this.DynamicParamDataV19,
          "volumeMS",
          this.DynamicParamDataV19,
          "initialDelay",
          this.RangeDataV19,
          "playLength",
          this.RangeDataV19,
          "positionOffsetAngle",
          this.RangeDataV19,
          "positionRange",
          this.RangeDataV19,
          "repeatCount",
          this.RangeDataV19,
          "repeatTime",
          this.RangeDataV19,
          "startTimeOffset",
          this.RangeDataV19,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV19 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV19 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV19 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV19)
        ];

        this.__root = this.ScriptFileDataV19 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV19),
          "handler",
          Utils.getArrayReader(this.HandlerDataV19),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV19),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV19),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV19),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 18, ReferencedFunction: 0xE20F40
      18: function() {
        this.DspDataV18 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV18 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV18)
        ];

        this.BussDataV18 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV18)
        ];

        this.EnvelopePointDataV18 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV18 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV18),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV18 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV18 = [
          "time",
          this.RangeDataV18,
          "value",
          this.RangeDataV18
        ];

        this.DynamicParamDataV18 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV18),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV18),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV18 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV18,
          "pan3D",
          this.DynamicParamDataV18,
          "reverb",
          this.DynamicParamDataV18,
          "spread3D",
          this.DynamicParamDataV18,
          "volumeA",
          this.DynamicParamDataV18,
          "volumeB",
          this.DynamicParamDataV18
        ];

        this.CategoryDynamicDataV18 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV18 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV18),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV18),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV18 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV18 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV18),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV18)
        ];

        this.AudioSettingsDataV18 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV18),
          "category",
          Utils.getArrayReader(this.CategoryDataV18),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV18),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV18),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV18 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV18 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV18 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV18),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV18),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV18),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV18,
          "pan",
          this.DynamicParamDataV18,
          "pitch",
          this.DynamicParamDataV18,
          "pitchMS",
          this.DynamicParamDataV18,
          "volume",
          this.DynamicParamDataV18,
          "volumeMS",
          this.DynamicParamDataV18,
          "initialDelay",
          this.RangeDataV18,
          "playLength",
          this.RangeDataV18,
          "positionOffsetAngle",
          this.RangeDataV18,
          "positionRange",
          this.RangeDataV18,
          "repeatCount",
          this.RangeDataV18,
          "repeatTime",
          this.RangeDataV18,
          "startTimeOffset",
          this.RangeDataV18,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV18 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV18 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV18 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV18)
        ];

        this.__root = this.ScriptFileDataV18 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV18),
          "handler",
          Utils.getArrayReader(this.HandlerDataV18),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV18),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV18),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV18),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 17
      17: function() {
        this.DspDataV17 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV17 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV17)
        ];

        this.BussDataV17 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV17)
        ];

        this.EnvelopePointDataV17 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV17 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV17),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV17 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV17 = [
          "time",
          this.RangeDataV17,
          "value",
          this.RangeDataV17
        ];

        this.DynamicParamDataV17 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV17),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV17),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV17 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV17,
          "pan3D",
          this.DynamicParamDataV17,
          "reverb",
          this.DynamicParamDataV17,
          "spread3D",
          this.DynamicParamDataV17,
          "volumeA",
          this.DynamicParamDataV17,
          "volumeB",
          this.DynamicParamDataV17
        ];

        this.CategoryDynamicDataV17 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV17 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV17),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV17),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV17 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV17 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV17),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV17)
        ];

        this.AudioSettingsDataV17 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV17),
          "category",
          Utils.getArrayReader(this.CategoryDataV17),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV17),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV17),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV17 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV17 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV17 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV17),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV17),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV17),
          "channelFadeIn",
          "float32",
          "channelFadeOut",
          "float32",
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "channelMax",
          "uint32",
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV17,
          "pan",
          this.DynamicParamDataV17,
          "pitch",
          this.DynamicParamDataV17,
          "pitchMS",
          this.DynamicParamDataV17,
          "volume",
          this.DynamicParamDataV17,
          "volumeMS",
          this.DynamicParamDataV17,
          "initialDelay",
          this.RangeDataV17,
          "playLength",
          this.RangeDataV17,
          "positionOffsetAngle",
          this.RangeDataV17,
          "positionRange",
          this.RangeDataV17,
          "repeatCount",
          this.RangeDataV17,
          "repeatTime",
          this.RangeDataV17,
          "startTimeOffset",
          this.RangeDataV17,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV17 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV17 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV17 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV17)
        ];

        this.__root = this.ScriptFileDataV17 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV17),
          "handler",
          Utils.getArrayReader(this.HandlerDataV17),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV17),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV17),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV17),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 16
      16: function() {
        this.DspDataV16 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV16 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV16)
        ];

        this.BussDataV16 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV16)
        ];

        this.EnvelopePointDataV16 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV16 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV16),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV16 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV16 = [
          "time",
          this.RangeDataV16,
          "value",
          this.RangeDataV16
        ];

        this.DynamicParamDataV16 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV16),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV16),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV16 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV16,
          "pan3D",
          this.DynamicParamDataV16,
          "reverb",
          this.DynamicParamDataV16,
          "spread3D",
          this.DynamicParamDataV16,
          "volumeA",
          this.DynamicParamDataV16,
          "volumeB",
          this.DynamicParamDataV16
        ];

        this.CategoryDynamicDataV16 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV16 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV16),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV16),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV16 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32",
          "echoDelay",
          "float32",
          "echoDecayRatio",
          "float32",
          "echoWetMix",
          "float32",
          "echoDryMix",
          "float32"
        ];

        this.SnapshotDataV16 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV16),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV16)
        ];

        this.AudioSettingsDataV16 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV16),
          "category",
          Utils.getArrayReader(this.CategoryDataV16),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV16),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV16),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV16 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV16 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV16 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV16),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV16),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV16),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV16,
          "pan",
          this.DynamicParamDataV16,
          "pitch",
          this.DynamicParamDataV16,
          "pitchMS",
          this.DynamicParamDataV16,
          "volume",
          this.DynamicParamDataV16,
          "volumeMS",
          this.DynamicParamDataV16,
          "initialDelay",
          this.RangeDataV16,
          "playLength",
          this.RangeDataV16,
          "positionOffsetAngle",
          this.RangeDataV16,
          "positionRange",
          this.RangeDataV16,
          "repeatCount",
          this.RangeDataV16,
          "repeatTime",
          this.RangeDataV16,
          "startTimeOffset",
          this.RangeDataV16,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV16 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV16 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV16 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV16)
        ];

        this.__root = this.ScriptFileDataV16 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV16),
          "handler",
          Utils.getArrayReader(this.HandlerDataV16),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV16),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV16),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV16),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 15
      15: function() {
        this.DspDataV15 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV15 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV15)
        ];

        this.BussDataV15 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV15)
        ];

        this.EnvelopePointDataV15 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV15 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV15),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV15 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV15 = [
          "time",
          this.RangeDataV15,
          "value",
          this.RangeDataV15
        ];

        this.DynamicParamDataV15 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV15),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV15),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV15 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV15,
          "pan3D",
          this.DynamicParamDataV15,
          "reverb",
          this.DynamicParamDataV15,
          "spread3D",
          this.DynamicParamDataV15,
          "volumeA",
          this.DynamicParamDataV15,
          "volumeB",
          this.DynamicParamDataV15
        ];

        this.CategoryDynamicDataV15 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV15 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV15),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV15),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV15 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32"
        ];

        this.SnapshotDataV15 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV15),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV15)
        ];

        this.AudioSettingsDataV15 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV15),
          "category",
          Utils.getArrayReader(this.CategoryDataV15),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV15),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV15),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV15 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV15 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV15 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV15),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV15),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV15),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV15,
          "pan",
          this.DynamicParamDataV15,
          "pitch",
          this.DynamicParamDataV15,
          "pitchMS",
          this.DynamicParamDataV15,
          "volume",
          this.DynamicParamDataV15,
          "volumeMS",
          this.DynamicParamDataV15,
          "initialDelay",
          this.RangeDataV15,
          "playLength",
          this.RangeDataV15,
          "positionOffsetAngle",
          this.RangeDataV15,
          "positionRange",
          this.RangeDataV15,
          "repeatCount",
          this.RangeDataV15,
          "repeatTime",
          this.RangeDataV15,
          "startTimeOffset",
          this.RangeDataV15,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV15 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV15 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV15 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV15)
        ];

        this.__root = this.ScriptFileDataV15 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV15),
          "handler",
          Utils.getArrayReader(this.HandlerDataV15),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV15),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV15),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV15),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 14
      14: function() {
        this.DspDataV14 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV14 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV14)
        ];

        this.BussDataV14 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV14)
        ];

        this.EnvelopePointDataV14 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV14 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV14),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV14 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV14 = [
          "time",
          this.RangeDataV14,
          "value",
          this.RangeDataV14
        ];

        this.DynamicParamDataV14 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV14),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV14),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV14 = [
          "doppler",
          "float32",
          "lowPass",
          this.DynamicParamDataV14,
          "pan3D",
          this.DynamicParamDataV14,
          "spread3D",
          this.DynamicParamDataV14,
          "volumeA",
          this.DynamicParamDataV14,
          "volumeB",
          this.DynamicParamDataV14
        ];

        this.CategoryDynamicDataV14 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV14 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV14),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV14),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV14 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32"
        ];

        this.SnapshotDataV14 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV14),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV14)
        ];

        this.AudioSettingsDataV14 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "dopplerScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV14),
          "category",
          Utils.getArrayReader(this.CategoryDataV14),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV14),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV14),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV14 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV14 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV14 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV14),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV14),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV14),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV14,
          "pan",
          this.DynamicParamDataV14,
          "pitch",
          this.DynamicParamDataV14,
          "pitchMS",
          this.DynamicParamDataV14,
          "volume",
          this.DynamicParamDataV14,
          "volumeMS",
          this.DynamicParamDataV14,
          "initialDelay",
          this.RangeDataV14,
          "playLength",
          this.RangeDataV14,
          "positionOffsetAngle",
          this.RangeDataV14,
          "positionRange",
          this.RangeDataV14,
          "repeatCount",
          this.RangeDataV14,
          "repeatTime",
          this.RangeDataV14,
          "startTimeOffset",
          this.RangeDataV14,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV14 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV14 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV14 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV14)
        ];

        this.__root = this.ScriptFileDataV14 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV14),
          "handler",
          Utils.getArrayReader(this.HandlerDataV14),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV14),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV14),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV14),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 13
      13: function() {
        this.DspDataV13 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV13 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV13)
        ];

        this.BussDataV13 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV13)
        ];

        this.EnvelopePointDataV13 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV13 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV13),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV13 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV13 = [
          "time",
          this.RangeDataV13,
          "value",
          this.RangeDataV13
        ];

        this.DynamicParamDataV13 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV13),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV13),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV13 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV13,
          "pan3D",
          this.DynamicParamDataV13,
          "spread3D",
          this.DynamicParamDataV13,
          "volumeA",
          this.DynamicParamDataV13,
          "volumeB",
          this.DynamicParamDataV13
        ];

        this.CategoryDynamicDataV13 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV13 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV13),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV13),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV13 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32"
        ];

        this.SnapshotDataV13 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV13),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV13)
        ];

        this.AudioSettingsDataV13 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV13),
          "category",
          Utils.getArrayReader(this.CategoryDataV13),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV13),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV13),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV13 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV13 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV13 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV13),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV13),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV13),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV13,
          "pan",
          this.DynamicParamDataV13,
          "pitch",
          this.DynamicParamDataV13,
          "pitchMS",
          this.DynamicParamDataV13,
          "volume",
          this.DynamicParamDataV13,
          "volumeMS",
          this.DynamicParamDataV13,
          "initialDelay",
          this.RangeDataV13,
          "playLength",
          this.RangeDataV13,
          "positionOffsetAngle",
          this.RangeDataV13,
          "positionRange",
          this.RangeDataV13,
          "repeatCount",
          this.RangeDataV13,
          "repeatTime",
          this.RangeDataV13,
          "startTimeOffset",
          this.RangeDataV13,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV13 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV13 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV13 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV13)
        ];

        this.__root = this.ScriptFileDataV13 = [
          "musicCue",
          Utils.getQWordReader(),
          "reverbOverride",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV13),
          "handler",
          Utils.getArrayReader(this.HandlerDataV13),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV13),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV13),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV13),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 12, ReferencedFunction: 0xE20F20
      12: function() {
        this.DspDataV12 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV12 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV12)
        ];

        this.BussDataV12 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV12)
        ];

        this.EnvelopePointDataV12 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV12 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV12),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV12 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV12 = [
          "time",
          this.RangeDataV12,
          "value",
          this.RangeDataV12
        ];

        this.DynamicParamDataV12 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV12),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV12),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV12 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV12,
          "pan3D",
          this.DynamicParamDataV12,
          "spread3D",
          this.DynamicParamDataV12,
          "volumeA",
          this.DynamicParamDataV12,
          "volumeB",
          this.DynamicParamDataV12
        ];

        this.CategoryDynamicDataV12 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV12 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV12),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV12),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV12 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32"
        ];

        this.SnapshotDataV12 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV12),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV12)
        ];

        this.AudioSettingsDataV12 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV12),
          "category",
          Utils.getArrayReader(this.CategoryDataV12),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV12),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV12),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV12 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV12 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV12 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV12),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV12),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV12),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV12,
          "pan",
          this.DynamicParamDataV12,
          "pitch",
          this.DynamicParamDataV12,
          "pitchMS",
          this.DynamicParamDataV12,
          "volume",
          this.DynamicParamDataV12,
          "volumeMS",
          this.DynamicParamDataV12,
          "initialDelay",
          this.RangeDataV12,
          "playLength",
          this.RangeDataV12,
          "positionOffsetAngle",
          this.RangeDataV12,
          "positionRange",
          this.RangeDataV12,
          "repeatCount",
          this.RangeDataV12,
          "repeatTime",
          this.RangeDataV12,
          "startTimeOffset",
          this.RangeDataV12,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV12 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV12 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV12 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV12)
        ];

        this.__root = this.ScriptFileDataV12 = [
          "musicCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV12),
          "handler",
          Utils.getArrayReader(this.HandlerDataV12),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV12),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV12),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV12),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32",
          "musicCuePriority",
          "uint8"
        ];
      },

      // => Version: 11
      11: function() {
        this.DspDataV11 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV11 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV11)
        ];

        this.BussDataV11 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV11)
        ];

        this.EnvelopePointDataV11 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV11 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV11),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV11 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV11 = [
          "time",
          this.RangeDataV11,
          "value",
          this.RangeDataV11
        ];

        this.DynamicParamDataV11 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV11),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV11),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV11 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV11,
          "pan3D",
          this.DynamicParamDataV11,
          "spread3D",
          this.DynamicParamDataV11,
          "volumeA",
          this.DynamicParamDataV11,
          "volumeB",
          this.DynamicParamDataV11
        ];

        this.CategoryDynamicDataV11 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV11 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV11),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV11),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV11 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32"
        ];

        this.SnapshotDataV11 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV11),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV11)
        ];

        this.AudioSettingsDataV11 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV11),
          "category",
          Utils.getArrayReader(this.CategoryDataV11),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV11),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV11),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader(),
          "musicScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV11 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV11 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV11 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV11),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV11),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV11),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV11,
          "pan",
          this.DynamicParamDataV11,
          "pitch",
          this.DynamicParamDataV11,
          "pitchMS",
          this.DynamicParamDataV11,
          "volume",
          this.DynamicParamDataV11,
          "volumeMS",
          this.DynamicParamDataV11,
          "initialDelay",
          this.RangeDataV11,
          "playLength",
          this.RangeDataV11,
          "positionOffsetAngle",
          this.RangeDataV11,
          "positionRange",
          this.RangeDataV11,
          "repeatCount",
          this.RangeDataV11,
          "repeatTime",
          this.RangeDataV11,
          "startTimeOffset",
          this.RangeDataV11,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV11 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV11 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV11 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV11)
        ];

        this.__root = this.ScriptFileDataV11 = [
          "musicCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV11),
          "handler",
          Utils.getArrayReader(this.HandlerDataV11),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV11),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV11),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV11),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32"
        ];
      },

      // => Version: 10
      10: function() {
        this.DspDataV10 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV10 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV10)
        ];

        this.BussDataV10 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV10)
        ];

        this.EnvelopePointDataV10 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV10 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV10),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV10 = [
          "max",
          "float32",
          "min",
          "float32",
          "min",
          "uint8"
        ];

        this.RandomParamDataV10 = [
          "time",
          this.RangeDataV10,
          "value",
          this.RangeDataV10
        ];

        this.DynamicParamDataV10 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV10),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV10),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV10 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV10,
          "pan3D",
          this.DynamicParamDataV10,
          "spread3D",
          this.DynamicParamDataV10,
          "volumeA",
          this.DynamicParamDataV10,
          "volumeB",
          this.DynamicParamDataV10
        ];

        this.CategoryDynamicDataV10 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV10 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV10),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV10),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV10 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32"
        ];

        this.SnapshotDataV10 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV10),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV10)
        ];

        this.AudioSettingsDataV10 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV10),
          "category",
          Utils.getArrayReader(this.CategoryDataV10),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV10),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV10),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV10 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV10 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV10 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV10),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV10),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV10),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV10,
          "pan",
          this.DynamicParamDataV10,
          "pitch",
          this.DynamicParamDataV10,
          "pitchMS",
          this.DynamicParamDataV10,
          "volume",
          this.DynamicParamDataV10,
          "volumeMS",
          this.DynamicParamDataV10,
          "initialDelay",
          this.RangeDataV10,
          "playLength",
          this.RangeDataV10,
          "positionOffsetAngle",
          this.RangeDataV10,
          "positionRange",
          this.RangeDataV10,
          "repeatCount",
          this.RangeDataV10,
          "repeatTime",
          this.RangeDataV10,
          "startTimeOffset",
          this.RangeDataV10,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV10 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV10 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV10 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV10)
        ];

        this.__root = this.ScriptFileDataV10 = [
          "musicCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV10),
          "handler",
          Utils.getArrayReader(this.HandlerDataV10),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV10),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV10),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV10),
          "flags",
          "uint32",
          "soundPoolCount",
          "uint32",
          "fadeInTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "volume",
          "float32"
        ];
      },

      // => Version: 9
      9: function() {
        this.DspDataV9 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV9 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV9)
        ];

        this.BussDataV9 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV9)
        ];

        this.EnvelopePointDataV9 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV9 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV9),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV9 = ["max", "float32", "min", "float32", "min", "uint8"];

        this.RandomParamDataV9 = [
          "time",
          this.RangeDataV9,
          "value",
          this.RangeDataV9
        ];

        this.DynamicParamDataV9 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV9),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV9),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV9 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV9,
          "pan3D",
          this.DynamicParamDataV9,
          "spread3D",
          this.DynamicParamDataV9,
          "volumeA",
          this.DynamicParamDataV9,
          "volumeB",
          this.DynamicParamDataV9
        ];

        this.CategoryDynamicDataV9 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV9 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "soundPoolCategory",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV9),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV9),
          "muteFadeTime",
          "float32",
          "soundPoolDelay",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "soundPoolCount",
          "uint32",
          "maxAudibleBehavior",
          "uint8",
          "soundPoolCountBehavior",
          "uint8",
          "soundPoolMode",
          "uint8"
        ];

        this.ReverbDataV9 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32"
        ];

        this.SnapshotDataV9 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV9),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV9)
        ];

        this.AudioSettingsDataV9 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV9),
          "category",
          Utils.getArrayReader(this.CategoryDataV9),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV9),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV9),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV9 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV9 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV9 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV9),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV9),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV9),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV9,
          "pan",
          this.DynamicParamDataV9,
          "pitch",
          this.DynamicParamDataV9,
          "pitchMS",
          this.DynamicParamDataV9,
          "volume",
          this.DynamicParamDataV9,
          "volumeMS",
          this.DynamicParamDataV9,
          "initialDelay",
          this.RangeDataV9,
          "playLength",
          this.RangeDataV9,
          "positionOffsetAngle",
          this.RangeDataV9,
          "positionRange",
          this.RangeDataV9,
          "repeatCount",
          this.RangeDataV9,
          "repeatTime",
          this.RangeDataV9,
          "startTimeOffset",
          this.RangeDataV9,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV9 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV9 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV9 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV9)
        ];

        this.__root = this.ScriptFileDataV9 = [
          "musicCue",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV9),
          "handler",
          Utils.getArrayReader(this.HandlerDataV9),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV9),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV9),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV9),
          "flags",
          "uint32",
          "fadeInTime",
          "float32",
          "volume",
          "float32"
        ];
      },

      // => Version: 8
      8: function() {
        this.DspDataV8 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV8 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV8)
        ];

        this.BussDataV8 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV8)
        ];

        this.EnvelopePointDataV8 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV8 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV8),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV8 = ["max", "float32", "min", "float32", "min", "uint8"];

        this.RandomParamDataV8 = [
          "time",
          this.RangeDataV8,
          "value",
          this.RangeDataV8
        ];

        this.DynamicParamDataV8 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV8),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV8),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV8 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV8,
          "pan3D",
          this.DynamicParamDataV8,
          "spread3D",
          this.DynamicParamDataV8,
          "volumeA",
          this.DynamicParamDataV8,
          "volumeB",
          this.DynamicParamDataV8
        ];

        this.CategoryDynamicDataV8 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "reverbDirect",
          "float32",
          "reverbRoom",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV8 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV8),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV8),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.ReverbDataV8 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "room",
          "float32",
          "roomHF",
          "float32",
          "roomLF",
          "float32",
          "decayTime",
          "float32",
          "decayHFRatio",
          "float32",
          "reflections",
          "float32",
          "reflectionsDelay",
          "float32",
          "reverb",
          "float32",
          "reverbDelay",
          "float32",
          "referenceHF",
          "float32",
          "referenceLF",
          "float32",
          "diffusion",
          "float32",
          "density",
          "float32"
        ];

        this.SnapshotDataV8 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV8),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV8)
        ];

        this.AudioSettingsDataV8 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV8),
          "category",
          Utils.getArrayReader(this.CategoryDataV8),
          "reverb",
          Utils.getArrayReader(this.ReverbDataV8),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV8),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV8 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV8 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV8 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV8),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV8),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV8),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV8,
          "pan",
          this.DynamicParamDataV8,
          "pitch",
          this.DynamicParamDataV8,
          "pitchMS",
          this.DynamicParamDataV8,
          "volume",
          this.DynamicParamDataV8,
          "volumeMS",
          this.DynamicParamDataV8,
          "initialDelay",
          this.RangeDataV8,
          "playLength",
          this.RangeDataV8,
          "positionOffsetAngle",
          this.RangeDataV8,
          "positionRange",
          this.RangeDataV8,
          "repeatCount",
          this.RangeDataV8,
          "repeatTime",
          this.RangeDataV8,
          "startTimeOffset",
          this.RangeDataV8,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "musicPriority",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV8 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV8 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV8 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV8)
        ];

        this.__root = this.ScriptFileDataV8 = [
          "musicCue",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV8),
          "handler",
          Utils.getArrayReader(this.HandlerDataV8),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV8),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV8),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV8),
          "flags",
          "uint32",
          "fadeInTime",
          "float32",
          "volume",
          "float32"
        ];
      },

      // => Version: 7, ReferencedFunction: 0xE20EB0
      7: function() {
        this.DspDataV7 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV7 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV7)
        ];

        this.BussDataV7 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV7)
        ];

        this.EnvelopePointDataV7 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV7 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV7),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV7 = ["max", "float32", "min", "float32", "min", "uint8"];

        this.RandomParamDataV7 = [
          "time",
          this.RangeDataV7,
          "value",
          this.RangeDataV7
        ];

        this.DynamicParamDataV7 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV7),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV7),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV7 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV7,
          "pan3D",
          this.DynamicParamDataV7,
          "spread3D",
          this.DynamicParamDataV7,
          "volumeA",
          this.DynamicParamDataV7,
          "volumeB",
          this.DynamicParamDataV7
        ];

        this.CategoryDynamicDataV7 = [
          "name",
          Utils.getQWordReader(),
          "volume",
          "float32",
          "nonFocusGain",
          "float32",
          "lowPass",
          "float32",
          "flags",
          "uint32"
        ];

        this.CategoryDataV7 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV7),
          "dynamicData",
          Utils.getPointerReader(this.CategoryDynamicDataV7),
          "muteFadeTime",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.SnapshotDataV7 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV7),
          "category",
          Utils.getArrayReader(this.CategoryDynamicDataV7)
        ];

        this.AudioSettingsDataV7 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "focusTransition",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV7),
          "category",
          Utils.getArrayReader(this.CategoryDataV7),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV7),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV7 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV7 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV7 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "offsetBone",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV7),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV7),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV7),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV7,
          "pan",
          this.DynamicParamDataV7,
          "pitch",
          this.DynamicParamDataV7,
          "pitchMS",
          this.DynamicParamDataV7,
          "volume",
          this.DynamicParamDataV7,
          "volumeMS",
          this.DynamicParamDataV7,
          "initialDelay",
          this.RangeDataV7,
          "playLength",
          this.RangeDataV7,
          "positionOffsetAngle",
          this.RangeDataV7,
          "positionRange",
          this.RangeDataV7,
          "repeatCount",
          this.RangeDataV7,
          "repeatTime",
          this.RangeDataV7,
          "startTimeOffset",
          this.RangeDataV7,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV7 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV7 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV7 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV7)
        ];

        this.__root = this.ScriptFileDataV7 = [
          "musicCue",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV7),
          "handler",
          Utils.getArrayReader(this.HandlerDataV7),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV7),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV7),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV7),
          "flags",
          "uint32",
          "fadeInTime",
          "float32",
          "volume",
          "float32"
        ];
      },

      // => Version: 6
      6: function() {
        this.DspDataV6 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDynamicDataV6 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32",
          "dsp",
          Utils.getArrayReader(this.DspDataV6)
        ];

        this.BussDataV6 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "output",
          Utils.getQWordReader(),
          "dynamicData",
          Utils.getPointerReader(this.BussDynamicDataV6)
        ];

        this.EnvelopePointDataV6 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV6 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV6),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV6 = ["max", "float32", "min", "float32", "min", "uint8"];

        this.RandomParamDataV6 = [
          "time",
          this.RangeDataV6,
          "value",
          this.RangeDataV6
        ];

        this.DynamicParamDataV6 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV6),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV6),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV6 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV6,
          "pan3D",
          this.DynamicParamDataV6,
          "spread3D",
          this.DynamicParamDataV6,
          "volumeA",
          this.DynamicParamDataV6
        ];

        this.CategoryDataV6 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "outputBussName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV6),
          "muteFadeTime",
          "float32",
          "volumeA",
          "float32",
          "volumeAThreshold",
          "float32",
          "volumeB",
          "float32",
          "volumeBThreshold",
          "float32",
          "volumeChangeRate",
          "float32",
          "volumeDucking",
          "float32",
          "volumeDuckingTimeAttack",
          "float32",
          "volumeDuckingTimeRelease",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.SnapshotDataV6 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDynamicDataV6)
        ];

        this.AudioSettingsDataV6 = [
          "defaultSnapshot",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "buss",
          Utils.getArrayReader(this.BussDataV6),
          "category",
          Utils.getArrayReader(this.CategoryDataV6),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV6),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV6 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV6 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV6 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV6),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV6),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV6),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV6,
          "pan",
          this.DynamicParamDataV6,
          "pitch",
          this.DynamicParamDataV6,
          "pitchMS",
          this.DynamicParamDataV6,
          "volume",
          this.DynamicParamDataV6,
          "volumeMS",
          this.DynamicParamDataV6,
          "initialDelay",
          this.RangeDataV6,
          "playLength",
          this.RangeDataV6,
          "positionOffsetAngle",
          this.RangeDataV6,
          "positionRange",
          this.RangeDataV6,
          "repeatCount",
          this.RangeDataV6,
          "repeatTime",
          this.RangeDataV6,
          "startTimeOffset",
          this.RangeDataV6,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV6 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV6 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV6 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV6)
        ];

        this.__root = this.ScriptFileDataV6 = [
          "musicCue",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV6),
          "handler",
          Utils.getArrayReader(this.HandlerDataV6),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV6),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV6),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV6),
          "flags",
          "uint32",
          "fadeInTime",
          "float32",
          "volume",
          "float32"
        ];
      },

      // => Version: 5
      5: function() {
        this.EnvelopePointDataV5 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV5 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV5),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV5 = ["max", "float32", "min", "float32", "min", "uint8"];

        this.RandomParamDataV5 = [
          "time",
          this.RangeDataV5,
          "value",
          this.RangeDataV5
        ];

        this.DynamicParamDataV5 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV5),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV5),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV5 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV5,
          "pan3D",
          this.DynamicParamDataV5,
          "spread3D",
          this.DynamicParamDataV5,
          "volumeA",
          this.DynamicParamDataV5
        ];

        this.CategoryDataV5 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV5),
          "muteFadeTime",
          "float32",
          "volumeA",
          "float32",
          "volumeAThreshold",
          "float32",
          "volumeB",
          "float32",
          "volumeBThreshold",
          "float32",
          "volumeChangeRate",
          "float32",
          "volumeDucking",
          "float32",
          "volumeDuckingTimeAttack",
          "float32",
          "volumeDuckingTimeRelease",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.DspDataV5 = [
          "type",
          "uint32",
          "flags",
          "uint32",
          "property",
          Utils.getArrayReader("float32")
        ];

        this.BussDataV5 = [
          "name",
          Utils.getQWordReader(),
          "output",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "dsp",
          Utils.getArrayReader(this.DspDataV5),
          "volume",
          "float32"
        ];

        this.SnapshotDataV5 = [
          "name",
          Utils.getQWordReader(),
          "blendInTime",
          "float32",
          "blendOutTime",
          "float32",
          "flags",
          "uint32",
          "buss",
          Utils.getArrayReader(this.BussDataV5)
        ];

        this.AudioSettingsDataV5 = [
          "defaultBuss",
          Utils.getQWordReader(),
          "effectsBuss",
          Utils.getQWordReader(),
          "distanceScale",
          "float32",
          "category",
          Utils.getArrayReader(this.CategoryDataV5),
          "snapshot",
          Utils.getArrayReader(this.SnapshotDataV5),
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV5 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.FileNameDataV5 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV5 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV5),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV5),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV5),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV5,
          "pan",
          this.DynamicParamDataV5,
          "pitch",
          this.DynamicParamDataV5,
          "pitchMS",
          this.DynamicParamDataV5,
          "volume",
          this.DynamicParamDataV5,
          "volumeMS",
          this.DynamicParamDataV5,
          "initialDelay",
          this.RangeDataV5,
          "playLength",
          this.RangeDataV5,
          "positionOffsetAngle",
          this.RangeDataV5,
          "positionRange",
          this.RangeDataV5,
          "repeatCount",
          this.RangeDataV5,
          "repeatTime",
          this.RangeDataV5,
          "startTimeOffset",
          this.RangeDataV5,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV5 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV5 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV5 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV5)
        ];

        this.__root = this.ScriptFileDataV5 = [
          "musicCue",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV5),
          "handler",
          Utils.getArrayReader(this.HandlerDataV5),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV5),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV5),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV5),
          "flags",
          "uint32",
          "fadeInTime",
          "float32",
          "volume",
          "float32"
        ];
      },

      // => Version: 4
      4: function() {
        this.VolumeGroupDataV4 = [
          "name",
          Utils.getQWordReader(),
          "parentName",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32"
        ];

        this.EnvelopePointDataV4 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV4 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV4),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV4 = ["max", "float32", "min", "float32", "min", "uint8"];

        this.RandomParamDataV4 = [
          "time",
          this.RangeDataV4,
          "value",
          this.RangeDataV4
        ];

        this.DynamicParamDataV4 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV4),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV4),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV4 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV4,
          "pan3D",
          this.DynamicParamDataV4,
          "spread3D",
          this.DynamicParamDataV4,
          "volumeA",
          this.DynamicParamDataV4
        ];

        this.CategoryDataV4 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV4),
          "muteFadeTime",
          "float32",
          "volumeA",
          "float32",
          "volumeAThreshold",
          "float32",
          "volumeB",
          "float32",
          "volumeBThreshold",
          "float32",
          "volumeChangeRate",
          "float32",
          "volumeDucking",
          "float32",
          "volumeDuckingTimeAttack",
          "float32",
          "volumeDuckingTimeRelease",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.AudioSettingsDataV4 = [
          "volumeGroup",
          Utils.getArrayReader(this.VolumeGroupDataV4),
          "category",
          Utils.getArrayReader(this.CategoryDataV4),
          "distanceScale",
          "float32",
          "bankIndexFileName",
          Utils.getFileNameReader(),
          "bankScriptFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV4 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.DspDataV4 = [
          "param",
          Utils.getArrayReader(this.DynamicParamDataV4),
          "type",
          "uint8"
        ];

        this.FileNameDataV4 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV4 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV4),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV4),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV4),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV4,
          "pan",
          this.DynamicParamDataV4,
          "pitch",
          this.DynamicParamDataV4,
          "pitchMS",
          this.DynamicParamDataV4,
          "volume",
          this.DynamicParamDataV4,
          "volumeMS",
          this.DynamicParamDataV4,
          "initialDelay",
          this.RangeDataV4,
          "playLength",
          this.RangeDataV4,
          "positionOffsetAngle",
          this.RangeDataV4,
          "positionRange",
          this.RangeDataV4,
          "repeatCount",
          this.RangeDataV4,
          "repeatTime",
          this.RangeDataV4,
          "startTimeOffset",
          this.RangeDataV4,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV4 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV4 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV4 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV4)
        ];

        this.__root = this.ScriptFileDataV4 = [
          "musicCue",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV4),
          "handler",
          Utils.getArrayReader(this.HandlerDataV4),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV4),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV4),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV4),
          "flags",
          "uint32",
          "fadeInTime",
          "float32",
          "volume",
          "float32"
        ];
      },

      // => Version: 3
      3: function() {
        this.VolumeGroupDataV3 = [
          "name",
          Utils.getQWordReader(),
          "parentName",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32"
        ];

        this.EnvelopePointDataV3 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV3 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV3),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV3 = ["max", "float32", "min", "float32", "min", "uint8"];

        this.RandomParamDataV3 = [
          "time",
          this.RangeDataV3,
          "value",
          this.RangeDataV3
        ];

        this.DynamicParamDataV3 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV3),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV3),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV3 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV3,
          "pan3D",
          this.DynamicParamDataV3,
          "spread3D",
          this.DynamicParamDataV3,
          "volumeA",
          this.DynamicParamDataV3
        ];

        this.CategoryDataV3 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV3),
          "muteFadeTime",
          "float32",
          "volumeA",
          "float32",
          "volumeAThreshold",
          "float32",
          "volumeB",
          "float32",
          "volumeBThreshold",
          "float32",
          "volumeChangeRate",
          "float32",
          "volumeDucking",
          "float32",
          "volumeDuckingTimeAttack",
          "float32",
          "volumeDuckingTimeRelease",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.AudioSettingsDataV3 = [
          "volumeGroup",
          Utils.getArrayReader(this.VolumeGroupDataV3),
          "category",
          Utils.getArrayReader(this.CategoryDataV3),
          "distanceScale",
          "float32",
          "voiceBankFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV3 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.DspDataV3 = [
          "param",
          Utils.getArrayReader(this.DynamicParamDataV3),
          "type",
          "uint8"
        ];

        this.FileNameDataV3 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV3 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV3),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV3),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV3),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV3,
          "pan",
          this.DynamicParamDataV3,
          "pitch",
          this.DynamicParamDataV3,
          "pitchMS",
          this.DynamicParamDataV3,
          "volume",
          this.DynamicParamDataV3,
          "volumeMS",
          this.DynamicParamDataV3,
          "initialDelay",
          this.RangeDataV3,
          "playLength",
          this.RangeDataV3,
          "positionOffsetAngle",
          this.RangeDataV3,
          "positionRange",
          this.RangeDataV3,
          "repeatCount",
          this.RangeDataV3,
          "repeatTime",
          this.RangeDataV3,
          "startTimeOffset",
          this.RangeDataV3,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV3 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV3 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV3 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV3)
        ];

        this.__root = this.ScriptFileDataV3 = [
          "musicCue",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV3),
          "handler",
          Utils.getArrayReader(this.HandlerDataV3),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV3),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV3),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV3),
          "flags",
          "uint32",
          "fadeInTime",
          "float32",
          "volume",
          "float32"
        ];
      },

      // => Version: 2
      2: function() {
        this.VolumeGroupDataV2 = [
          "name",
          Utils.getQWordReader(),
          "parentName",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "volume",
          "float32"
        ];

        this.EnvelopePointDataV2 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV2 = [
          "offsetParameter",
          Utils.getQWordReader(),
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV2),
          "offsetType",
          "uint8"
        ];

        this.RangeDataV2 = ["max", "float32", "min", "float32", "min", "uint8"];

        this.RandomParamDataV2 = [
          "time",
          this.RangeDataV2,
          "value",
          this.RangeDataV2
        ];

        this.DynamicParamDataV2 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV2),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV2),
          "value",
          "float32",
          "type",
          "uint8"
        ];

        this.AttenuationDataV2 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV2,
          "pan3D",
          this.DynamicParamDataV2,
          "spread3D",
          this.DynamicParamDataV2,
          "volumeA",
          this.DynamicParamDataV2
        ];

        this.CategoryDataV2 = [
          "name",
          Utils.getQWordReader(),
          "volumeGroupName",
          Utils.getQWordReader(),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV2),
          "muteFadeTime",
          "float32",
          "volumeA",
          "float32",
          "volumeAThreshold",
          "float32",
          "volumeB",
          "float32",
          "volumeBThreshold",
          "float32",
          "volumeChangeRate",
          "float32",
          "volumeDucking",
          "float32",
          "volumeDuckingTimeAttack",
          "float32",
          "volumeDuckingTimeRelease",
          "float32",
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8"
        ];

        this.AudioSettingsDataV2 = [
          "volumeGroup",
          Utils.getArrayReader(this.VolumeGroupDataV2),
          "category",
          Utils.getArrayReader(this.CategoryDataV2),
          "distanceScale",
          "float32",
          "voiceBankFileName",
          Utils.getFileNameReader()
        ];

        this.HandlerDataV2 = [
          "name",
          Utils.getQWordReader(),
          "flags",
          "uint32",
          "byteCode",
          Utils.getArrayReader("uint8")
        ];

        this.DspDataV2 = [
          "param",
          Utils.getArrayReader(this.DynamicParamDataV2),
          "type",
          "uint8"
        ];

        this.FileNameDataV2 = [
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32",
          "fileName",
          Utils.getFileNameReader(),
          "audioType",
          "uint8"
        ];

        this.MetaSoundDataV2 = [
          "category",
          Utils.getQWordReader(),
          "endCue",
          Utils.getQWordReader(),
          "name",
          Utils.getQWordReader(),
          "playlistId",
          Utils.getQWordReader(),
          "dsp",
          Utils.getArrayReader(this.DspDataV2),
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV2),
          "fileName",
          Utils.getArrayReader(this.FileNameDataV2),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "positionOffset",
          ["[]", "float32", 3],
          "flags",
          "uint32",
          "loopCount",
          "uint32",
          "depth",
          this.DynamicParamDataV2,
          "pan",
          this.DynamicParamDataV2,
          "pitch",
          this.DynamicParamDataV2,
          "pitchMS",
          this.DynamicParamDataV2,
          "volume",
          this.DynamicParamDataV2,
          "volumeMS",
          this.DynamicParamDataV2,
          "initialDelay",
          this.RangeDataV2,
          "playLength",
          this.RangeDataV2,
          "positionOffsetAngle",
          this.RangeDataV2,
          "positionRange",
          this.RangeDataV2,
          "repeatCount",
          this.RangeDataV2,
          "repeatTime",
          this.RangeDataV2,
          "startTimeOffset",
          this.RangeDataV2,
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "fileIterateMode",
          "uint8",
          "loopMode",
          "uint8",
          "playbackMode",
          "uint8",
          "positionMode",
          "uint8",
          "repeatTimeFrom",
          "uint8"
        ];

        this.ScriptRefDataV2 = [
          "name",
          Utils.getQWordReader(),
          "fileName",
          Utils.getFileNameReader()
        ];

        this.TriggerMarkerDataV2 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV2 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV2)
        ];

        this.__root = this.ScriptFileDataV2 = [
          "musicCue",
          Utils.getQWordReader(),
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV2),
          "handler",
          Utils.getArrayReader(this.HandlerDataV2),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV2),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV2),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV2),
          "flags",
          "uint32",
          "fadeInTime",
          "float32",
          "volume",
          "float32"
        ];
      },

      // => Version: 1
      1: function() {
        this.EnvelopePointDataV1 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV1 = [
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV1),
          "offsetType",
          "uint8",
          "offsetParameter",
          Utils.getQWordReader()
        ];

        this.RangeDataV1 = ["max", "float32", "min", "float32", "min", "uint8"];

        this.RandomParamDataV1 = [
          "time",
          this.RangeDataV1,
          "value",
          this.RangeDataV1
        ];

        this.DynamicParamDataV1 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV1),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV1),
          "type",
          "uint8",
          "value",
          "float32"
        ];

        this.AttenuationDataV1 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV1,
          "pan3D",
          this.DynamicParamDataV1,
          "spread3D",
          this.DynamicParamDataV1,
          "volumeA",
          this.DynamicParamDataV1
        ];

        this.CategoryDataV1 = [
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV1),
          "flags",
          "uint32",
          "maxAudible",
          "uint32",
          "maxAudibleBehavior",
          "uint8",
          "muteFadeTime",
          "float32",
          "name",
          Utils.getQWordReader(),
          "volumeA",
          "float32",
          "volumeAThreshold",
          "float32",
          "volumeB",
          "float32",
          "volumeBThreshold",
          "float32",
          "volumeChangeRate",
          "float32",
          "volumeDucking",
          "float32",
          "volumeDuckingTimeAttack",
          "float32",
          "volumeDuckingTimeRelease",
          "float32",
          "volumeGroupName",
          Utils.getQWordReader()
        ];

        this.VolumeGroupDataV1 = [
          "flags",
          "uint32",
          "name",
          Utils.getQWordReader(),
          "parentName",
          Utils.getQWordReader(),
          "volume",
          "float32"
        ];

        this.AudioSettingsDataV1 = [
          "category",
          Utils.getArrayReader(this.CategoryDataV1),
          "distanceScale",
          "float32",
          "voiceBankFileName",
          Utils.getFileNameReader(),
          "volumeGroup",
          Utils.getArrayReader(this.VolumeGroupDataV1)
        ];

        this.HandlerDataV1 = [
          "byteCode",
          Utils.getArrayReader("uint8"),
          "flags",
          "uint32",
          "name",
          Utils.getQWordReader()
        ];

        this.DspDataV1 = [
          "param",
          Utils.getArrayReader(this.DynamicParamDataV1),
          "type",
          "uint8"
        ];

        this.FileNameDataV1 = [
          "audioType",
          "uint8",
          "fileName",
          Utils.getFileNameReader(),
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32"
        ];

        this.MetaSoundDataV1 = [
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV1),
          "category",
          Utils.getQWordReader(),
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "depth",
          this.DynamicParamDataV1,
          "dsp",
          Utils.getArrayReader(this.DspDataV1),
          "endCue",
          Utils.getQWordReader(),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "fileIterateMode",
          "uint8",
          "fileName",
          Utils.getArrayReader(this.FileNameDataV1),
          "flags",
          "uint32",
          "initialDelay",
          this.RangeDataV1,
          "loopCount",
          "uint32",
          "loopMode",
          "uint8",
          "name",
          Utils.getQWordReader(),
          "pan",
          this.DynamicParamDataV1,
          "pitch",
          this.DynamicParamDataV1,
          "playbackMode",
          "uint8",
          "playLength",
          this.RangeDataV1,
          "playlistId",
          Utils.getQWordReader(),
          "positionMode",
          "uint8",
          "positionOffset",
          ["[]", "float32", 3],
          "positionOffsetAngle",
          this.RangeDataV1,
          "positionRange",
          this.RangeDataV1,
          "repeatCount",
          this.RangeDataV1,
          "repeatTime",
          this.RangeDataV1,
          "startTimeOffset",
          this.RangeDataV1,
          "repeatTimeFrom",
          "uint8",
          "volume",
          this.DynamicParamDataV1
        ];

        this.ScriptRefDataV1 = [
          "fileName",
          Utils.getFileNameReader(),
          "name",
          Utils.getQWordReader()
        ];

        this.TriggerMarkerDataV1 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV1 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV1)
        ];

        this.__root = this.ScriptFileDataV1 = [
          "audioSettings",
          Utils.getPointerReader(this.AudioSettingsDataV1),
          "fadeInTime",
          "float32",
          "flags",
          "uint32",
          "handler",
          Utils.getArrayReader(this.HandlerDataV1),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV1),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV1),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV1),
          "volume",
          "float32"
        ];
      },

      // => Version: 0
      0: function() {
        this.HandlerDataV0 = [
          "byteCode",
          Utils.getArrayReader("uint8"),
          "flags",
          "uint32",
          "name",
          Utils.getQWordReader()
        ];

        this.EnvelopePointDataV0 = ["offset", "float32", "value", "float32"];

        this.EnvelopeDataV0 = [
          "envelopePoint",
          Utils.getArrayReader(this.EnvelopePointDataV0),
          "offsetType",
          "uint8",
          "offsetParameter",
          Utils.getQWordReader()
        ];

        this.RangeDataV0 = ["max", "float32", "min", "float32", "min", "uint8"];

        this.RandomParamDataV0 = [
          "time",
          this.RangeDataV0,
          "value",
          this.RangeDataV0
        ];

        this.DynamicParamDataV0 = [
          "envelopeData",
          Utils.getPointerReader(this.EnvelopeDataV0),
          "randomParamData",
          Utils.getPointerReader(this.RandomParamDataV0),
          "type",
          "uint8",
          "value",
          "float32"
        ];

        this.AttenuationDataV0 = [
          "coneInsideAngle",
          "float32",
          "coneOutsideAngle",
          "float32",
          "coneOutsideVolume",
          "float32",
          "lowPass",
          this.DynamicParamDataV0,
          "pan3D",
          this.DynamicParamDataV0,
          "spread3D",
          this.DynamicParamDataV0,
          "volumeA",
          this.DynamicParamDataV0
        ];

        this.DspDataV0 = [
          "param",
          Utils.getArrayReader(this.DynamicParamDataV0),
          "type",
          "uint8"
        ];

        this.FileNameDataV0 = [
          "audioType",
          "uint8",
          "fileName",
          Utils.getFileNameReader(),
          "language",
          Utils.getQWordReader(),
          "weight",
          "float32"
        ];

        this.MetaSoundDataV0 = [
          "attenuation",
          Utils.getPointerReader(this.AttenuationDataV0),
          "category",
          Utils.getQWordReader(),
          "channelMode",
          "uint8",
          "channelPriority",
          "uint8",
          "depth",
          this.DynamicParamDataV0,
          "dsp",
          Utils.getArrayReader(this.DspDataV0),
          "endCue",
          Utils.getQWordReader(),
          "endCueOffset",
          "float32",
          "fadeInTime",
          "float32",
          "fadeOutTime",
          "float32",
          "fileIterateMode",
          "uint8",
          "fileName",
          Utils.getArrayReader(this.FileNameDataV0),
          "flags",
          "uint32",
          "initialDelay",
          this.RangeDataV0,
          "loopCount",
          "uint32",
          "loopMode",
          "uint8",
          "name",
          Utils.getQWordReader(),
          "pan",
          this.DynamicParamDataV0,
          "pitch",
          this.DynamicParamDataV0,
          "playbackMode",
          "uint8",
          "playLength",
          this.RangeDataV0,
          "playlistId",
          Utils.getQWordReader(),
          "positionMode",
          "uint8",
          "positionOffset",
          ["[]", "float32", 3],
          "positionOffsetAngle",
          this.RangeDataV0,
          "positionRange",
          this.RangeDataV0,
          "repeatCount",
          this.RangeDataV0,
          "repeatTime",
          this.RangeDataV0,
          "startTimeOffset",
          this.RangeDataV0,
          "repeatTimeFrom",
          "uint8",
          "volume",
          this.DynamicParamDataV0
        ];

        this.ScriptRefDataV0 = [
          "fileName",
          Utils.getFileNameReader(),
          "name",
          Utils.getQWordReader()
        ];

        this.TriggerMarkerDataV0 = [
          "cue",
          Utils.getQWordReader(),
          "end",
          Utils.getQWordReader(),
          "time",
          "float32",
          "type",
          "uint8"
        ];

        this.TriggerKeyDataV0 = [
          "name",
          Utils.getQWordReader(),
          "triggerMarker",
          Utils.getArrayReader(this.TriggerMarkerDataV0)
        ];

        this.__root = this.ScriptFileDataV0 = [
          "fadeInTime",
          "float32",
          "flags",
          "uint32",
          "handler",
          Utils.getArrayReader(this.HandlerDataV0),
          "metaSound",
          Utils.getArrayReader(this.MetaSoundDataV0),
          "scriptRef",
          Utils.getArrayReader(this.ScriptRefDataV0),
          "triggerKey",
          Utils.getArrayReader(this.TriggerKeyDataV0),
          "volume",
          "float32"
        ];
      }
    }
  }
];
