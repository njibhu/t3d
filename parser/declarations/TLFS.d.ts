

export type PackMapToolFsV0 = {
  filePtr: Array<PackMapToolFsFileV0>
}

export type PackMapToolFsFileV0 = {
  filename: string,
  time: number,
  dataPtr: Array<number>
}