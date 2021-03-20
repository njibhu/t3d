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

const FileViewer = require("./fileviewer");
const FileGrid = require("./filegrid");
const Globals = require("../globals");

let onReaderCallback;

/**
 * Setup main grid
 */
function mainGrid() {
  const pstyle = "border: 1px solid #dfdfdf; padding: 0;";

  $("#layout").w2layout({
    name: "layout",
    panels: [
      {
        type: "top",
        size: 28,
        resizable: false,
        style: pstyle + " padding-top: 1px;",
      },
      {
        type: "left",
        size: 570,
        resizable: true,
        style: pstyle + "margin:0",
      },
      {
        type: "main",
        style: pstyle + " background-color: transparent;",
        toolbar: {
          style: "background-color:#eaeaea; height:40px",
          items: [
            {
              type: "html",
              id: "contextToolbar",
              html: '<div class="toolbarEntry" id="contextToolbar"></div>',
            },
          ],
          onClick: function (event) {
            this.owner.content("main", event);
          },
        },
      },
    ],
    onResize: Globals._onCanvasResize,
  });

  $("#fileIdInputBtn").click(function () {
    FileViewer.viewFileByFileId($("#fileIdInput").val());
  });

  /// Grid inside main left
  $().w2layout({
    name: "leftLayout",
    panels: [
      {
        type: "left",
        size: 150,
        resizable: true,
        style: pstyle,
        content: "left",
      },
      {
        type: "main",
        size: 420,
        resizable: true,
        style: pstyle,
        content: "right",
      },
    ],
  });
  w2ui["layout"].content("left", w2ui["leftLayout"]);
}

/**
 * Setup toolbar
 */
function toolbar() {
  $().w2toolbar({
    name: "toolbar",
    items: [
      {
        type: "button",
        id: "loadFile",
        caption: "Open file",
        img: "icon-folder",
      },
      {
        type: "break",
      },
      {
        type: "menu",
        id: "view",
        caption: "View",
        img: "icon-page",
        items: [
          {
            text: "Hide file list",
            img: "icon-page",
          },
          {
            text: "Hide file categories",
            img: "icon-page",
          },
          {
            text: "Hide file preview",
            img: "icon-page",
          },
        ],
      },
      {
        type: "break",
      },
      {
        type: "menu",
        id: "tools",
        caption: "Tools",
        img: "icon-page",
        items: [],
      },
      {
        type: "spacer",
      },
      {
        type: "button",
        id: "mentions",
        caption: "T3D-Browser",
        img: "icon-page",
      },
    ],
    onClick: function (event) {
      switch (event.target) {
        case "loadFile":
          openFilePopup();
          break;
      }
    },
  });

  w2ui["layout"].content("top", w2ui["toolbar"]);
}

/**
 * Setup sidebar
 */
function sidebar() {
  /*
        SIDEBAR
    */
  w2ui["leftLayout"].content(
    "left",
    $().w2sidebar({
      name: "sidebar",
      img: null,
      nodes: [
        {
          id: "All",
          text: "All",
          img: "icon-folder",
          group: false,
        },
      ],
      onClick: FileGrid.onFilterClick,
    })
  );
}

/**
 * Setup filebrowser
 */
function fileBrowser() {
  w2ui["leftLayout"].content(
    "main",
    $().w2grid({
      name: "grid",
      show: {
        toolbar: true,
        toolbarSearch: true,
        toolbarReload: false,
        footer: true,
      },
      multiSearch: false,
      columns: [
        {
          field: "baseId",
          caption: "Base ID",
          size: "25%",
          sortable: true,
          resizable: true,
          searchable: "int",
        },
        {
          field: "mftId",
          caption: "MFT ID",
          size: "25%",
          sortable: true,
          resizable: true,
          searchable: "int",
        },
        {
          field: "type",
          caption: "Type",
          size: "25%",
          resizable: true,
          sortable: true,
        },
        {
          field: "fileSize",
          caption: "Pack Size",
          size: "25%",
          resizable: true,
          sortable: true,
        },
      ],
      onClick: function (event) {
        const baseId = w2ui["grid"].records[event.recid].baseId;
        FileViewer.viewFileByFileId(baseId);
      },
    })
  );
}

