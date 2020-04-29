!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.T3D=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

/// Generic ArenaNet File with basic header functionality
var GW2File = _dereq_('../format/file/GW2File.js');

/// Definition of main dat file header
var defANDAT = _dereq_('../format/definition/ANDAT');

/// Definition of the MFT index
var defMFT = _dereq_('../format/definition/MFT');

/// Small collection of Math and Sort algorithms
var MathUtils = _dereq_('../util/MathUtils.js');

/// List of known GW2 maps used to make lookup faster
var MapFileList =  _dereq_('../MapFileList');


/**
 * A statefull class that handles reading and inflating data from a local GW2 dat file.
 * @class LocalReader
 * @constructor
 * @param {File}	datFile A core JS File instance, must refer to the GW2 .dat
 * @param {String}	version T3D version.
 * @param {Object} logger {{#crossLink "Logger"}}{{/crossLink}} object responsible for UI logging.
 */
var LocalReader = function(datFile, version, logger){

	/// Initiate list of file infaltion listeners
	this.fileListeners = [];

	/// Add reference to file object to DAT
	this.dat = datFile;
	this.version = version;

	if(logger)
		this.logger = logger;
	else
		this.logger = T3D.Logger;
};

/**
 * Parses the dat file main header and parses the MFT index
 * @method parseHeaderAsync 
 * @async
 * @param  {Function} callback Fires when mft indexing is complete. No arguments
 */
LocalReader.prototype.parseHeaderAsync = function(callback){

	this.onFullyLoaded = callback;

	///Read dat file header, 40 bytes should always be the length
	this.loadFilePart(this.dat, 0, 40, this.readANDatHeader);	
}

/**
 * Registers a pNaCl inflaton program from the DOM to this instance.
 * @method connectInflater
 * @param  {HTMLElement} inflater   The embed element for the pNaCl program
 * @param  {HTMLElement} inflaterWrapper The element wrapping the embed
 */
LocalReader.prototype.connectInflater = function(inflater, inflaterWrapper){
	var self = this;

	/// HTML pNaCl emed elements
	this.NaClInflater = inflater;	

    /// Set up a listener for any messages passed by the pNaCl component
    inflaterWrapper.addEventListener(
    	'message',
    	function(message_event){
    		self.NaClListener.call(self, message_event);
    	},
    	true
	);

}

/**
 * Listener for pNaCl inflater.
 * @method NaClListener
 * @param {Object} message_event data received from pNaCl program.
 */
LocalReader.prototype.NaClListener = function(message_event){
	if( typeof message_event.data === 'string' ) {
		
		this.logger.log(
			T3D.Logger.TYPE_WARNING,
			"NaCl threw an error",message_event.data
		);
		return;
	}


	//console.log("Got back a DS from NaCl RAW", message_event.data);
	//console.log("Got back a DS from NaCl Uint32Array", new Uint32Array(message_event.data));
	var handle = message_event.data[0];

	if(this.fileListeners[handle]){
		this.fileListeners[handle].forEach(function(callback){
			var data = message_event.data;
			/// Array buffer, dxtType, imageWidth, imageHeigh			
			callback(data[1], data[2], data[3], data[4]);	
		});

		// Remove triggered listeners
		this.fileListeners[handle] = null;
	}
	
}

/**
 * Reads the main header of this dat file and calls readMFTHeader
 * in order to parse the MFT index.
 * @method readANDatHeader
 * @param  {DataStream} ds DataStream instance holding header data
 */
LocalReader.prototype.readANDatHeader = function(ds){


	/// Read file header data struct
	this.fileHeader = ds.readStruct(defANDAT);

	this.logger.log(
		T3D.Logger.TYPE_DEBUG,
		"Loaded Main .dat header", this.fileHeader
	);

	/// Get pointer to MFT chunk header
	this.fileHeader.mftOffset =  MathUtils.arr32To64(this.fileHeader.mftOffset);

	/// Load MFT
	this.loadFilePart(
		this.dat,
		this.fileHeader.mftOffset,
		this.fileHeader.mftSize,
		this.readMFTHeader );

};

/**
 * Reads the MFT header and calls readMFTIndexFile
 * in order to parse the MFT index.
 * @method readMFTHeader
 * @param  {DataStream} ds DataStream instance holding header data
 */
LocalReader.prototype.readMFTHeader = function(ds){

	/// Read MFT header data struct
	/// Global variable mft
	this.mft = ds.readStruct(defMFT);

	var entryStartPtr = ds.position;
	var numEntires = this.mft.nbOfEntries;

	/// MFT has entries with offset, size and compression flag
	/// for all files in the .dat

	/// Read all entry offsets and sizes into uint32 arrays
	this.mft.entryDict = {
		offset_0:new Uint32Array(numEntires),
		offset_1:new Uint32Array(numEntires),
		offset:new Float64Array(numEntires),
		size:new Uint32Array(numEntires),
		compressed:new Uint16Array(numEntires),
	}


	/// Read offset, size and compressed flag of the entries.
	this.logger.log(
		T3D.Logger.TYPE_DEBUG,
		"reading MFT entries"
	);
	for(var i=0; i<numEntires-1; i++){
		
		/// Read first 14 bytes
		this.mft.entryDict.offset_0[i] = ds.readUint32();
		this.mft.entryDict.offset_1[i] = ds.readUint32();
		this.mft.entryDict.size[i] = ds.readUint32();
		this.mft.entryDict.compressed[i] = ds.readUint16();


		this.mft.entryDict.offset[i] =  MathUtils.arr32To64(
			[ this.mft.entryDict.offset_0[i],
			  this.mft.entryDict.offset_1[i] ]
		);

		/// Skip 10
		ds.seek(ds.position + 10);

	}

	/// Read data pointed to by 2nd mft entry
	/// This entry maps file ID to MFT index	
	var offset = MathUtils.arr32To64(
		[ this.mft.entryDict.offset_0[1],
		  this.mft.entryDict.offset_1[1] ]
	);
	var size = this.mft.entryDict.size[1];

	this.loadFilePart(this.dat, offset, size, this.readMFTIndexFile);

};

/**
 * Reads the main MFT index file and builds MFT indices used for acceccing
 * files refered to by MFT index, File ID or Base ID.
 * @method readMFTIndexFile
 * @param  {DataStream} ds DataStream instance holding header data
 * @param  {Number} size The size of the index file
 */
LocalReader.prototype.readMFTIndexFile = function(ds, size){
	
	var length = size / 8;

	/// fileIdTable
	var ids = new Uint32Array(length);
	var mftIndices = new Uint32Array(length);

	/// m_entryToId
	var m_entryToId_baseId = new Uint32Array(length);
	var m_entryToId_fileFileId = new Uint32Array(length);

	this.mft.baseToMft = new Uint32Array(2e6);
	this.mft.fileToMft = new Uint32Array(2e6);
	
	for(var i=0; i<length; i++){
		ids[i] = ds.readUint32();
		mftIndices[i] = ds.readUint32();
	}
	
	/// Raw map of "ID" to mft index
	this.mft.id2index = {
		ids:ids,
		mftIndices:mftIndices
	}

	/// m_entryToId has both base and filed id
	for(var i=0; i<length; i++){


		if (ids[i] == 0 && mftIndices[i] == 0) {
            continue;
        }
 		
 		var entryIndex = mftIndices[i];
        var entry     = {
        	fileId : m_entryToId_fileFileId[entryIndex],
        	baseId : m_entryToId_baseId[entryIndex]
        }

        if (entry.baseId == 0) {
            entry.baseId = ids[i];            
        } else if (entry.fileId == 0) {
            entry.fileId = ids[i];
        }

        if (entry.baseId > 0 && entry.fileId > 0) {
            if (entry.baseId > entry.fileId) {
            	//std::swap(entry.baseId, entry.fileId);
            	var temp = entry.baseId;
            	entry.baseId = entry.fileId;
            	entry.fileId = temp;                
            }
        }

        this.mft.baseToMft[entry.baseId] = entryIndex;
        this.mft.fileToMft[entry.fileId] = entryIndex;

        //Write back
        m_entryToId_fileFileId[entryIndex] = entry.fileId;
        m_entryToId_baseId[entryIndex] = entry.baseId;
	}

	/// Populate global VO with finished dicts
	this.mft.m_entryToId = {
		baseId:m_entryToId_baseId,
		fileId:m_entryToId_fileFileId
	}


	this.logger.log(
		T3D.Logger.TYPE_DEBUG,
		"Finished indexing MFT ", this.mft
	);

	if(this.onFullyLoaded)
		this.onFullyLoaded();
};

/**
 * Reads the cached list of files corresponding to the reader's .dat from the localStorage.
 * @method loadFileList
 * @return {Array} Grouped List of files
 */
LocalReader.prototype.loadFileList = function(){
	var datFile = this.dat;
	var datName = "fileList_" + this.version + "." + datFile.name + "_" + datFile.lastModified + "_" + datFile.size;
	var str = localStorage.getItem(datName);
	if(!str)
		return null;
	try{
		return JSON.parse(str);	
	}
	catch(e){		
	}
	return null;	
}

/**
 * Reads the cached list of maps corresponding to the reader's .dat from the localStorage.
 * @method loadMapList
 * @return {Array} Grouped List of maps
 */
LocalReader.prototype.loadMapList = function(){
	var datFile = this.dat;
	var mapName = "mapList_" + this.version + "." + datFile.name + "_" + datFile.lastModified + "_" + datFile.size;
	var str = localStorage.getItem(mapName);
	if(!str)
		return null;
	try{
		return JSON.parse(str);	
	}
	catch(e){
		
	}
	return null;	
}

/**
 * Stores a files list array in the browser's local storage.
 * @method storeFileList
 * @param  {File} datFile  The File instance used to build the file list.
 * @param  {Object} fileList The list to store.
 */
LocalReader.prototype.storeFileList = function(datFile, fileList){
	debugger;
	var stringrep = JSON.stringify(fileList);
	var datName = "fileList_" + this.version + "." + datFile.name + "_" + datFile.lastModified + "_" + datFile.size;
	localStorage.setItem(datName, stringrep);
}


/**
 * Stores a map list array in the browser's localStorage.
 * @method storeMapList
 * @param  {File} datFile  The File instance used to build the map list.
 * @param  {Object} mapList The list to store.
 */
LocalReader.prototype.storeMapList = function(datFile, mapList){
	var mapName = "mapList_" + this.version + "." + datFile.name + "_" + datFile.lastModified + "_" + datFile.size;
	localStorage.setItem(mapName, JSON.stringify(mapList) );
}


/**
 * Reads the file type of each file in the dat and stores the resulting list in 
 * the browser's local storage.
 * @method readFileListAsync
 * @async
 * @param  {Function} callback Fired when the list is generated and stores
 *
 * First argument is the a list of mft indices grouped by file type.
 */
LocalReader.prototype.readFileListAsync = function(callback){

	var self = this;

	/// Get a list of unique indices based on file addresses
	var mftIndices = this.mft.id2index.mftIndices;
	var uniqueIdxs = MathUtils.sort_unique(mftIndices, function(a, b) {
		return self.mft.entryDict.offset[a] - self.mft.entryDict.offset[b];
	});

	/// Set total ammount of files to list
	var maxLength = uniqueIdxs.length;
	//maxLength = 1e4;

	this.logger.log(
		T3D.Logger.TYPE_DEBUG,
		"Scanning ",maxLength, "files"
	);

	/// Number of parallel event chains for file lookup
	var N = 8;

	this.listFiles(uniqueIdxs, null, 0, maxLength, N, 
		function(result){

			/// Callback for listFiles
			/// should be an object grouped by header type

			/// Clear listeners used during indexing
			self.fileListeners = [];
			
			self.storeFileList(self.dat, result);

			/// Fire callback and pass the map list
			callback(result);
		}
	);
}

/**
 * Looks up mft indices for all mapc pack files in the dat. Either looks trough all files or
 * only the list defined in {{#crossLink "T3D/MapFileList:property"}}{{/crossLink}}.
 * @method readMapListAsync
 * @async
 * @param  {boolean}   searchAll if true forces re-indexing of entire dat.
 * If false only reads indices specified in {{#crossLink "T3D/MapFileList:property"}}{{/crossLink}}.
 * @param  {Function} callback Fired when the list is generated
 *
 * First argument is the a list of mft indices grouped by file type. For exmample:
 * 
 * 		{	
 * 			maps:[
 * 				{
 * 					name: 'Heart of Maguuma',
 * 					maps: [
 * 						{fileName:1151420, name:'HoT BWE3 Raid'},
 * 						{fileName:969663, name:'Verdant Brink}
 * 					]
 * 				},
 * 				{
 * 					name: 'Unknown maps',
 * 					maps: [
 * 						{fileName:12345678, name:'Unknown map 12345678'}
 * 					]
 * 				}
 * 			]
 
 *	    };
 */
LocalReader.prototype.readMapListAsync = function(searchAll, callback){
	var self = this;
	var datFile = this.dat;
	var mftIndices = [];

	/// Number of threads for map lookup
	var N = 8; 

	/// Time spent looking up maps
	var t = new Date().getTime();

	this.logger.log(
		T3D.Logger.TYPE_PROGRESS,
		"Finding maps (first visit only)",
		"initializing"
	)

	/// Only look for known maps
	if(!searchAll){

		MapFileList.maps.forEach(function(mapCol){
			mapCol.maps.forEach(function(mapEntry){
				var entryBaseId = mapEntry.fileName.split(".")[0];
				var mftIndex = self.getFileIndex(entryBaseId)
				mftIndices.push(mftIndex);
			});
		});
	}

	/// Look for all maps
	else{
		mftIndices = this.mft.id2index.mftIndices;
	}

	/// Get a list of unique indices based on file addresses
	var uniqueIdxs = MathUtils.sort_unique(mftIndices, function(a, b) {
		return self.mft.entryDict.offset[a] - self.mft.entryDict.offset[b];
	});

	/// Callback for map lookup
	var cb = function(result){
		var dt = new Date().getTime() - t;

		self.logger.log(
			T3D.Logger.TYPE_DEBUG,
			"Time elapsed ", Math.round(0.001*dt)," seconds"
		);

		/// Clear listeners used during indexing
		self.fileListeners = [];

		var localMapList = {maps:[]};

		/// Arrange each found map into a grouped list
		if(result.mapc){

			result.mapc.forEach(function(mftIndex){

				/// Base Id is used by gw2browser and is therefore the de facto identifier
				/// in the community. Let's use it here too!
				var baseId = self.mft.m_entryToId.baseId[mftIndex+1];

				/// Hack to avoid releasing maps newer than VB
				/*if(baseId > 11542000){
					return;
				}*/

				var name = "";
				var group = "";

				MapFileList.maps.forEach(function(mapCol){
					mapCol.maps.forEach(function(mapEntry){
						if(name.length == 0 && mapEntry.fileName.indexOf(baseId+".")>=0){
							name = mapEntry.name;
							group = mapCol.name;
						}
					});
				});

				if(name.length == 0){
					name = "Unknown map "+baseId;
				}

				if(group.length == 0){
					group = "Unknown maps";
				}

				var localGroup = null;
				localMapList.maps.forEach(function(mapCol){
					if(mapCol.name == group){
						localGroup = mapCol;
					}
				});

				if(!localGroup){
					localGroup = {name:group,maps:[]};
					localMapList.maps.push(localGroup);
				}

				localGroup.maps.push({fileName:baseId, name:name});
				
			});

		} /// end if result.mapc
				
		/// Store map list into local storage.
		self.storeMapList(datFile, localMapList);

		/// Fire callback and pass the map list
		callback(localMapList);

	}/// End of map lookup callback.


	/// Start map lookup:
	var maxLength = uniqueIdxs.length;
	this.logger.log(
		T3D.Logger.TYPE_DEBUG,
		"Scanning ",maxLength, " files for maps..."
	);
	this.listFiles(uniqueIdxs, "mapc", 0, maxLength, N, cb);
}

/**
 * Lists all MFT indices grouped by file type. If a file type is specified only files of that type
 * is added to the list.
 * 
 * @method listFiles
 * @param  {Array}   uniqueIdxs File MFT indices to look in.
 * @param  {String}  type       Pack file type or file type to accept. If not set adds all files. 
 * @param  {[type]}   start     uniqueIdxs start ofset 
 * @param  {[type]}   length    number of entries to scan in uniqueIdxs
 * @param  {[type]}   N         Number of parallel event listeners to run while scanning. (Kinda like parallelism but not quite)
 * @param  {Function} callback  Fired when all files have been indexed. First argument is a list of 
 * MFT indices grouped by file type, for example
 * 	{
 *	  	"Unknown"	: [444, 555, 333],
 *	  	"MODL"		: [444, 555, 333],
 * 	  	"String"	: [666, 777, 888]
 * 	}
 */
LocalReader.prototype.listFiles = function(uniqueIdxs, type, start, length, N ,callback){
	var self = this;
	var maxlen = start+length;
	var lastPct = 0;
	var pctM = 100.0 / Math.min(length, uniqueIdxs.length - start);
	var threadsDone = 0;

	var result = {};

	/// Fires when file has beed inflated.
	/// Pushes matching file types into the result array
	var peekCallback=function(inflatedData, i, mftIndex){
		if(!inflatedData){
			self.logger.log(
				T3D.Logger.TYPE_WARNING,
				"No infalted data for entry"
			);
			readUniqueId(i+N);
			return;
		}

		var ds = new DataStream(inflatedData);

		/// Check if this is a pack file, a texture, a string file etc
		var first4 = ds.readCString(4);
		var fileType;

		///Texture
		if( first4 == "ATEX" || first4 == "ATEC" ||
			first4 == "ATEP" || first4 == "ATET" || 
			first4 == "ATEU" || first4 == "ATTX" ){
			fileType = "Texture";
		}

		///Pack file
		else if(first4.indexOf("PF") == 0){
			var file = new GW2File(ds, 0, true);/// true for "plz no load chunkz"
			fileType = file.header.type;
		}

		///Binary
		else if(first4.indexOf("MZ") == 0){
			fileType = "Binary";
		}

		/// Strings file
		else if(first4 == "strs"){
			fileType = "String";
		}

		///Unknown
		else{
			fileType = "Unknown";
		}
		
		/// Add file to result[type] array
		/// If a type was specified in the call only allow that type to be added
		if( !type || fileType == type){
			if(!result[fileType]){
				result[fileType] = [];
			}
			result[fileType].push(mftIndex);
		}

		readUniqueId(i+N);
	}

	
	var readUniqueId = function(i){

		if(i%N==0){
			var pct = Math.min(100, Math.floor( (i-start) * pctM) );
			if(lastPct != pct){
				self.logger.log(
					T3D.Logger.TYPE_PROGRESS,
					"Find type",
					pct
				);
				lastPct = pct;
			}
		}

		if( i>=uniqueIdxs.length || i>=maxlen ){
			self.logger.log(
					T3D.Logger.TYPE_DEBUG,
					"Thread ",i%N+" done"
			);
			threadsDone++;
			if(threadsDone == N){
				callback(result);
			}
			return;
		}

		var mftIndex = uniqueIdxs[i];

		var compressed = self.mft.entryDict.compressed[mftIndex];
		if(!compressed){
			/*self.logger.log(
					T3D.Logger.TYPE_WARNING,
					"File is NOT compressed, skipping."
			);*/
			readUniqueId(i+N);
			return;
		}

		var handle = mftIndex;
		var offset = self.mft.entryDict.offset[mftIndex];
		var size =  self.mft.entryDict.size[mftIndex];

		if(size<0x20){
			/*this.logger.log(
					T3D.Logger.TYPE_WARNING,
					"File is too small, skipping."
			);*/
			readUniqueId(i+N);
			return;
		}

		/// Read .dat file part
		self.loadFilePart(self.dat, offset, Math.min(size,2000),
			function(ds, _size){
				
				///Infalte
				self.inflate(
					ds,
					_size,
					handle,
					///Infaltion  callback
					function(inflatedData){
						peekCallback(inflatedData, i, mftIndex);
					}, 
					false, 0x20
				);


		});

	}

	/// Make N calls in serial, this will however result in N
	/// Parallell processes due to callbacks..
	for(var n=0; n<N; n++){
		readUniqueId(start + n);	
	}
};

/**
 * Gets MFT index by fileId or baseId
 * @method getFileIndex
 * @param  {Number} baseOrFileId A file Id or base Id
 * @return {Number}              MFT index
 */
LocalReader.prototype.getFileIndex = function(baseOrFileId){


	var index = -1;

	/// Get by base id
	
	/*for(var i = 0; i<this.mft.m_entryToId.baseId.length; i++){
		if( this.mft.m_entryToId.baseId[i+1] == baseOrFileId ){	
			
			index = i;

			this.logger.log(
				T3D.Logger.TYPE_DEBUG,
				"Found BASE ID", baseOrFileId, " at INDEX ", i
			);

			return index;
		}
	}*/
	baseOrFileId = parseInt(baseOrFileId);
	index = this.mft.m_entryToId.baseId.indexOf(baseOrFileId);
	if(index != -1){
		return index-1;
	}
	else{
		index = this.mft.m_entryToId.fileId.indexOf(baseOrFileId);
		if(index != -1){
			return index-1;
		}
	}

	/// Get by file id
	/*if(index==-1){
		for(var i = 0; i<this.mft.m_entryToId.fileId.length; i++){
			if( this.mft.m_entryToId.fileId[i+1] == baseOrFileId ){	
				
				index = i;

				this.logger.log(
					T3D.Logger.TYPE_DEBUG,
					"Found FILE ID", baseOrFileId, " at INDEX ", i
				);

				return index;
			}
		}	
	}*/

	return index;
}

/**
 * Reads a bitmap from a texture file in the dat.
 * @method loadTextureFile
 * @async
 * @param  {Number}   baseId   Base or File id of the texture to load
 * @param  {Function} callback Fires when the inflater has read the texture data.
 * 
 * The passed arguments are 
 * -ArrayBuffer Bitmap
 * -Number DXT Type
 * -Number image width
 * -Number image height
 *
 */
LocalReader.prototype.loadTextureFile = function(baseId, callback){
	this.loadFile(baseId, callback, true);
}

/**
 * Reads data from a file in the dat.
 * @method loadFile
 * @async
 * @param  {Number}   baseId   Base or File id of the texture to load
 * @param  {Function} callback Fires when the inflater has read the data.
 *
 * The passed arguments are 
 * -ArrayBuffer raw data
 * -Number DXT Type if applicable
 * -Number image width if applicable
 * -Number image height if applicable
 *
 * 
 * @param  {boolean}  isImage  
 * @param  {[type]}   raw      If true, any infation is skipped and raw data is returned.
 */
LocalReader.prototype.loadFile = function(baseId, callback, isImage, raw){
	
	var self = this;

	var index = this.getFileIndex(baseId);
	var mftIndex = index;

	//If the file doesn't exist still make sure to fire the callback
	if(mftIndex <= 0 ){
		self.logger.log(
			T3D.Logger.TYPE_WARNING,
			"Could not find file with baseId ",baseId
		);
		callback(null);
		return;
	}

	//console.log("fetchign  baseId ",baseId);
	
	var offset = MathUtils.arr32To64(
		[ this.mft.entryDict.offset_0[mftIndex],
		  this.mft.entryDict.offset_1[mftIndex] ]
	);

	var size = this.mft.entryDict.size[mftIndex];
	//console.log("File at found index is "+ size +" bytes");
	
	var compressed = this.mft.entryDict.compressed[mftIndex];
	if(!compressed){
		self.logger.log(
			T3D.Logger.TYPE_WARNING,
			"File is NOT compressed, skipping"
		);

		callback(null);
		return;
	}

	/// Read map and pass the ds to our pNaCL inflate function
	//TODO: will this work?? Shared base id's and all that...
	var handle = index;

	this.loadFilePart(this.dat, offset, size, function(ds, size){
		
		/// If the raw param was passed return the un-inflated data
		if(raw){
			callback(ds);
		}

		/// If raw parameter was not passed or false, inflate first
		else{
			self.inflate(ds, size, handle, callback, isImage);	
		}
		
	});
};


