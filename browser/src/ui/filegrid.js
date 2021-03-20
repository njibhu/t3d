/*
Copyright © T3D project contributors

This file is part of the T3D.

T3D is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

T3D is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with the T3D. If not, see <http://www.gnu.org/licenses/>.
*/

const Globals = require("../globals");

function onFilterClick(evt) {
  /// No filter if clicked group was "All"
  if (evt.target === "All") {
    showFileGroup();
  }

  /// Other events are fine to just pass
  else {
    showFileGroup([evt.target]);
  }
}

function showFileGroup(fileTypeFilter) {
  w2ui.grid.records = [];
  w2ui.grid.searchReset();

  const reverseTable = Globals._lr.getReverseIndex();

  for (const fileType in Globals._fileList) {
    /// Only show types we've asked for
    if (fileTypeFilter && fileTypeFilter.indexOf(fileType) < 0) {
      /// Special case for "packGroup"
      /// Should let trough all pack types
      /// Should NOT let trought any non-pack types
      /// i.e. Strings, Binaries etc
      if (fileTypeFilter.indexOf("packGroup") >= 0) {
        if (!fileType.startsWith("PF")) {
          continue;
        }
      } else if (fileTypeFilter.indexOf("textureGroup") >= 0) {
        if (!fileType.startsWith("TEXTURE")) {
          continue;
        }
      } else {
        continue;
      }
    }

    if (Object.prototype.hasOwnProperty.call(Globals._fileList, fileType)) {
      const fileArr = Globals._fileList[fileType];
      fileArr.forEach(function (mftIndex) {
        const meta = Globals._lr.getFileMeta(mftIndex);

        const baseIds = reverseTable[mftIndex];
        const fileSize = meta ? meta.size : "";

        if (fileSize > 0 && mftIndex > 15) {
          for (const baseId of baseIds) {
            w2ui["grid"].records.push({
              recid: w2ui["grid"].records.length,
              mftId: mftIndex, /// MFT index
              baseId: baseId,
              type: fileType,
              fileSize: fileSize,
            });
          }
        }

        mftIndex++;
      });
    }
  }

  /// Update file grid
  w2ui.grid.buffered = w2ui.grid.records.length;
  w2ui.grid.total = w2ui.grid.buffered;
  w2ui.grid.refresh();
}

module.exports = {
  onFilterClick: onFilterClick,
};
