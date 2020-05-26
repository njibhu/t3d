import { Uint64, Filename, String16, Float32, Uint32, Uint8, DynArray, FixedArray, Pointer, Fileref } from "../src/types";

module.exports = [
  {
    chunkName: "CSCN",
    name: "SceneDataV0",
    version: 0,
    definitions: {
      SequenceDataV0: {
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        name: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV0")
      },
      TrackGroupDataV0: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV0"),
        track: DynArray("TrackDataV0")
      },
      PropertyDataV0: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV0: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV0"),
        flagKey: DynArray("FlagKeyDataV0"),
        triggerKey: DynArray("TriggerKeyDataV0")
      },
      CurveKeyDataV0: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV0: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV0: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV0: {
        ambientLightResource: DynArray("AmbientLightDataV0"),
        textResource: DynArray("TextResourceDataV0")
      },
      AmbientLightDataV0: {
        ambientGroundColor: "ColorDefDataV0",
        ambientSkyColor: "ColorDefDataV0",
        fillColor: "ColorDefDataV0",
        hemisphericalColor: "ColorDefDataV0",
        name: Uint64
      },
      ColorDefDataV0: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      TextResourceDataV0: {
        name: Uint64,
        textEntry: DynArray("TextEntryDataV0")
      },
      TextEntryDataV0: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      sequence: DynArray("SequenceDataV0"),
      resources: "ResourceDataV0"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV1",
    version: 1,
    definitions: {
      SequenceDataV1: {
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        name: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV1")
      },
      TrackGroupDataV1: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV1"),
        track: DynArray("TrackDataV1")
      },
      PropertyDataV1: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV1: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV1"),
        flagKey: DynArray("FlagKeyDataV1"),
        triggerKey: DynArray("TriggerKeyDataV1")
      },
      CurveKeyDataV1: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV1: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV1: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV1: {
        ambientLightResource: DynArray("AmbientLightDataV1"),
        script: DynArray("ScriptDataV1"),
        textResource: DynArray("TextResourceDataV1")
      },
      AmbientLightDataV1: {
        ambientGroundColor: "ColorDefDataV1",
        ambientSkyColor: "ColorDefDataV1",
        fillColor: "ColorDefDataV1",
        hemisphericalColor: "ColorDefDataV1",
        name: Uint64
      },
      ColorDefDataV1: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      ScriptDataV1: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV1: {
        name: Uint64,
        textEntry: DynArray("TextEntryDataV1")
      },
      TextEntryDataV1: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      sequence: DynArray("SequenceDataV1"),
      resources: "ResourceDataV1"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV2",
    version: 2,
    definitions: {
      SequenceDataV2: {
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        name: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV2")
      },
      TrackGroupDataV2: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV2"),
        track: DynArray("TrackDataV2")
      },
      PropertyDataV2: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV2: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV2"),
        flagKey: DynArray("FlagKeyDataV2"),
        triggerKey: DynArray("TriggerKeyDataV2")
      },
      CurveKeyDataV2: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV2: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV2: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV2: {
        ambientLightResource: DynArray("AmbientLightDataV2"),
        script: DynArray("ScriptDataV2"),
        textResource: DynArray("TextResourceDataV2")
      },
      AmbientLightDataV2: {
        ambientGroundColor: "ColorDefDataV2",
        ambientSkyColor: "ColorDefDataV2",
        fillColor: "ColorDefDataV2",
        hemisphericalColor: "ColorDefDataV2",
        name: Uint64
      },
      ColorDefDataV2: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      ScriptDataV2: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV2: {
        name: Uint64,
        textEntry: DynArray("TextEntryDataV2")
      },
      TextEntryDataV2: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV2"),
      resources: "ResourceDataV2"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV3",
    version: 3,
    definitions: {
      SequenceDataV3: {
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        name: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV3")
      },
      TrackGroupDataV3: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV3"),
        track: DynArray("TrackDataV3")
      },
      PropertyDataV3: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV3: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV3"),
        flagKey: DynArray("FlagKeyDataV3"),
        triggerKey: DynArray("TriggerKeyDataV3")
      },
      CurveKeyDataV3: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV3: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV3: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV3: {
        ambientLightResource: DynArray("AmbientLightDataV3"),
        script: DynArray("ScriptDataV3"),
        textResource: DynArray("TextResourceDataV3")
      },
      AmbientLightDataV3: {
        ambientGroundColor: "ColorDefDataV3",
        ambientSkyColor: "ColorDefDataV3",
        fillColor: "ColorDefDataV3",
        hemisphericalColor: "ColorDefDataV3",
        name: Uint64
      },
      ColorDefDataV3: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      ScriptDataV3: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV3: {
        name: Uint64,
        textEntry: DynArray("TextEntryDataV3")
      },
      TextEntryDataV3: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV3"),
      resources: "ResourceDataV3"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV4",
    version: 4,
    definitions: {
      SequenceDataV4: {
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        name: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV4")
      },
      TrackGroupDataV4: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV4"),
        track: DynArray("TrackDataV4")
      },
      PropertyDataV4: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV4: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV4"),
        flagKey: DynArray("FlagKeyDataV4"),
        triggerKey: DynArray("TriggerKeyDataV4")
      },
      CurveKeyDataV4: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV4: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV4: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV4: {
        ambientLightResource: DynArray("AmbientLightDataV4"),
        script: DynArray("ScriptDataV4"),
        textResource: DynArray("TextResourceDataV4")
      },
      AmbientLightDataV4: {
        ambientGroundColor: "ColorDefDataV4",
        ambientSkyColor: "ColorDefDataV4",
        fillColor: "ColorDefDataV4",
        hemisphericalColor: "ColorDefDataV4",
        name: Uint64
      },
      ColorDefDataV4: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      ScriptDataV4: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV4: {
        name: Uint64,
        id: Uint32,
        textEntry: DynArray("TextEntryDataV4")
      },
      TextEntryDataV4: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV4"),
      resources: "ResourceDataV4"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV5",
    version: 5,
    definitions: {
      SequenceDataV5: {
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        name: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV5")
      },
      TrackGroupDataV5: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV5"),
        track: DynArray("TrackDataV5")
      },
      PropertyDataV5: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV5: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV5"),
        flagKey: DynArray("FlagKeyDataV5"),
        triggerKey: DynArray("TriggerKeyDataV5")
      },
      CurveKeyDataV5: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV5: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV5: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV5: {
        ambientLightResource: DynArray("AmbientLightDataV5"),
        script: DynArray("ScriptDataV5"),
        textResource: DynArray("TextResourceDataV5")
      },
      AmbientLightDataV5: {
        ambientGroundColor: "ColorDefDataV5",
        ambientSkyColor: "ColorDefDataV5",
        fillColor: "ColorDefDataV5",
        hemisphericalColor: "ColorDefDataV5",
        name: Uint64
      },
      ColorDefDataV5: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      ScriptDataV5: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV5: {
        name: Uint64,
        id: Uint32,
        textEntry: DynArray("TextEntryDataV5")
      },
      TextEntryDataV5: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV5"),
      resources: "ResourceDataV5"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV6",
    version: 6,
    definitions: {
      SequenceDataV6: {
        name: Uint64,
        length: Float32,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        trackGroup: DynArray("TrackGroupDataV6")
      },
      TrackGroupDataV6: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV6"),
        track: DynArray("TrackDataV6")
      },
      PropertyDataV6: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV6: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV6"),
        flagKey: DynArray("FlagKeyDataV6"),
        triggerKey: DynArray("TriggerKeyDataV6")
      },
      CurveKeyDataV6: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV6: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV6: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV6: {
        ambientLightResource: DynArray("AmbientLightDataV6"),
        script: DynArray("ScriptDataV6"),
        textResource: DynArray("TextResourceDataV6")
      },
      AmbientLightDataV6: {
        ambientGroundColor: "ColorDefDataV6",
        ambientSkyColor: "ColorDefDataV6",
        fillColor: "ColorDefDataV6",
        hemisphericalColor: "ColorDefDataV6",
        name: Uint64
      },
      ColorDefDataV6: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      ScriptDataV6: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV6: {
        name: Uint64,
        id: Uint32,
        textEntry: DynArray("TextEntryDataV6")
      },
      TextEntryDataV6: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV6"),
      resources: "ResourceDataV6"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV7",
    version: 7,
    definitions: {
      SequenceDataV7: {
        name: Uint64,
        length: Float32,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        trackGroup: DynArray("TrackGroupDataV7")
      },
      TrackGroupDataV7: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV7"),
        track: DynArray("TrackDataV7")
      },
      PropertyDataV7: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV7: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV7"),
        flagKey: DynArray("FlagKeyDataV7"),
        triggerKey: DynArray("TriggerKeyDataV7")
      },
      CurveKeyDataV7: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV7: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV7: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV7: {
        ambientLightResource: DynArray("AmbientLightDataV7"),
        script: DynArray("ScriptDataV7"),
        textResource: DynArray("TextResourceDataV7")
      },
      AmbientLightDataV7: {
        ambientGroundColor: "ColorDefDataV7",
        ambientSkyColor: "ColorDefDataV7",
        fillColor: "ColorDefDataV7",
        hemisphericalColor: "ColorDefDataV7",
        name: Uint64
      },
      ColorDefDataV7: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      ScriptDataV7: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV7: {
        name: Uint64,
        id: Uint32,
        textEntry: DynArray("TextEntryDataV7")
      },
      TextEntryDataV7: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV7"),
      resources: "ResourceDataV7"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV8",
    version: 8,
    definitions: {
      SequenceDataV8: {
        name: Uint64,
        length: Float32,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        trackGroup: DynArray("TrackGroupDataV8")
      },
      TrackGroupDataV8: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV8"),
        track: DynArray("TrackDataV8")
      },
      PropertyDataV8: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV8: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV8"),
        flagKey: DynArray("FlagKeyDataV8"),
        triggerKey: DynArray("TriggerKeyDataV8")
      },
      CurveKeyDataV8: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV8: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV8: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV8: {
        ambientLightResource: DynArray("AmbientLightDataV8"),
        fileNameRef: DynArray("FileNameRefDataV8"),
        script: DynArray("ScriptDataV8"),
        textResource: DynArray("TextResourceDataV8")
      },
      AmbientLightDataV8: {
        ambientGroundColor: "ColorDefDataV8",
        ambientSkyColor: "ColorDefDataV8",
        fillColor: "ColorDefDataV8",
        hemisphericalColor: "ColorDefDataV8",
        name: Uint64
      },
      ColorDefDataV8: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      FileNameRefDataV8: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV8: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV8: {
        name: Uint64,
        id: Uint32,
        textEntry: DynArray("TextEntryDataV8")
      },
      TextEntryDataV8: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV8"),
      resources: "ResourceDataV8"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV9",
    version: 9,
    definitions: {
      SequenceDataV9: {
        name: Uint64,
        length: Float32,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        trackGroup: DynArray("TrackGroupDataV9")
      },
      TrackGroupDataV9: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV9"),
        track: DynArray("TrackDataV9")
      },
      PropertyDataV9: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV9: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV9"),
        flagKey: DynArray("FlagKeyDataV9"),
        triggerKey: DynArray("TriggerKeyDataV9")
      },
      CurveKeyDataV9: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV9: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV9: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV9: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV9"),
        fileNameRef: DynArray("FileNameRefDataV9"),
        script: DynArray("ScriptDataV9"),
        textResource: DynArray("TextResourceDataV9")
      },
      AmbientLightDataV9: {
        ambientGroundColor: "ColorDefDataV9",
        ambientSkyColor: "ColorDefDataV9",
        fillColor: "ColorDefDataV9",
        hemisphericalColor: "ColorDefDataV9",
        name: Uint64
      },
      ColorDefDataV9: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      FileNameRefDataV9: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV9: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV9: {
        name: Uint64,
        id: Uint32,
        textEntry: DynArray("TextEntryDataV9")
      },
      TextEntryDataV9: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV9"),
      resources: "ResourceDataV9"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV10",
    version: 10,
    definitions: {
      SequenceDataV10: {
        name: Uint64,
        length: Float32,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        trackGroup: DynArray("TrackGroupDataV10")
      },
      TrackGroupDataV10: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV10"),
        track: DynArray("TrackDataV10")
      },
      PropertyDataV10: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV10: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV10"),
        flagKey: DynArray("FlagKeyDataV10"),
        triggerKey: DynArray("TriggerKeyDataV10")
      },
      CurveKeyDataV10: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV10: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV10: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV10: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV10"),
        fileNameRef: DynArray("FileNameRefDataV10"),
        script: DynArray("ScriptDataV10"),
        textResource: DynArray("TextResourceDataV10")
      },
      AmbientLightDataV10: {
        ambientGroundColor: "ColorDefDataV10",
        ambientSkyColor: "ColorDefDataV10",
        fillColor: "ColorDefDataV10",
        hemisphericalColor: "ColorDefDataV10",
        name: Uint64
      },
      ColorDefDataV10: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      FileNameRefDataV10: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV10: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV10: {
        name: Uint64,
        id: Uint32,
        textEntry: DynArray("TextEntryDataV10")
      },
      TextEntryDataV10: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV10"),
      resources: "ResourceDataV10"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV11",
    version: 11,
    definitions: {
      SequenceDataV11: {
        name: Uint64,
        length: Float32,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        trackGroup: DynArray("TrackGroupDataV11")
      },
      TrackGroupDataV11: {
        name: Uint64,
        type: Uint8,
        flags: Uint32,
        prop: DynArray("PropertyDataV11"),
        track: DynArray("TrackDataV11")
      },
      PropertyDataV11: {
        type: Uint8,
        value: Uint64,
        pathVal: Filename()
      },
      TrackDataV11: {
        name: Uint64,
        type: Uint8,
        curveKey: DynArray("CurveKeyDataV11"),
        flagKey: DynArray("FlagKeyDataV11"),
        triggerKey: DynArray("TriggerKeyDataV11")
      },
      CurveKeyDataV11: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV11: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV11: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV11: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV11"),
        fileNameRef: DynArray("FileNameRefDataV11"),
        script: DynArray("ScriptDataV11"),
        textResource: DynArray("TextResourceDataV11")
      },
      AmbientLightDataV11: {
        ambientGroundColor: "ColorDefDataV11",
        ambientSkyColor: "ColorDefDataV11",
        fillColor: "ColorDefDataV11",
        hemisphericalColor: "ColorDefDataV11",
        name: Uint64
      },
      ColorDefDataV11: {
        color: FixedArray(Uint8, 3),
        intensity: Float32
      },
      FileNameRefDataV11: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV11: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV11: {
        name: Uint64,
        id: Uint32,
        textEntry: DynArray("TextEntryDataV11")
      },
      TextEntryDataV11: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV11"),
      resources: "ResourceDataV11"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV12",
    version: 12,
    definitions: {
      SequenceDataV12: {
        name: Uint64,
        environmentMap: Fileref(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV12")
      },
      TrackGroupDataV12: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV12"),
        track: DynArray("TrackDataV12"),
        type: Uint8
      },
      PropertyDataV12: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV12: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV12"),
        flagKey: DynArray("FlagKeyDataV12"),
        triggerKey: DynArray("TriggerKeyDataV12"),
        type: Uint8
      },
      CurveKeyDataV12: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV12: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV12: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV12: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV12"),
        fileNameRef: DynArray("FileNameRefDataV12"),
        script: DynArray("ScriptDataV12"),
        textResource: DynArray("TextResourceDataV12")
      },
      AmbientLightDataV12: {
        ambientGroundColor: "ColorDefDataV12",
        ambientSkyColor: "ColorDefDataV12",
        fillColor: "ColorDefDataV12",
        hemisphericalColor: "ColorDefDataV12",
        name: Uint64
      },
      ColorDefDataV12: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV12: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV12: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV12: {
        name: Uint64,
        id: Uint32,
        textEntry: DynArray("TextEntryDataV12")
      },
      TextEntryDataV12: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV12"),
      resources: "ResourceDataV12"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV13",
    version: 13,
    definitions: {
      SequenceDataV13: {
        name: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV13")
      },
      TrackGroupDataV13: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV13"),
        track: DynArray("TrackDataV13"),
        type: Uint8
      },
      PropertyDataV13: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV13: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV13"),
        flagKey: DynArray("FlagKeyDataV13"),
        triggerKey: DynArray("TriggerKeyDataV13"),
        type: Uint8
      },
      CurveKeyDataV13: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV13: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV13: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV13: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV13"),
        fileNameRef: DynArray("FileNameRefDataV13"),
        script: DynArray("ScriptDataV13"),
        textResource: DynArray("TextResourceDataV13")
      },
      AmbientLightDataV13: {
        ambientGroundColor: "ColorDefDataV13",
        ambientSkyColor: "ColorDefDataV13",
        fillColor: "ColorDefDataV13",
        hemisphericalColor: "ColorDefDataV13",
        name: Uint64
      },
      ColorDefDataV13: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV13: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV13: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV13: {
        name: Uint64,
        id: Uint32,
        textEntry: DynArray("TextEntryDataV13")
      },
      TextEntryDataV13: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV13"),
      resources: "ResourceDataV13"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV14",
    version: 14,
    definitions: {
      SequenceDataV14: {
        name: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV14")
      },
      TrackGroupDataV14: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV14"),
        track: DynArray("TrackDataV14"),
        type: Uint8
      },
      PropertyDataV14: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV14: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV14"),
        flagKey: DynArray("FlagKeyDataV14"),
        triggerKey: DynArray("TriggerKeyDataV14"),
        type: Uint8
      },
      CurveKeyDataV14: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV14: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV14: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV14: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV14"),
        fileNameRef: DynArray("FileNameRefDataV14"),
        script: DynArray("ScriptDataV14"),
        textResource: DynArray("TextResourceDataV14")
      },
      AmbientLightDataV14: {
        ambientGroundColor: "ColorDefDataV14",
        ambientSkyColor: "ColorDefDataV14",
        fillColor: "ColorDefDataV14",
        hemisphericalColor: "ColorDefDataV14",
        name: Uint64
      },
      ColorDefDataV14: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV14: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV14: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV14: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV14")
      },
      TextEntryDataV14: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV14"),
      resources: "ResourceDataV14"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV15",
    version: 15,
    definitions: {
      SequenceDataV15: {
        name: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        updateScript: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV15")
      },
      TrackGroupDataV15: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV15"),
        track: DynArray("TrackDataV15"),
        type: Uint8
      },
      PropertyDataV15: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV15: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV15"),
        flagKey: DynArray("FlagKeyDataV15"),
        triggerKey: DynArray("TriggerKeyDataV15"),
        type: Uint8
      },
      CurveKeyDataV15: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV15: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV15: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV15: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV15"),
        fileNameRef: DynArray("FileNameRefDataV15"),
        script: DynArray("ScriptDataV15"),
        textResource: DynArray("TextResourceDataV15")
      },
      AmbientLightDataV15: {
        ambientGroundColor: "ColorDefDataV15",
        ambientSkyColor: "ColorDefDataV15",
        fillColor: "ColorDefDataV15",
        hemisphericalColor: "ColorDefDataV15",
        name: Uint64
      },
      ColorDefDataV15: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV15: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV15: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV15: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV15")
      },
      TextEntryDataV15: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV15"),
      resources: "ResourceDataV15"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV16",
    version: 16,
    definitions: {
      SequenceDataV16: {
        name: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        updateScript: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV16")
      },
      TrackGroupDataV16: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV16"),
        track: DynArray("TrackDataV16"),
        type: Uint8
      },
      PropertyDataV16: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV16: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV16"),
        flagKey: DynArray("FlagKeyDataV16"),
        triggerKey: DynArray("TriggerKeyDataV16"),
        type: Uint8
      },
      CurveKeyDataV16: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV16: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV16: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV16: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV16"),
        fileNameRef: DynArray("FileNameRefDataV16"),
        script: DynArray("ScriptDataV16"),
        textResource: DynArray("TextResourceDataV16")
      },
      AmbientLightDataV16: {
        ambientGroundColor: "ColorDefDataV16",
        ambientSkyColor: "ColorDefDataV16",
        fillColor: "ColorDefDataV16",
        hemisphericalColor: "ColorDefDataV16",
        name: Uint64
      },
      ColorDefDataV16: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV16: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV16: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV16: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV16")
      },
      TextEntryDataV16: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV16"),
      resources: "ResourceDataV16"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV17",
    version: 17,
    definitions: {
      SequenceDataV17: {
        name: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        updateScript: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV17")
      },
      TrackGroupDataV17: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV17"),
        track: DynArray("TrackDataV17"),
        type: Uint8
      },
      PropertyDataV17: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV17: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV17"),
        flagKey: DynArray("FlagKeyDataV17"),
        triggerKey: DynArray("TriggerKeyDataV17"),
        type: Uint8
      },
      CurveKeyDataV17: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV17: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV17: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV17: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV17"),
        fileNameRef: DynArray("FileNameRefDataV17"),
        script: DynArray("ScriptDataV17"),
        textResource: DynArray("TextResourceDataV17")
      },
      AmbientLightDataV17: {
        ambientGroundColor: "ColorDefDataV17",
        ambientSkyColor: "ColorDefDataV17",
        fillColor: "ColorDefDataV17",
        hemisphericalColor: "ColorDefDataV17",
        name: Uint64
      },
      ColorDefDataV17: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV17: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV17: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV17: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV17")
      },
      TextEntryDataV17: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV17"),
      resources: "ResourceDataV17"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV18",
    version: 18,
    definitions: {
      SequenceDataV18: {
        name: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        updateScript: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV18")
      },
      TrackGroupDataV18: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV18"),
        track: DynArray("TrackDataV18"),
        type: Uint8
      },
      PropertyDataV18: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV18: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV18"),
        flagKey: DynArray("FlagKeyDataV18"),
        triggerKey: DynArray("TriggerKeyDataV18"),
        type: Uint8
      },
      CurveKeyDataV18: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV18: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV18: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV18: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV18"),
        fileNameRef: DynArray("FileNameRefDataV18"),
        script: DynArray("ScriptDataV18"),
        textResource: DynArray("TextResourceDataV18")
      },
      AmbientLightDataV18: {
        ambientGroundColor: "ColorDefDataV18",
        ambientSkyColor: "ColorDefDataV18",
        fillColor: "ColorDefDataV18",
        hemisphericalColor: "ColorDefDataV18",
        name: Uint64
      },
      ColorDefDataV18: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV18: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV18: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV18: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV18")
      },
      TextEntryDataV18: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV18"),
      resources: "ResourceDataV18"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV19",
    version: 19,
    definitions: {
      SequenceDataV19: {
        name: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        updateScript: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV19")
      },
      TrackGroupDataV19: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV19"),
        track: DynArray("TrackDataV19"),
        type: Uint8
      },
      PropertyDataV19: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV19: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV19"),
        flagKey: DynArray("FlagKeyDataV19"),
        triggerKey: DynArray("TriggerKeyDataV19"),
        type: Uint8
      },
      CurveKeyDataV19: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV19: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV19: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV19: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV19"),
        fileNameRef: DynArray("FileNameRefDataV19"),
        script: DynArray("ScriptDataV19"),
        textResource: DynArray("TextResourceDataV19")
      },
      AmbientLightDataV19: {
        ambientGroundColor: "ColorDefDataV19",
        ambientSkyColor: "ColorDefDataV19",
        fillColor: "ColorDefDataV19",
        hemisphericalColor: "ColorDefDataV19",
        name: Uint64
      },
      ColorDefDataV19: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV19: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV19: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV19: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV19")
      },
      TextEntryDataV19: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV19"),
      resources: "ResourceDataV19"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV20",
    version: 20,
    definitions: {
      SequenceDataV20: {
        name: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        updateScript: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV20")
      },
      TrackGroupDataV20: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV20"),
        track: DynArray("TrackDataV20"),
        type: Uint8
      },
      PropertyDataV20: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV20: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV20"),
        flagKey: DynArray("FlagKeyDataV20"),
        triggerKey: DynArray("TriggerKeyDataV20"),
        type: Uint8
      },
      CurveKeyDataV20: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV20: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV20: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV20: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV20"),
        fileNameRef: DynArray("FileNameRefDataV20"),
        script: DynArray("ScriptDataV20"),
        textResource: DynArray("TextResourceDataV20")
      },
      AmbientLightDataV20: {
        ambientGroundColor: "ColorDefDataV20",
        ambientSkyColor: "ColorDefDataV20",
        fillColor: "ColorDefDataV20",
        hemisphericalColor: "ColorDefDataV20",
        name: Uint64
      },
      ColorDefDataV20: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV20: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV20: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV20: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV20")
      },
      TextEntryDataV20: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV20"),
      resources: "ResourceDataV20"
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV21",
    version: 21,
    definitions: {
      SequenceDataV21: {
        name: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        updateScript: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV21")
      },
      TrackGroupDataV21: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV21"),
        track: DynArray("TrackDataV21"),
        type: Uint8
      },
      PropertyDataV21: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV21: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV21"),
        flagKey: DynArray("FlagKeyDataV21"),
        triggerKey: DynArray("TriggerKeyDataV21"),
        type: Uint8
      },
      CurveKeyDataV21: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV21: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV21: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV21: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV21"),
        fileNameRef: DynArray("FileNameRefDataV21"),
        script: DynArray("ScriptDataV21"),
        textResource: DynArray("TextResourceDataV21")
      },
      AmbientLightDataV21: {
        ambientGroundColor: "ColorDefDataV21",
        ambientSkyColor: "ColorDefDataV21",
        fillColor: "ColorDefDataV21",
        hemisphericalColor: "ColorDefDataV21",
        name: Uint64
      },
      ColorDefDataV21: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV21: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV21: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV21: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV21")
      },
      TextEntryDataV21: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV21"),
      resources: "ResourceDataV21",
      trackGroup: Pointer("TrackGroupDataV21")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV22",
    version: 22,
    definitions: {
      SequenceDataV22: {
        name: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        updateScript: Uint64,
        length: Float32,
        trackGroup: DynArray("TrackGroupDataV22")
      },
      TrackGroupDataV22: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV22"),
        track: DynArray("TrackDataV22"),
        type: Uint8
      },
      PropertyDataV22: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV22: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV22"),
        flagKey: DynArray("FlagKeyDataV22"),
        triggerKey: DynArray("TriggerKeyDataV22"),
        type: Uint8
      },
      CurveKeyDataV22: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV22: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV22: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV22: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV22"),
        fileNameRef: DynArray("FileNameRefDataV22"),
        script: DynArray("ScriptDataV22"),
        textResource: DynArray("TextResourceDataV22")
      },
      AmbientLightDataV22: {
        ambientGroundColor: "ColorDefDataV22",
        ambientSkyColor: "ColorDefDataV22",
        fillColor: "ColorDefDataV22",
        hemisphericalColor: "ColorDefDataV22",
        name: Uint64
      },
      ColorDefDataV22: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV22: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV22: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV22: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV22")
      },
      TextEntryDataV22: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV22"),
      resources: "ResourceDataV22",
      trackGroup: Pointer("TrackGroupDataV22")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV23",
    version: 23,
    definitions: {
      SequenceDataV23: {
        name: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV23")
      },
      TrackGroupDataV23: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV23"),
        track: DynArray("TrackDataV23"),
        type: Uint8
      },
      PropertyDataV23: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV23: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV23"),
        flagKey: DynArray("FlagKeyDataV23"),
        triggerKey: DynArray("TriggerKeyDataV23"),
        type: Uint8
      },
      CurveKeyDataV23: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV23: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV23: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV23: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV23"),
        fileNameRef: DynArray("FileNameRefDataV23"),
        script: DynArray("ScriptDataV23"),
        textResource: DynArray("TextResourceDataV23")
      },
      AmbientLightDataV23: {
        ambientGroundColor: "ColorDefDataV23",
        ambientSkyColor: "ColorDefDataV23",
        fillColor: "ColorDefDataV23",
        hemisphericalColor: "ColorDefDataV23",
        name: Uint64
      },
      ColorDefDataV23: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV23: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV23: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV23: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV23")
      },
      TextEntryDataV23: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV23"),
      resources: "ResourceDataV23",
      trackGroup: Pointer("TrackGroupDataV23")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV24",
    version: 24,
    definitions: {
      SequenceDataV24: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV24")
      },
      TrackGroupDataV24: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV24"),
        track: DynArray("TrackDataV24"),
        type: Uint8
      },
      PropertyDataV24: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV24: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV24"),
        flagKey: DynArray("FlagKeyDataV24"),
        triggerKey: DynArray("TriggerKeyDataV24"),
        type: Uint8
      },
      CurveKeyDataV24: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV24: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV24: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV24: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV24"),
        fileNameRef: DynArray("FileNameRefDataV24"),
        script: DynArray("ScriptDataV24"),
        textResource: DynArray("TextResourceDataV24")
      },
      AmbientLightDataV24: {
        ambientGroundColor: "ColorDefDataV24",
        ambientSkyColor: "ColorDefDataV24",
        fillColor: "ColorDefDataV24",
        hemisphericalColor: "ColorDefDataV24",
        name: Uint64
      },
      ColorDefDataV24: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV24: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV24: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV24: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV24")
      },
      TextEntryDataV24: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV24"),
      resources: "ResourceDataV24",
      trackGroup: Pointer("TrackGroupDataV24")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV25",
    version: 25,
    definitions: {
      SequenceDataV25: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV25")
      },
      TrackGroupDataV25: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV25"),
        track: DynArray("TrackDataV25"),
        type: Uint8
      },
      PropertyDataV25: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV25: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV25"),
        flagKey: DynArray("FlagKeyDataV25"),
        triggerKey: DynArray("TriggerKeyDataV25"),
        type: Uint8
      },
      CurveKeyDataV25: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV25: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV25: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV25: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV25"),
        fileNameRef: DynArray("FileNameRefDataV25"),
        script: DynArray("ScriptDataV25"),
        textResource: DynArray("TextResourceDataV25")
      },
      AmbientLightDataV25: {
        ambientGroundColor: "ColorDefDataV25",
        ambientSkyColor: "ColorDefDataV25",
        fillColor: "ColorDefDataV25",
        hemisphericalColor: "ColorDefDataV25",
        name: Uint64
      },
      ColorDefDataV25: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV25: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV25: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV25: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV25")
      },
      TextEntryDataV25: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV25"),
      resources: "ResourceDataV25",
      trackGroup: Pointer("TrackGroupDataV25")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV26",
    version: 26,
    definitions: {
      SequenceDataV26: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV26")
      },
      TrackGroupDataV26: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV26"),
        track: DynArray("TrackDataV26"),
        type: Uint8
      },
      PropertyDataV26: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV26: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV26"),
        flagKey: DynArray("FlagKeyDataV26"),
        triggerKey: DynArray("TriggerKeyDataV26"),
        type: Uint8
      },
      CurveKeyDataV26: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV26: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV26: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV26: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV26"),
        fileNameRef: DynArray("FileNameRefDataV26"),
        script: DynArray("ScriptDataV26"),
        textResource: DynArray("TextResourceDataV26")
      },
      AmbientLightDataV26: {
        ambientGroundColor: "ColorDefDataV26",
        ambientSkyColor: "ColorDefDataV26",
        fillColor: "ColorDefDataV26",
        hemisphericalColor: "ColorDefDataV26",
        name: Uint64
      },
      ColorDefDataV26: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV26: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV26: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV26: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV26")
      },
      TextEntryDataV26: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV26"),
      resources: "ResourceDataV26",
      trackGroup: Pointer("TrackGroupDataV26")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV27",
    version: 27,
    definitions: {
      SequenceDataV27: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV27")
      },
      TrackGroupDataV27: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV27"),
        track: DynArray("TrackDataV27"),
        type: Uint8
      },
      PropertyDataV27: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV27: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV27"),
        flagKey: DynArray("FlagKeyDataV27"),
        triggerKey: DynArray("TriggerKeyDataV27"),
        type: Uint8
      },
      CurveKeyDataV27: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV27: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV27: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV27: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV27"),
        fileNameRef: DynArray("FileNameRefDataV27"),
        script: DynArray("ScriptDataV27"),
        textResource: DynArray("TextResourceDataV27")
      },
      AmbientLightDataV27: {
        ambientGroundColor: "ColorDefDataV27",
        ambientSkyColor: "ColorDefDataV27",
        fillColor: "ColorDefDataV27",
        hemisphericalColor: "ColorDefDataV27",
        name: Uint64
      },
      ColorDefDataV27: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV27: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV27: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV27: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV27")
      },
      TextEntryDataV27: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV27"),
      resources: "ResourceDataV27",
      trackGroup: Pointer("TrackGroupDataV27")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV28",
    version: 28,
    definitions: {
      SequenceDataV28: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV28")
      },
      TrackGroupDataV28: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV28"),
        track: DynArray("TrackDataV28"),
        type: Uint8
      },
      PropertyDataV28: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV28: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV28"),
        flagKey: DynArray("FlagKeyDataV28"),
        triggerKey: DynArray("TriggerKeyDataV28"),
        type: Uint8
      },
      CurveKeyDataV28: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV28: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV28: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV28: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV28"),
        fileNameRef: DynArray("FileNameRefDataV28"),
        script: DynArray("ScriptDataV28"),
        textResource: DynArray("TextResourceDataV28")
      },
      AmbientLightDataV28: {
        ambientGroundColor: "ColorDefDataV28",
        ambientSkyColor: "ColorDefDataV28",
        fillColor: "ColorDefDataV28",
        hemisphericalColor: "ColorDefDataV28",
        name: Uint64
      },
      ColorDefDataV28: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV28: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV28: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV28: {
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV28")
      },
      TextEntryDataV28: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV28"),
      resources: "ResourceDataV28",
      trackGroup: Pointer("TrackGroupDataV28")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV29",
    version: 29,
    definitions: {
      SequenceDataV29: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV29")
      },
      TrackGroupDataV29: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV29"),
        track: DynArray("TrackDataV29"),
        type: Uint8
      },
      PropertyDataV29: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV29: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV29"),
        flagKey: DynArray("FlagKeyDataV29"),
        triggerKey: DynArray("TriggerKeyDataV29"),
        type: Uint8
      },
      CurveKeyDataV29: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV29: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV29: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV29: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV29"),
        fileNameRef: DynArray("FileNameRefDataV29"),
        script: DynArray("ScriptDataV29"),
        textResource: DynArray("TextResourceDataV29")
      },
      AmbientLightDataV29: {
        ambientGroundColor: "ColorDefDataV29",
        ambientSkyColor: "ColorDefDataV29",
        fillColor: "ColorDefDataV29",
        hemisphericalColor: "ColorDefDataV29",
        name: Uint64
      },
      ColorDefDataV29: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV29: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV29: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV29: {
        guid: FixedArray(Uint8, 16),
        name: Uint64,
        id: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV29")
      },
      TextEntryDataV29: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV29"),
      resources: "ResourceDataV29",
      trackGroup: Pointer("TrackGroupDataV29")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV30",
    version: 30,
    definitions: {
      SequenceDataV30: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV30")
      },
      TrackGroupDataV30: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV30"),
        track: DynArray("TrackDataV30"),
        type: Uint8
      },
      PropertyDataV30: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV30: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV30"),
        flagKey: DynArray("FlagKeyDataV30"),
        triggerKey: DynArray("TriggerKeyDataV30"),
        type: Uint8
      },
      CurveKeyDataV30: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV30: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV30: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV30: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV30"),
        fileNameRef: DynArray("FileNameRefDataV30"),
        script: DynArray("ScriptDataV30"),
        textResource: DynArray("TextResourceDataV30")
      },
      AmbientLightDataV30: {
        ambientGroundColor: "ColorDefDataV30",
        ambientSkyColor: "ColorDefDataV30",
        fillColor: "ColorDefDataV30",
        hemisphericalColor: "ColorDefDataV30",
        name: Uint64
      },
      ColorDefDataV30: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV30: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV30: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV30: {
        name: Uint64,
        index: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV30")
      },
      TextEntryDataV30: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV30"),
      resources: "ResourceDataV30",
      trackGroup: Pointer("TrackGroupDataV30")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV31",
    version: 31,
    definitions: {
      SequenceDataV31: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV31")
      },
      TrackGroupDataV31: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV31"),
        track: DynArray("TrackDataV31"),
        type: Uint8
      },
      PropertyDataV31: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV31: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV31"),
        flagKey: DynArray("FlagKeyDataV31"),
        triggerKey: DynArray("TriggerKeyDataV31"),
        type: Uint8
      },
      CurveKeyDataV31: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV31: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV31: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV31: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV31"),
        fileNameRef: DynArray("FileNameRefDataV31"),
        script: DynArray("ScriptDataV31"),
        textResource: DynArray("TextResourceDataV31")
      },
      AmbientLightDataV31: {
        ambientGroundColor: "ColorDefDataV31",
        ambientSkyColor: "ColorDefDataV31",
        fillColor: "ColorDefDataV31",
        hemisphericalColor: "ColorDefDataV31",
        name: Uint64
      },
      ColorDefDataV31: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV31: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV31: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV31: {
        name: Uint64,
        index: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV31")
      },
      TextEntryDataV31: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV31"),
      resources: "ResourceDataV31",
      trackGroup: Pointer("TrackGroupDataV31")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV32",
    version: 32,
    definitions: {
      SequenceDataV32: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV32")
      },
      TrackGroupDataV32: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV32"),
        track: DynArray("TrackDataV32"),
        type: Uint8
      },
      PropertyDataV32: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV32: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV32"),
        flagKey: DynArray("FlagKeyDataV32"),
        triggerKey: DynArray("TriggerKeyDataV32"),
        type: Uint8
      },
      CurveKeyDataV32: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV32: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV32: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV32: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV32"),
        fileNameRef: DynArray("FileNameRefDataV32"),
        script: DynArray("ScriptDataV32"),
        textResource: DynArray("TextResourceDataV32")
      },
      AmbientLightDataV32: {
        ambientGroundColor: "ColorDefDataV32",
        ambientSkyColor: "ColorDefDataV32",
        fillColor: "ColorDefDataV32",
        hemisphericalColor: "ColorDefDataV32",
        name: Uint64
      },
      ColorDefDataV32: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV32: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV32: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV32: {
        name: Uint64,
        index: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV32")
      },
      TextEntryDataV32: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV32"),
      resources: "ResourceDataV32",
      trackGroup: Pointer("TrackGroupDataV32")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV33",
    version: 33,
    definitions: {
      SequenceDataV33: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV33")
      },
      TrackGroupDataV33: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV33"),
        track: DynArray("TrackDataV33"),
        type: Uint8
      },
      PropertyDataV33: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV33: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV33"),
        flagKey: DynArray("FlagKeyDataV33"),
        triggerKey: DynArray("TriggerKeyDataV33"),
        type: Uint8
      },
      CurveKeyDataV33: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV33: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV33: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV33: {
        crc: Uint32,
        ambientLightResource: DynArray("AmbientLightDataV33"),
        fileNameRef: DynArray("FileNameRefDataV33"),
        script: DynArray("ScriptDataV33"),
        textResource: DynArray("TextResourceDataV33")
      },
      AmbientLightDataV33: {
        ambientGroundColor: "ColorDefDataV33",
        ambientSkyColor: "ColorDefDataV33",
        fillColor: "ColorDefDataV33",
        hemisphericalColor: "ColorDefDataV33",
        name: Uint64
      },
      ColorDefDataV33: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV33: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV33: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV33: {
        name: Uint64,
        index: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV33")
      },
      TextEntryDataV33: {
        text: String16(),
        language: Uint8
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV33"),
      resources: "ResourceDataV33",
      trackGroup: Pointer("TrackGroupDataV33")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV34",
    version: 34,
    definitions: {
      SequenceDataV34: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV34")
      },
      TrackGroupDataV34: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV34"),
        track: DynArray("TrackDataV34"),
        type: Uint8
      },
      PropertyDataV34: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV34: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV34"),
        flagKey: DynArray("FlagKeyDataV34"),
        triggerKey: DynArray("TriggerKeyDataV34"),
        type: Uint8
      },
      CurveKeyDataV34: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV34: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV34: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV34: {
        ambientLightResource: DynArray("AmbientLightDataV34"),
        fileNameRef: DynArray("FileNameRefDataV34"),
        script: DynArray("ScriptDataV34"),
        textResource: DynArray("TextResourceDataV34"),
        speciesResource: DynArray("SpeciesResourceDataV34")
      },
      AmbientLightDataV34: {
        ambientGroundColor: "ColorDefDataV34",
        ambientSkyColor: "ColorDefDataV34",
        fillColor: "ColorDefDataV34",
        hemisphericalColor: "ColorDefDataV34",
        name: Uint64
      },
      ColorDefDataV34: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV34: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV34: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV34: {
        name: Uint64,
        index: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV34")
      },
      TextEntryDataV34: {
        text: String16(),
        language: Uint8
      },
      SpeciesResourceDataV34: {
        speciesId: FixedArray(Uint8, 16),
        modelId: Uint64,
        modelVariant: Uint64
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV34"),
      resources: "ResourceDataV34",
      trackGroup: Pointer("TrackGroupDataV34")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV35",
    version: 35,
    definitions: {
      SequenceDataV35: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV35")
      },
      TrackGroupDataV35: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV35"),
        track: DynArray("TrackDataV35"),
        type: Uint8
      },
      PropertyDataV35: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV35: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV35"),
        flagKey: DynArray("FlagKeyDataV35"),
        triggerKey: DynArray("TriggerKeyDataV35"),
        type: Uint8
      },
      CurveKeyDataV35: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV35: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV35: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV35: {
        ambientLightResource: DynArray("AmbientLightDataV35"),
        fileNameRef: DynArray("FileNameRefDataV35"),
        script: DynArray("ScriptDataV35"),
        textResource: DynArray("TextResourceDataV35"),
        speciesResource: DynArray("SpeciesResourceDataV35")
      },
      AmbientLightDataV35: {
        ambientGroundColor: "ColorDefDataV35",
        ambientSkyColor: "ColorDefDataV35",
        fillColor: "ColorDefDataV35",
        hemisphericalColor: "ColorDefDataV35",
        name: Uint64
      },
      ColorDefDataV35: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV35: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV35: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV35: {
        name: Uint64,
        index: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV35")
      },
      TextEntryDataV35: {
        text: String16(),
        language: Uint8
      },
      SpeciesResourceDataV35: {
        speciesId: FixedArray(Uint8, 16),
        name: Uint64,
        modelId: Uint64,
        modelVariant: Uint64
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV35"),
      resources: "ResourceDataV35",
      trackGroup: Pointer("TrackGroupDataV35")
    }
  },
  {
    chunkName: "CSCN",
    name: "SceneDataV36",
    version: 36,
    definitions: {
      SequenceDataV36: {
        name: Uint64,
        playScript: Uint64,
        updateScript: Uint64,
        environmentMap: Filename(),
        map: String16(),
        clientMap: String16(),
        length: Float32,
        flags: Uint32,
        trackGroup: DynArray("TrackGroupDataV36")
      },
      TrackGroupDataV36: {
        name: Uint64,
        flags: Uint32,
        prop: DynArray("PropertyDataV36"),
        track: DynArray("TrackDataV36"),
        type: Uint8
      },
      PropertyDataV36: {
        value: Uint64,
        pathVal: Filename(),
        type: Uint8
      },
      TrackDataV36: {
        name: Uint64,
        curveKey: DynArray("CurveKeyDataV36"),
        flagKey: DynArray("FlagKeyDataV36"),
        triggerKey: DynArray("TriggerKeyDataV36"),
        type: Uint8
      },
      CurveKeyDataV36: {
        time: Float32,
        value: Float32,
        inTangent: Float32,
        outTangent: Float32
      },
      FlagKeyDataV36: {
        time: Float32,
        value: Float32
      },
      TriggerKeyDataV36: {
        time: Float32,
        flags1: Uint8,
        flags2: Uint8,
        flags3: Uint8,
        flags4: Uint8,
        token1: Uint64,
        token2: Uint64,
        value1: Float32,
        value2: Float32,
        value3: Float32,
        value4: Float32
      },
      ResourceDataV36: {
        ambientLightResource: DynArray("AmbientLightDataV36"),
        fileNameRef: DynArray("FileNameRefDataV36"),
        script: DynArray("ScriptDataV36"),
        textResource: DynArray("TextResourceDataV36"),
        speciesResource: DynArray("SpeciesResourceDataV36")
      },
      AmbientLightDataV36: {
        ambientGroundColor: "ColorDefDataV36",
        ambientSkyColor: "ColorDefDataV36",
        fillColor: "ColorDefDataV36",
        hemisphericalColor: "ColorDefDataV36",
        name: Uint64
      },
      ColorDefDataV36: {
        intensity: Float32,
        color: FixedArray(Uint8, 3)
      },
      FileNameRefDataV36: {
        name: Uint64,
        fileName: Filename()
      },
      ScriptDataV36: {
        name: Uint64,
        byteCode: DynArray(Uint8)
      },
      TextResourceDataV36: {
        name: Uint64,
        index: Uint32,
        voiceId: Uint32,
        textEntry: DynArray("TextEntryDataV36")
      },
      TextEntryDataV36: {
        text: String16(),
        language: Uint8
      },
      SpeciesResourceDataV36: {
        speciesId: FixedArray(Uint8, 16),
        name: Uint64,
        modelId: Uint64,
        modelVariant: Uint64
      }
    },
    root: {
      startingSequence: Uint64,
      sequence: DynArray("SequenceDataV36"),
      resources: "ResourceDataV36",
      trackGroup: Pointer("TrackGroupDataV36")
    }
  }
]