/**
 * Infaltes binary data using a pNaCl program. If the isImage flag is set the infalted data is
 * also decoded if it contains DXT image data.
 * @method inflate
 * @param  {DataStream} ds DataStream instance holding data to inflate
 * @param  {Number}   size      Number if bytes to read
 * @param  {Number}   handle    Unique ID for this file
 * @param  {Function} callback  callback to register for this pNaCl task
 * @param  {Boolean}  isImage   Passed to the inflater in order to decode image data
 * @param  {[type]}   capLength Number of bytes to deflate.
 */
LocalReader.prototype.inflate = function(ds, size, handle, callback, isImage, capLength){
	
	var arrayBuffer = ds.buffer;	

	if(!capLength){
		//capLength = arrayBuffer.byteLength;
		capLength = 1;
	}
	//console.log("Uncompressing file size ",size, "handle", handle, "cap", capLength, "isImage", isImage);
	
	if(arrayBuffer.byteLength < 12){
		this.logger.log(
			T3D.Logger.TYPE_WARNING,
			"not inflating, length is too short ("+arrayBuffer.byteLength+")", handle
		);
		callback(null);
		return;
	}
	if(handle == 123350 || handle == 123409 || handle == 123408 ){
		callback(null);
		return;
	}

	/// Register listener for file load callback
	if(this.fileListeners[handle]){
		this.fileListeners[handle].push(callback);

		///No need to make another call, just wait for callback event to fire.
		return;
	}
	else{
		this.fileListeners[handle] = [callback];	
	}
	
    
    /// Call pNaCl component with the handle and arrayBuffer as an arguments

    //console.log("posting",[handle,arrayBuffer,isImage===true])
	this.NaClInflater.postMessage([handle,arrayBuffer,isImage===true, capLength]);
};

/**
 * Reads bytes from a big file. Uses offset and length (in bytes) in order to only load
 * parts of the file that are used.
 * @method loadFilePart
 * @async
 * @param  {File}   file     File object to read from
 * @param  {[type]}   offset   Offset in bytes to start reading
 * @param  {[type]}   length   Number of bytes to read
 * @param  {Function} callback Two arguments are passed. 
 *
 * The first is a DataStream object representation of the loaded data.
 *
 * The second is the length of the data.
 */
LocalReader.prototype.loadFilePart = function(file, offset, length, callback){
	var self = this;

	var reader = new FileReader();
		
	reader.onerror = function(fileEvent){
		debugger;
	}
	reader.onload  = function(fileEvent){

		var buffer = fileEvent.target.result;
		var ds = new DataStream(buffer);
	  	ds.endianness = DataStream.LITTLE_ENDIAN;

	  	/// Pass data stream and data length to callback function, keeping "this" scope
	  	callback.call(self, ds, length);
	}
	
  	var start = offset;
	var end = start + length;
	reader.readAsArrayBuffer(file.slice(start, end));
};

module.exports = LocalReader;
},{"../MapFileList":3,"../format/definition/ANDAT":13,"../format/definition/MFT":14,"../format/file/GW2File.js":16,"../util/MathUtils.js":18}],2:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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
 * A Logger class for T3D
 *
 * This satic class defines severity levels of messages and provides
 * basic logging functionality. Replacing the reference to
 * @class Logger
 * @static 
 */
var Logger = {};

/**
 * @property {[Number]} TYPE_ERROR
 */
Logger.TYPE_ERROR = 4;

/**
 * @property {[Number]} TYPE_WARNING
 */
Logger.TYPE_WARNING = 3;

/**
 * @property {[Number]} TYPE_MESSAGE
 */
Logger.TYPE_MESSAGE = 2;

/**
 * @property {[Number]} TYPE_PROGRESS
 */
Logger.TYPE_PROGRESS = 1;

/**
 * @property {[Number]} TYPE_DEBUG
 */
Logger.TYPE_DEBUG = 0;



/**
 * The logging functions, indexed by severity/type.
 *
 * @property logFunctions
 * @type Function[]
 */
Logger.logFunctions = new Array(5);

/**
 * Main logging method. Takes 1 to N arguments. If there are more than 1 arguments
 * the first argument is interpreted as severity. If there is only one argument
 * severity defaults to
 * {{#crossLink "Logger/TYPE_MESSAGE:property"}}{{/crossLink}}.
 *  
 * The following arguments are passed to a logging function matching the
 * severity.
 * 
 
 * 
 * @method  log
 */
Logger.log = function(){

	/// Require at least 1 argument
	if(arguments.length == 0){
		return;
	}
	
	/// Parse arguments to an actual array
	var argArr = Logger.argsToArr(arguments);

	/// Default to message if just one argument was passed
	if(argArr.length == 1){
		argArr.unshift(Logger.TYPE_MESSAGE);
	}

	/// Otherwise 1st arg is severity, log/warn/error
	var severity = Math.max(0,Math.min(Logger.logFunctions.length, argArr.shift()));
	var logFunc  = Logger.logFunctions[severity];

	/// Ouput the rest of the arguments
	logFunc.apply(this, argArr);
}

Logger.argsToArr = function(args){
	var argArr = new Array(args.length);
    for(var i = 0; i < argArr.length; ++i) {
        argArr[i] = args[i];
    }
    return argArr;
}

Logger.logFunctions[Logger.TYPE_ERROR] = function(){
	console.error.apply(console,arguments);
}

Logger.logFunctions[Logger.TYPE_WARNING] = function(){
	console.warn.apply(console,arguments);
}

Logger.logFunctions[Logger.TYPE_MESSAGE] = function(){
	console.log.apply(console,arguments);
}

Logger.logFunctions[Logger.TYPE_PROGRESS] = function(){
	var argArr = Logger.argsToArr(arguments);
	argArr.unshift("Progress: ");
	console.log.apply(console,argArr);
}

Logger.logFunctions[Logger.TYPE_DEBUG] = function(){
	var argArr = Logger.argsToArr(arguments);
	console.debug.apply(console,argArr);
}


module.exports = Logger;
},{}],3:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>
Copyright (C) 2018 Njibhu <https://github.com/njibhu>

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

module.exports = {
  maps: [
    {
      name: "01. Shiverpeaks",
      maps: [
        { fileName: "125199.data", name: "Wayfarer Foothills (0)" },
        { fileName: "187611.data", name: "Wayfarer Foothills (1)" },
        { fileName: "568778.data", name: "Cragstead" },
        { fileName: "132434.data", name: "Hoelbrak (0)" },
        { fileName: "197122.data", name: "Hoelbrak (1)" },
        { fileName: "124093.data", name: "Snowden Drifts (0)" },
        { fileName: "186397.data", name: "Snowden Drifts (1)" },
        { fileName: "275155.data", name: "Dredgehaunt Cliffs" },
        { fileName: "276252.data", name: "Frostgorge Sound" },
        { fileName: "277587.data", name: "Lornar's Pass" },
        { fileName: "278717.data", name: "Timberline Falls (0)" },
        { fileName: "846866.data", name: "Timberline Falls (1)" },
        { fileName: "1018612.data", name: "Timberline Falls (2)" },
        { fileName: "295282.data", name: "Eye of the North" }
      ]
    },
    {
      name: "02. Ascalon",
      maps: [
        { fileName: "126118.data", name: "Plains of Ashford (0)" },
        { fileName: "188591.data", name: "Plains of Ashford (1)" },
        { fileName: "127888.data", name: "Diessa Plateau (0)" },
        { fileName: "190490.data", name: "Diessa Plateau (1)" },
        { fileName: "131944.data", name: "Black Citadel (0)" },
        { fileName: "196585.data", name: "Black Citadel (1)" },
        { fileName: "280025.data", name: "Blazeridge Steppes" },
        { fileName: "281313.data", name: "Fireheart Rise" },
        { fileName: "282668.data", name: "Iron Marches" },
        { fileName: "283574.data", name: "Fields of Ruin" }
      ]
    },
    {
      name: "03. Kryta",
      maps: [
        { fileName: "191000.data", name: "Lion's Arch (0)" },
        { fileName: "814803.data", name: "Lion's Arch (1)" },
        { fileName: "1019669.data", name: "Lion's Arch (Legacy)" },
        { fileName: "1796999.data", name: "Lion's Arch (2)" },
        { fileName: "1869665.data", name: "Lion's Arch (3)" },
        { fileName: "128151.data", name: "Divinity's Reach (0)" },
        { fileName: "191265.data", name: "Divinity's Reach (1)" },
        { fileName: "705746.data", name: "Divinity's Reach (2)" },
        { fileName: "129834.data", name: "North of Divinity's Reach (0)" },
        { fileName: "193081.data", name: "North of Divinity's Reach (1)" },
        { fileName: "129524.data", name: "Queensdale (0)" },
        { fileName: "192711.data", name: "Queensdale (1)" },
        { fileName: "130970.data", name: "Kessex Hills (0)" },
        { fileName: "194288.data", name: "Kessex Hills (1)" },
        { fileName: "672138.data", name: "Kessex Hills (2)" },
        { fileName: "861815.data", name: "Kessex Hills (3)" },
        { fileName: "286945.data", name: "Bloodtide Coast" },
        { fileName: "287870.data", name: "Harathi Hinterlands" },
        { fileName: "289176.data", name: "Gendarran Fields" },
        { fileName: "295005.data", name: "Chantry of Secrets" },
        { fileName: "294938.data", name: "Claw Island" }
      ]
    },
    {
      name: "04. Maguuma Jungle",
      maps: [
        { fileName: "195149.data", name: "Caledon Forest" },
        { fileName: "195493.data", name: "Metrica Province" },
        { fileName: "922320.data", name: "Metrica Province Instance" },
        { fileName: "198076.data", name: "The Grove" },
        { fileName: "198272.data", name: "Rata Sum" },
        { fileName: "291064.data", name: "Mount Maelstrom" },
        { fileName: "292254.data", name: "Sparkfly Fen" },
        { fileName: "293307.data", name: "Brisban Wildlands" }
      ]
    },
    {
      name: "05. Ruins of Orr",
      maps: [
        { fileName: "284829.data", name: "Straits of Devastation" },
        { fileName: "285089.data", name: "Malchor's Leap" },
        { fileName: "285634.data", name: "Cursed Shore" },
        { fileName: "295179.data", name: "Cathedral of Hidden Depths" },
        { fileName: "295962.data", name: "A Light in the Darkness" }
      ]
    },
    {
      name: "06. Living World S1",
      maps: [
        { fileName: "520479.data", name: "Southsun Cove" },
        { fileName: "679089.data", name: "Tower of Nightmares" }
      ]
    },
    {
      name: "07. Living World S2",
      maps: [
        { fileName: "836211.data", name: "Dry top (0)" },
        { fileName: "861770.data", name: "Dry top (1)" },
        { fileName: "909361.data", name: "The Silverwastes (0)" },
        { fileName: "996202.data", name: "The Silverwastes (1)" },
        { fileName: "908730.data", name: "Glint's Lair" }
      ]
    },
    {
      name: "08. Heart of Maguuma",
      maps: [
        { fileName: "969663.data", name: "Verdant Brink" },
        { fileName: "1262460.data", name: "Hearts and Minds" },
        { fileName: "969964.data", name: "Unknown Airship in tree" },
        { fileName: "1262310.data", name: "Dragon Stand" },
        { fileName: "1263739.data", name: "Tarir" },
        { fileName: "1264291.data", name: "Tangled Depths" }
      ]
    },
    {
      name: "09. Living World S3",
      maps: [
        { fileName: "1472635.data", name: "(E1) Bloodstone Fen" },
        { fileName: "1498071.data", name: "(E2) Taimi Simulator" },
        { fileName: "1498578.data", name: "(E2) Ring of Fire" },
        { fileName: "1605211.data", name: "(E3) Bitterfrost Frontier" },
        { fileName: "1645474.data", name: "(E4) Caudecus Manor" },
        { fileName: "1646520.data", name: "(E4) Lake Doric" },
        { fileName: "1682493.data", name: "(E5) Draconis Mons" },
        { fileName: "1682763.data", name: "(E5) Titan's Throat" },
        { fileName: "1734839.data", name: "(E6) White Mantle Fortress" },
        { fileName: "1735346.data", name: "(E6) Siren's Landing" },
        { fileName: "1735440.data", name: "(E6) Shining Blade Headquarters" }
      ]
    },
    {
      name: "10. Crystal Desert",
      maps: [
        { fileName: "1794574.data", name: "Crystal Oasis" },
        { fileName: "1833034.data", name: "Desert Highlands" },
        { fileName: "1833726.data", name: "PoF story instances" },
        { fileName: "1839188.data", name: "Domain of Vabbi" },
        { fileName: "1840103.data", name: "Elon Riverlands" },
        { fileName: "1840368.data", name: "Kormir Sanctuary" },
        { fileName: "1842533.data", name: "The Desolation" }
      ]
    },
    {
      name: "11. Living World S4",
      maps: [
        { fileName: "1901428.data", name: "(E1) Fahranur" },
        { fileName: "1902235.data", name: "(E1) Istan" },
        { fileName: "1903523.data", name: "(E1) Crystal Oasis" },
        { fileName: "1954984.data", name: "(E2) Desert Highlands" },
        { fileName: "1955224.data", name: "(E2) Inquest Lab Tower" },
        { fileName: "1955471.data", name: "(E2) Rata Primus" },
        { fileName: "1955642.data", name: "(E2) Divinity's Reach" },
        { fileName: "1955915.data", name: "(E2) Mount Maelstrom" },
        { fileName: "1956140.data", name: "(E2) Frostgorge Sound" },
        { fileName: "1956245.data", name: "(E2) Void" },
        { fileName: "1956299.data", name: "(E2) Hided Inquest Lab" },
        { fileName: "1957526.data", name: "(E2) Sandswept Isles" },
        { fileName: "2004704.data", name: "(E3) Domain of Kourna" },
        { fileName: "2005467.data", name: "(E3) Crystal Oasis" },
        { fileName: "2044320.data", name: "(E4) Jahai Bluffs" },
        { fileName: "2044502.data", name: "(E4) The Mists" },
        { fileName: "2092435.data", name: "(E5) Thunderhead Peaks" },
        { fileName: "2092812.data", name: "(E5) The Auditorium (0)" },
        { fileName: "2093450.data", name: "(E5) The Auditorium (1)" },
        { fileName: "2093791.data", name: "(E5) Glint's Trials" },
        { fileName: "2146125.data", name: "(E6) Dragonfall" },
        { fileName: "2146312.data", name: "(E6) The Auditorium" },
        { fileName: "2146346.data", name: "(E6) Dragonflight" },
        { fileName: "2146376.data", name: "(E6) Sayida's Airship" },
        { fileName: "2146510.data", name: "(E6) Descent" }
      ]
    },
    {
      name: "12. Seasonal Activities",
      maps: [
        { fileName: "506592.data", name: "Ascent to Madness" },
        { fileName: "506670.data", name: "Mad King's Labyrinth (Past)" },
        { fileName: "662436.data", name: "Mad King's Labyrinth (Present)" },
        { fileName: "506739.data", name: "Mad King's Clock Tower" },
        { fileName: "622681.data", name: "The Crown Pavilion" },
        { fileName: "569756.data", name: "SAB Hub (0)" },
        { fileName: "636133.data", name: "SAB Hub (1)" },
        { fileName: "635555.data", name: "SAB World 1" },
        { fileName: "635960.data", name: "SAB World 2" },
        { fileName: "606255.data", name: "Zephyr Sanctum" },
        { fileName: "529896.data", name: "Tixx's Infinirarium" },
        { fileName: "529945.data", name: "Winter Wonderland" },
        { fileName: "2076921.data", name: "Secret Lair of the Snowmen" }
      ]
    },
    {
      name: "13. Activites",
      maps: [
        { fileName: "605983.data", name: "Sanctum Sprint" },
        { fileName: "606030.data", name: "Basket Brawl" }
      ]
    },
    {
      name: "14. Dungeons",
      maps: [
        { fileName: "126840.data", name: "Ascalonian Catacombs (0)" },
        { fileName: "189364.data", name: "Ascalonian Catacombs (1)" },
        { fileName: "275474.data", name: "Sorrow's Embrace" },
        { fileName: "276520.data", name: "Honor of the Waves" },
        { fileName: "284039.data", name: "Citadel of Flame" },
        { fileName: "287214.data", name: "Caudecus's Manor" },
        { fileName: "291284.data", name: "Twilight Arbor (0)" },
        { fileName: "645968.data", name: "Twilight Arbor (1)" },
        { fileName: "293606.data", name: "Crucible of Eternity" },
        { fileName: "473930.data", name: "The Ruined City of Arah" },
        { fileName: "473765.data", name: "Arah - Story" },
        { fileName: "580061.data", name: "Molten Facility" },
        { fileName: "595722.data", name: "Aetherblade Retreat" }
      ]
    },
    {
      name: "15. Fractals",
      maps: [
        { fileName: "519839.data", name: "Fractals of the Mists" },
        { fileName: "697450.data", name: "Thaumanova Reactor" },
        { fileName: "1426653.data", name: "Cliffside Fractal" },
        { fileName: "1472361.data", name: "Chaos Isle Fractal" },
        { fileName: "1472382.data", name: "Snowblind Fractal" },
        { fileName: "1472406.data", name: "Swampland Fractal" },
        { fileName: "1498016.data", name: "Mistlock Observatory" },
        { fileName: "1498798.data", name: "Aetherblade/Mai Trin Fractal" },
        { fileName: "1605344.data", name: "Nightmare Fractal" },
        { fileName: "1733857.data", name: "Shattered Observatory Fractal" },
        { fileName: "1733961.data", name: "Mistlock Sanctuary" },
        { fileName: "1905739.data", name: "Molten Boss Fractal" },
        { fileName: "1905889.data", name: "Twilight Oasis Fractal" },
        { fileName: "2005713.data", name: "Deepstone Fractal" },
        { fileName: "2094098.data", name: "Siren's Reef Fractal" }
      ]
    },
    {
      name: "16. Raid",
      maps: [
        { fileName: "1151420.data", name: "(W1) Spirit Vale" },
        { fileName: "1383309.data", name: "(W2) Salvation Pass" },
        { fileName: "1427048.data", name: "Special Forces Training Area" },
        { fileName: "1454070.data", name: "(W3) Stronghold of the Faithful" },
        { fileName: "1645215.data", name: "(W4) Bastion of the Penitent" },
        { fileName: "1906329.data", name: "(W5) Hall of Chains" },
        { fileName: "2045250.data", name: "(W6) Mythwright Gambit" }
      ]
    },
    {
      name: "17. Structured PvP",
      maps: [
        { fileName: "871093.data", name: "Original Stronghold" },
        { fileName: "870987.data", name: "Battle of Champion's Dusk (0)" },
        { fileName: "1666233.data", name: "Battle of Champion's Dusk (1)" },
        { fileName: "132570.data", name: "Heart of the Mists (0)" },
        { fileName: "197249.data", name: "Heart of the Mists (1)" },
        { fileName: "1734729.data", name: "Heart of the Mists (2)" },
        { fileName: "2129692.data", name: "Heart of the Mists (4)" },
        { fileName: "1712986.data", name: "Hall of the Mists" },
        { fileName: "132710.data", name: "The Battle of Khylo (0)" },
        { fileName: "197402.data", name: "The Battle of Khylo (1)" },
        { fileName: "132837.data", name: "Forest of Niflhel (0)" },
        { fileName: "197545.data", name: "Forest of Niflhel (1)" },
        { fileName: "376916.data", name: "Legacy of the Foefire" },
        { fileName: "467374.data", name: "Raid on the Capricorn" },
        { fileName: "520609.data", name: "Temple of the Silent Storm" },
        { fileName: "579383.data", name: "Skyhammer (0)" },
        { fileName: "677968.data", name: "Skyhammer (1)" },
        { fileName: "1934470.data", name: "Skyhammer (2)" },
        { fileName: "791564.data", name: "Courtyard (0)" },
        { fileName: "1713054.data", name: "Courtyard (1)" },
        { fileName: "556199.data", name: "Spirit Watch (0)" },
        { fileName: "1473061.data", name: "Spirit Watch (1)" },
        { fileName: "506539.data", name: "Reaper's Rumble" },
        { fileName: "529718.data", name: "Snowball Mayhem" },
        { fileName: "595582.data", name: "Dragon Ball Arena" },
        { fileName: "617120.data", name: "Aspect Arena" },
        { fileName: "1644624.data", name: "Revenge of the Capricorn" },
        { fileName: "1704155.data", name: "Eternal Coliseum" },
        { fileName: "2128880.data", name: "Eternal Coliseum (1)" },
        { fileName: "2128938.data", name: "Djinn's Dominion" }
      ]
    },
    {
      name: "18. World vs World",
      maps: [
        { fileName: "131235.data", name: "Eternal Battlegrounds (0)" },
        { fileName: "195806.data", name: "Eternal Battlegrounds (1)" },
        { fileName: "1885693.data", name: "Eternal Battlegrounds (2)" },
        { fileName: "1918037.data", name: "Eternal Battlegrounds (3)" },
        { fileName: "131574.data", name: "Alpine Borderlands (0)" },
        { fileName: "641501.data", name: "Alpine Borderlands (1)" },
        { fileName: "1799855.data", name: "Alpine Borderlands (2)" },
        { fileName: "1647236.data", name: "Desert Borderlands (0)" },
        { fileName: "1799442.data", name: "Desert Borderlands (1)" },
        { fileName: "2112733.data", name: "Desert Borderlands (3)" },
        { fileName: "736241.data", name: "Edge of the Mists" },
        { fileName: "2113077.data", name: "Armistice Bastion" }
      ]
    },
    {
      name: "19. Guild Halls",
      maps: [
        { fileName: "1255378.data", name: "Gilded Hollow" },
        { fileName: "1256064.data", name: "Lost Precipice" },
        { fileName: "1843274.data", name: "Windswept Haven" }
      ]
    },
    {
      name: "20. Miscellaneous",
      maps: [{ fileName: "2124612.data", name: "Mists Rift" }]
    },
    {
      name: "21. Concept and not released",
      maps: [
        { fileName: "122695.data", name: "Empty Plane" },
        { fileName: "184799.data", name: "Empty Plane v1" },
        { fileName: "197562.data", name: "Empty Plane v2" },
        { fileName: "875614.data", name: "Unknown Mists Platforms" },
        { fileName: "132853.data", name: "Empty Box" },
        { fileName: "1255516.data", name: "Guild Coliseum" },
        { fileName: "1498193.data", name: "Concept sPVP Map 1" },
        { fileName: "1513556.data", name: "Concept sPVP Map 2" },
        { fileName: "1513607.data", name: "Concept sPVP Map 3" },
        { fileName: "1513620.data", name: "Concept sPVP Map 4" },
        { fileName: "1513675.data", name: "Concept sPVP Map 5" },
        { fileName: "1712945.data", name: "Concept sPVP Map 6" }
      ]
    }
  ]
};

},{}],4:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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
 * Provides the static Tyria 3D Library Class.
 * @module T3D
 */

/* INCLUDES */
LocalReader = _dereq_('./LocalReader/LocalReader.js');

/**
 * Tyria 3D Library main class.
 * 
 * Use this static class to access file parsers- and data renderer classes.
 * 
 * This class also works as a factory for creating
 * LocalReader instances that looks up and inflates files from the Guild Wars 2 .dat.
 *
 * @main T3D
 * @class T3D
 * @static 
 */
module.exports = T3D;
function T3D() {}

/* PRIVATE VARS */
var _version = "1.0.4";
var _settings = {
	inflaterURL : "modules/nacl/t3dgwtools.nmf",
	t3dworkerURL: "modules/t3dtools/t3dworker.js"
};

/* PUBLIC PROPERTIES */

