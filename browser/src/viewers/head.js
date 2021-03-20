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

const Viewer = require("./viewer");
const Globals = require("../globals");

class HeadViewer extends Viewer {
  constructor() {
    super("headView", "Overview");
    this.currentRenderId = null;
  }

  setup() {
    $("#headGrid").w2grid({
      name: "Overview",
      columns: [
        {
          field: "type",
          caption: "Type",
          size: "50%",
        },
        {
          field: "value",
          caption: "Value",
          size: "50%",
        },
      ],
      records: [],
    });
  }

  render() {
    const fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));

    //First check if we've already renderer it
    if (this.currentRenderId !== fileId) {
      const raw = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "rawData"));

      const ds = new DataStream(raw);
      const first4 = ds.readCString(4);

      $(this.getOutputId(true)).html("");
      $(this.getOutputId(true)).append('<div id="headGrid" style="height: 90%"></div>');

      const mftId = Globals._lr.getFileIndex(fileId);
      const fileMeta = Globals._lr.getFileMeta(mftId);

      w2ui["Overview"].records = [
        {
          recid: 1,
          type: "File ID",
          value: fileId,
        },
        {
          recid: 2,
          type: "MFT Index",
          value: mftId,
        },
        {
          recid: 3,
          type: "Full size",
          value: raw.byteLength,
        },
        {
          recid: 4,
          type: "Raw Size",
          value: fileMeta.size,
        },
        {
          recid: 5,
          type: "Compressed flag",
          value: fileMeta.compressed,
        },
        {
          recid: 6,
          type: "File head",
          value: first4,
        },
        {
          recid: 7,
          type: "CRC",
          value: fileMeta.crc,
        },
        {
          recid: 8,
          type: "Offset",
          value: fileMeta.offset,
        },
      ];
      w2ui["Overview"].render($("#headGrid"));

      w2ui["Overview"].refresh();
      this.currentRenderId = fileId;
    }

    $(".fileTab").hide();
    $(this.getDomTabId(true)).show();
  }

  //Headviewer can view every file
  canView() {
    return true;
  }

  clean() {
    w2ui["Overview"].delete();
  }
}

module.exports = HeadViewer;
