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

class PackViewer extends Viewer {
  constructor() {
    super("pack", "Pack file");
    this.currentRenderId = null;
  }

  render() {
    let fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));
    //First check if we've already renderer it
    if (this.currentRenderId !== fileId) {
      let packfile = T3D.getContextValue(Globals._context, T3D.DataRenderer, "file");

      $(this.getOutputId(true)).html("");
      $(this.getOutputId(true)).append($("<h2>" + this.name + "</h2>"));

      for (let chunk of packfile.chunks) {
        const field = $("<fieldset />");
        const legend = $("<legend>" + chunk.header.type + "</legend>");

        const logButton = $("<button>Log Chunk Data to Console</button>");
        logButton.click(function () {
          T3D.Logger.log(T3D.Logger.TYPE_MESSAGE, "Logging", chunk.header.type, "chunk");
          T3D.Logger.log(T3D.Logger.TYPE_MESSAGE, chunk.data);
        });

        field.append(legend);
        field.append($("<p>Size:" + chunk.header.chunkDataSize + "</p>"));
        field.append(logButton);

        $(this.getOutputId(true)).append(field);
        $(this.getOutputId(true)).show();
      }

      //Register it
      this.currentRenderId = fileId;
    }

    $(".fileTab").hide();
    $(this.getDomTabId(true)).show();
  }

  canView() {
    //if pack then return true
    let packfile = T3D.getContextValue(Globals._context, T3D.DataRenderer, "file");
    if (packfile) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = PackViewer;