/**
 * The current library version. Used to make sure local storage caches are not
 * shared between different releases.
 *
 * @final
 * @property version
 * @type String
 */
T3D.version = _version;


/* FILES */

/**
 * A static reference to the GW2File class, the preferred way of
 * accessing this class.
 *
 * @final
 * @property GW2File
 * @type Class
 */
T3D.GW2File =				_dereq_("./format/file/GW2File");

/**
 * A static reference to the GW2Chunk class, the preferred way of
 * accessing this class.
 *
 * @final
 * @property GW2Chunk
 * @type Class
 */
T3D.GW2Chunk = 				_dereq_("./format/file/GW2Chunk");


/* RENDERERS */

/**
 * A static reference to the DataRenderer class, the preferred way of
 * accessing this class.
 * 
 * @final
 * @property DataRenderer
 * @type Class
 */
T3D.DataRenderer = 			_dereq_("./dataRenderer/DataRenderer");

/**
 * A static reference to the EnvironmentRenderer class, the preferred way of
 * accessing this class.
 *
 * @final
 * @property EnvironmentRenderer
 * @type Class
 */
T3D.EnvironmentRenderer = 	_dereq_("./dataRenderer/EnvironmentRenderer");

/**
 * A static reference to the HavokRenderer class, the preferred way of
 * accessing this class.
 * 
 * @final
 * @property HavokRenderer
 * @type Class
 */
T3D.HavokRenderer = 		_dereq_("./dataRenderer/HavokRenderer");

/**
 * A static reference to the PropertiesRenderer class, the preferred way of
 * accessing this class.
 *
 * @final
 * @property PropertiesRenderer
 * @type Class
 */
T3D.PropertiesRenderer = 	_dereq_("./dataRenderer/PropertiesRenderer");

/**
 * A static reference to the ModelRenderer class, the preferred way of
 * accessing this class.
 *
 * @final
 * @property ModelRenderer
 * @type Class
 */
T3D.ModelRenderer = 		_dereq_("./dataRenderer/ModelRenderer");

/**
 * A static reference to the TerrainRenderer class, the preferred way of
 * accessing this class.
 *
 * @final
 * @property TerrainRenderer
 * @type Class
 */
T3D.TerrainRenderer = 		_dereq_("./dataRenderer/TerrainRenderer");

/**
 * A static reference to the ZoneRenderer class, the preferred way of
 * accessing this class.
 *
 * @final
 * @property ZoneRenderer
 * @type Class
 */
T3D.ZoneRenderer = 			_dereq_("./dataRenderer/ZoneRenderer");

/**
 * A static reference to the StringRenderer class, the preferred way of
 * accessing this class.
 *
 * @final
 * @property StringRenderer
 * @type Class
 */
T3D.StringRenderer = 		_dereq_("./dataRenderer/StringRenderer");




/* LOGGING */

/**
 * A static reference to the static Logger class, the preferred way of
 * accessing this class. A simple way of providing your own logging methods
 * is to simply overwrite any or all of the logging methods specified in 
 * {{#crossLink "Logger/logFunctions:property"}}{{/crossLink}}
 *
 * @property Logger
 * @type Class
 */
T3D.Logger = _dereq_("./Logger");


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
 * 	{ 
 *  	maps : [
 *	  		{
 *     			name:"World Area Name",
 *	       		maps:[
 *	         		{ fileName :"[numeric fileId].data", name:"Map Name One" },
 *	           		{ fileName :"[numeric fileId].data", name:"Map Name Two" },		
 *	             	{ fileName :"[numeric fileId].data", name:"Map Name Three" }
 *	              ]
 *           },
 *	         {
 *			    name:"Another World Area Name",
 *		 	   	maps:[
 *		 		   	{ fileName :"[numeric fileId].data", name:"Map Name 408" }
 *			    ]
 *		     }
 * 		]
 *   }
 *
 * @final
 * @property MapFileList
 * @type Object
 */
T3D.MapFileList = 	_dereq_("./MapFileList");

/* UTILS */

/**
 * A static reference to the MaterialUtils class.
 *
 * @final
 * @property MaterialUtils
 * @type Class
 */
T3D.MaterialUtils = _dereq_('./util/MaterialUtils.js');

/**
 * A static reference to the MathUtils class.
 *
 * @final
 * @property MathUtils
 * @type Class
 */
T3D.MathUtils = _dereq_('./util/MathUtils.js');

/**
 * A static reference to the ParserUtils class.
 *
 * @final
 * @property ParserUtils
 * @type Class
 */
T3D.ParserUtils = _dereq_('./util/ParserUtils.js');


/**
 * A static reference to the RenderUtils class.
 *
 * @final
 * @property RenderUtils
 * @type Class
 */
T3D.RenderUtils = _dereq_('./util/RenderUtils.js');


/* PRIVATE METHODS */

/**
 * Performs checks for required browser capabilities and required third party libraries.
 * Loggs any warnings or error messages.
 * 
 * @private
 * @method  checkRequirements
 * @return {Number} The ammount of errors and warnings generated.
 */
function checkRequirements(){
	var numErrors = 0;
	// var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	// if(!is_chrome){
	// 	T3D.Logger.log(
	// 		T3D.Logger.TYPE_ERROR,
	// 		"T3D inflation requires Google Chrome."
	// 	);
	// 	numErrors++;
	// }

	if(typeof DataStream === "undefined"){
		T3D.Logger.log(
			T3D.Logger.TYPE_ERROR,
			"T3D core functionality requires DataStream library."
		);
		numErrors++;
	}

	if(typeof THREE === "undefined"){
		T3D.Logger.log(
			T3D.Logger.TYPE_WARNING,
			"T3D mesh generation requires three.js library."
		);
		numErrors++;
	}

	if(numErrors<1){
		T3D.Logger.log(
			T3D.Logger.TYPE_MESSAGE,
			"Tyria 3D API v"+T3D.version+" initialized."
		);
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
 * @method findDuplicateChunkDefs
 * @return {Object} An object mapping duplicate chunk definition names.
 * to the number of apperances.
 */
function findDuplicateChunkDefs(){
	var dups = {};
	T3D.formats.forEach(
		function(f1){

			T3D.formats.forEach(
				function(f2){
					if(f2.name == f1.name && f2 !== f1){
						if(dups[f1.name]){
							dups[f1.name]++;
						}
						else{
							dups[f1.name]=1;
						}
					}
				}
			);
		}
	);
	return dups
}


/* PUBLIC METHODS */


/**
 * Creates a new instance of LocalReader with an pNaCl inflater connected to it.
 * 
 * @method getLocalReader
 * @async
 * @param  {File}   	file		Core JS File instance, must refer to a GW2 .dat file
 * @param  {Function}	callback	Callback function, fired when the file index is fully
 *                             		constructed. Takes no arguments.
 *                             		
 * @param  {String} 	inflaterURL URL to the inflater .mft file. If omitted
 *                               	_settings.inflaterURL will be used instead.
 * @param  {Class}		logger		
 * @param  {String}		t3dworkerURL	URL to the t3dtools web worker
 * 
 * @return {LocalReader}			The contructed LocalReader, note that this object
 *                             		will not be fully initialized until the callback
 *                             		is fired.
 */
T3D.getLocalReader = function(file, callback, inflaterURL, logger, t3dworkerURL){

	/// Create Inflater for this file reader.
	/// We use a wrapper to catch the events.
	/// We use the embed tag itself for posing messages.

	//Check if the nacl API is not available
	if(navigator.mimeTypes['application/x-nacl'] === undefined) {
		var worker = new Worker(t3dworkerURL ? t3dworkerURL : _settings.t3dworkerURL);

		var lrInstance = new LocalReader(file, _version, logger);
		lrInstance.connectInflater(worker, worker);
	} 
	else {
		var pNaClWrapper = document.createElement("div"); 
		pNaClWrapper.setAttribute("id", "pNaClListener");
		
		var pNaClEmbed = document.createElement("embed");
		pNaClEmbed.setAttribute("type", "application/x-pnacl");
	
		pNaClEmbed.style.position ="absolute";
		pNaClEmbed.style.height = 0;
		pNaClEmbed.style.width = 0;
		pNaClEmbed.setAttribute("src", inflaterURL ? inflaterURL : _settings.inflaterURL);
	
		/// Add the objects to the DOM
		pNaClWrapper.appendChild(pNaClEmbed);
		document.body.appendChild(pNaClWrapper);
		
		/// Connect the provided file reference to a new LocalReader.
		var lrInstance = new LocalReader(file, _version, logger);

		/// Give the LocalReader access to the inflater.
		lrInstance.connectInflater(pNaClEmbed, pNaClWrapper);

	}
	/// Parse the DAT file MFT header. This must be done oncein order to access
	/// any files in the DAT.
	lrInstance.parseHeaderAsync(callback);

	/// Return file reader object
	return lrInstance;	
}

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
 * @method  getFileListAsync
 * @async
 * @param  {LocalReader}	localReader A fully initialized LocalReader instance
 * @param  {Function}		callback    Fires when the index has been loaded
 *                                 		from the localstorage or after it has
 *                                 		been built and stored in localstorage.
 *                                 		Takes the generated object list of
 *                                 		files as an argument. This list groups
 *                                 		arrays of MFT indices per file type,
 *                                 		for exmample:
 *
 * 
 * 	{
 *	  	"Unknown"	: [444, 555, 333],
 *	  	"MODL"		: [444, 555, 333],
 * 	  	"String"	: [666, 777, 888]
 * 	}
 * 
 * For more details see
 * {{#crossLink "LocalReader/listFiles:method"}}{{/crossLink}}
 */
T3D.getFileListAsync = function(localReader, callback){

	/// Check local storage for an existing file list
	var fileList = localReader.loadFileList();

	/// If there is no cached list, look for pre-defined maps.
	if(!fileList){
		localReader.readFileListAsync(callback);
	}

	/// Otherwise, just fire the callback with the cached list
	else{
		callback(fileList);
	}
	
}

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
 * @method getMapListAsync
 * @async
 * @param {LocalReader}	localReader	A fully initialized LocalReader instance
 * @param {Function}	callback	Fires when the index has been loaded
 *                                 	from the localstorage or after it has
 *                                 	been built and stored in localstorage.
 *                                 	Takes the generated object list of
 *                                 	files as an argument. This list groups
 *                                 	arrays of MFT indices per file type,
 *                                 	for exmample:
 * 
 * 		{	
 * 			maps:[
 * 				{
 * 					name: 'Heart of Maguuma',
 * 					maps: [
 * 						{fileName:1151420, name:'HoT BWE3 Raid'},
 * 						{fileName:969663, name:'Verdant Brink}
 * 					]
 * 				},
 * 				{
 * 					name: 'Unknown maps',
 * 					maps: [
 * 						{fileName:12345678, name:'Unknown map 12345678'}
 * 					]
 * 				}
 * 			]
 
 *	    };
 * @param {boolean} searchAll if true forces re-indexing of entire dat.
 */
T3D.getMapListAsync = function(localReader, callback, searchAll){

	/// If seachAll flag is true, force a deep search
	if(searchAll){
		localReader.readMapListAsync(true, callback);
		return;
	}

	/// Check local storage for an existing map list
	var mapList = localReader.loadMapList();

	/// If there is no cached list, look for pre-defined maps.
	if(!mapList){
		localReader.readMapListAsync(false, callback);
	}

	/// Otherwise, just fire the callback with the cached list
	else{
		callback(mapList);
	}
	
}

/**
 * Utility method used for rendering map files. Loads a map file and applies
 * the provided renderers to it.
 * 
 * @method renderMapContentsAsync
 * @async
 * @param  {LocalReader}	localReader A fully initialized LocalReader instance
 * @param  {Number}   		fileName	The File Id of a mapc file.
 * @param  {Array}   		renderers	An array of renderer classes. Each
 *                               		class should extend 
 *                               		{{#crossLink "DataRenderer"}}{{/crossLink}}
 * @param  {Function}		callback    Callback function, takes the shared
 *                                 		renderer context as an argument.
 * @param  {Class}			logger      A logger class of the same type as
 *                               		{{#crossLink "Logger"}}{{/crossLink}}
 */
T3D.renderMapContentsAsync = function(localReader, fileName, renderers, callback, logger){

	/// VO for storing result from renderers
    var context = {};

	/// Make sure we got an actuall ID number		
	if(parseInt(fileName)){

		/// File name is baseId, load using local reader.
		localReader.loadFile(
			fileName,
			function(arrayBuffer){

				/// Set up datastream
				var ds = new DataStream(arrayBuffer, 0, DataStream.LITTLE_ENDIAN);

				/// Initiate Map file object. Connect callback
				var mapFile = new T3D.GW2File(ds, 0);

				/// Populate VO by running the renderers
			    var runAllRenderers = function(i){
					
					/// Run each renderer
					if(i < renderers.length ){
						T3D.runRenderer(
							renderers[i].renderClass,
							localReader,
							Object.assign(renderers[i].settings,{mapFile:mapFile}),
							context,
							runAllRenderers.bind(this,i+1)
						);
					}

					/// Fire callback with VO when done
					else{
						callback(context);
					}
				};

				/// Starting point for running each renderer
				runAllRenderers(0);
			}
		);
	}

	/// Primitive error message...
	else{
		var outputLogger = logger ? logger : T3D.Logger;
		outputLogger.log(
			T3D.Logger.TYPE_ERROR,
			"Map id must be an integer!, was:",fileName
		);
	}	
}

/**
 * Utility method for applying a single renderer to a LocalReader insatnce.
 * 
 * @method runRenderer
 * @async
 * 
 * @param  {Class}		renderClass	A class extending 
 *                                	{{#crossLink "DataRenderer"}}{{/crossLink}}
 * @param  {LocalReader}localReader A fully initialized LocalReader instance
 * @param  {Object}		settings    Settings passed to the renderer. Often
 *                               	specifies thinks like what file ID should
 *                               	be loaded.
 * @param  {Object}		context     The shared renderer context value object.
 * @param  {Function} 	cb          Callback method passed to the renderAsync
 *                                 	method of the renderer.
 */
T3D.runRenderer = function(renderClass, localReader , settings, context, cb){
	var r = new renderClass(
		localReader,
		settings,
		context
	);

	r.renderAsync(cb);
}


/**
 * @method getContextValue
 * @param  {Object} context      	A shared renderer context value object.
 * @param  {Class} 	clazz        	A class extending
 *                                	{{#crossLink "DataRenderer"}}{{/crossLink}}.
 *                                	Specifies for renderer class you want to read 
 *                                	output.
 * @param  {String} propName     	The name of the property written by the
 *                                	renderer that should retrtieved.
 * @param  {any} 	defaultValue 	This value is passed back if no data could
 *                              	be found.
 * @return {any}    				The specified value from the conext if any,
 *                          		otherwise defaultValue.
 */
T3D.getContextValue = function(context, clazz , propName, defaultValue){
	var output = context[clazz.name];
	if(output){
		return output[propName] ? output[propName] : defaultValue;
	}
	return defaultValue;
}

/**
 * Check if the client web browser can render WebGL 3D content.
 * 
 * @private
 * @method hasWebGL
 * @param  {boolean} return_context flag making this method return the canvas object instead of true
 * @return {boolean} true if the client is WebGL enabled, false otherwise
 */
T3D.hasWebGL = function(return_context)
{
    if (!!window.WebGLRenderingContext) {
        var canvas = document.createElement("canvas"),
             names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
           context = false;
 
        for(var i=0;i<4;i++) {
            try {
                context = canvas.getContext(names[i]);
                if (context && typeof context.getParameter == "function") {
                    // WebGL is enabled
                    if (return_context) {
                        // return WebGL object if the function's argument is present
                        return {name:names[i], gl:context};
                    }
                    // else, return just true
                    return true;
                }
            } catch(e) {}
        }
 
        // WebGL is supported, but disabled
        return false;
    }
 
    // WebGL not supported
    return false;
}


/// Library checks requirements on startup
checkRequirements();
},{"./LocalReader/LocalReader.js":1,"./Logger":2,"./MapFileList":3,"./dataRenderer/DataRenderer":5,"./dataRenderer/EnvironmentRenderer":6,"./dataRenderer/HavokRenderer":7,"./dataRenderer/ModelRenderer":8,"./dataRenderer/PropertiesRenderer":9,"./dataRenderer/StringRenderer":10,"./dataRenderer/TerrainRenderer":11,"./dataRenderer/ZoneRenderer":12,"./format/file/GW2Chunk":15,"./format/file/GW2File":16,"./util/MaterialUtils.js":17,"./util/MathUtils.js":18,"./util/ParserUtils.js":19,"./util/RenderUtils.js":20}],5:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

var GW2File = _dereq_('../format/file/GW2File');

/**
 * Base class for data interpretors a.k.a. 'Renderers'
 *
 * Renderers are classes that collect and interpret data from the dat file.
 * 
 * A {{#crossLink "LocalReader"}}{{/crossLink}} instance is used for accessing data from the dat.
 * 
 * A {{#crossLink "Logger"}}{{/crossLink}} is used for posting progress output or error messages.
 *
 * Most Renderers use one or more
 * {{#crossLink "GW2Chunk"}}GW2Chunks{{/crossLink}}, typed data structures that can be read from
 * {{#crossLink "GW2File"}}GW2Files{{/crossLink}}.
 *
 * The generated data, be it strings, numbers or meshes are put into a value object structure called
 * the 'context'. The context can store data generated by multiple renderers and makes sure each
 * renderer type, or class has it's own value object within the context. This enables one renderer
 * to read data written by another renderer wihtout having to worry about overwriting existing data
 * within the context. Keep in mind that you will have to manually pass and clean the conext object!
 *
 * A clean context object should just be the empty javasript object : {}.
 *
 * When a Renderer is done it will fire the callback and any view interrested in retrieving the generated
 * data from the context can read it using
 * {{#crossLink "T3D/getContextValue:method"}}{{/crossLink}}.
 * 
 * 
 * 
 * 
 * @class DataRenderer
 * @constructor
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
var DataRenderer = module.exports = function(localReader, settings, context, logger) {

	/// Just storing parameters
	this.localReader = localReader;
	this.settings = settings;
	if(!settings){
		settings = {};
	}
	this.context = context;
	this.context[this.constructor.name] = {};

	if(logger)
		this.logger = logger;
	else
		this.logger = T3D.Logger;	
}

/**
 * Gets the output value object for a specified class within the context.
 * @method  getOutput
 * @param  {Class} otherClass The class to fetch the output value object for.
 * If not specified the class of this instance will be used.
 * @return {Object}            The output value object for this class within the context.
 */
DataRenderer.prototype.getOutput = function(otherClass){
	return this.context[otherClass ? otherClass.name : this.constructor.name];
}

/**
 * Basic rendering of unknown files. Output fileds generated:
 *
 * - *fileId* The fileId passed in the settings parameter when constructing this instance.
 * 
 * - *rawData* An ArrayBuffer containg the infalted binary data of the loaded file.
 * 
 * - *rawString* A string representation of the rawData
 * 
 * - *image* A value object witht he fields 'width', 'height' and 'data' describing a RGBA bitmap
 * image. Only set if the loaded file was a texture.
 * 
 * - *file* A GW2File representation of the loaded file. Only set if the loaded file was a Pack File.
 * 
 * @method  renderAsync
 * @async
 * @param  {Function} callback Fires when renderer is finished, does not take arguments.
 */
DataRenderer.prototype.renderAsync = function(callback){
	var self = this;
	
	this.localReader.loadFile(this.settings.id, function(inflatedData){

		/// Set fileId so callers can identify this VO		
		self.getOutput().fileId = self.settings.id;

		/// Share inflated data
		self.getOutput().rawData = inflatedData;

		/// Construct raw string
		var uarr = new Uint8Array(inflatedData);
		var rawStrings = [], chunksize = 0xffff;
		var len = Math.min(uarr.length,10000);

		// There is a maximum stack size. We cannot call String.fromCharCode with as many arguments as we want
		for (var i = 0; i * chunksize < len; i++){
			rawStrings.push(String.fromCharCode.apply(null, uarr.subarray(i * chunksize, (i + 1) * chunksize)));
		}

		if(len<uarr.length){
			rawStrings.push("T3D Ignored the last "+(uarr.length-len)+" bytes when generating this raw output");
		}

		self.getOutput().rawString = rawStrings.join();



		/// Check if this is an PF or ATEX file
		// Binareis are MZ
		var ds = new DataStream(inflatedData);
		var first4 = ds.readCString(4);

		/// Do special stuff for different fcc signatures
		/// 
		/// fourcc != fcc::ATEX && fourcc != fcc::ATEC && fourcc != fcc::ATEP &&
        /// fourcc != fcc::ATET && fourcc != fcc::ATEU && fourcc != fcc::ATTX)
		/// 
		if( first4 == "ATEX" || first4 == "ATEC" ||
			first4 == "ATEP" || first4 == "ATET" || 
			first4 == "ATEU" || first4 == "ATTX" ){

			/// TODO: MOVE TO GW2 texture file!!
			/// Load file using LocalReader.
			self.localReader.loadTextureFile(self.settings.id,
				function(inflatedData, dxtType, imageWidth, imageHeigth){
					
					/// Create image using returned data.
					var image = {
						data   : new Uint8Array(inflatedData),
						width  : imageWidth,
						height : imageHeigth
					};

					self.getOutput().image = image;
					callback();
				}
			);

		}
		else if(first4.indexOf("PF") == 0){
			self.getOutput().file = new GW2File(ds,0);
			callback();
		}
		else{
			self.getOutput().file = null;
			callback();
		}

	});	
}
},{"../format/file/GW2File":16}],6:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

var Utils = _dereq_("../util/RenderUtils");
var DataRenderer = _dereq_('./DataRenderer');

/**
 *
 * A renderer that generates some of the environment objects of a map.
 * 
 * @class EnvironmentRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a GW2File.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
function EnvironmentRenderer(localReader, settings, context, logger){
	DataRenderer.call(this, localReader, settings, context, logger);

	this.mapFile = this.settings.mapFile;

	this.getMat = function(tex){
		return new THREE.MeshBasicMaterial({
			map: tex,
			side: THREE.BackSide,
			fog: false,
			depthWrite: false
		});
	};

	this.loadTextureWithFallback = function(targetMatIndices, materialArray, filename, fallbackFilename, hazeColorAsInt){
		var self = this;
		
		function writeMat(mat){
			targetMatIndices.forEach(function(i){
				materialArray[i] = mat; 
			});
		}

		function loadFallback(){
			var mat = self.getMat(
				THREE.ImageUtils.loadTexture(fallbackFilename)
			);

			writeMat(mat);
		}

		function errorCallback(){
			setTimeout(loadFallback, 1);
		}

		var mat = self.getMat(
			Utils.loadLocalTexture(
				localReader,
				filename,
				null, hazeColorAsInt,
				errorCallback )
		);

		writeMat(mat);			
	}

	this.getHazeColor = function(environmentChunkData){
		var hazes = environmentChunkData && environmentChunkData.dataGlobal.haze;

		if(!hazes || hazes.length<=0){
			return [190, 160, 60];
		}
		else{
			return hazes[0].farColor;
		}
	};

	this.parseLights = function(environmentChunkData){
		var self = this;

		/// Set up output array
		self.getOutput().lights = [];

		var lights = environmentChunkData ? environmentChunkData.dataGlobal.lighting : [{
			lights:[],
			backlightIntensity:1.0,
			backlightColor:[255,255,255]
		}];

		var ambientLight;

		//var light = lights[0];
		//
		var hasLight = false;
		lights.forEach(function(light, idx){

			if(hasLight)
				return;

			/// Directional lights
			var sumDirLightIntensity = 0;

			
			light.lights.forEach(function(dirLightData,idx){

				hasLight = true;
				
				var color = new THREE.Color(
					dirLightData.color[2]/255.0,
					dirLightData.color[1]/255.0,
					dirLightData.color[0]/255.0
				);

				var directionalLight = new THREE.DirectionalLight( color.getHex(), dirLightData.intensity );
				
				directionalLight.position.set(
					-dirLightData.direction[0],
					dirLightData.direction[2],
					dirLightData.direction[1]
				).normalize();
				
				sumDirLightIntensity += dirLightData.intensity;

				self.getOutput().lights.push(directionalLight);

			});// END for each directional light in light


			/// Add some random directional lighting if there was no, in order to se SOME depth on models
			if(!light.lights || light.lights.length==0){		

				var directions = [
					[0,1,0,.3],					
					[1,2,1,.3],
					[-1,-2,-1,.3]
				];

				directions.forEach(function(lightDir){

					var color = new THREE.Color(1,1,1);
					var intensity = lightDir[3];
					var directionalLight = new THREE.DirectionalLight( color.getHex(), intensity );
					
					directionalLight.position.set(lightDir[0],lightDir[1],lightDir[2]).normalize();
					
					sumDirLightIntensity += intensity;

					self.getOutput().lights.push(directionalLight);

				});
				
			}


			/// Ambient light
			//light.backlightIntensity /= sumDirLightIntensity +light.backlightIntensity; 
			light.backlightIntensity =  light.backlightIntensity; 
			var color = new THREE.Color(
				light.backlightIntensity * (255.0-light.backlightColor[2])/255.0,
				light.backlightIntensity * (255.0-light.backlightColor[1])/255.0,
				light.backlightIntensity * (255.0-light.backlightColor[0])/255.0
			);

			ambientLight = new THREE.AmbientLight(color);

		})// END for each light in lighting

		var ambientTotal = 0;
		if(ambientLight){
			ambientTotal = ambientLight.color.r + ambientLight.color.g + ambientLight.color.b;
			this.getOutput().lights.push(ambientLight);
		}

		/// Parsing done, set hasLight flag and return
		this.getOutput().hasLight = hasLight || ambientTotal>0;		
	};

	this.parseSkybox = function(environmentChunkData, parameterChunkData, hazeColorAsInt){

		/// set up output array
		this.getOutput().skyElements = [];
		
		/// Grab sky texture.
		/// index 0 and 1 day
		/// index 2 and 3 evening
		var skyModeTex = this.environmentChunkData && this.environmentChunkData.dataGlobal.skyModeTex[0];

		/// Fallback skyboxfrom dat.
		if(!skyModeTex){
			skyModeTex = {
				texPathNE:1930687,
				texPathSW:193069,
				texPathT:193071
			}
		}

		/// Calculate bounds
		var bounds = parameterChunkData.rect;
		var mapW = Math.abs( bounds.x1 -bounds.x2 );
		var mapD = Math.abs( bounds.y1 -bounds.y2 );
		var boundSide = Math.max( mapW, mapD );

		var materialArray = [];

		/// Load skybox textures, fallback to hosted png files.
		this.loadTextureWithFallback([1,4], materialArray, skyModeTex.texPathNE + 1, "img/193068.png", hazeColorAsInt);
		this.loadTextureWithFallback([0,5], materialArray, skyModeTex.texPathSW + 1, "img/193070.png", hazeColorAsInt);
		this.loadTextureWithFallback([2], materialArray, skyModeTex.texPathT + 1, "img/193072.png", hazeColorAsInt);
		materialArray[3] = new THREE.MeshBasicMaterial({visible:false});


		/// Create skybox geometry
		var boxSize = 1024;		
		var skyGeometry = new THREE.BoxGeometry( boxSize, boxSize/2 , boxSize ); //Width Height Depth

		/// Ugly way of fixing UV maps for the skybox (I think)
		skyGeometry.faceVertexUvs[0].forEach(function(vecs, idx){

			var face = Math.floor(idx/2);

			// PX NX
			// PY NY
			// PZ NZ

			/// PX - WEST 	NX - EAST
			if(face == 0 || face == 1){
				vecs.forEach(function(vec2){
					vec2.x = 1 - vec2.x;	
					vec2.y /= 2.0;	
					vec2.y += .5;	
				});
			}

			/// NZ - SOUTH 	PZ - NORTH
			else if(face == 5 || face == 4){
				vecs.forEach(function(vec2){
					vec2.y /= -2.0;	
					vec2.y += .5;	
				});
			}

			else{
				vecs.forEach(function(vec2){
					vec2.x = 1 - vec2.x;	
				});
			}

		});

		skyGeometry.uvsNeedUpdate = true;
		
		/// Generate final skybox
		var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
		var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );

		/// Put horizon in camera center
		skyBox.translateY(boxSize/4);
		//skyBox.translateY( -environmentChunk.data.dataGlobal.sky.verticalOffset );
		
		/// Write to output
		this.getOutput().skyElements.push(skyBox);
	};
}


/// DataRenderer inheritance:
EnvironmentRenderer.prototype = Object.create(DataRenderer.prototype);
EnvironmentRenderer.prototype.constructor = EnvironmentRenderer;

/**
 * Output fileds generated:
 *
 * - *hazeColor* Array of RGBA values describing the global haze color of the map.
 * - *lights* An array of THREE.DirectionalLight and  THREE.AmbientLight objects.
 * - *hasLight* Boolean is false if no directional lights were added to "lights".
 * - *skyElements* A textured THREE.Mesh skybox.
 * 
 * 
 * @method  renderAsync
 * @async
 * @param  {Function} callback Fires when renderer is finished, does not take arguments.
 */
EnvironmentRenderer.prototype.renderAsync = function(callback){

	var environmentChunkData = this.mapFile.getChunk("env").data;
	var parameterChunkData = this.mapFile.getChunk("parm").data;

	/// Set renderer clear color from environment haze
	var hazeColor = this.getHazeColor(environmentChunkData);
	var hazeColorAsInt =  hazeColor[2]*256*256+hazeColor[1]*256+hazeColor[0];
	this.getOutput().hazeColor = hazeColor;

	/// Add directional lights to output. Also write hasLight flag
	this.parseLights(environmentChunkData);

	/// Generate skybox
	this.parseSkybox(environmentChunkData, parameterChunkData, hazeColorAsInt);

	/// All parsing is synchronous, just fire callback
	callback();
};
	

module.exports = EnvironmentRenderer;
},{"../util/RenderUtils":20,"./DataRenderer":5}],7:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

