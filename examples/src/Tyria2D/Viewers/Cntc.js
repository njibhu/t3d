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
const Utils = require("../Utils");

class CntcViewer extends Viewer {
  constructor() {
    super("cntcView", "Content");
    this.currentRenderId = null;
  }

  setup() {
    $(this.getOutputId(true))
      .height("70%")
      .w2layout({
        name: "cntcLayout",
        panels: [
          {
            type: "main",
            size: "50%",
            resizable: true,
          },
          {
            type: "preview",
            size: "50%",
            resizable: true,
          },
        ],
      });
    w2ui.cntcLayout.content(
      "main",
      $().w2grid({
        name: "contentList",
        show: {
          toolbar: true,
          toolbarSearch: true,
          toolbarReload: false,
          toolbarColumns: false,
        },
        multiSearch: false,
        columns: [
          {
            field: "recid",
            caption: "Entry index",
            size: "10%",
            searchable: "int",
          },
          {
            field: "type",
            caption: "Type",
            size: "10%",
            searchable: "int",
          },
          {
            field: "size",
            caption: "Entry size",
            size: "10%",
          },
          {
            field: "namespaceIndex",
            caption: "Namespace",
            size: "10%",
          },
          {
            field: "rootIndex",
            caption: "Root index",
            size: "10%",
          },
          {
            field: "guid",
            caption: "GUID",
            size: "10%",
          },
          {
            field: "uid",
            caption: "UID",
            size: "10%",
          },
        ],
        records: [],
        onClick: function (event) {
          $().w2destroy("cntcEntryChunk");
          let record = w2ui.contentList.records[event.recid];
          console.log(record);
          Utils.generateHexTable(record.contentSlice, "cntcEntryChunk", function () {
            w2ui.cntcLayout.content("preview", w2ui.cntcEntryChunk);
          });
        },
      })
    );
  }

  render() {
    let fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));
    w2ui.contentList.searchReset();
    //First check if we've already renderer it
    if (this.currentRenderId !== fileId) {
      let packfile = T3D.getContextValue(Globals._context, T3D.DataRenderer, "file");
      let mainChunk = packfile.chunks[0].data;
      let entryArray = [];

      $().w2destroy("cntcEntryChunk");

      const entriesAmount = mainChunk.indexEntries.length;
      for (let i = 0; i < entriesAmount; i++) {
        let begin = mainChunk.indexEntries[i].offset;
        let end = mainChunk.indexEntries[i + 1] ? mainChunk.indexEntries[i + 1].offset : mainChunk.content.length;
        let contentSlice = mainChunk.content.slice(begin, end);
        let entry = {
          type: mainChunk.indexEntries[i].type,
          rootIndex: mainChunk.indexEntries[i].rootIndex,
          namespaceIndex: mainChunk.indexEntries[i].namespaceIndex,
          contentSlice: contentSlice,
          size: contentSlice.length,
          recid: entryArray.length,
          guid: contentSlice.length > 15 ? parseGuid(contentSlice) : undefined,
        };
        entryArray.push(entry);
      }
      w2ui.contentList.records = entryArray;
      w2ui.contentList.refresh();
      w2ui.cntcLayout.show("main");
    }

    $(".fileTab").hide();
    $(this.getDomTabId(true)).show();
  }

  canView() {
    let packfile = T3D.getContextValue(Globals._context, T3D.DataRenderer, "file");
    if (packfile && packfile.header.type === "cntc") {
      return true;
    } else {
      return false;
    }
  }

  clean() {}
}

function parseGuid(uarr) {
  function hexnum(num) {
    return num.toString(16).length === 2 ? num.toString(16).toUpperCase() : "0" + num.toString(16).toUpperCase();
  }
  return (
    "" +
    hexnum(uarr[3]) +
    hexnum(uarr[2]) +
    hexnum(uarr[1]) +
    hexnum(uarr[0]) +
    "-" +
    hexnum(uarr[5]) +
    hexnum(uarr[4]) +
    "-" +
    hexnum(uarr[7]) +
    hexnum(uarr[6]) +
    "-" +
    hexnum(uarr[8]) +
    hexnum(uarr[9]) +
    "-" +
    hexnum(uarr[10]) +
    hexnum(uarr[11]) +
    hexnum(uarr[12]) +
    hexnum(uarr[13]) +
    hexnum(uarr[14]) +
    hexnum(uarr[15])
  );
}

module.exports = CntcViewer;
