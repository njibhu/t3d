import { FileParser } from "t3d-parser";

/**
 * Parse the beginning of a file to find its type
 *
 * @memberof FileTypes
 */
export function getFileType(buffer: ArrayBuffer): string {
  const dataView = new DataView(buffer);
  const first4 = String.fromCharCode(
    dataView.getUint8(0),
    dataView.getUint8(1),
    dataView.getUint8(2),
    dataView.getUint8(3)
  );

  // Parse textures
  switch (first4) {
    case "ATEC":
      return "TEXTURE_ATEC";
    case "ATEP":
      return "TEXTURE_ATEP";
    case "ATET":
      return "TEXTURE_ATET";
    case "ATEU":
      return "TEXTURE_ATEU";
    case "ATEX":
      return "TEXTURE_ATEX";
    case "ATTX":
      return "TEXTURE_ATTX";
  }

  if (first4.indexOf("DDS") === 0) return "TEXTURE_DDS";

  if (first4.indexOf("PNG") === 1) return "TEXTURE_PNG";

  if (first4.indexOf("RIFF") === 0) return "TEXTURE_RIFF";

  if (first4.indexOf("YUI") === 0) return "TEXT_YUI";

  // PackFiles
  if (first4.indexOf("PF") === 0) {
    const file = new FileParser(buffer, true); /// true for "plz no load chunkz"
    return "PF_" + file.header.type;
  }

  // Binaries
  if (first4.indexOf("MZ") === 0) return "BINARIES";

  // Strings
  if (first4.indexOf("strs") === 0) return "STRINGS";

  // Raw asnd chunk (without pack file)
  if (first4.indexOf("asnd") === 0) return "CHUNK_ASND";

  // TODO: parse all buffers and if all bytes are valid unicode symbols then
  // return TEXT_UNKNOWN;

  // Unknown
  return "UNKNOWN";
}
