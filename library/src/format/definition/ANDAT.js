/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

module.exports = [
  // uint8_t  version;
  "version",
  "uint8",

  // uint8_t  magic[3];
  "magic",
  "string:3",

  // uint32_t headerSize;
  "headerSize",
  "uint32",

  // uint32_t unknown1;
  "unknown1",
  "uint32",

  // uint32_t chunkSize;
  "chunkSize",
  "uint32",

  // uint32_t crc;
  "crc",
  "uint32",

  // uint32_t unknown2;
  "unknown2",
  "uint32",

  // uint64_t mftOffset;
  "mftOffset",
  ["[]", "uint32", 2],

  // uint32_t mftSize;
  "mftSize",
  "uint32",

  // uint32_t flags;
  "flags",
  "uint32",
];
