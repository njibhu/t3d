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

declare let T3D: any;

/* INCLUDES */
import LocalReader from "./LocalReader/LocalReader";
import { version as _version } from "./version";
import DataRenderer from "./dataRenderer/DataRenderer";
import EnvironmentRenderer from "./dataRenderer/EnvironmentRenderer";
import HavokRenderer from "./dataRenderer/HavokRenderer";
import PropertiesRenderer from "./dataRenderer/PropertiesRenderer";
import SingleModelRenderer from "./dataRenderer/SingleModelRenderer";
import TerrainRenderer from "./dataRenderer/TerrainRenderer";
import ZoneRenderer from "./dataRenderer/ZoneRenderer";
import StringRenderer from "./dataRenderer/StringRenderer";
import Logger from "./Logger";

import MapFileList from "./MapFileList";
import * as MaterialUtils from "./util/MaterialUtils";
import * as MathUtils from "./util/MathUtils";
import * as RenderUtils from "./util/RenderUtils";

import PersistantStore from "./LocalReader/PersistantStore";
import * as FileTypes from "./LocalReader/FileTypes";

import { FileParser } from "t3d-parser";

/* PRIVATE VARS */
const _settings = {
  t3dtoolsWorker: "modules/t3dtools/t3dworker.js",
  concurrentTasks: typeof navigator !== "undefined" ? navigator.hardwareConcurrency : 1,
};

type MapList = { name: string; maps: { fileName: number; name: string }[] }[];

