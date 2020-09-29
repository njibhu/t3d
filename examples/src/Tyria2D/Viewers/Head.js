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

const Viewer = require("./Viewer");
const Globals = require("../Globals");

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
    let fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));

    //First check if we've already renderer it
    if (this.currentRenderId !== fileId) {
      let raw = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "rawData"));

      const ds = new DataStream(raw);
      const first4 = ds.readCString(4);

      $(this.getOutputId(true)).html("");
      $(this.getOutputId(true)).append('<div id="headGrid" style="height: 90%"></div>');

      w2ui["Overview"].records = [
        {
          recid: 1,
          type: "File ID",
          value: fileId,
        },
        {
          recid: 2,
          type: "File size",
          value: raw.byteLength,
        },
        {
          recid: 3,
          type: "File type",
          value: first4,
        },
      ];
      w2ui["Overview"].refresh();

      w2ui["Overview"].render($("#headGrid")[0]);

      //TODO:
      //MFT index
      //BaseId
      //FileType
      //Compressed size
      //Uncompressed size
      //
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