var DataRenderer = _dereq_('./DataRenderer');

/**
 *
 * A renderer that generates meshes describing the collisions of a map.
 * 
 * @class HavokRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a GW2File. If "visible" is specified and true, the generated meshes will be textured
 * with a MeshNormalMaterial, otherwise they will not be visible.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
function HavokRenderer(localReader, settings, context, logger){
	DataRenderer.call(this, localReader, settings, context, logger);

	this.mapFile = this.settings.mapFile;

	this.lastP = -1;
	this.seed = 1;
	this.meshes = [];

	/**
	 * TODO
	 * @method renderModels
	 * @param  {Function} callback         [description]
	 * @async
	 */
	this.renderModels = function(models, title, callback){
		var mat;
		if(this.settings && this.settings.visible){
			mat = new THREE.MeshNormalMaterial( { side: THREE.DoubleSide } ); 
		}
		else{
			mat = new THREE.MeshBasicMaterial( { visible: false } );			
		}

		this.parseAllModels(models, mat, title, 200, 0, callback);
	}


	/**
	 * TODO
	 * @method  getCollisionsForAnimation
	 * @param  {[type]} animation  [description]
	 * @param  {[type]} collisions [description]
	 * @return {[type]}            [description]
	 */
	this.getCollisionsForAnimation = function(animation, collisions){
		var ret = [];
		
		for (var i = 0; i < animation.collisionIndices.length; i++) {
			var index = animation.collisionIndices[i];
			var collision = collisions[ index ];
			collision.index = index;
			ret.push( collision );
		}
		
		return ret;
	};

	/**
	 * TODO
	 * @method  parseAllModels description
	 * @param  {[type]} models       [description]
	 * @param  {[type]} mat       [description]
	 * @param  {[type]} title     [description]
	 * @param  {[type]} chunkSize [description]
	 * @param  {[type]} offset    [description]
	 * @return {[type]} callback          [description]
	 * @async
	 */
	this.parseAllModels = function(models, mat, title, chunkSize, offset, callback){
		var i = offset;		

		for(; i < offset+chunkSize && i < models.length; i++){
			
			var p = Math.round(i*100/ models.length );
			if( p != this.lastP){

				this.logger.log(
					T3D.Logger.TYPE_PROGRESS,
					"Loading Collision Models ("+title+")",
					p
				);
				this.lastP = p;
			}	
		
			/// Get animation object
			var animation =  this.animationFromGeomIndex(
				models[i].geometryIndex,
				this.geometries,
				this.animations
			);
			
			var collisions = this.getCollisionsForAnimation( animation, this.havokChunkData.collisions);
			
			for(var j=0; j< collisions.length; j++){
				var collision = collisions[j];			
		 		this.renderMesh( collision, models[i], mat );
			}
		}

		if(i<models.length){
			window.setTimeout(
				this.parseAllModels.bind(this, models, mat, title, chunkSize, offset+chunkSize, callback),
				10 /*time in ms to next call*/
			);
		}
		else{
			callback();
		}
	}

	/**
	 * TODO
	 * @method  animationFromGeomIndex
	 * @param  {[type]} propGeomIndex [description]
	 * @param  {[type]} geometries    [description]
	 * @param  {[type]} animations    [description]
	 * @return {[type]}               [description]
	 */
	this.animationFromGeomIndex = function(propGeomIndex, geometries, animations){
		
		// geometries is just list of all geometries.animations[end] for now
		var l = geometries[propGeomIndex].animations.length;
		
		return animations[ geometries[propGeomIndex].animations[l-1] ];
		//return animations[ geometries[propGeomIndex].animations[0] ];
	};

	/**
	 * TODO
	 * @method renderMesh
	 * @param  {[type]} collision [description]
	 * @param  {[type]} model     [description]
	 * @param  {[type]} mat       [description]
	 * @return {[type]}           [description]
	 */
	this.renderMesh = function( collision, model, mat ){
	    
	    var pos = model.translate;
	    var rot = model.rotate;
	    var scale = 32 * model.scale;    
	    
	    /// Generate mesh
	    var mesh = this.parseHavokMesh(collision, mat);
	    
	    /// Position mesh
	    /// "x","float32","z","float32","y","float32"
	    mesh.position.set(pos[0], -pos[2], -pos[1]);    
	    
	    /// Scale mesh
	    if(scale)
	    	mesh.scale.set( scale, scale, scale );

	    /// Rotate mesh
	    if(rot){
	    	mesh.rotation.order = "ZXY";

	    	// ["x","float32","z","float32","y","float32"], 
	    	mesh.rotation.set(rot[0], -rot[2], -rot[1]);
	    }
	    	
		/// Add mesh to scene and collisions
		this.getOutput().meshes.push(mesh);
	};


	/**
	 * TODO
	 * @method  seedRandom
	 * @return {[type]} [description]
	 */
	this.seedRandom = function(){
	    var x = Math.sin(this.seed++) * 10000;
	    return x - Math.floor(x);
	};

	/**
	 * TODO
	 * @method  parseHavokMesh
	 * @param  {[type]} collision [description]
	 * @param  {[type]} mat       [description]
	 * @return {[type]}           [description]
	 */
	this.parseHavokMesh = function(collision, mat){
		
		var index = collision.index;

		if(!this.meshes[index]){

			var geom = new THREE.Geometry();
			
			/// Pass vertices	    		
			for(var i=0; i<collision.vertices.length; i++){
				var v=collision.vertices[i];
				//"x","float32","z","float32","y","float32"]
				geom.vertices.push( new THREE.Vector3(v[0] , v[2] , -v[1] ) );
			}	    		
				
			/// Pass faces
			for(var i=0; i<collision.indices.length; i+=3){

				var f1=collision.indices[i];
				var f2=collision.indices[i+1];
				var f3=collision.indices[i+2];

				if( f1<=collision.vertices.length &&
					f2<=collision.vertices.length &&
					f3<=collision.vertices.length){
					geom.faces.push( new THREE.Face3( f1, f2, f3 ) );
				}
	   			else{
	   				this.logger.log(
	   					T3D.Logger.TYPE_ERROR,
	   					"Errorus index in havok model geometry."
   					);
	   			}
			}

			/// Prepare geometry and pass new mesh
			geom.computeFaceNormals();
			//geom.computeVertexNormals();
			
			this.meshes[index]= new THREE.Mesh( geom, mat ); 
			
			return this.meshes[index];
		}
		else{
			return this.meshes[index].clone();
		}
	};

};


/// DataRenderer inheritance:
HavokRenderer.prototype = Object.create(DataRenderer.prototype);
HavokRenderer.prototype.constructor = HavokRenderer;

/**
 * Output fileds generated:
 *
 * - *boundingBox* Array of values describing the bounding box of all collision.
 * - *meshes* An array of THREE.Mesh objects visualizing all collision in the map.
 * 
 * @method  renderAsync
 * @async
 * @param  {Function} callback Fires when renderer is finished, does not take arguments.
 */
HavokRenderer.prototype.renderAsync = function(callback){
	var self = this;

	// TODO:The design of this method pretty much requires one instance
	// of the class per parallel async render. Should probably fix this
	// at some point...
	
	/// Get required chunks
	this.havokChunkData = this.mapFile.getChunk("havk").data;

    /// Set static bounds to the bounds of the havk models
    this.getOutput().boundingBox = this.havokChunkData.boundsMax;
	
	/// Clear old meshes
	this.meshes = [];

	/// Set up output array
	this.getOutput().meshes = [];

	/// Grab model raw data from the chunk.
	/// Add missing scale value to obs models.
	var propModels = this.havokChunkData.propModels;
	var zoneModels = this.havokChunkData.zoneModels;
	var obsModels = this.havokChunkData.obsModels;
	obsModels.forEach(function(mdl){
		mdl.scale = 1;
	});

	/// Store geoms and animations from the file in hte instance so we don't
	/// have to pass them arround too much. (fix this later)
	this.geometries = this.havokChunkData.geometries;
	this.animations = this.havokChunkData.animations;		
	
	/// Render "prop", "zone" and "obs" models in that order.
	var renderPropModelsCB = function(){
		self.renderModels(zoneModels, "zone", renderZoneModelsCB);
	};
	var renderZoneModelsCB = function(){
		self.renderModels(obsModels, "obs", callback);
	};
	self.renderModels(propModels, "prop", renderPropModelsCB);

	
}

module.exports = HavokRenderer;
},{"./DataRenderer":5}],8:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

var Utils = _dereq_("../util/RenderUtils");
var DataRenderer = _dereq_('./DataRenderer');

/**
 *
 * A renderer that generates meshes for a single model file.
 * 
 * @class ModelRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "id" the base ID or file ID of the model to generate meshes for.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
function ModelRenderer(localReader, settings, context, logger){
	DataRenderer.call(this, localReader, settings, context, logger);
}


/// DataRenderer inheritance:
ModelRenderer.prototype = Object.create(DataRenderer.prototype);
ModelRenderer.prototype.constructor = ModelRenderer;


/**
 * Output fileds generated:
 *
 * - *meshes* An array of THREE.Mesh objects visualizing this model file.
 * 
 * @method  renderAsync
 * @async
 * @param  {Function} callback Fires when renderer is finished, does not take arguments.
 */
ModelRenderer.prototype.renderAsync = function(callback){
	var self = this;

	/// Get file id
	var fileId = this.settings.id;
	var showUnmaterialed = true;

	/// Load the model file
	var meshCache = {};
	var textureCache = {};

	/// Set up output array
	self.getOutput().meshes = [];

	Utils.getMeshesForFilename(fileId, 0x00ff00, self.localReader, meshCache, textureCache, showUnmaterialed,
		function(meshes, isCached, boundingSphere){
		
			if(meshes){
				meshes.forEach(function(mesh){
					mesh.boundingSphere = boundingSphere;
					self.getOutput().meshes.push(mesh);
				});
			}

			/// Fire callback after all meshes have been added.
			meshCache = {};
			callback();
		}
	);

}

module.exports = ModelRenderer;
},{"../util/RenderUtils":20,"./DataRenderer":5}],9:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

var Utils = _dereq_("../util/RenderUtils");
var DataRenderer = _dereq_('./DataRenderer');

/**
 *
 * A renderer that generates property models for a map.
 * 
 * @class PropertiesRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a GW2File.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
function PropertiesRenderer(localReader, settings, context, logger){
	DataRenderer.call(this, localReader, settings, context, logger);
	this.mapFile = this.settings.mapFile;
}

/// DataRenderer inheritance:
PropertiesRenderer.prototype = Object.create(DataRenderer.prototype);
PropertiesRenderer.prototype.constructor = PropertiesRenderer;

/**
 * Renders all property meshes in a GW2 map described by the map's PROP chunk.
 * Output fileds generated:
 *
 * - *meshes* An array of THREE.Mesh objects visualizing all property models refered by this map.
 * 
 * @method  renderAsync
 * @async
 * @param  {Function} callback Fires when renderer is finished, does not take arguments.
 */
PropertiesRenderer.prototype.renderAsync = function(callback){
	var self = this;

	self.getOutput().meshes = [];

	var propertiesChunkData =  this.mapFile.getChunk("prp2").data;

	if(!propertiesChunkData){
		renderCallback();
		return;
	}

	var props = propertiesChunkData.propArray;
	var animProps =propertiesChunkData.propAnimArray;
	var instanceProps = propertiesChunkData.propInstanceArray;
	var metaProps = propertiesChunkData.propMetaArray;

	/// Concat all prop types
	props = props
		.concat(animProps)
		.concat(instanceProps)
		.concat(metaProps);

	/// Create mesh cache
	self.meshCache = {};
	self.textureCache = {};

	// For now, we'll do all load in serial
	// TODO: load unique meshes and textures in parallell (asynch), then render!
	var lastPct = -1;

	var renderIndex = function(idx){

		if(idx>= props.length){

			/// Empty mesh cache
			self.meshCache = {};
			self.textureCache = {};
			callback();
			return;
		}

		var pct = Math.round(1000.0*idx / props.length);
		pct/=10.0;
		
		/// Log progress
		if(lastPct!=pct){
			var pctStr = pct +
				( pct.toString().indexOf(".")<0 ? ".0":"" );

			self.logger.log(
				T3D.Logger.TYPE_PROGRESS,
				"Loading 3D Models (Props)", pctStr
			);
			lastPct = pct;
		}

		/// Read prop at index.
		var prop = props[idx];								

	    /// Adds a single mesh to a group.
		var addMeshToLOD = function(mesh, groups, lod, prop, needsClone){

			/// Read lod distance before overwriting mesh variable
		    var lodDist = prop.lod2 != 0 ? prop.lod2 : mesh.lodOverride[1];

		    /// Read flags before overwriting mesh variable
	    	var flags = mesh.flags;

	    	/// Mesh flags are 0 1 4
	    	/// For now, use flag 0 as the default level of detail
	    	if(flags==0)
	    		lodDist=0;
	    	
	    	/// Create new empty mesh if needed
	    	if(needsClone){
	    		mesh = new THREE.Mesh( mesh.geometry, mesh.material );
	    	}

	    	mesh.updateMatrix();
			mesh.matrixAutoUpdate = false;

	    	// Find group for this LOD distance
	    	if(groups[lodDist]){
	    		groups[lodDist].add(mesh);
	    	}
	    	// Or create LOD group and add to a level of detail
	    	// WIP, needs some testing!
	    	else{
	    		var group = new THREE.Group();
	    		group.updateMatrix();
				group.matrixAutoUpdate = false;
	    		group.add(mesh);
	    		groups[lodDist] = group;
	    		lod.addLevel(group,lodDist);
	    	}

	    	return lodDist;
	    }

	    /// Adds array of meshes to the scene, also adds transform clones
		var addMeshesToScene = function(meshArray, needsClone, boundingSphere){
			
		    ///Add original 

		    /// Make LOD object and an array of groups for each LOD level
		    var groups = {};
		    var lod = new THREE.LOD();

		    /// Each mesh is added to a group corresponding to its LOD distane
		    var maxDist = 0;
		    meshArray.forEach(function(mesh){
		    	maxDist = Math.max( maxDist, addMeshToLOD(mesh,groups,lod,prop,needsClone) );
	    	});

	    	/// Add invisible level
	    	//lod.addLevel(new THREE.Group(),10000);

		    /// Set position, scale and rotation of the LOD object
			if(prop.rotation){
		    	lod.rotation.order = "ZXY";
		    	//["x","float32","z","float32","y","float32"],
		    	lod.rotation.set(prop.rotation[0], -prop.rotation[2], -prop.rotation[1]);
		    }
		    lod.scale.set( prop.scale, prop.scale, prop.scale );
		    lod.position.set(prop.position[0], -prop.position[2], -prop.position[1]);
		   	

		   	lod.boundingSphereRadius = ( boundingSphere && boundingSphere.radius ? boundingSphere.radius : 1.0) * prop.scale;

		    lod.updateMatrix();
		    lod.matrixAutoUpdate = false;

		    /// Show highest level always
		    //lod.update(lod);

	    	//Add LOD containing mesh instances to scene
	    	self.getOutput().meshes.push(lod);
	    				    
		    // Add one copy per transform, needs to be within it's own LOD
		    if(prop.transforms){

		    	prop.transforms.forEach(function(transform){
		    		
		    		/// Make LOD object and an array of groups for each LOD level
		    		var groups = {};
		    		var lod = new THREE.LOD();

		    		/// Each mesh is added to a group corresponding to its LOD distane
		    		var maxDist = 0;
			    	meshArray.forEach(function(mesh){
			    		maxDist = Math.max( maxDist, addMeshToLOD(mesh,groups,lod,prop,true) );
			    	});

			    	/// Add invisible level
	    			//lod.addLevel(new THREE.Group(),10000);

			    	/// Set position, scale and rotation of the LOD object
					if(transform.rotation){
				    	lod.rotation.order = "ZXY";
				    	lod.rotation.set(transform.rotation[0], -transform.rotation[2], -transform.rotation[1]);
				    }
				    lod.scale.set( transform.scale, transform.scale, transform.scale );
				    lod.position.set(transform.position[0], -transform.position[2], -transform.position[1]);

					lod.updateMatrix();
		    		lod.matrixAutoUpdate = false;

		    		lod.boundingSphereRadius = ( boundingSphere && boundingSphere.radius ? boundingSphere.radius : 1.0) * prop.scale;

					/// Show highest level always
		    		//lod.update(lod);

			    	/// Add LOD containing mesh instances to scenerender: function(propertiesChunkHeader, map, localReader, renderCallback){
			    	self.getOutput().meshes.push(lod);
			    });
		    }
		}

		/// Get meshes
		var showUnmaterialed = false;
		Utils.getMeshesForFilename(prop.filename, prop.color, self.localReader, self.meshCache, self.textureCache, showUnmaterialed,
			function(meshes, isCached, boundingSphere){
			
				if(meshes){
					addMeshesToScene(meshes, isCached, boundingSphere);
				}

				/// Render next prop
				renderIndex(idx+1);
			}
		);

		

	};

	/// Start serial loading and redering. (to allow re-using meshes and textures)
	renderIndex(0);
}


