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
const Utils = require("./Utils");

//Register viewers
const HeadViewer = require("./Viewers/Head");
const HexaViewer = require("./Viewers/Hexa");
const ModelViewer = require("./Viewers/Model");
const PackViewer = require("./Viewers/Pack");
const SoundViewer = require("./Viewers/Sound");
const StringViewer = require("./Viewers/String");
const TextureViewer = require("./Viewers/Texture");
const CntcViewer = require("./Viewers/Cntc");

const Viewers = [
  new HeadViewer(),
  new HexaViewer(),
  new ModelViewer(),
  new PackViewer(),
  new SoundViewer(),
  new StringViewer(),
  new TextureViewer(),
  new CntcViewer(),
];

const DefaultViewerIndex = 0;

function setupViewers() {
  for (let tab of Viewers) {
    tab.setup();
  }
}

function generateTabLayout() {
  for (let tab of Viewers) {
    let isDefault = tab === Viewers[DefaultViewerIndex];
    let tabHtml = $(`<div class='fileTab' id='${tab.getDomTabId()}'>
            <div class='tabOutput' id='${tab.getOutputId()}'></div>
            </div>`);

    if (!isDefault) {
      tabHtml.hide();
    }

    $("#fileTabs").append(tabHtml);

    w2ui["fileTabs"].add({
      id: tab.getW2TabId(),
      caption: tab.name,
      disabled: true,
      onClick: function () {
        $(".fileTab").hide();
        tab.render();
      },
    });
  }
  w2ui["fileTabs"].select(Viewers[DefaultViewerIndex].getW2TabId());
}

function onBasicRendererDone() {
  let fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));
  //Not implemented in T3D yet:
  //let fileType = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileType");

  //Show the filename
  //Todo: implement fileType
  let fileName = `${fileId}`;

  //Iterate through the renderers to know who can show and who
  let override;
  for (let viewer of Viewers) {
    //check if can view
    if (viewer.canView()) {
      w2ui.fileTabs.enable(viewer.getW2TabId());
    }

    //check if can override
    let overrideAbility = viewer.overrideDefault();
    if (overrideAbility && override === undefined) {
      override = viewer;
    } else if (overrideAbility && override !== undefined) {
      override = null;
    }
  }
  //Set active tab
  if (override) {
    w2ui.fileTabs.click(override.getW2TabId());
  } else {
    w2ui.fileTabs.click(Viewers[DefaultViewerIndex].getW2TabId());
  }

  //Enable context toolbar and download button
  $("#contextToolbar").append(
    $("<button>Download raw</button>").click(function () {
      const blob = new Blob([rawData], {
        type: "octet/stream",
      });
      Utils.saveData(blob, fileName + ".bin");
    })
  );
}

function viewFileByFileId(fileId) {
  /// Clean outputs
  $("#fileTitle").html("");

  /// Clean context toolbar
  $("#contextToolbar").html("");

  /// Disable and clean tabs
  for (let viewer of Viewers) {
    w2ui.fileTabs.disable(viewer.getW2TabId());
    viewer.clean();
  }

  /// Make sure _context is clean
  Globals._context = {};

  let rendererSettings = {
    id: fileId,
  };

  /// Run the basic DataRenderer
  T3D.runRenderer(T3D.DataRenderer, Globals._lr, rendererSettings, Globals._context, onBasicRendererDone);
}

function viewFileByMFT(mftIdx) {
  let reverseTable = Globals._lr.getReverseIndex();

  const baseId = reverseTable[mftIdx] ? reverseTable[mftIdx][0] : "";

  viewFileByFileId(baseId);
}

module.exports = {
  generateTabLayout: generateTabLayout,
  setupViewers: setupViewers,
  viewFileByFileId: viewFileByFileId,
  viewFileByMFT: viewFileByMFT,
};
