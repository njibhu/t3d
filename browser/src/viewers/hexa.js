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
const Utils = require("../utils");

class HexaViewer extends Viewer {
  constructor() {
    super("hexView", "Hex View");
    //super("#fileTabsHexView", "#hexView", "tabHexView", "Hex View");
    this.currentRenderId = null;
  }

  render() {
    const fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));

    if (this.currentRenderId !== fileId) {
      const rawData = T3D.getContextValue(Globals._context, T3D.DataRenderer, "rawData");
      $(this.getOutputId(true)).append('<div id="hexaGrid" style="height: 90%"></div>');
      Utils.generateHexTable(rawData, this.getOutputId(), (grid) => {
        grid.render($(`#hexaGrid`));
        $(this.getOutputId(true)).show();
      });
      this.currentRenderId = fileId;
    }

    $(".fileTab").hide();
    $(this.getDomTabId(true)).show();
  }

  clean() {
    $().w2destroy(this.getOutputId());
  }

  //Hexa viewer can view every file
  canView() {
    return true;
  }
}

module.exports = HexaViewer;
