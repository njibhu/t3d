let Utils = require("../../util/ParserUtils.js");

module.exports = [
  /// ==================================================
  /// Chunk: zon2, versions: 22, strucTab: 0x1723840
  /// ==================================================

  {
    name: "zon2",
    versions: {
      // => Version: 21
      21: function () {
        this.PackMapZoneModelV22 = [
          "filename",
          Utils.getFileNameReader(),
          "probability",
          "float32",
          "flags",
          "uint32",
          "hslOffset",
          ["[]", "float32", 3],
          "zOffsets",
          ["[]", "uint8", 2],
        ];

        this.PackMapZoneLayerDefV22 = [
          "type",
          "uint8",
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "hslRanges",
          ["[]", ["[]", "float32", 2], 4],
          "instanceScaleJitter",
          "float32",
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "materialname",
          Utils.getFileNameReader(),
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV22),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV22),
          "reserved",
          Utils.getString16Reader(),
        ];

        this.PackMapZonePageV10 = [
          "flags",
          Utils.getArrayReader("uint8"),
          "chunkCoord",
          ["[]", "uint32", 2],
          "seed",
          "uint8",
          "paintFlags",
          Utils.getArrayReader("uint32"),
          "string",
          Utils.getString16Reader(),
        ];

        this.PackMapZonePageTableV10 = ["pageArray", Utils.getArrayReader(this.PackMapZonePageV10), "flags", "uint32"];

        this.PackMapZoneDefV22 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV22),
          "timeStamp",
          Utils.getQWordReader(),
          "pageTable",
          Utils.getPointerReader(this.PackMapZonePageTableV10),
          "reserved",
          Utils.getString16Reader(),
        ];

        this.PackMapZoneEncodingDataV22 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV22 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV22 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV22),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV22),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
          "broadId",
          "uint16",
          "reserved",
          Utils.getString16Reader(),
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapZonesV22 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV22),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV22),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
          "string",
          Utils.getString16Reader(),
        ];
      },

      // => Version: 20, ReferencedFunction: 0xEB7610
      20: function () {
        this.PackMapZoneModelV21 = [
          "filename",
          Utils.getFileNameReader(),
          "probability",
          "float32",
          "flags",
          "uint32",
          "hslOffset",
          ["[]", "float32", 3],
          "zOffsets",
          ["[]", "uint8", 2],
        ];

        this.PackMapZoneLayerDefV21 = [
          "type",
          "uint8",
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "hslRanges",
          ["[]", ["[]", "float32", 2], 4],
          "instanceScaleJitter",
          "float32",
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "materialname",
          Utils.getFileNameReader(),
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV21),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV21),
        ];

        this.PackMapZonePageV9 = [
          "flags",
          Utils.getArrayReader("uint8"),
          "chunkCoord",
          ["[]", "uint32", 2],
          "seed",
          "uint8",
          "paintFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapZonePageTableV9 = ["pageArray", Utils.getArrayReader(this.PackMapZonePageV9), "flags", "uint32"];

        this.PackMapZoneDefV21 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV21),
          "timeStamp",
          Utils.getQWordReader(),
          "pageTable",
          Utils.getPointerReader(this.PackMapZonePageTableV9),
        ];

        this.PackMapZoneEncodingDataV21 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV21 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV21 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV21),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV21),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapZonesV21 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV21),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV21),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 19, ReferencedFunction: 0x452AB0
      19: function () {
        this.PackMapZoneModelV20 = [
          "filename",
          Utils.getFileNameReader(),
          "probability",
          "float32",
          "flags",
          "uint32",
          "hslOffset",
          ["[]", "float32", 3],
          "zOffsets",
          ["[]", "uint8", 2],
        ];

        this.PackMapZoneLayerDefV20 = [
          "type",
          "uint8",
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "hslRanges",
          ["[]", ["[]", "float32", 2], 3],
          "instanceScaleJitter",
          "float32",
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "materialname",
          Utils.getFileNameReader(),
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV20),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV20),
        ];

        this.PackMapZonePageV8 = [
          "flags",
          Utils.getArrayReader("uint8"),
          "chunkCoord",
          ["[]", "uint32", 2],
          "seed",
          "uint8",
          "paintFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapZonePageTableV8 = ["pageArray", Utils.getArrayReader(this.PackMapZonePageV8), "flags", "uint32"];

        this.PackMapZoneDefV20 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV20),
          "timeStamp",
          Utils.getQWordReader(),
          "pageTable",
          Utils.getPointerReader(this.PackMapZonePageTableV8),
        ];

        this.PackMapZoneEncodingDataV20 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV20 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV20 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV20),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV20),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapZonesV20 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV20),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV20),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 18, ReferencedFunction: 0xEB7580
      18: function () {
        this.PackMapZoneModelV19 = [
          "filename",
          Utils.getFileNameReader(),
          "probability",
          "float32",
          "flags",
          "uint32",
          "hslOffset",
          ["[]", "float32", 3],
          "zOffsets",
          ["[]", "uint8", 2],
        ];

        this.PackMapZoneLayerDefV19 = [
          "type",
          "uint8",
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "hslRanges",
          ["[]", ["[]", "float32", 2], 4],
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "materialname",
          Utils.getFileNameReader(),
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV19),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV19),
        ];

        this.PackMapZonePageV7 = [
          "flags",
          Utils.getArrayReader("uint8"),
          "chunkCoord",
          ["[]", "uint32", 2],
          "seed",
          "uint8",
          "paintFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapZonePageTableV7 = ["pageArray", Utils.getArrayReader(this.PackMapZonePageV7), "flags", "uint32"];

        this.PackMapZoneDefV19 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV19),
          "timeStamp",
          Utils.getQWordReader(),
          "pageTable",
          Utils.getPointerReader(this.PackMapZonePageTableV7),
        ];

        this.PackMapZoneEncodingDataV19 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV19 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV19 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV19),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV19),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapZonesV19 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV19),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV19),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 17, ReferencedFunction: 0xEB74C0
      17: function () {
        this.PackMapZoneModelV18 = [
          "filename",
          Utils.getFileNameReader(),
          "probability",
          "float32",
          "flags",
          "uint32",
          "hslOffset",
          ["[]", "float32", 3],
          "zOffsets",
          ["[]", "uint8", 2],
        ];

        this.PackMapZoneLayerDefV18 = [
          "type",
          "uint8",
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "hslRanges",
          ["[]", ["[]", "float32", 2], 3],
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "materialname",
          Utils.getFileNameReader(),
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV18),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV18),
        ];

        this.PackMapZonePageV6 = [
          "flags",
          Utils.getArrayReader("uint8"),
          "chunkCoord",
          ["[]", "uint32", 2],
          "seed",
          "uint8",
          "paintFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapZonePageTableV6 = ["pageArray", Utils.getArrayReader(this.PackMapZonePageV6), "flags", "uint32"];

        this.PackMapZoneDefV18 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV18),
          "timeStamp",
          Utils.getQWordReader(),
          "pageTable",
          Utils.getPointerReader(this.PackMapZonePageTableV6),
        ];

        this.PackMapZoneEncodingDataV18 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV18 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV18 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV18),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV18),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapZonesV18 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV18),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV18),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 16, ReferencedFunction: 0xEB72D0
      16: function () {
        this.PackMapZoneModelV17 = [
          "filename",
          Utils.getFileNameReader(),
          "probability",
          "float32",
          "flags",
          "uint32",
          "hslOffset",
          ["[]", "float32", 3],
        ];

        this.PackMapZoneLayerDefV17 = [
          "type",
          "uint8",
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV17),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV17),
        ];

        this.PackMapZonePageV5 = [
          "flags",
          Utils.getArrayReader("uint8"),
          "chunkCoord",
          ["[]", "uint32", 2],
          "seed",
          "uint8",
          "paintFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapZonePageTableV5 = ["pageArray", Utils.getArrayReader(this.PackMapZonePageV5), "flags", "uint32"];

        this.PackMapZoneDefV17 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV17),
          "timeStamp",
          Utils.getQWordReader(),
          "pageTable",
          Utils.getPointerReader(this.PackMapZonePageTableV5),
        ];

        this.PackMapZoneEncodingDataV17 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV17 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV17 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV17),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV17),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapZonesV17 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV17),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV17),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 15, ReferencedFunction: 0xEB72D0
      15: function () {
        this.PackMapZoneModelV16 = [
          "filename",
          Utils.getFileNameReader(),
          "probability",
          "float32",
          "flags",
          "uint32",
          "hslOffset",
          ["[]", "float32", 3],
        ];

        this.PackMapZoneLayerDefV16 = [
          "type",
          "uint8",
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV16),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV16),
        ];

        this.PackMapZonePageV4 = [
          "flags",
          Utils.getArrayReader("uint8"),
          "chunkCoord",
          ["[]", "uint32", 2],
          "seed",
          "uint8",
          "paintFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapZonePageTableV4 = ["pageArray", Utils.getArrayReader(this.PackMapZonePageV4), "flags", "uint32"];

        this.PackMapZoneDefV16 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV16),
          "timeStamp",
          Utils.getQWordReader(),
          "pageTable",
          Utils.getPointerReader(this.PackMapZonePageTableV4),
        ];

        this.PackMapZoneEncodingDataV16 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV16 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV16 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV16),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV16),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
          "broadId",
          "uint16",
        ];

        this.PackBroadphaseType = ["broadphaseData", Utils.getArrayReader("uint8")];

        this.__root = this.PackMapZonesV16 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV16),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV16),
          "broadPhase",
          this.PackBroadphaseType,
          "maxBroadId",
          "uint16",
        ];
      },

      // => Version: 14
      14: function () {
        this.PackMapZoneModelV15 = [
          "filename",
          Utils.getFileNameReader(),
          "probability",
          "float32",
          "flags",
          "uint32",
          "hslOffset",
          ["[]", "float32", 3],
        ];

        this.PackMapZoneLayerDefV15 = [
          "type",
          "uint8",
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV15),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV15),
        ];

        this.PackMapZonePageV3 = [
          "flags",
          Utils.getArrayReader("uint8"),
          "chunkCoord",
          ["[]", "uint32", 2],
          "seed",
          "uint8",
          "paintFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapZonePageTableV3 = ["pageArray", Utils.getArrayReader(this.PackMapZonePageV3), "flags", "uint32"];

        this.PackMapZoneDefV15 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV15),
          "timeStamp",
          Utils.getQWordReader(),
          "pageTable",
          Utils.getPointerReader(this.PackMapZonePageTableV3),
        ];

        this.PackMapZoneEncodingDataV15 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV15 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV15 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV15),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV15),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
        ];

        this.__root = this.PackMapZonesV15 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV15),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV15),
        ];
      },

      // => Version: 13
      13: function () {
        this.PackMapZoneModelV14 = ["filename", Utils.getFileNameReader(), "probability", "float32", "flags", "uint32"];

        this.PackMapZoneLayerDefV14 = [
          "type",
          "uint8",
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV14),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV14),
        ];

        this.PackMapZonePageV2 = [
          "flags",
          Utils.getArrayReader("uint8"),
          "chunkCoord",
          ["[]", "uint32", 2],
          "seed",
          "uint8",
          "paintFlags",
          Utils.getArrayReader("uint32"),
        ];

        this.PackMapZonePageTableV2 = ["pageArray", Utils.getArrayReader(this.PackMapZonePageV2), "flags", "uint32"];

        this.PackMapZoneDefV14 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV14),
          "timeStamp",
          Utils.getQWordReader(),
          "pageTable",
          Utils.getPointerReader(this.PackMapZonePageTableV2),
        ];

        this.PackMapZoneEncodingDataV14 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV14 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV14 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV14),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV14),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
        ];

        this.__root = this.PackMapZonesV14 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV14),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV14),
        ];
      },

      // => Version: 12
      12: function () {
        this.PackMapZoneModelV13 = ["filename", Utils.getFileNameReader(), "probability", "float32", "flags", "uint32"];

        this.PackMapZoneLayerDefV13 = [
          "type",
          "uint8",
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV13),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV13),
        ];

        this.PackMapZoneDefV13 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV13),
          "timeStamp",
          Utils.getQWordReader(),
        ];

        this.PackMapZoneEncodingDataV13 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV13 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV13 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV13),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV13),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
        ];

        this.__root = this.PackMapZonesV13 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV13),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV13),
        ];
      },

      // => Version: 11
      11: function () {
        this.PackMapZoneModelV12 = ["filename", Utils.getFileNameReader(), "probability", "float32", "flags", "uint32"];

        this.PackMapZoneLayerDefV12 = [
          "height",
          "uint8",
          "width",
          "uint8",
          "radiusGround",
          "uint8",
          "sortGroup",
          "uint8",
          "tiling",
          "uint8",
          "scaleRange",
          ["[]", "float32", 2],
          "probability",
          "float32",
          "fadeRange",
          ["[]", "float32", 2],
          "rotRange",
          ["[]", ["[]", "float32", 2], 3],
          "noise",
          "uint8",
          "layerFlags",
          "uint32",
          "modelArray",
          Utils.getArrayReader(this.PackMapZoneModelV12),
          "subModel",
          Utils.getPointerReader(this.PackMapZoneModelV12),
        ];

        this.PackMapZoneDefV12 = [
          "defFilename",
          Utils.getFileNameReader(),
          "token",
          "uint32",
          "layerDefArray",
          Utils.getArrayReader(this.PackMapZoneLayerDefV12),
          "timeStamp",
          Utils.getQWordReader(),
        ];

        this.PackMapZoneEncodingDataV12 = ["index", "uint16", "offset", "uint8"];

        this.PackMapZoneCollideDataV12 = ["normalX", "float32", "normalY", "float32", "zPos", "float32"];

        this.PackMapZoneV12 = [
          "zoneFlags",
          "uint32",
          "vertRect",
          ["[]", "uint32", 4],
          "waterHeight",
          "float32",
          "seed",
          "uint8",
          "defToken",
          "uint32",
          "range",
          ["[]", "float32", 2],
          "zPos",
          "float32",
          "flags",
          Utils.getArrayReader("uint8"),
          "encodeData",
          Utils.getArrayReader(this.PackMapZoneEncodingDataV12),
          "collideData",
          Utils.getArrayReader(this.PackMapZoneCollideDataV12),
          "offsetData",
          Utils.getArrayReader("uint16"),
          "vertices",
          Utils.getArrayReader(["[]", "float32", 2]),
        ];

        this.__root = this.PackMapZonesV12 = [
          "zoneDefArray",
          Utils.getArrayReader(this.PackMapZoneDefV12),
          "zoneArray",
          Utils.getArrayReader(this.PackMapZoneV12),
        ];
      },
    },
  },
];
