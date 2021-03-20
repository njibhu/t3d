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

class StringViewer extends Viewer {
  constructor() {
    super("string", "String");
    this.currentRenderId = null;
  }

  render() {
    const fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));

    //First check if we've already renderer it
    if (this.currentRenderId !== fileId) {
      /// Run single renderer
      T3D.runRenderer(
        T3D.StringRenderer,
        Globals._lr,
        {
          id: fileId,
        },
        Globals._context,
        () => {
          this.onRendererDoneString();
        }
      );

      //Register it
      this.currentRenderId = fileId;
    }

    $(".fileTab").hide();
    $(this.getDomTabId(true)).show();
  }

  clean() {}

  canView() {
    //if string file then return true
    const rawData = T3D.getContextValue(Globals._context, T3D.DataRenderer, "rawData");
    const fcc = String.fromCharCode(rawData[0], rawData[1], rawData[2], rawData[3]);
    if (fcc === "strs") {
      return true;
    } else {
      return false;
    }
  }

  overrideDefault() {
    return this.canView();
  }

  onRendererDoneString() {
    /// Read data from renderer
    const strings = T3D.getContextValue(Globals._context, T3D.StringRenderer, "strings", []);

    w2ui.stringGrid.records = strings;

    w2ui.stringGrid.buffered = w2ui.stringGrid.records.length;
    w2ui.stringGrid.total = w2ui.stringGrid.buffered;
    w2ui.stringGrid.refresh();
  }
}

module.exports = StringViewer;
