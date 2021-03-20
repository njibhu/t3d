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

// This file is the main entry point for the T3D-Browser app

const { sidebarNodes, initLayout } = require("./ui/browser-layout");
const Globals = require("./globals");

function onReaderCreated(lr) {
  Globals._lr = lr;

  w2popup.lock();

  $("#filePickerPop").prop("disabled", true);
  $("#fileLoadProgress").html("Indexing .dat file<br/>" + "<br/><br/>");
  T3D.getFileListAsync(lr, (files) => {
    /// Store fileList globally
    Globals._fileList = files;

    sidebarNodes();

    /// Close the pop
    w2popup.close();

    /// Select the "All" category
    w2ui.sidebar.click("All");
  });
}

initLayout(onReaderCreated);

/// Overwrite progress logger
T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = function () {
  $("#fileLoadProgress").html("Indexing .dat file<br/>" + arguments[1] + "%<br/><br/>");
};
