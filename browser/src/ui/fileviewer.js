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

const Globals = require("../globals");
const Utils = require("../utils");

//Register viewers
const HeadViewer = require("../viewers/head");
const HexaViewer = require("../viewers/hexa");
const ModelViewer = require("../viewers/model");
const PackViewer = require("../viewers/pack");
const SoundViewer = require("../viewers/sound");
const StringViewer = require("../viewers/string");
const TextureViewer = require("../viewers/texture");
const CntcViewer = require("../viewers/cntc");

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
  for (const tab of Viewers) {
    tab.setup();
  }
}

function generateTabLayout() {
  for (const tab of Viewers) {
    const isDefault = tab === Viewers[DefaultViewerIndex];
    const tabHtml = $(`<div class='fileTab' id='${tab.getDomTabId()}'>
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
  const fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));
  //Not implemented in T3D yet:
  //let fileType = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileType");

  //Show the filename
  //Todo: implement fileType
  const fileName = `${fileId}`;
  $("#fileTitle")[0].textContent = fileName;

  //Iterate through the renderers to know who can show and who
  let override;
  for (const viewer of Viewers) {
    //check if can view
    if (viewer.canView()) {
      w2ui.fileTabs.enable(viewer.getW2TabId());
    }

    //check if can override
    const overrideAbility = viewer.overrideDefault();
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
      const rawData = T3D.getContextValue(Globals._context, T3D.DataRenderer, "rawData");
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
  for (const viewer of Viewers) {
    w2ui.fileTabs.disable(viewer.getW2TabId());
    viewer.clean();
  }

  /// Make sure _context is clean
  Globals._context = {};

  const rendererSettings = {
    id: fileId,
  };

  /// Run the basic DataRenderer
  T3D.runRenderer(T3D.DataRenderer, Globals._lr, rendererSettings, Globals._context, onBasicRendererDone);
}

function viewFileByMFT(mftIdx) {
  const reverseTable = Globals._lr.getReverseIndex();

  const baseId = reverseTable[mftIdx] ? reverseTable[mftIdx][0] : "";

  viewFileByFileId(baseId);
}

module.exports = {
  generateTabLayout: generateTabLayout,
  setupViewers: setupViewers,
  viewFileByFileId: viewFileByFileId,
  viewFileByMFT: viewFileByMFT,
};
