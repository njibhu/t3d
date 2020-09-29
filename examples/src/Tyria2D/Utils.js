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

const Globals = require("./Globals");

/// Exports current model as an .obj file with a .mtl refering .png textures.
function exportScene() {
  /// Get last loaded fileId
  const fileId = Globals._fileId;

  /// Run T3D hacked version of OBJExporter
  const result = new THREE.OBJExporter().parse(Globals._scene, fileId);

  /// Result lists what file ids are used for textures.
  const texIds = result.textureIds;

  /// Set up very basic material file refering the texture pngs
  /// pngs are generated a few lines down.
  let mtlSource = "";
  texIds.forEach(function (texId) {
    mtlSource +=
      "newmtl tex_" + texId + "\n" + "  map_Ka tex_" + texId + ".png\n" + "  map_Kd tex_" + texId + ".png\n\n";
  });

  /// Download obj
  let blob = new Blob([result.obj], {
    type: "octet/stream",
  });
  saveData(blob, "export." + fileId + ".obj");

  /// Download mtl
  blob = new Blob([mtlSource], {
    type: "octet/stream",
  });
  saveData(blob, "export." + fileId + ".mtl");

  /// Download texture pngs
  texIds.forEach(function (texId) {
    /// LocalReader will have to re-load the textures, don't want to fetch
    /// then from the model data..
    Globals._lr.loadTextureFile(texId, function (inflatedData, dxtType, imageWidth, imageHeigth) {
      /// Create js image using returned bitmap data.
      const image = {
        data: new Uint8Array(inflatedData),
        width: imageWidth,
        height: imageHeigth,
      };

      /// Need a canvas in order to draw
      const canvas = $("<canvas />");
      $("body").append(canvas);

      canvas[0].width = image.width;
      canvas[0].height = image.height;

      const ctx = canvas[0].getContext("2d");

      /// Draw raw bitmap to canvas
      const uica = new Uint8ClampedArray(image.data);
      const imagedata = new ImageData(uica, image.width, image.height);
      ctx.putImageData(imagedata, 0, 0);

      /// This is where shit gets stupid. Flipping raw bitmaps in js
      /// is apparently a pain. Basicly read current state pixel by pixel
      /// and write it back with flipped y-axis
      const input = ctx.getImageData(0, 0, image.width, image.height);

      /// Create output image data buffer
      const output = ctx.createImageData(image.width, image.height);

      /// Get imagedata size
      const w = input.width;
      const h = input.height;
      const inputData = input.data;
      const outputData = output.data;

      /// Loop pixels
      for (let y = 1; y < h - 1; y += 1) {
        for (let x = 1; x < w - 1; x += 1) {
          /// Input linear coordinate
          const i = (y * w + x) * 4;

          /// Output linear coordinate
          const flip = ((h - y) * w + x) * 4;

          /// Read and write RGBA
          /// TODO: Perhaps put alpha to 100%
          for (let c = 0; c < 4; c += 1) {
            outputData[i + c] = inputData[flip + c];
          }
        }
      }

      /// Write back flipped data
      ctx.putImageData(output, 0, 0);

      /// Fetch canvas data as png and download.
      canvas[0].toBlob(function (pngBlob) {
        saveData(pngBlob, "tex_" + texId + ".png");
      });

      /// Remove canvas from DOM
      canvas.remove();
    });
  });
}

/// Utility for downloading files to client
const saveData = (function () {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  return function (blob, fileName) {
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
})();

function generateHexTable(rawData, gridName, callback) {
  let byteArray = new Uint8Array(rawData);
  //   let hexOutput = [];
  //   let asciiOutput = [];
  const loopChunkSize = 10000;

  const ASCII =
    "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  let grid = $().w2grid({
    name: gridName,
    columns: [
      //{ field: 'fname', caption: 'First Name', size: '30%' },
      { field: "address", caption: "Address", size: "80px" },
      { field: "c0", caption: "00", size: "25px" },
      { field: "c1", caption: "01", size: "25px" },
      { field: "c2", caption: "02", size: "25px" },
      { field: "c3", caption: "03", size: "25px" },
      { field: "c4", caption: "04", size: "25px" },
      { field: "c5", caption: "05", size: "25px" },
      { field: "c6", caption: "06", size: "25px" },
      { field: "c7", caption: "07", size: "25px" },
      { field: "c8", caption: "08", size: "25px" },
      { field: "c9", caption: "09", size: "25px" },
      { field: "c10", caption: "0A", size: "25px" },
      { field: "c11", caption: "0B", size: "25px" },
      { field: "c12", caption: "0C", size: "25px" },
      { field: "c13", caption: "0D", size: "25px" },
      { field: "c14", caption: "0E", size: "25px" },
      { field: "c15", caption: "0F", size: "25px" },
      { field: "ascii", caption: "ASCII", size: "140px", style: "font-family:monospace" },
    ],
  });

  //Breakup the work into slices of 10kB for performance
  let byteArraySlice = [];
  for (let pos = 0; pos < byteArray.length; pos += loopChunkSize) {
    byteArraySlice.push(byteArray.slice(pos, pos + loopChunkSize));
  }

  let loopCount = 0;
  let records = [];
  let loopFunc = setInterval(() => {
    let byteArrayItem = byteArraySlice[loopCount];
    //If there is no more work we clear the loop and callback
    if (byteArrayItem === undefined) {
      clearInterval(loopFunc);
      grid.records = records;
      grid.refresh();
      callback(grid);
      return;
    }

    //Work with lines of 16 bytes
    for (let pos = 0; pos < byteArrayItem.length; pos += 16) {
      let workSlice = byteArrayItem.slice(pos, pos + 16);
      let asciiLine = "";
      let address = Number(pos + loopCount * loopChunkSize).toString(16);
      address = address.length !== 8 ? "0".repeat(8 - address.length) + address : address;
      let line = {
        address: address,
      };

      //Iterate through each byte of the 16bytes line
      for (let i = 0; i < 16; i++) {
        let byte = workSlice[i];
        let byteHexCode;
        if (byte !== undefined) {
          byteHexCode = byte.toString(16).toUpperCase();
          byteHexCode = byteHexCode.length === 1 ? "0" + byteHexCode : byteHexCode;
        } else {
          byteHexCode = "  ";
        }

        line["c" + i] = byteHexCode;

        let asciiCode = byte ? String.fromCharCode(byte) : " ";
        asciiCode = ASCII.includes(asciiCode) ? asciiCode : ".";
        asciiLine += asciiCode;
      }

      line.ascii = asciiLine;
      records.push(line);
    }

    loopCount += 1;
  }, 1);
}

//This special forEach have an additional parameter to add a setTimeout(1) between each "chunkSize" items
function asyncForEach(array, chunkSize, fn) {
  let workArray = [];
  //Slice up the array into work array for synchronous call
  for (let i = 0; i < array.size; i += chunkSize) {
    workArray.push(array.slice(i, i + chunkSize));
  }

  //Loopcount is the amount of times chunkSize have been reached
  let loopcount = 0;
  let interval = setInterval(() => {
    //Iterate through the chunk
    for (let index in workArray) {
      let item = workArray[index];
      let _index = index + loopcount * chunkSize;
      fn(item, _index);
    }

    //Check if there is more work or not
    loopcount += 1;
    if (loopcount === workArray.length) {
      clearInterval(interval);
    }
  }, 1);
}

module.exports = {
  exportScene: exportScene,
  saveData: saveData,
  generateHexTable: generateHexTable,
};
