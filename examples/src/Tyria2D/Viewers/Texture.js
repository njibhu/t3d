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

class TextureViewer extends Viewer {
  constructor() {
    super("texture", "Texture");
    this.currentRenderId = null;
  }

  render() {
    const fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));
    const image = T3D.getContextValue(Globals._context, T3D.DataRenderer, "image");

    //First check if we've already renderer it
    if (this.currentRenderId !== fileId) {
      /// Display bitmap on canvas
      const canvas = $("<canvas>");
      canvas[0].width = image.width;
      canvas[0].height = image.height;
      const ctx = canvas[0].getContext("2d");

      const uica = new Uint8ClampedArray(image.data);
      const imagedata = new ImageData(uica, image.width, image.height);
      ctx.putImageData(imagedata, 0, 0);

      $(this.getOutputId(true)).append(canvas);

      //Register it
      this.currentRenderId = fileId;
    }

    $(".fileTab").hide();
    $(this.getDomTabId(true)).show();
  }

  canView() {
    //if texture file then return true
    //TODO use types from DataRenderer
    return false;
  }
}

module.exports = TextureViewer;
