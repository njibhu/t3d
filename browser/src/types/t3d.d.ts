/// Type-only declarations for the t3d-lib bundle. Vite resolves the runtime
/// import to ../../library/build/T3D.mjs via its config alias; TypeScript
/// resolves it to this file via tsconfig paths.

export interface FileMeta {
  offset: bigint | number;
  size: number;
  compressed: boolean;
  crc: number;
}

export interface FileListEntry {
  mftId: number;
  baseIdList: number[];
  size: number;
  crc: number;
  fileType: string;
}

export class LocalReader {
  indexTable: number[];
  openArchive(file: File): Promise<void>;
  getFileIndex(baseId: number): number;
  getFileMeta(mftId: number): FileMeta | undefined;
  getReverseIndex(): number[][];
  getFileList(): Promise<FileListEntry[]>;
  readFileList(): Promise<FileListEntry[]>;
  loadFile(baseId: number, cb: (buf: ArrayBuffer | undefined) => void): void;
}

export class FileParser {
  constructor(buffer: ArrayBuffer, skipChunks?: boolean);
  header: { type: string };
  chunks: Array<{ header: { type: string; chunkDataSize: number }; data: any }>;
  getChunk(type: string): { header: { type: string }; data: any } | undefined;
}

export class DataRenderer {
  static rendererName: string;
  constructor(localReader: LocalReader, settings: any, context: any, logger?: any, name?: string);
  renderAsync(cb: () => void): void;
}
export class SingleModelRenderer extends DataRenderer {}
export class StringRenderer extends DataRenderer {}
export class EnvironmentRenderer extends DataRenderer {}
export class TerrainRenderer extends DataRenderer {}
export class PropertiesRenderer extends DataRenderer {}
export class ZoneRenderer extends DataRenderer {}
export class HavokRenderer extends DataRenderer {}

export const Logger: {
  TYPE_PROGRESS: number;
  TYPE_MESSAGE: number;
  TYPE_WARNING: number;
  TYPE_ERROR: number;
  logFunctions: Record<number, (...args: any[]) => void>;
  log: (type: number, ...args: any[]) => void;
};

interface T3DStatic {
  version: string;
  DataRenderer: typeof DataRenderer;
  SingleModelRenderer: typeof SingleModelRenderer;
  StringRenderer: typeof StringRenderer;
  EnvironmentRenderer: typeof EnvironmentRenderer;
  TerrainRenderer: typeof TerrainRenderer;
  PropertiesRenderer: typeof PropertiesRenderer;
  ZoneRenderer: typeof ZoneRenderer;
  HavokRenderer: typeof HavokRenderer;
  Logger: typeof Logger;
  getLocalReader(
    file: File,
    callback: (lr: LocalReader) => void,
    workerPath?: string,
    noIndexedDB?: boolean
  ): LocalReader;
  getFileListAsync(localReader: LocalReader, callback: (files: Record<string, number[]>) => void): void;
  runRenderer(
    renderClass: typeof DataRenderer,
    localReader: LocalReader,
    settings: any,
    context: any,
    cb: () => void
  ): void;
  renderMapContentsAsync(
    localReader: LocalReader,
    fileName: number | string,
    renderers: Array<{ renderClass: typeof DataRenderer; settings: any }>,
    callback: (context: any) => void,
    logger?: typeof Logger
  ): void;
  getContextValue<T = any>(context: any, clazz: typeof DataRenderer, propName: string, defaultValue?: T): T;
}

declare const T3D: T3DStatic;
export default T3D;

declare global {
  // The library also assigns itself to globalThis.T3D for internal use.
  // eslint-disable-next-line no-var
  var T3D: T3DStatic;
}
