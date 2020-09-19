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

/**
 * @namespace ParserUtils
 */

/**
 * Collection of methods used for parsing complex data types from the .dat
 *
 * Most of these methods are only refered by the automatically generated script
 * AllFormats.js
 *
 */

module.exports = {
  /**
   * Generates a function for reading an array using DataStream
   *
   * @param  {Array} structDef DataStream formatted structure definition
   *                           for the items in the array.
   * @param  {Number} maxCount The maximum allowed length of the array.
   *                           Allows any length if left unspecified.
   * @return {Function}        The generated parsing function.
   */
  getArrayReader: function(structDef, maxCount) {
    return function(ds, struct) {
      let ret = [];
      try {
        let arr_len = ds.readUint32();
        let offset = ds.readUint32();
        if (offset === 0) {
          return ret;
        }
        let arr_ptr = ds.position - 4 + offset;
        let pos = ds.position;

        if (maxCount && arr_len > maxCount) {
          throw "Array length " + arr_len + " exceeded allowed maximum " + maxCount;
        }

        ds.seek(arr_ptr);
        ret = ds.readType(["[]", structDef, arr_len], struct);
        ds.seek(pos);
      } catch (e) {
        console.warn("getArrayReader Failed loading array", e);
        console.warn("getArrayReader Failed loading array, structDef", structDef);
      }
      return ret;
    };
  },

  /**
   * Generates a function for reading a refered array using DataStream
   *
   * @param  {Array} structDef DataStream formatted structure definition
   *                           for the items in the array.
   * @return {Function}        The generated parsing function.
   */
  getRefArrayReader: function(structDef) {
    return function(ds) {
      let ret_arr = [];

      /// Read array of offsets
      let arr_len = ds.readUint32();
      let arr_ptr = ds.position + ds.readUint32();

      if (arr_len === 0) {
        return ret_arr;
      }

      let orgPos = ds.position;

      /// Go to pointer and read an array of offsets!
      ds.seek(arr_ptr);
      let offsets = ds.readInt32Array(arr_len);

      // p_data is after having read array
      // var pointer = p_data - 4;
      let pointer = orgPos - 4;

      // auto offset  = *reinterpret_cast<const int32*>(pointer);
      ds.seek(pointer);
      let offset = ds.readUint32(); /// this should be the same as arr_ptr

      // pointer     += offset;
      pointer += offset;

      for (let i = 0; i < offsets.length; i++) {
        if (offsets[i] !== 0) {
          let pos = pointer + i * 4 + offsets[i];
          ds.seek(pos);

          try {
            ret_arr.push(ds.readStruct(structDef));
          } catch (e) {
            // debugger;
            ret_arr.push(null);
            console.warn("getRefArrayReader could not find refered data at offset", offsets[i], e);
          }
        }
      } /// End for each offset

      ds.seek(orgPos);
      return ret_arr;
    };
  },

  /**
   * Generates a function for reading a 64bit initeger. For now just reads each
   * 32 bit integer and glues together as a string.
   *
   * @return {Function}        The generated parsing function.
   */
  getQWordReader: function() {
    // let base32Max = 4294967296;
    return function(ds /*, struct */) {
      return ds.readUint32() + "-" + ds.readUint32();

      // let p0 = ds.readUint32();
      // let p1 = ds.readUint32();
      // return base32Max * p1 + p0;
    };
  },

  /**
   * Generates a function for reading a string of 8 bit chars.
   *
   * @return {Function}        The generated parsing function.
   */
  getStringReader: function() {
    return function(ds /*, struct*/) {
      let ptr = ds.position + ds.readUint32();
      let pos = ds.position;

      /// Go to pointer
      ds.seek(ptr);

      let ret = ds.readCString();

      /// Go back to where we were
      ds.seek(pos);

      return ret;
    };
  },

  /**
   * Generates a function for reading a string of 16 bit chars.
   *
   * @return {Function}        The generated parsing function.
   */
  getString16Reader: function(stringOffset) {
    return function(ds /*, struct*/) {
      let ptr = ds.position + ds.readUint32() + (stringOffset || 0);
      let pos = ds.position;

      /// Go to pointer
      ds.seek(ptr);

      let ret = "";
      let num;
      while (ds.position + 2 < ds.byteLength && (num = ds.readUint16()) !== 0) {
        ret += String.fromCharCode(num);
      }
      // ds.readCString();

      /// Go back to where we were
      ds.seek(pos);

      return ret;
    };
  },

  /**
   * Generates a function for reading a pointer.
   *
   * @param  {Array} structDef DataStream formatted structure definition
   *                           for the item pointed to.
   * @return {Function}        The generated parsing function.
   */
  getPointerReader: function(structDef) {
    return function(ds /*, struct*/) {
      let offset = ds.readUint32();

      if (offset === 0) {
        return {};
      }

      let ptr = ds.position - 4 + offset;
      let pos = ds.position;

      /// Go to pointer
      ds.seek(ptr);

      let ret = ds.readStruct(structDef);

      /// Go back to where we were
      ds.seek(pos);

      return ret;
    };
  },

  /**
   * Generates a function for reading a filename/file Id.
   *
   * @return {Function}        The generated parsing function.
   */
  getFileNameReader: function() {
    return function(ds /*, struct*/) {
      let pos;
      try {
        let ptr = ds.position + ds.readUint32();
        pos = ds.position;

        /// Go to pointer
        ds.seek(ptr);

        let fileRef = ds.readStruct([
          "m_lowPart",
          "uint16", // uint16 m_lowPart;
          "m_highPart",
          "uint16", // uint16 m_highPart;
          "m_terminator",
          "uint16", // uint16 m_terminator;
        ]);

        /// Getting the file name...
        /// Both need to be >= than 256 (terminator is 0)
        let ret = 0xff00 * (fileRef.m_highPart - 0x100) + (fileRef.m_lowPart - 0x100) + 1;
        // var ret = (fileRef.m_highPart - 0x100) * 0xff00 + (fileRef.m_lowPart - 0xff);

        if (ret < 0) {
          ret = 0;
          // console.log("FR negative", fileRef.m_highPart, fileRef.m_lowPart, fileRef.m_terminator);
          // debugger;
        }

        /// Go back to where we were
        ds.seek(pos);

        return ret;
      } catch (e) {
        /// Go back to where we were
        ds.seek(pos);

        return -1;
      }
    };
  },
};