// eslint-disable-next-line prefer-const
T3D = {
  version: _version,
  DataRenderer: DataRenderer,
  EnvironmentRenderer: EnvironmentRenderer,
  HavokRenderer: HavokRenderer,
  PropertiesRenderer: PropertiesRenderer,
  SingleModelRenderer: SingleModelRenderer,
  TerrainRenderer: TerrainRenderer,
  ZoneRenderer: ZoneRenderer,
  StringRenderer: StringRenderer,
  Logger: Logger,
  MapFileList: MapFileList,
  MaterialUtils: MaterialUtils,
  MathUtils: MathUtils,
  RenderUtils: RenderUtils,
  PersistantStore: PersistantStore,
  FileTypes: FileTypes,

  /**
   * Creates a new instance of LocalReader with an pNaCl inflater connected to it.
   */
  getLocalReader: function (file: File, callback: Function, t3dtoolsWorker: any, noIndexedDB: boolean) {
    const path = t3dtoolsWorker || _settings.t3dtoolsWorker;

    // Create the instance and init the threads
    const lrInstance = new LocalReader({
      workerPath: path,
      workersNb: _settings.concurrentTasks,
      noIndexedDB,
    });

    /// Callback with the lrInstance
    lrInstance.openArchive(file).then(() => {
      callback(lrInstance);
    });

    return lrInstance;
  },

  /**
   * Utility method for acceccing a list containing information about all files
   * in the .dat connected to the provided LocalReader instance. This method first
   * tries to read a local indexing list from the client's localstorage and
   * fallbacks to generating the list by scanning the MFT indices of the .dat
   * and peeking each file in order to find out what filetype it has.
   *
   * Note that peeking the files is the time consuming task, so if you don't want
   * yout application to spend time indexing the .dat and have a priori knowledge
   * about the required file Id's you should not use this method.
   **/
  getFileListAsync: function (localReader: LocalReader, callback: Function) {
    localReader.readFileList().then((result) => {
      const returnObj: any = {};
      for (const fileEntry of result) {
        if (returnObj[fileEntry.fileType] === undefined) {
          returnObj[fileEntry.fileType] = [];
        }
        returnObj[fileEntry.fileType].push(fileEntry.mftId);
      }
      callback(returnObj);
    });
  },

  /**
   * Utility method for acceccing a list containing information about all map files
   * in the .dat connected to the provided LocalReader instance. This method first
   * tries to read a local indexing list from the client's localstorage and
   * fallbacks to generating the list by scanning the MFT indices of the .dat
   * and peeking each file in order to find out what filetype it has.
   *
   * If the searchAll flag is not set to true, this process will only scan files
   * from the "T3D/MapFileList" property.
   **/

  getMapListAsync: function (
    localReader: LocalReader,
    callback: (mapList: { maps: MapList }) => unknown,
    searchAll: boolean
  ) {
    function restoreOuput(array: { name: string; category: string; baseId: number }[]) {
      const returnArray: MapList = [];
      for (const elt of array) {
        let category = returnArray.findIndex((i) => i.name === elt.category);
        if (category === -1) {
          category = returnArray.push({ name: elt.category, maps: [] }) - 1;
        }
        returnArray[category].maps.push({
          fileName: elt.baseId,
          name: elt.name,
        });
      }
      // And resort it in order
      returnArray.sort((i, j) => {
        if (i.name < j.name) return -1;
        if (i.name > j.name) return 1;
        return 0;
      });
      return { maps: returnArray };
    }

    /// If seachAll flag is true, force a deep search
    if (searchAll) {
      localReader.readFileList().then(() => {
        localReader.getMapList().then((result) => {
          callback(restoreOuput(result));
        });
      });
      return;
    } else {
      localReader.getMapList().then((result) => {
        callback(restoreOuput(result));
      });
    }
  },

  /**
   * Utility method used for rendering map files. Loads a map file and applies
   * the provided renderers to it.
   **/
  renderMapContentsAsync: function (
    localReader: LocalReader,
    fileName: number | string,
    renderers: any[],
    callback: Function,
    logger: typeof Logger
  ) {
    /// VO for storing result from renderers
    const context = {};

    let runAllRenderers: any;

    /// Make sure we got an actuall ID number
    if (parseInt(fileName as any)) {
      /// File name is baseId, load using local reader.
      localReader.loadFile(parseInt(fileName as any), function (arrayBuffer) {
        /// Initiate Map file object. Connect callback
        const mapFile = new FileParser(arrayBuffer!);

        /// Populate VO by running the renderers
        runAllRenderers = function (i: any) {
          /// Run each renderer
          if (i < renderers.length) {
            T3D.runRenderer(
              renderers[i].renderClass,
              localReader,
              Object.assign(renderers[i].settings, { mapFile: mapFile }),
              context,
              () => runAllRenderers(i + 1)
            );
          }

          /// Fire callback with VO when done
          else {
            callback(context);
          }
        };

        /// Starting point for running each renderer
        runAllRenderers(0);
      });
    }

    /// Primitive error message...
    else {
      const outputLogger = logger || T3D.Logger;
      outputLogger.log(T3D.Logger.TYPE_ERROR, "Map id must be an integer!, was:", fileName);
    }
  },

  /**
   * Utility method for applying a single renderer to a LocalReader insatnce.
   **/
  runRenderer: function (
    renderClass: typeof DataRenderer,
    localReader: LocalReader,
    settings: any,
    context: any,
    cb: Function
  ) {
    const r = new renderClass(localReader, settings, context, undefined, renderClass.rendererName);

    r.renderAsync(cb);
  },

  getContextValue: function (context: any, clazz: typeof DataRenderer, propName: any, defaultValue: any): any {
    const output = context[clazz.rendererName];
    if (output) {
      return output[propName] ? output[propName] : defaultValue;
    }
    return defaultValue;
  },

  /**
   * Check if the client web browser can render WebGL 3D content.
   *
   * @private
   * @param  {boolean} return_context flag making this method return the canvas object instead of true
   * @return {boolean} true if the client is WebGL enabled, false otherwise
   */
  hasWebGL: function (return_context: boolean): boolean | { name: any; gl: any } {
    if (window.WebGLRenderingContext) {
      const canvas = document.createElement("canvas");
      const names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
      let context: any = false;

      for (let i = 0; i < 4; i++) {
        try {
          context = canvas.getContext(names[i]);
          if (context && typeof context.getParameter === "function") {
            // WebGL is enabled
            if (return_context) {
              // return WebGL object if the function's argument is present
              return { name: names[i], gl: context };
            }
            // else, return just true
            return true;
          }
        } catch {
          //continue
        }
      }

      // WebGL is supported, but disabled
      return false;
    }

    // WebGL not supported
    return false;
  },
} as const;

export default T3D;
(globalThis as any).T3D = T3D;

/* PRIVATE METHODS */

/**
 * Performs checks for required browser capabilities and required third party libraries.
 * Loggs any warnings or error messages.
 *
 * @private
 * @return {Number} The ammount of errors and warnings generated.
 */
function checkRequirements() {
  let numErrors = 0;

  if (!globalThis.window || !window.indexedDB) {
    T3D.Logger.log(T3D.Logger.TYPE_ERROR, "T3D persistant storing and loading requires indexedDB support.");
    numErrors++;
  }

  if (typeof FileParser === "undefined") {
    T3D.Logger.log(T3D.Logger.TYPE_ERROR, "T3D core functionality requires t3d-parser library.");
    numErrors++;
  }

  if (typeof THREE === "undefined") {
    T3D.Logger.log(T3D.Logger.TYPE_WARNING, "T3D mesh generation requires three.js library.");
    numErrors++;
  }

  if (numErrors < 1) {
    T3D.Logger.log(T3D.Logger.TYPE_MESSAGE, "Tyria 3D API v" + T3D.version + " initialized.");
  }

  return numErrors;
}

/// Library checks requirements on startup
checkRequirements();
