import * as Types from "./types";
import { DataType } from "./internals";

export enum Endianness {
  LITTLE_ENDIAN,
  BIG_ENDIAN
}

export default class DataReader {
  private arrayBuffer: ArrayBuffer;
  readonly endianness: Endianness;
  private position = 0;

  constructor(
    arrayBuffer: ArrayBuffer,
    endianness: Endianness = Endianness.LITTLE_ENDIAN
  ) {
    this.arrayBuffer = arrayBuffer;
    this.endianness = endianness;
  }

  /**
   * Move the cursor position
   */
  seek(position: number): void {}

  /**
   * Returns true if the cursor is at the end of the buffer false otherwise
   */
  isEof(): boolean {
    return false;
  }

  readType(type: DataType): any {}

  readChunk(chunk: any): any {}
}
