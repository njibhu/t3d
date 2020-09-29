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

/**
 * This is an abstract class, use other class to define behavior.
 * Declaring a Viewer class is not enough, don't forget to register it in the FileViewer module
 */

class Viewer {
  /**
   * Defines the tab here
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getW2TabId() {
    return `tab${this.id}`;
  }

  getOutputId(withSign) {
    if (withSign) {
      return `#${this.id}Output`;
    } else {
      return `${this.id}Output`;
    }
  }

  getDomTabId(withSign) {
    if (withSign) {
      return `#fileTab${this.id}`;
    } else {
      return `fileTab${this.id}`;
    }
  }

  /**
   * Facultative method that allows some renderers to setup stuff on startup
   */
  setup() {}

  /**
   * Render the content of the tab when called
   * It is the responsability of the viewer to cache it's heavy tasks
   * @returns {null}
   */
  render() {
    throw new Error("Needs to be implemented by children class");
  }

  /**
   * Used to clean memory as soon as another file is loaded
   */
  clean() {
    $(this.getOutputId()).html("");
  }

  /**
   * Will determine if the tab can be active or not
   * @returns {boolean}
   */
  canView() {
    throw new Error("Needs to be implemented by children class");
  }

  //If set to true, the file will be opened directly on this view
  //If multiple viewers returns true for the same file, it comes back to default.
  overrideDefault() {
    return false;
  }
}

module.exports = Viewer;