/**
 * TODO: write description. Used for export feature
 * @method getFileIdsAsync
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
PropertiesRenderer.prototype.getFileIdsAsync = function(callback){
	var fileIds = [];

	var propertiesChunkData =  this.mapFile.getChunk("prp2").data;

	var props = propertiesChunkData.propArray;
	var animProps = propertiesChunkData.propAnimArray;
	var instanceProps = propertiesChunkData.propInstanceArray;
	var metaProps = propertiesChunkData.propMetaArray;

	props = props
		.concat(animProps)
		.concat(instanceProps)
		.concat(metaProps);

	var getIdsForProp = function(idx){

		if(idx>=props.length){
			callback(fileIds);
			return;
		}

		if(idx%100==0){

			this.logger.log(
				T3D.Logger.TYPE_MESSAGE,
				"getting ids for entry",idx,"of",props.length
			);
		}

		var prop = props[idx];
		Utils.getFilesUsedByModel(
			prop.filename,
			localReader,
			function(propFileIds){
				fileIds = fileIds.concat(propFileIds);
				getIdsForProp(idx+1);
			}
		);

	};

	getIdsForProp(0);
};

module.exports = PropertiesRenderer;
},{"../util/RenderUtils":20,"./DataRenderer":5}],10:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

var Utils = _dereq_("../util/RenderUtils");
var DataRenderer = _dereq_('./DataRenderer');

/**
 *
 * A renderer that generates a list of readable strings from a "strs" file.
 * 
 * @class StringRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "id" the base ID or file ID of the string file to read strings from.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
function StringRenderer(localReader, settings, context, logger){
	DataRenderer.call(this, localReader, settings, context, logger);
}


/// DataRenderer inheritance:
StringRenderer.prototype = Object.create(DataRenderer.prototype);
StringRenderer.prototype.constructor = StringRenderer;

/**
 * Output fileds generated:
 *
 * - *strings* An array of objects. Each object has a "recid"-property specifing on what index within the file
 * a given string was found, and a "value"-property specigying the string value.
 *
 * - *language* An integer specifing the language of the loaded file.
 * 
 * @method  renderAsync
 * @async
 * @param  {Function} callback Fires when renderer is finished, does not take arguments.
 */
StringRenderer.prototype.renderAsync = function(callback){
	var self = this;

	/// Get file id
	var fileId = this.settings.id;
	var showUnmaterialed = true;

	/// Load the string file

	/// Set up output array
	this.getOutput().strings = [];

	this.localReader.loadFile(this.settings.id, function(inflatedData){
		var ds = new DataStream(inflatedData);
		var end = ds.byteLength -2;

    	/// skip past fcc
    	ds.seek(4);

    	var entryHeaderDef =
		[
			"size", "uint16",
			"decryptionOffset", "uint16",
			"bitsPerSymbol", "uint16"
		];

		var entryIndex = 0;

    	while ( end - ds.position > 6) {
	        	        
	        var entry = ds.readStruct(entryHeaderDef);
	        entry.size -= 6;

	        if(entry.size > 0){


	        	var isEncrypted = entry.decryptionOffset != 0 || entry.bitsPerSymbol != 0x10;

	        	/// UTF-16
	        	if( !isEncrypted ){
	        		var value =  ds.readUCS2String(entry.size/2);
	        		self.getOutput().strings.push({
	        			value:value,
	        			recid:entryIndex
	        		});
	        	}

	        	/// Other... ignored
	        	else{

	        	}
	        }

	        entryIndex++;        
	    }


		ds.seek(ds.byteLength - 2);
    	self.getOutput().language = ds.readUint16();
		callback();
	});


}

module.exports = StringRenderer;
},{"../util/RenderUtils":20,"./DataRenderer":5}],11:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

var Utils = _dereq_("../util/RenderUtils");
var DataRenderer = _dereq_('./DataRenderer');
var GW2File = _dereq_("../format/file/GW2File.js"); 

/**
 *
 * A renderer that generates the meshes for the terrain of a map.
 *
 * 
 * Requires a context previously populated by a 
 * {{#crossLink "EnvironmentRenderer"}}{{/crossLink}}.
 * 
 * @class TerrainRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a GW2File.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
function TerrainRenderer(localReader, mapFile, settings, context, logger){
	DataRenderer.call(this, localReader, mapFile, settings, context, logger);
	this.mapFile = this.settings.mapFile;

	this.drawWater = function(rect){
		
		/// Add Water
		var material = material || new THREE.MeshBasicMaterial(
			{
				color: 0x5bb1e8,
				wireframe:false,
			 	opacity: 0.35
			}
		);

		material.transparent = true;
		return Utils.renderRect(rect, 0, material);
	}

	this.parseNumChunks = function(terrainData){
		terrainData.numChunksD_1 = Math.sqrt(
			terrainData.dims[0] *
			terrainData.chunkArray.length /
			terrainData.dims[1]
		);
		terrainData.numChunksD_2 =
			terrainData.chunkArray.length / terrainData.numChunksD_1;
	}

	this.loadPagedImageCallback = function(callback, infaltedBuffer){
		var self = this;

		// Prep output array
		self.getOutput().terrainTiles = [];

		var pimgDS = new DataStream(infaltedBuffer);
		var pimgFile = new GW2File(pimgDS,0);
		var pimgTableDataChunk = pimgFile.getChunk("pgtb");
		var pimgData = pimgTableDataChunk && pimgTableDataChunk.data;

		this.mapRect = null;

		/// Fetch chunks
		var terrainData = this.mapFile.getChunk("trn").data;
		var parameterData = this.mapFile.getChunk("parm").data;

		/// Read settings
		var maxAnisotropy = this.settings.anisotropy ? this.settings.anisotropy : 1;

		var chunks = [];	
		var chunkW = 35;

		/// Calculate numChunksD_1 and _2
		this.parseNumChunks(terrainData);

		var xChunks = terrainData.numChunksD_1;
		var yChunks = terrainData.numChunksD_2;

		var allMaterials = terrainData.materials.materials;
		var allTextures = terrainData.materials.texFileArray;

		//Total map dx and dy
		/*
		old parameter data definition:
		"x1", "float32",
		"y1", "float32",
		"x2", "float32",
		"y2", "float32"
		*/
		//var dx = parameterData.rect.x2 - parameterData.rect.x1;
		//var dy = parameterData.rect.y2 - parameterData.rect.y1;
		var dx = parameterData.rect[2] - parameterData.rect[0];
		var dy = parameterData.rect[3] - parameterData.rect[1];

		//Each chunk dx and dy
		var cdx = dx/terrainData.numChunksD_1 * 1;//  35/33;
		var cdy =dy/terrainData.numChunksD_2 * 1;//35/33;
		var n=0;
		var allMats = [];
		var customMaterial = new THREE.MeshLambertMaterial({side: THREE.DoubleSide, color:0x666666, shading: THREE.FlatShading}); 
		var texMats = {};

		/// Load textures from PIMG and inject as material maps (textures)
		var chunkTextures={};
		
		/// Load textures
		if(pimgData){
			var strippedPages = pimgData.strippedPages;

			///Only use layer 0
			strippedPages.forEach(function(page){
				
				/// Only load layer 0 and 1
				if(page.layer<=1){
					var filename = page.filename;
					var color = page.solidColor;
					var coord = page.coord;

					var matName = coord[0]+","+coord[1];
					if(page.layer == 1)
						matName+="-2";


					/// Add texture to list, note that coord name is used, not actual file name
					if(!chunkTextures[matName]){

						/// Load local texture, here we use file name!
						var chunkTex = Utils.loadLocalTexture(self.localReader, filename);

						if(chunkTex){
							/// Set repeat, antistropy and repeat Y
							chunkTex.anisotropy = maxAnisotropy;
							chunkTex.wrapT = chunkTex.wrapS = THREE.RepeatWrapping;					
						}

						///...But store in coord name
						chunkTextures[matName] = chunkTex;					
						
					}
				}

			});/// end for each stripped page in pimgData
		}
		
		
				
		/// Render Each chunk
		/// We'll make this async in order for the screen to be able to update

		var renderChunk = function(cx,cy){
			var chunkIndex = cy*xChunks + cx;

			var pageX = Math.floor(cx/4);
			var pageY = Math.floor(cy/4);

			var chunkTextureIndices = allMaterials[chunkIndex].loResMaterial.texIndexArray;
			var matFileName = allMaterials[chunkIndex].loResMaterial.materialFile;		
			//var chunkTextureIndices = allMaterials[chunkIndex].hiResMaterial.texIndexArray;
			//var matFileName = allMaterials[chunkIndex].hiResMaterial.materialFile;


			var chunkData = terrainData.chunkArray[chunkIndex];

			var mainTex = allTextures[chunkTextureIndices[0]];
			var mat = customMaterial;

			/// TODO: just tick invert y = false...?
			var pageOffetX = (cx % 4)/4.0;
			var pageOffetY = 0.75 - (cy % 4)/4.0;

			//offset 0 -> 0.75
			
			
			//Make sure we have shared textures

			/// Load and store all tiled textures
			var fileNames = [];
			for(var gi=0;gi<chunkTextureIndices.length/2;gi++){
				var textureFileName = allTextures[chunkTextureIndices[gi]].filename;

				fileNames.push(textureFileName);
				
				/// If the texture is not already loaded, read it from the .dat!
				if(!chunkTextures[textureFileName]){

					/// Load local texture
					var chunkTex = Utils.loadLocalTexture(self.localReader, textureFileName);

					if(chunkTex){
						/// Set repeat, antistropy and repeat Y
						chunkTex.anisotropy = maxAnisotropy;
						chunkTex.wrapT = chunkTex.wrapS = THREE.RepeatWrapping;		
					}

					chunkTextures[textureFileName] = chunkTex;					
				}
			}/// End for each chunkTextureIndices


			/// Create Composite texture material, refering the shared textures
			var pageTexName=  pageX+","+pageY;				
			var pageTexName2=  pageX+","+pageY+"-2";				


			/// TODO USe mapData
			//var fog = SceneUtils.getScene().fog;
			var fog = {
				color: {r:1,g:1,b:1},
				near: 0,
				far: 0
			}

			/// Get haze color from environment rednerer
			var envOutput = self.getOutput(T3D.EnvironmentRenderer);
			if(envOutput.hazeColor){
				fog.color.r  = envOutput.hazeColor[2]/255.0;
				fog.color.g  = envOutput.hazeColor[1]/255.0;
				fog.color.b  = envOutput.hazeColor[0]/255.0;
			}
			
			var uniforms = THREE.UniformsUtils.merge([
	    		THREE.UniformsLib['lights'],
			]);

			/// FOG
			uniforms.fogColor = { type: "v3", value: new THREE.Vector3( fog.color.r, fog.color.g, fog.color.b ) },
			uniforms.fogNear = { type: "f",value: fog.near },
			uniforms.fogFar = { type: "f", value: fog.far },


			/// TODO: READ FROM VO, don't default to hard coded scale
			uniforms.uvScale = { type: "v2", value: new THREE.Vector2( 8.0, 8.0 ) };
			uniforms.offset = { type: "v2", value: new THREE.Vector2( pageOffetX, pageOffetY) };

			uniforms.texturePicker = {type: "t", value: chunkTextures[pageTexName]};
			uniforms.texturePicker2 = {type: "t", value: chunkTextures[pageTexName2]};

			uniforms.texture1 = { type: "t", value: chunkTextures[fileNames[0]]};
			uniforms.texture2 = { type: "t", value: chunkTextures[fileNames[1]]};
			uniforms.texture3 = { type: "t", value: chunkTextures[fileNames[2]]};
			uniforms.texture4 = { type: "t", value: chunkTextures[fileNames[3]]};
			

			mat = new THREE.ShaderMaterial( {
				uniforms: uniforms,
				vertexShader: "varying vec2 vUv;\r\nvarying vec3 vecNormal;\r\nvoid main()\r\n{\r\nvUv =  uv;\r\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\nvecNormal = (modelMatrix * vec4(normal, 0.0)).xyz;\r\ngl_Position = projectionMatrix * mvPosition;\r\n}",
				fragmentShader: "\r\nuniform vec3 fogColor;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform vec2 uvScale;\r\nuniform vec2 offset;\r\nuniform sampler2D texturePicker;\r\nuniform sampler2D texturePicker2;\r\nuniform sampler2D texture1;\r\nuniform sampler2D texture2;\r\nuniform sampler2D texture3;\r\nuniform sampler2D texture4;\r\nuniform vec3 ambientLightColor;\r\n#if MAX_DIR_LIGHTS > 0\r\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n#endif\r\nvarying vec2 vUv;\r\nvarying vec3 vecNormal;\r\nvec3 blend(\r\nvec4 texture1, float a1,\r\nvec4 texture2, float a2,\r\nvec4 texture3, float a3,\r\nvec4 texture4, float a4)\r\n{\r\nfloat depth = 2.0;\r\nfloat alphaMult = 1.0;\r\nfloat alphaAdd  = 0.0;\r\na1 *= 4.0;\r\na2 *= 4.0;\r\na3 *= 4.0;\r\na4 *= 4.0;\r\na1 =  a1+(1.5+texture1.a);\r\na2 =  a2+(1.5+texture2.a);\r\na3 =  a3+(1.5+texture3.a);\r\na4 =  a4+(1.5+texture4.a);\r\nfloat ma = max(a1,a2);\r\nma = max(ma,a3);\r\nma = max(ma,a4);\r\nma -= depth;\r\nfloat b1 = max(a1 - ma, 0.0);\r\nfloat b2 = max(a2 - ma, 0.0);\r\nfloat b3 = max(a3 - ma, 0.0);\r\nfloat b4 = max(a4 - ma, 0.0);\r\nreturn (\r\ntexture1.rgb * b1 +\r\ntexture2.rgb * b2 +\r\ntexture3.rgb * b3 +\r\ntexture4.rgb * b4 \r\n) \/ (b1 + b2 + b3 +b4);\r\n}\r\nvoid main( void ) {\r\nvec2 position = vUv*uvScale;\r\nfloat edge = 1.0\/1024.0;\r\nvec2 compPos = edge +  (vUv*0.25 + offset)*(1.0-edge*2.0);\r\nvec4 tp1 = texture2D( texturePicker, compPos);\r\nvec4 tp2 = texture2D( texturePicker2, compPos);\r\nvec4 composite = tp1;\r\nvec4 t1 = texture2D( texture1, position );\r\nvec4 t2 = texture2D( texture2, position );\r\nvec4 t3 = texture2D( texture3, position );\r\nvec4 t4 = texture2D( texture4, position );\r\nvec3 color = blend(\r\nt1, tp1.a,\r\nt2, tp1.b,\r\nt3, tp1.g,\r\nt4, tp1.r\r\n);\r\ncolor *= 0.5+tp2.r;\r\ngl_FragColor = vec4(color,1.0);\r\nvec4 addedLights = vec4(ambientLightColor, 1.0);\r\n#if MAX_DIR_LIGHTS > 0\r\nfor(int l = 0; l < MAX_DIR_LIGHTS; l++) {\r\naddedLights.rgb += clamp(\r\ndot(-directionalLightDirection[l], vecNormal),\r\n0.0,\r\n1.0\r\n)\r\n* directionalLightColor[l];\r\n}\r\n#endif\r\ngl_FragColor *= addedLights;\r\nfloat depth = gl_FragCoord.z \/ gl_FragCoord.w;\r\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\r\ngl_FragColor.xyz = mix( gl_FragColor.xyz, fogColor.xyz, fogFactor );\r\n}",
				lights: true
			} );

			///Store referenceto each material
			allMats.push(mat);

			
			/// -1 for faces -> vertices , -2 for ignoring outer faces
			var chunkGeo =  new THREE.PlaneBufferGeometry ( cdx, cdy, chunkW-3, chunkW-3);

			var cn = 0;

			///Render chunk

			/// Each chunk vertex
			for(var y=0; y<chunkW; y++){

				for(var x=0; x<chunkW; x++){
			
					if(  x != 0 && x !=chunkW-1 && y!=0 && y !=chunkW-1 )
					{
						chunkGeo.attributes.position.array[cn*3+2] = terrainData.heightMapArray[n];
						cn++;
					}
					
					n++;					
				}
			} // End each chunk vertex

			
			/// Flip the plane to fit wonky THREE js world axes
			var mS = (new THREE.Matrix4()).identity();
			mS.elements[5] = -1;
			chunkGeo.applyMatrix(mS);

			/// Compute face normals for lighting, not used when textured
			chunkGeo.computeFaceNormals();
			//chunkGeo.computeVertexNormals();


			/// Build chunk mesh!
			var chunk;
			chunk = new THREE.Mesh(	chunkGeo , customMaterial );
			if(mat.length){
				chunk = THREE.SceneUtils.createMultiMaterialObject( chunkGeo, mat );
			}
			else{
				chunk = new THREE.Mesh(	chunkGeo , mat );	
			}	


			///Move and rotate Mesh to fit in place
			chunk.rotation.set(Math.PI/2,0,0);
			
			/// Last term is the new one: -cdx*(2/35)
			var globalOffsetX = parameterData.rect[0] + cdx/2;
			var chunkOffsetX = cx * cdx;

			chunk.position.x = globalOffsetX + chunkOffsetX;

			///Adjust for odd / even number of chunks
			if(terrainData.numChunksD_2 % 2 == 0){
				
				/// Last term is the new one: -cdx*(2/35)
				var globalOffsetY = parameterData.rect[1] + cdy/2 -0;// -cdy*(1/35);
				var chunkOffsetY = cy * cdy * 1;//33/35;

				chunk.position.z =  chunkOffsetY + globalOffsetY;
			}
			else{

				var globalOffsetY =  parameterData.rect[1] - cdy/2 + 0; //cdy*(1/35);
				var chunkOffsetY = cy * cdy * 1;//33/35;

				chunk.position.z = globalOffsetY +  chunkOffsetY;	
			}


			var px = chunk.position.x;
			var py = chunk.position.z;


			if(!self.mapRect){
				self.mapRect = {
					x1:px-cdx/2, x2:px+cdx/2,
					y1:py-cdy/2, y2:py+cdy/2 };
			}
			
			self.mapRect.x1 = Math.min(self.mapRect.x1, px -cdx/2);
			self.mapRect.x2 = Math.max(self.mapRect.x2, px +cdx/2);

			self.mapRect.y1 = Math.min(self.mapRect.y1, py -cdy/2);
			self.mapRect.y2 = Math.max(self.mapRect.y2, py +cdy/2);
			
			chunk.updateMatrix();
			chunk.updateMatrixWorld ();

			/// Add to list of stuff to render
			/// TODO: Perhaps use some kind of props for each entry instead?
			self.getOutput().terrainTiles.push( chunk );		

		} /// End render chunk function


		var stepChunk = function(cx,cy){
			if(cx>=xChunks){
				cx = 0;
				cy++;
			}

			if(cy>=yChunks){

				/// Draw water surface using map bounds				
				self.getOutput().water = self.drawWater(self.mapRect);

				/// Set bounds in output VO
				self.getOutput().bounds = self.mapRect;

				/// Fire call back, we're done rendering.
				callback();
				return;
			}

			var pct =  Math.floor( 100*(cy * xChunks + cx) /( xChunks * yChunks ) );

			self.logger.log(T3D.Logger.TYPE_PROGRESS,"Loading Terrain", pct);

			renderChunk(cx,cy);
			setTimeout(stepChunk,1,cx+1,cy);
		}

		stepChunk(0,0);
	};
}


/// DataRenderer inheritance:
TerrainRenderer.prototype = Object.create(DataRenderer.prototype);
TerrainRenderer.prototype.constructor = TerrainRenderer;

/**
 * Output fileds generated:
 * 
 * - *terrainTiles* An array of THREE.Mesh objects visualizing terrain of the map.
 * 
 * - *water* A THREE.Mesh object visualizing the bounds of the map.
 * 
 * - *bounds* An object wiht x1, x2, y1, and y2 properties specifying the bounds of the map.
 * 
 * @method  renderAsync
 * @async
 * @param  {Function} callback Fires when renderer is finished, does not take arguments.
 */
TerrainRenderer.prototype.renderAsync = function(callback){
	
	/// Load all paged Images, requires inflation of other pack files!
	var pagedImageId =  this.mapFile.getChunk("trn").data.materials.pagedImage;
	this.localReader.loadFile(pagedImageId,this.loadPagedImageCallback.bind(this, callback));
}

/**
 * TODO: write description. Used for export feature
 * @method getFileIdsAsync
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
TerrainRenderer.prototype.getFileIdsAsync = function(callback){

	var terrainChunk = this.mapFile.getChunk("trn");
	var pimgTableDataChunk = this.mapFile.getChunk("pimg");
	var fileIds = [];

	/// ------------ SPLASH TEXTURES ------------
	var pimgData = pimgTableDataChunk && pimgTableDataChunk.data;
	var strippedPages = pimgData.strippedPages;
	
	///Only use layer 0
	strippedPages.forEach(function(page){
			
		/// Only load layer 0 and 1
		if(page.layer<=1 && page.filename>0){
			fileIds.push( page.filename );
		}
	});
	/// ------------ END SPLASH TEXTURES ------------



	/// ------------ TILED IMAGES ------------
	var terrainData = terrainChunk.data;
	var allTextures = terrainData.materials.texFileArray;
	allTextures.forEach(function(texture){
		if(texture.filename>0)
			fileIds.push(texture.filename);
	})
	/// ------------ END TILED IMAGES ------------



	return fileIds;
};

module.exports = TerrainRenderer;
},{"../format/file/GW2File.js":16,"../util/RenderUtils":20,"./DataRenderer":5}],12:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

var Utils = _dereq_("../util/RenderUtils");
var DataRenderer = _dereq_('./DataRenderer');

/**
 *
 * A renderer that generates zone models for a map.
 * 
 * @class ZoneRenderer
 * @constructor
 * @extends DataRenderer
 * @param  {LocalReader} localReader  The LocalReader instance to read data from.
 * @param  {Object} settings     Any settings used by this renderer.
 * *Must* specify "mapFile", a GW2File.
 * @param  {Object} context      Shared value object between renderers.
 * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
 */
