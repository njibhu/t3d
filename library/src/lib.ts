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

interface Archive {
  getFileList: () => ArchiveEntry[];
  getMapList: () => Map[];
}

T3D = module.exports = {
  getFileListAsync: function(localReader, callback) {},

  getMapListAsync: function(localReader, callback, searchAll) {},

  renderMapContentsAsync: function(
    localReader,
    fileName,
    renderers,
    callback,
    logger
  ) {},

  runRenderer: function(renderClass, localReader, settings, context, cb) {},

  getContextValue: function(context, clazz, propName, defaultValue) {},

  hasWebGL: function(return_context) {},

  formats: require("./format/chunks/AllFormats"),
};
