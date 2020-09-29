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

class StringViewer extends Viewer {
  constructor() {
    super("string", "String");
    this.currentRenderId = null;
  }

  render() {
    let fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));

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
    let rawData = T3D.getContextValue(Globals._context, T3D.DataRenderer, "rawData");
    let fcc = String.fromCharCode(rawData[0], rawData[1], rawData[2], rawData[3]);
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
    let strings = T3D.getContextValue(Globals._context, T3D.StringRenderer, "strings", []);

    w2ui.stringGrid.records = strings;

    w2ui.stringGrid.buffered = w2ui.stringGrid.records.length;
    w2ui.stringGrid.total = w2ui.stringGrid.buffered;
    w2ui.stringGrid.refresh();
  }
}

module.exports = StringViewer;
