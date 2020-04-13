import { Uint64, Float32, Uint32, DynArray, Pointer, Uint8, Filename, String16, FixedArray } from "../src/types";

module.exports = [
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV0",
    version: 0,
    definitions: {
      HandlerDataV0: {
        byteCode: DynArray(Uint8),
        flags: Uint32,
        name: Uint64
      },
      MetaSoundDataV0: {
        attenuation: Pointer("AttenuationDataV0"),
        category: Uint64,
        channelMode: Uint8,
        channelPriority: Uint8,
        depth: "DynamicParamDataV0",
        dsp: DynArray("DspDataV0"),
        endCue: Uint64,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        fileIterateMode: Uint8,
        fileName: DynArray("FileNameDataV0"),
        flags: Uint32,
        initialDelay: "RangeDataV0",
        loopCount: Uint32,
        loopMode: Uint8,
        name: Uint64,
        pan: "DynamicParamDataV0",
        pitch: "DynamicParamDataV0",
        playbackMode: Uint8,
        playLength: "RangeDataV0",
        playlistId: Uint64,
        positionMode: Uint8,
        positionOffset: FixedArray(Float32, 3),
        positionOffsetAngle: "RangeDataV0",
        positionRange: "RangeDataV0",
        repeatCount: "RangeDataV0",
        repeatTime: "RangeDataV0",
        startTimeOffset: "RangeDataV0",
        repeatTimeFrom: Uint8,
        volume: "DynamicParamDataV0"
      },
      AttenuationDataV0: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV0",
        pan3D: "DynamicParamDataV0",
        spread3D: "DynamicParamDataV0",
        volumeA: "DynamicParamDataV0"
      },
      DynamicParamDataV0: {
        envelopeData: Pointer("EnvelopeDataV0"),
        randomParamData: Pointer("RandomParamDataV0"),
        type: Uint8,
        value: Float32
      },
      EnvelopeDataV0: {
        envelopePoint: DynArray("EnvelopePointDataV0"),
        offsetType: Uint8,
        offsetParameter: Uint64
      },
      EnvelopePointDataV0: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV0: {
        time: "RangeDataV0",
        value: "RangeDataV0"
      },
      RangeDataV0: {
        max: Float32,
        min: Uint8
      },
      DspDataV0: {
        param: DynArray("DynamicParamDataV0"),
        type: Uint8
      },
      FileNameDataV0: {
        audioType: Uint8,
        fileName: Filename,
        language: Uint64,
        weight: Float32
      },
      ScriptRefDataV0: {
        fileName: Filename,
        name: Uint64
      },
      TriggerKeyDataV0: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV0")
      },
      TriggerMarkerDataV0: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      fadeInTime: Float32,
      flags: Uint32,
      handler: DynArray("HandlerDataV0"),
      metaSound: DynArray("MetaSoundDataV0"),
      scriptRef: DynArray("ScriptRefDataV0"),
      triggerKey: DynArray("TriggerKeyDataV0"),
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV1",
    version: 1,
    definitions: {
      AudioSettingsDataV1: {
        category: DynArray("CategoryDataV1"),
        distanceScale: Float32,
        voiceBankFileName: Filename,
        volumeGroup: DynArray("VolumeGroupDataV1")
      },
      CategoryDataV1: {
        attenuation: Pointer("AttenuationDataV1"),
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8,
        muteFadeTime: Float32,
        name: Uint64,
        volumeA: Float32,
        volumeAThreshold: Float32,
        volumeB: Float32,
        volumeBThreshold: Float32,
        volumeChangeRate: Float32,
        volumeDucking: Float32,
        volumeDuckingTimeAttack: Float32,
        volumeDuckingTimeRelease: Float32,
        volumeGroupName: Uint64
      },
      AttenuationDataV1: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV1",
        pan3D: "DynamicParamDataV1",
        spread3D: "DynamicParamDataV1",
        volumeA: "DynamicParamDataV1"
      },
      DynamicParamDataV1: {
        envelopeData: Pointer("EnvelopeDataV1"),
        randomParamData: Pointer("RandomParamDataV1"),
        type: Uint8,
        value: Float32
      },
      EnvelopeDataV1: {
        envelopePoint: DynArray("EnvelopePointDataV1"),
        offsetType: Uint8,
        offsetParameter: Uint64
      },
      EnvelopePointDataV1: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV1: {
        time: "RangeDataV1",
        value: "RangeDataV1"
      },
      RangeDataV1: {
        max: Float32,
        min: Uint8
      },
      VolumeGroupDataV1: {
        flags: Uint32,
        name: Uint64,
        parentName: Uint64,
        volume: Float32
      },
      HandlerDataV1: {
        byteCode: DynArray(Uint8),
        flags: Uint32,
        name: Uint64
      },
      MetaSoundDataV1: {
        attenuation: Pointer("AttenuationDataV1"),
        category: Uint64,
        channelMode: Uint8,
        channelPriority: Uint8,
        depth: "DynamicParamDataV1",
        dsp: DynArray("DspDataV1"),
        endCue: Uint64,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        fileIterateMode: Uint8,
        fileName: DynArray("FileNameDataV1"),
        flags: Uint32,
        initialDelay: "RangeDataV1",
        loopCount: Uint32,
        loopMode: Uint8,
        name: Uint64,
        pan: "DynamicParamDataV1",
        pitch: "DynamicParamDataV1",
        playbackMode: Uint8,
        playLength: "RangeDataV1",
        playlistId: Uint64,
        positionMode: Uint8,
        positionOffset: FixedArray(Float32, 3),
        positionOffsetAngle: "RangeDataV1",
        positionRange: "RangeDataV1",
        repeatCount: "RangeDataV1",
        repeatTime: "RangeDataV1",
        startTimeOffset: "RangeDataV1",
        repeatTimeFrom: Uint8,
        volume: "DynamicParamDataV1"
      },
      DspDataV1: {
        param: DynArray("DynamicParamDataV1"),
        type: Uint8
      },
      FileNameDataV1: {
        audioType: Uint8,
        fileName: Filename,
        language: Uint64,
        weight: Float32
      },
      ScriptRefDataV1: {
        fileName: Filename,
        name: Uint64
      },
      TriggerKeyDataV1: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV1")
      },
      TriggerMarkerDataV1: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      audioSettings: Pointer("AudioSettingsDataV1"),
      fadeInTime: Float32,
      flags: Uint32,
      handler: DynArray("HandlerDataV1"),
      metaSound: DynArray("MetaSoundDataV1"),
      scriptRef: DynArray("ScriptRefDataV1"),
      triggerKey: DynArray("TriggerKeyDataV1"),
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV2",
    version: 2,
    definitions: {
      AudioSettingsDataV2: {
        volumeGroup: DynArray("VolumeGroupDataV2"),
        category: DynArray("CategoryDataV2"),
        distanceScale: Float32,
        voiceBankFileName: Filename
      },
      VolumeGroupDataV2: {
        name: Uint64,
        parentName: Uint64,
        flags: Uint32,
        volume: Float32
      },
      CategoryDataV2: {
        name: Uint64,
        volumeGroupName: Uint64,
        attenuation: Pointer("AttenuationDataV2"),
        muteFadeTime: Float32,
        volumeA: Float32,
        volumeAThreshold: Float32,
        volumeB: Float32,
        volumeBThreshold: Float32,
        volumeChangeRate: Float32,
        volumeDucking: Float32,
        volumeDuckingTimeAttack: Float32,
        volumeDuckingTimeRelease: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV2: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV2",
        pan3D: "DynamicParamDataV2",
        spread3D: "DynamicParamDataV2",
        volumeA: "DynamicParamDataV2"
      },
      DynamicParamDataV2: {
        envelopeData: Pointer("EnvelopeDataV2"),
        randomParamData: Pointer("RandomParamDataV2"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV2: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV2"),
        offsetType: Uint8
      },
      EnvelopePointDataV2: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV2: {
        time: "RangeDataV2",
        value: "RangeDataV2"
      },
      RangeDataV2: {
        max: Float32,
        min: Uint8
      },
      HandlerDataV2: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV2: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV2"),
        attenuation: Pointer("AttenuationDataV2"),
        fileName: DynArray("FileNameDataV2"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV2",
        pan: "DynamicParamDataV2",
        pitch: "DynamicParamDataV2",
        pitchMS: "DynamicParamDataV2",
        volume: "DynamicParamDataV2",
        volumeMS: "DynamicParamDataV2",
        initialDelay: "RangeDataV2",
        playLength: "RangeDataV2",
        positionOffsetAngle: "RangeDataV2",
        positionRange: "RangeDataV2",
        repeatCount: "RangeDataV2",
        repeatTime: "RangeDataV2",
        startTimeOffset: "RangeDataV2",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      DspDataV2: {
        param: DynArray("DynamicParamDataV2"),
        type: Uint8
      },
      FileNameDataV2: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV2: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV2: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV2")
      },
      TriggerMarkerDataV2: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV2"),
      handler: DynArray("HandlerDataV2"),
      metaSound: DynArray("MetaSoundDataV2"),
      scriptRef: DynArray("ScriptRefDataV2"),
      triggerKey: DynArray("TriggerKeyDataV2"),
      flags: Uint32,
      fadeInTime: Float32,
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV3",
    version: 3,
    definitions: {
      AudioSettingsDataV3: {
        volumeGroup: DynArray("VolumeGroupDataV3"),
        category: DynArray("CategoryDataV3"),
        distanceScale: Float32,
        voiceBankFileName: Filename
      },
      VolumeGroupDataV3: {
        name: Uint64,
        parentName: Uint64,
        flags: Uint32,
        volume: Float32
      },
      CategoryDataV3: {
        name: Uint64,
        volumeGroupName: Uint64,
        attenuation: Pointer("AttenuationDataV3"),
        muteFadeTime: Float32,
        volumeA: Float32,
        volumeAThreshold: Float32,
        volumeB: Float32,
        volumeBThreshold: Float32,
        volumeChangeRate: Float32,
        volumeDucking: Float32,
        volumeDuckingTimeAttack: Float32,
        volumeDuckingTimeRelease: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV3: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV3",
        pan3D: "DynamicParamDataV3",
        spread3D: "DynamicParamDataV3",
        volumeA: "DynamicParamDataV3"
      },
      DynamicParamDataV3: {
        envelopeData: Pointer("EnvelopeDataV3"),
        randomParamData: Pointer("RandomParamDataV3"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV3: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV3"),
        offsetType: Uint8
      },
      EnvelopePointDataV3: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV3: {
        time: "RangeDataV3",
        value: "RangeDataV3"
      },
      RangeDataV3: {
        max: Float32,
        min: Uint8
      },
      HandlerDataV3: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV3: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV3"),
        attenuation: Pointer("AttenuationDataV3"),
        fileName: DynArray("FileNameDataV3"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV3",
        pan: "DynamicParamDataV3",
        pitch: "DynamicParamDataV3",
        pitchMS: "DynamicParamDataV3",
        volume: "DynamicParamDataV3",
        volumeMS: "DynamicParamDataV3",
        initialDelay: "RangeDataV3",
        playLength: "RangeDataV3",
        positionOffsetAngle: "RangeDataV3",
        positionRange: "RangeDataV3",
        repeatCount: "RangeDataV3",
        repeatTime: "RangeDataV3",
        startTimeOffset: "RangeDataV3",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      DspDataV3: {
        param: DynArray("DynamicParamDataV3"),
        type: Uint8
      },
      FileNameDataV3: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV3: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV3: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV3")
      },
      TriggerMarkerDataV3: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      endCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV3"),
      handler: DynArray("HandlerDataV3"),
      metaSound: DynArray("MetaSoundDataV3"),
      scriptRef: DynArray("ScriptRefDataV3"),
      triggerKey: DynArray("TriggerKeyDataV3"),
      flags: Uint32,
      fadeInTime: Float32,
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV4",
    version: 4,
    definitions: {
      AudioSettingsDataV4: {
        volumeGroup: DynArray("VolumeGroupDataV4"),
        category: DynArray("CategoryDataV4"),
        distanceScale: Float32,
        bankIndexFileName: Filename,
        bankScriptFileName: Filename
      },
      VolumeGroupDataV4: {
        name: Uint64,
        parentName: Uint64,
        flags: Uint32,
        volume: Float32
      },
      CategoryDataV4: {
        name: Uint64,
        volumeGroupName: Uint64,
        attenuation: Pointer("AttenuationDataV4"),
        muteFadeTime: Float32,
        volumeA: Float32,
        volumeAThreshold: Float32,
        volumeB: Float32,
        volumeBThreshold: Float32,
        volumeChangeRate: Float32,
        volumeDucking: Float32,
        volumeDuckingTimeAttack: Float32,
        volumeDuckingTimeRelease: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV4: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV4",
        pan3D: "DynamicParamDataV4",
        spread3D: "DynamicParamDataV4",
        volumeA: "DynamicParamDataV4"
      },
      DynamicParamDataV4: {
        envelopeData: Pointer("EnvelopeDataV4"),
        randomParamData: Pointer("RandomParamDataV4"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV4: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV4"),
        offsetType: Uint8
      },
      EnvelopePointDataV4: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV4: {
        time: "RangeDataV4",
        value: "RangeDataV4"
      },
      RangeDataV4: {
        max: Float32,
        min: Uint8
      },
      HandlerDataV4: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV4: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV4"),
        attenuation: Pointer("AttenuationDataV4"),
        fileName: DynArray("FileNameDataV4"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV4",
        pan: "DynamicParamDataV4",
        pitch: "DynamicParamDataV4",
        pitchMS: "DynamicParamDataV4",
        volume: "DynamicParamDataV4",
        volumeMS: "DynamicParamDataV4",
        initialDelay: "RangeDataV4",
        playLength: "RangeDataV4",
        positionOffsetAngle: "RangeDataV4",
        positionRange: "RangeDataV4",
        repeatCount: "RangeDataV4",
        repeatTime: "RangeDataV4",
        startTimeOffset: "RangeDataV4",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      DspDataV4: {
        param: DynArray("DynamicParamDataV4"),
        type: Uint8
      },
      FileNameDataV4: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV4: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV4: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV4")
      },
      TriggerMarkerDataV4: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      endCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV4"),
      handler: DynArray("HandlerDataV4"),
      metaSound: DynArray("MetaSoundDataV4"),
      scriptRef: DynArray("ScriptRefDataV4"),
      triggerKey: DynArray("TriggerKeyDataV4"),
      flags: Uint32,
      fadeInTime: Float32,
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV5",
    version: 5,
    definitions: {
      AudioSettingsDataV5: {
        defaultBuss: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        category: DynArray("CategoryDataV5"),
        snapshot: DynArray("SnapshotDataV5"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename
      },
      CategoryDataV5: {
        name: Uint64,
        volumeGroupName: Uint64,
        attenuation: Pointer("AttenuationDataV5"),
        muteFadeTime: Float32,
        volumeA: Float32,
        volumeAThreshold: Float32,
        volumeB: Float32,
        volumeBThreshold: Float32,
        volumeChangeRate: Float32,
        volumeDucking: Float32,
        volumeDuckingTimeAttack: Float32,
        volumeDuckingTimeRelease: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV5: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV5",
        pan3D: "DynamicParamDataV5",
        spread3D: "DynamicParamDataV5",
        volumeA: "DynamicParamDataV5"
      },
      DynamicParamDataV5: {
        envelopeData: Pointer("EnvelopeDataV5"),
        randomParamData: Pointer("RandomParamDataV5"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV5: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV5"),
        offsetType: Uint8
      },
      EnvelopePointDataV5: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV5: {
        time: "RangeDataV5",
        value: "RangeDataV5"
      },
      RangeDataV5: {
        max: Float32,
        min: Uint8
      },
      SnapshotDataV5: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDataV5")
      },
      BussDataV5: {
        name: Uint64,
        output: Uint64,
        flags: Uint32,
        dsp: DynArray("DspDataV5"),
        volume: Float32
      },
      DspDataV5: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      HandlerDataV5: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV5: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV5"),
        attenuation: Pointer("AttenuationDataV5"),
        fileName: DynArray("FileNameDataV5"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV5",
        pan: "DynamicParamDataV5",
        pitch: "DynamicParamDataV5",
        pitchMS: "DynamicParamDataV5",
        volume: "DynamicParamDataV5",
        volumeMS: "DynamicParamDataV5",
        initialDelay: "RangeDataV5",
        playLength: "RangeDataV5",
        positionOffsetAngle: "RangeDataV5",
        positionRange: "RangeDataV5",
        repeatCount: "RangeDataV5",
        repeatTime: "RangeDataV5",
        startTimeOffset: "RangeDataV5",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV5: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV5: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV5: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV5")
      },
      TriggerMarkerDataV5: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      endCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV5"),
      handler: DynArray("HandlerDataV5"),
      metaSound: DynArray("MetaSoundDataV5"),
      scriptRef: DynArray("ScriptRefDataV5"),
      triggerKey: DynArray("TriggerKeyDataV5"),
      flags: Uint32,
      fadeInTime: Float32,
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV6",
    version: 6,
    definitions: {
      AudioSettingsDataV6: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        buss: DynArray("BussDataV6"),
        category: DynArray("CategoryDataV6"),
        snapshot: DynArray("SnapshotDataV6"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename
      },
      BussDataV6: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV6")
      },
      BussDynamicDataV6: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV6")
      },
      DspDataV6: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV6: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV6"),
        muteFadeTime: Float32,
        volumeA: Float32,
        volumeAThreshold: Float32,
        volumeB: Float32,
        volumeBThreshold: Float32,
        volumeChangeRate: Float32,
        volumeDucking: Float32,
        volumeDuckingTimeAttack: Float32,
        volumeDuckingTimeRelease: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV6: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV6",
        pan3D: "DynamicParamDataV6",
        spread3D: "DynamicParamDataV6",
        volumeA: "DynamicParamDataV6"
      },
      DynamicParamDataV6: {
        envelopeData: Pointer("EnvelopeDataV6"),
        randomParamData: Pointer("RandomParamDataV6"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV6: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV6"),
        offsetType: Uint8
      },
      EnvelopePointDataV6: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV6: {
        time: "RangeDataV6",
        value: "RangeDataV6"
      },
      RangeDataV6: {
        max: Float32,
        min: Uint8
      },
      SnapshotDataV6: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV6")
      },
      HandlerDataV6: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV6: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV6"),
        attenuation: Pointer("AttenuationDataV6"),
        fileName: DynArray("FileNameDataV6"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV6",
        pan: "DynamicParamDataV6",
        pitch: "DynamicParamDataV6",
        pitchMS: "DynamicParamDataV6",
        volume: "DynamicParamDataV6",
        volumeMS: "DynamicParamDataV6",
        initialDelay: "RangeDataV6",
        playLength: "RangeDataV6",
        positionOffsetAngle: "RangeDataV6",
        positionRange: "RangeDataV6",
        repeatCount: "RangeDataV6",
        repeatTime: "RangeDataV6",
        startTimeOffset: "RangeDataV6",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV6: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV6: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV6: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV6")
      },
      TriggerMarkerDataV6: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      endCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV6"),
      handler: DynArray("HandlerDataV6"),
      metaSound: DynArray("MetaSoundDataV6"),
      scriptRef: DynArray("ScriptRefDataV6"),
      triggerKey: DynArray("TriggerKeyDataV6"),
      flags: Uint32,
      fadeInTime: Float32,
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV7",
    version: 7,
    definitions: {
      AudioSettingsDataV7: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV7"),
        category: DynArray("CategoryDataV7"),
        snapshot: DynArray("SnapshotDataV7"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename
      },
      BussDataV7: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV7")
      },
      BussDynamicDataV7: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV7")
      },
      DspDataV7: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV7: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV7"),
        dynamicData: Pointer("CategoryDynamicDataV7"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV7: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV7",
        pan3D: "DynamicParamDataV7",
        spread3D: "DynamicParamDataV7",
        volumeA: "DynamicParamDataV7",
        volumeB: "DynamicParamDataV7"
      },
      DynamicParamDataV7: {
        envelopeData: Pointer("EnvelopeDataV7"),
        randomParamData: Pointer("RandomParamDataV7"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV7: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV7"),
        offsetType: Uint8
      },
      EnvelopePointDataV7: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV7: {
        time: "RangeDataV7",
        value: "RangeDataV7"
      },
      RangeDataV7: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV7: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        flags: Uint32
      },
      SnapshotDataV7: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV7"),
        category: DynArray("CategoryDynamicDataV7")
      },
      HandlerDataV7: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV7: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV7"),
        attenuation: Pointer("AttenuationDataV7"),
        fileName: DynArray("FileNameDataV7"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV7",
        pan: "DynamicParamDataV7",
        pitch: "DynamicParamDataV7",
        pitchMS: "DynamicParamDataV7",
        volume: "DynamicParamDataV7",
        volumeMS: "DynamicParamDataV7",
        initialDelay: "RangeDataV7",
        playLength: "RangeDataV7",
        positionOffsetAngle: "RangeDataV7",
        positionRange: "RangeDataV7",
        repeatCount: "RangeDataV7",
        repeatTime: "RangeDataV7",
        startTimeOffset: "RangeDataV7",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV7: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV7: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV7: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV7")
      },
      TriggerMarkerDataV7: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      endCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV7"),
      handler: DynArray("HandlerDataV7"),
      metaSound: DynArray("MetaSoundDataV7"),
      scriptRef: DynArray("ScriptRefDataV7"),
      triggerKey: DynArray("TriggerKeyDataV7"),
      flags: Uint32,
      fadeInTime: Float32,
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV8",
    version: 8,
    definitions: {
      AudioSettingsDataV8: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV8"),
        category: DynArray("CategoryDataV8"),
        reverb: DynArray("ReverbDataV8"),
        snapshot: DynArray("SnapshotDataV8"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename
      },
      BussDataV8: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV8")
      },
      BussDynamicDataV8: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV8")
      },
      DspDataV8: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV8: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV8"),
        dynamicData: Pointer("CategoryDynamicDataV8"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV8: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV8",
        pan3D: "DynamicParamDataV8",
        spread3D: "DynamicParamDataV8",
        volumeA: "DynamicParamDataV8",
        volumeB: "DynamicParamDataV8"
      },
      DynamicParamDataV8: {
        envelopeData: Pointer("EnvelopeDataV8"),
        randomParamData: Pointer("RandomParamDataV8"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV8: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV8"),
        offsetType: Uint8
      },
      EnvelopePointDataV8: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV8: {
        time: "RangeDataV8",
        value: "RangeDataV8"
      },
      RangeDataV8: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV8: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV8: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32
      },
      SnapshotDataV8: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV8"),
        category: DynArray("CategoryDynamicDataV8")
      },
      HandlerDataV8: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV8: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV8"),
        attenuation: Pointer("AttenuationDataV8"),
        fileName: DynArray("FileNameDataV8"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV8",
        pan: "DynamicParamDataV8",
        pitch: "DynamicParamDataV8",
        pitchMS: "DynamicParamDataV8",
        volume: "DynamicParamDataV8",
        volumeMS: "DynamicParamDataV8",
        initialDelay: "RangeDataV8",
        playLength: "RangeDataV8",
        positionOffsetAngle: "RangeDataV8",
        positionRange: "RangeDataV8",
        repeatCount: "RangeDataV8",
        repeatTime: "RangeDataV8",
        startTimeOffset: "RangeDataV8",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV8: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV8: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV8: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV8")
      },
      TriggerMarkerDataV8: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      endCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV8"),
      handler: DynArray("HandlerDataV8"),
      metaSound: DynArray("MetaSoundDataV8"),
      scriptRef: DynArray("ScriptRefDataV8"),
      triggerKey: DynArray("TriggerKeyDataV8"),
      flags: Uint32,
      fadeInTime: Float32,
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV9",
    version: 9,
    definitions: {
      AudioSettingsDataV9: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV9"),
        category: DynArray("CategoryDataV9"),
        reverb: DynArray("ReverbDataV9"),
        snapshot: DynArray("SnapshotDataV9"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename
      },
      BussDataV9: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV9")
      },
      BussDynamicDataV9: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV9")
      },
      DspDataV9: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV9: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        soundPoolCategory: Uint64,
        attenuation: Pointer("AttenuationDataV9"),
        dynamicData: Pointer("CategoryDynamicDataV9"),
        muteFadeTime: Float32,
        soundPoolDelay: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        soundPoolCount: Uint32,
        maxAudibleBehavior: Uint8,
        soundPoolCountBehavior: Uint8,
        soundPoolMode: Uint8
      },
      AttenuationDataV9: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV9",
        pan3D: "DynamicParamDataV9",
        spread3D: "DynamicParamDataV9",
        volumeA: "DynamicParamDataV9",
        volumeB: "DynamicParamDataV9"
      },
      DynamicParamDataV9: {
        envelopeData: Pointer("EnvelopeDataV9"),
        randomParamData: Pointer("RandomParamDataV9"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV9: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV9"),
        offsetType: Uint8
      },
      EnvelopePointDataV9: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV9: {
        time: "RangeDataV9",
        value: "RangeDataV9"
      },
      RangeDataV9: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV9: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV9: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32
      },
      SnapshotDataV9: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV9"),
        category: DynArray("CategoryDynamicDataV9")
      },
      HandlerDataV9: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV9: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV9"),
        attenuation: Pointer("AttenuationDataV9"),
        fileName: DynArray("FileNameDataV9"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV9",
        pan: "DynamicParamDataV9",
        pitch: "DynamicParamDataV9",
        pitchMS: "DynamicParamDataV9",
        volume: "DynamicParamDataV9",
        volumeMS: "DynamicParamDataV9",
        initialDelay: "RangeDataV9",
        playLength: "RangeDataV9",
        positionOffsetAngle: "RangeDataV9",
        positionRange: "RangeDataV9",
        repeatCount: "RangeDataV9",
        repeatTime: "RangeDataV9",
        startTimeOffset: "RangeDataV9",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV9: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV9: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV9: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV9")
      },
      TriggerMarkerDataV9: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      endCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV9"),
      handler: DynArray("HandlerDataV9"),
      metaSound: DynArray("MetaSoundDataV9"),
      scriptRef: DynArray("ScriptRefDataV9"),
      triggerKey: DynArray("TriggerKeyDataV9"),
      flags: Uint32,
      fadeInTime: Float32,
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV10",
    version: 10,
    definitions: {
      AudioSettingsDataV10: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV10"),
        category: DynArray("CategoryDataV10"),
        reverb: DynArray("ReverbDataV10"),
        snapshot: DynArray("SnapshotDataV10"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename
      },
      BussDataV10: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV10")
      },
      BussDynamicDataV10: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV10")
      },
      DspDataV10: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV10: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV10"),
        dynamicData: Pointer("CategoryDynamicDataV10"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV10: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV10",
        pan3D: "DynamicParamDataV10",
        spread3D: "DynamicParamDataV10",
        volumeA: "DynamicParamDataV10",
        volumeB: "DynamicParamDataV10"
      },
      DynamicParamDataV10: {
        envelopeData: Pointer("EnvelopeDataV10"),
        randomParamData: Pointer("RandomParamDataV10"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV10: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV10"),
        offsetType: Uint8
      },
      EnvelopePointDataV10: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV10: {
        time: "RangeDataV10",
        value: "RangeDataV10"
      },
      RangeDataV10: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV10: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV10: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32
      },
      SnapshotDataV10: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV10"),
        category: DynArray("CategoryDynamicDataV10")
      },
      HandlerDataV10: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV10: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV10"),
        attenuation: Pointer("AttenuationDataV10"),
        fileName: DynArray("FileNameDataV10"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV10",
        pan: "DynamicParamDataV10",
        pitch: "DynamicParamDataV10",
        pitchMS: "DynamicParamDataV10",
        volume: "DynamicParamDataV10",
        volumeMS: "DynamicParamDataV10",
        initialDelay: "RangeDataV10",
        playLength: "RangeDataV10",
        positionOffsetAngle: "RangeDataV10",
        positionRange: "RangeDataV10",
        repeatCount: "RangeDataV10",
        repeatTime: "RangeDataV10",
        startTimeOffset: "RangeDataV10",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV10: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV10: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV10: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV10")
      },
      TriggerMarkerDataV10: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV10"),
      handler: DynArray("HandlerDataV10"),
      metaSound: DynArray("MetaSoundDataV10"),
      scriptRef: DynArray("ScriptRefDataV10"),
      triggerKey: DynArray("TriggerKeyDataV10"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV11",
    version: 11,
    definitions: {
      AudioSettingsDataV11: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV11"),
        category: DynArray("CategoryDataV11"),
        reverb: DynArray("ReverbDataV11"),
        snapshot: DynArray("SnapshotDataV11"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV11: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV11")
      },
      BussDynamicDataV11: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV11")
      },
      DspDataV11: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV11: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV11"),
        dynamicData: Pointer("CategoryDynamicDataV11"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV11: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV11",
        pan3D: "DynamicParamDataV11",
        spread3D: "DynamicParamDataV11",
        volumeA: "DynamicParamDataV11",
        volumeB: "DynamicParamDataV11"
      },
      DynamicParamDataV11: {
        envelopeData: Pointer("EnvelopeDataV11"),
        randomParamData: Pointer("RandomParamDataV11"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV11: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV11"),
        offsetType: Uint8
      },
      EnvelopePointDataV11: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV11: {
        time: "RangeDataV11",
        value: "RangeDataV11"
      },
      RangeDataV11: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV11: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV11: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32
      },
      SnapshotDataV11: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV11"),
        category: DynArray("CategoryDynamicDataV11")
      },
      HandlerDataV11: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV11: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV11"),
        attenuation: Pointer("AttenuationDataV11"),
        fileName: DynArray("FileNameDataV11"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV11",
        pan: "DynamicParamDataV11",
        pitch: "DynamicParamDataV11",
        pitchMS: "DynamicParamDataV11",
        volume: "DynamicParamDataV11",
        volumeMS: "DynamicParamDataV11",
        initialDelay: "RangeDataV11",
        playLength: "RangeDataV11",
        positionOffsetAngle: "RangeDataV11",
        positionRange: "RangeDataV11",
        repeatCount: "RangeDataV11",
        repeatTime: "RangeDataV11",
        startTimeOffset: "RangeDataV11",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV11: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV11: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV11: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV11")
      },
      TriggerMarkerDataV11: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV11"),
      handler: DynArray("HandlerDataV11"),
      metaSound: DynArray("MetaSoundDataV11"),
      scriptRef: DynArray("ScriptRefDataV11"),
      triggerKey: DynArray("TriggerKeyDataV11"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV12",
    version: 12,
    definitions: {
      AudioSettingsDataV12: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV12"),
        category: DynArray("CategoryDataV12"),
        reverb: DynArray("ReverbDataV12"),
        snapshot: DynArray("SnapshotDataV12"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV12: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV12")
      },
      BussDynamicDataV12: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV12")
      },
      DspDataV12: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV12: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV12"),
        dynamicData: Pointer("CategoryDynamicDataV12"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV12: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV12",
        pan3D: "DynamicParamDataV12",
        spread3D: "DynamicParamDataV12",
        volumeA: "DynamicParamDataV12",
        volumeB: "DynamicParamDataV12"
      },
      DynamicParamDataV12: {
        envelopeData: Pointer("EnvelopeDataV12"),
        randomParamData: Pointer("RandomParamDataV12"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV12: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV12"),
        offsetType: Uint8
      },
      EnvelopePointDataV12: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV12: {
        time: "RangeDataV12",
        value: "RangeDataV12"
      },
      RangeDataV12: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV12: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV12: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32
      },
      SnapshotDataV12: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV12"),
        category: DynArray("CategoryDynamicDataV12")
      },
      HandlerDataV12: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV12: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV12"),
        attenuation: Pointer("AttenuationDataV12"),
        fileName: DynArray("FileNameDataV12"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV12",
        pan: "DynamicParamDataV12",
        pitch: "DynamicParamDataV12",
        pitchMS: "DynamicParamDataV12",
        volume: "DynamicParamDataV12",
        volumeMS: "DynamicParamDataV12",
        initialDelay: "RangeDataV12",
        playLength: "RangeDataV12",
        positionOffsetAngle: "RangeDataV12",
        positionRange: "RangeDataV12",
        repeatCount: "RangeDataV12",
        repeatTime: "RangeDataV12",
        startTimeOffset: "RangeDataV12",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV12: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV12: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV12: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV12")
      },
      TriggerMarkerDataV12: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      audioSettings: Pointer("AudioSettingsDataV12"),
      handler: DynArray("HandlerDataV12"),
      metaSound: DynArray("MetaSoundDataV12"),
      scriptRef: DynArray("ScriptRefDataV12"),
      triggerKey: DynArray("TriggerKeyDataV12"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV13",
    version: 13,
    definitions: {
      AudioSettingsDataV13: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV13"),
        category: DynArray("CategoryDataV13"),
        reverb: DynArray("ReverbDataV13"),
        snapshot: DynArray("SnapshotDataV13"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV13: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV13")
      },
      BussDynamicDataV13: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV13")
      },
      DspDataV13: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV13: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV13"),
        dynamicData: Pointer("CategoryDynamicDataV13"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV13: {
        coneInsideAngle: Float32,
        coneOutsideAngle: Float32,
        coneOutsideVolume: Float32,
        lowPass: "DynamicParamDataV13",
        pan3D: "DynamicParamDataV13",
        spread3D: "DynamicParamDataV13",
        volumeA: "DynamicParamDataV13",
        volumeB: "DynamicParamDataV13"
      },
      DynamicParamDataV13: {
        envelopeData: Pointer("EnvelopeDataV13"),
        randomParamData: Pointer("RandomParamDataV13"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV13: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV13"),
        offsetType: Uint8
      },
      EnvelopePointDataV13: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV13: {
        time: "RangeDataV13",
        value: "RangeDataV13"
      },
      RangeDataV13: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV13: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV13: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32
      },
      SnapshotDataV13: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV13"),
        category: DynArray("CategoryDynamicDataV13")
      },
      HandlerDataV13: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV13: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV13"),
        attenuation: Pointer("AttenuationDataV13"),
        fileName: DynArray("FileNameDataV13"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV13",
        pan: "DynamicParamDataV13",
        pitch: "DynamicParamDataV13",
        pitchMS: "DynamicParamDataV13",
        volume: "DynamicParamDataV13",
        volumeMS: "DynamicParamDataV13",
        initialDelay: "RangeDataV13",
        playLength: "RangeDataV13",
        positionOffsetAngle: "RangeDataV13",
        positionRange: "RangeDataV13",
        repeatCount: "RangeDataV13",
        repeatTime: "RangeDataV13",
        startTimeOffset: "RangeDataV13",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV13: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV13: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV13: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV13")
      },
      TriggerMarkerDataV13: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      audioSettings: Pointer("AudioSettingsDataV13"),
      handler: DynArray("HandlerDataV13"),
      metaSound: DynArray("MetaSoundDataV13"),
      scriptRef: DynArray("ScriptRefDataV13"),
      triggerKey: DynArray("TriggerKeyDataV13"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV14",
    version: 14,
    definitions: {
      AudioSettingsDataV14: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV14"),
        category: DynArray("CategoryDataV14"),
        reverb: DynArray("ReverbDataV14"),
        snapshot: DynArray("SnapshotDataV14"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV14: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV14")
      },
      BussDynamicDataV14: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV14")
      },
      DspDataV14: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV14: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV14"),
        dynamicData: Pointer("CategoryDynamicDataV14"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV14: {
        doppler: Float32,
        lowPass: "DynamicParamDataV14",
        pan3D: "DynamicParamDataV14",
        spread3D: "DynamicParamDataV14",
        volumeA: "DynamicParamDataV14",
        volumeB: "DynamicParamDataV14"
      },
      DynamicParamDataV14: {
        envelopeData: Pointer("EnvelopeDataV14"),
        randomParamData: Pointer("RandomParamDataV14"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV14: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV14"),
        offsetType: Uint8
      },
      EnvelopePointDataV14: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV14: {
        time: "RangeDataV14",
        value: "RangeDataV14"
      },
      RangeDataV14: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV14: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV14: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32
      },
      SnapshotDataV14: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV14"),
        category: DynArray("CategoryDynamicDataV14")
      },
      HandlerDataV14: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV14: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV14"),
        attenuation: Pointer("AttenuationDataV14"),
        fileName: DynArray("FileNameDataV14"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV14",
        pan: "DynamicParamDataV14",
        pitch: "DynamicParamDataV14",
        pitchMS: "DynamicParamDataV14",
        volume: "DynamicParamDataV14",
        volumeMS: "DynamicParamDataV14",
        initialDelay: "RangeDataV14",
        playLength: "RangeDataV14",
        positionOffsetAngle: "RangeDataV14",
        positionRange: "RangeDataV14",
        repeatCount: "RangeDataV14",
        repeatTime: "RangeDataV14",
        startTimeOffset: "RangeDataV14",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV14: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV14: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV14: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV14")
      },
      TriggerMarkerDataV14: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      audioSettings: Pointer("AudioSettingsDataV14"),
      handler: DynArray("HandlerDataV14"),
      metaSound: DynArray("MetaSoundDataV14"),
      scriptRef: DynArray("ScriptRefDataV14"),
      triggerKey: DynArray("TriggerKeyDataV14"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV15",
    version: 15,
    definitions: {
      AudioSettingsDataV15: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV15"),
        category: DynArray("CategoryDataV15"),
        reverb: DynArray("ReverbDataV15"),
        snapshot: DynArray("SnapshotDataV15"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV15: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV15")
      },
      BussDynamicDataV15: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV15")
      },
      DspDataV15: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV15: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV15"),
        dynamicData: Pointer("CategoryDynamicDataV15"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV15: {
        doppler: Float32,
        lowPass: "DynamicParamDataV15",
        pan3D: "DynamicParamDataV15",
        reverb: "DynamicParamDataV15",
        spread3D: "DynamicParamDataV15",
        volumeA: "DynamicParamDataV15",
        volumeB: "DynamicParamDataV15"
      },
      DynamicParamDataV15: {
        envelopeData: Pointer("EnvelopeDataV15"),
        randomParamData: Pointer("RandomParamDataV15"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV15: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV15"),
        offsetType: Uint8
      },
      EnvelopePointDataV15: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV15: {
        time: "RangeDataV15",
        value: "RangeDataV15"
      },
      RangeDataV15: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV15: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV15: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32
      },
      SnapshotDataV15: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV15"),
        category: DynArray("CategoryDynamicDataV15")
      },
      HandlerDataV15: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV15: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV15"),
        attenuation: Pointer("AttenuationDataV15"),
        fileName: DynArray("FileNameDataV15"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV15",
        pan: "DynamicParamDataV15",
        pitch: "DynamicParamDataV15",
        pitchMS: "DynamicParamDataV15",
        volume: "DynamicParamDataV15",
        volumeMS: "DynamicParamDataV15",
        initialDelay: "RangeDataV15",
        playLength: "RangeDataV15",
        positionOffsetAngle: "RangeDataV15",
        positionRange: "RangeDataV15",
        repeatCount: "RangeDataV15",
        repeatTime: "RangeDataV15",
        startTimeOffset: "RangeDataV15",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV15: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV15: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV15: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV15")
      },
      TriggerMarkerDataV15: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      audioSettings: Pointer("AudioSettingsDataV15"),
      handler: DynArray("HandlerDataV15"),
      metaSound: DynArray("MetaSoundDataV15"),
      scriptRef: DynArray("ScriptRefDataV15"),
      triggerKey: DynArray("TriggerKeyDataV15"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV16",
    version: 16,
    definitions: {
      AudioSettingsDataV16: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV16"),
        category: DynArray("CategoryDataV16"),
        reverb: DynArray("ReverbDataV16"),
        snapshot: DynArray("SnapshotDataV16"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV16: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV16")
      },
      BussDynamicDataV16: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV16")
      },
      DspDataV16: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV16: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV16"),
        dynamicData: Pointer("CategoryDynamicDataV16"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV16: {
        doppler: Float32,
        lowPass: "DynamicParamDataV16",
        pan3D: "DynamicParamDataV16",
        reverb: "DynamicParamDataV16",
        spread3D: "DynamicParamDataV16",
        volumeA: "DynamicParamDataV16",
        volumeB: "DynamicParamDataV16"
      },
      DynamicParamDataV16: {
        envelopeData: Pointer("EnvelopeDataV16"),
        randomParamData: Pointer("RandomParamDataV16"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV16: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV16"),
        offsetType: Uint8
      },
      EnvelopePointDataV16: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV16: {
        time: "RangeDataV16",
        value: "RangeDataV16"
      },
      RangeDataV16: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV16: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV16: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV16: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV16"),
        category: DynArray("CategoryDynamicDataV16")
      },
      HandlerDataV16: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV16: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV16"),
        attenuation: Pointer("AttenuationDataV16"),
        fileName: DynArray("FileNameDataV16"),
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV16",
        pan: "DynamicParamDataV16",
        pitch: "DynamicParamDataV16",
        pitchMS: "DynamicParamDataV16",
        volume: "DynamicParamDataV16",
        volumeMS: "DynamicParamDataV16",
        initialDelay: "RangeDataV16",
        playLength: "RangeDataV16",
        positionOffsetAngle: "RangeDataV16",
        positionRange: "RangeDataV16",
        repeatCount: "RangeDataV16",
        repeatTime: "RangeDataV16",
        startTimeOffset: "RangeDataV16",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV16: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV16: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV16: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV16")
      },
      TriggerMarkerDataV16: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      audioSettings: Pointer("AudioSettingsDataV16"),
      handler: DynArray("HandlerDataV16"),
      metaSound: DynArray("MetaSoundDataV16"),
      scriptRef: DynArray("ScriptRefDataV16"),
      triggerKey: DynArray("TriggerKeyDataV16"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV17",
    version: 17,
    definitions: {
      AudioSettingsDataV17: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV17"),
        category: DynArray("CategoryDataV17"),
        reverb: DynArray("ReverbDataV17"),
        snapshot: DynArray("SnapshotDataV17"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV17: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV17")
      },
      BussDynamicDataV17: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV17")
      },
      DspDataV17: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV17: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV17"),
        dynamicData: Pointer("CategoryDynamicDataV17"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV17: {
        doppler: Float32,
        lowPass: "DynamicParamDataV17",
        pan3D: "DynamicParamDataV17",
        reverb: "DynamicParamDataV17",
        spread3D: "DynamicParamDataV17",
        volumeA: "DynamicParamDataV17",
        volumeB: "DynamicParamDataV17"
      },
      DynamicParamDataV17: {
        envelopeData: Pointer("EnvelopeDataV17"),
        randomParamData: Pointer("RandomParamDataV17"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV17: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV17"),
        offsetType: Uint8
      },
      EnvelopePointDataV17: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV17: {
        time: "RangeDataV17",
        value: "RangeDataV17"
      },
      RangeDataV17: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV17: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV17: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV17: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV17"),
        category: DynArray("CategoryDynamicDataV17")
      },
      HandlerDataV17: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV17: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV17"),
        attenuation: Pointer("AttenuationDataV17"),
        fileName: DynArray("FileNameDataV17"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV17",
        pan: "DynamicParamDataV17",
        pitch: "DynamicParamDataV17",
        pitchMS: "DynamicParamDataV17",
        volume: "DynamicParamDataV17",
        volumeMS: "DynamicParamDataV17",
        initialDelay: "RangeDataV17",
        playLength: "RangeDataV17",
        positionOffsetAngle: "RangeDataV17",
        positionRange: "RangeDataV17",
        repeatCount: "RangeDataV17",
        repeatTime: "RangeDataV17",
        startTimeOffset: "RangeDataV17",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV17: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV17: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV17: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV17")
      },
      TriggerMarkerDataV17: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      audioSettings: Pointer("AudioSettingsDataV17"),
      handler: DynArray("HandlerDataV17"),
      metaSound: DynArray("MetaSoundDataV17"),
      scriptRef: DynArray("ScriptRefDataV17"),
      triggerKey: DynArray("TriggerKeyDataV17"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV18",
    version: 18,
    definitions: {
      AudioSettingsDataV18: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV18"),
        category: DynArray("CategoryDataV18"),
        reverb: DynArray("ReverbDataV18"),
        snapshot: DynArray("SnapshotDataV18"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV18: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV18")
      },
      BussDynamicDataV18: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV18")
      },
      DspDataV18: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV18: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV18"),
        dynamicData: Pointer("CategoryDynamicDataV18"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV18: {
        doppler: Float32,
        lowPass: "DynamicParamDataV18",
        pan3D: "DynamicParamDataV18",
        reverb: "DynamicParamDataV18",
        spread3D: "DynamicParamDataV18",
        volumeA: "DynamicParamDataV18",
        volumeB: "DynamicParamDataV18"
      },
      DynamicParamDataV18: {
        envelopeData: Pointer("EnvelopeDataV18"),
        randomParamData: Pointer("RandomParamDataV18"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV18: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV18"),
        offsetType: Uint8
      },
      EnvelopePointDataV18: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV18: {
        time: "RangeDataV18",
        value: "RangeDataV18"
      },
      RangeDataV18: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV18: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV18: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV18: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV18"),
        category: DynArray("CategoryDynamicDataV18")
      },
      HandlerDataV18: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV18: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV18"),
        attenuation: Pointer("AttenuationDataV18"),
        fileName: DynArray("FileNameDataV18"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV18",
        pan: "DynamicParamDataV18",
        pitch: "DynamicParamDataV18",
        pitchMS: "DynamicParamDataV18",
        volume: "DynamicParamDataV18",
        volumeMS: "DynamicParamDataV18",
        initialDelay: "RangeDataV18",
        playLength: "RangeDataV18",
        positionOffsetAngle: "RangeDataV18",
        positionRange: "RangeDataV18",
        repeatCount: "RangeDataV18",
        repeatTime: "RangeDataV18",
        startTimeOffset: "RangeDataV18",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV18: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV18: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV18: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV18")
      },
      TriggerMarkerDataV18: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      audioSettings: Pointer("AudioSettingsDataV18"),
      handler: DynArray("HandlerDataV18"),
      metaSound: DynArray("MetaSoundDataV18"),
      scriptRef: DynArray("ScriptRefDataV18"),
      triggerKey: DynArray("TriggerKeyDataV18"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV19",
    version: 19,
    definitions: {
      AudioSettingsDataV19: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV19"),
        category: DynArray("CategoryDataV19"),
        reverb: DynArray("ReverbDataV19"),
        snapshot: DynArray("SnapshotDataV19"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV19: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV19")
      },
      BussDynamicDataV19: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV19")
      },
      DspDataV19: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV19: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV19"),
        dynamicData: Pointer("CategoryDynamicDataV19"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV19: {
        doppler: Float32,
        lowPass: "DynamicParamDataV19",
        pan3D: "DynamicParamDataV19",
        reverb: "DynamicParamDataV19",
        spread3D: "DynamicParamDataV19",
        volumeA: "DynamicParamDataV19",
        volumeB: "DynamicParamDataV19"
      },
      DynamicParamDataV19: {
        envelopeData: Pointer("EnvelopeDataV19"),
        randomParamData: Pointer("RandomParamDataV19"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV19: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV19"),
        offsetType: Uint8
      },
      EnvelopePointDataV19: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV19: {
        time: "RangeDataV19",
        value: "RangeDataV19"
      },
      RangeDataV19: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV19: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV19: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV19: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV19"),
        category: DynArray("CategoryDynamicDataV19"),
        priority: Uint8
      },
      HandlerDataV19: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV19: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV19"),
        attenuation: Pointer("AttenuationDataV19"),
        fileName: DynArray("FileNameDataV19"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV19",
        pan: "DynamicParamDataV19",
        pitch: "DynamicParamDataV19",
        pitchMS: "DynamicParamDataV19",
        volume: "DynamicParamDataV19",
        volumeMS: "DynamicParamDataV19",
        initialDelay: "RangeDataV19",
        playLength: "RangeDataV19",
        positionOffsetAngle: "RangeDataV19",
        positionRange: "RangeDataV19",
        repeatCount: "RangeDataV19",
        repeatTime: "RangeDataV19",
        startTimeOffset: "RangeDataV19",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV19: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV19: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV19: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV19")
      },
      TriggerMarkerDataV19: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      audioSettings: Pointer("AudioSettingsDataV19"),
      handler: DynArray("HandlerDataV19"),
      metaSound: DynArray("MetaSoundDataV19"),
      scriptRef: DynArray("ScriptRefDataV19"),
      triggerKey: DynArray("TriggerKeyDataV19"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV20",
    version: 20,
    definitions: {
      AudioSettingsDataV20: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV20"),
        category: DynArray("CategoryDataV20"),
        reverb: DynArray("ReverbDataV20"),
        snapshot: DynArray("SnapshotDataV20"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV20: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV20")
      },
      BussDynamicDataV20: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV20")
      },
      DspDataV20: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV20: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV20"),
        dynamicData: Pointer("CategoryDynamicDataV20"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV20: {
        doppler: Float32,
        lowPass: "DynamicParamDataV20",
        pan3D: "DynamicParamDataV20",
        reverb: "DynamicParamDataV20",
        spread3D: "DynamicParamDataV20",
        volumeA: "DynamicParamDataV20",
        volumeB: "DynamicParamDataV20"
      },
      DynamicParamDataV20: {
        envelopeData: Pointer("EnvelopeDataV20"),
        randomParamData: Pointer("RandomParamDataV20"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV20: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV20"),
        offsetType: Uint8
      },
      EnvelopePointDataV20: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV20: {
        time: "RangeDataV20",
        value: "RangeDataV20"
      },
      RangeDataV20: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV20: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      ReverbDataV20: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV20: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV20"),
        category: DynArray("CategoryDynamicDataV20"),
        priority: Uint8
      },
      HandlerDataV20: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV20: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV20"),
        attenuation: Pointer("AttenuationDataV20"),
        fileName: DynArray("FileNameDataV20"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV20",
        pan: "DynamicParamDataV20",
        pitch: "DynamicParamDataV20",
        pitchMS: "DynamicParamDataV20",
        volume: "DynamicParamDataV20",
        volumeMS: "DynamicParamDataV20",
        initialDelay: "RangeDataV20",
        playLength: "RangeDataV20",
        positionOffsetAngle: "RangeDataV20",
        positionRange: "RangeDataV20",
        repeatCount: "RangeDataV20",
        repeatTime: "RangeDataV20",
        startTimeOffset: "RangeDataV20",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      FileNameDataV20: {
        language: Uint64,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ScriptRefDataV20: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV20: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV20")
      },
      TriggerMarkerDataV20: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      snapshot: Uint64,
      audioSettings: Pointer("AudioSettingsDataV20"),
      handler: DynArray("HandlerDataV20"),
      metaSound: DynArray("MetaSoundDataV20"),
      scriptRef: DynArray("ScriptRefDataV20"),
      triggerKey: DynArray("TriggerKeyDataV20"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV21",
    version: 21,
    definitions: {
      AudioSettingsDataV21: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV21"),
        category: DynArray("CategoryDataV21"),
        musicCondition: DynArray("MusicConditionDataV21"),
        musicPlaylist: DynArray("MusicPlaylistDataV21"),
        reverb: DynArray("ReverbDataV21"),
        snapshot: DynArray("SnapshotDataV21"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV21: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV21")
      },
      BussDynamicDataV21: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV21")
      },
      DspDataV21: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV21: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV21"),
        dynamicData: Pointer("CategoryDynamicDataV21"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV21: {
        doppler: Float32,
        lowPass: "DynamicParamDataV21",
        pan3D: "DynamicParamDataV21",
        reverb: "DynamicParamDataV21",
        spread3D: "DynamicParamDataV21",
        volumeA: "DynamicParamDataV21",
        volumeB: "DynamicParamDataV21"
      },
      DynamicParamDataV21: {
        envelopeData: Pointer("EnvelopeDataV21"),
        randomParamData: Pointer("RandomParamDataV21"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV21: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV21"),
        offsetType: Uint8
      },
      EnvelopePointDataV21: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV21: {
        time: "RangeDataV21",
        value: "RangeDataV21"
      },
      RangeDataV21: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV21: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      MusicConditionDataV21: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MusicPlaylistDataV21: {
        category: Uint64,
        name: Uint64,
        primaryPlaylistId: Uint64,
        secondaryPlaylistId: Uint64,
        fileName: DynArray("FileNameDataV21"),
        fadeInTime: Float32,
        fadeOutTime: Float32,
        flags: Uint32,
        initialSilence: "RangeDataV21",
        intervalSilence: "RangeDataV21",
        maxPlayLength: "RangeDataV21",
        volume: "DynamicParamDataV21",
        fileIterateMode: Uint8
      },
      FileNameDataV21: {
        condition: Uint64,
        language: Uint64,
        volume: Float32,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ReverbDataV21: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV21: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV21"),
        category: DynArray("CategoryDynamicDataV21"),
        priority: Uint8
      },
      HandlerDataV21: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV21: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV21"),
        attenuation: Pointer("AttenuationDataV21"),
        fileName: DynArray("FileNameDataV21"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV21",
        pan: "DynamicParamDataV21",
        pitch: "DynamicParamDataV21",
        pitchMS: "DynamicParamDataV21",
        volume: "DynamicParamDataV21",
        volumeMS: "DynamicParamDataV21",
        initialDelay: "RangeDataV21",
        playLength: "RangeDataV21",
        positionOffsetAngle: "RangeDataV21",
        positionRange: "RangeDataV21",
        repeatCount: "RangeDataV21",
        repeatTime: "RangeDataV21",
        startTimeOffset: "RangeDataV21",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      ScriptRefDataV21: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV21: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV21")
      },
      TriggerMarkerDataV21: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      snapshot: Uint64,
      audioSettings: Pointer("AudioSettingsDataV21"),
      handler: DynArray("HandlerDataV21"),
      metaSound: DynArray("MetaSoundDataV21"),
      scriptRef: DynArray("ScriptRefDataV21"),
      triggerKey: DynArray("TriggerKeyDataV21"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV22",
    version: 22,
    definitions: {
      AudioSettingsDataV22: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV22"),
        category: DynArray("CategoryDataV22"),
        musicCondition: DynArray("MusicConditionDataV22"),
        musicPlaylist: DynArray("MusicPlaylistDataV22"),
        reverb: DynArray("ReverbDataV22"),
        snapshot: DynArray("SnapshotDataV22"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV22: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV22")
      },
      BussDynamicDataV22: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV22")
      },
      DspDataV22: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV22: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV22"),
        dynamicData: Pointer("CategoryDynamicDataV22"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV22: {
        doppler: Float32,
        lowPass: "DynamicParamDataV22",
        highPass: "DynamicParamDataV22",
        pan3D: "DynamicParamDataV22",
        reverb: "DynamicParamDataV22",
        spread3D: "DynamicParamDataV22",
        volumeA: "DynamicParamDataV22",
        volumeB: "DynamicParamDataV22"
      },
      DynamicParamDataV22: {
        envelopeData: Pointer("EnvelopeDataV22"),
        randomParamData: Pointer("RandomParamDataV22"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV22: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV22"),
        offsetType: Uint8
      },
      EnvelopePointDataV22: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV22: {
        time: "RangeDataV22",
        value: "RangeDataV22"
      },
      RangeDataV22: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV22: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        highPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      MusicConditionDataV22: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MusicPlaylistDataV22: {
        category: Uint64,
        name: Uint64,
        primaryPlaylistId: Uint64,
        secondaryPlaylistId: Uint64,
        fileName: DynArray("FileNameDataV22"),
        fadeInTime: Float32,
        fadeOutTime: Float32,
        flags: Uint32,
        initialSilence: "RangeDataV22",
        intervalSilence: "RangeDataV22",
        maxPlayLength: "RangeDataV22",
        volume: "DynamicParamDataV22",
        fileIterateMode: Uint8
      },
      FileNameDataV22: {
        condition: Uint64,
        language: Uint64,
        volume: Float32,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ReverbDataV22: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV22: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV22"),
        category: DynArray("CategoryDynamicDataV22"),
        priority: Uint8
      },
      HandlerDataV22: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV22: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV22"),
        attenuation: Pointer("AttenuationDataV22"),
        fileName: DynArray("FileNameDataV22"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV22",
        pan: "DynamicParamDataV22",
        pitch: "DynamicParamDataV22",
        pitchMS: "DynamicParamDataV22",
        volume: "DynamicParamDataV22",
        volumeMS: "DynamicParamDataV22",
        initialDelay: "RangeDataV22",
        playLength: "RangeDataV22",
        positionOffsetAngle: "RangeDataV22",
        positionRange: "RangeDataV22",
        repeatCount: "RangeDataV22",
        repeatTime: "RangeDataV22",
        startTimeOffset: "RangeDataV22",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      ScriptRefDataV22: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV22: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV22")
      },
      TriggerMarkerDataV22: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      snapshot: Uint64,
      audioSettings: Pointer("AudioSettingsDataV22"),
      handler: DynArray("HandlerDataV22"),
      metaSound: DynArray("MetaSoundDataV22"),
      scriptRef: DynArray("ScriptRefDataV22"),
      triggerKey: DynArray("TriggerKeyDataV22"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV23",
    version: 23,
    definitions: {
      AudioSettingsDataV23: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV23"),
        category: DynArray("CategoryDataV23"),
        musicCondition: DynArray("MusicConditionDataV23"),
        musicPlaylist: DynArray("MusicPlaylistDataV23"),
        reverb: DynArray("ReverbDataV23"),
        snapshot: DynArray("SnapshotDataV23"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV23: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV23")
      },
      BussDynamicDataV23: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV23")
      },
      DspDataV23: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV23: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV23"),
        dynamicData: Pointer("CategoryDynamicDataV23"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV23: {
        doppler: Float32,
        lowPass: "DynamicParamDataV23",
        highPass: "DynamicParamDataV23",
        pan3D: "DynamicParamDataV23",
        reverb: "DynamicParamDataV23",
        spread3D: "DynamicParamDataV23",
        volumeA: "DynamicParamDataV23",
        volumeB: "DynamicParamDataV23"
      },
      DynamicParamDataV23: {
        envelopeData: Pointer("EnvelopeDataV23"),
        randomParamData: Pointer("RandomParamDataV23"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV23: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV23"),
        offsetType: Uint8
      },
      EnvelopePointDataV23: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV23: {
        time: "RangeDataV23",
        value: "RangeDataV23"
      },
      RangeDataV23: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV23: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        highPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      MusicConditionDataV23: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MusicPlaylistDataV23: {
        category: Uint64,
        name: Uint64,
        primaryPlaylistId: Uint64,
        secondaryPlaylistId: Uint64,
        fileName: DynArray("FileNameDataV23"),
        fadeInTime: Float32,
        fadeOutTime: Float32,
        flags: Uint32,
        initialSilence: "RangeDataV23",
        intervalSilence: "RangeDataV23",
        maxPlayLength: "RangeDataV23",
        volume: "DynamicParamDataV23",
        fileIterateMode: Uint8
      },
      FileNameDataV23: {
        condition: Uint64,
        language: Uint64,
        volume: Float32,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8
      },
      ReverbDataV23: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV23: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV23"),
        category: DynArray("CategoryDynamicDataV23"),
        priority: Uint8
      },
      HandlerDataV23: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV23: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV23"),
        attenuation: Pointer("AttenuationDataV23"),
        fileName: DynArray("FileNameDataV23"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV23",
        pan: "DynamicParamDataV23",
        pitch: "DynamicParamDataV23",
        pitchMS: "DynamicParamDataV23",
        volume: "DynamicParamDataV23",
        volumeMS: "DynamicParamDataV23",
        initialDelay: "RangeDataV23",
        playLength: "RangeDataV23",
        positionOffsetAngle: "RangeDataV23",
        positionRange: "RangeDataV23",
        repeatCount: "RangeDataV23",
        repeatTime: "RangeDataV23",
        startTimeOffset: "RangeDataV23",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      ScriptRefDataV23: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV23: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV23")
      },
      TriggerMarkerDataV23: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      snapshot: Uint64,
      audioSettings: Pointer("AudioSettingsDataV23"),
      handler: DynArray("HandlerDataV23"),
      metaSound: DynArray("MetaSoundDataV23"),
      scriptRef: DynArray("ScriptRefDataV23"),
      triggerKey: DynArray("TriggerKeyDataV23"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8,
      musicMutePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV24",
    version: 24,
    definitions: {
      AudioSettingsDataV24: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV24"),
        category: DynArray("CategoryDataV24"),
        musicCondition: DynArray("MusicConditionDataV24"),
        musicPlaylist: DynArray("MusicPlaylistDataV24"),
        reverb: DynArray("ReverbDataV24"),
        snapshot: DynArray("SnapshotDataV24"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV24: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV24")
      },
      BussDynamicDataV24: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV24")
      },
      DspDataV24: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV24: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV24"),
        dynamicData: Pointer("CategoryDynamicDataV24"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV24: {
        doppler: Float32,
        lowPass: "DynamicParamDataV24",
        highPass: "DynamicParamDataV24",
        pan3D: "DynamicParamDataV24",
        reverb: "DynamicParamDataV24",
        spread3D: "DynamicParamDataV24",
        volumeA: "DynamicParamDataV24",
        volumeB: "DynamicParamDataV24"
      },
      DynamicParamDataV24: {
        envelopeData: Pointer("EnvelopeDataV24"),
        randomParamData: Pointer("RandomParamDataV24"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV24: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV24"),
        offsetType: Uint8
      },
      EnvelopePointDataV24: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV24: {
        time: "RangeDataV24",
        value: "RangeDataV24"
      },
      RangeDataV24: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV24: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        highPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      MusicConditionDataV24: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MusicPlaylistDataV24: {
        category: Uint64,
        name: Uint64,
        primaryPlaylistId: Uint64,
        secondaryPlaylistId: Uint64,
        fileName: DynArray("FileNameDataV24"),
        fadeInTime: Float32,
        fadeOutTime: Float32,
        flags: Uint32,
        initialSilence: "RangeDataV24",
        intervalSilence: "RangeDataV24",
        maxPlayLength: "RangeDataV24",
        volume: "DynamicParamDataV24",
        fileIterateMode: Uint8
      },
      FileNameDataV24: {
        condition: Uint64,
        language: Uint64,
        volume: Float32,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8,
        noteBase: Uint8,
        noteMin: Uint8,
        noteMax: Uint8
      },
      ReverbDataV24: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV24: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV24"),
        category: DynArray("CategoryDynamicDataV24"),
        priority: Uint8
      },
      HandlerDataV24: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV24: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV24"),
        attenuation: Pointer("AttenuationDataV24"),
        fileName: DynArray("FileNameDataV24"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV24",
        pan: "DynamicParamDataV24",
        pitch: "DynamicParamDataV24",
        pitchMS: "DynamicParamDataV24",
        volume: "DynamicParamDataV24",
        volumeMS: "DynamicParamDataV24",
        initialDelay: "RangeDataV24",
        playLength: "RangeDataV24",
        positionOffsetAngle: "RangeDataV24",
        positionRange: "RangeDataV24",
        repeatCount: "RangeDataV24",
        repeatTime: "RangeDataV24",
        startTimeOffset: "RangeDataV24",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      ScriptRefDataV24: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV24: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV24")
      },
      TriggerMarkerDataV24: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      snapshot: Uint64,
      audioSettings: Pointer("AudioSettingsDataV24"),
      handler: DynArray("HandlerDataV24"),
      metaSound: DynArray("MetaSoundDataV24"),
      scriptRef: DynArray("ScriptRefDataV24"),
      triggerKey: DynArray("TriggerKeyDataV24"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8,
      musicMutePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV25",
    version: 25,
    definitions: {
      AudioSettingsDataV25: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        buss: DynArray("BussDataV25"),
        category: DynArray("CategoryDataV25"),
        material: DynArray("MaterialDataV25"),
        musicCondition: DynArray("MusicConditionDataV25"),
        musicPlaylist: DynArray("MusicPlaylistDataV25"),
        reverb: DynArray("ReverbDataV25"),
        snapshot: DynArray("SnapshotDataV25"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV25: {
        name: Uint64,
        flags: Uint32,
        output: Uint64,
        dynamicData: Pointer("BussDynamicDataV25")
      },
      BussDynamicDataV25: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV25")
      },
      DspDataV25: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV25: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV25"),
        dynamicData: Pointer("CategoryDynamicDataV25"),
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8
      },
      AttenuationDataV25: {
        doppler: Float32,
        lowPass: "DynamicParamDataV25",
        highPass: "DynamicParamDataV25",
        pan3D: "DynamicParamDataV25",
        reverb: "DynamicParamDataV25",
        spread3D: "DynamicParamDataV25",
        volumeA: "DynamicParamDataV25",
        volumeB: "DynamicParamDataV25"
      },
      DynamicParamDataV25: {
        envelopeData: Pointer("EnvelopeDataV25"),
        randomParamData: Pointer("RandomParamDataV25"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV25: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV25"),
        offsetType: Uint8
      },
      EnvelopePointDataV25: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV25: {
        time: "RangeDataV25",
        value: "RangeDataV25"
      },
      RangeDataV25: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV25: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        highPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32
      },
      MaterialDataV25: {
        name: Uint64,
        flags: Uint32,
        absorptionLF: Float32,
        absorptionMF: Float32,
        absorptionHF: Float32,
        occlusion: Float32
      },
      MusicConditionDataV25: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MusicPlaylistDataV25: {
        category: Uint64,
        name: Uint64,
        primaryPlaylistId: Uint64,
        secondaryPlaylistId: Uint64,
        fileName: DynArray("FileNameDataV25"),
        fadeInTime: Float32,
        fadeOutTime: Float32,
        flags: Uint32,
        initialSilence: "RangeDataV25",
        intervalSilence: "RangeDataV25",
        maxPlayLength: "RangeDataV25",
        volume: "DynamicParamDataV25",
        fileIterateMode: Uint8
      },
      FileNameDataV25: {
        condition: Uint64,
        language: Uint64,
        volume: Float32,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8,
        noteBase: Uint8,
        noteMin: Uint8,
        noteMax: Uint8
      },
      ReverbDataV25: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV25: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV25"),
        category: DynArray("CategoryDynamicDataV25"),
        priority: Uint8
      },
      HandlerDataV25: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV25: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV25"),
        attenuation: Pointer("AttenuationDataV25"),
        fileName: DynArray("FileNameDataV25"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV25",
        pan: "DynamicParamDataV25",
        pitch: "DynamicParamDataV25",
        pitchMS: "DynamicParamDataV25",
        volume: "DynamicParamDataV25",
        volumeMS: "DynamicParamDataV25",
        initialDelay: "RangeDataV25",
        playLength: "RangeDataV25",
        positionOffsetAngle: "RangeDataV25",
        positionRange: "RangeDataV25",
        repeatCount: "RangeDataV25",
        repeatTime: "RangeDataV25",
        startTimeOffset: "RangeDataV25",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      ScriptRefDataV25: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV25: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV25")
      },
      TriggerMarkerDataV25: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      snapshot: Uint64,
      audioSettings: Pointer("AudioSettingsDataV25"),
      handler: DynArray("HandlerDataV25"),
      metaSound: DynArray("MetaSoundDataV25"),
      scriptRef: DynArray("ScriptRefDataV25"),
      triggerKey: DynArray("TriggerKeyDataV25"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8,
      musicMutePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV26",
    version: 26,
    definitions: {
      AudioSettingsDataV26: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        focusTransition: Float32,
        memoryPool: Float32,
        reverbLevel: Float32,
        minChannelsLQ: Uint32,
        maxChannelsLQ: Uint32,
        buss: DynArray("BussDataV26"),
        category: DynArray("CategoryDataV26"),
        material: DynArray("MaterialDataV26"),
        musicCondition: DynArray("MusicConditionDataV26"),
        musicPlaylist: DynArray("MusicPlaylistDataV26"),
        reverb: DynArray("ReverbDataV26"),
        snapshot: DynArray("SnapshotDataV26"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV26: {
        name: Uint64,
        output: Uint64,
        flags: Uint32,
        normalizeFadeTime: Float32,
        normalizeThreshold: Float32,
        normalizeMaxAmp: Float32,
        compressorThreshold: Float32,
        compressorAttack: Float32,
        compressorRelease: Float32,
        compressorGainMakeup: Float32,
        dynamicData: Pointer("BussDynamicDataV26")
      },
      BussDynamicDataV26: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV26")
      },
      DspDataV26: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV26: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV26"),
        dynamicData: Pointer("CategoryDynamicDataV26"),
        focusReserve: Float32,
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8,
        priority: Uint8
      },
      AttenuationDataV26: {
        doppler: Float32,
        lowPass: "DynamicParamDataV26",
        highPass: "DynamicParamDataV26",
        pan3D: "DynamicParamDataV26",
        reverb: "DynamicParamDataV26",
        spread3D: "DynamicParamDataV26",
        volumeA: "DynamicParamDataV26",
        volumeB: "DynamicParamDataV26",
        lfe: "DynamicParamDataV26"
      },
      DynamicParamDataV26: {
        envelopeData: Pointer("EnvelopeDataV26"),
        randomParamData: Pointer("RandomParamDataV26"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV26: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV26"),
        offsetType: Uint8
      },
      EnvelopePointDataV26: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV26: {
        time: "RangeDataV26",
        value: "RangeDataV26"
      },
      RangeDataV26: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV26: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        highPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32,
        minAudible: Uint32,
        maxAudibleLQ: Uint32,
        maxAudibleHG: Uint32
      },
      MaterialDataV26: {
        name: Uint64,
        flags: Uint32,
        absorptionLF: Float32,
        absorptionMF: Float32,
        absorptionHF: Float32,
        occlusion: Float32
      },
      MusicConditionDataV26: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MusicPlaylistDataV26: {
        category: Uint64,
        name: Uint64,
        primaryPlaylistId: Uint64,
        secondaryPlaylistId: Uint64,
        fileName: DynArray("FileNameDataV26"),
        fadeInTime: Float32,
        fadeOutTime: Float32,
        flags: Uint32,
        initialSilence: "RangeDataV26",
        intervalSilence: "RangeDataV26",
        maxPlayLength: "RangeDataV26",
        volume: "DynamicParamDataV26",
        fileIterateMode: Uint8
      },
      FileNameDataV26: {
        condition: Uint64,
        language: Uint64,
        volume: Float32,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8,
        noteBase: Uint8,
        noteMin: Uint8,
        noteMax: Uint8
      },
      ReverbDataV26: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      SnapshotDataV26: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV26"),
        category: DynArray("CategoryDynamicDataV26"),
        priority: Uint8
      },
      HandlerDataV26: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV26: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV26"),
        attenuation: Pointer("AttenuationDataV26"),
        fileName: DynArray("FileNameDataV26"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV26",
        pan: "DynamicParamDataV26",
        pitch: "DynamicParamDataV26",
        pitchMS: "DynamicParamDataV26",
        volume: "DynamicParamDataV26",
        volumeMS: "DynamicParamDataV26",
        initialDelay: "RangeDataV26",
        playLength: "RangeDataV26",
        positionOffsetAngle: "RangeDataV26",
        positionRange: "RangeDataV26",
        repeatCount: "RangeDataV26",
        repeatTime: "RangeDataV26",
        startTimeOffset: "RangeDataV26",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      ScriptRefDataV26: {
        name: Uint64,
        fileName: Filename
      },
      TriggerKeyDataV26: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV26")
      },
      TriggerMarkerDataV26: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      snapshot: Uint64,
      audioSettings: Pointer("AudioSettingsDataV26"),
      handler: DynArray("HandlerDataV26"),
      metaSound: DynArray("MetaSoundDataV26"),
      scriptRef: DynArray("ScriptRefDataV26"),
      triggerKey: DynArray("TriggerKeyDataV26"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8,
      musicMutePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV27",
    version: 27,
    definitions: {
      AudioSettingsDataV27: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        echoLevel: Float32,
        focusTransition: Float32,
        memoryPool: Float32,
        reverbLevel: Float32,
        minChannelsLQ: Uint32,
        maxChannelsLQ: Uint32,
        buss: DynArray("BussDataV27"),
        category: DynArray("CategoryDataV27"),
        material: DynArray("MaterialDataV27"),
        musicCondition: DynArray("MusicConditionDataV27"),
        musicPlaylist: DynArray("MusicPlaylistDataV27"),
        property: DynArray("PropertyDataV27"),
        reverb: DynArray("ReverbDataV27"),
        scriptRef: DynArray("ScriptRefDataV27"),
        snapshot: DynArray("SnapshotDataV27"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV27: {
        name: Uint64,
        output: Uint64,
        flags: Uint32,
        normalizeFadeTime: Float32,
        normalizeThreshold: Float32,
        normalizeMaxAmp: Float32,
        compressorThreshold: Float32,
        compressorAttack: Float32,
        compressorRelease: Float32,
        compressorGainMakeup: Float32,
        dynamicData: Pointer("BussDynamicDataV27")
      },
      BussDynamicDataV27: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV27")
      },
      DspDataV27: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV27: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV27"),
        dynamicData: Pointer("CategoryDynamicDataV27"),
        focusReserve: Float32,
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8,
        priority: Uint8
      },
      AttenuationDataV27: {
        doppler: Float32,
        lowPass: "DynamicParamDataV27",
        highPass: "DynamicParamDataV27",
        pan3D: "DynamicParamDataV27",
        reverb: "DynamicParamDataV27",
        spread3D: "DynamicParamDataV27",
        volumeA: "DynamicParamDataV27",
        volumeB: "DynamicParamDataV27",
        lfe: "DynamicParamDataV27"
      },
      DynamicParamDataV27: {
        envelopeData: Pointer("EnvelopeDataV27"),
        randomParamData: Pointer("RandomParamDataV27"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV27: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV27"),
        offsetType: Uint8
      },
      EnvelopePointDataV27: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV27: {
        time: "RangeDataV27",
        value: "RangeDataV27"
      },
      RangeDataV27: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV27: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        highPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32,
        minAudible: Uint32,
        maxAudibleLQ: Uint32,
        maxAudibleHG: Uint32
      },
      MaterialDataV27: {
        name: Uint64,
        flags: Uint32,
        absorptionLF: Float32,
        absorptionMF: Float32,
        absorptionHF: Float32,
        occlusion: Float32
      },
      MusicConditionDataV27: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MusicPlaylistDataV27: {
        category: Uint64,
        name: Uint64,
        primaryPlaylistId: Uint64,
        secondaryPlaylistId: Uint64,
        fileName: DynArray("FileNameDataV27"),
        fadeInTime: Float32,
        fadeOutTime: Float32,
        flags: Uint32,
        initialSilence: "RangeDataV27",
        intervalSilence: "RangeDataV27",
        maxPlayLength: "RangeDataV27",
        volume: "DynamicParamDataV27",
        fileIterateMode: Uint8
      },
      FileNameDataV27: {
        condition: Uint64,
        language: Uint64,
        volume: Float32,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8,
        noteBase: Uint8,
        noteMin: Uint8,
        noteMax: Uint8
      },
      PropertyDataV27: {
        name: Uint64,
        tokenValue: Uint64,
        floatValue: Float32
      },
      ReverbDataV27: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      ScriptRefDataV27: {
        name: Uint64,
        fileName: Filename
      },
      SnapshotDataV27: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV27"),
        category: DynArray("CategoryDynamicDataV27"),
        priority: Uint8
      },
      HandlerDataV27: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV27: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV27"),
        attenuation: Pointer("AttenuationDataV27"),
        fileName: DynArray("FileNameDataV27"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV27",
        pan: "DynamicParamDataV27",
        pitch: "DynamicParamDataV27",
        pitchMS: "DynamicParamDataV27",
        volume: "DynamicParamDataV27",
        volumeMS: "DynamicParamDataV27",
        initialDelay: "RangeDataV27",
        playLength: "RangeDataV27",
        positionOffsetAngle: "RangeDataV27",
        positionRange: "RangeDataV27",
        repeatCount: "RangeDataV27",
        repeatTime: "RangeDataV27",
        startTimeOffset: "RangeDataV27",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      TriggerKeyDataV27: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV27")
      },
      TriggerMarkerDataV27: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      snapshot: Uint64,
      audioSettings: Pointer("AudioSettingsDataV27"),
      handler: DynArray("HandlerDataV27"),
      metaSound: DynArray("MetaSoundDataV27"),
      scriptRef: DynArray("ScriptRefDataV27"),
      triggerKey: DynArray("TriggerKeyDataV27"),
      property: DynArray("PropertyDataV27"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8,
      musicMutePriority: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV28",
    version: 28,
    definitions: {
      AudioSettingsDataV28: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        echoLevel: Float32,
        focusTransition: Float32,
        memoryPool: Float32,
        reverbLevel: Float32,
        minChannelsLQ: Uint32,
        maxChannelsLQ: Uint32,
        buss: DynArray("BussDataV28"),
        category: DynArray("CategoryDataV28"),
        material: DynArray("MaterialDataV28"),
        musicCondition: DynArray("MusicConditionDataV28"),
        musicPlaylist: DynArray("MusicPlaylistDataV28"),
        property: DynArray("PropertyDataV28"),
        reverb: DynArray("ReverbDataV28"),
        scriptRef: DynArray("ScriptRefDataV28"),
        snapshot: DynArray("SnapshotDataV28"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename
      },
      BussDataV28: {
        name: Uint64,
        output: Uint64,
        flags: Uint32,
        normalizeFadeTime: Float32,
        normalizeThreshold: Float32,
        normalizeMaxAmp: Float32,
        compressorThreshold: Float32,
        compressorAttack: Float32,
        compressorRelease: Float32,
        compressorGainMakeup: Float32,
        dynamicData: Pointer("BussDynamicDataV28")
      },
      BussDynamicDataV28: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV28")
      },
      DspDataV28: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV28: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV28"),
        dynamicData: Pointer("CategoryDynamicDataV28"),
        focusReserve: Float32,
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8,
        priority: Uint8
      },
      AttenuationDataV28: {
        doppler: Float32,
        lowPass: "DynamicParamDataV28",
        highPass: "DynamicParamDataV28",
        pan3D: "DynamicParamDataV28",
        reverb: "DynamicParamDataV28",
        spread3D: "DynamicParamDataV28",
        volumeA: "DynamicParamDataV28",
        volumeB: "DynamicParamDataV28",
        lfe: "DynamicParamDataV28"
      },
      DynamicParamDataV28: {
        envelopeData: Pointer("EnvelopeDataV28"),
        randomParamData: Pointer("RandomParamDataV28"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV28: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV28"),
        offsetType: Uint8
      },
      EnvelopePointDataV28: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV28: {
        time: "RangeDataV28",
        value: "RangeDataV28"
      },
      RangeDataV28: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV28: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        highPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32,
        minAudible: Uint32,
        maxAudibleLQ: Uint32,
        maxAudibleHG: Uint32
      },
      MaterialDataV28: {
        name: Uint64,
        flags: Uint32,
        absorptionLF: Float32,
        absorptionMF: Float32,
        absorptionHF: Float32,
        occlusion: Float32
      },
      MusicConditionDataV28: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MusicPlaylistDataV28: {
        category: Uint64,
        name: Uint64,
        primaryPlaylistId: Uint64,
        secondaryPlaylistId: Uint64,
        fileName: DynArray("FileNameDataV28"),
        fadeInTime: Float32,
        fadeOutTime: Float32,
        flags: Uint32,
        initialSilence: "RangeDataV28",
        intervalSilence: "RangeDataV28",
        maxPlayLength: "RangeDataV28",
        volume: "DynamicParamDataV28",
        fileIterateMode: Uint8
      },
      FileNameDataV28: {
        condition: Uint64,
        language: Uint64,
        volume: Float32,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8,
        noteBase: Uint8,
        noteMin: Uint8,
        noteMax: Uint8
      },
      PropertyDataV28: {
        name: Uint64,
        tokenValue: Uint64,
        floatValue: Float32
      },
      ReverbDataV28: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      ScriptRefDataV28: {
        name: Uint64,
        fileName: Filename
      },
      SnapshotDataV28: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV28"),
        category: DynArray("CategoryDynamicDataV28"),
        priority: Uint8
      },
      HandlerDataV28: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV28: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV28"),
        attenuation: Pointer("AttenuationDataV28"),
        fileName: DynArray("FileNameDataV28"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV28",
        pan: "DynamicParamDataV28",
        pitch: "DynamicParamDataV28",
        pitchMS: "DynamicParamDataV28",
        volume: "DynamicParamDataV28",
        volumeMS: "DynamicParamDataV28",
        initialDelay: "RangeDataV28",
        playLength: "RangeDataV28",
        positionOffsetAngle: "RangeDataV28",
        positionRange: "RangeDataV28",
        repeatCount: "RangeDataV28",
        repeatTime: "RangeDataV28",
        replayDelay: "RangeDataV28",
        startTimeOffset: "RangeDataV28",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      TriggerKeyDataV28: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV28")
      },
      TriggerMarkerDataV28: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      snapshot: Uint64,
      audioSettings: Pointer("AudioSettingsDataV28"),
      handler: DynArray("HandlerDataV28"),
      metaSound: DynArray("MetaSoundDataV28"),
      scriptRef: DynArray("ScriptRefDataV28"),
      triggerKey: DynArray("TriggerKeyDataV28"),
      property: DynArray("PropertyDataV28"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8,
      musicMutePriority: Uint8,
      soundPoolMode: Uint8
    }
  },
  {
    chunkName: "AMSP",
    name: "ScriptFileDataV29",
    version: 29,
    definitions: {
      AudioSettingsDataV29: {
        defaultSnapshot: Uint64,
        effectsBuss: Uint64,
        distanceScale: Float32,
        dopplerScale: Float32,
        echoLevel: Float32,
        focusTransition: Float32,
        memoryPool: Float32,
        reverbLevel: Float32,
        minChannelsLQ: Uint32,
        maxChannelsLQ: Uint32,
        buss: DynArray("BussDataV29"),
        category: DynArray("CategoryDataV29"),
        material: DynArray("MaterialDataV29"),
        musicCondition: DynArray("MusicConditionDataV29"),
        musicPlaylist: DynArray("MusicPlaylistDataV29"),
        property: DynArray("PropertyDataV29"),
        reverb: DynArray("ReverbDataV29"),
        scriptRef: DynArray("ScriptRefDataV29"),
        snapshot: DynArray("SnapshotDataV29"),
        bankIndexFileName: Filename,
        bankScriptFileName: Filename,
        musicScriptFileName: Filename,
        musicExternal: DynArray("MusicExternalDataV29")
      },
      BussDataV29: {
        name: Uint64,
        output: Uint64,
        flags: Uint32,
        normalizeFadeTime: Float32,
        normalizeThreshold: Float32,
        normalizeMaxAmp: Float32,
        compressorThreshold: Float32,
        compressorAttack: Float32,
        compressorRelease: Float32,
        compressorGainMakeup: Float32,
        dynamicData: Pointer("BussDynamicDataV29")
      },
      BussDynamicDataV29: {
        name: Uint64,
        flags: Uint32,
        volume: Float32,
        dsp: DynArray("DspDataV29")
      },
      DspDataV29: {
        type: Uint32,
        flags: Uint32,
        property: DynArray(Float32)
      },
      CategoryDataV29: {
        name: Uint64,
        volumeGroupName: Uint64,
        outputBussName: Uint64,
        attenuation: Pointer("AttenuationDataV29"),
        dynamicData: Pointer("CategoryDynamicDataV29"),
        focusReserve: Float32,
        muteFadeTime: Float32,
        flags: Uint32,
        maxAudible: Uint32,
        maxAudibleBehavior: Uint8,
        priority: Uint8
      },
      AttenuationDataV29: {
        doppler: Float32,
        lowPass: "DynamicParamDataV29",
        highPass: "DynamicParamDataV29",
        pan3D: "DynamicParamDataV29",
        reverb: "DynamicParamDataV29",
        spread3D: "DynamicParamDataV29",
        volumeA: "DynamicParamDataV29",
        volumeB: "DynamicParamDataV29",
        lfe: "DynamicParamDataV29"
      },
      DynamicParamDataV29: {
        envelopeData: Pointer("EnvelopeDataV29"),
        randomParamData: Pointer("RandomParamDataV29"),
        value: Float32,
        type: Uint8
      },
      EnvelopeDataV29: {
        offsetParameter: Uint64,
        envelopePoint: DynArray("EnvelopePointDataV29"),
        offsetType: Uint8
      },
      EnvelopePointDataV29: {
        offset: Float32,
        value: Float32
      },
      RandomParamDataV29: {
        time: "RangeDataV29",
        value: "RangeDataV29"
      },
      RangeDataV29: {
        max: Float32,
        min: Uint8
      },
      CategoryDynamicDataV29: {
        name: Uint64,
        volume: Float32,
        nonFocusGain: Float32,
        lowPass: Float32,
        highPass: Float32,
        reverbDirect: Float32,
        reverbRoom: Float32,
        flags: Uint32,
        minAudible: Uint32,
        maxAudibleLQ: Uint32,
        maxAudibleHG: Uint32
      },
      MaterialDataV29: {
        name: Uint64,
        flags: Uint32,
        absorptionLF: Float32,
        absorptionMF: Float32,
        absorptionHF: Float32,
        occlusion: Float32
      },
      MusicConditionDataV29: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MusicPlaylistDataV29: {
        category: Uint64,
        name: Uint64,
        primaryPlaylistId: Uint64,
        secondaryPlaylistId: Uint64,
        fileName: DynArray("FileNameDataV29"),
        fadeInTime: Float32,
        fadeOutTime: Float32,
        flags: Uint32,
        initialSilence: "RangeDataV29",
        intervalSilence: "RangeDataV29",
        maxPlayLength: "RangeDataV29",
        volume: "DynamicParamDataV29",
        fileIterateMode: Uint8
      },
      FileNameDataV29: {
        condition: Uint64,
        language: Uint64,
        volume: Float32,
        weight: Float32,
        fileName: Filename,
        audioType: Uint8,
        noteBase: Uint8,
        noteMin: Uint8,
        noteMax: Uint8
      },
      PropertyDataV29: {
        name: Uint64,
        tokenValue: Uint64,
        floatValue: Float32
      },
      ReverbDataV29: {
        name: Uint64,
        flags: Uint32,
        room: Float32,
        roomHF: Float32,
        roomLF: Float32,
        decayTime: Float32,
        decayHFRatio: Float32,
        reflections: Float32,
        reflectionsDelay: Float32,
        reverb: Float32,
        reverbDelay: Float32,
        referenceHF: Float32,
        referenceLF: Float32,
        diffusion: Float32,
        density: Float32,
        echoDelay: Float32,
        echoDecayRatio: Float32,
        echoWetMix: Float32,
        echoDryMix: Float32
      },
      ScriptRefDataV29: {
        name: Uint64,
        fileName: Filename
      },
      SnapshotDataV29: {
        name: Uint64,
        blendInTime: Float32,
        blendOutTime: Float32,
        flags: Uint32,
        buss: DynArray("BussDynamicDataV29"),
        category: DynArray("CategoryDynamicDataV29"),
        priority: Uint8
      },
      MusicExternalDataV29: {
        name: Uint64,
        externalPlaylist: String16
      },
      HandlerDataV29: {
        name: Uint64,
        flags: Uint32,
        byteCode: DynArray(Uint8)
      },
      MetaSoundDataV29: {
        category: Uint64,
        endCue: Uint64,
        name: Uint64,
        offsetBone: Uint64,
        playlistId: Uint64,
        dsp: DynArray("DspDataV29"),
        attenuation: Pointer("AttenuationDataV29"),
        fileName: DynArray("FileNameDataV29"),
        channelFadeIn: Float32,
        channelFadeOut: Float32,
        endCueOffset: Float32,
        fadeInTime: Float32,
        fadeOutTime: Float32,
        positionOffset: FixedArray(Float32, 3),
        channelMax: Uint32,
        flags: Uint32,
        loopCount: Uint32,
        depth: "DynamicParamDataV29",
        pan: "DynamicParamDataV29",
        pitch: "DynamicParamDataV29",
        pitchMS: "DynamicParamDataV29",
        volume: "DynamicParamDataV29",
        volumeMS: "DynamicParamDataV29",
        initialDelay: "RangeDataV29",
        playLength: "RangeDataV29",
        positionOffsetAngle: "RangeDataV29",
        positionRange: "RangeDataV29",
        repeatCount: "RangeDataV29",
        repeatTime: "RangeDataV29",
        replayDelay: "RangeDataV29",
        startTimeOffset: "RangeDataV29",
        channelMode: Uint8,
        channelPriority: Uint8,
        fileIterateMode: Uint8,
        loopMode: Uint8,
        musicPriority: Uint8,
        playbackMode: Uint8,
        positionMode: Uint8,
        repeatTimeFrom: Uint8
      },
      TriggerKeyDataV29: {
        name: Uint64,
        triggerMarker: DynArray("TriggerMarkerDataV29")
      },
      TriggerMarkerDataV29: {
        cue: Uint64,
        end: Uint64,
        time: Float32,
        type: Uint8
      }
    },
    root: {
      musicCue: Uint64,
      reverbOverride: Uint64,
      snapshot: Uint64,
      audioSettings: Pointer("AudioSettingsDataV29"),
      handler: DynArray("HandlerDataV29"),
      metaSound: DynArray("MetaSoundDataV29"),
      scriptRef: DynArray("ScriptRefDataV29"),
      triggerKey: DynArray("TriggerKeyDataV29"),
      property: DynArray("PropertyDataV29"),
      flags: Uint32,
      soundPoolCount: Uint32,
      fadeInTime: Float32,
      soundPoolDelay: Float32,
      volume: Float32,
      musicCuePriority: Uint8,
      musicMutePriority: Uint8,
      soundPoolMode: Uint8
    }
  }
]