function ZoneRenderer(localReader, settings, context, logger){
	DataRenderer.call(this, localReader, settings, context, logger);
	this.mapFile = this.settings.mapFile;

	/**
	 * TODO
	 * @method  renderZone
	 * @param  {[type]} zone               [description]
	 * @param  {[type]} zoneDefs           [description]
	 * @param  {[type]} mapRect            [description]
	 * @param  {[type]} renderZoneCallback [description]
	 * @return {[type]}                    [description]
	 */
	this.renderZone = function(zone, zoneDefs, mapRect, renderZoneCallback){
		var self = this;

		/// Get Zone Definition
		var zoneDef = null;
		zoneDefs.forEach(function(zd){
			if(!zoneDef && zd.token == zone.defToken)
				zoneDef = zd;
		});

		/// Create array of all models to add:
		var models = [];
		var modelGroups = this.getModelGroups(zone, zoneDef, mapRect);

		/// Create empty mesh cache
		self.meshCache = {};
		self.textureCache = {};

		/*
		 * ---Keeping this out of the doc for now---
		 * Steps trough each model and renders it to the scene, allowing for efficient caching.
		 * @param  {Number} i - Current index within the models array
		 */
		//var lastPct = -1;
		var groupKeys = Object.keys(modelGroups);
		function stepModels(i){

			/*var pct = Math.round(100.0*i / groupKeys.length);
			if(lastPct!=pct){
				console.log("Rendering ZONE models "+pct);
				lastPct = pct;
			}*/

			if(i>=groupKeys.length){

				/// Empty mesh cache
				self.meshCache = {};
				self.textureCache = {};

				/// Tell caller this zone is done loading
				renderZoneCallback();
				return;
			}

			/// Read model at index
			/// var model = models[i];
			var key = groupKeys[i]; /// key is model filename
			var group = modelGroups[key];

			var meshGroups = [];
			
			/// Get model just once for this group
			var showUnmaterialed = false;
			Utils.getMeshesForFilename(key, null, self.localReader, self.meshCache, self.textureCache, showUnmaterialed,

				function(meshes, isCached){
					
					/// If there were meshes, add them to the scene with correct scaling rotation etc.
					if(meshes /* && meshes.length == 3*/){

						/// Add one copy per model instance
						/// TODO: add rotation!
						/// TODO: fine tune position?
						/// TODO: POTIMIZE!
						

						group.forEach(function(model, instanceIdx){

							var isCached = true;
							var scale = 1.0;

							/// For each Mesh in the model
							meshes.forEach(function(mesh, meshIdx){

								if(mesh.materialFlags == 525 /* || mesh.materialFlags == 520 || mesh.materialFlags == 521*/ ){
									//console.log("Skipping lod");
									return;
								}


								

								var move = {x:0,y:0,z:0};

							 	/// Add to big mesh
							 	if(!meshGroups[meshIdx]){
							 		var mg = mesh.geometry.clone();
							 		var mga = mg.attributes;
							 		meshGroups[meshIdx] = {
							 			readVerts : mga.position.array,
							 			verts: new Float32Array( group.length * mga.position.array.length ),

							 			readIndices : mga.index.array,
							 			indices: new Uint32Array( group.length * mga.index.array.length ),

							 			readUVs : mga.uv.array,
							 			uvs: new Float32Array( group.length * mga.uv.array.length ),

							 			readNormals : mga.normal.array,
							 			normals: new Float32Array( group.length * mga.normal.array.length ),

							 			material:mesh.material,
							 			//material:new THREE.MeshBasicMaterial( {color: 0xffcccc, wireframe:true} ),
							 			/*material : new THREE.PointCloudMaterial ({
									      color: 0xFF0000,
									      size: 20
									    }),*/
							 			position:{x:model.x, y:model.y, z:model.z}
							 		}
							 	}
							 	else{
							 		/// Translate
						 			move.x = model.x - meshGroups[meshIdx].position.x;
						 			move.y = model.z - meshGroups[meshIdx].position.z;
						 			move.z = model.y - meshGroups[meshIdx].position.y;
							 	}

							 	/// Add geom verts
							 	var readVerts = meshGroups[meshIdx].readVerts;
							 	var writeVerts = meshGroups[meshIdx].verts;
							 	var stride = readVerts.length;

							 	for ( var i = 0, j = instanceIdx * stride; i < stride; i +=3, j +=3 ) {
									writeVerts[ j + 0 ] = readVerts[ i + 0 ] + move.x;
									writeVerts[ j + 1 ] = readVerts[ i + 1 ] + move.y;
									writeVerts[ j + 2 ] = readVerts[ i + 2 ] + move.z;
								}

								var readIndices = meshGroups[meshIdx].readIndices;
							 	var writeIndices = meshGroups[meshIdx].indices;
							 	var strideIndices = readIndices.length;
							 	var shift = stride * instanceIdx  / 3;

								for ( var i = 0, j = instanceIdx * strideIndices; i < strideIndices; i ++, j ++ ) {
									writeIndices[ j ] = readIndices[ i ] + shift;
								}


								var readUVs = meshGroups[meshIdx].readUVs;
								var writeUvs = meshGroups[meshIdx].uvs;
								var uvStride = readUVs.length;
								for ( var i = 0, j = instanceIdx * uvStride; i < uvStride; i ++, j ++ ) {
									writeUvs[ j ] = readUVs[ i ];
								}

								var readNormals = meshGroups[meshIdx].readNormals;
								var writeNormals = meshGroups[meshIdx].normals;
								var normalStride = readNormals.length;
								for ( var i = 0, j = instanceIdx * normalStride; i < normalStride; i ++, j ++ ) {
									writeNormals[ j ] = readNormals[ i ];
								}
								

							});

						});// End for each model in group
						
					}/// End if meshes

					/// Add each cluster of merged meshes to scene
					meshGroups.forEach(function(meshGroup){

						var mergedGeom = new THREE.BufferGeometry();
						
						mergedGeom.addAttribute( 'position', new THREE.BufferAttribute( meshGroup.verts, 3 ) );
						mergedGeom.addAttribute( 'index', new THREE.BufferAttribute( meshGroup.indices, 1) );
						mergedGeom.addAttribute( 'normal', new THREE.BufferAttribute( meshGroup.normals, 3 ) );
						mergedGeom.addAttribute( 'uv', new THREE.BufferAttribute( meshGroup.uvs, 2) );

						mergedGeom.buffersNeedUpdate = true;

						mesh = new THREE.Mesh( mergedGeom, meshGroup.material );
						mesh.position.set(meshGroup.position.x, meshGroup.position.z, meshGroup.position.y);

						self.getOutput().meshes.push(mesh);

					});// End for each meshgroup


					/// Rendering is done, render next.
					stepModels(i+1);
				}

			);
			
			
			
			
		}/// End function stepModels

		/// Begin stepping trough the models, rendering them.
		stepModels(0);
	}


	/**
	 * TODO
	 * @method  getModelGroups
	 * @param  {[type]} zone    [description]
	 * @param  {[type]} zoneDef [description]
	 * @param  {[type]} mapRect [description]
	 * @return {[type]}         [description]
	 */
	this.getModelGroups = function(zone, zoneDef, mapRect){

		/// Calculate rect in global coordinates
		var zPos = zone.zPos;

		var mapX = mapRect[0];
		var mapY = mapRect[1];
		var c  = 32+16;

		// ["x1","uint32","y1","uint32","x2","uint32", "y2", "uint32"]
		var zoneRect = {
			x1:zone.vertRect[0]*c+mapX,
			x2:zone.vertRect[2]*c+mapX,
			y1:zone.vertRect[1]*-c-mapY,
			y2:zone.vertRect[3]*-c-mapY
		};	

		

		/// Zone width and depth in local corrdinates
		/*var zdx = zone.vertRect.x1-zone.vertRect.x2;
		var zdy = zone.vertRect.y1-zone.vertRect.y2;*/
		
		/// These zones seems to overflow :/
		if(zone.encodeData.length == 0){
			return {};
		}
		
		//console.log("Get mdl groups", zone);
		/// Testing: Render Zone Vert Rect
		//Utils.renderRect(zoneRect, -zPos);

		var zdx = zone.vertRect[0]-zone.vertRect[2];
		var zdy = zone.vertRect[1]-zone.vertRect[3];

		/// Zone Flags increases a linear position, used to step trough the Zone.
		var linearPos = 0;

		var modelGroups = {};

		var terrainTiles = this.getOutput(T3D.TerrainRenderer).terrainTiles;

		for(var i = 0; i< zone.flags.length; i+=2){

			/// Step forward
			linearPos += zone.flags[i];

			/// Check if a model should be placed
			var flag = zone.flags[i+1];
			if(flag!=0){
				
				/// Extract flag data
				/// Layer is written in the last 4 bytes
				var zoneDefLayer = flag >> 4;

				/// Get Zone Definition Layer
				var layer = zoneDef.layerDefArray[zoneDefLayer-1];

				/// TESTING Only show layers with height >= 3
				if(layer/* && layer.height >= 0*/){

					/// Get X and Y from linear position
					var modelX = (linearPos % zdx)*c + zoneRect.x1;
					var modelY = Math.floor(linearPos / zdx)*c + zoneRect.y1;

					/// Get Z from intersection with terrain
					var modelZ = null;

					var startZ = 100000;

					var raycaster = new THREE.Raycaster(
						new THREE.Vector3(modelX, startZ, modelY),
						new THREE.Vector3(0, -1, 0)
					);

					/// TODO: OPT?
					terrainTiles.forEach(function(chunk){
						if(modelZ === null){
							var intersections = raycaster.intersectObject(chunk);
							if(intersections.length>0){
								modelZ = startZ - intersections[0].distance;
							}
						}
					});

					/// Get model id
					/// TODO: check with modelIdx = flag & 0xf;
					var modelIdx = 0; 
					var model = layer.modelArray[modelIdx];
					var modelFilename = model.filename;
					var zOffsets = model.zOffsets;

					var layerFlags = layer.layerFlags; //NOrmaly 128, 128
					
					//TODO: flip z,y?
					var rotRangeX = layer.rotRangeX;//max min
					var rotRangeY = layer.rotRangeY;//max min
					var rotRangeZ = layer.rotRangeZ;//max min
					var scaleRange = layer.scaleRange;//max min
					var fadeRange = layer.fadeRange;//max min

					//Unused
					//tiling: 3
					//type: 1
					//width: 2
					//radiusGround: 2

					/// Create modelGroup (this zone only)
					if(!modelGroups[modelFilename]){
						modelGroups[modelFilename] = [];
					}

					/// Add entry to model group
					modelGroups[modelFilename].push({
						x:modelX,
						y:modelY,
						z:modelZ,
						rotRangeX:rotRangeX,
						rotRangeY:rotRangeY,
						rotRangeZ:rotRangeZ,
						scaleRange:scaleRange,
						fadeRange:fadeRange

					});
					

				}/// End if layer

				
			}/// End if flag != 0

		} /// End for each flag

		return modelGroups;
	}
}

/// NOT USED??
function addZoneMeshesToScene(meshes, isCached, position, scale, rotation){
	
	/// Called for each mesh in the zone
	/// TODO: Opt opt opt...

    meshes.forEach(function(mesh){

    	/// Create new mesh if we got back a cached original.
		if(isCached)
			mesh = new THREE.Mesh( mesh.geometry, mesh.material );

    	/// Scale, position and rotate.
    	mesh.scale.set( scale, scale, scale );
    	if(rotation){
	    	mesh.rotation.order = "ZXY";
	    	mesh.rotation.set(rotation.x, rotation.y, rotation.z);
	    }
    	mesh.position.set(position.x, position.y, position.z);

    	/// Add to export
    	this.getOutput().meshes.push(mesh);
	});

}


/// DataRenderer inheritance:
ZoneRenderer.prototype = Object.create(DataRenderer.prototype);
ZoneRenderer.prototype.constructor = ZoneRenderer;

/**
 * Renders all zone meshes in a GW2 map described by the map's "zon2" chunk.
 * Output fileds generated:
 *
 * - *meshes* An array of THREE.Mesh objects visualizing all zone models refered by this map.
 * 
 * @method  renderAsync
 * @async
 * @param  {Function} callback Fires when renderer is finished, does not take arguments.
 */
ZoneRenderer.prototype.renderAsync = function(callback){
	var self = this;

	/// Set up output array
	self.getOutput().meshes = [];
	
	var zoneChunkData = this.mapFile.getChunk("zon2").data;
	var parameterChunkData = this.mapFile.getChunk("parm").data;
	var terrainChunkData = this.mapFile.getChunk("trn").data;
	var mapRect = parameterChunkData.rect;
				
	/// Zone data
	var zones = zoneChunkData.zoneArray;
	var zoneDefs = zoneChunkData.zoneDefArray;

	/// Render each zone
	lastPct = -1;		

	/// Main render loop, render each zone
	function stepZone(i){

		var pct = Math.round(100.0*i / zones.length);
		if(lastPct!=pct){
			self.logger.log(
				T3D.Logger.TYPE_PROGRESS,
				"Loading 3D Models (Zone)", pct
			);
			lastPct = pct;
		}

		if(i >= zones.length){
			callback();
			return;
		}

		/// Main zone render function call
		self.renderZone(zones[i], zoneDefs, mapRect,
			stepZone.bind(self,i+1)
		);	

	}

	stepZone(0);
}

module.exports = ZoneRenderer;

//// Not used: zone defintion per chunk data "images" 32*32 points
/*
//Total map dx and dy
var d = terrainChunkHeader.data;
var pd = parameterChunkHeader.data;
var dx = (pd.rect.x2-pd.rect.x1);
var dy = (pd.rect.y2-pd.rect.y1);

//Each chunk dx and dy

var c =1;
var cdx = c*dx/d.dims.dim1;

var cdy = c*dy/d.dims.dim2;

var cdx = dx/(d.numChunksD_1*2);
var cdy =dy/(d.numChunksD_2*2);


for(var i=0; i<zoneDefs.length; i++){
	var zoneDef = zoneDefs[i];
	
	//TODO: opt!
	zoneDef.layerDefs.forEach(function(layer){

		layer.modelArray.forEach(function(model){
		
			
		});
		

	});

	var chunkMat = new THREE.MeshBasicMaterial(
		{
			color: 0x00ff00,
			wireframe:true,
		 	opacity: 1.0,
		}
	);

	//TODO: opt!
	
	if(
		zoneDef.token == 597  ||
		zoneDef.token == 1369  ||
		zoneDef.token == 903  
	){

		zoneDef.pageTable.pageArray.forEach(function(page){
			var flags = page.flags;
			var coord = page.chunkCoord;


			//Hightlight this coord
			var rect = {};

			
			//var globalOffsetX = pd.rect.x2 - cdx;
			var globalOffsetX = pd.rect.x1 + cdx/2;
			var chunkOffsetX = coord[0] * cdx;

			rect.x1  = globalOffsetX + chunkOffsetX;

			///Adjust for odd / even number of chunks
			if(d.numChunksD_2 % 2 == 0){
				
				var globalOffsetY = -pd.rect.y1;
				var chunkOffsetY = -coord[1] * cdy;

				rect.y1  =  chunkOffsetY + globalOffsetY;
			}
			else{

				var globalOffsetY =  -pd.rect.y1;
				var chunkOffsetY = -coord[1] * cdy;

				rect.y1 = globalOffsetY +  chunkOffsetY;	
			}

			rect.x2 = rect.x1+cdx;
			rect.y2 = rect.y1+cdy;


			

			Utils.renderRect(rect, 4000,chunkMat, 4000);

			//for(var j=0; j<flags.length; j++){
			//	if(flags[j]>0){
			//		console.log("Found flag",flags[j],"@ zoneDef",zoneDef.token,"coord",coord,"index",j);
			//	}
			//}
		});

	}

}*/
},{"../util/RenderUtils":20,"./DataRenderer":5}],13:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

module.exports  = [
    //uint8_t  version;
    "version","uint8",                      

    //uint8_t  magic[3];
    "magic", "string:3",                    

    //uint32_t headerSize;
    "headerSize","uint32",                  

    //uint32_t unknown1;
    "unknown1","uint32",                    

    //uint32_t chunkSize;
    "chunkSize","uint32",                   
    
    //uint32_t crc;
    "crc","uint32",                         
    
    //uint32_t unknown2;
    "unknown2","uint32",                    
    
    //uint64_t mftOffset;
    "mftOffset",[ "[]","uint32", 2 ],
    
    //uint32_t mftSize;
    "mftSize","uint32",
    
    //uint32_t flags;
    "flags","uint32"
];
},{}],14:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

module.exports = [
	//uint8_t  magic[4];
	"magic","string:4",
		
	//uint64_t unknown1;
	"unknown1",[ "[]","uint32", 2 ],

	//uint32_t nbOfEntries;
	"nbOfEntries","uint32",

	//uint32_t unknown2;
	"unknown2","uint32",
	
	//uint32_t unknown3;
	"unknown3","uint32",
];
},{}],15:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

var HEAD_STRUCT = [
	'type', 'cstring:4',
	'chunkDataSize', 'uint32',
	'chunkVersion', 'uint16',
	'chunkHeaderSize', 'uint16',
	'offsetTableOffset', 'uint32',
];


/**
 * Settings for resolving conflicting chunk names in different files.
 * @private 
 * @property DUPLICATE_SETTINGS
 * @type {Object}
 */
var DUPLICATE_SETTINGS = {
	'ANIM':['MODL','Unknown'],

	'GAME':['MODL','Unknown'],

	'Main':['cntc','mMet'],

	'SKEL':['MODL','Unknown'],

	'TOOL':['AMAT','MODL'],

	'main':['Unknown','Unknown','cmaC'],

	'nvms':['Unknown','Unknown']
};
/*
	ANIM, GAME, SKEL needs to know file name for scenefile...

	ANIM: 2
		ModelFileAnimationV25		MODL
		SceneFileAnimationV2		?

	GAME: 2
		ModelFileGame				MODL ???
		SceneFileGameV6				?

	Main: 2
		PackContent					cntc
		PackMapMetadata				mMet

	SKEL: 2
		ModelFileSkeletonV1			MODL
		SceneFileSkeletonV3			?

	TOOL: 2
		AmatToolParams				AMAT ???
		ModelFileToolV16			MODL ???

	main: 3
		CollideNavMesh
		CollideNavMeshChunk
		CollideModelManifest		cmaC

	nvms: 2
		PackMapNavMeshV2
		PackMapNavMeshChunkV2
*/

   



/**
 * Basic chunk parsing functionality for Guild Wars 2 file chunks
 * @class GW2Chunk
 * @constructor
 * @param {DataStream} ds A DataStream containing deflated chunk binary data.
 * @param {Number} addr Offset of chunk start within the DataStream
 */
var Chunk = function(ds, addr){

	/**
	 * @property {DataStream} ds The DataStream data source used by this chunk.
	 */
	this.ds = ds;

	/**
	 * @property {Number} addr The address to this Chunk within ds.
	 */
	this.addr = addr;

	/**
	 * @property {Object} data The typed data read from the body of this chunk.
	 */
	this.data = null;


	/**
	 * @property {Number} headerLength The length in bytes of the chunk header.
	 */
	this.headerLength  = NaN;

	/**
	 * @property {Object} header Chunk header data.
	 */
	this.loadHead();
};

/**
 * Parses the chunk header data, populating the header property.
 * @method loadHead
 */
Chunk.prototype.loadHead=function(){
	this.ds.seek(this.addr);	
	this.header = this.ds.readStruct(HEAD_STRUCT);

	this.headerLength = this.ds.position - this.addr;
};

/**
 * @method  getDefinition
 * @param  {String} fileType The main type of the pack file containing this chunk.
 * Used for resolving chunk naming conflicts between pack file types.
 * @return {Array}	DataStream formatted array describing the data
 * sctructures of this chunk
 */
Chunk.prototype.getDefinition=function(fileType){

	/// Normally we're looking for the 0th occurance
	/// But some chunk names occur multiple times and we're interrested
	/// in the N:th occurance of the definition.
	/// 
	/// I've no idea how this is automated, for now just use the 
	/// settings object I've put together from experience.
	var useNthIndex = 0;

	/// If this chunk has multiple definitions
	/// get to know what def to use...
	var fileTypes = DUPLICATE_SETTINGS[this.header.type];
	if(fileTypes){

		useNthIndex = -1;

		/// Check what file name entry matches this file name
		for(var i=0; i<fileTypes.length && useNthIndex == -1; i++){
			var ft = fileTypes[i];


			if(ft == fileType){
				useNthIndex = i;
			}
		}

		/// We didnt find this file name!
		/// TODO: if you get this error, please update the DUPLICATE_SETTINGS above
		if(useNthIndex == -1){
			debugger;
		}
	}

	var defsFound = 0;
	for(var i=0; i<T3D.formats.length; i++){
		var f = T3D.formats[i];
		
		/// Chunk name needs to match
		if(	f.name == this.header.type ){

			/// There needs to be a chunk def version matching the one specifiend 
			/// 
			/// AND If this is the Nth occurance of the chunk definition
			/// and we're looking for the Nth occurance, return it.
			/// 
			/// chunkVersion in the dat uses 0 indexing
			if( defsFound == useNthIndex && f.versions[this.header.chunkVersion] ){
				return ( new f.versions[this.header.chunkVersion]() ).__root;	
			}

			defsFound++;
		}
	}
	

};

/**
 * Parses the chunk main data, populating the data property.
 * @method loadData
 * @param  {String} fileType The main type of the pack file containing this chunk.
 * Used for resolving chunk naming conflicts between pack file types when
 * looking up the structure definition for this chunk.
 */
Chunk.prototype.loadData=function(fileType){

	var def = this.getDefinition(fileType);
	
	if(def){
		this.ds.seek(this.addr + this.headerLength);
		this.data =  this.ds.readStruct(def);
	}

	else{
		T3D.Logger.log(T3D.Logger.TYPE_WARNING,
			"Could not find a definition for chunk",
			this.header.type,
			"version", this.header.chunkVersion,
			"file name", fileType);
	}
	
};

/**
 * Retrieves the next chunk is the datastream. In practice this means the next chunk
 * within the same pack file.
 * @method next
 * @return {GW2Chunk} The next chunk if any, otherwise null.
 */
Chunk.prototype.next = function(){
	try{
		
		// Calculate actual data size, as mChunkDataSize
		// does not count the size of some header variables
		return new Chunk(this.ds,this.addr + 8 + this.header.chunkDataSize);
	}
	catch(e){
		/// Out of bounds probably		
	}
	return null;
};

