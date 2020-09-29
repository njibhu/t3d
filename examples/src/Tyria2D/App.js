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

// This file is the main entry point for the Tyria2D application

/// Requires:
const Layout = require("./Layout");
const Globals = require("./Globals");

function onReaderCreated(lr) {
  Globals._lr = lr;

  w2popup.lock();

  $("#filePickerPop").prop("disabled", true);
  $("#fileLoadProgress").html("Indexing .dat file<br/>" + "<br/><br/>");
  T3D.getFileListAsync(lr, (files) => {
    /// Store fileList globally
    Globals._fileList = files;

    Layout.sidebarNodes();

    /// Close the pop
    w2popup.close();

    /// Select the "All" category
    w2ui.sidebar.click("All");
  });
}

Layout.initLayout(onReaderCreated);

/// Overwrite progress logger
T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = function () {
  $("#fileLoadProgress").html("Indexing .dat file<br/>" + arguments[1] + "%<br/><br/>");
};
