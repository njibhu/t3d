

export type AmatXbxUPDBinfo = {
  uPDBarray: Array<AmatXbxUPDBentry>
}

export type AmatXbxUPDBentry = {
  originalSize: number,
  compressedData: Array<number>,
  originalName: string
}