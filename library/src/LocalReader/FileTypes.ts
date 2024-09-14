/*
Copyright © Tyria3DLibrary project contributors

This file is part of the Tyria 3D Library.

Tyria 3D Library is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Tyria 3D Library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with the Tyria 3D Library. If not, see <http://www.gnu.org/licenses/>.
*/

import FileParser from "t3d-parser";

/**
 * Parse the beginning of a file to find its type
 *
 * @memberof FileTypes
 * @param {DataStream} ds
 */
export function getFileType(ds: any): string {
  const first4 = ds.readCString(4);

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
    const file = new FileParser(ds.buffer, true); /// true for "plz no load chunkz"
    return "PF_" + file.header.type;
  }

  // Binaries
  if (first4.indexOf("MZ") === 0) return "BINARIES";

  // Strings
  if (first4.indexOf("strs") === 0) return "STRINGS";

  // Raw asnd chunk (without pack file)
  if (first4.indexOf("asnd") === 0) return "CHUNK_ASND";

  // TODO: parse all datastream and if all bytes are valid unicode symbols then
  // return TEXT_UNKNOWN;

  // Unknown
  return "UNKNOWN";
}