module.exports = Chunk;
},{}],16:[function(_dereq_,module,exports){
/*
Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

var Chunk = _dereq_('./GW2Chunk');

var HEAD_STRUCT = [
	'identifier', 'cstring:2',
	'unknownField1', 'uint16',
	'unknownField2', 'uint16',
	'pkFileVersion', 'uint16',
	'type', 'cstring:4'
];


/**
 * Basic header and chunk parsing functionality for Guild Wars 2 pack files (PF)
 * @class GW2File
 * @constructor
 * @param {DataStream} ds A DataStream containing deflated file binary data.
 * @param {Number} addr Offset of file start within the DataStream
 * @param {boolean} noChunks If true, the file does not parse its
 * chunks on creation.
 */
var File = function(ds, addr, noChunks){

	/**
	 * @property {DataStream} ds The DataStream data source used by this file.
	 */
	this.ds = ds;

	/**
	 * @property {Number} addr The address to this File within ds.
	 */
	this.addr = addr;

	/// Not used anymore I think
	this.data = null;

	/**
	 * @property {Number} headerLength The length in bytes of the file header.
	 */
	this.headerLength  = NaN;

	/**
	 * All {{#crossLink "GW2Chunk"}}chunks{{/crossLink}} contained in the file.
	 *
	 * @property chunks
	 * @type GW2Chunk[]
	 */
	this.chunks = [];
	

	/**
	 * @property {Object} header Chunk header data.
	 */
	this.readHead();
	
	if(!noChunks){
		this.readChunks();
	}
};


/**
 * Parses the file header data, populating the header property.
 * @method readHead
 */
File.prototype.readHead = function(){
	this.ds.seek(this.addr);
	this.header = this.ds.readStruct(HEAD_STRUCT);
	this.headerLength = this.ds.position - this.addr;
};

/**
 * Parses the file headers and populates the chunks property.
 * @method readChunks
 */
File.prototype.readChunks = function(){

	/// Reset chunks
	this.chunks = [];

	//var structs = this.getChunkStructs && this.getChunkStructs();

	/// Load basic Chunk in order to read the chunk header.
	var ch = new Chunk(this.ds, this.headerLength + this.addr);	

    //while(structs && ch!=null && ch.header.type){
    while(ch!=null && ch.header.type){

    	/// Load data and pass file type if we need to determine what chunk entry to use
    	/// (Some chunks in different files share the same chunk name)
		ch.loadData(this.header.type);
	    this.chunks.push(ch);

    	/// Load next basic Chunk in order to read the chunk header.
    	ch = ch.next();
    }
};


/**
 * Get a GW2Chunk from this file
 * @method getChunk
 * @param  {String} type The name, or type of the desired chunk.
 * @return {GW2Chunk} The first GW2Chunk in this file matching the type name, or null if no matching GW2Chunk was found.
 */
File.prototype.getChunk = function (type){
	for(var i=0; i<this.chunks.length; i++){
		if( this.chunks[i].header.type.toLowerCase() == type.toLowerCase() )
			return this.chunks[i]; 
	}
	return null;
};

/**
 * Provides a list of known header types and their parsing structure. Should be defined by each file type individually.
 * @method getChunkStructs
 * @return {Object} An object mapping chunk identifiers to DataStream structure descriptors.
 */
File.prototype.getChunkStructs = function(){
	return {}
};

module.exports = File;
},{"./GW2Chunk":15}],17:[function(_dereq_,module,exports){
/*
	guid 1683952224941671000 is fucked up floor in SAB HUB
	materialFilename for that mesh is 564821, shared with lots of stuff
	lod 1 and 2 are both 0
	material flags is 2056
*/

/**
 * Collection of methods for generating THREE materials and textures
 * from Guild Wars 2 data formats.
 * @Class MaterialUtils
 * @static
 */
var ME = module.exports = {};


/**
 * Builds a custom vertex shader for a given number of uv cannels.
 * WIP not implemented yet!
 * 
 * @method  buildVS
 * @param  {Number} numUv Number of UV channels used by this shader
 * @return {String}       Genereted vertex shader source
 */
function buildVS(numUv){

	var vdefs = "";
	var adefs = "";
	var reads = "";
	for(var i=0; i< numUv; i++){
		vdefs += "varying vec2 vUv_"+(i+1)+";\n";
		
		/// uv and uv2 are defined by THREE
		if(i>1)
			adefs += "attribute vec2 uv"+(i+1)+";\n";


		reads += "vUv_" + (i+1) + " = uv"+(i>0?(i+1):"")+";\n";
	}

	return adefs + vdefs +
	    "void main()\n"+
	    "{\n"+
	        reads+
	        "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n"+
	        "gl_Position = projectionMatrix * mvPosition;\n"+
	    "}";
}

/**
 * Builds a custom pixel shader for a given number of uv cannels.
 * WIP not implemented yet!
 * 
 * @method buildPS
 * @param  {Array}  textures  THREE textures
 * @param  {Number} numUv     Number of UV channels used by this shader
 * @param  {Number} alphaTest Texture see-trough alpha treshold
 * @param  {TODO} lightMap  TODO
 */
function buildPS(textures, numUv, alphaTest, lightMap){
	var t1uv = "vUv_"+(textures[0].uvIdx+1);
	

	var discard = "";

	if(alphaTest){
		discard = "    if (c1.a < 0.5) \n"+
    	"       discard;\n";	
	}

    /// Color from 1st text or lighted by 2nd?
    var writeColor = "gl_FragColor = c1;\n";

    if(lightMap){
    	var texIdx = 0;
    	//var t2uv = "vUv_4";//+(3-textures[texIdx].uvIdx+1);
    	var t2uv = "vUv_1";// + (textures[texIdx].uvIdx+1);
    	//console.log("t2uv",t2uv);

    	writeColor = "   vec4 c2 = texture2D( texture"+(texIdx+1)+", "+t2uv+" );\n"+
	    "     gl_FragColor = c2;\n";
	    //"     gl_FragColor = vec4(c2.rgb * c1.r/.5, c2.a);\n";
    }


    var uniforms = ""
    textures.forEach(function(t,idx){
    	uniforms += "uniform sampler2D texture"+(idx+1)+";\n";
    });
	/*uniforms += "uniform sampler2D texture1;\n";
	if(lightMap)
		uniforms += "uniform sampler2D texture2;\n";*/

	var varyings = "";	
	for(var i=0; i< numUv; i++){
		varyings += "varying vec2 vUv_"+(i+1)+";\n";

	}

	return uniforms + varyings +
    "void main( void ) {\n"+
    "    vec4 c1 = texture2D( texture1, "+t1uv+" );\n"+
    discard +
    writeColor +
    "}";
}

/**
 * WIP, concept for generatin materials to render multi UV chanelled meshes.
 * 
 * @method getUVMat
 * @param  {Array} 	textures  THREE texture
 * @param  {Number} numUV     Number of UV channels used by this shader
 * @param  {Number} alphaTest Texture see-trough alpha treshold
 * @return {THREE.ShaderMaterial} Generated shader
 */
function getUVMat(textures, numUV, alphaTest){

	var lightMap = false;
	var uniforms = {};

	textures.forEach(function(t,idx){
		uniforms["texture"+idx] = { type: "t", value: t };
	});

	if(textures.length>1){
		lightMap = true;		
	}

	var attributes = {};

	for(var i=2; i<numUV; i++){
		attributes["uv"+(i+1)] =  { type: 'v2', value: [] };
	}

	var vs = buildVS(numUV);

	return new THREE.ShaderMaterial( {
		uniforms: uniforms,
		vertexShader: vs,
		fragmentShader: buildPS(
				textures,
				numUV,
				alphaTest,
				lightMap
			), 
		attributes: attributes,
		side: THREE.BackSide,
	} );

}

/**
 * Builds a THREE texture from a ModelMaterialData by reading settings and
 * loading any required data from the localReader. Uses sharedTextures for 
 * texture caching.
 *
 * This method is full of guesses and estimations, and could be improved on
 * a lot, allowing rendering of multi UV channeled materials, or special
 * materials like custom color chanelled gear.
 * 
 * @method getMaterial
 * @param  {ModelMaterialData} material 	A value object often automaticaly  
 *                                       	generated by a
 *                                       	{{#crossLink "GW2Chunk"}}{{/crossLink}}
 *                                       	structure definitions can be found in 
 *                                       	AllFormats.js, look for the latest 
 *                                       	version of ModelMaterialData
 *                                       	
 * @param  {GW2File} materialFile   A GW2File instance, must be of type AMAT
 * @param  {LocalReader} localReader The LocalReader to load the file contents from.   
 * @param  {Object} sharedTextures  Value Object for keeping the texture cache
 * @return {THREE.Material}         A THREE Material with the generated contents and settings.
 */
var getMaterial = ME.getMaterial = function(material, materialFile, localReader, sharedTextures){

	if(!materialFile)
		return;
	
	var dxChunk =  materialFile.getChunk("dx9s");
	var grChunk = materialFile.getChunk("grmt");

	/// Append all textures to the custom material
	var finalTextures = [];
	
	//Some materials don't use textures..
	if(material && material.textures.length/* && material.textures[texIndex]*/){

		/// TODO: check for flags!			
		/// 
		/// techinques[] -> passes[] -> effects[] -> samplerIndex[]
		/// 
		//console.log("num effects",dxChunk.data.techniques[0].passes[0].effects.length);

		//if(grChunk.data.flags!=76)
		//	return;

		/// 3 teqs : high medium low								GRAPHICS LEVEL SETTINGS
		/// 1 passes												DON'T CARE
		/// 15 effects			Each effect has a pixel shader 		HOW??
		/// 1 or 2 sampler indices 									USE ALL! (Multi material)
		
		var effects = dxChunk.data.techniques[0].passes[0].effects;
		//var effect = effects[10];
		var effect = effects[0];

		var shader = dxChunk.data.shaders[effect.pixelShader];
		
		/*effects.forEach(function (eff) {
			if(eff.samplerIndex.length > effect.samplerIndex.length)
				effect = eff;
		});*/
		//var samplerIdx = effect.samplerIndex[0];

		var samplerTextures = [];
		for(var i=0; i<effect.samplerIndex.length; i++)
		{

			var samplerIdx = effect.samplerIndex[i];
			var sampler = dxChunk.data.samplers[samplerIdx];

			/// SHOULD NEVER HAPPEN, hide mesh!
			if(!sampler)
				continue;//return;

			var textureToken = sampler && grChunk.data.texTokens[sampler.textureIndex];
			if(!textureToken)
				textureToken = "0-0";
			/*else
				textureToken =textureToken.val;*/

			/// Find the texture reffered by this sampler
			var samplerTex = null;

			material.textures.forEach(function(tex, index){

				///Seems like only 1st part of token is used...
				if(!samplerTex && tex.token.split("-")[0] == textureToken.split("-")[0]){
					//console.log("TEX match",tex.token, textureToken)
					samplerTex = tex;
				}
			});

			/// Add this sampler's texture to the collection of all textures
			if(samplerTex){
				samplerTextures.push(samplerTex);
			}
			else{
				///FALLBACK, just guess what texture we should use
				if(sampler)
					samplerTextures.push(material.textures[sampler.textureIndex]);
				else if(material.textures.length>0)
					samplerTextures.push(material.textures[0]);
				else return;
			}


		}/// END for each sampler index in effect

		/// We now have all textures
		//console.log("textures from sampler", samplerTextures);
				

		/// Fallback to using whatever texture there is.
		if(samplerTextures.length <= 0){
			return;
			//mainTex =  material.textures[0];			
		}


		//console.log("num samplers ",samplerTextures.length);
		samplerTextures.forEach(function(texture, idx){

			if(!texture)
				return;
			
			/// Set texture "URL"
			var texURL = texture && texture.filename;

			/// Load texture from RAM or local reader:
			finalTextures[idx] = getTexture(texURL, localReader, sharedTextures)
			if(finalTextures[idx]){
				finalTextures[idx].uvIdx = texture.uvPSInputIndex;	
			}
			
		});
		

	}/// End if material and texture			

	var finalMaterial;


	/// Create custom shader material if there are textures
	if(finalTextures){

		// TODO: make this work!
		if(false && finalTextures.length>0){
			finalMaterial = getUVMat( finalTextures, material.texCoordCount, grChunk.data.flags!=16460 );	
		}
		else{
			var ft=false;
			material.textures.forEach(function(t){
				if(!ft && t.token.split("-")[0] == "1733499172")
					ft = t;
			});
			
			if(!ft || ft.filename<=0)
				return;

			//finalMaterial = new THREE.MeshBasicMaterial({
			finalMaterial = new THREE.MeshLambertMaterial({
				side: THREE.BackSide, map:getTexture(ft.filename, localReader, sharedTextures)
			}); 
			finalMaterial.textureFilename = ft.filename;
			if(grChunk.data.flags!=16460){
				//console.log("Setting alpha flag for ",grChunk.data.flags)
				finalMaterial.alphaTest = 0.05;
			}
		}
			
	}

	/// Fallback material is monocolored red
	else{
		finalMaterial = new THREE.MeshBasicMaterial({
			side: THREE.BackSide,
			color:0xff0000,
			shading: THREE.FlatShading}); 
	}

	
	finalMaterial.needsUpdate = true;


	/// Set material props
	/// disable for now in order for custom shaders not to fuck up
	
	if(material){

		var alphaMask0 = 0x0001;// + 0x0100 + 0x0200;
    	var alphaMask1 = 0x0010
    	var alphaMask2 = 0x0100 + 0x0200;
    	var alphaMask2b =  0x0200;

		
		var grChunk = materialFile.getChunk("grmt");

		//Enable alpha test for transparent flags
    	if( (
    		 material.materialFlags & alphaMask0 ||
    		 material.materialFlags & alphaMask1 ||
    		 material.materialFlags & alphaMask2
    		) //&& solidColor != null
		){
    		//return;
    		//mesh.material.transparent = true;
    		//mesh.material.opacity = 2.0;

    		//var clr = solidColor;
    		//var propAlpha = 0;

    		///Backgroud color adds to alpha
    		//if( mesh.materialFlags == 2569  ){

    		/// This is rly just guesswork
    		/// Check material flag  2568 (as int) and compare material filename 27353 to 20041
    		/// Same flags but some have alpha and some don't
    		//if( mesh.materialFlags & alphaMask2b  ){
    		//	propAlpha =  (clr[3] - 128)/128;
    		//	//propAlpha = Math.max(0,propAlpha);
    		//}

    		//mesh.material.alphaTest = Math.max(0, 0.1 );//- propAlpha*2);
    		
    	}


		/// GRCHUNK -> DATA -> FLAGS

		///HAS LIGHT - TEX - ? - EMISSIVE16460
		///
		
		/// 56533 LOD FOR TOMBSTONE?
		
		//	16460			0100 0000 0100 1100			"standard" stuff rendering OK in SAB (no alpha test)

		//	
		//	16452(SAB)		0100 0000 0100 0100			yellow numbers in sab signs
		//	16448(SAB)		0100 0000 0100 0000			faces on rocks, cloudmen, skybox portal images, holes in walls, floor plates...
		//												no lighting??
		//	
		//	 8268			0010 0000 0100 1100	
		//	 3392			0000 1101 0100 0000			Moto machine light bulbs
		//	 2380			0000 1001 0100 1100
		//	 2368			0000 1001 0100 0000			Fountain water with rings, portal border and circular "light"
		//	  332			0000 0001 0100 1100
		//	  324			0000 0001 0100 0100			Moto face sprites
		//	  
		//	  320(SAB)		0000 0001 0100 0000			portal textures (normal maps ish)
		//	  
		//	   76			0000 0000 0100 1100			LOTS OF STUFF
		//	   											Tree leaves, ground, hills, some roofs, flags, street lights
		//	   											sheild textures, some fences, water tops, waterfall
		//	   											
		//	   											IN KHYLO "everything with alpha"
		//	   
		//	   
		//	   68			0000 0000 0100 0100			Some flowers (lo res?) fountain edges foam
		//	   
		//	   64(SAB)		0000 0000 0100 0000			clouds, sun iamge


		var lightMask = 8;
		
		var knownFileFlags = [
			16460,
			16452,
			16448,
			8268,
			3392,
			2380,
			2368,
			332,
			324,
			320,
			76,
			68,
			64];

		if(knownFileFlags.indexOf(grChunk.data.flags)<0){
			T3D.Logger.log(
				T3D.Logger.TYPE_WARNING,
				"unknown GR flag",grChunk.data.flags
			);
		}

		if( !(grChunk.data.flags & lightMask) ){
			//debugger;
			//console.log("no light");
			finalMaterial =  new THREE.MeshBasicMaterial({
				side: THREE.BackSide,
				map: finalMaterial.map
			});

		}
		
		if(grChunk.data.flags!=16460){
			finalMaterial.alphaTest = 0.05;
		}


	}/// End if material
	

	return finalMaterial;

}


/**
 * Load image data into a THREE.Texture from a texture file in the .dat file, using a LocalReader.
 * Any loaded tetures are added to sharedTextures, allowing for texture caching and fewer reads.
 * 
 * @method  getTexture
 * @param  {Number} texURL         The fileId or baseId of the file to load image data from.
 * @param  {LocalReader} localReader    The LocalReader to load the file contents from.
 * @param  {Object} sharedTextures Value Object for keeping the texture cache
 * @return {THREE.Texture} A texture that will be populated by the file data when it is loaded.
 */
var getTexture = ME.getTexture = function(texURL, localReader, sharedTextures){

	var finalTexture;

	/// Read texture from shared array of loaded textures
	/// or read it from URL and add to shared ones!			
	if(texURL && sharedTextures[texURL]){

		/// Just read from already loaded textures.
		finalTexture = sharedTextures[texURL];

	}
	else if(texURL){

		/// Load and add to shared array.
		finalTexture = loadLocalTexture(localReader,texURL);

		/// Set standard texture functionality.
		finalTexture.wrapT = THREE.RepeatWrapping;
		finalTexture.wrapS = THREE.RepeatWrapping;
		finalTexture.flipY = false;

		sharedTextures[texURL] = finalTexture;
	}

	return finalTexture;
}



/**
 * Load image data into a THREE.Texture from a texture file in the .dat file, using a LocalReader.
 * If you're loading multiple textures, make sure to use
 * {{#crossLink "MaterialUtils/getTexture"}}{{/crossLink}} that allows you to cache textures.
 * 
 * @method loadLocalTexture
 * @param {LocalReader} localReader - The LocalReader to load the file contents from.
 * @param {Number} fileId - The fileId or baseId of the file to load image data from.
 * @param {Number} mapping - What THREE mapping the returned texture will use, not implemented.
 
 * @return {THREE.Texture} A texture that will be populated by the file data when it is loaded.
 */
var loadLocalTexture = ME.loadLocalTexture = function(localReader, fileId, mapping, defaultColor, onerror){
	
	if(defaultColor === undefined){
		defaultColor = Math.floor( 0xffffff * Math.random() )
	}

	/// Temporary texture that will be returned by the function.
	/// Color is randomized in order to differentiate different textures during loading.
	var texture =  THREE.ImageUtils.generateDataTexture(
		1, // Width
		1, // Height
		new THREE.Color( defaultColor ) // Color
	);

	/// Only allow non-zero fileId, otherwise jsut return static texture
	if( parseInt(fileId) <= 0 ){
		if(onerror)
			onerror();
		return texture;
	}

	/// Load file using LocalReader.
	localReader.loadTextureFile(fileId,
		function(inflatedData, dxtType, imageWidth, imageHeigth){

			/// Require infalted data to be returned.
			if(!inflatedData){
				if(onerror)
					onerror();
				return;
			}

			/// Create image using returned data.
			var image = {
				data   : new Uint8Array(inflatedData),
				width  : imageWidth,
				height : imageHeigth
			};

			/// Use RGBA for all textures for now...
			/// TODO: don't use alpha for some formats!
			texture.format = (dxtType==3 || dxtType==5 || true) ? THREE.RGBAFormat : THREE.RGBFormat;

			/// Update texture with the loaded image.
			texture.image = image;
			texture.needsUpdate = true;
		}
	);	

	/// Return texture with temporary content.
	return texture;
};
},{}],18:[function(_dereq_,module,exports){
/**
 * Collection Math and sorting methods
 * @Class MathUtils
 * @static
 */
var ME = module.exports = {};

/**
 * Takes an integer and calculates what the 16 bit float
 * representation of the binary data used to read the integer is.
 * @method f16
 * @param  {Number} h Integer value
 * @return {Number} Float value
 */
ME.f16 = function(h) {
    var s = (h & 0x8000) >> 15;
    var e = (h & 0x7C00) >> 10;
    var f = h & 0x03FF;

    if(e == 0) {
        return (s?-1:1) * Math.pow(2,-14) * (f/Math.pow(2, 10));
    } else if (e == 0x1F) {
        return f?NaN:((s?-1:1)*Infinity);
    }

    return(s?-1:1) * Math.pow(2, e-15) * (1+(f/Math.pow(2, 10)));
}


/**
 * Calculates the number of binary ones present in the data used to
 * generate the input integer.
 * @method popcount
 * @param  {Number} bits Integer
 * @return {Number}      Number of binary ones in the data
 */
ME.popcount = function(bits) {
  var SK5  = 0x55555555,
      SK3  = 0x33333333,
      SKF0 = 0x0f0f0f0f,
      SKFF = 0xff00ff;

  bits -= (bits >> 1) & SK5;
  bits  = (bits & SK3) + ((bits >> 2) & SK3);
  bits  = (bits & SKF0) + ((bits >> 4) & SKF0);
  bits += bits >> 8;

  return (bits + (bits >> 15)) & 63;
}


/**
 * Calculates the 64 bit integer value of two 32 bit integers. Only works up to 
 * the limit of the javascript Number maximum value.
 * @method arr32To64
 * @param  {Number[]} arr     Input integers, length should be 2.
 * @return {Number}      64 bit representation of the two integers.
 */
var base32Max = Math.pow(2,32);
ME.arr32To64 = function(arr){
  /// Re-read as uint64 (still little endian)
  /// Warn: this will not work for ~50+ bit longs cus all JS numbers are 64 bit floats...
  return base32Max*arr[1] + arr[0];
};


/**
 * Sorts an array and returns unique values only.
 * @method  sort_unique
 * @param  {Array} arr_in     Input array
 * @param  {Function} comparator A comparator function between the objects in arr_in
 * @return {Array}            Sorted and unique value.
 */
ME.sort_unique = function(arr_in, comparator) {
  var arr = Array.prototype.sort.call(arr_in, comparator);
   
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
      if(u.hasOwnProperty(arr[i])) {
        continue;
      }
      a.push(arr[i]);
      u[arr[i]] = 1;
  }

  return a;
}
},{}],19:[function(_dereq_,module,exports){
/**
 * Collection of methods used for parsing complex data types from the .dat
 *
 * Most of these methods are only refered by the automatically generated script
 * AllFormats.js
 * 
 * @Class ParserUtils
 * @static
 */

module.exports = {

	/**
	 * Generates a function for reading an array using DataStream
	 * @method  getArrayReader
	 * @param  {Array} structDef DataStream formatted structure definition
	 *                           for the items in the array.
	 * @param  {Number} maxCount The maximum allowed length of the array.
	 *                           Allows any length if left unspecified.
	 * @return {Function}        The generated parsing function.
	 */
	getArrayReader : function(structDef, maxCount){
		return function(ds, struct){
			var ret = [];
			try{

		    	var arr_len = ds.readUint32();
		    	var offset = ds.readUint32(); 
				if(offset == 0){
					return ret;
				}
				var arr_ptr = ds.position -4 + offset;
		    	var pos = ds.position;	   

		    	if(maxCount && arr_len > maxCount){
		    		throw("Array length "+arr_len+" exceeded allowed maximum " + maxCount);
		    	}

		    	var pos = ds.position;   	
		    	
	    	
		    	ds.seek( arr_ptr );
		    	ret = ds.readType (['[]',structDef,arr_len], struct);
		    	ds.seek(pos);
	    	}
	    	catch(e){
	    		console.warn("getArrayReader Failed loading array", e);
	    		console.warn("getArrayReader Failed loading array, structDef", structDef);
	    	}
	    	return ret;
	    }
	},

	/**
	 * Generates a function for reading a refered array using DataStream
	 * @method  getRefArrayReader
	 * @param  {Array} structDef DataStream formatted structure definition
	 *                           for the items in the array.
	 * @return {Function}        The generated parsing function.
	 */
	getRefArrayReader : function(structDef){
		return function(ds, struct){
	    	
	    	var ret_arr=[];

	    	/// Read array of offsets
	    	var arr_len = ds.readUint32();
		    var arr_ptr = ds.position + ds.readUint32();

	    	if(arr_len==0){
	    		return ret_arr;
	    	}

	    	var orgPos = ds.position;

	    	/// Go to pointer and read an array of offsets!
	    	ds.seek(arr_ptr);
	    	var offsets = ds.readInt32Array(arr_len);	


	    	//p_data is after having read array
	    	//var pointer = p_data - 4;
	    	var pointer = orgPos -4;

        	//auto offset  = *reinterpret_cast<const int32*>(pointer);
        	ds.seek(pointer);
        	var offset = ds.readUint32(); /// this should be the same as arr_ptr
        	
        	//pointer     += offset;
        	pointer +=offset;

	    	for(var i=0;i<offsets.length;i++){

	    		
	    		if(offsets[i] != 0){

	    			var pos = pointer + i * 4 + offsets[i];
		    		ds.seek(pos);

		    		try{
		    			ret_arr.push(ds.readStruct(structDef));	
		    		}
		    		catch(e){
		    			//debugger;
		    			ret_arr.push(null);
		    			console.warn("getRefArrayReader could not find refered data at offset",offsets[i] ,e);
		    		}

	    		}
	    		
	    	}/// End for each offset

	    	ds.seek(orgPos);
	    	return ret_arr;


	    }
	},


	/**
	 * Generates a function for reading a 64bit initeger. For now just reads each
	 * 32 bit integer and glues together as a string.
	 * @method  getQWordReader
	 * @return {Function}        The generated parsing function.
	 */
	getQWordReader:function(){
		var base32Max = 4294967296;
		return function(ds, struct){
			return ds.readUint32()+"-"+ds.readUint32();

			var p0= ds.readUint32();
			var p1= ds.readUint32();
			return base32Max*p1 + p0;
		}
		
	},
	
	/**
	 * Generates a function for reading a string of 8 bit chars.
	 * @method  getStringReader
	 * @return {Function}        The generated parsing function.
	 */
	getStringReader : function(){
		return function(ds, struct){
			var ptr = ds.position + ds.readUint32();
	    	var pos = ds.position;	    	

	    	/// Go to pointer
	    	ds.seek( ptr );

	    	var ret = ds.readCString();

			/// Go back to where we were
	    	ds.seek( pos );

	    	return ret;
	    }
	},

	/**
	 * Generates a function for reading a string of 16 bit chars.
	 * @method  getString16Reader
	 * @return {Function}        The generated parsing function.
	 */
	getString16Reader : function(stringOffset){
		return function(ds, struct){
			var ptr = ds.position + ds.readUint32() + (stringOffset ? stringOffset : 0);
	    	var pos = ds.position;	    	

	    	/// Go to pointer
	    	ds.seek( ptr );

	    	var ret = "";
	    	var num;
	    	while(ds.position+2<ds.byteLength && (num = ds.readUint16()) != 0 ){
	    		ret += String.fromCharCode(num);
	    	}
	    	//ds.readCString();

			/// Go back to where we were
	    	ds.seek( pos );

	    	return ret;
	    }
	},


	/**
	 * Generates a function for reading a pointer.
	 * @method getPointerReader
	 * @param  {Array} structDef DataStream formatted structure definition
	 *                           for the item pointed to.
	 * @return {Function}        The generated parsing function.
	 */
	getPointerReader : function(structDef){
		return function(ds, struct){
			var offset = ds.readUint32(); 

			if(offset == 0){
				return {};
			}

			var ptr = ds.position -4 + offset;
	    	var pos = ds.position;	    	

	    	/// Go to pointer
	    	ds.seek( ptr );
	    	
	    	var ret = ds.readStruct(structDef);

			/// Go back to where we were
	    	ds.seek( pos );


	    	return ret;
	    }
	},

	/**
	 * Generates a function for reading a filename/file Id.
	 * @method  getFileNameReader
	 * @return {Function}        The generated parsing function.
	 */
	getFileNameReader : function(){
		return function(ds, struct){
			try{
				var ptr = ds.position + ds.readUint32();
	    		var pos = ds.position;	    	
	    	
		    	/// Go to pointer
		    	ds.seek( ptr );

		    	var fileRef = ds.readStruct([
		    		"m_lowPart", "uint16", //uint16 m_lowPart;
				    "m_highPart", "uint16", //uint16 m_highPart;
				    "m_terminator", "uint16",//uint16 m_terminator;
				]);


				/// Getting the file name...
				/// Both need to be >= than 256 (terminator is 0)
				var ret = 0xFF00 * (fileRef.m_highPart - 0x100) + (fileRef.m_lowPart - 0x100) + 1;
				//var ret = (fileRef.m_highPart - 0x100) * 0xff00 + (fileRef.m_lowPart - 0xff);

				if(ret<0){
					ret = 0;
					//console.log("FR negative", fileRef.m_highPart, fileRef.m_lowPart, fileRef.m_terminator);
					//debugger;
				}

		    	/// Go back to where we were
		    	ds.seek( pos );

		    	return ret;
	    	}
	    	catch(e){
	    		/// Go back to where we were
		    	ds.seek( pos );

		    	return -1;
	    	}	    	
	    }
	}
}
},{}],20:[function(_dereq_,module,exports){
/**
 * Collection of methods used for generating THREE meshes from Guild Wars 2 data formats.
 * @Class RenderUtils
 * @static
 */

var GW2File = _dereq_("../format/file/GW2File");
var MaterialUtils = _dereq_("./MaterialUtils");
var MathUtils = _dereq_("./MathUtils");


//TODO: Remove this local cache!!
var matFiles = {};

/**
 * Object describing the meaning of the bits in fvf integers.
 * @property fvfFormat
 * @private
 * @type {Object}
 */
var fvfFormat = {
	Position              : 0x00000001,   /**< 12 bytes. Position as three 32-bit floats in the order x, y, z. */
	Weights               : 0x00000002,   /**< 4 bytes. Contains bone weights. */
    Group                 : 0x00000004,   /**< 4 bytes. Related to bone weights. */
    Normal                : 0x00000008,   /**< 12 bytes. Normal as three 32-bit floats in the order x, y, z. */
    Color                 : 0x00000010,   /**< 4 bytes. Vertex color. */
    Tangent               : 0x00000020,   /**< 12 bytes. Tangent as three 32-bit floats in the order x, y, z. */
    Bitangent             : 0x00000040,   /**< 12 bytes. Bitangent as three 32-bit floats in the order x, y, z. */
    TangentFrame          : 0x00000080,   /**< 12 bytes. */
    UV32Mask              : 0x0000ff00,   /**< 8 bytes for each set bit. Contains UV-coords as two 32-bit floats in the order u, v. */
    UV16Mask              : 0x00ff0000,   /**< 4 bytes for each set bit. Contains UV-coords as two 16-bit floats in the order u, v. */
    Unknown1              : 0x01000000,   /**< 48 bytes. Unknown data. */
    Unknown2              : 0x02000000,   /**< 4 bytes. Unknown data. */
    Unknown3              : 0x04000000,   /**< 4 bytes. Unknown data. */
    Unknown4              : 0x08000000,   /**< 16 bytes. Unknown data. */
    PositionCompressed    : 0x10000000,   /**< 6 bytes. Position as three 16-bit floats in the order x, y, z. */
    Unknown5              : 0x20000000,   /**< 12 bytes. Unknown data. **/
};

var ME = module.exports = {};

/**
 * Creates a mesh representing a single plane.
 * 
 * @method  renderRect
 * @param  {Object} rect     An object with x1,x2,y1 and y2 properties.
 * @param  {Number} yPos     Vertical position of the rectangle.
 * @param  {THREE.Material} material 	Mesh material to apply.
 * @param  {Number} dy       Mesh height.
 * @return {THREE.Mesh}      The generated mesh.
 */
var renderRect = ME.renderRect = function(rect, yPos, material, dy){
	var dx = rect.x1 - rect.x2;
	var dz = rect.y1 - rect.y2;
	if(!dy)
		dy = 1;

	var cx = (rect.x1 + rect.x2)/2;
	var cz = (rect.y1 + rect.y2)/2;
	var cy = yPos;

	var geometry = new THREE.BoxGeometry( dx, dy, dz );


	material = material || new THREE.MeshBasicMaterial(
		{
		 	color: 0xff0000,
			wireframe:true,
		}
	);
	var plane = new THREE.Mesh( geometry, material );
	plane.overdraw = true;
	
	plane.position.x = cx;
	plane.position.y = cy;
	plane.position.z = cz;

	return plane;
};


/**
 * Load image data into a THREE.Texture from a file within the GW2 .dat file using a LocalReader.
 *
 * @method loadLocalTexture
 * 
 * @param {LocalReader} localReader The LocalReader to load the file contents from.
 * @param {Number} fileId The fileId or baseId of the file to load image data from.
 * @param {Number} mapping What THREE mapping the returned texture will use, not implemented.
 * @param  {Array} defaultColor RGBA array of 4 integers. The default solid color of the mesh, should texture loading fail.
 * @param {Function} onerror Error callback, not implemented.
 * 
 * @return {THREE.Texture} A texture that will be populated by the file data when it is loaded.
 */
var loadLocalTexture = ME.loadLocalTexture = function(localReader, fileId, mapping, defaultColor, onerror){
	return MaterialUtils.loadLocalTexture(localReader, fileId, mapping, defaultColor, onerror);
};

/**
* Returns a THREE representation of the data contained by a GW2 model file.
* The data is read using a LocalReader reference into the GW2 .dat.
*
* @method renderGeomChunk
* 
* @param {LocalReader} localReader The LocalReader to load the file contents from.
* @param {Object} chunk Model GEOM chunk.
* @param {Object} modelDataChunk Model MODL chunk.
* @param {Object} sharedTextures  Value Object for keeping the texture cache.
* @param {boolean} showUnmaterialed If false does not render any models with missing materials.
* 
* @return {Array} Each geometry in the model file represented by a textured THREE.Mesh object
*/
var renderGeomChunk = ME.renderGeomChunk = function(localReader, chunk, modelDataChunk, sharedTextures, showUnmaterialed){

	var rawMeshes = chunk.data.meshes;
	var meshes = [];
	var mats = modelDataChunk.data.permutations[0].materials;
	
	rawMeshes.forEach(function(rawMesh){

		var rawGeom = rawMesh.geometry;
		var fvf = rawGeom.verts.mesh.fvf;//rawGeom.fvf;

		var numVerts = rawGeom.verts.vertexCount;//rawGeom.vertexCount;
		
		var rawVerts = rawGeom.verts.mesh.vertices;//rawGeom.vertices

		var indices = rawGeom.indices.indices;

		var geom = new THREE.BufferGeometry();

		var vertDS =  new DataStream(rawVerts.buffer);

		//Dirty step length for now:
		var stride = rawVerts.length / numVerts;

		//Each vertex
		//DO UV as well
		var vertices = new Float32Array( numVerts * 3 );
		var tangents = null; 
		var normals = null;
		var uvs = []; 
		

		/// Calculate the distance to the first pair of UV data from the
		/// start of the vertex entry
		/// 
		var distToNormals = 
			!!(fvf & fvfFormat.Position) 		* 12 +
			!!(fvf & fvfFormat.Weights) 		*  4 +
			!!(fvf & fvfFormat.Group) 			*  4 ;

		var distToTangent = 
			distToNormals							 +
			!!(fvf & fvfFormat.Normal) 			* 12 +
			!!(fvf & fvfFormat.Color) 			*  4;

		var distToBittangent = 
			distToTangent						 +
			!!(fvf & fvfFormat.Tangent) 		* 12;

		var distToTangentFrame = distToBittangent	 +
			!!(fvf & fvfFormat.Bitangent) 		* 12;

		var distToUV = 
			distToTangentFrame						 +
			!!(fvf & fvfFormat.TangentFrame) 	* 12;

		/// Check if the UV is 32 bit float or 16 bit float.
		var uv32Flag = (fvf & fvfFormat.UV32Mask) >> 8;
		var uv16Flag = (fvf & fvfFormat.UV16Mask) >> 16;
		var isUV32 = !!uv32Flag;
		var hasUV = !!uv16Flag || !!uv32Flag;
		
		/// Popcount (count the number of binary 1's) in the UV flag
		/// to get the number of UV pairs used in this vertex format.
		var masked = isUV32 ? uv32Flag : uv16Flag;
		var numUV = MathUtils.popcount(masked);

		numUV = Math.min(numUV,1.0);


		/// Create typed UV arrays
		if(hasUV){
			for(var i=0; i<numUV; i++){
				uvs[i] = new Float32Array( numVerts * 2 );
			}
		}
		

		
	
		if( !!(fvf & fvfFormat.Normal) ){
			
			//console.log("HAS Normal");

		}
	
		if( !!(fvf & fvfFormat.Tangent) ){
			
			//console.log("HAS Tangent");

		}

		if( !!(fvf & fvfFormat.Bitangent) ){
			
			//console.log("HAS Bitangent");

		}
		if( !!(fvf & fvfFormat.TangentFrame) ){
			
			//console.log("HAS TangentFrame");

		}

		/// Read data from each vertex data entry
		for(var i=0; i<numVerts; i++){

			/// Go to vertex memory position
			vertDS.seek(i*stride);

			/// Read position data
			/// (we just hope all meshes has 32 bit position...)
			var x = vertDS.readFloat32();
			var z = vertDS.readFloat32();
			var y = vertDS.readFloat32();

			/// Write position data, transformed to Tyria3D coordinate system.
			vertices[i*3 + 0] =  x ;//- c.x;
			vertices[i*3 + 1] = -y ;//+ c.y;
			vertices[i*3 + 2] = -z ;//+ c.z;

			/// Read data at UV position
			if(hasUV){
				
				for(var uvIdx=0; uvIdx<numUV; uvIdx++){

					vertDS.seek(
						i*stride + 
						distToUV + 
						uvIdx*(isUV32 ? 8 : 4)
					);

					/// Add one UV pair:
			
					var u,v;
					if(isUV32){
						u = vertDS.readUint32();
						v = vertDS.readUint32();
					}
					else{
						u = MathUtils.f16(vertDS.readUint16());
						v = MathUtils.f16(vertDS.readUint16());				
					}
					
					/// Push to correct UV array
					uvs[uvIdx][i*2 + 0] = u;
					uvs[uvIdx][i*2 + 1] = v;
				}

				
			} /// End if has UV
				

			

		} /// End each vertex

		/// Each face descripbed in indices
		var faces = new Uint16Array( indices.length );		
		for(var i=0; i<indices.length; i+=3){

			// This is ONE face
			faces[i + 0] = indices[i + 0];
			faces[i + 1] = indices[i + 1];
			faces[i + 2] = indices[i + 2];

		}// End each index aka "face"



		/// Add position, index and uv props to buffered geometry
		geom.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
		geom.addAttribute( 'index', new THREE.BufferAttribute( faces, 1) );

		if(normals){
			console.log("adding normals");
			geom.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
			geom.normalizeNormals();
			geom.normalsNeedUpdate = true;
		}
		else{
			/// Calculate normals
			geom.computeVertexNormals();
		}

		
		if(hasUV){

			for(var uvIdx=0; uvIdx<numUV; uvIdx++){

				/// Names are "uv", "uv2", "uv3", ... , "uvN"
				var uvName = "uv" + ( uvIdx > 0 ? uvIdx+1 : "" );
				
				/// Set "custom" attribute uvN
				geom.addAttribute( uvName, new THREE.BufferAttribute( uvs[uvIdx], 2 ) );

				/// Flag for update
				geom.attributes[uvName].needsUpdate = true;	
			}
			

			/// Not needed anymore?
			geom.uvsNeedUpdate = true;	
		}
		

		/// Tell geometry to update its UVs and buffers
		geom.buffersNeedUpdate = true;

		/// DONE READING VERTEX DATA
		

		/// Get material used for this mesh
		var matIdx = rawMesh.materialIndex;
		var mat = mats[matIdx];
		var materialFile = null

		if(mat && matFiles[mat.filename]){
			materialFile = matFiles[mat.filename];			
		}

		var finalMaterial =  MaterialUtils.getMaterial(mat, materialFile, localReader, sharedTextures);	
	

		/// IF we could not find a material abort OR use a wireframe placeholder.
		if(!finalMaterial){
			if(showUnmaterialed){
				finalMaterial = new THREE.MeshLambertMaterial(
					{
						color: 0x5bb1e8,
						wireframe:false,
						side: THREE.DoubleSide
					}
				);
			}
			else{
				return;	
			}			
		}

		

		/// Create the final mesh from the BufferedGeometry and MeshBasicMaterial
		var finalMesh = new THREE.Mesh(geom, finalMaterial);

		
		/// Set material info on the returned mesh
		if(mat){
			finalMesh.materialFlags = mat.materialFlags;
			finalMesh.materialFilename = mat.filename;
		}

		finalMesh.materialName = rawMesh.materialName;

		/// Use materialFilename, materialName, and material.textureFilename in order to build export

		/// Set lod info on the returned mesh
		finalMesh.numLods = rawMesh.geometry.lods.length;
		finalMesh.lodOverride = modelDataChunk.data.lodOverride;

		/// Set flag and UV info on the returned mehs
		finalMesh.flags = rawMesh.flags;
		finalMesh.numUV = numUV;

		/// Add mesh to returned Array
		meshes.push( finalMesh );

	});/// End rawMeshes forEach
	
	return meshes;	
};

/**
 * Loads mesh array from Model file and sends as argument to callback.
 * @method loadMeshFromModelFile
 * @param  {Number} filename Name of the model file to load data from.
 * @param  {Array} solidColor RGBA array of 4 integers
 * @param {LocalReader} localReader The LocalReader to load the file contents from.
 * @param {Object} sharedTextures  Value Object for keeping the texture cache.
 * @param {boolean} showUnmaterialed If false does not render any models with missing materials.
 
 * @param  {Function} callback Fired once all meshes have been loaded.
 * two arguments are passed to the callback function.
 * 
 * The first argument is an Array with each textured THREE.Mesh objects.
 * 
 * The second argument is the bounding spehere of this model file.
 * 
 */

var loadMeshFromModelFile = ME.loadMeshFromModelFile =
function(filename, solidColor, localReader, sharedTextures, showUnmaterialed, callback){

	//Short handles prop attributes
	var finalMeshes = [];

	///Load file
	localReader.loadFile(filename,function(inflatedData){
		try{
			if(!inflatedData){
				throw "Could not find MFT entry for "+filename;
			}

			var ds = new DataStream(inflatedData);

			var modelFile = new GW2File(ds,0);

			//MODL for materials -> textures
			var modelDataChunk = modelFile.getChunk("modl");
		    
		    //GEOM for geometry
		    var geometryDataChunk = modelFile.getChunk("geom");


		    /// Hacky fix for not being able to adjust for position
		    var boundingSphere = modelDataChunk.data.boundingSphere;
		    var bsc = boundingSphere.center;
		    boundingSphere.radius+= Math.sqrt( bsc[0]*bsc[0] + Math.sqrt(bsc[1]*bsc[1] + bsc[2]*bsc[2]) );

		    /// Load all material files
		    var allMats = modelDataChunk.data.permutations[0].materials;

		    function loadMaterialIndex(mIdx, matCallback){
		    	
		    	if(mIdx>=allMats.length){
		    		
		    		matCallback();
		    		return;
		    	}

		    	var mat = allMats[mIdx];

		    	/// Skip if file is loaded
		    	if(matFiles[mat.filename]){
		    		loadMaterialIndex(mIdx+1,matCallback);
		    		return;
		    	}

				localReader.loadFile(mat.filename,
					function(inflatedData){
						if(inflatedData){
							var ds = new DataStream(inflatedData);
							var materialFile = new GW2File(ds,0);
							matFiles[mat.filename] = materialFile;	
						}
						
						loadMaterialIndex(mIdx+1,matCallback);	
						
					}					
				);
		    }



		    loadMaterialIndex(0, function(){

		    	/// Create meshes
			    var meshes = renderGeomChunk(localReader, geometryDataChunk, modelDataChunk, sharedTextures, showUnmaterialed);			    

			    // Build mesh group
			    meshes.forEach(function(mesh){
			    	
			    	/// Material flags
			    	var knownflags = [

			    		/*
							1-5
							Has Tex?	IDK			Light?		Alpha?

							5-8
							0			0	 		IDK		 	Water?

							9-12
							Has Tex?	0			Alpha?		Alpha?

							13
							IDK KEV
			    		*/

			    		0,			//0 0000 0000 0000		Ground / Wall splashes
			    		8,			//0 0000 0000 1000		Broken Khylo roof DDS
			    		9,			//0 0000 0000 1001		Tree leaves

			    		520,		//0 0010 0000 1000		Some LOD modules, fires, smoke, inside of tents (some DSS textures)
			    		

			    		2056,		//0 1000 0000 1000		Solid objects, also broken animations

			    		///Solids here are unhappy, or are they? could be animations etc
			    		2057,		//0 1000 0000 1001		Windmill sails, bushes, trees, but also a statue and a few pieces of wall

			    		2060,		//0 1000 0000 1100		A few solid objects, like wooden barricades, one(!) painting
			    		2061,		//0 1000 0000 1101		A few bushes, two paintings
			    		
			    		
			    		2312,		//0 1001 0000 1000		Opaque Clock tower main walls AND IVY
			    		2316,		//0 1001 0000 1100		Bushes, inner flower walkway a ramp and a box

			    		// Number 10
			    		2568,		//0 1010 0000 1000		Lots of solids; walls, tents also some tent details WITH alpa

			    		//Number 11
			    		2569,		//0 1010 0000 1001		Solids like walls and roofs and appernt non solids like ropes

			    		2572,		//0 1010 0000 1100		Solid wooden beems, lamp posts
			    		2573,		//0 1010 0000 1101		Lamp holders, bushes, fences, apparent non solids
			    		2584,		//0 1010 0001 1000		Fountain Well water

			    		2824,		//0 1011 0000 1000		Windows, sign arrows, cloth roofs (non solids) BUT straw roofs
			    		2828,		//0 1011 0000 1100		A few fence post (non solids)
			    		2840,		//0 1011 0001 1000		Fountain running water + pipe water

			    		4617,		//1 0010 0000 1001		Found nothing
			    		6664		//1 1010 0000 1000		Two groups of solid boxes
			    	];

			    	var alphaMask0 = 0x0001;// + 0x0100 + 0x0200;
			    	var alphaMask1 = 0x0010
			    	var alphaMask2 = 0x0100 + 0x0200;
			    	var alphaMask2b =  0x0200;

			    	var texMask = 0x8 + 0x0800;


			    	if(knownflags.indexOf(mesh.materialFlags)!==11){
			    		//return;
			    	}

			    	// No smoke etc
			    	if( mesh.materialFlags == 520 ){
			    		//return;
			    	}

			    	//Must have texture
			    	if(!showUnmaterialed && !(mesh.materialFlags & texMask) ){
			    		return;
			    	}

					//NO lods
			    	if(mesh.flags == 4 || mesh.flags == 1 || mesh.flags == 0){
			    		//return;
			    	}

					//Add to final colection
					finalMeshes.push(mesh);

			    });/// END FOR EACH meshes

				callback(finalMeshes, boundingSphere);

			    
		    });/// END LOAD MATERIALS CALLBACK


		}
	    catch(e){
	    	console.warn("Failed rendering model "+filename,e);
	    	var mesh = new THREE.Mesh( new THREE.BoxGeometry( 200, 2000, 200 ), new THREE.MeshNormalMaterial() );
	    	mesh.flags = 4;
	    	mesh.materialFlags = 2056;
	    	mesh.lodOverride = [1000000,1000000];
	    	finalMeshes.push(mesh);

	    	/// Send the final meshes to callback function
	    	callback(finalMeshes);
	    }
		    
	});/// END FILE LOADED CALLBACK FUNCTION
};


/**
 * Gets a mesh array from Model file and sends as argument to callback. Uses a cache of meshes in order
 * to never read the same model file twice.
 * @method getMeshesForFilename
 * 
 * @param  {Number} filename The fileId or baseId of the Model file to load
 * @param  {Array} color RGBA array of 4 integers
 * @param  {LocalReader} localReader The LocalReader object used to read data from the GW2 .dat file.
 * @param {Object} sharedMeshes  Value Object for keeping the texture cache.
 * @param {Object} sharedTextures  Value Object for keeping the texture cache.
 * @param {boolean} showUnmaterialed If false does not render any models with missing materials.
 * @param  {Function} callback Fired once all meshes have been loaded.
 * three arguments are passed to the callback function.
 * 
 * The first argument is an Array with each textured THREE.Mesh objects.
 *
 * The second argument is a boolean, true indicates that these meshes were not
 * loaded from the dat file, but retrieved from the run time cache.
 * 
 * The third argument is the bounding spehere of this model file.
 */
var getMeshesForFilename = ME.getMeshesForFilename =
function(filename, color, localReader, sharedMeshes, sharedTextures, showUnmaterialed, callback){

	/// If this file has already been loaded, just return a reference to the meshes.
	/// isCached will be set to true to inform the caller the meshes will probably
	/// have to be cloned in some way.
	if( sharedMeshes[filename] ){
		callback(sharedMeshes[filename].meshes, true, sharedMeshes[filename].boundingSphere)
	}

	/// If this file has never been loaded, load it using loadMeshFromModelFile
	/// the resulting mesh array will be cached within this model's scope.
	else{

		loadMeshFromModelFile(filename, color, localReader, sharedTextures, showUnmaterialed, function(meshes, boundingSphere){

			/// Cache result if any.
			if(meshes){
				sharedMeshes[filename] ={
					meshes : meshes,
					boundingSphere : boundingSphere
				}
			}

			/// Allways fire callback.
			callback(meshes, false, boundingSphere);

		});
	}
}


/**
 * WIP, Tries to find all fileIds refered by a model file.
 * @method  getFilesUsedByModel
 * @param  {Number}   filename    Model file Id
 * @param  {LocalReader}   localReader LocalReader instance to read from
 * @param  {Function} callback   First argument is list of used file IDs
 */
var getFilesUsedByModel = ME.getFilesUsedByModel = function(filename, localReader, callback){
	var fileIds = [filename];

	///Load model file
	localReader.loadFile(filename,function(inflatedData){
		
		try{
			if(!inflatedData){
				throw "Could not find MFT entry for "+filename;
			}

			var ds = new DataStream(inflatedData);
			var modelFile = new GW2File(ds,0);

			//MODL for materials -> textures
			var modelDataChunk = modelFile.getChunk("modl");

			/// Get materials used by model
			var mats = modelDataChunk.data.permutations[0].materials;

			/// Add each material file AND referenced TEXTURES
			mats.forEach(function(mat){

				/// Add material file id
				var matFileName = mat.filename;
				fileIds.push(matFileName);

				/// Add each texture file id
				mat.textures.forEach(function(tex){
					fileIds.push(tex.filename);
				})
				
			});
			
		}
		catch(e){
			console.warn("Could not export any data",e);
		}

		callback(fileIds);
	});

}


},{"../format/file/GW2File":16,"./MaterialUtils":17,"./MathUtils":18}]},{},[4])
(4)
});