/**
 * Setup file view window
 */
function fileView() {
  $(w2ui["layout"].el("main")).append($("<h1 id='fileTitle' />")).append($("<div id='fileTabs' />"));

  $("#fileTabs").w2tabs({
    name: "fileTabs",
    tabs: [],
  });

  FileViewer.generateTabLayout();
}

function stringGrid() {
  /// Set up grid for strings view
  ///Create grid
  $("#stringOutput").w2grid({
    name: "stringGrid",
    selectType: "cell",
    show: {
      toolbar: true,
      footer: true,
    },
    columns: [
      {
        field: "recid",
        caption: "Row #",
        size: "60px",
      },
      {
        field: "value",
        caption: "Text",
        size: "100%",
      },
    ],
  });
}

/**
 * This function is called when we have a list of the files to organize the categories.
 */
function sidebarNodes() {
  //Clear sidebar if already set up
  for (const element of w2ui["sidebar"].nodes) {
    if (element.id !== "All") {
      w2ui["sidebar"].nodes.splice(w2ui["sidebar"].nodes.indexOf(element.id), 1);
    }
  }
  w2ui["sidebar"].refresh();

  //Regenerate

  const packNode = {
    id: "packGroup",
    text: "Pack Files",
    img: "icon-folder",
    group: false,
    nodes: [],
  };

  const textureNode = {
    id: "textureGroup",
    text: "Texture files",
    img: "icon-folder",
    group: false,
    nodes: [],
  };

  const unsortedNode = {
    id: "unsortedGroup",
    text: "Unsorted",
    img: "icon-folder",
    group: false,
    nodes: [],
  };

  /// Build sidebar nodes
  for (const fileType in Globals._fileList) {
    if (Object.prototype.hasOwnProperty.call(Globals._fileList, fileType)) {
      let node = {
        id: fileType,
        img: "icon-folder",
        group: false,
      };
      // const isPack = false;
      if (fileType.startsWith("TEXTURE")) {
        node = {
          id: fileType,
          img: "icon-folder",
          group: false,
          text: fileType,
        };
        textureNode.nodes.push(node);
      } else if (fileType === "BINARIES") {
        node.text = "Binaries";
        w2ui.sidebar.add(node);
      } else if (fileType === "STRINGS") {
        node.text = "Strings";
        w2ui.sidebar.add(node);
      } else if (fileType.startsWith("PF")) {
        node = {
          id: fileType,
          img: "icon-folder",
          group: false,
          text: fileType,
        };
        packNode.nodes.push(node);
      } else if (fileType === "UNKNOWN") {
        node.text = "Unknown";
        w2ui.sidebar.add(node);
      } else {
        node = {
          id: fileType,
          img: "icon-folder",
          group: false,
          text: fileType,
        };
        unsortedNode.nodes.push(node);
      }
    }
  }

  if (packNode.nodes.length > 0) {
    w2ui.sidebar.add(packNode);
  }

  if (textureNode.nodes.length > 0) {
    w2ui.sidebar.add(textureNode);
  }

  if (unsortedNode.nodes.length > 0) {
    w2ui.sidebar.add(unsortedNode);
  }
}

function openFilePopup() {
  /// Ask for file
  w2popup.open({
    speed: 0,
    title: "Load A GW2 dat",
    modal: true,
    showClose: false,
    body:
      '<div class="w2ui-centered">' +
      '<div id="fileLoadProgress" />' +
      '<input id="filePickerPop" type="file" />' +
      "</div>",
  });

  $("#filePickerPop").change(function (evt) {
    Globals._lr = T3D.getLocalReader(evt.target.files[0], onReaderCallback, "../static/t3dworker.js");
  });
}

/**
 * This function is called by the main app to create the gui layout.
 */
function initLayout(onReaderCreated) {
  onReaderCallback = onReaderCreated;

  mainGrid();
  toolbar();
  sidebar();
  fileBrowser();
  fileView();
  stringGrid();

  //Setup viewers
  FileViewer.setupViewers();

  /*
        SET UP TREE 3D SCENE
    */
  // TODO
  // Utils.setupScene();

  openFilePopup();
}

// TODO: Window resize

module.exports = {
  initLayout: initLayout,
  sidebarNodes: sidebarNodes,
};
