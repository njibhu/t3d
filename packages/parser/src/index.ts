import * as Types from './types';
import {DataType} from './internals';

export enum Endianness {
  LITTLE_ENDIAN,
  BIG_ENDIAN,
}

export default class DataReader {
  private arrayBuffer: ArrayBuffer;
  private byteLength: number;
  private dataView: DataView;
  readonly endianness: Endianness;
  private position = 0;

  constructor(
    arrayBuffer: ArrayBuffer,
    endianness: Endianness = Endianness.LITTLE_ENDIAN,
  ) {
    this.arrayBuffer = arrayBuffer;
    this.endianness = endianness;
    this.byteLength = this.arrayBuffer.byteLength;
    this.dataView = new DataView(this.arrayBuffer);
  }

  /**
   * Move the cursor position
   */
  seek(position: number): void {
    const npos = Math.max(0, Math.min(this.byteLength, pos));
    this.position = isNaN(npos) || !isFinite(npos) ? 0 : npos;
  }

  /**
   * Returns true if the cursor is at the end of the buffer false otherwise
   */
  isEof(): boolean {
    return this.position >= this.byteLength;
  }

  readType(type: DataType): any {}

  readChunk(chunk: any): any {}
}
