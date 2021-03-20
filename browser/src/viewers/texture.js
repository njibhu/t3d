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

class TextureViewer extends Viewer {
  constructor() {
    super("texture", "Texture");
    this.currentRenderId = null;
    this.textureType = undefined;
  }

  render() {
    const fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));
    const rawData = T3D.getContextValue(Globals._context, T3D.DataRenderer, "rawData");
    const image = T3D.getContextValue(Globals._context, T3D.DataRenderer, "image");

    //First check if we've already renderer it
    if (this.currentRenderId !== fileId) {
      const canvas = $("<canvas>");
      if (this.textureType === "native") {
        /// Display bitmap on canvas
        canvas[0].width = image.width;
        canvas[0].height = image.height;
        const ctx = canvas[0].getContext("2d");

        const uica = new Uint8ClampedArray(image.data);
        const imagedata = new ImageData(uica, image.width, image.height);
        ctx.putImageData(imagedata, 0, 0);
      } else if (this.textureType === "png") {
        const pngBlob = new Blob([rawData], { type: "image/png" });
        const url = URL.createObjectURL(pngBlob);
        const img = new Image();
        img.onload = function () {
          canvas[0].width = img.width;
          canvas[0].height = img.height;
          const ctx = canvas[0].getContext("2d");
          ctx.drawImage(this, 0, 0);
          URL.revokeObjectURL(url);
        };
        img.src = url;
      } else if (this.textureType === "riff") {
        const riffBlob = new Blob([rawData], { type: "image/webp" });
        const url = URL.createObjectURL(riffBlob);
        const img = new Image();
        img.onload = function () {
          canvas[0].width = img.width;
          canvas[0].height = img.height;
          const ctx = canvas[0].getContext("2d");
          ctx.drawImage(this, 0, 0);
          URL.revokeObjectURL(url);
        };
        img.src = url;
      }

      $(this.getOutputId(true)).html("");
      $(this.getOutputId(true)).append(canvas);

      //Register it
      this.currentRenderId = fileId;
    }

    $(".fileTab").hide();
    console.log(this.getDomTabId(true));
    $(this.getDomTabId(true)).show();
  }

  canView() {
    const image = T3D.getContextValue(Globals._context, T3D.DataRenderer, "image");
    const rawData = T3D.getContextValue(Globals._context, T3D.DataRenderer, "rawData");
    const ui8aRawData = new Uint8Array(rawData);

    // Anet Textures
    if (image) {
      this.textureType = "native";
      return true;
    }

    // PNG texture
    if (
      ui8aRawData.length > 4 &&
      ui8aRawData[0] === 137 &&
      ui8aRawData[1] === 80 && // P
      ui8aRawData[2] === 78 && // N
      ui8aRawData[3] === 71 // G
    ) {
      this.textureType = "png";
      return true;
    }

    // RIFF texture
    if (
      ui8aRawData.length > 4 &&
      ui8aRawData[0] === 82 && // R
      ui8aRawData[1] === 73 && // I
      ui8aRawData[2] === 70 && // F
      ui8aRawData[3] === 70 // F
    ) {
      this.textureType = "riff";
      return true;
    }

    return false;
  }
}

module.exports = TextureViewer;
