

export type AmatAppleUPDBinfo = {
  uPDBarray: Array<AmatAppleUPDBentry>
}

export type AmatAppleUPDBentry = {
  originalSize: number,
  compressedData: Array<number>,
  originalName: string
}