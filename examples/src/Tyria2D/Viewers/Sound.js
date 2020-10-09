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

class SoundViewer extends Viewer {
  constructor() {
    super("sound", "Sound");
    this.currentRenderId = null;
  }

  render() {
    const fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));

    //First check if we've already renderer it
    if (this.currentRenderId !== fileId) {
      const packfile = T3D.getContextValue(Globals._context, T3D.DataRenderer, "file");
      const chunk = packfile.getChunk("ASND");

      /// Print some random data about this sound
      $(this.getOutputId(true)).html(
        "Length: " + chunk.data.length + " seconds<br/>" + "Size: " + chunk.data.audioData.length + " bytes"
      );

      /// Extract sound data
      const soundUintArray = chunk.data.audioData;

      $("#contextToolbar")
        .show()
        .append(
          $("<button>Download MP3</button>").click(function () {
            const blob = new Blob([soundUintArray], {
              type: "octet/stream",
            });
            Utils.saveData(blob, `${fileId}` + ".mp3");
          })
        )
        .append(
          $("<button>Play MP3</button>").click(function () {
            if (!Globals._audioContext) {
              Globals._audioContext = new AudioContext();
            }

            /// Stop previous sound
            try {
              Globals._audioSource.stop();
            } catch (_error) {
              // Empty catch block
            }

            /// Create new buffer for current sound
            Globals._audioSource = Globals._audioContext.createBufferSource();
            Globals._audioSource.connect(Globals._audioContext.destination);

            /// Decode and start playing
            Globals._audioContext.decodeAudioData(soundUintArray.buffer, function (res) {
              Globals._audioSource.buffer = res;
              Globals._audioSource.start();
            });
          })
        )
        .append(
          $("<button>Stop MP3</button>").click(function () {
            try {
              Globals._audioSource.stop();
            } catch (_error) {
              // Empty catch block
            }
          })
        );
      this.currentRenderId = fileId;
    }

    $(".fileTab").hide();
    $(this.getDomTabId(true)).show();
  }

  canView() {
    const packfile = T3D.getContextValue(Globals._context, T3D.DataRenderer, "file");
    if (packfile && packfile.header.type === "ASND") {
      return true;
    } else {
      return false;
    }
  }

  overrideDefault() {
    return this.canView();
  }
}

module.exports = SoundViewer;
