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

const base32Max = Math.pow(2, 32);

/**
 * Collection Math and sorting methods
 * @namespace MathUtils
 */

/**
 * Takes an integer and calculates what the 16 bit float
 * representation of the binary data used to read the integer is.
 *
 * @memberof MathUtils
 * @param  {Number} h Integer value
 * @return {Number} Float value
 */
function f16(h) {
  let s = (h & 0x8000) >> 15;
  let e = (h & 0x7c00) >> 10;
  let f = h & 0x03ff;

  if (e === 0) {
    return (s ? -1 : 1) * Math.pow(2, -14) * (f / Math.pow(2, 10));
  } else if (e === 0x1f) {
    return f ? NaN : (s ? -1 : 1) * Infinity;
  }

  return (s ? -1 : 1) * Math.pow(2, e - 15) * (1 + f / Math.pow(2, 10));
}

/**
 * Calculates the number of binary ones present in the data used to
 * generate the input integer.
 *
 * @memberof MathUtils
 * @param  {Number} bits Integer
 * @return {Number}      Number of binary ones in the data
 */
function popcount(bits) {
  let SK5 = 0x55555555;
  let SK3 = 0x33333333;
  let SKF0 = 0x0f0f0f0f;
  // let SKFF = 0xff00ff

  bits -= (bits >> 1) & SK5;
  bits = (bits & SK3) + ((bits >> 2) & SK3);
  bits = (bits & SKF0) + ((bits >> 4) & SKF0);
  bits += bits >> 8;

  return (bits + (bits >> 15)) & 63;
}

/**
 * Calculates the 64 bit integer value of two 32 bit integers. Only works up to
 * the limit of the javascript Number maximum value.
 *
 * @memberof MathUtils
 * @param  {Number[]} arr     Input integers, length should be 2.
 * @return {Number}      64 bit representation of the two integers.
 */
function arr32To64(arr) {
  /// Re-read as uint64 (still little endian)
  /// Warn: this will not work for ~50+ bit longs cus all JS numbers are 64 bit floats...
  return base32Max * arr[1] + arr[0];
}

/**
 * Sorts an array and returns unique values only.
 *
 * @memberof MathUtils
 * @param  {Array} arr_in     Input array
 * @param  {Function} comparator A comparator function between the objects in arr_in
 * @return {Array}            Sorted and unique value.
 */
function sort_unique(arr_in, comparator) {
  let arr = Array.prototype.sort.call(arr_in, comparator);

  let u = {};
  let a = [];
  for (let i = 0, l = arr.length; i < l; ++i) {
    // eslint-disable-next-line no-prototype-builtins
    if (u.hasOwnProperty(arr[i])) {
      continue;
    }
    a.push(arr[i]);
    u[arr[i]] = 1;
  }

  return a;
}

module.exports = {
  f16: f16,
  popcount: popcount,
  arr32To64: arr32To64,
  sort_unique: sort_unique,
};
