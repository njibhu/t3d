const DataStream = require("DataStream.js");
global.DataStream = DataStream;

const { Blob, FileReader } = require("vblob");
global.Blob = Blob;
global.FileReader = FileReader;
global.window = {};
global.window.FileReader = FileReader;

const THREE = require("three");
global.THREE = THREE;

const Worker = require("web-worker");
global.Worker = Worker;

const fs = require("fs");
global.fs = fs;

const T3D = require("./T3DLib");
global.T3D = T3D;

module.exports = T3D;
