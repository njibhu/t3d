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

//Setting up the global variables for the app

module.exports = {
  /// T3D
  _lr: undefined,
  _context: undefined,
  _fileId: undefined,
  _fileList: undefined,
  _audioSource: undefined,
  _audioContext: undefined,

  /// THREE
  _scene: undefined,
  _camera: undefined,
  _renderer: undefined,
  _models: [],
  _controls: undefined,
  _onCanvasResize: function () {},
};
