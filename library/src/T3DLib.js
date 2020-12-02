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

/* INCLUDES */
const LocalReader = require("./LocalReader/LocalReader");

/* PRIVATE VARS */
const _version = require("../package.json").version;
const _settings = {
  t3dtoolsWorker: "modules/t3dtools/t3dworker.js",
  concurrentTasks: typeof navigator !== "undefined" ? navigator.hardwareConcurrency : 1,
};

/* PUBLIC PROPERTIES */

/**
 * Tyria 3D Library main module.
 *
 * Use this static class to access file parsers- and data renderer classes.
 *
 * This class also works as a factory for creating
 * LocalReader instances that looks up and inflates files from the Guild Wars 2 .dat.
 * @module T3D
 */
const T3D = (module.exports = {
  /**
   * The current library version. Used to make sure local storage caches are not
   * shared between different releases.
   *
   * @property version
   * @type String
   */
  version: _version,

  /* FILES */

  /**
   * A static reference to the GW2File class, the preferred way of
   * accessing this class.
   *
   * @memberof T3D
   * @property GW2File
   * @type Class
   */
  GW2File: require("./format/file/GW2File"),

  /**
   * A static reference to the GW2Chunk class, the preferred way of
   * accessing this class.
   *
   * @memberOf T3D
   * @property GW2Chunk
   * @type Class
   */
  GW2Chunk: require("./format/file/GW2Chunk"),

  /* RENDERERS */

  /**
   * A static reference to the DataRenderer class, the preferred way of
   * accessing this class.
   *
   * @readonly
   * @property DataRenderer
   * @type Class
   */
  DataRenderer: require("./dataRenderer/DataRenderer"),

  /**
   * A static reference to the EnvironmentRenderer class, the preferred way of
   * accessing this class.
   *
   * @readonly
   * @property EnvironmentRenderer
   * @type Class
   */
  EnvironmentRenderer: require("./dataRenderer/EnvironmentRenderer"),

  /**
   * A static reference to the HavokRenderer class, the preferred way of
   * accessing this class.
   *
   * @readonly
   * @property HavokRenderer
   * @type Class
   */
  HavokRenderer: require("./dataRenderer/HavokRenderer"),

  /**
   * A static reference to the PropertiesRenderer class, the preferred way of
   * accessing this class.
   *
   * @readonly
   * @property PropertiesRenderer
   * @type Class
   */
  PropertiesRenderer: require("./dataRenderer/PropertiesRenderer"),

  /**
   * A static reference to the SingleModelRenderer class, the preferred way of
   * accessing this class.
   *
   * @readonly
   * @property SingleModelRenderer
   * @type Class
   */
  SingleModelRenderer: require("./dataRenderer/SingleModelRenderer"),

  /**
   * A static reference to the TerrainRenderer class, the preferred way of
   * accessing this class.
   *
   * @readonly
   * @property TerrainRenderer
   * @type Class
   */
  TerrainRenderer: require("./dataRenderer/TerrainRenderer"),

  /**
   * A static reference to the ZoneRenderer class, the preferred way of
   * accessing this class.
   *
   * @readonly
   * @property ZoneRenderer
   * @type Class
   */
  ZoneRenderer: require("./dataRenderer/ZoneRenderer"),

  /**
   * A static reference to the StringRenderer class, the preferred way of
   * accessing this class.
   *
   * @readonly
   * @property StringRenderer
   * @type Class
   */
  StringRenderer: require("./dataRenderer/StringRenderer"),

  /* LOGGING */

  /**
   * A static reference to the static Logger object, the preferred way of
   * accessing this object. A simple way of providing your own logging methods
   * is to simply overwrite any or all of the logging methods specified in
   * {{#crossLink "Logger/logFunctions:property"}}{{/crossLink}}
   *
   * @property Logger
   * @type Object
   */
  Logger: require("./Logger"),

  /* SETTINGS */

  /**
   * Contains a list of known map fileID:s and their names. Used in order to quickly
   * look up what maps are in a .dat file. Note that this property is hard coded and
   * has high probablity of being outdated. Also note that the names are just guesses
   * by RequestTimeout.
   *
   * The format of this list objects is
   *
   *
   *   {
   *    maps : [
   *        {
   *           name:"World Area Name",
   *             maps:[
   *               { fileName :"[numeric fileId].data", name:"Map Name One" },
   *                 { fileName :"[numeric fileId].data", name:"Map Name Two" },
   *                 { fileName :"[numeric fileId].data", name:"Map Name Three" }
   *                ]
   *           },
   *           {
   *          name:"Another World Area Name",
   *            maps:[
   *              { fileName :"[numeric fileId].data", name:"Map Name 408" }
   *          ]
   *         }
   *     ]
   *   }
   *
   * @readonly
   * @property MapFileList
   * @type Object
   */
  MapFileList: require("./MapFileList"),

  /* UTILS */

  /**
   * A static reference to the MaterialUtils class.
   *
   * @readonly
   * @property MaterialUtils
   * @type Object
   */
  MaterialUtils: require("./util/MaterialUtils.js"),

  /**
   * A static reference to the MathUtils class.
   *
   * @readonly
   * @property MathUtils
   * @type Object
   */
  MathUtils: require("./util/MathUtils.js"),

  /**
   * A static reference to the ParserUtils class.
   *
   * @readonly
   * @property ParserUtils
   * @type Object
   */
  ParserUtils: require("./util/ParserUtils.js"),

  /**
   * A static reference to the RenderUtils class.
   *
   * @readonly
   * @property RenderUtils
   * @type Object
   */
  RenderUtils: require("./util/RenderUtils.js"),

  /**
   * A static reference to the PersistantStore class.
   *
   * @readonly
   * @property PersistantStore
   * @type Class
   */
  PersistantStore: require("./LocalReader/PersistantStore"),

  /**
   * A static reference to the FileTypes tools and list.
   *
   * @readonly
   * @property FileTypes
   * @type Object
   */
  FileTypes: require("./LocalReader/FileTypes"),

  /* PUBLIC METHODS */

  /**
   * Creates a new instance of LocalReader with an pNaCl inflater connected to it.
   *
   * @async
   * @param  {File}     file    Core JS File instance, must refer to a GW2 .dat file
   * @param  {Function}  callback  Callback function, fired when the file index is fully
   *                                 constructed. Takes no arguments.
   *
   * @param  {String}   t3dtoolsWorker URL to the inflater file. If omitted
   *                                 _settings.t3dtoolsWorker will be used instead.
   *
   * @return {LocalReader}      The contructed LocalReader, note that this object
   *                                 will not be fully initialized until the callback
   *                                 is fired.
   */
  getLocalReader: function (file, callback, t3dtoolsWorker) {
    const path = t3dtoolsWorker || _settings.t3dtoolsWorker;

    // Create the instance and init the threads
    const lrInstance = new LocalReader({
      workerPath: path,
      workersNb: _settings.concurrentTasks,
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
   *
   * @async
   * @param  {LocalReader}  localReader A fully initialized LocalReader instance
   * @param  {Function}    callback    Fires when the index has been loaded
   *                                     from the localstorage or after it has
   *                                     been built and stored in localstorage.
   *                                     Takes the generated object list of
   *                                     files as an argument. This list groups
   *                                     arrays of MFT indices per file type,
   *                                     for exmample:
   *
   *
   *   {
   *      "Unknown"  : [444, 555, 333],
   *      "MODL"    : [444, 555, 333],
   *       "String"  : [666, 777, 888]
   *   }
   *
   * For more details see
   * {{#crossLink "LocalReader/listFiles:method"}}{{/crossLink}}
   */
  getFileListAsync: function (localReader, callback) {
    localReader.readFileList().then((result) => {
      const returnObj = {};
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
   * from the {{#crossLink "T3D/MapFileList:property"}}{{/crossLink}}
   *
   * @async
   * @param {LocalReader}  localReader  A fully initialized LocalReader instance
   * @param {Function}  callback  Fires when the index has been loaded
   *                                   from the localstorage or after it has
   *                                   been built and stored in localstorage.
   *                                   Takes the generated object list of
   *                                   files as an argument. This list groups
   *                                   arrays of MFT indices per file type,
   *                                   for exmample:
   *
   *     {
   *       maps:[
   *         {
   *           name: 'Heart of Maguuma',
   *           maps: [
   *             {fileName:1151420, name:'HoT BWE3 Raid'},
   *             {fileName:969663, name:'Verdant Brink}
   *           ]
   *         },
   *         {
   *           name: 'Unknown maps',
   *           maps: [
   *             {fileName:12345678, name:'Unknown map 12345678'}
   *           ]
   *         }
   *       ]

  *      };
  * @param {boolean} searchAll if true forces re-indexing of entire dat.
  */
  getMapListAsync: function (localReader, callback, searchAll) {
    function restoreOuput(array) {
      const returnArray = [];
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
        callback(restoreOuput(localReader.getMapList()));
      });
      return;
    } else {
      callback(restoreOuput(localReader.getMapList()));
    }
  },

  /**
   * Utility method used for rendering map files. Loads a map file and applies
   * the provided renderers to it.
   *
   * @async
   * @param  {LocalReader}  localReader A fully initialized LocalReader instance
   * @param  {Number}       fileName  The File Id of a mapc file.
   * @param  {Array}       renderers  An array of renderer classes. Each
   *                                   class should extend
   *                                   {{#crossLink "DataRenderer"}}{{/crossLink}}
   * @param  {Function}    callback    Callback function, takes the shared
   *                                     renderer context as an argument.
   * @param  {Class}      logger      A logger class of the same type as
   *                                   {{#crossLink "Logger"}}{{/crossLink}}
   */
  renderMapContentsAsync: function (localReader, fileName, renderers, callback, logger) {
    /// VO for storing result from renderers
    const context = {};

    let runAllRenderers;

    /// Make sure we got an actuall ID number
    if (parseInt(fileName)) {
      /// File name is baseId, load using local reader.
      localReader.loadFile(fileName, function (arrayBuffer) {
        /// Set up datastream
        const ds = new DataStream(arrayBuffer, 0, DataStream.LITTLE_ENDIAN);

        /// Initiate Map file object. Connect callback
        const mapFile = new T3D.GW2File(ds, 0);

        /// Populate VO by running the renderers
        runAllRenderers = function (i) {
          /// Run each renderer
          if (i < renderers.length) {
            T3D.runRenderer(
              renderers[i].renderClass,
              localReader,
              Object.assign(renderers[i].settings, { mapFile: mapFile }),
              context,
              runAllRenderers.bind(this, i + 1)
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
   *
   * @async
   *
   * @param  {Class}    renderClass  A class extending
   *                                  {{#crossLink "DataRenderer"}}{{/crossLink}}
   * @param  {LocalReader}localReader A fully initialized LocalReader instance
   * @param  {Object}    settings    Settings passed to the renderer. Often
   *                                 specifies thinks like what file ID should
   *                                 be loaded.
   * @param  {Object}    context     The shared renderer context value object.
   * @param  {Function}   cb          Callback method passed to the renderAsync
   *                                   method of the renderer.
   */
  runRenderer: function (renderClass, localReader, settings, context, cb) {
    const r = new renderClass(localReader, settings, context, undefined, renderClass.rendererName);

    r.renderAsync(cb);
  },

  /**
   * @param  {Object} context        A shared renderer context value object.
   * @param  {Class}   clazz         A class extending
   *                                  {{#crossLink "DataRenderer"}}{{/crossLink}}.
   *                                  Specifies for renderer class you want to read
   *                                  output.
   * @param  {String} propName       The name of the property written by the
   *                                  renderer that should retrtieved.
   * @param  {any}   defaultValue   This value is passed back if no data could
   *                                be found.
   * @return {any}            The specified value from the conext if any,
   *                              otherwise defaultValue.
   */
  getContextValue: function (context, clazz, propName, defaultValue) {
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
  hasWebGL: function (return_context) {
    if (window.WebGLRenderingContext) {
      const canvas = document.createElement("canvas");
      const names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
      let context = false;

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
        } catch (e) {
          //continue
        }
      }

      // WebGL is supported, but disabled
      return false;
    }

    // WebGL not supported
    return false;
  },

  formats: require("./format/chunks/AllFormats"),
});

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

  if (!global.window || !window.indexedDB) {
    T3D.Logger.log(T3D.Logger.TYPE_ERROR, "T3D persistant storing and loading requires indexedDB support.");
    numErrors++;
  }

  if (typeof DataStream === "undefined") {
    T3D.Logger.log(T3D.Logger.TYPE_ERROR, "T3D core functionality requires DataStream library.");
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

/**
 * Performs a quick and dirty check to find what chunk name definitions
 * appear multiple times in th formats array. Note that anything that
 * appears more than 2 times wil get a too hight value due to the
 * algorithm being... incorrect.
 *
 * @private
 * @return {Object} An object mapping duplicate chunk definition names.
 * to the number of apperances.
 */
// eslint-disable-next-line no-unused-vars
function findDuplicateChunkDefs() {
  const dups = {};
  T3D.formats.forEach(function (f1) {
    T3D.formats.forEach(function (f2) {
      if (f2.name === f1.name && f2 !== f1) {
        if (dups[f1.name]) {
          dups[f1.name]++;
        } else {
          dups[f1.name] = 1;
        }
      }
    });
  });
  return dups;
}

/// Library checks requirements on startup
checkRequirements();
