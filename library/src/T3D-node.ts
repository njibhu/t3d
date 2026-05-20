declare function require(name: string): any;

import T3D from "./T3DLib";

const { Blob, FileReader } = require("vblob");
const THREE = require("three");
const Worker = require("web-worker");
const fs = require("fs");

const globalScope = globalThis as typeof globalThis & {
  Blob?: unknown;
  FileReader?: unknown;
  window?: Record<string, unknown>;
  THREE?: unknown;
  Worker?: unknown;
  fs?: unknown;
  T3D?: unknown;
};

globalScope.Blob = Blob;
globalScope.FileReader = FileReader;
globalScope.window = globalScope.window ?? {};
globalScope.window.FileReader = FileReader;
globalScope.THREE = THREE;
globalScope.Worker = Worker;
globalScope.fs = fs;
globalScope.T3D = T3D;

export default T3D;
