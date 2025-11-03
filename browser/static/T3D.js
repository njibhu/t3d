/*
Copyright © 2024 T3D project contributors.

This file is part of the T3D Library.

T3D Library is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

T3D Library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with the T3D Library. If not, see <http://www.gnu.org/licenses/>.
*/

var T3D = (function (t3dParser) {
    'use strict';

    /// Indexed DB versioning
    const DB_VERSION = 4;
    /**
     * This class handles offline storage of the .dat indexes and files metadata
     * @class PersistantStore
     */
    class PersistantStore {
        _dbConnection;
        constructor() {
            // They may be multiple connection request issued at the same time, but it's actually okay since
            // as soon as they are registered, the not-used ones will get garbage collected
            this._dbConnection = undefined;
            this._getConnection();
        }
        /**
         *   Initialize the IndexedDB connection and manages version changes.
         *
         * @async
         * @private
         * @returns {Promise<IDBDatabase>} Promise to the Database connection
         */
        _getConnection() {
            const self = this;
            return new Promise((resolve, reject) => {
                if (self._dbConnection)
                    resolve(self._dbConnection);
                // Let us open our database
                const request = window.indexedDB.open("Tyria3DLibrary", DB_VERSION);
                /// onblocked is fired when the db needs an upgrade but an older version is opened in another tab
                request.onblocked = () => {
                    T3D.Logger.log(T3D.Logger.TYPE_ERROR, "The T3D persistant database cannot be upgraded while the app is opened somewhere else.");
                };
                /// fired when the database needs to be upgraded (or the first time)
                request.onupgradeneeded = (event) => {
                    // Probably bugged
                    //@ts-ignore
                    const db = event.target.result;
                    const currentVersion = event.oldVersion;
                    if (currentVersion < 2) {
                        db.createObjectStore("listings", {
                            autoIncrement: true,
                        });
                    }
                    if (currentVersion < 3) {
                        const storeListing = event.currentTarget.transaction.objectStore("listings");
                        storeListing.createIndex("filename", "filename", { unique: false });
                    }
                };
                request.onsuccess = (event) => {
                    self._dbConnection = event.target.result;
                    //@ts-ignore
                    self.isReady = true;
                    resolve(self._dbConnection);
                };
                request.onerror = () => {
                    T3D.Logger.log(T3D.Logger.TYPE_ERROR, "The T3D persistant database could not be opened.");
                    reject();
                };
            });
        }
        /**
         *   Add or update a listing into the database
         *
         * @async
         * @param {number|undefined} id This ID doesn't really matter, it's just the index of the object in the database, can be undefined
         * @param {Array} listing
         * @param {string} fileName .dat file name, allows to have multiple listings for different .dat files.
         * @param {boolean} isComplete Keep back the information if that was the last update on the current scan or not.
         * @returns {Promise<number>} On success, the number is the object key in the database
         */
        putListing(id, listing, fileName, isComplete) {
            const self = this;
            return new Promise((resolve, reject) => {
                self._getConnection().then((db) => {
                    const store = db.transaction(["listings"], "readwrite").objectStore("listings");
                    const request = id
                        ? store.put({ array: listing, filename: fileName, complete: isComplete }, id)
                        : store.put({ array: listing, name: fileName });
                    request.onsuccess = () => {
                        resolve(request.result);
                    };
                    request.onerror = () => {
                        reject();
                    };
                });
            });
        }
        /**
         * Returns the last valid listing in the database
         *
         * @async
         * @param {string} fileName .dat file name, allows to have multiple listings for different .dat files.
         * @returns {Promise<{array: Array, key: number, complete: boolean}>}
         *      array: the last listing
         *      key: the index of the last listing in the database
         */
        getLastListing(fileName) {
            const self = this;
            return new Promise((resolve) => {
                self._getConnection().then((db) => {
                    const listingsStore = db.transaction(["listings"], "readonly").objectStore("listings").index("filename");
                    listingsStore.openCursor(IDBKeyRange.only(fileName), "prev").onsuccess = (event) => {
                        const cursor = event.target.result;
                        if (!cursor)
                            resolve({ array: [], key: undefined, complete: true });
                        else {
                            resolve({
                                array: cursor.value.array,
                                key: cursor.primaryKey,
                                complete: cursor.value.complete,
                            });
                        }
                    };
                });
            });
        }
    }

    /**
     * Organized thread pool of extractors
     */
    class DataReader {
        settings;
        _workerPool;
        _workerLoad;
        _inflateCallbacks;
        constructor(settings) {
            this.settings = settings;
            this._workerPool = [];
            this._workerLoad = [];
            this._inflateCallbacks = [];
            for (let i = 0; i < settings.workersNb; i++) {
                this._startWorker(settings.workerPath);
            }
        }
        inflate(buffer, size, mftId, isImage, capLength) {
            return new Promise((resolve, reject) => {
                const arrayBuffer = buffer;
                // If no capLength then inflate the whole file
                if (!capLength || capLength < 0) {
                    capLength = 0;
                }
                // Buffer length size check
                if (arrayBuffer.byteLength < 12) {
                    T3D.Logger.log(T3D.Logger.TYPE_WARNING, `not inflating, length is too short (${arrayBuffer.byteLength})`, mftId);
                    reject(new Error("Couldn't inflate " + mftId + " (mftId)"));
                    return;
                }
                // Register the callback
                if (this._inflateCallbacks[mftId]) {
                    this._inflateCallbacks[mftId].push({
                        resolve: resolve,
                        reject: reject,
                    });
                    /// No need to make another call, just wait for callback event to fire.
                    return;
                }
                else {
                    this._inflateCallbacks[mftId] = [{ resolve: resolve, reject: reject }];
                }
                // Add the load to the worker
                const workerId = this._getBestWorkerIndex();
                this._workerLoad[workerId] += 1;
                this._workerPool[workerId].postMessage([mftId, arrayBuffer, isImage === true, capLength]);
            });
        }
        // Initialization function for creating a new worker (thread)
        _startWorker(path) {
            const self = this;
            const worker = new Worker(path);
            const selfWorkerId = this._workerPool.push(worker) - 1;
            if (this._workerLoad.push(0) !== selfWorkerId + 1) {
                throw new Error("WorkerLoad and WorkerPool don't have the same length");
            }
            worker.onmessage = function (message_event) {
                let mftId;
                // Remove load
                self._workerLoad[selfWorkerId] -= 1;
                // If error
                if (typeof message_event.data === "string") {
                    T3D.Logger.log(T3D.Logger.TYPE_WARNING, "Inflater threw an error", message_event.data);
                    mftId = parseInt(message_event.data.split(":")[0]);
                    for (const callback of self._inflateCallbacks[mftId]) {
                        callback.reject();
                    }
                }
                else {
                    mftId = message_event.data[0];
                    // On success
                    if (self._inflateCallbacks[mftId]) {
                        for (const callback of self._inflateCallbacks[mftId]) {
                            const data = message_event.data;
                            // Array buffer, dxtType, imageWidth, imageHeight
                            callback.resolve({
                                buffer: data[1],
                                dxtType: data[2],
                                imageWidth: data[3],
                                imageHeight: data[4],
                            });
                        }
                        // Remove triggered listeners
                        self._inflateCallbacks[mftId] = null;
                    }
                    // Unknown error
                    else {
                        T3D.Logger.log(T3D.Logger.TYPE_ERROR, "Inflater threw an error", message_event.data);
                    }
                }
            };
        }
        // Get the worker with the less load
        _getBestWorkerIndex() {
            return this._workerLoad.indexOf(Math.min(...this._workerLoad));
        }
    }

    // prettier-ignore
    const mapMap = {
        /**
         * @property maps
         * @type {Array.<{name: String, maps: Array.<{fileName: String, name: String}>}>}
         */
        maps: [
            {
                name: "(X0) Core - Zones - Ascalon",
                maps: [
                    { fileName: "196585.data", name: "(City) Black Citadel [MapRegrownCitadel]" },
                    { fileName: "188591.data", name: "(1-15) Plains of Ashford [MapRegrownAshford]" },
                    { fileName: "190490.data", name: "(15-25) Diessa Plateau [MapRegrownRange]" },
                    { fileName: "283574.data", name: "(30-40) Fields of Ruin [MapRegrownHawke]" },
                    { fileName: "282668.data", name: "(40-50) Iron Marches [MapRegrownGullet]" },
                    { fileName: "280025.data", name: "(50-60) Blazeridge Steppes [MapRegrownBrand]" },
                    { fileName: "281313.data", name: "(60-70) Fireheart Rise [MapRegrownFlame]" },
                ],
            },
            {
                name: "(X0) Core - Zones - Kryta",
                maps: [
                    { fileName: "705746.data", name: "(City) Divinity's Reach [MapWintersDayValleyDivinity2013]" },
                    { fileName: "1625212.data", name: "(City) Divinity's Reach [MapValleyDivinityLNY]" },
                    { fileName: "1917775.data", name: "(City) Divinity's Reach [MapValleyDivinityholiday]" },
                    { fileName: "191265.data", name: "(City) Divinity's Reach [MapValleyDivinity]" },
                    { fileName: "1019669.data", name: "(City) Old Lion's Arch [MapValleyArchOrig]" },
                    { fileName: "2690992.data", name: "(City) Old Lion's Arch [MapValleyArchDragon]" },
                    { fileName: "2771534.data", name: "(City) Old Lion's Arch [MapValleyArchProbed]" },
                    { fileName: "1796999.data", name: "(City) Lion's Arch [MapValleyArchKiel]" },
                    { fileName: "1869665.data", name: "(City) Lion's Arch [MapValleyArchKielHalloween]" },
                    { fileName: "191000.data", name: "(City) Lion's Arch [MapValleyArch]" },
                    { fileName: "192711.data", name: "(1-15) Queensdale [MapValleyHill]" },
                    { fileName: "194288.data", name: "(15-25) Kessex Hills [MapValleyWilderness]" },
                    { fileName: "861815.data", name: "(15-25) Kessex Hills [MapValleyWildernessFortSalma]" },
                    { fileName: "2737234.data", name: "(15-25) Kessex Hills [MapValleyWildernessTower]" },
                    { fileName: "2773298.data", name: "(25-35) Gendarran Fields [MapValleySettlementFeb2014]" },
                    { fileName: "289176.data", name: "(25-35) Gendarran Fields [MapValleySettlement]" },
                    { fileName: "287870.data", name: "(35-45) Harathi Hinterlands [MapValleyHeadland]" },
                    { fileName: "286945.data", name: "(45-55) Bloodtide Coast [MapValleyCoast]" },
                    { fileName: "295005.data", name: "(Story Mission) Chantry of Secrets [MapValleyWhisper]" },
                    { fileName: "294938.data", name: "(Story Mission) Claw Island [MapValleyClaw]" },
                ],
            },
            {
                name: "(X0) Core - Zones - Shiverpeak Mountains",
                maps: [
                    { fileName: "2164993.data", name: "(City) Hoelbrak [MapAlpineHallDragonBash]" },
                    { fileName: "197122.data", name: "(City) Hoelbrak [MapAlpineHall]" },
                    { fileName: "187611.data", name: "(1-15) Wayfarer Foothills [MapAlpineSnowline]" },
                    { fileName: "186397.data", name: "(15-25) Snowden Drifts [MapAlpinePowder]" },
                    { fileName: "2469960.data", name: "(25-40) Lornar's Pass [MapAlpineSlopeMarionette]" },
                    { fileName: "277587.data", name: "(25-40) Lornar's Pass [MapAlpineSlope]" },
                    { fileName: "275155.data", name: "(40-50) Dredgehaunt Cliffs [MapAlpineCrest]" },
                    { fileName: "1018612.data", name: "(50-60) Timberline Falls [MapAlpineTimberlandBeforeConcordiaVines]" },
                    { fileName: "278717.data", name: "(50-60) Timberline Falls [MapAlpineTimberland]" },
                    { fileName: "276252.data", name: "(70-80) Frostgorge Sound [MapAlpineGlacier]" },
                ],
            },
            {
                name: "(X0) Core - Zones - Tarnished Coast & Ruins of Orr",
                maps: [
                    { fileName: "1666365.data", name: "(City) Rata Sum [MapWetlandComplexSAB]" },
                    { fileName: "198272.data", name: "(City) Rata Sum [MapWetlandComplex]" },
                    { fileName: "198076.data", name: "(City) The Grove [MapWetlandGrove]" },
                    { fileName: "195149.data", name: "(1-15) Caledon Forest [MapWetlandBayou]" },
                    { fileName: "195493.data", name: "(1-15) Metrica Province [MapWetlandRiverside]" },
                    { fileName: "293307.data", name: "(15-25) Brisban Wildlands [MapWetlandGrotto]" },
                    { fileName: "292254.data", name: "(55-65) Sparkfly Fen [MapWetlandGlade]" },
                    { fileName: "291064.data", name: "(60-70) Mount Maelstrom [MapWetlandCape]" },
                    { fileName: "284829.data", name: "(70-75) Straits of Devastation [MapRisenBeachhead]" },
                    { fileName: "285089.data", name: "(75-80) Malchor's Leap [MapRisenCliff]" },
                    { fileName: "285634.data", name: "(80) Cursed Shore [MapRisenShore]" },
                    { fileName: "295962.data", name: "(Story Mission) The Grove, Cursed Shore [MapWetlandDestiny]" },
                    { fileName: "295179.data", name: "(Story Mission) Cathedral of Hidden Depths [MapRisenBeachheadAbaddon]" },
                ],
            },
            {
                name: "(X0) Core - Dungeons",
                maps: [
                    { fileName: "189364.data", name: "(Dungeon #1) Ascalonian Catacombs [MapRegrownCatacomb]" },
                    { fileName: "287214.data", name: "(Dungeon #2) Caudecus's Manor [MapValleyEstate]" },
                    { fileName: "291284.data", name: "(Dungeon #3s) Twilight Arbor [MapWetlandGarden]" },
                    { fileName: "645968.data", name: "(Dungeon #3e) Twilight Arbor [MapWetlandGardenRepeat]" },
                    { fileName: "275474.data", name: "(Dungeon #4) Sorrow's Embrace [MapAlpineFurnace]" },
                    { fileName: "284039.data", name: "(Dungeon #5) Citadel of Flame [MapRegrownShaman]" },
                    { fileName: "276520.data", name: "(Dungeon #6) Honor of the Waves [MapAlpineIceberg]" },
                    { fileName: "293606.data", name: "(Dungeon #7) Crucible of Eternity [MapWetlandWeapon]" },
                    { fileName: "473765.data", name: "(Dungeon #8s) The Ruined City of Arah [MapRisenDragonStory]" },
                    { fileName: "473930.data", name: "(Dungeon #8e) The Ruined City of Arah [MapRisenDragonRepeat]" },
                ],
            },
            {
                name: "(X0 > LW1) Living World Season 1 - Zones & Strike Missions",
                maps: [
                    { fileName: "520479.data", name: "(Zone #1) Southsun Cove [MapEventValleyLost]" },
                    { fileName: "679089.data", name: "(Special Zone) Tower of Nightmares [MapValleyWildernessKraitTowerInterior]" },
                    { fileName: "2770873.data", name: "(Special Zone) Old Lion's Arch [MapValleyArch2]" },
                    { fileName: "814803.data", name: "(Special Zone) Old Lion's Arch [MapValleyArch3]" },
                    { fileName: "2771205.data", name: "(Strike Mission #1) Old Lion's Court [MapValleyArch2Strike]" },
                    { fileName: "568778.data", name: "(Story Mission) Cragstead [MapAlpineEnclave]" },
                    { fileName: "580061.data", name: "(Story Mission) Molten Facility [MapFlameFrost]" },
                    { fileName: "595722.data", name: "(Story Mission) Aetherblade Retreat [MapValleyArchDungeon]" },
                    { fileName: "672138.data", name: "(Story Mission) Kessex Hills [MapValleyWildernessKraitTowerInstance]" },
                ],
            },
            {
                name: "(X0 > LW2) Living World Season 2 - Zones",
                maps: [
                    { fileName: "861770.data", name: "(Zone #1) Dry Top [MapDryTopE2]" },
                    { fileName: "836211.data", name: "(Zone #1) Dry Top [MapDryTop]" },
                    { fileName: "909361.data", name: "(Zone #2) The Silverwastes [MapSandCastle]" },
                    { fileName: "996202.data", name: "(Zone #2) The Silverwastes [MapSandcastleToFleet]" },
                    { fileName: "908730.data", name: "(Story Mission) Special Collections, Glint's Lair [MapSandGrain]" },
                    { fileName: "922320.data", name: "(Story Mission) Metrica Province [MapWetlandRiversideAsuraFirstContact]" },
                ],
            },
            {
                name: "(X1) Heart of Thorns - Zones",
                maps: [
                    { fileName: "969663.data", name: "(Zone #1) Verdant Brink [MapJungleFleet]" },
                    { fileName: "1263739.data", name: "(Zone #2) Auric Basin [MapJungleGold]" },
                    { fileName: "1264291.data", name: "(Zone #3) Tangled Depths [MapJungleRoots]" },
                    { fileName: "1262310.data", name: "(Zone #4) Dragon's Stand [MapJungleArmy]" },
                    { fileName: "1262460.data", name: "(Story Mission) Mordremoth's Mind [MapJungleArmyNightmare]" },
                ],
            },
            {
                name: "(X1 > LW3) Living World Season 3 - Zones",
                maps: [
                    { fileName: "1472635.data", name: "(Zone #1) Bloodstone Fen [MapJungleBloodstone]" },
                    { fileName: "1498578.data", name: "(Zone #2) Ember Bay [MapFireIsland]" },
                    { fileName: "1605211.data", name: "(Zone #3) Bitterfrost Frontier [MapAlpineTundra]" },
                    { fileName: "1646520.data", name: "(Zone #4) Lake Doric [MapValleyPort]" },
                    { fileName: "1682493.data", name: "(Zone #5) Draconis Mons [MapLavaLamp]" },
                    { fileName: "1735346.data", name: "(Zone #6) Siren's Landing [MapReclaimed]" },
                    { fileName: "1498071.data", name: "(Story Mission) Virtual Theorem Replicator [MapHoloRoom]" },
                    { fileName: "1645474.data", name: "(Story Mission) Caudecus's Manor [MapValleyEstatePort]" },
                    { fileName: "1682763.data", name: "(Story Mission) Heart of the Volcano [MapLavaLampInstance2]" },
                    { fileName: "1734839.data", name: "(Story Mission) White Mantle Hideout [MapS0E6AspectHunt]" },
                    { fileName: "1735440.data", name: "(Story Mission) Shining Blade Headquarters [MapValleyBlade]" },
                ],
            },
            {
                name: "(X2) Path of Fire - Zones",
                maps: [
                    { fileName: "1794574.data", name: "(Zone #1) Crystal Oasis [MapDesertOasis]" },
                    { fileName: "1833034.data", name: "(Zone #2) Desert Highlands [MapDesertHighlands]" },
                    { fileName: "1840103.data", name: "(Zone #3) Elon Riverlands [MapDesertRiver]" },
                    { fileName: "1842533.data", name: "(Zone #4) The Desolation [MapDesertTorment]" },
                    { fileName: "1839188.data", name: "(Zone #5) Domain of Vabbi [MapDesertPalace]" },
                    { fileName: "1840368.data", name: "(Story Mission) The Sanctum [MapDesertSanctum]" },
                    { fileName: "1833726.data", name: "(Story Mission) Kesho, Domain of the Lost, The Rift [MapDesertMists]" },
                ],
            },
            {
                name: "(X2 > LW4) Living World Season 4 - Zones",
                maps: [
                    { fileName: "1902235.data", name: "(Zone #1) Domain of Istan [MapDesertJewel]" },
                    { fileName: "1957526.data", name: "(Zone #2) Sandswept Isles [MapDesertArchipelagoLargeMap]" },
                    { fileName: "2004704.data", name: "(Zone #3) Domain of Kourna [MapDesertMoon]" },
                    { fileName: "2044320.data", name: "(Zone #4) Jahai Bluffs [MapDesertBluffs]" },
                    { fileName: "2092435.data", name: "(Zone #5) Thunderhead Peaks [MapAlpineKeep]" },
                    { fileName: "2146125.data", name: "(Zone #6) Dragonfall [MapDesertDragonfall]" },
                    { fileName: "2124612.data", name: "(Special Zone) Mists Rift [MapBrandedMistfight]" },
                    { fileName: "1903523.data", name: "(Story Mission) Crystal Oasis [MapDesertOasisInstanceS4E1]" },
                    { fileName: "1901428.data", name: "(Story Mission) Fahranur, the First City [MapDesertCity]" },
                    { fileName: "1954984.data", name: "(Story Mission) Inquest Transport Facility [MapDesertArchipelago_Chapter1]" },
                    { fileName: "1955224.data", name: "(Story Mission) Lab Sigma-05 [MapDesertArchipelago_Chapter2]" },
                    { fileName: "1955471.data", name: "(Story Mission) Rata Primus [MapDesertArchipelago_Chapter5]" },
                    { fileName: "1955642.data", name: "(Story Mission) Divinity's Reach [MapDesertArchipelago_Chapter5Boss_1]" },
                    { fileName: "1955915.data", name: "(Story Mission) Mount Maelstrom [MapDesertArchipelago_Chapter5Boss_2]" },
                    { fileName: "1956140.data", name: "(Story Mission) Frostgorge Sound [MapDesertArchipelago_Chapter5Boss_3]" },
                    { fileName: "1956245.data", name: "(Story Mission) ERROR: SIGNAL LOST [MapDesertArchipelago_Chapter5Boss_4]" },
                    { fileName: "2005467.data", name: "(Story Mission) Crystal Oasis [MapDesertOasisS4E3]" },
                    { fileName: "2044502.data", name: "(Story Mission) Mist Chase [MapDesertBluffsCh5]" },
                    { fileName: "2093791.data", name: "(Story Mission) Glint's Trials [MapThe_Begining]" },
                    { fileName: "2092812.data", name: "(Story Mission) The Auditorium [MapAlpineKeepInstance]" },
                    { fileName: "2093450.data", name: "(Story Mission) The Auditorium [MapAlpineKeepInstanceKralk]" },
                    { fileName: "2146312.data", name: "(Story Mission) The Auditorium [MapDesertDragonfallCh01]" },
                    { fileName: "2146346.data", name: "(Story Mission) Dragonflight [MapDesertDragonfallCh02]" },
                    { fileName: "2146510.data", name: "(Story Mission) Kralkatorrik's Heart [MapDesertDragonfallFinalInstance]" },
                    { fileName: "2146376.data", name: "(Story Mission) Sayida's Airship [MapDesertDragonfallEpilogue]" },
                ],
            },
            {
                name: "(X2 > LW5) The Icebrood Saga - Zones & Strike Missions",
                maps: [
                    { fileName: "2251447.data", name: "(Lobby) Eye of the North [MapAlpineMonumentDragon]" },
                    { fileName: "2203371.data", name: "(Zone #1, Strike Mission #1) Grothmar Valley, Shiverpeaks Pass [MapRegrownBlood]" },
                    { fileName: "2251232.data", name: "(Zone #2) Bjora Marches [MapBjoraMarchesCombined]" },
                    { fileName: "2298865.data", name: "(Zone #3) Drizzlewood Coast [MapAlpineCascades]" },
                    { fileName: "2318029.data", name: "(Zone #3) Drizzlewood Coast [MapAlpineCascades02]" },
                    { fileName: "2434582.data", name: "(Special Zone) Dragonstorm [MapDragonFight]" },
                    { fileName: "2224355.data", name: "(Strike Mission #2) Voice of the Fallen and Claw of the Fallen [MapKodanBNB]" },
                    { fileName: "2224381.data", name: "(Strike Mission #3) Fraenir of Jormag [Mapshamanbnb]" },
                    { fileName: "2224406.data", name: "(Strike Mission #4) Boneskinner [MapWendigoBNB]" },
                    { fileName: "2251486.data", name: "(Strike Mission #5) Whisper of Jormag [MapWhisperofJormag]" },
                    { fileName: "2272807.data", name: "(Strike Mission #6) Forging Steel [MapAlpineClimb]" },
                    { fileName: "2299088.data", name: "(Strike Mission #7) Cold War [MapAlpineCascadesStrike]" },
                    { fileName: "2249817.data", name: "(Story Mission) Voice in the Deep [MapAlpineMarchesEp2FinalInstance]" },
                    { fileName: "2273128.data", name: "(Story Mission) Darkrime Delves [MapAlpineDelves]" },
                    { fileName: "2369582.data", name: "(Story Mission) Rata Sum [MapWetlandComplexE5Story]" },
                    { fileName: "2414140.data", name: "(Story Mission) Heart of the Volcano [MapLavaLampInstance_S5E5]" },
                    { fileName: "2434675.data", name: "(Story Mission) Dragonstorm [MapDragonFightStoryInstance]" },
                ],
            },
            {
                name: "(X2 > LW5) The Icebrood Saga - Dragon Response Missions",
                maps: [
                    { fileName: "2370614.data", name: "(DRM #1) Metrica Province [MapWetlandRiversideS5E5]" },
                    { fileName: "2370017.data", name: "(DRM #2) Brisban Wildlands [MapWetlandGrottoS5E5]" },
                    { fileName: "2369116.data", name: "(DRM #3) Gendarran Fields [MapValleySettlementS5E5]" },
                    { fileName: "2366776.data", name: "(DRM #4) Fields of Ruin [MapRegrownHawkeS5E5]" },
                    { fileName: "2364032.data", name: "(DRM #5) Thunderhead Peaks [MapAlpineKeepS5E5]" },
                    { fileName: "2368400.data", name: "(DRM #6) Lake Doric [MapValleyPortS5E5]" },
                    { fileName: "2365787.data", name: "(DRM #7) Snowden Drifts [MapAlpinePowderS5E5]" },
                    { fileName: "2369398.data", name: "(DRM #8) Caledon Forest [MapWetlandBayouS5E5]" },
                    { fileName: "2367211.data", name: "(DRM #9) Bloodtide Coast [MapValleyCoastS5E5]" },
                    { fileName: "2366368.data", name: "(DRM #10) Fireheart Rise [MapRegrownFlameS5E5]" },
                ],
            },
            {
                name: "(X3) End of Dragons - Zones & Strike Missions",
                maps: [
                    { fileName: "2669133.data", name: "(Lounge) Thousand Seas Pavilion [MapMTXLounge]" },
                    { fileName: "2640407.data", name: "(Lobby) Arborstone [MapCanthaArborstone]" },
                    { fileName: "2647516.data", name: "(Zone #1) Seitung Province [MapCanthaShingJea]" },
                    { fileName: "2645519.data", name: "(Zone #2) New Kaineng City [MapCanthaKaineng]" },
                    { fileName: "2641850.data", name: "(Zone #3) The Echovald Wilds [MapCanthaEchovald]" },
                    { fileName: "2644196.data", name: "(Zone #4) Dragon's End [MapCanthaJadeSea]" },
                    { fileName: "3012212.data", name: "(Zone #5) Gyala Delve [MapCanthaDeep]" },
                    { fileName: "3043972.data", name: "(Zone #5) Gyala Delve [MapCanthaDeepQR2]" },
                    { fileName: "2649141.data", name: "(Strike Mission #1) Aetherblade Hideout [MapMaiTrin]" },
                    { fileName: "2642769.data", name: "(Strike Mission #2) Xunlai Jade Junkyard [MapCanthaEchovaldStrikeMissions]" },
                    { fileName: "2646104.data", name: "(Strike Mission #3) Kaineng Overlook [MapCanthaKainengMinSecStrike]" },
                    { fileName: "2702043.data", name: "(Strike Mission #4) Harvest Temple [MapCanthaJadeSeaStrikeMission]" },
                    { fileName: "2639738.data", name: "(Story Mission) Lornar's Pass [MapAlpineSlopeX03]" },
                    { fileName: "2639795.data", name: "(Story Mission) Aetherblade Armada [MapCanthaArmada]" },
                    { fileName: "2645805.data", name: "(Story Mission) Yong Reactor [MapCanthaKainengCH5Reactor]" },
                    { fileName: "3100195.data", name: "(Story Mission) Seitung Province [MapCanthaShingJeaExpac4AureneInstance]" },
                ],
            },
            {
                name: "(X4) Secrets of the Obscure - Zones & Strike Missions",
                maps: [
                    { fileName: "3135660.data", name: "(Lobby) The Wizard's Tower [MapSkyTower]" },
                    { fileName: "3134712.data", name: "(Zone #1) Skywatch Archipelago [MapSkyRise]" },
                    { fileName: "3135285.data", name: "(Zone #2) Amnytas [MapSkySpire]" },
                    { fileName: "3194054.data", name: "(Zone #3) Inner Nayos [MapDream]" },
                    { fileName: "3264516.data", name: "(Zone #3) Inner Nayos [MapDream2]" },
                    { fileName: "3316196.data", name: "(Zone #3) Inner Nayos [MapDream3]" },
                    { fileName: "3134778.data", name: "(Strike Mission #1) Cosmic Observatory [MapSkyRiseStrikeObservatory]" },
                    { fileName: "3135805.data", name: "(Strike Mission #2) Temple of Febe [MapCerusArena]" },
                    { fileName: "3136072.data", name: "(Story Mission) Gendarran Fields [MapValleySettlementExpac4StealthMission]" },
                ],
            },
            {
                name: "(X5) Janthir Wilds - Zones",
                maps: [
                    { fileName: "3414888.data", name: "(Zone #1) Lowland Shore [MapWildDelta]" },
                    { fileName: "3415804.data", name: "(Zone #2) Janthir Syntri [MapWildIsland]" },
                    { fileName: "3598092.data", name: "(Zone #3) Mistburned Barrens [MapWildRuins]" },
                    { fileName: "3638621.data", name: "(Zone #4) Bava Nisos [MapWildMaw]" },
                    { fileName: "3406364.data", name: "(Story Mission) Lion's Arch [MapValleyArchEx5Intro]" },
                ],
            },
            {
                name: "(X6) Visions of Eternity - Zones",
                maps: [
                    { fileName: "3719751.data", name: "(Zone #1) Shipwreck Strand [MapMagicCoast]" },
                    { fileName: "3721199.data", name: "(Zone #2) Starlit Weald [MapMagicForest]" },
                    { fileName: "3719841.data", name: "(Story Mission) The Unending Ocean [MapMagicCoast_Story01Ocean]" },
                ],
            },
            {
                name: "Guild Halls & Homesteads",
                maps: [
                    { fileName: "1256064.data", name: "(Guild Hall #1) Lost Precipice [MapGuildHeights]" },
                    { fileName: "1255378.data", name: "(Guild Hall #2) Gilded Hollow [MapGuildCavern]" },
                    { fileName: "1843274.data", name: "(Guild Hall #3) Windswept Haven [MapGuildPyramid]" },
                    { fileName: "2648082.data", name: "(Guild Hall #4) Isle of Reflection [MapGuildIsle]" },
                    { fileName: "3399578.data", name: "(Homestead #1) Hearth's Glow [MapHomesteadBoreal]" },
                    { fileName: "3718508.data", name: "(Homestead #2) Comosus Isle [MapMagic]" },
                ],
            },
            {
                name: "Fractals of the Mists",
                maps: [
                    { fileName: "1733961.data", name: "(Lounge) Mistlock Sanctuary [MapInfiniteCosmicVIPLounge]" },
                    { fileName: "1498016.data", name: "(FotM #0) Mistlock Observatory [MapInfiniteHub]" },
                    { fileName: "519839.data", name: "(FotM #0-9) Fractals of the Mists [MapInfiniteIslands]" },
                    { fileName: "2187042.data", name: "(FotM #1) Aquatic Ruins [MapInfiniteUnderwater]" },
                    { fileName: "1426653.data", name: "(FotM #2) Cliffside [MapInfiniteCliffside]" },
                    { fileName: "1472382.data", name: "(FotM #3) Snowblind [MapInfiniteSnowblind]" },
                    { fileName: "1472406.data", name: "(FotM #4) Swampland [MapInfiniteSwamp]" },
                    { fileName: "1905739.data", name: "(FotM #10-11) Molten Furnace, Molten Boss [MapFlameFrostFractalExtended]" },
                    { fileName: "1498798.data", name: "(FotM #12-13) Aetherblade, Captain Mai Trin Boss [MapValleyArchDungeonUpdated02]" },
                    { fileName: "697450.data", name: "(FotM #14) Thaumanova Reactor [MapInfiniteReactor]" },
                    { fileName: "1472361.data", name: "(FotM #15) Chaos Isles [MapInfiniteChaos]" },
                    { fileName: "1605344.data", name: "(FotM #16) Nightmare [MapInfiniteToxic]" },
                    { fileName: "1733857.data", name: "(FotM #17) Shattered Observatory [MapInfiniteCosmic]" },
                    { fileName: "1905889.data", name: "(FotM #18) Twilight Oasis [MapInfiniteMordant]" },
                    { fileName: "2005713.data", name: "(FotM #19) Deepstone [MapInfiniteLabyrinth]" },
                    { fileName: "2094098.data", name: "(FotM #20) Siren's Reef [MapInfiniteCove]" },
                    { fileName: "2333932.data", name: "(FotM #21) Sunqua Peak [MapFractalElementalIslands]" },
                    { fileName: "3100947.data", name: "(FotM #22) Silent Surf [MapLuxonFractal]" },
                    { fileName: "3317434.data", name: "(FotM #23) Lonely Tower [MapSkyRiseFractalEparch]" },
                    { fileName: "3635285.data", name: "(FotM #24) Kinfall [MapWildBjora]" },
                ],
            },
            {
                name: "Raids & Convergences",
                maps: [
                    { fileName: "1427048.data", name: "(Lobby, Raid #0) Lion's Arch Aerodrome, Special Forces Training Area [MapValleyArchRaidLobby]" },
                    { fileName: "1151420.data", name: "(Raid #1) Spirit Vale [MapRaidJungle01]" },
                    { fileName: "1383309.data", name: "(Raid #2) Salvation Pass [MapE1R2]" },
                    { fileName: "1454070.data", name: "(Raid #3) Stronghold of the Faithful [MapE1R3]" },
                    { fileName: "1645215.data", name: "(Raid #4) Bastion of the Penitent [MapE1R4]" },
                    { fileName: "1906329.data", name: "(Raid #5) Hall of Chains [MapE1R5]" },
                    { fileName: "2045250.data", name: "(Raid #6) Mythwright Gambit [MapE2R2]" },
                    { fileName: "2157962.data", name: "(Raid #7) The Key of Ahdashim [MapE2R3]" },
                    { fileName: "3193573.data", name: "(Convergence #1) Outer Nayos [MapBountyIslands]" },
                    { fileName: "3559095.data", name: "(Raid #8, Convergence #2) Mount Balrior [MapWildTitan]" },
                ],
            },
            {
                name: "Player vs. Player",
                maps: [
                    { fileName: "197249.data", name: "(Lobby) Heart of the Mists [MapPvPLobby]" },
                    { fileName: "1713939.data", name: "(Lobby) Heart of the Mists [Mappvplobbyrework_cats]" },
                    { fileName: "1734729.data", name: "(Lobby) Heart of the Mists [Mappvplobbyrework_catsMoreRoom]" },
                    { fileName: "2129692.data", name: "(Lobby) Heart of the Mists [MapPvPLobby1016rework]" },
                    { fileName: "197402.data", name: "(Conquest #1) Battle of Kyhlo [MapPvPConquestSiege]" },
                    { fileName: "1644708.data", name: "(Conquest #1) Battle of Khylo [MapPvPConquestSiege2]" },
                    { fileName: "1666233.data", name: "(Conquest #1) Battle of Khylo [MapPvPConquestSiege3]" },
                    { fileName: "197545.data", name: "(Conquest #2) Forest of Niflhel [MapPvPConquestForest]" },
                    { fileName: "376916.data", name: "(Conquest #3) Legacy of the Foefire [MapPvPConquestGuild]" },
                    { fileName: "467374.data", name: "(Conquest #4) Raid on the Capricorn [MapPvPConquestCoast]" },
                    { fileName: "520609.data", name: "(Conquest #5) Temple of the Silent Storm [MapPvPConquestDojo]" },
                    { fileName: "1473061.data", name: "(Conquest #6) Spirit Watch [MapPVPConquestSpirit2]" },
                    { fileName: "1426736.data", name: "(Conquest #7) Skyhammer [MapPvPConquestCannonCapture]" },
                    { fileName: "1934470.data", name: "(Conquest #7) Skyhammer [MapPvPConquestCannonCapture2]" },
                    { fileName: "1472979.data", name: "(Conquest #8) Revenge of the Capricorn [MapPvPConquestCoastReturn]" },
                    { fileName: "1644624.data", name: "(Conquest #8) Revenge of the Capricorn [MapPvPConquestCoastReturnshrunk]" },
                    { fileName: "1498174.data", name: "(Conquest #9) Eternal Coliseum [MapPVPConquestArenaGods2]" },
                    { fileName: "1704155.data", name: "(Conquest #9) Eternal Coliseum [MapPVPConquestArenaGods4]" },
                    { fileName: "2128880.data", name: "(Conquest #9) Eternal Coliseum [MapPVPConquestArenaGodsTheme]" },
                    { fileName: "2065760.data", name: "(Conquest #10) Djinn's Dominion [Mapdesertconq]" },
                    { fileName: "2128938.data", name: "(Conquest #10) Djinn's Dominion [MapDesertConqWallMid]" },
                    { fileName: "2175965.data", name: "(Conquest #10) Djinn's Dominion [MapDesertConqWallMid2]" },
                    { fileName: "791564.data", name: "(Murderball #1, Team Deathmatch #2) Courtyard [MapDMCourtyard]" },
                    { fileName: "1713054.data", name: "(Murderball #1, Team Deathmatch #2) Courtyard [MapDMCourtyard2]" },
                    { fileName: "870987.data", name: "(Stronghold #1) Battle of Champion's Dusk [MapPvPStrongholdCity]" },
                    { fileName: "871093.data", name: "(Stronghold #1) Battle of Champion's Dusk [MapPvPStrongholdCityMercs]" },
                    { fileName: "1712986.data", name: "(Team Deathmatch #1) Hall of the Mists [MapHallway2v2]" },
                    { fileName: "1712945.data", name: "(Team Deathmatch #3) Asura Arena [Mapasura2v2]" },
                    { fileName: "2187125.data", name: "(Team Deathmatch #4) Auric Span [MapJungle2v2]" },
                    { fileName: "3424867.data", name: "(Push #0) Push Prototype—BETA [MapPVPConquestNornia]" },
                    { fileName: "3621310.data", name: "(Push #1) Sunjiang Backstreets [MapPushCartKaineng]" },
                ],
            },
            {
                name: "World vs. World",
                maps: [
                    { fileName: "2113077.data", name: "(Lounge) Armistice Bastion [MapWvwLounge]" },
                    { fileName: "195806.data", name: "(Mist War #1) Eternal Battlegrounds [MapWvWCenter]" },
                    { fileName: "1798709.data", name: "(Mist War #1) Eternal Battlegrounds [MapWvWCenterGliding]" },
                    { fileName: "1885693.data", name: "(Mist War #1) Eternal Battlegrounds [MapWvWCenter4]" },
                    { fileName: "2263889.data", name: "(Mist War #1) Eternal Battlegrounds [MapWvWCenterWallChange10_19]" },
                    { fileName: "641501.data", name: "(Mist War #2) Alpine Borderlands [MapWvWRedHomeLake01]" },
                    { fileName: "1799855.data", name: "(Mist War #2) Alpine Borderlands [MapWvWRedHomeLake01gliding]" },
                    { fileName: "1918037.data", name: "(Mist War #2) Alpine Borderlands [MapWvWRedHomeLake02]" },
                    { fileName: "1427803.data", name: "(Mist War #3) Desert Borderlands [MapWvWDesertHomeUpdate]" },
                    { fileName: "1647236.data", name: "(Mist War #3) Desert Borderlands [MapWvWDesertHomeUpdateMIDrework]" },
                    { fileName: "1799442.data", name: "(Mist War #3) Desert Borderlands [MapWvWDesertHome4]" },
                    { fileName: "2112733.data", name: "(Mist War #3) Desert Borderlands [MapWvWDesertHome]" },
                    { fileName: "736241.data", name: "(EotM #1) Edge of the Mists [MapWvWIslands]" },
                ],
            },
            {
                name: "Festivals & Activities - Super Adventure Festival",
                maps: [
                    { fileName: "636133.data", name: "(Lobby) Hub [MapSABHub]" },
                    { fileName: "635555.data", name: "(SAB #1) World 1 [MapSABWorld1]" },
                    { fileName: "635960.data", name: "(SAB #2) World 2 [MapSABWorld2]" },
                    { fileName: "3024941.data", name: "(SAB #3) World 3 [MapSABWorld3-0]" },
                    { fileName: "3281398.data", name: "(SAB #3) World 3 [MapSABWorld3-1]" },
                ],
            },
            {
                name: "Festivals & Activities - Festival of the Four Winds",
                maps: [
                    { fileName: "606255.data", name: "(Special Zone) Labyrinthine Cliffs [MapEvenKiteCity]" },
                    { fileName: "2711089.data", name: "(Special Zone) The Crown Pavilion [MapJubileeArena-2]" },
                    { fileName: "622681.data", name: "(Special Zone) The Crown Pavilion [MapJubileeArena]" },
                    { fileName: "605983.data", name: "(Activity) Sanctum Sprint [MapEvenTriathlonKiteCity]" },
                    { fileName: "617120.data", name: "(Activity) Aspect Arena [MapEvenPVPKiteCity]" },
                ],
            },
            {
                name: "Festivals & Activities - Shadow of the Mad King",
                maps: [
                    { fileName: "506670.data", name: "(Special Zone) Mad King's Labyrinth [MapMadKingMaze]" },
                    { fileName: "662436.data", name: "(Special Zone) Mad King's Labyrinth [MapMadKingMaze2013]" },
                    { fileName: "2499169.data", name: "(Special Zone) Mad King's Labyrinth [MapMadKingMaze2021]" },
                    { fileName: "506539.data", name: "(Special Zone) Mad King's Raceway [MapMadKingField]" },
                    { fileName: "506592.data", name: "(Dungeon #1) Ascent to Madness [MapMadKingBoss]" },
                    { fileName: "506739.data", name: "(Activity) Mad King's Clock Tower [MapMadKingTower]" },
                ],
            },
            {
                name: "Festivals & Activities - A Very Merry Wintersday",
                maps: [
                    { fileName: "529896.data", name: "(Dungeon #1) Tixx's Infinirarium [MapWintersdayAirship]" },
                    { fileName: "2076921.data", name: "(Strike Mission #1) Secret Lair of the Snowmen [MapFrozenTyrant]" },
                    { fileName: "529718.data", name: "(Activity) Snowball Mayhem, Bell Choir Ensemble [MapWintersdaySnowGlobe]" },
                    { fileName: "529945.data", name: "(Activity) Winter Wonderland [MapWintersdayFrostyland]" },
                ],
            },
            {
                name: "Festivals & Activities - Other",
                maps: [
                    { fileName: "595582.data", name: "(Activity) Dragon Ball Arena [MapDragonBall]" },
                    { fileName: "606030.data", name: "(Activity) Basket Brawl [MapBasketBrawl]" },
                ],
            },
            {
                name: "Miscellaneous",
                maps: [
                    { fileName: "295282.data", name: "(Miscellaneous) Eye of the North [MapAlpineMonument]" },
                    { fileName: "3560860.data", name: "(Miscellaneous) Mists Vault [MapWizardsVault]" },
                ],
            },
            {
                name: "Unimplemented",
                maps: [
                    { fileName: "184799.data", name: "[MapDummy]" },
                    { fileName: "193081.data", name: "Lake Doric [MapValleyReach]" },
                    { fileName: "197562.data", name: "Preparing for PvP [MapPvPBlackBox]" },
                    { fileName: "875614.data", name: "Tutelage Isles [MapTutorialChina]" },
                    { fileName: "969964.data", name: "Verdant Brink [MapRootsAfterShip]" },
                    { fileName: "1255516.data", name: "Guild Coliseum [MapGuildColiseum]" },
                    { fileName: "1498193.data", name: "Conquest Prototype [MapPvPConquestTemp]" },
                    { fileName: "1513556.data", name: "Competitive PvP Infection 2 (Valley) [MapPvPInfection2]" },
                    { fileName: "1513607.data", name: "Conquest Vine [MapPvPConquestTest_01]" },
                    { fileName: "1513620.data", name: "Conquest Islands [MapPvPConquestTest_02]" },
                    { fileName: "1513675.data", name: "Conquest Mocap [MapPvPConquestTest_04]" },
                    { fileName: "1956299.data", name: "[MapDesertArchipelago_Instance]" },
                    { fileName: "2204239.data", name: "Grothmar Valley [MapRegrownBloodCinematic]" },
                    { fileName: "2224545.data", name: "Jaga Moraine [MapAlpinemoraine]" },
                    { fileName: "2257438.data", name: "Test [MapTest]" },
                    { fileName: "2649061.data", name: "Grothmar Valley [MapRegrownBlood_CinematicEOD]" },
                    { fileName: "2644298.data", name: "[MapJadeSeaWhirlpool]" },
                    { fileName: "2689589.data", name: "Desert Highlands [MapDesertHighlandsE3]" },
                    { fileName: "3323396.data", name: "[MapAlpineMoraineFinalInstance]" },
                ],
            },
        ],
    };

    /**
     * Parse the beginning of a file to find its type
     *
     * @memberof FileTypes
     */
    function getFileType(buffer) {
        const dataView = new DataView(buffer);
        const first4 = String.fromCharCode(dataView.getUint8(0), dataView.getUint8(1), dataView.getUint8(2), dataView.getUint8(3));
        // Parse textures
        switch (first4) {
            case "ATEC":
                return "TEXTURE_ATEC";
            case "ATEP":
                return "TEXTURE_ATEP";
            case "ATET":
                return "TEXTURE_ATET";
            case "ATEU":
                return "TEXTURE_ATEU";
            case "ATEX":
                return "TEXTURE_ATEX";
            case "ATTX":
                return "TEXTURE_ATTX";
        }
        if (first4.indexOf("DDS") === 0)
            return "TEXTURE_DDS";
        if (first4.indexOf("PNG") === 1)
            return "TEXTURE_PNG";
        if (first4.indexOf("RIFF") === 0)
            return "TEXTURE_RIFF";
        if (first4.indexOf("YUI") === 0)
            return "TEXT_YUI";
        // PackFiles
        if (first4.indexOf("PF") === 0) {
            const file = new t3dParser.FileParser(buffer, true); /// true for "plz no load chunkz"
            return "PF_" + file.header.type;
        }
        // Binaries
        if (first4.indexOf("MZ") === 0)
            return "BINARIES";
        // Strings
        if (first4.indexOf("strs") === 0)
            return "STRINGS";
        // Raw asnd chunk (without pack file)
        if (first4.indexOf("asnd") === 0)
            return "CHUNK_ASND";
        // TODO: parse all buffers and if all bytes are valid unicode symbols then
        // return TEXT_UNKNOWN;
        // Unknown
        return "UNKNOWN";
    }

    var FileTypes = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getFileType: getFileType
    });

    /**
     * A statefull class that handles reading and inflating data from a local GW2 dat file.
     */
    class LocalReader {
        settings;
        dataReader;
        persistantStore;
        file;
        indexTable;
        fileMetaTable;
        persistantData = [];
        _fileTypeCache;
        constructor(settings) {
            this.settings = settings;
            this.dataReader = new DataReader(settings);
            this.file = undefined;
            this.indexTable = [];
            this.fileMetaTable = [];
            if (settings.noIndexedDB !== false) {
                this.persistantStore = new PersistantStore();
            }
        }
        /**
         *   Asynchronously loads the archive by parsing its file index and header.
         */
        async openArchive(file) {
            const { metaTable, indexTable } = await t3dParser.ArchiveParser.readArchive(file);
            this.fileMetaTable = metaTable;
            this.indexTable = indexTable;
            this.file = file;
        }
        /**
         *   Gets MFT index by baseId
         */
        getFileIndex(baseId) {
            return this.indexTable[baseId];
        }
        /**
         *   Returns the metadata of a file stored in the archive
         */
        getFileMeta(mftId) {
            return this.fileMetaTable[mftId];
        }
        /**
         *   Fetch a file and uncompress it if needed / required.
         */
        async readFile(mftId, isImage, raw, fileLength, extractLength) {
            if (!this.file)
                throw new Error("No file loaded");
            //let buffer, dxtType, imageWidth, imageHeight;
            const meta = this.getFileMeta(mftId);
            if (!meta)
                throw new Error("Unexistant file");
            // Slice up the data
            const buffer = await t3dParser.ParsingUtils.sliceFile(this.file, Number(meta.offset), fileLength || meta.size);
            // If needed we decompress, if not we keep raw
            if (raw || meta.compressed) {
                let data = {
                    buffer: undefined,
                    dxtType: undefined,
                    imageWidth: undefined,
                    imageHeight: undefined,
                };
                await this.dataReader
                    .inflate(buffer, buffer.byteLength, mftId, isImage, extractLength || 0)
                    .then((result) => {
                    data = result;
                })
                    .catch(() => {
                    data = {
                        buffer: undefined,
                        dxtType: undefined,
                        imageWidth: undefined,
                        imageHeight: undefined,
                    };
                });
                return data;
            }
            else
                return { buffer };
        }
        /**
         *   Scans asynchronously the types of all the files listed in the archive.
         *   Uses persistant store to cache and speed up a rescan.
         */
        async readFileList(
        // This is a way for platforms not supporting indexDB to provide their own persistant storage.
        oldFileList) {
            if (!this.file)
                throw new Error("No file loaded");
            const self = this;
            let persistantList = oldFileList || [];
            let persistantId;
            // Load previously saved data
            if (this.persistantStore) {
                const lastListing = await this.persistantStore.getLastListing(this.file.name);
                persistantList = lastListing.array;
                // If the last scan was not completed then we will just update it..
                if (!lastListing.complete) {
                    persistantId = lastListing.key;
                }
            }
            // Create a list of all the baseIds we need to inspect
            const iterateList = Object.keys(self.indexTable).map((i) => Number(i));
            for (const index in persistantList) {
                if (!(index in self.indexTable))
                    iterateList.push(index);
            }
            // Spawn the decompression tasks
            const taskArray = [];
            for (let i = 0; i < 1; i++) {
                taskArray[i] = Promise.resolve({ task: i });
            }
            // Helps us to know when we need to update the persistant store
            let persistantNeedsUpdate = false;
            // Iterate through the array
            for (const index in iterateList) {
                const baseId = iterateList[index];
                // First use a synchronous function to know if we need to scan the file
                const result = this._needsScan(baseId, persistantList);
                if (result.scan === true) {
                    const taskId = (await Promise.race(taskArray)).task;
                    taskArray[taskId] = this._readFileType(baseId).then((scanResult) => {
                        // Put the result into our persistant storage
                        persistantList[baseId] = {
                            baseId: baseId,
                            size: scanResult.size,
                            crc: scanResult.crc,
                            fileType: scanResult.fileType,
                        };
                        return { task: taskId };
                    });
                }
                if (result.change === "removed") {
                    // Update the persistant storage
                    delete persistantList[baseId];
                }
                // Handle persistant storage update
                if (result.change !== "none")
                    persistantNeedsUpdate = true;
                // Tasks to do only every %
                if (index % Math.floor(iterateList.length / 100) === 0) {
                    // Print progress
                    T3D.Logger.log(T3D.Logger.TYPE_PROGRESS, "Finding types", index / Math.floor(iterateList.length / 100));
                    // Update the persistant storage if needed
                    if (self.persistantStore && persistantNeedsUpdate) {
                        persistantNeedsUpdate = false;
                        self.persistantStore
                            .putListing(persistantId, persistantList, self.file.name, false)
                            .then((res) => (persistantId = res));
                    }
                }
            }
            await Promise.all(taskArray).then(() => {
                // Finally update the listing as complete
                if (self.persistantStore) {
                    self.persistantStore.putListing(persistantId, persistantList, self.file.name, true);
                }
            });
            this.persistantData = persistantList;
            return this.getFileList();
        }
        /**
         * Cheap version of the readFileList which will only scan files registered in the mapFileList
         * This helps us being sure that we only return files that contain a mapc chunk when using
         * the getMapList function
         */
        async readMapList() {
            const fileList = mapMap.maps.reduce((maps, category) => {
                return maps.concat(category.maps.map((entry) => entry.fileName));
            }, []);
            const temporaryStore = [];
            for (const fileName of fileList) {
                const baseId = fileName.split(".data")[0];
                if (this.indexTable[baseId]) {
                    const scanResult = await this._readFileType(baseId);
                    temporaryStore[baseId] = {
                        baseId: Number(baseId),
                        size: scanResult.size,
                        crc: scanResult.crc,
                        fileType: scanResult.fileType,
                    };
                }
            }
            // Fill the store without saving it to disk
            this.persistantData = temporaryStore;
        }
        /**
         *   Returns a list of all the maps with their name and category.
         *   Uncategorized maps are available only if readFileList have been used before.
         */
        async getMapList() {
            const self = this;
            const mapArray = [];
            // If the archive hasn't been completely scanned we do a partial scan for the map files.
            // It should be fast
            if (this.persistantData.length === 0) {
                await this.readMapList();
            }
            // Filter the maps out of all our files
            const reversedIndex = this.getReverseIndex();
            const maps = this.persistantData
                .filter((file) => file.fileType === "PF_mapc")
                .filter((id) => id.baseId === reversedIndex[self.getFileIndex(id.baseId)][0]);
            for (const map of maps) {
                let found = false;
                // Try to see if we already have some informations on this map
                for (const category of mapMap.maps) {
                    const fileMap = category.maps.find((item) => Number(item.fileName.split(".data")[0]) === map.baseId);
                    if (fileMap) {
                        mapArray.push({
                            name: fileMap.name,
                            category: category.name,
                            baseId: map.baseId,
                            categoryIndex: mapMap.maps.indexOf(category),
                        });
                        found = true;
                        break;
                    }
                }
                // If not we register it as Uncategorized
                if (!found) {
                    mapArray.push({
                        name: map.baseId.toString(),
                        category: "Uncategorized",
                        baseId: map.baseId,
                        categoryIndex: 99999,
                    });
                }
            }
            mapArray.sort((a, b) => a.category.localeCompare(b.category));
            return mapArray;
        }
        /**
         *   Return the meta table with extra information such as an array of baseIds and the file types.
         *   The filetype is available only if readFileList have been used before of course.
         */
        getFileList() {
            const typeList = this.persistantData ? this.persistantData.map((i) => i.fileType) : [];
            const reverseBaseIdList = this.getReverseIndex();
            const fileList = this.fileMetaTable.map((meta, mftId) => {
                const baseIds = reverseBaseIdList[mftId] ? reverseBaseIdList[mftId] : [];
                const type = reverseBaseIdList[mftId] ? typeList[baseIds[0]] : "Non-Registered";
                return {
                    mftId: mftId,
                    baseIdList: baseIds,
                    size: meta.size,
                    crc: meta.crc,
                    fileType: type,
                };
            });
            fileList[0] = {
                mftId: 0,
                baseIdList: [],
                size: 0,
                crc: 0,
                fileType: "Non-Registered",
            };
            return fileList;
        }
        /**
         * @returns {Array<Array<number>>}
         */
        getReverseIndex() {
            return this.indexTable.reduce((reversed, mftId, baseId) => {
                if (mftId in reversed)
                    reversed[mftId].push(baseId);
                else
                    reversed[mftId] = [baseId];
                return reversed;
            }, []);
        }
        // Callback wrapper
        /**
         * Reads data from a file in the dat.
         * If `raw` is true, any infation is skipped and raw data is returned.
         */
        loadFile(baseId, callback, isImage, raw) {
            const mftId = this.getFileIndex(baseId);
            if (mftId <= 0)
                return callback(null);
            this.readFile(mftId, isImage, raw).then((result) => {
                if (result.buffer === undefined)
                    return callback(null);
                callback(result.buffer, result.dxtType, result.imageWidth, result.imageHeight);
            });
        }
        // Private
        _needsScan(baseId, persistantData) {
            if (baseId <= 0)
                return { change: "none", scan: false };
            const mftId = this.getFileIndex(baseId);
            const metaData = this.getFileMeta(mftId);
            // Nothing interesting
            if (metaData === undefined && !(baseId in persistantData)) {
                return { change: "none", scan: false };
            }
            // If the file have been deleted
            else if (metaData === undefined) {
                return { change: "removed", scan: false };
            }
            // If the file is new
            else if (!(baseId in persistantData)) {
                return { change: "added", scan: true };
            }
            // If the size or crc don't match
            else if (metaData.size !== persistantData[baseId].size || metaData.crc !== persistantData[baseId].crc) {
                return { change: "modified", scan: true };
            }
            // If everything is the same
            else {
                return { change: "none", scan: false };
            }
        }
        async _readFileType(baseId) {
            if (!this._fileTypeCache)
                this._fileTypeCache = [];
            const mftId = this.getFileIndex(baseId);
            const metaData = this.getFileMeta(mftId);
            let fileType;
            if (this._fileTypeCache[baseId] !== undefined) {
                fileType = this._fileTypeCache[baseId];
            }
            else {
                const fileBuffer = (await this.readFile(mftId, false, false, Math.min(metaData.size, 1000), 32)).buffer;
                if (fileBuffer === undefined)
                    return undefined;
                fileType = getFileType(fileBuffer);
            }
            return { fileType: fileType, crc: metaData.crc, size: metaData.size };
        }
    }

    /**
     * Base class for data interpretors a.k.a. 'Renderers'
     *
     * Renderers are classes that collect and interpret data from the dat file.
     *
     * A {{#crossLink "LocalReader"}}{{/crossLink}} instance is used for accessing data from the dat.
     *
     * A {{#crossLink "Logger"}}{{/crossLink}} is used for posting progress output or error messages.
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
    class DataRenderer {
        localReader;
        settings;
        context;
        rendererName;
        static rendererName = "DataRenderer";
        logger;
        constructor(localReader, settings, context, logger_, rendererName = "DataRenderer") {
            this.localReader = localReader;
            this.settings = settings;
            this.context = context;
            this.rendererName = rendererName;
            /// Just storing parameters
            if (!settings) {
                settings = {};
            }
            this.context[rendererName] = {};
            if (!logger_) {
                this.logger = T3D.Logger;
            }
            else {
                this.logger = logger_;
            }
        }
        /**
         * Gets the output value object for a specified class within the context.
         *
         * @param  {Class} otherClass The class to fetch the output value object for.
         * If not specified the class of this instance will be used.
         * @return {Object}            The output value object for this class within the context.
         */
        getOutput(otherClass) {
            return this.context[otherClass ? otherClass.rendererName : this.rendererName];
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
         * - *file* A FileParser representation of the loaded file. Only set if the loaded file was a Pack File.
         *
         * @async
         * @param  {Function} callback Fires when renderer is finished, does not take arguments.
         */
        renderAsync(callback) {
            const self = this;
            this.localReader.loadFile(this.settings.id, function (inflatedData) {
                /// Set fileId so callers can identify this VO
                self.getOutput().fileId = self.settings.id;
                /// Share inflated data
                self.getOutput().rawData = inflatedData;
                /// Construct raw string
                const uarr = new Uint8Array(inflatedData);
                const rawStrings = [];
                const chunksize = 0xffff;
                const len = Math.min(uarr.length, 10000);
                // There is a maximum stack size. We cannot call String.fromCharCode with as many arguments as we want
                for (let i = 0; i * chunksize < len; i++) {
                    //@ts-ignore
                    rawStrings.push(String.fromCharCode.apply(null, uarr.subarray(i * chunksize, (i + 1) * chunksize)));
                }
                if (len < uarr.length) {
                    rawStrings.push("T3D Ignored the last " + (uarr.length - len) + " bytes when generating this raw output");
                }
                self.getOutput().rawString = rawStrings.join();
                /// Check if this is an PF or ATEX file
                // Binareis are MZ
                const dataView = new DataView(inflatedData);
                const first4 = String.fromCharCode(dataView.getUint8(0), dataView.getUint8(1), dataView.getUint8(2), dataView.getUint8(3));
                /// Do special stuff for different fcc signatures
                ///
                /// fourcc != fcc::ATEX && fourcc != fcc::ATEC && fourcc != fcc::ATEP &&
                /// fourcc != fcc::ATET && fourcc != fcc::ATEU && fourcc != fcc::ATTX)
                ///
                if (first4 === "ATEX" ||
                    first4 === "ATEC" ||
                    first4 === "ATEP" ||
                    first4 === "ATET" ||
                    first4 === "ATEU" ||
                    first4 === "ATTX") {
                    /// TODO: MOVE TO GW2 texture file!!
                    /// Load file using LocalReader.
                    self.localReader.loadFile(self.settings.id, function (inflatedData, dxtType, imageWidth, imageHeigth) {
                        /// Create image using returned data.
                        const image = {
                            data: new Uint8Array(inflatedData),
                            width: imageWidth,
                            height: imageHeigth,
                        };
                        self.getOutput().image = image;
                        callback();
                    }, true);
                }
                else if (first4.indexOf("PF") === 0) {
                    self.getOutput().file = new t3dParser.FileParser(inflatedData);
                    callback();
                }
                else {
                    self.getOutput().file = null;
                    callback();
                }
            });
        }
    }

    /*
      guid 1683952224941671000 is fucked up floor in SAB HUB
      materialFilename for that mesh is 564821, shared with lots of stuff
      lod 1 and 2 are both 0
      material flags is 2056
    */
    /**
     * Builds a custom vertex shader for a given number of uv cannels.
     * WIP not implemented yet!
     *
     * @memberof MaterialUtils
     * @param  {Number} numUv Number of UV channels used by this shader
     * @return {String}       Genereted vertex shader source
     */
    function buildVS(numUv) {
        let vdefs = "";
        let adefs = "";
        let reads = "";
        for (let i = 0; i < numUv; i++) {
            vdefs += "varying vec2 vUv_" + (i + 1) + ";\n";
            /// uv and uv2 are defined by THREE
            if (i > 1)
                adefs += "attribute vec2 uv" + (i + 1) + ";\n";
            reads += "vUv_" + (i + 1) + " = uv" + (i > 0 ? i + 1 : "") + ";\n";
        }
        return (adefs +
            vdefs +
            "void main()\n" +
            "{\n" +
            reads +
            "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n" +
            "gl_Position = projectionMatrix * mvPosition;\n" +
            "}");
    }
    /**
     * Generate a texture of a specified color, used to be part of THREEjs
     *
     * @memberof MaterialUtils
     * @param {Number} width
     * @param {Number} height
     * @param {THREE.Color} color
     * @returns {THREE.DataTexture}
     */
    function generateDataTexture(width, height, color) {
        // create a buffer with color data
        const size = width * height;
        const data = new Uint8Array(4 * size);
        const r = Math.floor(color.r * 255);
        const g = Math.floor(color.g * 255);
        const b = Math.floor(color.b * 255);
        const a = 255;
        for (let i = 0; i < size; i++) {
            const stride = i * 4;
            data[stride] = r;
            data[stride + 1] = g;
            data[stride + 2] = b;
            data[stride + 3] = a;
        }
        // used the buffer to create a DataTexture
        const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
        return texture;
    }
    /**
     * Builds a custom pixel shader for a given number of uv cannels.
     * WIP not implemented yet!
     *
     * @memberof MaterialUtils
     * @param  {Array}  textures  THREE textures
     * @param  {Number} numUv     Number of UV channels used by this shader
     * @param  {Number} alphaTest Texture see-trough alpha treshold
     * @param  {any} lightMap  TODO
     * @returns {string}
     */
    function buildPS(textures, numUv, alphaTest, lightMap) {
        const t1uv = "vUv_" + (textures[0].uvIdx + 1);
        let discard = "";
        if (alphaTest) {
            discard = "    if (c1.a < 0.5) \n" + "       discard;\n";
        }
        /// Color from 1st text or lighted by 2nd?
        let writeColor = "gl_FragColor = c1;\n";
        if (lightMap) {
            const texIdx = 0;
            // var t2uv = "vUv_4";//+(3-textures[texIdx].uvIdx+1);
            const t2uv = "vUv_1"; // + (textures[texIdx].uvIdx+1);
            // console.log("t2uv",t2uv);
            writeColor = "   vec4 c2 = texture2D( texture" + (texIdx + 1) + ", " + t2uv + " );\n" + "     gl_FragColor = c2;\n";
            // "     gl_FragColor = vec4(c2.rgb * c1.r/.5, c2.a);\n";
        }
        let uniforms = "";
        textures.forEach(function (t, idx) {
            uniforms += "uniform sampler2D texture" + (idx + 1) + ";\n";
        });
        /* uniforms += "uniform sampler2D texture1;\n";
        if(lightMap)
          uniforms += "uniform sampler2D texture2;\n"; */
        let varyings = "";
        for (let i = 0; i < numUv; i++) {
            varyings += "varying vec2 vUv_" + (i + 1) + ";\n";
        }
        return (uniforms +
            varyings +
            "void main( void ) {\n" +
            "    vec4 c1 = texture2D( texture1, " +
            t1uv +
            " );\n" +
            discard +
            writeColor +
            "}");
    }
    /**
     * WIP, concept for generatin materials to render multi UV chanelled meshes.
     *
     * @memberof MaterialUtils
     * @param  {Array}   textures  THREE texture
     * @param  {Number} numUV     Number of UV channels used by this shader
     * @param  {Number} alphaTest Texture see-trough alpha treshold
     * @return {THREE.ShaderMaterial} Generated shader
     */
    function getUVMat(textures, numUV, alphaTest) {
        let lightMap = false;
        const uniforms = {};
        textures.forEach(function (t, idx) {
            uniforms["texture" + idx] = { type: "t", value: t };
        });
        if (textures.length > 1) {
            lightMap = true;
        }
        const attributes = {};
        for (let i = 2; i < numUV; i++) {
            attributes["uv" + (i + 1)] = { type: "v2", value: [] };
        }
        const vs = buildVS(numUV);
        return new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vs,
            fragmentShader: buildPS(textures, numUV, alphaTest, lightMap),
            // @ts-ignore
            attributes: attributes,
            side: THREE.FrontSide,
        });
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
     * @memberof MaterialUtils
     * @param  {ModelMaterialData} material
     * @param  {FileParser} materialFile   A FileParser instance, must be of type AMAT
     * @param  {LocalReader} localReader The LocalReader to load the file contents from.
     * @param  {Object} sharedTextures  Value Object for keeping the texture cache
     * @return {THREE.Material}         A THREE Material with the generated contents and settings.
     */
    function getMaterial(material, materialFile, localReader, sharedTextures) {
        if (!materialFile)
            return;
        const dxChunk = materialFile.getChunk("dx9s");
        let grChunk = materialFile.getChunk("grmt");
        if (!dxChunk) {
            return getSimpleMaterial(material, materialFile, localReader, sharedTextures);
        }
        /// Append all textures to the custom material
        const finalTextures = [];
        // Some materials don't use textures..
        if (material && material.textures.length && dxChunk.data.techniques.length > 0) {
            /// TODO: check for flags!
            ///
            /// techinques[] -> passes[] -> effects[] -> samplerIndex[]
            ///
            // console.log("num effects",dxChunk.data.techniques[0].passes[0].effects.length);
            // if(grChunk.data.flags!=76)
            //  return;
            /// 3 teqs : high medium low                GRAPHICS LEVEL SETTINGS
            /// 1 passes                        DON'T CARE
            /// 15 effects      Each effect has a pixel shader     HOW??
            /// 1 or 2 sampler indices                   USE ALL! (Multi material)
            const effects = dxChunk.data.techniques[0].passes[0].effects;
            // var effect = effects[10];
            const effect = effects[0];
            //let shader = dxChunk.data.shaders[effect.pixelShader];
            /* effects.forEach(function (eff) {
              if(eff.samplerIndex.length > effect.samplerIndex.length)
                effect = eff;
            }); */
            // var samplerIdx = effect.samplerIndex[0];
            const samplerTextures = [];
            let textureToken; // UINT64
            let samplerTex;
            for (let i = 0; i < effect.samplerIndex.length; i++) {
                const samplerIdx = effect.samplerIndex[i];
                const sampler = dxChunk.data.samplers[samplerIdx];
                /// SHOULD NEVER HAPPEN, hide mesh!
                if (!sampler)
                    continue; // return;
                textureToken = sampler && Number(grChunk.data.texTokens[sampler.textureIndex]);
                if (!textureToken)
                    textureToken = 0;
                /* else
                  textureToken =textureToken.val; */
                /// Find the texture reffered by this sampler
                samplerTex = null;
                material.textures.forEach(function (tex /*, index*/) {
                    /// Seems like only 1st part of token is used...
                    if (!samplerTex && Number(tex.token) === textureToken) {
                        // console.log("TEX match",tex.token, textureToken)
                        samplerTex = tex;
                    }
                });
                /// Add this sampler's texture to the collection of all textures
                if (samplerTex) {
                    samplerTextures.push(samplerTex);
                }
                else {
                    /// FALLBACK, just guess what texture we should use
                    if (sampler) {
                        samplerTextures.push(material.textures[sampler.textureIndex]);
                    }
                    else if (material.textures.length > 0) {
                        samplerTextures.push(material.textures[0]);
                    }
                    else {
                        return;
                    }
                }
            } /// END for each sampler index in effect
            /// We now have all textures
            // console.log("textures from sampler", samplerTextures);
            /// Fallback to using whatever texture there is.
            if (samplerTextures.length <= 0) {
                return;
                // mainTex =  material.textures[0];
            }
            // console.log("num samplers ",samplerTextures.length);
            samplerTextures.forEach(function (texture, idx) {
                if (!texture)
                    return;
                /// Set texture "URL"
                const texURL = texture && texture.filename;
                /// Load texture from RAM or local reader:
                finalTextures[idx] = getTexture(texURL, localReader, sharedTextures);
                if (finalTextures[idx]) {
                    finalTextures[idx].uvIdx = texture.uvPSInputIndex;
                }
            });
        } /// End if material and texture
        let finalMaterial;
        /// Create custom shader material if there are textures
        if (finalTextures) {
            // TODO: make this work!
            // eslint-disable-next-line no-constant-condition, no-constant-binary-expression
            {
                let ft;
                let nt;
                material.textures.forEach(function (t) {
                    // Flag for diffuse map
                    if (!ft && Number(t.token) === 1733499172)
                        ft = t;
                    // Flag for normal map
                    if (!nt && Number(t.token) === 404146670)
                        nt = t;
                });
                if (!ft || ft.filename <= 0)
                    return;
                finalMaterial = new THREE.MeshPhongMaterial({
                    side: THREE.FrontSide,
                    map: getTexture(ft.filename, localReader, sharedTextures),
                });
                if (nt) {
                    const normalMap = getTexture(nt.filename, localReader, sharedTextures);
                    normalMap.flipY = true;
                    finalMaterial.normalMap = normalMap;
                }
                finalMaterial.textureFilename = ft.filename;
                if (grChunk.data.flags !== 16460) {
                    // console.log("Setting alpha flag for ",grChunk.data.flags)
                    finalMaterial.alphaTest = 0.05;
                }
            }
        }
        /// Fallback material is monocolored red
        else {
            finalMaterial = new THREE.MeshStandardMaterial({
                side: THREE.FrontSide,
                color: 0xff0000,
                flatShading: true,
            });
        }
        finalMaterial.needsUpdate = true;
        /// Set material props
        /// disable for now in order for custom shaders not to fuck up
        if (material) {
            const alphaMask0 = 0x0001; // + 0x0100 + 0x0200;
            const alphaMask1 = 0x0010;
            const alphaMask2 = 0x0100 + 0x0200;
            //let alphaMask2b = 0x0200;
            grChunk = materialFile.getChunk("grmt");
            // Enable alpha test for transparent flags
            if (material.materialFlags & alphaMask0 ||
                material.materialFlags & alphaMask1 ||
                material.materialFlags & alphaMask2 // && solidColor != null
            ) ;
            /// GRCHUNK -> DATA -> FLAGS
            /// HAS LIGHT - TEX - ? - EMISSIVE16460
            ///
            /// 56533 LOD FOR TOMBSTONE?
            //  16460      0100 0000 0100 1100      "standard" stuff rendering OK in SAB (no alpha test)
            //
            //  16452(SAB)    0100 0000 0100 0100      yellow numbers in sab signs
            //  16448(SAB)    0100 0000 0100 0000      faces on rocks, cloudmen, skybox portal images, holes in walls, floor plates...
            //                        no lighting??
            //
            //   8268      0010 0000 0100 1100
            //   3392      0000 1101 0100 0000      Moto machine light bulbs
            //   2380      0000 1001 0100 1100
            //   2368      0000 1001 0100 0000      Fountain water with rings, portal border and circular "light"
            //    332      0000 0001 0100 1100
            //    324      0000 0001 0100 0100      Moto face sprites
            //
            //    320(SAB)    0000 0001 0100 0000      portal textures (normal maps ish)
            //
            //     76      0000 0000 0100 1100      LOTS OF STUFF
            //                           Tree leaves, ground, hills, some roofs, flags, street lights
            //                           sheild textures, some fences, water tops, waterfall
            //
            //                           IN KHYLO "everything with alpha"
            //
            //
            //     68      0000 0000 0100 0100      Some flowers (lo res?) fountain edges foam
            //
            //     64(SAB)    0000 0000 0100 0000      clouds, sun iamge
            const lightMask = 8;
            const knownFileFlags = [24652, 16460, 16452, 16448, 8268, 3392, 2380, 2368, 332, 324, 320, 76, 68, 64];
            if (knownFileFlags.indexOf(grChunk.data.flags) < 0) {
                T3D.Logger.log(T3D.Logger.TYPE_WARNING, "unknown GR flag", grChunk.data.flags);
            }
            if (!(grChunk.data.flags & lightMask)) {
                // debugger;
                // console.log("no light");
                finalMaterial = new THREE.MeshStandardMaterial({
                    side: THREE.FrontSide,
                    map: finalMaterial.map,
                });
            }
            if (grChunk.data.flags !== 16460) {
                finalMaterial.alphaTest = 0.05;
            }
        } /// End if material
        return finalMaterial;
    }
    function getSimpleMaterial(material, materialFile, localReader, sharedTextures) {
        if (!materialFile)
            return;
        const grChunk = materialFile.getChunk("grmt");
        let ft;
        let nt;
        material.textures.forEach(function (t) {
            console.log(t);
            // Flag for diffuse map
            if (!ft && Number(t.token) === 1733499172)
                ft = t;
            if (!ft && t.token === 27219515885689124n)
                ft = t;
            // Flag for normal map
            if (!nt && Number(t.token) === 404146670)
                nt = t;
            if (!nt && t.token === 850610087184878n)
                nt = t;
        });
        console.log(ft);
        if (!ft || ft.filename <= 0) {
            return;
        }
        const finalMaterial = new THREE.MeshPhongMaterial({
            side: THREE.FrontSide,
            map: getTexture(ft.filename, localReader, sharedTextures),
        });
        if (nt) {
            const normalMap = getTexture(nt.filename, localReader, sharedTextures);
            normalMap.flipY = true;
            finalMaterial.normalMap = normalMap;
        }
        finalMaterial.textureFilename = ft.filename;
        if (grChunk.data.flags !== 16460) {
            finalMaterial.alphaTest = 0.05;
        }
        finalMaterial.needsUpdate = true;
        return finalMaterial;
    }
    /**
     * Load image data into a THREE.Texture from a texture file in the .dat file, using a LocalReader.
     * Any loaded tetures are added to sharedTextures, allowing for texture caching and fewer reads.
     *
     * @memberof MaterialUtils
     * @param  {Number} texURL         The fileId or baseId of the file to load image data from.
     * @param  {LocalReader} localReader    The LocalReader to load the file contents from.
     * @param  {Object} sharedTextures Value Object for keeping the texture cache
     * @return {THREE.Texture} A texture that will be populated by the file data when it is loaded.
     */
    function getTexture(texURL, localReader, sharedTextures) {
        let finalTexture;
        /// Read texture from shared array of loaded textures
        /// or read it from URL and add to shared ones!
        if (texURL && sharedTextures[texURL]) {
            /// Just read from already loaded textures.
            finalTexture = sharedTextures[texURL];
        }
        else if (texURL) {
            /// Load and add to shared array.
            finalTexture = loadLocalTexture(localReader, texURL);
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
     * @memberof MaterialUtils
     * @param {LocalReader} localReader - The LocalReader to load the file contents from.
     * @param {Number} fileId - The fileId or baseId of the file to load image data from.
     * @param {Number} mapping - What THREE mapping the returned texture will use, not implemented.

     * @return {THREE.Texture} A texture that will be populated by the file data when it is loaded.
     */
    function loadLocalTexture(localReader, fileId, mapping, defaultColor, onerror) {
        if (defaultColor === undefined) {
            defaultColor = Math.floor(0xffffff * Math.random());
        }
        /// Temporary texture that will be returned by the function.
        /// Color is randomized in order to differentiate different textures during loading.
        const texture = generateDataTexture(1, // Width
        1, // Height
        new THREE.Color(defaultColor) // Color
        );
        // Threejs r71 is using these settings by default, r72+ changed it
        texture.minFilter = THREE.LinearMipMapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = true;
        texture.flipY = true;
        /// Only allow non-zero fileId, otherwise jsut return static texture
        if (parseInt(String(fileId)) <= 0) {
            if (onerror)
                onerror();
            texture.needsUpdate = true;
            return texture;
        }
        /// Load file using LocalReader.
        localReader.loadFile(fileId, function (inflatedData, dxtType, imageWidth, imageHeigth) {
            /// Require infalted data to be returned.
            if (!inflatedData) {
                if (onerror)
                    onerror();
                texture.needsUpdate = true;
                return;
            }
            /// Create image using returned data.
            const image = {
                data: new Uint8Array(inflatedData),
                width: imageWidth,
                height: imageHeigth,
            };
            /// Use RGBA for all textures for now...
            /// TODO: don't use alpha for some formats!
            texture.format =
                //dxtType === 3 || dxtType === 5 ? THREE.RGBAFormat : THREE.RGBFormat;
                THREE.RGBAFormat;
            /// Update texture with the loaded image.
            //@ts-ignore
            texture.image = image;
            texture.needsUpdate = true;
        }, true);
        /// Return texture with temporary content.
        return texture;
    }

    var MaterialUtils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        buildPS: buildPS,
        buildVS: buildVS,
        generateDataTexture: generateDataTexture,
        getMaterial: getMaterial,
        getSimpleMaterial: getSimpleMaterial,
        getTexture: getTexture,
        getUVMat: getUVMat,
        loadLocalTexture: loadLocalTexture
    });

    /**
     *
     * A renderer that generates some of the environment objects of a map.
     *
     * @class EnvironmentRenderer
     * @constructor
     * @extends DataRenderer
     * @param  {LocalReader} localReader  The LocalReader instance to read data from.
     * @param  {Object} settings     Any settings used by this renderer.
     * *Must* specify "mapFile", a FileParser.
     * @param  {Object} context      Shared value object between renderers.
     * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
     */
    class EnvironmentRenderer extends DataRenderer {
        static rendererName = "EnvironmentRenderer";
        mapFile;
        constructor(localReader, settings, context, logger) {
            super(localReader, settings, context, logger, "EnvironmentRenderer");
            this.mapFile = this.settings.mapFile;
        }
        getMat(tex) {
            return new THREE.MeshBasicMaterial({
                map: tex,
                side: THREE.BackSide,
                fog: false,
                depthWrite: false,
            });
        }
        loadTextureWithFallback(targetMatIndices, materialArray, filename, fallbackFilename, hazeColorAsInt) {
            const self = this;
            function writeMat(mat) {
                targetMatIndices.forEach(function (i) {
                    materialArray[i] = mat;
                });
            }
            function loadFallback() {
                const mat = self.getMat(new THREE.TextureLoader().load(fallbackFilename));
                writeMat(mat);
            }
            function errorCallback() {
                setTimeout(loadFallback, 1);
            }
            const mat = self.getMat(loadLocalTexture(this.localReader, filename, undefined, hazeColorAsInt, errorCallback));
            writeMat(mat);
        }
        getHazeColor(environmentChunkData) {
            const hazes = environmentChunkData && environmentChunkData.dataGlobal.haze;
            if (!hazes || hazes.length <= 0) {
                return [190, 160, 60];
            }
            else {
                return hazes[0].farColor;
            }
        }
        parseLights(environmentChunkData) {
            const self = this;
            /// Set up output array
            self.getOutput().lights = [];
            const lights = environmentChunkData
                ? environmentChunkData.dataGlobal.lighting
                : [
                    {
                        lights: [],
                        backlightIntensity: 1.0,
                        backlightColor: [255, 255, 255],
                    },
                ];
            let ambientLight;
            // var light = lights[0];
            //
            let hasLight = false;
            lights.forEach(function (light /*, idx*/) {
                if (hasLight)
                    return;
                /// Directional lights
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                let sumDirLightIntensity = 0;
                light.lights.forEach(function (dirLightData /*, idx*/) {
                    hasLight = true;
                    const color = new THREE.Color(dirLightData.color[2] / 255.0, dirLightData.color[1] / 255.0, dirLightData.color[0] / 255.0);
                    const directionalLight = new THREE.DirectionalLight(color.getHex(), dirLightData.intensity);
                    directionalLight.position
                        .set(-dirLightData.direction[0], dirLightData.direction[2], dirLightData.direction[1])
                        .normalize();
                    sumDirLightIntensity += dirLightData.intensity;
                    self.getOutput().lights.push(directionalLight);
                }); // END for each directional light in light
                /// Add some random directional lighting if there was no, in order to se SOME depth on models
                if (!light.lights || light.lights.length === 0) {
                    const directions = [
                        [0, 1, 0, 0.3],
                        [1, 2, 1, 0.3],
                        [-1, -2, -1, 0.3],
                    ];
                    directions.forEach(function (lightDir) {
                        const color = new THREE.Color(1, 1, 1);
                        const intensity = lightDir[3];
                        const directionalLight = new THREE.DirectionalLight(color.getHex(), intensity);
                        directionalLight.position.set(lightDir[0], lightDir[1], lightDir[2]).normalize();
                        sumDirLightIntensity += intensity;
                        self.getOutput().lights.push(directionalLight);
                    });
                }
                /// Ambient light
                // light.backlightIntensity /= sumDirLightIntensity +light.backlightIntensity;
                // light.backlightIntensity = light.backlightIntensity;
                const color = new THREE.Color((light.backlightIntensity * (255.0 - light.backlightColor[2])) / 255.0, (light.backlightIntensity * (255.0 - light.backlightColor[1])) / 255.0, (light.backlightIntensity * (255.0 - light.backlightColor[0])) / 255.0);
                ambientLight = new THREE.AmbientLight(color);
            }); // END for each light in lighting
            let ambientTotal = 0;
            if (ambientLight) {
                ambientTotal = ambientLight.color.r + ambientLight.color.g + ambientLight.color.b;
                this.getOutput().lights.push(ambientLight);
            }
            /// Parsing done, set hasLight flag and return
            this.getOutput().hasLight = hasLight || ambientTotal > 0;
        }
        parseSkybox(environmentChunkData, parameterChunkData, hazeColorAsInt) {
            /// set up output array
            this.getOutput().skyCubeTexture = null;
            this.getOutput().skyBox = null;
            /// Grab sky texture.
            /// index 0 and 1 day
            /// index 2 and 3 evening
            let skyModeTex = environmentChunkData && environmentChunkData.dataGlobal.skyModeTex[0];
            /// Fallback skyboxfrom dat.
            if (!skyModeTex) {
                skyModeTex = {
                    texPathNE: 187554,
                    texPathSW: 187556,
                    texPathT: 187558,
                };
            }
            /// Calculate bounds
            const bounds = parameterChunkData.rect;
            Math.abs(bounds[0] - bounds[2]);
            Math.abs(bounds[1] - bounds[3]);
            const materialArray = [];
            /// Load skybox textures, fallback to hosted png files.
            this.loadTextureWithFallback([1, 4], materialArray, skyModeTex.texPathNE + 1, "img/193068.png", hazeColorAsInt);
            this.loadTextureWithFallback([0, 5], materialArray, skyModeTex.texPathSW + 1, "img/193070.png", hazeColorAsInt);
            this.loadTextureWithFallback([2], materialArray, skyModeTex.texPathT + 1, "img/193072.png", hazeColorAsInt);
            materialArray[3] = new THREE.MeshBasicMaterial({ visible: false });
            /// Create skybox geometry
            const boxSize = 1024; // boundSide * 2;
            const skyGeometry = new THREE.BoxGeometry(boxSize, boxSize / 2, boxSize); // Width Height Depth
            const uvAttribute = skyGeometry.getAttribute("uv");
            const uvArray = uvAttribute.array;
            /// Ugly way of fixing UV maps for the skybox
            for (let i = 0; i < uvArray.length; i += 2) {
                const face = Math.floor(i / 8); // 4 vertices per face, 2 UVs per vertex
                // PX - WEST   NX - EAST
                if (face === 0 || face === 1) {
                    uvArray[i] = 1 - uvArray[i]; // Flip x
                    uvArray[i + 1] /= 2.0;
                    uvArray[i + 1] += 0.5; // Adjust y
                }
                // NZ - SOUTH   PZ - NORTH
                else if (face === 5 || face === 4) {
                    uvArray[i + 1] /= -2.0;
                    uvArray[i + 1] += 0.5; // Adjust y
                }
                else {
                    uvArray[i] = 1 - uvArray[i]; // Flip x
                }
            }
            uvAttribute.needsUpdate = true;
            /// Generate final skybox
            const skyBox = new THREE.Mesh(skyGeometry, materialArray);
            /// Put horizon in camera center
            // skyBox.translateY(-(boxSize / 8));
            // skyBox.translateY( -environmentChunk.data.dataGlobal.sky.verticalOffset );
            /// Write to output
            this.getOutput().skyBox = skyBox;
        }
        /**
         * Output fileds generated:
         *
         * - *hazeColor* Array of RGBA values describing the global haze color of the map.
         * - *lights* An array of THREE.DirectionalLight and  THREE.AmbientLight objects.
         * - *hasLight* Boolean is false if no directional lights were added to "lights".
         * - *skyBox* A textured THREE.Mesh skybox.
         *
         * @async
         * @param  {Function} callback Fires when renderer is finished, does not take arguments.
         */
        renderAsync(callback) {
            if (!this.mapFile) {
                throw new Error("No map file available for EnvironmentRenderer");
            }
            const environmentChunkData = this.mapFile.getChunk("env").data;
            const parameterChunkData = this.mapFile.getChunk("parm").data;
            /// Set renderer clear color from environment haze
            const hazeColor = this.getHazeColor(environmentChunkData);
            const hazeColorAsInt = hazeColor[2] * 256 * 256 + hazeColor[1] * 256 + hazeColor[0];
            this.getOutput().hazeColor = hazeColor;
            /// Add directional lights to output. Also write hasLight flag
            this.parseLights(environmentChunkData);
            /// Generate skybox
            this.parseSkybox(environmentChunkData, parameterChunkData, hazeColorAsInt);
            /// All parsing is synchronous, just fire callback
            callback();
        }
    }

    /**
     *
     * A renderer that generates meshes describing the collisions of a map.
     *
     * @class HavokRenderer
     * @constructor
     * @extends DataRenderer
     * @param  {LocalReader} localReader  The LocalReader instance to read data from.
     * @param  {Object} settings     Any settings used by this renderer.
     * *Must* specify "mapFile", a FileParser. If "visible" is specified and true, the generated meshes will be textured
     * with a MeshNormalMaterial, otherwise they will not be visible.
     * @param  {Object} context      Shared value object between renderers.
     * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
     */
    class HavokRenderer extends DataRenderer {
        static rendererName = "HavokRenderer";
        mapFile;
        lastP;
        seed;
        meshes;
        geometries;
        animations;
        havokChunkData;
        constructor(localReader, settings, context, logger) {
            super(localReader, settings, context, logger, "HavokRenderer");
            this.mapFile = this.settings.mapFile;
            this.lastP = -1;
            this.seed = 1;
            this.meshes = [];
        }
        /**
         * TODO
         *
         * @param  {Function} callback         [description]
         * @async
         */
        renderModels(models, title, callback) {
            let mat;
            if (this.settings && this.settings.visible) {
                mat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, flatShading: true });
            }
            else if (this.settings && this.settings.export) {
                mat = new THREE.MeshBasicMaterial({ visible: true });
            }
            else {
                mat = new THREE.MeshBasicMaterial({ visible: false });
            }
            this.parseAllModels(models, mat, title, 200, 0, callback);
        }
        /**
         * TODO
         *
         * @param  {*} animation  [description]
         * @param  {*} collisions [description]
         * @return {*}            [description]
         */
        getCollisionsForAnimation(animation, collisions) {
            const ret = [];
            for (let i = 0; i < animation.collisionIndices.length; i++) {
                const index = animation.collisionIndices[i];
                const collision = collisions[index];
                collision.index = index;
                ret.push(collision);
            }
            return ret;
        }
        /**
         * TODO
         *
         * @param  {*} models       [description]
         * @param  {*} mat       [description]
         * @param  {*} title     [description]
         * @param  {*} chunkSize [description]
         * @param  {*} offset    [description]
         * @return {*} callback          [description]
         * @async
         */
        parseAllModels(models, mat, title, chunkSize, offset, callback) {
            let i = offset;
            for (; i < offset + chunkSize && i < models.length; i++) {
                const p = Math.round((i * 100) / models.length);
                if (p !== this.lastP) {
                    this.logger.log(T3D.Logger.TYPE_PROGRESS, "Loading Collision Models (" + title + ")", p);
                    this.lastP = p;
                }
                /// Get animation object
                const animation = this.animationFromGeomIndex(models[i].geometryIndex, this.geometries, this.animations);
                const collisions = this.getCollisionsForAnimation(animation, this.havokChunkData.collisions);
                for (let j = 0; j < collisions.length; j++) {
                    const collision = collisions[j];
                    this.renderMesh(collision, models[i], mat);
                }
            }
            if (i < models.length) {
                setTimeout(this.parseAllModels.bind(this, models, mat, title, chunkSize, offset + chunkSize, callback), 10 /* time in ms to next call */);
            }
            else {
                callback();
            }
        }
        /**
         * TODO
         *
         * @param  {*} propGeomIndex [description]
         * @param  {*} geometries    [description]
         * @param  {*} animations    [description]
         * @return {*}               [description]
         */
        animationFromGeomIndex(propGeomIndex, geometries, animations) {
            // geometries is just list of all geometries.animations[end] for now
            const l = geometries[propGeomIndex].animations.length;
            return animations[geometries[propGeomIndex].animations[l - 1]];
            // return animations[ geometries[propGeomIndex].animations[0] ];
        }
        /**
         * TODO
         *
         * @param  {*} collision [description]
         * @param  {*} model     [description]
         * @param  {*} mat       [description]
         * @return {*}           [description]
         */
        renderMesh(collision, model, mat) {
            const pos = model.translate;
            const rot = model.rotate;
            const scale = 32 * model.scale;
            /// Generate mesh
            const mesh = this.parseHavokMesh(collision, mat);
            /// Position mesh
            /// "x","float32","z","float32","y","float32"
            mesh.position.set(pos[0], -pos[2], -pos[1]);
            /// Scale mesh
            if (scale)
                mesh.scale.set(scale, scale, scale);
            /// Rotate mesh
            if (rot) {
                mesh.rotation.order = "ZXY";
                // ["x","float32","z","float32","y","float32"],
                mesh.rotation.set(rot[0], -rot[2], -rot[1]);
            }
            /// Add mesh to scene and collisions
            this.getOutput().meshes.push(mesh);
        }
        /**
         * TODO
         *
         * @return {*} [description]
         */
        seedRandom() {
            const x = Math.sin(this.seed++) * 10000;
            return x - Math.floor(x);
        }
        /**
         * TODO
         *
         * @param  {*} collision [description]
         * @param  {*} mat       [description]
         * @return {*}           [description]
         */
        parseHavokMesh(collision, mat) {
            const index = collision.index;
            if (!this.meshes[index]) {
                const geom = new THREE.BufferGeometry();
                // Pass vertices
                const vertices = [];
                for (let i = 0; i < collision.vertices.length; i++) {
                    const v = collision.vertices[i];
                    // Push x, z, -y as in the original
                    vertices.push(v[0], v[2], -v[1]);
                }
                geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices), 3));
                // Pass faces (indices)
                const indices = [];
                for (let i = 0; i < collision.indices.length; i += 3) {
                    const f1 = collision.indices[i];
                    const f2 = collision.indices[i + 1];
                    const f3 = collision.indices[i + 2];
                    if (f1 <= collision.vertices.length && f2 <= collision.vertices.length && f3 <= collision.vertices.length) {
                        indices.push(f1, f2, f3);
                    }
                    else {
                        this.logger.log(T3D.Logger.TYPE_ERROR, "Errorus index in havok model geometry.");
                    }
                }
                geom.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1));
                // Compute face normals (optional: you can compute vertex normals too)
                geom.computeVertexNormals();
                // Create and store the mesh
                this.meshes[index] = new THREE.Mesh(geom, mat);
                return this.meshes[index];
            }
            else {
                return this.meshes[index].clone();
            }
        }
        /**
         * Output fileds generated:
         *
         * - *boundingBox* Array of values describing the bounding box of all collision.
         * - *meshes* An array of THREE.Mesh objects visualizing all collision in the map.
         *
         * @async
         * @param  {Function} callback Fires when renderer is finished, does not take arguments.
         */
        renderAsync(callback) {
            const self = this;
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
            const propModels = this.havokChunkData.propModels;
            const zoneModels = this.havokChunkData.zoneModels;
            const obsModels = this.havokChunkData.obsModels;
            obsModels.forEach(function (mdl) {
                mdl.scale = 1;
            });
            /// Store geoms and animations from the file in hte instance so we don't
            /// have to pass them arround too much. (fix this later)
            this.geometries = this.havokChunkData.geometries;
            this.animations = this.havokChunkData.animations;
            /// Render "prop", "zone" and "obs" models in that order.
            const renderZoneModelsCB = function () {
                self.renderModels(obsModels, "obs", callback);
            };
            const renderPropModelsCB = function () {
                self.renderModels(zoneModels, "zone", renderZoneModelsCB);
            };
            self.renderModels(propModels, "prop", renderPropModelsCB);
        }
    }

    const base32Max = Math.pow(2, 32);
    /**
     * Collection Math and sorting methods
     * @namespace MathUtils
     */
    /**
     * Takes an integer and calculates what the 16 bit float
     * representation of the binary data used to read the integer is.
     *
     * @memberof MathUtils
     * @param  {Number} h Integer value
     * @return {Number} Float value
     */
    function f16(h) {
        const s = (h & 0x8000) >> 15;
        const e = (h & 0x7c00) >> 10;
        const f = h & 0x03ff;
        if (e === 0) {
            return (s ? -1 : 1) * Math.pow(2, -14) * (f / Math.pow(2, 10));
        }
        else if (e === 0x1f) {
            return f ? NaN : (s ? -1 : 1) * Infinity;
        }
        return (s ? -1 : 1) * Math.pow(2, e - 15) * (1 + f / Math.pow(2, 10));
    }
    /**
     * Calculates the number of binary ones present in the data used to
     * generate the input integer.
     *
     * @memberof MathUtils
     * @param  {Number} bits Integer
     * @return {Number}      Number of binary ones in the data
     */
    function popcount(bits) {
        const SK5 = 0x55555555;
        const SK3 = 0x33333333;
        const SKF0 = 0x0f0f0f0f;
        // let SKFF = 0xff00ff
        bits -= (bits >> 1) & SK5;
        bits = (bits & SK3) + ((bits >> 2) & SK3);
        bits = (bits & SKF0) + ((bits >> 4) & SKF0);
        bits += bits >> 8;
        return (bits + (bits >> 15)) & 63;
    }
    /**
     * Calculates the 64 bit integer value of two 32 bit integers. Only works up to
     * the limit of the javascript Number maximum value.
     *
     * @memberof MathUtils
     * @param  {Number[]} arr     Input integers, length should be 2.
     * @return {Number}      64 bit representation of the two integers.
     */
    function arr32To64(arr) {
        /// Re-read as uint64 (still little endian)
        /// Warn: this will not work for ~50+ bit longs cus all JS numbers are 64 bit floats...
        return base32Max * arr[1] + arr[0];
    }
    /**
     * Sorts an array and returns unique values only.
     *
     * @memberof MathUtils
     * @param  {Array} arr_in     Input array
     * @param  {Function} comparator A comparator function between the objects in arr_in
     * @return {Array}            Sorted and unique value.
     */
    function sort_unique(arr_in, comparator) {
        const arr = Array.prototype.sort.call(arr_in, comparator);
        const u = {};
        const a = [];
        for (let i = 0, l = arr.length; i < l; ++i) {
            // eslint-disable-next-line no-prototype-builtins
            if (u.hasOwnProperty(arr[i])) {
                continue;
            }
            a.push(arr[i]);
            //@ts-ignore
            u[arr[i]] = 1;
        }
        return a;
    }

    var MathUtils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        arr32To64: arr32To64,
        f16: f16,
        popcount: popcount,
        sort_unique: sort_unique
    });

    // TODO: Remove this local cache!!
    const matFiles = {};
    /**
     * Object describing the meaning of the bits in fvf integers.
     * @property fvfFormat
     * @private
     * @type {Object}
     */
    const fvfFormat = {
        Position: 0x00000001 /** < 12 bytes. Position as three 32-bit floats in the order x, y, z. */,
        Weights: 0x00000002 /** < 4 bytes. Contains bone weights. */,
        Group: 0x00000004 /** < 4 bytes. Related to bone weights. */,
        Normal: 0x00000008 /** < 12 bytes. Normal as three 32-bit floats in the order x, y, z. */,
        Color: 0x00000010 /** < 4 bytes. Vertex color. */,
        Tangent: 0x00000020 /** < 12 bytes. Tangent as three 32-bit floats in the order x, y, z. */,
        Bitangent: 0x00000040 /** < 12 bytes. Bitangent as three 32-bit floats in the order x, y, z. */,
        TangentFrame: 0x00000080 /** < 12 bytes. */,
        UV32Mask: 0x0000ff00 /** < 8 bytes for each set bit. Contains UV-coords as two 32-bit floats in the order u, v. */,
        UV16Mask: 0x00ff0000 /** < 4 bytes for each set bit. Contains UV-coords as two 16-bit floats in the order u, v. */,
        Unknown1: 0x01000000 /** < 48 bytes. Unknown data. */,
        Unknown2: 0x02000000 /** < 4 bytes. Unknown data. */,
        Unknown3: 0x04000000 /** < 4 bytes. Unknown data. */,
        Unknown4: 0x08000000 /** < 16 bytes. Unknown data. */,
        PositionCompressed: 0x10000000 /** < 6 bytes. Position as three 16-bit floats in the order x, y, z. */,
        Unknown5: 0x20000000 /** < 12 bytes. Unknown data. **/,
    };
    /**
     * Collection of methods used for generating THREE meshes from Guild Wars 2 data formats.
     * @namespace RenderUtils
     */
    /**
     * Creates a mesh representing a single plane.
     *
     * @memberof RenderUtils
     * @param  {Object} rect     An object with x1,x2,y1 and y2 properties.
     * @param  {Number} yPos     Vertical position of the rectangle.
     * @param  {THREE.Material} material   Mesh material to apply.
     * @param  {Number} dy       Mesh height.
     * @return {THREE.Mesh}      The generated mesh.
     */
    function renderRect(rect, yPos, material, dy) {
        const dx = rect.x1 - rect.x2;
        const dz = rect.y1 - rect.y2;
        if (!dy)
            dy = 1;
        const cx = (rect.x1 + rect.x2) / 2;
        const cz = (rect.y1 + rect.y2) / 2;
        const cy = yPos;
        const geometry = new THREE.BoxGeometry(dx, dy, dz);
        material =
            material ||
                new THREE.MeshBasicMaterial({
                    color: 0xff0000,
                    wireframe: true,
                });
        const plane = new THREE.Mesh(geometry, material);
        //@ts-ignore
        plane.overdraw = true;
        plane.position.x = cx;
        plane.position.y = cy;
        plane.position.z = cz;
        return plane;
    }
    /**
     * Returns a THREE representation of the data contained by a GW2 model file.
     * The data is read using a LocalReader reference into the GW2 .dat.
     *
     * @memberof RenderUtils
     * @param {LocalReader} localReader The LocalReader to load the file contents from.
     * @param {Object} chunk Model GEOM chunk.
     * @param {Object} modelDataChunk Model MODL chunk.
     * @param {Object} sharedTextures  Value Object for keeping the texture cache.
     * @param {boolean} showUnmaterialed If false does not render any models with missing materials.
     *
     * @return {Array} Each geometry in the model file represented by a textured THREE.Mesh object
     */
    function renderGeomChunk(localReader, chunk, modelDataChunk, sharedTextures, showUnmaterialed) {
        const rawMeshes = chunk.data.meshes;
        const meshes = [];
        const mats = modelDataChunk.data.permutations[0].materials;
        rawMeshes.forEach(function (rawMesh) {
            const rawGeom = rawMesh.geometry;
            const fvf = rawGeom.verts.mesh.fvf; // rawGeom.fvf;
            const numVerts = rawGeom.verts.vertexCount; // rawGeom.vertexCount;
            const rawVerts = rawGeom.verts.mesh.vertices; // rawGeom.vertices
            const indices = rawGeom.indices.indices;
            const geom = new THREE.BufferGeometry();
            const vertsDataView = new DataView(rawVerts.buffer);
            // Dirty step length for now:
            const stride = rawVerts.length / numVerts;
            // Each vertex
            // DO UV as well
            const vertices = new Float32Array(numVerts * 3);
            const uvs = [];
            /// Calculate the distance to the first pair of UV data from the
            /// start of the vertex entry
            ///
            const distToNormals = 
            //@ts-ignore
            !!(fvf & fvfFormat.Position) * 12 + !!(fvf & fvfFormat.Weights) * 4 + !!(fvf & fvfFormat.Group) * 4;
            //@ts-ignore
            const distToTangent = distToNormals + !!(fvf & fvfFormat.Normal) * 12 + !!(fvf & fvfFormat.Color) * 4;
            //@ts-ignore
            const distToBittangent = distToTangent + !!(fvf & fvfFormat.Tangent) * 12;
            //@ts-ignore
            const distToTangentFrame = distToBittangent + !!(fvf & fvfFormat.Bitangent) * 12;
            //@ts-ignore
            const distToUV = distToTangentFrame + !!(fvf & fvfFormat.TangentFrame) * 12;
            /// Check if the UV is 32 bit float or 16 bit float.
            const uv32Flag = (fvf & fvfFormat.UV32Mask) >> 8;
            const uv16Flag = (fvf & fvfFormat.UV16Mask) >> 16;
            const isUV32 = !!uv32Flag;
            const hasUV = !!uv16Flag || !!uv32Flag;
            /// Popcount (count the number of binary 1's) in the UV flag
            /// to get the number of UV pairs used in this vertex format.
            const masked = isUV32 ? uv32Flag : uv16Flag;
            let numUV = popcount(masked);
            numUV = Math.min(numUV, 1.0);
            /// Create typed UV arrays
            if (hasUV) {
                for (let i = 0; i < numUV; i++) {
                    uvs[i] = new Float32Array(numVerts * 2);
                }
            }
            /// Read data from each vertex data entry
            for (let i = 0; i < numVerts; i++) {
                /// Go to vertex memory position
                let cursor = i * stride;
                /// Read position data
                /// (we just hope all meshes has 32 bit position...)
                const x = vertsDataView.getFloat32(cursor, true);
                const z = vertsDataView.getFloat32(cursor + 4, true);
                const y = vertsDataView.getFloat32(cursor + 8, true);
                /// Write position data, transformed to Tyria3D coordinate system.
                vertices[i * 3 + 0] = x; // - c.x;
                vertices[i * 3 + 1] = -y; // + c.y;
                vertices[i * 3 + 2] = -z; // + c.z;
                /// Read data at UV position
                if (hasUV) {
                    for (let uvIdx = 0; uvIdx < numUV; uvIdx++) {
                        cursor = i * stride + distToUV + uvIdx * (isUV32 ? 8 : 4);
                        /// Add one UV pair:
                        let u, v;
                        if (isUV32) {
                            u = vertsDataView.getFloat32(cursor, true);
                            v = vertsDataView.getFloat32(cursor + 4, true);
                        }
                        else {
                            u = f16(vertsDataView.getUint16(cursor, true));
                            v = f16(vertsDataView.getUint16(cursor + 2, true));
                        }
                        /// Push to correct UV array
                        uvs[uvIdx][i * 2 + 0] = u;
                        uvs[uvIdx][i * 2 + 1] = v;
                    }
                } /// End if has UV
            } /// End each vertex
            /// Each face descripbed in indices
            const faces = new Uint16Array(indices.length);
            for (let i = 0; i < indices.length; i += 3) {
                // This is ONE face
                faces[i + 0] = indices[i + 2];
                faces[i + 1] = indices[i + 1];
                faces[i + 2] = indices[i + 0];
            } // End each index aka "face"
            /// Add position, index and uv props to buffered geometry
            geom.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
            // geom.setAttribute( 'index', new THREE.BufferAttribute( faces, 1) );
            geom.setIndex(new THREE.BufferAttribute(faces, 1));
            {
                /// Calculate normals
                geom.computeVertexNormals();
            }
            if (hasUV) {
                for (let uvIdx = 0; uvIdx < numUV; uvIdx++) {
                    /// Names are "uv", "uv2", "uv3", ... , "uvN"
                    const uvName = "uv" + (uvIdx > 0 ? uvIdx + 1 : "");
                    /// Set "custom" attribute uvN
                    geom.setAttribute(uvName, new THREE.BufferAttribute(uvs[uvIdx], 2));
                    /// Flag for update
                    geom.attributes[uvName].needsUpdate = true;
                }
                /// Not needed anymore?
                //@ts-ignore
                geom.uvsNeedUpdate = true;
            }
            /// Tell geometry to update its UVs and buffers
            //@ts-ignore
            geom.buffersNeedUpdate = true;
            /// DONE READING VERTEX DATA
            /// Get material used for this mesh
            const matIdx = rawMesh.materialIndex;
            const mat = mats[matIdx];
            let materialFile = null;
            if (mat && matFiles[mat.filename]) {
                materialFile = matFiles[mat.filename];
            }
            console.log(`material file:`, materialFile);
            let finalMaterial = getMaterial(mat, materialFile, localReader, sharedTextures);
            /// IF we could not find a material abort OR use a wireframe placeholder.
            if (!finalMaterial) {
                if (showUnmaterialed) {
                    finalMaterial = new THREE.MeshLambertMaterial({
                        color: 0x5bb1e8,
                        wireframe: false,
                        side: THREE.DoubleSide,
                    });
                }
                else {
                    return;
                }
            }
            /// Create the final mesh from the BufferedGeometry and MeshBasicMaterial
            const finalMesh = new THREE.Mesh(geom, finalMaterial);
            /// Set material info on the returned mesh
            if (mat) {
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
            meshes.push(finalMesh);
        }); /// End rawMeshes for Each
        return meshes;
    }
    function getInstancedMeshes(meshes, size, filterFlags) {
        const instancedMeshes = [];
        for (const mesh of meshes) {
            // If filterFlags is set, we ignore any mesh without the correct flag
            if (filterFlags !== undefined && mesh.flags !== filterFlags) {
                continue;
            }
            const im = new THREE.InstancedMesh(mesh.geometry, mesh.material, size);
            instancedMeshes.push(im);
        }
        return instancedMeshes;
    }
    /**
     * Loads mesh array from Model file and sends as argument to callback.
     *
     * @memberof RenderUtils
     * @async
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
    function loadMeshFromModelFile(filename, solidColor, localReader, sharedTextures, showUnmaterialed, callback) {
        // Short handles prop attributes
        const finalMeshes = [];
        /// Load file
        localReader.loadFile(filename, function (inflatedData) {
            try {
                if (!inflatedData) {
                    throw "Could not find MFT entry for " + filename;
                }
                const modelFile = new t3dParser.FileParser(inflatedData);
                // MODL for materials -> textures
                const modelDataChunk = modelFile.getChunk("modl");
                // GEOM for geometry
                const geometryDataChunk = modelFile.getChunk("geom");
                /// Hacky fix for not being able to adjust for position
                const boundingSphere = modelDataChunk.data.boundingSphere;
                const bsc = boundingSphere.center;
                if (bsc) {
                    boundingSphere.radius += Math.sqrt(bsc[0] * bsc[0] + Math.sqrt(bsc[1] * bsc[1] + bsc[2] * bsc[2]));
                }
                /// Load all material files
                const allMats = modelDataChunk.data.permutations[0].materials;
                function loadMaterialIndex(mIdx, matCallback) {
                    if (mIdx >= allMats.length) {
                        matCallback();
                        return;
                    }
                    const mat = allMats[mIdx];
                    /// Skip if file is loaded
                    if (matFiles[mat.filename]) {
                        loadMaterialIndex(mIdx + 1, matCallback);
                        return;
                    }
                    localReader.loadFile(mat.filename, function (inflatedData) {
                        if (inflatedData) {
                            const materialFile = new t3dParser.FileParser(inflatedData);
                            matFiles[mat.filename] = materialFile;
                        }
                        loadMaterialIndex(mIdx + 1, matCallback);
                    });
                }
                loadMaterialIndex(0, function () {
                    /// Create meshes
                    const meshes = renderGeomChunk(localReader, geometryDataChunk, modelDataChunk, sharedTextures, showUnmaterialed);
                    // Build mesh group
                    meshes.forEach(function (mesh) {
                        /// Material flags
                        const knownflags = [
                            /*
                              1-5
                              Has Tex?  IDK      Light?    Alpha?
                
                              5-8
                              0      0       IDK       Water?
                
                              9-12
                              Has Tex?  0      Alpha?    Alpha?
                
                              13
                              IDK KEV
                              */
                            0, // 0 0000 0000 0000    Ground / Wall splashes
                            8, // 0 0000 0000 1000    Broken Khylo roof DDS
                            9, // 0 0000 0000 1001    Tree leaves
                            520, // 0 0010 0000 1000    Some LOD modules, fires, smoke, inside of tents (some DSS textures)
                            2056, // 0 1000 0000 1000    Solid objects, also broken animations
                            /// Solids here are unhappy, or are they? could be animations etc
                            2057, // 0 1000 0000 1001    Windmill sails, bushes, trees, but also a statue and a few pieces of wall
                            2060, // 0 1000 0000 1100    A few solid objects, like wooden barricades, one(!) painting
                            2061, // 0 1000 0000 1101    A few bushes, two paintings
                            2312, // 0 1001 0000 1000    Opaque Clock tower main walls AND IVY
                            2316, // 0 1001 0000 1100    Bushes, inner flower walkway a ramp and a box
                            // Number 10
                            2568, // 0 1010 0000 1000    Lots of solids; walls, tents also some tent details WITH alpa
                            // Number 11
                            2569, // 0 1010 0000 1001    Solids like walls and roofs and appernt non solids like ropes
                            2572, // 0 1010 0000 1100    Solid wooden beems, lamp posts
                            2573, // 0 1010 0000 1101    Lamp holders, bushes, fences, apparent non solids
                            2584, // 0 1010 0001 1000    Fountain Well water
                            2824, // 0 1011 0000 1000    Windows, sign arrows, cloth roofs (non solids) BUT straw roofs
                            2828, // 0 1011 0000 1100    A few fence post (non solids)
                            2840, // 0 1011 0001 1000    Fountain running water + pipe water
                            4617, // 1 0010 0000 1001    Found nothing
                            6664, // 1 1010 0000 1000    Two groups of solid boxes
                        ];
                        // let alphaMask0 = 0x0001 // + 0x0100 + 0x0200;
                        // let alphaMask1 = 0x0010
                        // let alphaMask2 = 0x0100 + 0x0200
                        // let alphaMask2b = 0x0200
                        const texMask = 0x8 + 0x0800;
                        if (knownflags.indexOf(mesh.materialFlags) !== 11) {
                            // return;
                        }
                        // No smoke etc
                        if (mesh.materialFlags === 520) {
                            // return;
                        }
                        // Must have texture
                        if (!showUnmaterialed && !(mesh.materialFlags & texMask)) {
                            return;
                        }
                        // NO lods (Flag 0 = normal)
                        if (mesh.flags === 1 || mesh.flags === 4) {
                            return;
                        }
                        // Add to final colection
                        finalMeshes.push(mesh);
                    }); /// END FOR EACH meshes
                    callback(finalMeshes, boundingSphere);
                }); /// END LOAD MATERIALS CALLBACK
            }
            catch (e) {
                console.warn("Failed rendering model " + filename, e);
                const mesh = new THREE.Mesh(new THREE.BoxGeometry(200, 2000, 200), new THREE.MeshNormalMaterial());
                //@ts-ignore
                mesh.flags = 4;
                //@ts-ignore
                mesh.materialFlags = 2056;
                //@ts-ignore
                mesh.lodOverride = [1000000, 1000000];
                finalMeshes.push(mesh);
                /// Send the final meshes to callback function
                callback(finalMeshes);
            }
        }); /// END FILE LOADED CALLBACK FUNCTION
    }
    /**
     * Gets a mesh array from Model file and sends as argument to callback. Uses a cache of meshes in order
     * to never read the same model file twice.
     *
     * @memberof RenderUtils
     * @async
     * @param  {Number} filename The fileId or baseId of the Model file to load
     * @param  {Array} color RGBA array of 4 integers
     * @param  {LocalReader} localReader The LocalReader object used to read data from the GW2 .dat file.
     * @param {Object} sharedMeshes  Value Object for keeping the mesh cache.
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
    function getMeshesForFilename(filename, color, localReader, sharedMeshes, sharedTextures, showUnmaterialed, callback) {
        /// If this file has already been loaded, just return a reference to the meshes.
        /// isCached will be set to true to inform the caller the meshes will probably
        /// have to be cloned in some way.
        if (sharedMeshes[filename]) {
            callback(sharedMeshes[filename].meshes, true, sharedMeshes[filename].boundingSphere);
        }
        /// If this file has never been loaded, load it using loadMeshFromModelFile
        /// the resulting mesh array will be cached within this model's scope.
        else {
            loadMeshFromModelFile(filename, color, localReader, sharedTextures, showUnmaterialed, function (meshes, boundingSphere) {
                /// Cache result if any.
                if (meshes) {
                    sharedMeshes[filename] = {
                        meshes: meshes,
                        boundingSphere: boundingSphere,
                    };
                }
                /// Allways fire callback.
                callback(meshes, false, boundingSphere);
            });
        }
    }
    /**
     * WIP, Tries to find all fileIds refered by a model file.
     *
     * @memberof RenderUtils
     * @async
     * @param  {Number}   filename    Model file Id
     * @param  {LocalReader}   localReader LocalReader instance to read from
     * @param  {Function} callback   First argument is list of used file IDs
     */
    function getFilesUsedByModel(filename, localReader, callback) {
        const fileIds = [filename];
        /// Load model file
        localReader.loadFile(filename, function (inflatedData) {
            try {
                if (!inflatedData) {
                    throw "Could not find MFT entry for " + filename;
                }
                const modelFile = new t3dParser.FileParser(inflatedData);
                // MODL for materials -> textures
                const modelDataChunk = modelFile.getChunk("modl");
                /// Get materials used by model
                const mats = modelDataChunk.data.permutations[0].materials;
                /// Add each material file AND referenced TEXTURES
                mats.forEach(function (mat) {
                    /// Add material file id
                    const matFileName = mat.filename;
                    fileIds.push(matFileName);
                    /// Add each texture file id
                    mat.textures.forEach(function (tex) {
                        fileIds.push(tex.filename);
                    });
                });
            }
            catch (e) {
                console.warn("Could not export any data", e);
            }
            callback(fileIds);
        });
    }

    var RenderUtils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getFilesUsedByModel: getFilesUsedByModel,
        getInstancedMeshes: getInstancedMeshes,
        getMeshesForFilename: getMeshesForFilename,
        loadMeshFromModelFile: loadMeshFromModelFile,
        renderGeomChunk: renderGeomChunk,
        renderRect: renderRect
    });

    /**
     * A Logger class for T3D
     *
     * This satic class defines severity levels of messages and provides
     * basic logging functionality. Replacing the reference to
     *
     * @namespace
     * @static
     */
    class Logger {
        TYPE_ERROR = 4;
        TYPE_WARNING = 3;
        TYPE_MESSAGE = 2;
        TYPE_PROGRESS = 1;
        TYPE_DEBUG = 0;
        logFunctions = new Array(5);
        constructor() {
            this.logFunctions[this.TYPE_ERROR] = function (...args) {
                console.error(...args);
            };
            this.logFunctions[this.TYPE_WARNING] = function (...args) {
                console.warn(...args);
            };
            this.logFunctions[this.TYPE_MESSAGE] = function (...args) {
                console.log(...args);
            };
            this.logFunctions[this.TYPE_PROGRESS] = function (...args) {
                const argArr = args;
                argArr.unshift("Progress: ");
                console.log(...argArr);
            };
            this.logFunctions[this.TYPE_DEBUG] = function (...args) {
                const argArr = args;
                console.debug(...argArr);
            };
        }
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
        */
        log(...args) {
            /// Require at least 1 argument
            if (arguments.length === 0) {
                return;
            }
            /// Parse arguments to an actual array
            const argArr = args;
            /// Default to message if just one argument was passed
            if (argArr.length === 1) {
                argArr.unshift(this.TYPE_MESSAGE);
            }
            /// Otherwise 1st arg is severity, log/warn/error
            const severity = Math.max(0, Math.min(this.logFunctions.length, argArr.shift()));
            const logFunc = this.logFunctions[severity];
            /// Ouput the rest of the arguments
            logFunc.apply(this, argArr);
        }
    }
    const logger = new Logger();

    // A progress cache is needed to debounce logs at the same percentage
    const progressCache = {};
    /**
     * This utility function is a helper for showing loading progress of dataRenderers.
     * It automatically generates progress logs which can be used outside of the library to show progress bars.
     * Must be used on loop implementations where the maximum index is known in advance
     *
     * @param {Object} logger The default logger or given one
     * @param {Number} currentIndex Current index of the item being loaded
     * @param {Number} maxIndex Maximum index of items to load
     * @param {String} progressName Name of the resource being loaded
     */
    function progress(logger$1, currentIndex, maxIndex, progressName) {
        const percent = Math.round((1000.0 * currentIndex) / maxIndex) / 10.0;
        // Make sure we don't spam logs
        if (progressCache[progressName] !== percent) {
            const consistentPercent = percent + (percent.toString().indexOf(".") < 0 ? ".0" : "");
            logger$1.log(logger.TYPE_PROGRESS, progressName, consistentPercent);
            progressCache[progressName] = percent;
        }
        // Clean cache on last item
        if (currentIndex === maxIndex) {
            progressCache[progressName] = undefined;
        }
    }

    /**
     *
     * A renderer that generates property models for a map.
     *
     * @class PropertiesRenderer
     * @constructor
     * @extends DataRenderer
     * @param  {LocalReader} localReader  The LocalReader instance to read data from.
     * @param  {Object} settings     Any settings used by this renderer.
     * *Must* specify "mapFile", a FileParser.
     * @param  {Object} context      Shared value object between renderers.
     * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
     */
    class PropertiesRenderer extends DataRenderer {
        static rendererName = "PropertiesRenderer";
        showUnmaterialized;
        mapFile;
        meshCache;
        textureCache;
        models;
        modelsList = [];
        constructor(localReader, settings, context, logger) {
            super(localReader, settings, context, logger, "PropertiesRenderer");
            this.mapFile = this.settings.mapFile;
            this.showUnmaterialized = this.settings.showUnmaterialized || false;
            this.meshCache = {};
            this.textureCache = {};
            this.models = {};
        }
        /**
         * Renders all property meshes in a GW2 map described by the map's PROP chunk.
         * Output fileds generated:
         *
         * - *meshes* An array of THREE.Mesh objects visualizing all property models refered by this map.
         *
         * @async
         * @param  {Function} callback Fires when renderer is finished, does not take arguments.
         */
        renderAsync(callback) {
            this.getOutput().meshes = [];
            const propertiesChunkData = this.mapFile.getChunk("prp2").data;
            if (!propertiesChunkData) {
                return callback();
            }
            // Get all different prop types
            const props = []
                .concat(propertiesChunkData.propArray)
                .concat(propertiesChunkData.propAnimArray)
                .concat(propertiesChunkData.propInstanceArray)
                .concat(propertiesChunkData.propMetaArray);
            /// Build an object containing all the data we need for each prop
            this.models = props.reduce((models, prop) => {
                const propSize = prop.transforms ? prop.transforms.length + 1 : 1;
                if (models[prop.filename]) {
                    models[prop.filename].props.push(prop);
                    models[prop.filename].size += propSize;
                }
                else {
                    models[prop.filename] = {
                        props: [prop],
                        size: propSize,
                    };
                }
                return models;
            }, {});
            this.modelsList = Object.keys(this.models);
            this.renderModel(0, callback);
        }
        getFileIdsAsync(callback) {
            this.logger.log(T3D.Logger.TYPE_WARNING, "PropertiesRenderer.getFileIdsAsync is not implemented");
            callback([]);
        }
        /**
         * PRIVATE METHODS
         */
        /**
         * To optimize the rendering on the GPU we render each model only once and use instances for
         * any other place using the same model. This allows us to have a much lower amount of draw calls
         * and usage of GPU memory compared to a naive approach having a mesh for each model.
         */
        renderModel(index, callback) {
            if (index >= this.modelsList.length) {
                this.meshCache = {};
                this.textureCache = {};
                this.models = {};
                return callback();
            }
            progress(this.logger, index, this.modelsList.length, "Loading 3D Models (Props)");
            const modelName = parseInt(this.modelsList[index]);
            getMeshesForFilename(modelName, this.models[modelName].props[0].color, this.localReader, this.meshCache, this.textureCache, this.showUnmaterialized, 
            // We don't care about cached meshes since we know we only ask for each meshes once.
            (meshes) => {
                if (meshes) {
                    this.placeModelOnScene(modelName, meshes /*, boundingSphere*/);
                }
                this.renderModel(index + 1, callback);
            });
        }
        /**
         * Gets the meshes of a specific model, merge them together as an instanced mesh
         * and place them in the scene where they are referenced by the props.
         * @param {number} modelName The baseId of the model
         * @param {*} meshes The 3d models of the model
         */
        placeModelOnScene(modelName, meshes) {
            const model = this.models[modelName];
            if (meshes.length === 0) {
                return;
            }
            const instancedMeshes = getInstancedMeshes(meshes, model.size);
            for (const instancedMesh of instancedMeshes) {
                let instancedIndex = 0;
                for (const prop of model.props) {
                    instancedMesh.setMatrixAt(instancedIndex, getMatrixForProp(prop));
                    instancedIndex += 1;
                    for (const transform of prop.transforms || []) {
                        instancedMesh.setMatrixAt(instancedIndex, getMatrixForProp(transform));
                        instancedIndex += 1;
                    }
                }
            }
            for (const instancedMesh of instancedMeshes) {
                this.getOutput().meshes.push(instancedMesh);
            }
        }
    }
    /**
     * Return a Matrix4 for a given prop defining the Scale Rotation and Location of a model
     * @param {Object} propData
     * @returns {THREE.Matrix4}
     */
    function getMatrixForProp(propData) {
        const matrix = new THREE.Matrix4();
        matrix.makeRotationFromEuler(new THREE.Euler(propData.rotation[0], -propData.rotation[2], -propData.rotation[1], "ZXY"));
        matrix.scale(new THREE.Vector3(propData.scale, propData.scale, propData.scale));
        matrix.setPosition(propData.position[0], -propData.position[2], -propData.position[1]);
        return matrix;
    }

    /**
     *
     * A renderer that generates meshes for a single model file.
     *
     * @class SingleModelRenderer
     * @constructor
     * @extends DataRenderer
     * @param  {LocalReader} localReader  The LocalReader instance to read data from.
     * @param  {Object} settings     Any settings used by this renderer.
     * *Must* specify "id" the base ID or file ID of the model to generate meshes for.
     * @param  {Object} context      Shared value object between renderers.
     * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
     */
    class SingleModelRenderer extends DataRenderer {
        static rendererName = "SingleModelRenderer";
        constructor(localReader, settings, context, logger) {
            super(localReader, settings, context, logger, "SingleModelRenderer");
        }
        /**
         * Output fileds generated:
         *
         * - *meshes* An array of THREE.Mesh objects visualizing this model file.
         *
         * @async
         * @param  {Function} callback Fires when renderer is finished, does not take arguments.
         */
        renderAsync(callback) {
            const self = this;
            /// Get file id
            const fileId = this.settings.id;
            const showUnmaterialed = true;
            /// Load the model file
            let meshCache = {};
            const textureCache = {};
            /// Set up output array
            self.getOutput().meshes = [];
            getMeshesForFilename(fileId, 0x00ff00, self.localReader, meshCache, textureCache, showUnmaterialed, function (meshes, isCached, boundingSphere) {
                if (meshes) {
                    meshes.forEach(function (mesh) {
                        mesh.boundingSphere = boundingSphere;
                        self.getOutput().meshes.push(mesh);
                    });
                }
                /// Fire callback after all meshes have been added.
                meshCache = {};
                callback();
            });
        }
    }

    /// TODO: port fog from in-engine
    function getFragmentShader() {
        return [
            "uniform vec2 uvScale;",
            "uniform vec2 offset;",
            "uniform sampler2D texturePicker;",
            "uniform sampler2D texturePicker2;",
            "uniform sampler2D texture1;",
            "uniform sampler2D texture2;",
            "uniform sampler2D texture3;",
            "uniform sampler2D texture4;",
            "#include <common>",
            "#include <logdepthbuf_pars_fragment>",
            "varying vec2 vUv;",
            "varying vec3 vecNormal;",
            "vec3 blend(",
            "vec4 texture1, float a1, vec4 texture2, float a2,",
            "vec4 texture3, float a3, vec4 texture4, float a4)",
            "{",
            "float depth = 2.0;",
            "float alphaMult = 1.0;",
            "float alphaAdd  = 0.0;",
            "a1 *= 4.0;",
            "a2 *= 4.0;",
            "a3 *= 4.0;",
            "a4 *= 4.0;",
            "a1 =  a1+(1.5+texture1.a);",
            "a2 =  a2+(1.5+texture2.a);",
            "a3 =  a3+(1.5+texture3.a);",
            "a4 =  a4+(1.5+texture4.a);",
            "float ma = max(a1,a2);",
            "ma = max(ma,a3);",
            "ma = max(ma,a4);",
            "ma -= depth;",
            "float b1 = max(a1 - ma, 0.0);",
            "float b2 = max(a2 - ma, 0.0);",
            "float b3 = max(a3 - ma, 0.0);",
            "float b4 = max(a4 - ma, 0.0);",
            "return (",
            "texture1.rgb * b1 + texture2.rgb * b2 +",
            "texture3.rgb * b3 + texture4.rgb * b4 ",
            ") / (b1 + b2 + b3 + b4);",
            "}",
            "void main( void ) {",
            "vec2 position = vUv*uvScale;",
            "float edge = 1.0/1024.0;",
            "vec2 compPos = edge + (vUv*0.25 + offset) * (1.0-edge*2.0);",
            "vec4 tp1 = texture2D( texturePicker, compPos);",
            "vec4 tp2 = texture2D( texturePicker2, compPos);",
            "vec4 composite = tp1;",
            "vec4 t1 = texture2D( texture1, position );",
            "vec4 t2 = texture2D( texture2, position );",
            "vec4 t3 = texture2D( texture3, position );",
            "vec4 t4 = texture2D( texture4, position );",
            "vec3 color = blend(",
            "t1, tp1.a,",
            "t2, tp1.b,",
            "t3, tp1.g,",
            "t4, tp1.r",
            ");",
            "color *= 0.5+tp2.r;",
            "gl_FragColor = vec4(color,1.0);",
            "#include <logdepthbuf_fragment>",
            "}",
        ].join("\n");
    }
    function getVertexShader() {
        return [
            "varying vec2 vUv;",
            "varying vec3 vecNormal;",
            "#include <common>",
            "#include <logdepthbuf_pars_vertex>",
            "void main()",
            "{",
            "vUv =  uv;",
            "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
            "vecNormal = (modelMatrix * vec4(normal, 0.0)).xyz;",
            "gl_Position = projectionMatrix * mvPosition;",
            "#include <logdepthbuf_vertex>",
            "}",
        ].join("\n");
    }

    /**
     * @license
     * Copyright 2010-2023 Three.js Authors
     * SPDX-License-Identifier: MIT
     */
    const REVISION = '160';
    const FrontSide = 0;
    const BackSide = 1;
    const NormalBlending = 1;
    const AddEquation = 100;
    const SrcAlphaFactor = 204;
    const OneMinusSrcAlphaFactor = 205;
    const LessEqualDepth = 3;
    const MultiplyOperation = 0;

    const UVMapping = 300;
    const RepeatWrapping = 1000;
    const ClampToEdgeWrapping = 1001;
    const MirroredRepeatWrapping = 1002;
    const NearestFilter = 1003;
    const LinearFilter = 1006;
    const LinearMipmapLinearFilter = 1008;
    const UnsignedByteType = 1009;
    const UnsignedIntType = 1014;
    const FloatType = 1015;
    const UnsignedInt248Type = 1020;
    const RGBAFormat = 1023;
    const DepthFormat = 1026;
    const DepthStencilFormat = 1027;
    /** @deprecated Use LinearSRGBColorSpace or NoColorSpace in three.js r152+. */
    const LinearEncoding = 3000;
    /** @deprecated Use SRGBColorSpace in three.js r152+. */
    const sRGBEncoding = 3001;

    // Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.
    const NoColorSpace = '';
    const SRGBColorSpace = 'srgb';
    const LinearSRGBColorSpace = 'srgb-linear';
    const DisplayP3ColorSpace = 'display-p3';
    const LinearDisplayP3ColorSpace = 'display-p3-linear';

    const LinearTransfer = 'linear';
    const SRGBTransfer = 'srgb';

    const Rec709Primaries = 'rec709';
    const P3Primaries = 'p3';
    const KeepStencilOp = 7680;
    const AlwaysStencilFunc = 519;
    const LessEqualCompare = 515;

    const StaticDrawUsage = 35044;

    const WebGLCoordinateSystem = 2000;
    const WebGPUCoordinateSystem = 2001;

    /**
     * https://github.com/mrdoob/eventdispatcher.js/
     */

    class EventDispatcher {

    	addEventListener( type, listener ) {

    		if ( this._listeners === undefined ) this._listeners = {};

    		const listeners = this._listeners;

    		if ( listeners[ type ] === undefined ) {

    			listeners[ type ] = [];

    		}

    		if ( listeners[ type ].indexOf( listener ) === - 1 ) {

    			listeners[ type ].push( listener );

    		}

    	}

    	hasEventListener( type, listener ) {

    		if ( this._listeners === undefined ) return false;

    		const listeners = this._listeners;

    		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;

    	}

    	removeEventListener( type, listener ) {

    		if ( this._listeners === undefined ) return;

    		const listeners = this._listeners;
    		const listenerArray = listeners[ type ];

    		if ( listenerArray !== undefined ) {

    			const index = listenerArray.indexOf( listener );

    			if ( index !== - 1 ) {

    				listenerArray.splice( index, 1 );

    			}

    		}

    	}

    	dispatchEvent( event ) {

    		if ( this._listeners === undefined ) return;

    		const listeners = this._listeners;
    		const listenerArray = listeners[ event.type ];

    		if ( listenerArray !== undefined ) {

    			event.target = this;

    			// Make a copy, in case listeners are removed while iterating.
    			const array = listenerArray.slice( 0 );

    			for ( let i = 0, l = array.length; i < l; i ++ ) {

    				array[ i ].call( this, event );

    			}

    			event.target = null;

    		}

    	}

    }

    const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
    function generateUUID() {

    	const d0 = Math.random() * 0xffffffff | 0;
    	const d1 = Math.random() * 0xffffffff | 0;
    	const d2 = Math.random() * 0xffffffff | 0;
    	const d3 = Math.random() * 0xffffffff | 0;
    	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
    			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
    			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
    			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

    	// .toLowerCase() here flattens concatenated strings to save heap memory space.
    	return uuid.toLowerCase();

    }

    function clamp( value, min, max ) {

    	return Math.max( min, Math.min( max, value ) );

    }

    // compute euclidean modulo of m % n
    // https://en.wikipedia.org/wiki/Modulo_operation
    function euclideanModulo( n, m ) {

    	return ( ( n % m ) + m ) % m;

    }

    // https://en.wikipedia.org/wiki/Linear_interpolation
    function lerp( x, y, t ) {

    	return ( 1 - t ) * x + t * y;

    }

    function denormalize( value, array ) {

    	switch ( array.constructor ) {

    		case Float32Array:

    			return value;

    		case Uint32Array:

    			return value / 4294967295.0;

    		case Uint16Array:

    			return value / 65535.0;

    		case Uint8Array:

    			return value / 255.0;

    		case Int32Array:

    			return Math.max( value / 2147483647.0, - 1.0 );

    		case Int16Array:

    			return Math.max( value / 32767.0, - 1.0 );

    		case Int8Array:

    			return Math.max( value / 127.0, - 1.0 );

    		default:

    			throw new Error( 'Invalid component type.' );

    	}

    }

    function normalize( value, array ) {

    	switch ( array.constructor ) {

    		case Float32Array:

    			return value;

    		case Uint32Array:

    			return Math.round( value * 4294967295.0 );

    		case Uint16Array:

    			return Math.round( value * 65535.0 );

    		case Uint8Array:

    			return Math.round( value * 255.0 );

    		case Int32Array:

    			return Math.round( value * 2147483647.0 );

    		case Int16Array:

    			return Math.round( value * 32767.0 );

    		case Int8Array:

    			return Math.round( value * 127.0 );

    		default:

    			throw new Error( 'Invalid component type.' );

    	}

    }

    class Vector2 {

    	constructor( x = 0, y = 0 ) {

    		Vector2.prototype.isVector2 = true;

    		this.x = x;
    		this.y = y;

    	}

    	get width() {

    		return this.x;

    	}

    	set width( value ) {

    		this.x = value;

    	}

    	get height() {

    		return this.y;

    	}

    	set height( value ) {

    		this.y = value;

    	}

    	set( x, y ) {

    		this.x = x;
    		this.y = y;

    		return this;

    	}

    	setScalar( scalar ) {

    		this.x = scalar;
    		this.y = scalar;

    		return this;

    	}

    	setX( x ) {

    		this.x = x;

    		return this;

    	}

    	setY( y ) {

    		this.y = y;

    		return this;

    	}

    	setComponent( index, value ) {

    		switch ( index ) {

    			case 0: this.x = value; break;
    			case 1: this.y = value; break;
    			default: throw new Error( 'index is out of range: ' + index );

    		}

    		return this;

    	}

    	getComponent( index ) {

    		switch ( index ) {

    			case 0: return this.x;
    			case 1: return this.y;
    			default: throw new Error( 'index is out of range: ' + index );

    		}

    	}

    	clone() {

    		return new this.constructor( this.x, this.y );

    	}

    	copy( v ) {

    		this.x = v.x;
    		this.y = v.y;

    		return this;

    	}

    	add( v ) {

    		this.x += v.x;
    		this.y += v.y;

    		return this;

    	}

    	addScalar( s ) {

    		this.x += s;
    		this.y += s;

    		return this;

    	}

    	addVectors( a, b ) {

    		this.x = a.x + b.x;
    		this.y = a.y + b.y;

    		return this;

    	}

    	addScaledVector( v, s ) {

    		this.x += v.x * s;
    		this.y += v.y * s;

    		return this;

    	}

    	sub( v ) {

    		this.x -= v.x;
    		this.y -= v.y;

    		return this;

    	}

    	subScalar( s ) {

    		this.x -= s;
    		this.y -= s;

    		return this;

    	}

    	subVectors( a, b ) {

    		this.x = a.x - b.x;
    		this.y = a.y - b.y;

    		return this;

    	}

    	multiply( v ) {

    		this.x *= v.x;
    		this.y *= v.y;

    		return this;

    	}

    	multiplyScalar( scalar ) {

    		this.x *= scalar;
    		this.y *= scalar;

    		return this;

    	}

    	divide( v ) {

    		this.x /= v.x;
    		this.y /= v.y;

    		return this;

    	}

    	divideScalar( scalar ) {

    		return this.multiplyScalar( 1 / scalar );

    	}

    	applyMatrix3( m ) {

    		const x = this.x, y = this.y;
    		const e = m.elements;

    		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
    		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

    		return this;

    	}

    	min( v ) {

    		this.x = Math.min( this.x, v.x );
    		this.y = Math.min( this.y, v.y );

    		return this;

    	}

    	max( v ) {

    		this.x = Math.max( this.x, v.x );
    		this.y = Math.max( this.y, v.y );

    		return this;

    	}

    	clamp( min, max ) {

    		// assumes min < max, componentwise

    		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
    		this.y = Math.max( min.y, Math.min( max.y, this.y ) );

    		return this;

    	}

    	clampScalar( minVal, maxVal ) {

    		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
    		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );

    		return this;

    	}

    	clampLength( min, max ) {

    		const length = this.length();

    		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

    	}

    	floor() {

    		this.x = Math.floor( this.x );
    		this.y = Math.floor( this.y );

    		return this;

    	}

    	ceil() {

    		this.x = Math.ceil( this.x );
    		this.y = Math.ceil( this.y );

    		return this;

    	}

    	round() {

    		this.x = Math.round( this.x );
    		this.y = Math.round( this.y );

    		return this;

    	}

    	roundToZero() {

    		this.x = Math.trunc( this.x );
    		this.y = Math.trunc( this.y );

    		return this;

    	}

    	negate() {

    		this.x = - this.x;
    		this.y = - this.y;

    		return this;

    	}

    	dot( v ) {

    		return this.x * v.x + this.y * v.y;

    	}

    	cross( v ) {

    		return this.x * v.y - this.y * v.x;

    	}

    	lengthSq() {

    		return this.x * this.x + this.y * this.y;

    	}

    	length() {

    		return Math.sqrt( this.x * this.x + this.y * this.y );

    	}

    	manhattanLength() {

    		return Math.abs( this.x ) + Math.abs( this.y );

    	}

    	normalize() {

    		return this.divideScalar( this.length() || 1 );

    	}

    	angle() {

    		// computes the angle in radians with respect to the positive x-axis

    		const angle = Math.atan2( - this.y, - this.x ) + Math.PI;

    		return angle;

    	}

    	angleTo( v ) {

    		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

    		if ( denominator === 0 ) return Math.PI / 2;

    		const theta = this.dot( v ) / denominator;

    		// clamp, to handle numerical problems

    		return Math.acos( clamp( theta, - 1, 1 ) );

    	}

    	distanceTo( v ) {

    		return Math.sqrt( this.distanceToSquared( v ) );

    	}

    	distanceToSquared( v ) {

    		const dx = this.x - v.x, dy = this.y - v.y;
    		return dx * dx + dy * dy;

    	}

    	manhattanDistanceTo( v ) {

    		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

    	}

    	setLength( length ) {

    		return this.normalize().multiplyScalar( length );

    	}

    	lerp( v, alpha ) {

    		this.x += ( v.x - this.x ) * alpha;
    		this.y += ( v.y - this.y ) * alpha;

    		return this;

    	}

    	lerpVectors( v1, v2, alpha ) {

    		this.x = v1.x + ( v2.x - v1.x ) * alpha;
    		this.y = v1.y + ( v2.y - v1.y ) * alpha;

    		return this;

    	}

    	equals( v ) {

    		return ( ( v.x === this.x ) && ( v.y === this.y ) );

    	}

    	fromArray( array, offset = 0 ) {

    		this.x = array[ offset ];
    		this.y = array[ offset + 1 ];

    		return this;

    	}

    	toArray( array = [], offset = 0 ) {

    		array[ offset ] = this.x;
    		array[ offset + 1 ] = this.y;

    		return array;

    	}

    	fromBufferAttribute( attribute, index ) {

    		this.x = attribute.getX( index );
    		this.y = attribute.getY( index );

    		return this;

    	}

    	rotateAround( center, angle ) {

    		const c = Math.cos( angle ), s = Math.sin( angle );

    		const x = this.x - center.x;
    		const y = this.y - center.y;

    		this.x = x * c - y * s + center.x;
    		this.y = x * s + y * c + center.y;

    		return this;

    	}

    	random() {

    		this.x = Math.random();
    		this.y = Math.random();

    		return this;

    	}

    	*[ Symbol.iterator ]() {

    		yield this.x;
    		yield this.y;

    	}

    }

    class Matrix3 {

    	constructor( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

    		Matrix3.prototype.isMatrix3 = true;

    		this.elements = [

    			1, 0, 0,
    			0, 1, 0,
    			0, 0, 1

    		];

    		if ( n11 !== undefined ) {

    			this.set( n11, n12, n13, n21, n22, n23, n31, n32, n33 );

    		}

    	}

    	set( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

    		const te = this.elements;

    		te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
    		te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
    		te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

    		return this;

    	}

    	identity() {

    		this.set(

    			1, 0, 0,
    			0, 1, 0,
    			0, 0, 1

    		);

    		return this;

    	}

    	copy( m ) {

    		const te = this.elements;
    		const me = m.elements;

    		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
    		te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
    		te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

    		return this;

    	}

    	extractBasis( xAxis, yAxis, zAxis ) {

    		xAxis.setFromMatrix3Column( this, 0 );
    		yAxis.setFromMatrix3Column( this, 1 );
    		zAxis.setFromMatrix3Column( this, 2 );

    		return this;

    	}

    	setFromMatrix4( m ) {

    		const me = m.elements;

    		this.set(

    			me[ 0 ], me[ 4 ], me[ 8 ],
    			me[ 1 ], me[ 5 ], me[ 9 ],
    			me[ 2 ], me[ 6 ], me[ 10 ]

    		);

    		return this;

    	}

    	multiply( m ) {

    		return this.multiplyMatrices( this, m );

    	}

    	premultiply( m ) {

    		return this.multiplyMatrices( m, this );

    	}

    	multiplyMatrices( a, b ) {

    		const ae = a.elements;
    		const be = b.elements;
    		const te = this.elements;

    		const a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
    		const a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
    		const a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

    		const b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
    		const b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
    		const b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

    		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
    		te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
    		te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

    		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
    		te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
    		te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

    		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
    		te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
    		te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

    		return this;

    	}

    	multiplyScalar( s ) {

    		const te = this.elements;

    		te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
    		te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
    		te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

    		return this;

    	}

    	determinant() {

    		const te = this.elements;

    		const a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
    			d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
    			g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

    		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

    	}

    	invert() {

    		const te = this.elements,

    			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ],
    			n12 = te[ 3 ], n22 = te[ 4 ], n32 = te[ 5 ],
    			n13 = te[ 6 ], n23 = te[ 7 ], n33 = te[ 8 ],

    			t11 = n33 * n22 - n32 * n23,
    			t12 = n32 * n13 - n33 * n12,
    			t13 = n23 * n12 - n22 * n13,

    			det = n11 * t11 + n21 * t12 + n31 * t13;

    		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

    		const detInv = 1 / det;

    		te[ 0 ] = t11 * detInv;
    		te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
    		te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

    		te[ 3 ] = t12 * detInv;
    		te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
    		te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

    		te[ 6 ] = t13 * detInv;
    		te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
    		te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

    		return this;

    	}

    	transpose() {

    		let tmp;
    		const m = this.elements;

    		tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
    		tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
    		tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

    		return this;

    	}

    	getNormalMatrix( matrix4 ) {

    		return this.setFromMatrix4( matrix4 ).invert().transpose();

    	}

    	transposeIntoArray( r ) {

    		const m = this.elements;

    		r[ 0 ] = m[ 0 ];
    		r[ 1 ] = m[ 3 ];
    		r[ 2 ] = m[ 6 ];
    		r[ 3 ] = m[ 1 ];
    		r[ 4 ] = m[ 4 ];
    		r[ 5 ] = m[ 7 ];
    		r[ 6 ] = m[ 2 ];
    		r[ 7 ] = m[ 5 ];
    		r[ 8 ] = m[ 8 ];

    		return this;

    	}

    	setUvTransform( tx, ty, sx, sy, rotation, cx, cy ) {

    		const c = Math.cos( rotation );
    		const s = Math.sin( rotation );

    		this.set(
    			sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
    			- sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
    			0, 0, 1
    		);

    		return this;

    	}

    	//

    	scale( sx, sy ) {

    		this.premultiply( _m3.makeScale( sx, sy ) );

    		return this;

    	}

    	rotate( theta ) {

    		this.premultiply( _m3.makeRotation( - theta ) );

    		return this;

    	}

    	translate( tx, ty ) {

    		this.premultiply( _m3.makeTranslation( tx, ty ) );

    		return this;

    	}

    	// for 2D Transforms

    	makeTranslation( x, y ) {

    		if ( x.isVector2 ) {

    			this.set(

    				1, 0, x.x,
    				0, 1, x.y,
    				0, 0, 1

    			);

    		} else {

    			this.set(

    				1, 0, x,
    				0, 1, y,
    				0, 0, 1

    			);

    		}

    		return this;

    	}

    	makeRotation( theta ) {

    		// counterclockwise

    		const c = Math.cos( theta );
    		const s = Math.sin( theta );

    		this.set(

    			c, - s, 0,
    			s, c, 0,
    			0, 0, 1

    		);

    		return this;

    	}

    	makeScale( x, y ) {

    		this.set(

    			x, 0, 0,
    			0, y, 0,
    			0, 0, 1

    		);

    		return this;

    	}

    	//

    	equals( matrix ) {

    		const te = this.elements;
    		const me = matrix.elements;

    		for ( let i = 0; i < 9; i ++ ) {

    			if ( te[ i ] !== me[ i ] ) return false;

    		}

    		return true;

    	}

    	fromArray( array, offset = 0 ) {

    		for ( let i = 0; i < 9; i ++ ) {

    			this.elements[ i ] = array[ i + offset ];

    		}

    		return this;

    	}

    	toArray( array = [], offset = 0 ) {

    		const te = this.elements;

    		array[ offset ] = te[ 0 ];
    		array[ offset + 1 ] = te[ 1 ];
    		array[ offset + 2 ] = te[ 2 ];

    		array[ offset + 3 ] = te[ 3 ];
    		array[ offset + 4 ] = te[ 4 ];
    		array[ offset + 5 ] = te[ 5 ];

    		array[ offset + 6 ] = te[ 6 ];
    		array[ offset + 7 ] = te[ 7 ];
    		array[ offset + 8 ] = te[ 8 ];

    		return array;

    	}

    	clone() {

    		return new this.constructor().fromArray( this.elements );

    	}

    }

    const _m3 = /*@__PURE__*/ new Matrix3();

    function arrayNeedsUint32( array ) {

    	// assumes larger values usually on last

    	for ( let i = array.length - 1; i >= 0; -- i ) {

    		if ( array[ i ] >= 65535 ) return true; // account for PRIMITIVE_RESTART_FIXED_INDEX, #24565

    	}

    	return false;

    }

    function createElementNS( name ) {

    	return document.createElementNS( 'http://www.w3.org/1999/xhtml', name );

    }

    const _cache = {};

    function warnOnce( message ) {

    	if ( message in _cache ) return;

    	_cache[ message ] = true;

    	console.warn( message );

    }

    /**
     * Matrices converting P3 <-> Rec. 709 primaries, without gamut mapping
     * or clipping. Based on W3C specifications for sRGB and Display P3,
     * and ICC specifications for the D50 connection space. Values in/out
     * are _linear_ sRGB and _linear_ Display P3.
     *
     * Note that both sRGB and Display P3 use the sRGB transfer functions.
     *
     * Reference:
     * - http://www.russellcottrell.com/photo/matrixCalculator.htm
     */

    const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = /*@__PURE__*/ new Matrix3().set(
    	0.8224621, 0.177538, 0.0,
    	0.0331941, 0.9668058, 0.0,
    	0.0170827, 0.0723974, 0.9105199,
    );

    const LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = /*@__PURE__*/ new Matrix3().set(
    	1.2249401, - 0.2249404, 0.0,
    	- 0.0420569, 1.0420571, 0.0,
    	- 0.0196376, - 0.0786361, 1.0982735
    );

    /**
     * Defines supported color spaces by transfer function and primaries,
     * and provides conversions to/from the Linear-sRGB reference space.
     */
    const COLOR_SPACES = {
    	[ LinearSRGBColorSpace ]: {
    		transfer: LinearTransfer,
    		primaries: Rec709Primaries,
    		toReference: ( color ) => color,
    		fromReference: ( color ) => color,
    	},
    	[ SRGBColorSpace ]: {
    		transfer: SRGBTransfer,
    		primaries: Rec709Primaries,
    		toReference: ( color ) => color.convertSRGBToLinear(),
    		fromReference: ( color ) => color.convertLinearToSRGB(),
    	},
    	[ LinearDisplayP3ColorSpace ]: {
    		transfer: LinearTransfer,
    		primaries: P3Primaries,
    		toReference: ( color ) => color.applyMatrix3( LINEAR_DISPLAY_P3_TO_LINEAR_SRGB ),
    		fromReference: ( color ) => color.applyMatrix3( LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 ),
    	},
    	[ DisplayP3ColorSpace ]: {
    		transfer: SRGBTransfer,
    		primaries: P3Primaries,
    		toReference: ( color ) => color.convertSRGBToLinear().applyMatrix3( LINEAR_DISPLAY_P3_TO_LINEAR_SRGB ),
    		fromReference: ( color ) => color.applyMatrix3( LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 ).convertLinearToSRGB(),
    	},
    };

    const SUPPORTED_WORKING_COLOR_SPACES = new Set( [ LinearSRGBColorSpace, LinearDisplayP3ColorSpace ] );

    const ColorManagement = {

    	enabled: true,

    	_workingColorSpace: LinearSRGBColorSpace,

    	get workingColorSpace() {

    		return this._workingColorSpace;

    	},

    	set workingColorSpace( colorSpace ) {

    		if ( ! SUPPORTED_WORKING_COLOR_SPACES.has( colorSpace ) ) {

    			throw new Error( `Unsupported working color space, "${ colorSpace }".` );

    		}

    		this._workingColorSpace = colorSpace;

    	},

    	convert: function ( color, sourceColorSpace, targetColorSpace ) {

    		if ( this.enabled === false || sourceColorSpace === targetColorSpace || ! sourceColorSpace || ! targetColorSpace ) {

    			return color;

    		}

    		const sourceToReference = COLOR_SPACES[ sourceColorSpace ].toReference;
    		const targetFromReference = COLOR_SPACES[ targetColorSpace ].fromReference;

    		return targetFromReference( sourceToReference( color ) );

    	},

    	fromWorkingColorSpace: function ( color, targetColorSpace ) {

    		return this.convert( color, this._workingColorSpace, targetColorSpace );

    	},

    	toWorkingColorSpace: function ( color, sourceColorSpace ) {

    		return this.convert( color, sourceColorSpace, this._workingColorSpace );

    	},

    	getPrimaries: function ( colorSpace ) {

    		return COLOR_SPACES[ colorSpace ].primaries;

    	},

    	getTransfer: function ( colorSpace ) {

    		if ( colorSpace === NoColorSpace ) return LinearTransfer;

    		return COLOR_SPACES[ colorSpace ].transfer;

    	},

    };


    function SRGBToLinear( c ) {

    	return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );

    }

    function LinearToSRGB( c ) {

    	return ( c < 0.0031308 ) ? c * 12.92 : 1.055 * ( Math.pow( c, 0.41666 ) ) - 0.055;

    }

    let _canvas;

    class ImageUtils {

    	static getDataURL( image ) {

    		if ( /^data:/i.test( image.src ) ) {

    			return image.src;

    		}

    		if ( typeof HTMLCanvasElement === 'undefined' ) {

    			return image.src;

    		}

    		let canvas;

    		if ( image instanceof HTMLCanvasElement ) {

    			canvas = image;

    		} else {

    			if ( _canvas === undefined ) _canvas = createElementNS( 'canvas' );

    			_canvas.width = image.width;
    			_canvas.height = image.height;

    			const context = _canvas.getContext( '2d' );

    			if ( image instanceof ImageData ) {

    				context.putImageData( image, 0, 0 );

    			} else {

    				context.drawImage( image, 0, 0, image.width, image.height );

    			}

    			canvas = _canvas;

    		}

    		if ( canvas.width > 2048 || canvas.height > 2048 ) {

    			console.warn( 'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', image );

    			return canvas.toDataURL( 'image/jpeg', 0.6 );

    		} else {

    			return canvas.toDataURL( 'image/png' );

    		}

    	}

    	static sRGBToLinear( image ) {

    		if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
    			( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
    			( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

    			const canvas = createElementNS( 'canvas' );

    			canvas.width = image.width;
    			canvas.height = image.height;

    			const context = canvas.getContext( '2d' );
    			context.drawImage( image, 0, 0, image.width, image.height );

    			const imageData = context.getImageData( 0, 0, image.width, image.height );
    			const data = imageData.data;

    			for ( let i = 0; i < data.length; i ++ ) {

    				data[ i ] = SRGBToLinear( data[ i ] / 255 ) * 255;

    			}

    			context.putImageData( imageData, 0, 0 );

    			return canvas;

    		} else if ( image.data ) {

    			const data = image.data.slice( 0 );

    			for ( let i = 0; i < data.length; i ++ ) {

    				if ( data instanceof Uint8Array || data instanceof Uint8ClampedArray ) {

    					data[ i ] = Math.floor( SRGBToLinear( data[ i ] / 255 ) * 255 );

    				} else {

    					// assuming float

    					data[ i ] = SRGBToLinear( data[ i ] );

    				}

    			}

    			return {
    				data: data,
    				width: image.width,
    				height: image.height
    			};

    		} else {

    			console.warn( 'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.' );
    			return image;

    		}

    	}

    }

    let _sourceId = 0;

    class Source {

    	constructor( data = null ) {

    		this.isSource = true;

    		Object.defineProperty( this, 'id', { value: _sourceId ++ } );

    		this.uuid = generateUUID();

    		this.data = data;

    		this.version = 0;

    	}

    	set needsUpdate( value ) {

    		if ( value === true ) this.version ++;

    	}

    	toJSON( meta ) {

    		const isRootObject = ( meta === undefined || typeof meta === 'string' );

    		if ( ! isRootObject && meta.images[ this.uuid ] !== undefined ) {

    			return meta.images[ this.uuid ];

    		}

    		const output = {
    			uuid: this.uuid,
    			url: ''
    		};

    		const data = this.data;

    		if ( data !== null ) {

    			let url;

    			if ( Array.isArray( data ) ) {

    				// cube texture

    				url = [];

    				for ( let i = 0, l = data.length; i < l; i ++ ) {

    					if ( data[ i ].isDataTexture ) {

    						url.push( serializeImage( data[ i ].image ) );

    					} else {

    						url.push( serializeImage( data[ i ] ) );

    					}

    				}

    			} else {

    				// texture

    				url = serializeImage( data );

    			}

    			output.url = url;

    		}

    		if ( ! isRootObject ) {

    			meta.images[ this.uuid ] = output;

    		}

    		return output;

    	}

    }

    function serializeImage( image ) {

    	if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
    		( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
    		( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

    		// default images

    		return ImageUtils.getDataURL( image );

    	} else {

    		if ( image.data ) {

    			// images of DataTexture

    			return {
    				data: Array.from( image.data ),
    				width: image.width,
    				height: image.height,
    				type: image.data.constructor.name
    			};

    		} else {

    			console.warn( 'THREE.Texture: Unable to serialize Texture.' );
    			return {};

    		}

    	}

    }

    let _textureId = 0;

    class Texture extends EventDispatcher {

    	constructor( image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace ) {

    		super();

    		this.isTexture = true;

    		Object.defineProperty( this, 'id', { value: _textureId ++ } );

    		this.uuid = generateUUID();

    		this.name = '';

    		this.source = new Source( image );
    		this.mipmaps = [];

    		this.mapping = mapping;
    		this.channel = 0;

    		this.wrapS = wrapS;
    		this.wrapT = wrapT;

    		this.magFilter = magFilter;
    		this.minFilter = minFilter;

    		this.anisotropy = anisotropy;

    		this.format = format;
    		this.internalFormat = null;
    		this.type = type;

    		this.offset = new Vector2( 0, 0 );
    		this.repeat = new Vector2( 1, 1 );
    		this.center = new Vector2( 0, 0 );
    		this.rotation = 0;

    		this.matrixAutoUpdate = true;
    		this.matrix = new Matrix3();

    		this.generateMipmaps = true;
    		this.premultiplyAlpha = false;
    		this.flipY = true;
    		this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

    		if ( typeof colorSpace === 'string' ) {

    			this.colorSpace = colorSpace;

    		} else { // @deprecated, r152

    			warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
    			this.colorSpace = colorSpace === sRGBEncoding ? SRGBColorSpace : NoColorSpace;

    		}


    		this.userData = {};

    		this.version = 0;
    		this.onUpdate = null;

    		this.isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not
    		this.needsPMREMUpdate = false; // indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target textures)

    	}

    	get image() {

    		return this.source.data;

    	}

    	set image( value = null ) {

    		this.source.data = value;

    	}

    	updateMatrix() {

    		this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

    	}

    	clone() {

    		return new this.constructor().copy( this );

    	}

    	copy( source ) {

    		this.name = source.name;

    		this.source = source.source;
    		this.mipmaps = source.mipmaps.slice( 0 );

    		this.mapping = source.mapping;
    		this.channel = source.channel;

    		this.wrapS = source.wrapS;
    		this.wrapT = source.wrapT;

    		this.magFilter = source.magFilter;
    		this.minFilter = source.minFilter;

    		this.anisotropy = source.anisotropy;

    		this.format = source.format;
    		this.internalFormat = source.internalFormat;
    		this.type = source.type;

    		this.offset.copy( source.offset );
    		this.repeat.copy( source.repeat );
    		this.center.copy( source.center );
    		this.rotation = source.rotation;

    		this.matrixAutoUpdate = source.matrixAutoUpdate;
    		this.matrix.copy( source.matrix );

    		this.generateMipmaps = source.generateMipmaps;
    		this.premultiplyAlpha = source.premultiplyAlpha;
    		this.flipY = source.flipY;
    		this.unpackAlignment = source.unpackAlignment;
    		this.colorSpace = source.colorSpace;

    		this.userData = JSON.parse( JSON.stringify( source.userData ) );

    		this.needsUpdate = true;

    		return this;

    	}

    	toJSON( meta ) {

    		const isRootObject = ( meta === undefined || typeof meta === 'string' );

    		if ( ! isRootObject && meta.textures[ this.uuid ] !== undefined ) {

    			return meta.textures[ this.uuid ];

    		}

    		const output = {

    			metadata: {
    				version: 4.6,
    				type: 'Texture',
    				generator: 'Texture.toJSON'
    			},

    			uuid: this.uuid,
    			name: this.name,

    			image: this.source.toJSON( meta ).uuid,

    			mapping: this.mapping,
    			channel: this.channel,

    			repeat: [ this.repeat.x, this.repeat.y ],
    			offset: [ this.offset.x, this.offset.y ],
    			center: [ this.center.x, this.center.y ],
    			rotation: this.rotation,

    			wrap: [ this.wrapS, this.wrapT ],

    			format: this.format,
    			internalFormat: this.internalFormat,
    			type: this.type,
    			colorSpace: this.colorSpace,

    			minFilter: this.minFilter,
    			magFilter: this.magFilter,
    			anisotropy: this.anisotropy,

    			flipY: this.flipY,

    			generateMipmaps: this.generateMipmaps,
    			premultiplyAlpha: this.premultiplyAlpha,
    			unpackAlignment: this.unpackAlignment

    		};

    		if ( Object.keys( this.userData ).length > 0 ) output.userData = this.userData;

    		if ( ! isRootObject ) {

    			meta.textures[ this.uuid ] = output;

    		}

    		return output;

    	}

    	dispose() {

    		this.dispatchEvent( { type: 'dispose' } );

    	}

    	transformUv( uv ) {

    		if ( this.mapping !== UVMapping ) return uv;

    		uv.applyMatrix3( this.matrix );

    		if ( uv.x < 0 || uv.x > 1 ) {

    			switch ( this.wrapS ) {

    				case RepeatWrapping:

    					uv.x = uv.x - Math.floor( uv.x );
    					break;

    				case ClampToEdgeWrapping:

    					uv.x = uv.x < 0 ? 0 : 1;
    					break;

    				case MirroredRepeatWrapping:

    					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

    						uv.x = Math.ceil( uv.x ) - uv.x;

    					} else {

    						uv.x = uv.x - Math.floor( uv.x );

    					}

    					break;

    			}

    		}

    		if ( uv.y < 0 || uv.y > 1 ) {

    			switch ( this.wrapT ) {

    				case RepeatWrapping:

    					uv.y = uv.y - Math.floor( uv.y );
    					break;

    				case ClampToEdgeWrapping:

    					uv.y = uv.y < 0 ? 0 : 1;
    					break;

    				case MirroredRepeatWrapping:

    					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

    						uv.y = Math.ceil( uv.y ) - uv.y;

    					} else {

    						uv.y = uv.y - Math.floor( uv.y );

    					}

    					break;

    			}

    		}

    		if ( this.flipY ) {

    			uv.y = 1 - uv.y;

    		}

    		return uv;

    	}

    	set needsUpdate( value ) {

    		if ( value === true ) {

    			this.version ++;
    			this.source.needsUpdate = true;

    		}

    	}

    	get encoding() { // @deprecated, r152

    		warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
    		return this.colorSpace === SRGBColorSpace ? sRGBEncoding : LinearEncoding;

    	}

    	set encoding( encoding ) { // @deprecated, r152

    		warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
    		this.colorSpace = encoding === sRGBEncoding ? SRGBColorSpace : NoColorSpace;

    	}

    }

    Texture.DEFAULT_IMAGE = null;
    Texture.DEFAULT_MAPPING = UVMapping;
    Texture.DEFAULT_ANISOTROPY = 1;

    class Quaternion {

    	constructor( x = 0, y = 0, z = 0, w = 1 ) {

    		this.isQuaternion = true;

    		this._x = x;
    		this._y = y;
    		this._z = z;
    		this._w = w;

    	}

    	static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

    		// fuzz-free, array-based Quaternion SLERP operation

    		let x0 = src0[ srcOffset0 + 0 ],
    			y0 = src0[ srcOffset0 + 1 ],
    			z0 = src0[ srcOffset0 + 2 ],
    			w0 = src0[ srcOffset0 + 3 ];

    		const x1 = src1[ srcOffset1 + 0 ],
    			y1 = src1[ srcOffset1 + 1 ],
    			z1 = src1[ srcOffset1 + 2 ],
    			w1 = src1[ srcOffset1 + 3 ];

    		if ( t === 0 ) {

    			dst[ dstOffset + 0 ] = x0;
    			dst[ dstOffset + 1 ] = y0;
    			dst[ dstOffset + 2 ] = z0;
    			dst[ dstOffset + 3 ] = w0;
    			return;

    		}

    		if ( t === 1 ) {

    			dst[ dstOffset + 0 ] = x1;
    			dst[ dstOffset + 1 ] = y1;
    			dst[ dstOffset + 2 ] = z1;
    			dst[ dstOffset + 3 ] = w1;
    			return;

    		}

    		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

    			let s = 1 - t;
    			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
    				dir = ( cos >= 0 ? 1 : - 1 ),
    				sqrSin = 1 - cos * cos;

    			// Skip the Slerp for tiny steps to avoid numeric problems:
    			if ( sqrSin > Number.EPSILON ) {

    				const sin = Math.sqrt( sqrSin ),
    					len = Math.atan2( sin, cos * dir );

    				s = Math.sin( s * len ) / sin;
    				t = Math.sin( t * len ) / sin;

    			}

    			const tDir = t * dir;

    			x0 = x0 * s + x1 * tDir;
    			y0 = y0 * s + y1 * tDir;
    			z0 = z0 * s + z1 * tDir;
    			w0 = w0 * s + w1 * tDir;

    			// Normalize in case we just did a lerp:
    			if ( s === 1 - t ) {

    				const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

    				x0 *= f;
    				y0 *= f;
    				z0 *= f;
    				w0 *= f;

    			}

    		}

    		dst[ dstOffset ] = x0;
    		dst[ dstOffset + 1 ] = y0;
    		dst[ dstOffset + 2 ] = z0;
    		dst[ dstOffset + 3 ] = w0;

    	}

    	static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

    		const x0 = src0[ srcOffset0 ];
    		const y0 = src0[ srcOffset0 + 1 ];
    		const z0 = src0[ srcOffset0 + 2 ];
    		const w0 = src0[ srcOffset0 + 3 ];

    		const x1 = src1[ srcOffset1 ];
    		const y1 = src1[ srcOffset1 + 1 ];
    		const z1 = src1[ srcOffset1 + 2 ];
    		const w1 = src1[ srcOffset1 + 3 ];

    		dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
    		dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
    		dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
    		dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

    		return dst;

    	}

    	get x() {

    		return this._x;

    	}

    	set x( value ) {

    		this._x = value;
    		this._onChangeCallback();

    	}

    	get y() {

    		return this._y;

    	}

    	set y( value ) {

    		this._y = value;
    		this._onChangeCallback();

    	}

    	get z() {

    		return this._z;

    	}

    	set z( value ) {

    		this._z = value;
    		this._onChangeCallback();

    	}

    	get w() {

    		return this._w;

    	}

    	set w( value ) {

    		this._w = value;
    		this._onChangeCallback();

    	}

    	set( x, y, z, w ) {

    		this._x = x;
    		this._y = y;
    		this._z = z;
    		this._w = w;

    		this._onChangeCallback();

    		return this;

    	}

    	clone() {

    		return new this.constructor( this._x, this._y, this._z, this._w );

    	}

    	copy( quaternion ) {

    		this._x = quaternion.x;
    		this._y = quaternion.y;
    		this._z = quaternion.z;
    		this._w = quaternion.w;

    		this._onChangeCallback();

    		return this;

    	}

    	setFromEuler( euler, update = true ) {

    		const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

    		// http://www.mathworks.com/matlabcentral/fileexchange/
    		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
    		//	content/SpinCalc.m

    		const cos = Math.cos;
    		const sin = Math.sin;

    		const c1 = cos( x / 2 );
    		const c2 = cos( y / 2 );
    		const c3 = cos( z / 2 );

    		const s1 = sin( x / 2 );
    		const s2 = sin( y / 2 );
    		const s3 = sin( z / 2 );

    		switch ( order ) {

    			case 'XYZ':
    				this._x = s1 * c2 * c3 + c1 * s2 * s3;
    				this._y = c1 * s2 * c3 - s1 * c2 * s3;
    				this._z = c1 * c2 * s3 + s1 * s2 * c3;
    				this._w = c1 * c2 * c3 - s1 * s2 * s3;
    				break;

    			case 'YXZ':
    				this._x = s1 * c2 * c3 + c1 * s2 * s3;
    				this._y = c1 * s2 * c3 - s1 * c2 * s3;
    				this._z = c1 * c2 * s3 - s1 * s2 * c3;
    				this._w = c1 * c2 * c3 + s1 * s2 * s3;
    				break;

    			case 'ZXY':
    				this._x = s1 * c2 * c3 - c1 * s2 * s3;
    				this._y = c1 * s2 * c3 + s1 * c2 * s3;
    				this._z = c1 * c2 * s3 + s1 * s2 * c3;
    				this._w = c1 * c2 * c3 - s1 * s2 * s3;
    				break;

    			case 'ZYX':
    				this._x = s1 * c2 * c3 - c1 * s2 * s3;
    				this._y = c1 * s2 * c3 + s1 * c2 * s3;
    				this._z = c1 * c2 * s3 - s1 * s2 * c3;
    				this._w = c1 * c2 * c3 + s1 * s2 * s3;
    				break;

    			case 'YZX':
    				this._x = s1 * c2 * c3 + c1 * s2 * s3;
    				this._y = c1 * s2 * c3 + s1 * c2 * s3;
    				this._z = c1 * c2 * s3 - s1 * s2 * c3;
    				this._w = c1 * c2 * c3 - s1 * s2 * s3;
    				break;

    			case 'XZY':
    				this._x = s1 * c2 * c3 - c1 * s2 * s3;
    				this._y = c1 * s2 * c3 - s1 * c2 * s3;
    				this._z = c1 * c2 * s3 + s1 * s2 * c3;
    				this._w = c1 * c2 * c3 + s1 * s2 * s3;
    				break;

    			default:
    				console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

    		}

    		if ( update === true ) this._onChangeCallback();

    		return this;

    	}

    	setFromAxisAngle( axis, angle ) {

    		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

    		// assumes axis is normalized

    		const halfAngle = angle / 2, s = Math.sin( halfAngle );

    		this._x = axis.x * s;
    		this._y = axis.y * s;
    		this._z = axis.z * s;
    		this._w = Math.cos( halfAngle );

    		this._onChangeCallback();

    		return this;

    	}

    	setFromRotationMatrix( m ) {

    		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

    		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

    		const te = m.elements,

    			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
    			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
    			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

    			trace = m11 + m22 + m33;

    		if ( trace > 0 ) {

    			const s = 0.5 / Math.sqrt( trace + 1.0 );

    			this._w = 0.25 / s;
    			this._x = ( m32 - m23 ) * s;
    			this._y = ( m13 - m31 ) * s;
    			this._z = ( m21 - m12 ) * s;

    		} else if ( m11 > m22 && m11 > m33 ) {

    			const s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

    			this._w = ( m32 - m23 ) / s;
    			this._x = 0.25 * s;
    			this._y = ( m12 + m21 ) / s;
    			this._z = ( m13 + m31 ) / s;

    		} else if ( m22 > m33 ) {

    			const s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

    			this._w = ( m13 - m31 ) / s;
    			this._x = ( m12 + m21 ) / s;
    			this._y = 0.25 * s;
    			this._z = ( m23 + m32 ) / s;

    		} else {

    			const s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

    			this._w = ( m21 - m12 ) / s;
    			this._x = ( m13 + m31 ) / s;
    			this._y = ( m23 + m32 ) / s;
    			this._z = 0.25 * s;

    		}

    		this._onChangeCallback();

    		return this;

    	}

    	setFromUnitVectors( vFrom, vTo ) {

    		// assumes direction vectors vFrom and vTo are normalized

    		let r = vFrom.dot( vTo ) + 1;

    		if ( r < Number.EPSILON ) {

    			// vFrom and vTo point in opposite directions

    			r = 0;

    			if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

    				this._x = - vFrom.y;
    				this._y = vFrom.x;
    				this._z = 0;
    				this._w = r;

    			} else {

    				this._x = 0;
    				this._y = - vFrom.z;
    				this._z = vFrom.y;
    				this._w = r;

    			}

    		} else {

    			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

    			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
    			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
    			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
    			this._w = r;

    		}

    		return this.normalize();

    	}

    	angleTo( q ) {

    		return 2 * Math.acos( Math.abs( clamp( this.dot( q ), - 1, 1 ) ) );

    	}

    	rotateTowards( q, step ) {

    		const angle = this.angleTo( q );

    		if ( angle === 0 ) return this;

    		const t = Math.min( 1, step / angle );

    		this.slerp( q, t );

    		return this;

    	}

    	identity() {

    		return this.set( 0, 0, 0, 1 );

    	}

    	invert() {

    		// quaternion is assumed to have unit length

    		return this.conjugate();

    	}

    	conjugate() {

    		this._x *= - 1;
    		this._y *= - 1;
    		this._z *= - 1;

    		this._onChangeCallback();

    		return this;

    	}

    	dot( v ) {

    		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

    	}

    	lengthSq() {

    		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

    	}

    	length() {

    		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

    	}

    	normalize() {

    		let l = this.length();

    		if ( l === 0 ) {

    			this._x = 0;
    			this._y = 0;
    			this._z = 0;
    			this._w = 1;

    		} else {

    			l = 1 / l;

    			this._x = this._x * l;
    			this._y = this._y * l;
    			this._z = this._z * l;
    			this._w = this._w * l;

    		}

    		this._onChangeCallback();

    		return this;

    	}

    	multiply( q ) {

    		return this.multiplyQuaternions( this, q );

    	}

    	premultiply( q ) {

    		return this.multiplyQuaternions( q, this );

    	}

    	multiplyQuaternions( a, b ) {

    		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

    		const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
    		const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

    		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

    		this._onChangeCallback();

    		return this;

    	}

    	slerp( qb, t ) {

    		if ( t === 0 ) return this;
    		if ( t === 1 ) return this.copy( qb );

    		const x = this._x, y = this._y, z = this._z, w = this._w;

    		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

    		let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

    		if ( cosHalfTheta < 0 ) {

    			this._w = - qb._w;
    			this._x = - qb._x;
    			this._y = - qb._y;
    			this._z = - qb._z;

    			cosHalfTheta = - cosHalfTheta;

    		} else {

    			this.copy( qb );

    		}

    		if ( cosHalfTheta >= 1.0 ) {

    			this._w = w;
    			this._x = x;
    			this._y = y;
    			this._z = z;

    			return this;

    		}

    		const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

    		if ( sqrSinHalfTheta <= Number.EPSILON ) {

    			const s = 1 - t;
    			this._w = s * w + t * this._w;
    			this._x = s * x + t * this._x;
    			this._y = s * y + t * this._y;
    			this._z = s * z + t * this._z;

    			this.normalize(); // normalize calls _onChangeCallback()

    			return this;

    		}

    		const sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
    		const halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
    		const ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
    			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

    		this._w = ( w * ratioA + this._w * ratioB );
    		this._x = ( x * ratioA + this._x * ratioB );
    		this._y = ( y * ratioA + this._y * ratioB );
    		this._z = ( z * ratioA + this._z * ratioB );

    		this._onChangeCallback();

    		return this;

    	}

    	slerpQuaternions( qa, qb, t ) {

    		return this.copy( qa ).slerp( qb, t );

    	}

    	random() {

    		// Derived from http://planning.cs.uiuc.edu/node198.html
    		// Note, this source uses w, x, y, z ordering,
    		// so we swap the order below.

    		const u1 = Math.random();
    		const sqrt1u1 = Math.sqrt( 1 - u1 );
    		const sqrtu1 = Math.sqrt( u1 );

    		const u2 = 2 * Math.PI * Math.random();

    		const u3 = 2 * Math.PI * Math.random();

    		return this.set(
    			sqrt1u1 * Math.cos( u2 ),
    			sqrtu1 * Math.sin( u3 ),
    			sqrtu1 * Math.cos( u3 ),
    			sqrt1u1 * Math.sin( u2 ),
    		);

    	}

    	equals( quaternion ) {

    		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

    	}

    	fromArray( array, offset = 0 ) {

    		this._x = array[ offset ];
    		this._y = array[ offset + 1 ];
    		this._z = array[ offset + 2 ];
    		this._w = array[ offset + 3 ];

    		this._onChangeCallback();

    		return this;

    	}

    	toArray( array = [], offset = 0 ) {

    		array[ offset ] = this._x;
    		array[ offset + 1 ] = this._y;
    		array[ offset + 2 ] = this._z;
    		array[ offset + 3 ] = this._w;

    		return array;

    	}

    	fromBufferAttribute( attribute, index ) {

    		this._x = attribute.getX( index );
    		this._y = attribute.getY( index );
    		this._z = attribute.getZ( index );
    		this._w = attribute.getW( index );

    		this._onChangeCallback();

    		return this;

    	}

    	toJSON() {

    		return this.toArray();

    	}

    	_onChange( callback ) {

    		this._onChangeCallback = callback;

    		return this;

    	}

    	_onChangeCallback() {}

    	*[ Symbol.iterator ]() {

    		yield this._x;
    		yield this._y;
    		yield this._z;
    		yield this._w;

    	}

    }

    class Vector3 {

    	constructor( x = 0, y = 0, z = 0 ) {

    		Vector3.prototype.isVector3 = true;

    		this.x = x;
    		this.y = y;
    		this.z = z;

    	}

    	set( x, y, z ) {

    		if ( z === undefined ) z = this.z; // sprite.scale.set(x,y)

    		this.x = x;
    		this.y = y;
    		this.z = z;

    		return this;

    	}

    	setScalar( scalar ) {

    		this.x = scalar;
    		this.y = scalar;
    		this.z = scalar;

    		return this;

    	}

    	setX( x ) {

    		this.x = x;

    		return this;

    	}

    	setY( y ) {

    		this.y = y;

    		return this;

    	}

    	setZ( z ) {

    		this.z = z;

    		return this;

    	}

    	setComponent( index, value ) {

    		switch ( index ) {

    			case 0: this.x = value; break;
    			case 1: this.y = value; break;
    			case 2: this.z = value; break;
    			default: throw new Error( 'index is out of range: ' + index );

    		}

    		return this;

    	}

    	getComponent( index ) {

    		switch ( index ) {

    			case 0: return this.x;
    			case 1: return this.y;
    			case 2: return this.z;
    			default: throw new Error( 'index is out of range: ' + index );

    		}

    	}

    	clone() {

    		return new this.constructor( this.x, this.y, this.z );

    	}

    	copy( v ) {

    		this.x = v.x;
    		this.y = v.y;
    		this.z = v.z;

    		return this;

    	}

    	add( v ) {

    		this.x += v.x;
    		this.y += v.y;
    		this.z += v.z;

    		return this;

    	}

    	addScalar( s ) {

    		this.x += s;
    		this.y += s;
    		this.z += s;

    		return this;

    	}

    	addVectors( a, b ) {

    		this.x = a.x + b.x;
    		this.y = a.y + b.y;
    		this.z = a.z + b.z;

    		return this;

    	}

    	addScaledVector( v, s ) {

    		this.x += v.x * s;
    		this.y += v.y * s;
    		this.z += v.z * s;

    		return this;

    	}

    	sub( v ) {

    		this.x -= v.x;
    		this.y -= v.y;
    		this.z -= v.z;

    		return this;

    	}

    	subScalar( s ) {

    		this.x -= s;
    		this.y -= s;
    		this.z -= s;

    		return this;

    	}

    	subVectors( a, b ) {

    		this.x = a.x - b.x;
    		this.y = a.y - b.y;
    		this.z = a.z - b.z;

    		return this;

    	}

    	multiply( v ) {

    		this.x *= v.x;
    		this.y *= v.y;
    		this.z *= v.z;

    		return this;

    	}

    	multiplyScalar( scalar ) {

    		this.x *= scalar;
    		this.y *= scalar;
    		this.z *= scalar;

    		return this;

    	}

    	multiplyVectors( a, b ) {

    		this.x = a.x * b.x;
    		this.y = a.y * b.y;
    		this.z = a.z * b.z;

    		return this;

    	}

    	applyEuler( euler ) {

    		return this.applyQuaternion( _quaternion$4.setFromEuler( euler ) );

    	}

    	applyAxisAngle( axis, angle ) {

    		return this.applyQuaternion( _quaternion$4.setFromAxisAngle( axis, angle ) );

    	}

    	applyMatrix3( m ) {

    		const x = this.x, y = this.y, z = this.z;
    		const e = m.elements;

    		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
    		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
    		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

    		return this;

    	}

    	applyNormalMatrix( m ) {

    		return this.applyMatrix3( m ).normalize();

    	}

    	applyMatrix4( m ) {

    		const x = this.x, y = this.y, z = this.z;
    		const e = m.elements;

    		const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

    		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
    		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
    		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

    		return this;

    	}

    	applyQuaternion( q ) {

    		// quaternion q is assumed to have unit length

    		const vx = this.x, vy = this.y, vz = this.z;
    		const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

    		// t = 2 * cross( q.xyz, v );
    		const tx = 2 * ( qy * vz - qz * vy );
    		const ty = 2 * ( qz * vx - qx * vz );
    		const tz = 2 * ( qx * vy - qy * vx );

    		// v + q.w * t + cross( q.xyz, t );
    		this.x = vx + qw * tx + qy * tz - qz * ty;
    		this.y = vy + qw * ty + qz * tx - qx * tz;
    		this.z = vz + qw * tz + qx * ty - qy * tx;

    		return this;

    	}

    	project( camera ) {

    		return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

    	}

    	unproject( camera ) {

    		return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

    	}

    	transformDirection( m ) {

    		// input: THREE.Matrix4 affine matrix
    		// vector interpreted as a direction

    		const x = this.x, y = this.y, z = this.z;
    		const e = m.elements;

    		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
    		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
    		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

    		return this.normalize();

    	}

    	divide( v ) {

    		this.x /= v.x;
    		this.y /= v.y;
    		this.z /= v.z;

    		return this;

    	}

    	divideScalar( scalar ) {

    		return this.multiplyScalar( 1 / scalar );

    	}

    	min( v ) {

    		this.x = Math.min( this.x, v.x );
    		this.y = Math.min( this.y, v.y );
    		this.z = Math.min( this.z, v.z );

    		return this;

    	}

    	max( v ) {

    		this.x = Math.max( this.x, v.x );
    		this.y = Math.max( this.y, v.y );
    		this.z = Math.max( this.z, v.z );

    		return this;

    	}

    	clamp( min, max ) {

    		// assumes min < max, componentwise

    		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
    		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
    		this.z = Math.max( min.z, Math.min( max.z, this.z ) );

    		return this;

    	}

    	clampScalar( minVal, maxVal ) {

    		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
    		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
    		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

    		return this;

    	}

    	clampLength( min, max ) {

    		const length = this.length();

    		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

    	}

    	floor() {

    		this.x = Math.floor( this.x );
    		this.y = Math.floor( this.y );
    		this.z = Math.floor( this.z );

    		return this;

    	}

    	ceil() {

    		this.x = Math.ceil( this.x );
    		this.y = Math.ceil( this.y );
    		this.z = Math.ceil( this.z );

    		return this;

    	}

    	round() {

    		this.x = Math.round( this.x );
    		this.y = Math.round( this.y );
    		this.z = Math.round( this.z );

    		return this;

    	}

    	roundToZero() {

    		this.x = Math.trunc( this.x );
    		this.y = Math.trunc( this.y );
    		this.z = Math.trunc( this.z );

    		return this;

    	}

    	negate() {

    		this.x = - this.x;
    		this.y = - this.y;
    		this.z = - this.z;

    		return this;

    	}

    	dot( v ) {

    		return this.x * v.x + this.y * v.y + this.z * v.z;

    	}

    	// TODO lengthSquared?

    	lengthSq() {

    		return this.x * this.x + this.y * this.y + this.z * this.z;

    	}

    	length() {

    		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

    	}

    	manhattanLength() {

    		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

    	}

    	normalize() {

    		return this.divideScalar( this.length() || 1 );

    	}

    	setLength( length ) {

    		return this.normalize().multiplyScalar( length );

    	}

    	lerp( v, alpha ) {

    		this.x += ( v.x - this.x ) * alpha;
    		this.y += ( v.y - this.y ) * alpha;
    		this.z += ( v.z - this.z ) * alpha;

    		return this;

    	}

    	lerpVectors( v1, v2, alpha ) {

    		this.x = v1.x + ( v2.x - v1.x ) * alpha;
    		this.y = v1.y + ( v2.y - v1.y ) * alpha;
    		this.z = v1.z + ( v2.z - v1.z ) * alpha;

    		return this;

    	}

    	cross( v ) {

    		return this.crossVectors( this, v );

    	}

    	crossVectors( a, b ) {

    		const ax = a.x, ay = a.y, az = a.z;
    		const bx = b.x, by = b.y, bz = b.z;

    		this.x = ay * bz - az * by;
    		this.y = az * bx - ax * bz;
    		this.z = ax * by - ay * bx;

    		return this;

    	}

    	projectOnVector( v ) {

    		const denominator = v.lengthSq();

    		if ( denominator === 0 ) return this.set( 0, 0, 0 );

    		const scalar = v.dot( this ) / denominator;

    		return this.copy( v ).multiplyScalar( scalar );

    	}

    	projectOnPlane( planeNormal ) {

    		_vector$c.copy( this ).projectOnVector( planeNormal );

    		return this.sub( _vector$c );

    	}

    	reflect( normal ) {

    		// reflect incident vector off plane orthogonal to normal
    		// normal is assumed to have unit length

    		return this.sub( _vector$c.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

    	}

    	angleTo( v ) {

    		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

    		if ( denominator === 0 ) return Math.PI / 2;

    		const theta = this.dot( v ) / denominator;

    		// clamp, to handle numerical problems

    		return Math.acos( clamp( theta, - 1, 1 ) );

    	}

    	distanceTo( v ) {

    		return Math.sqrt( this.distanceToSquared( v ) );

    	}

    	distanceToSquared( v ) {

    		const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

    		return dx * dx + dy * dy + dz * dz;

    	}

    	manhattanDistanceTo( v ) {

    		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

    	}

    	setFromSpherical( s ) {

    		return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

    	}

    	setFromSphericalCoords( radius, phi, theta ) {

    		const sinPhiRadius = Math.sin( phi ) * radius;

    		this.x = sinPhiRadius * Math.sin( theta );
    		this.y = Math.cos( phi ) * radius;
    		this.z = sinPhiRadius * Math.cos( theta );

    		return this;

    	}

    	setFromCylindrical( c ) {

    		return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

    	}

    	setFromCylindricalCoords( radius, theta, y ) {

    		this.x = radius * Math.sin( theta );
    		this.y = y;
    		this.z = radius * Math.cos( theta );

    		return this;

    	}

    	setFromMatrixPosition( m ) {

    		const e = m.elements;

    		this.x = e[ 12 ];
    		this.y = e[ 13 ];
    		this.z = e[ 14 ];

    		return this;

    	}

    	setFromMatrixScale( m ) {

    		const sx = this.setFromMatrixColumn( m, 0 ).length();
    		const sy = this.setFromMatrixColumn( m, 1 ).length();
    		const sz = this.setFromMatrixColumn( m, 2 ).length();

    		this.x = sx;
    		this.y = sy;
    		this.z = sz;

    		return this;

    	}

    	setFromMatrixColumn( m, index ) {

    		return this.fromArray( m.elements, index * 4 );

    	}

    	setFromMatrix3Column( m, index ) {

    		return this.fromArray( m.elements, index * 3 );

    	}

    	setFromEuler( e ) {

    		this.x = e._x;
    		this.y = e._y;
    		this.z = e._z;

    		return this;

    	}

    	setFromColor( c ) {

    		this.x = c.r;
    		this.y = c.g;
    		this.z = c.b;

    		return this;

    	}

    	equals( v ) {

    		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

    	}

    	fromArray( array, offset = 0 ) {

    		this.x = array[ offset ];
    		this.y = array[ offset + 1 ];
    		this.z = array[ offset + 2 ];

    		return this;

    	}

    	toArray( array = [], offset = 0 ) {

    		array[ offset ] = this.x;
    		array[ offset + 1 ] = this.y;
    		array[ offset + 2 ] = this.z;

    		return array;

    	}

    	fromBufferAttribute( attribute, index ) {

    		this.x = attribute.getX( index );
    		this.y = attribute.getY( index );
    		this.z = attribute.getZ( index );

    		return this;

    	}

    	random() {

    		this.x = Math.random();
    		this.y = Math.random();
    		this.z = Math.random();

    		return this;

    	}

    	randomDirection() {

    		// Derived from https://mathworld.wolfram.com/SpherePointPicking.html

    		const u = ( Math.random() - 0.5 ) * 2;
    		const t = Math.random() * Math.PI * 2;
    		const f = Math.sqrt( 1 - u ** 2 );

    		this.x = f * Math.cos( t );
    		this.y = f * Math.sin( t );
    		this.z = u;

    		return this;

    	}

    	*[ Symbol.iterator ]() {

    		yield this.x;
    		yield this.y;
    		yield this.z;

    	}

    }

    const _vector$c = /*@__PURE__*/ new Vector3();
    const _quaternion$4 = /*@__PURE__*/ new Quaternion();

    class Box3 {

    	constructor( min = new Vector3( + Infinity, + Infinity, + Infinity ), max = new Vector3( - Infinity, - Infinity, - Infinity ) ) {

    		this.isBox3 = true;

    		this.min = min;
    		this.max = max;

    	}

    	set( min, max ) {

    		this.min.copy( min );
    		this.max.copy( max );

    		return this;

    	}

    	setFromArray( array ) {

    		this.makeEmpty();

    		for ( let i = 0, il = array.length; i < il; i += 3 ) {

    			this.expandByPoint( _vector$b.fromArray( array, i ) );

    		}

    		return this;

    	}

    	setFromBufferAttribute( attribute ) {

    		this.makeEmpty();

    		for ( let i = 0, il = attribute.count; i < il; i ++ ) {

    			this.expandByPoint( _vector$b.fromBufferAttribute( attribute, i ) );

    		}

    		return this;

    	}

    	setFromPoints( points ) {

    		this.makeEmpty();

    		for ( let i = 0, il = points.length; i < il; i ++ ) {

    			this.expandByPoint( points[ i ] );

    		}

    		return this;

    	}

    	setFromCenterAndSize( center, size ) {

    		const halfSize = _vector$b.copy( size ).multiplyScalar( 0.5 );

    		this.min.copy( center ).sub( halfSize );
    		this.max.copy( center ).add( halfSize );

    		return this;

    	}

    	setFromObject( object, precise = false ) {

    		this.makeEmpty();

    		return this.expandByObject( object, precise );

    	}

    	clone() {

    		return new this.constructor().copy( this );

    	}

    	copy( box ) {

    		this.min.copy( box.min );
    		this.max.copy( box.max );

    		return this;

    	}

    	makeEmpty() {

    		this.min.x = this.min.y = this.min.z = + Infinity;
    		this.max.x = this.max.y = this.max.z = - Infinity;

    		return this;

    	}

    	isEmpty() {

    		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

    		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

    	}

    	getCenter( target ) {

    		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

    	}

    	getSize( target ) {

    		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.subVectors( this.max, this.min );

    	}

    	expandByPoint( point ) {

    		this.min.min( point );
    		this.max.max( point );

    		return this;

    	}

    	expandByVector( vector ) {

    		this.min.sub( vector );
    		this.max.add( vector );

    		return this;

    	}

    	expandByScalar( scalar ) {

    		this.min.addScalar( - scalar );
    		this.max.addScalar( scalar );

    		return this;

    	}

    	expandByObject( object, precise = false ) {

    		// Computes the world-axis-aligned bounding box of an object (including its children),
    		// accounting for both the object's, and children's, world transforms

    		object.updateWorldMatrix( false, false );

    		const geometry = object.geometry;

    		if ( geometry !== undefined ) {

    			const positionAttribute = geometry.getAttribute( 'position' );

    			// precise AABB computation based on vertex data requires at least a position attribute.
    			// instancing isn't supported so far and uses the normal (conservative) code path.

    			if ( precise === true && positionAttribute !== undefined && object.isInstancedMesh !== true ) {

    				for ( let i = 0, l = positionAttribute.count; i < l; i ++ ) {

    					if ( object.isMesh === true ) {

    						object.getVertexPosition( i, _vector$b );

    					} else {

    						_vector$b.fromBufferAttribute( positionAttribute, i );

    					}

    					_vector$b.applyMatrix4( object.matrixWorld );
    					this.expandByPoint( _vector$b );

    				}

    			} else {

    				if ( object.boundingBox !== undefined ) {

    					// object-level bounding box

    					if ( object.boundingBox === null ) {

    						object.computeBoundingBox();

    					}

    					_box$4.copy( object.boundingBox );


    				} else {

    					// geometry-level bounding box

    					if ( geometry.boundingBox === null ) {

    						geometry.computeBoundingBox();

    					}

    					_box$4.copy( geometry.boundingBox );

    				}

    				_box$4.applyMatrix4( object.matrixWorld );

    				this.union( _box$4 );

    			}

    		}

    		const children = object.children;

    		for ( let i = 0, l = children.length; i < l; i ++ ) {

    			this.expandByObject( children[ i ], precise );

    		}

    		return this;

    	}

    	containsPoint( point ) {

    		return point.x < this.min.x || point.x > this.max.x ||
    			point.y < this.min.y || point.y > this.max.y ||
    			point.z < this.min.z || point.z > this.max.z ? false : true;

    	}

    	containsBox( box ) {

    		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
    			this.min.y <= box.min.y && box.max.y <= this.max.y &&
    			this.min.z <= box.min.z && box.max.z <= this.max.z;

    	}

    	getParameter( point, target ) {

    		// This can potentially have a divide by zero if the box
    		// has a size dimension of 0.

    		return target.set(
    			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
    			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
    			( point.z - this.min.z ) / ( this.max.z - this.min.z )
    		);

    	}

    	intersectsBox( box ) {

    		// using 6 splitting planes to rule out intersections.
    		return box.max.x < this.min.x || box.min.x > this.max.x ||
    			box.max.y < this.min.y || box.min.y > this.max.y ||
    			box.max.z < this.min.z || box.min.z > this.max.z ? false : true;

    	}

    	intersectsSphere( sphere ) {

    		// Find the point on the AABB closest to the sphere center.
    		this.clampPoint( sphere.center, _vector$b );

    		// If that point is inside the sphere, the AABB and sphere intersect.
    		return _vector$b.distanceToSquared( sphere.center ) <= ( sphere.radius * sphere.radius );

    	}

    	intersectsPlane( plane ) {

    		// We compute the minimum and maximum dot product values. If those values
    		// are on the same side (back or front) of the plane, then there is no intersection.

    		let min, max;

    		if ( plane.normal.x > 0 ) {

    			min = plane.normal.x * this.min.x;
    			max = plane.normal.x * this.max.x;

    		} else {

    			min = plane.normal.x * this.max.x;
    			max = plane.normal.x * this.min.x;

    		}

    		if ( plane.normal.y > 0 ) {

    			min += plane.normal.y * this.min.y;
    			max += plane.normal.y * this.max.y;

    		} else {

    			min += plane.normal.y * this.max.y;
    			max += plane.normal.y * this.min.y;

    		}

    		if ( plane.normal.z > 0 ) {

    			min += plane.normal.z * this.min.z;
    			max += plane.normal.z * this.max.z;

    		} else {

    			min += plane.normal.z * this.max.z;
    			max += plane.normal.z * this.min.z;

    		}

    		return ( min <= - plane.constant && max >= - plane.constant );

    	}

    	intersectsTriangle( triangle ) {

    		if ( this.isEmpty() ) {

    			return false;

    		}

    		// compute box center and extents
    		this.getCenter( _center );
    		_extents.subVectors( this.max, _center );

    		// translate triangle to aabb origin
    		_v0$2.subVectors( triangle.a, _center );
    		_v1$7.subVectors( triangle.b, _center );
    		_v2$4.subVectors( triangle.c, _center );

    		// compute edge vectors for triangle
    		_f0.subVectors( _v1$7, _v0$2 );
    		_f1.subVectors( _v2$4, _v1$7 );
    		_f2.subVectors( _v0$2, _v2$4 );

    		// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
    		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
    		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
    		let axes = [
    			0, - _f0.z, _f0.y, 0, - _f1.z, _f1.y, 0, - _f2.z, _f2.y,
    			_f0.z, 0, - _f0.x, _f1.z, 0, - _f1.x, _f2.z, 0, - _f2.x,
    			- _f0.y, _f0.x, 0, - _f1.y, _f1.x, 0, - _f2.y, _f2.x, 0
    		];
    		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

    			return false;

    		}

    		// test 3 face normals from the aabb
    		axes = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
    		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

    			return false;

    		}

    		// finally testing the face normal of the triangle
    		// use already existing triangle edge vectors here
    		_triangleNormal.crossVectors( _f0, _f1 );
    		axes = [ _triangleNormal.x, _triangleNormal.y, _triangleNormal.z ];

    		return satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents );

    	}

    	clampPoint( point, target ) {

    		return target.copy( point ).clamp( this.min, this.max );

    	}

    	distanceToPoint( point ) {

    		return this.clampPoint( point, _vector$b ).distanceTo( point );

    	}

    	getBoundingSphere( target ) {

    		if ( this.isEmpty() ) {

    			target.makeEmpty();

    		} else {

    			this.getCenter( target.center );

    			target.radius = this.getSize( _vector$b ).length() * 0.5;

    		}

    		return target;

    	}

    	intersect( box ) {

    		this.min.max( box.min );
    		this.max.min( box.max );

    		// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
    		if ( this.isEmpty() ) this.makeEmpty();

    		return this;

    	}

    	union( box ) {

    		this.min.min( box.min );
    		this.max.max( box.max );

    		return this;

    	}

    	applyMatrix4( matrix ) {

    		// transform of empty box is an empty box.
    		if ( this.isEmpty() ) return this;

    		// NOTE: I am using a binary pattern to specify all 2^3 combinations below
    		_points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
    		_points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
    		_points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
    		_points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
    		_points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
    		_points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
    		_points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
    		_points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 111

    		this.setFromPoints( _points );

    		return this;

    	}

    	translate( offset ) {

    		this.min.add( offset );
    		this.max.add( offset );

    		return this;

    	}

    	equals( box ) {

    		return box.min.equals( this.min ) && box.max.equals( this.max );

    	}

    }

    const _points = [
    	/*@__PURE__*/ new Vector3(),
    	/*@__PURE__*/ new Vector3(),
    	/*@__PURE__*/ new Vector3(),
    	/*@__PURE__*/ new Vector3(),
    	/*@__PURE__*/ new Vector3(),
    	/*@__PURE__*/ new Vector3(),
    	/*@__PURE__*/ new Vector3(),
    	/*@__PURE__*/ new Vector3()
    ];

    const _vector$b = /*@__PURE__*/ new Vector3();

    const _box$4 = /*@__PURE__*/ new Box3();

    // triangle centered vertices

    const _v0$2 = /*@__PURE__*/ new Vector3();
    const _v1$7 = /*@__PURE__*/ new Vector3();
    const _v2$4 = /*@__PURE__*/ new Vector3();

    // triangle edge vectors

    const _f0 = /*@__PURE__*/ new Vector3();
    const _f1 = /*@__PURE__*/ new Vector3();
    const _f2 = /*@__PURE__*/ new Vector3();

    const _center = /*@__PURE__*/ new Vector3();
    const _extents = /*@__PURE__*/ new Vector3();
    const _triangleNormal = /*@__PURE__*/ new Vector3();
    const _testAxis = /*@__PURE__*/ new Vector3();

    function satForAxes( axes, v0, v1, v2, extents ) {

    	for ( let i = 0, j = axes.length - 3; i <= j; i += 3 ) {

    		_testAxis.fromArray( axes, i );
    		// project the aabb onto the separating axis
    		const r = extents.x * Math.abs( _testAxis.x ) + extents.y * Math.abs( _testAxis.y ) + extents.z * Math.abs( _testAxis.z );
    		// project all 3 vertices of the triangle onto the separating axis
    		const p0 = v0.dot( _testAxis );
    		const p1 = v1.dot( _testAxis );
    		const p2 = v2.dot( _testAxis );
    		// actual test, basically see if either of the most extreme of the triangle points intersects r
    		if ( Math.max( - Math.max( p0, p1, p2 ), Math.min( p0, p1, p2 ) ) > r ) {

    			// points of the projected triangle are outside the projected half-length of the aabb
    			// the axis is separating and we can exit
    			return false;

    		}

    	}

    	return true;

    }

    const _box$3 = /*@__PURE__*/ new Box3();
    const _v1$6 = /*@__PURE__*/ new Vector3();
    const _v2$3 = /*@__PURE__*/ new Vector3();

    class Sphere {

    	constructor( center = new Vector3(), radius = - 1 ) {

    		this.isSphere = true;

    		this.center = center;
    		this.radius = radius;

    	}

    	set( center, radius ) {

    		this.center.copy( center );
    		this.radius = radius;

    		return this;

    	}

    	setFromPoints( points, optionalCenter ) {

    		const center = this.center;

    		if ( optionalCenter !== undefined ) {

    			center.copy( optionalCenter );

    		} else {

    			_box$3.setFromPoints( points ).getCenter( center );

    		}

    		let maxRadiusSq = 0;

    		for ( let i = 0, il = points.length; i < il; i ++ ) {

    			maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

    		}

    		this.radius = Math.sqrt( maxRadiusSq );

    		return this;

    	}

    	copy( sphere ) {

    		this.center.copy( sphere.center );
    		this.radius = sphere.radius;

    		return this;

    	}

    	isEmpty() {

    		return ( this.radius < 0 );

    	}

    	makeEmpty() {

    		this.center.set( 0, 0, 0 );
    		this.radius = - 1;

    		return this;

    	}

    	containsPoint( point ) {

    		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

    	}

    	distanceToPoint( point ) {

    		return ( point.distanceTo( this.center ) - this.radius );

    	}

    	intersectsSphere( sphere ) {

    		const radiusSum = this.radius + sphere.radius;

    		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

    	}

    	intersectsBox( box ) {

    		return box.intersectsSphere( this );

    	}

    	intersectsPlane( plane ) {

    		return Math.abs( plane.distanceToPoint( this.center ) ) <= this.radius;

    	}

    	clampPoint( point, target ) {

    		const deltaLengthSq = this.center.distanceToSquared( point );

    		target.copy( point );

    		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

    			target.sub( this.center ).normalize();
    			target.multiplyScalar( this.radius ).add( this.center );

    		}

    		return target;

    	}

    	getBoundingBox( target ) {

    		if ( this.isEmpty() ) {

    			// Empty sphere produces empty bounding box
    			target.makeEmpty();
    			return target;

    		}

    		target.set( this.center, this.center );
    		target.expandByScalar( this.radius );

    		return target;

    	}

    	applyMatrix4( matrix ) {

    		this.center.applyMatrix4( matrix );
    		this.radius = this.radius * matrix.getMaxScaleOnAxis();

    		return this;

    	}

    	translate( offset ) {

    		this.center.add( offset );

    		return this;

    	}

    	expandByPoint( point ) {

    		if ( this.isEmpty() ) {

    			this.center.copy( point );

    			this.radius = 0;

    			return this;

    		}

    		_v1$6.subVectors( point, this.center );

    		const lengthSq = _v1$6.lengthSq();

    		if ( lengthSq > ( this.radius * this.radius ) ) {

    			// calculate the minimal sphere

    			const length = Math.sqrt( lengthSq );

    			const delta = ( length - this.radius ) * 0.5;

    			this.center.addScaledVector( _v1$6, delta / length );

    			this.radius += delta;

    		}

    		return this;

    	}

    	union( sphere ) {

    		if ( sphere.isEmpty() ) {

    			return this;

    		}

    		if ( this.isEmpty() ) {

    			this.copy( sphere );

    			return this;

    		}

    		if ( this.center.equals( sphere.center ) === true ) {

    			 this.radius = Math.max( this.radius, sphere.radius );

    		} else {

    			_v2$3.subVectors( sphere.center, this.center ).setLength( sphere.radius );

    			this.expandByPoint( _v1$6.copy( sphere.center ).add( _v2$3 ) );

    			this.expandByPoint( _v1$6.copy( sphere.center ).sub( _v2$3 ) );

    		}

    		return this;

    	}

    	equals( sphere ) {

    		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

    	}

    	clone() {

    		return new this.constructor().copy( this );

    	}

    }

    const _vector$a = /*@__PURE__*/ new Vector3();
    const _segCenter = /*@__PURE__*/ new Vector3();
    const _segDir = /*@__PURE__*/ new Vector3();
    const _diff = /*@__PURE__*/ new Vector3();

    const _edge1 = /*@__PURE__*/ new Vector3();
    const _edge2 = /*@__PURE__*/ new Vector3();
    const _normal$1 = /*@__PURE__*/ new Vector3();

    class Ray {

    	constructor( origin = new Vector3(), direction = new Vector3( 0, 0, - 1 ) ) {

    		this.origin = origin;
    		this.direction = direction;

    	}

    	set( origin, direction ) {

    		this.origin.copy( origin );
    		this.direction.copy( direction );

    		return this;

    	}

    	copy( ray ) {

    		this.origin.copy( ray.origin );
    		this.direction.copy( ray.direction );

    		return this;

    	}

    	at( t, target ) {

    		return target.copy( this.origin ).addScaledVector( this.direction, t );

    	}

    	lookAt( v ) {

    		this.direction.copy( v ).sub( this.origin ).normalize();

    		return this;

    	}

    	recast( t ) {

    		this.origin.copy( this.at( t, _vector$a ) );

    		return this;

    	}

    	closestPointToPoint( point, target ) {

    		target.subVectors( point, this.origin );

    		const directionDistance = target.dot( this.direction );

    		if ( directionDistance < 0 ) {

    			return target.copy( this.origin );

    		}

    		return target.copy( this.origin ).addScaledVector( this.direction, directionDistance );

    	}

    	distanceToPoint( point ) {

    		return Math.sqrt( this.distanceSqToPoint( point ) );

    	}

    	distanceSqToPoint( point ) {

    		const directionDistance = _vector$a.subVectors( point, this.origin ).dot( this.direction );

    		// point behind the ray

    		if ( directionDistance < 0 ) {

    			return this.origin.distanceToSquared( point );

    		}

    		_vector$a.copy( this.origin ).addScaledVector( this.direction, directionDistance );

    		return _vector$a.distanceToSquared( point );

    	}

    	distanceSqToSegment( v0, v1, optionalPointOnRay, optionalPointOnSegment ) {

    		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteDistRaySegment.h
    		// It returns the min distance between the ray and the segment
    		// defined by v0 and v1
    		// It can also set two optional targets :
    		// - The closest point on the ray
    		// - The closest point on the segment

    		_segCenter.copy( v0 ).add( v1 ).multiplyScalar( 0.5 );
    		_segDir.copy( v1 ).sub( v0 ).normalize();
    		_diff.copy( this.origin ).sub( _segCenter );

    		const segExtent = v0.distanceTo( v1 ) * 0.5;
    		const a01 = - this.direction.dot( _segDir );
    		const b0 = _diff.dot( this.direction );
    		const b1 = - _diff.dot( _segDir );
    		const c = _diff.lengthSq();
    		const det = Math.abs( 1 - a01 * a01 );
    		let s0, s1, sqrDist, extDet;

    		if ( det > 0 ) {

    			// The ray and segment are not parallel.

    			s0 = a01 * b1 - b0;
    			s1 = a01 * b0 - b1;
    			extDet = segExtent * det;

    			if ( s0 >= 0 ) {

    				if ( s1 >= - extDet ) {

    					if ( s1 <= extDet ) {

    						// region 0
    						// Minimum at interior points of ray and segment.

    						const invDet = 1 / det;
    						s0 *= invDet;
    						s1 *= invDet;
    						sqrDist = s0 * ( s0 + a01 * s1 + 2 * b0 ) + s1 * ( a01 * s0 + s1 + 2 * b1 ) + c;

    					} else {

    						// region 1

    						s1 = segExtent;
    						s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
    						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

    					}

    				} else {

    					// region 5

    					s1 = - segExtent;
    					s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
    					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

    				}

    			} else {

    				if ( s1 <= - extDet ) {

    					// region 4

    					s0 = Math.max( 0, - ( - a01 * segExtent + b0 ) );
    					s1 = ( s0 > 0 ) ? - segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
    					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

    				} else if ( s1 <= extDet ) {

    					// region 3

    					s0 = 0;
    					s1 = Math.min( Math.max( - segExtent, - b1 ), segExtent );
    					sqrDist = s1 * ( s1 + 2 * b1 ) + c;

    				} else {

    					// region 2

    					s0 = Math.max( 0, - ( a01 * segExtent + b0 ) );
    					s1 = ( s0 > 0 ) ? segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
    					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

    				}

    			}

    		} else {

    			// Ray and segment are parallel.

    			s1 = ( a01 > 0 ) ? - segExtent : segExtent;
    			s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
    			sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

    		}

    		if ( optionalPointOnRay ) {

    			optionalPointOnRay.copy( this.origin ).addScaledVector( this.direction, s0 );

    		}

    		if ( optionalPointOnSegment ) {

    			optionalPointOnSegment.copy( _segCenter ).addScaledVector( _segDir, s1 );

    		}

    		return sqrDist;

    	}

    	intersectSphere( sphere, target ) {

    		_vector$a.subVectors( sphere.center, this.origin );
    		const tca = _vector$a.dot( this.direction );
    		const d2 = _vector$a.dot( _vector$a ) - tca * tca;
    		const radius2 = sphere.radius * sphere.radius;

    		if ( d2 > radius2 ) return null;

    		const thc = Math.sqrt( radius2 - d2 );

    		// t0 = first intersect point - entrance on front of sphere
    		const t0 = tca - thc;

    		// t1 = second intersect point - exit point on back of sphere
    		const t1 = tca + thc;

    		// test to see if t1 is behind the ray - if so, return null
    		if ( t1 < 0 ) return null;

    		// test to see if t0 is behind the ray:
    		// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
    		// in order to always return an intersect point that is in front of the ray.
    		if ( t0 < 0 ) return this.at( t1, target );

    		// else t0 is in front of the ray, so return the first collision point scaled by t0
    		return this.at( t0, target );

    	}

    	intersectsSphere( sphere ) {

    		return this.distanceSqToPoint( sphere.center ) <= ( sphere.radius * sphere.radius );

    	}

    	distanceToPlane( plane ) {

    		const denominator = plane.normal.dot( this.direction );

    		if ( denominator === 0 ) {

    			// line is coplanar, return origin
    			if ( plane.distanceToPoint( this.origin ) === 0 ) {

    				return 0;

    			}

    			// Null is preferable to undefined since undefined means.... it is undefined

    			return null;

    		}

    		const t = - ( this.origin.dot( plane.normal ) + plane.constant ) / denominator;

    		// Return if the ray never intersects the plane

    		return t >= 0 ? t : null;

    	}

    	intersectPlane( plane, target ) {

    		const t = this.distanceToPlane( plane );

    		if ( t === null ) {

    			return null;

    		}

    		return this.at( t, target );

    	}

    	intersectsPlane( plane ) {

    		// check if the ray lies on the plane first

    		const distToPoint = plane.distanceToPoint( this.origin );

    		if ( distToPoint === 0 ) {

    			return true;

    		}

    		const denominator = plane.normal.dot( this.direction );

    		if ( denominator * distToPoint < 0 ) {

    			return true;

    		}

    		// ray origin is behind the plane (and is pointing behind it)

    		return false;

    	}

    	intersectBox( box, target ) {

    		let tmin, tmax, tymin, tymax, tzmin, tzmax;

    		const invdirx = 1 / this.direction.x,
    			invdiry = 1 / this.direction.y,
    			invdirz = 1 / this.direction.z;

    		const origin = this.origin;

    		if ( invdirx >= 0 ) {

    			tmin = ( box.min.x - origin.x ) * invdirx;
    			tmax = ( box.max.x - origin.x ) * invdirx;

    		} else {

    			tmin = ( box.max.x - origin.x ) * invdirx;
    			tmax = ( box.min.x - origin.x ) * invdirx;

    		}

    		if ( invdiry >= 0 ) {

    			tymin = ( box.min.y - origin.y ) * invdiry;
    			tymax = ( box.max.y - origin.y ) * invdiry;

    		} else {

    			tymin = ( box.max.y - origin.y ) * invdiry;
    			tymax = ( box.min.y - origin.y ) * invdiry;

    		}

    		if ( ( tmin > tymax ) || ( tymin > tmax ) ) return null;

    		if ( tymin > tmin || isNaN( tmin ) ) tmin = tymin;

    		if ( tymax < tmax || isNaN( tmax ) ) tmax = tymax;

    		if ( invdirz >= 0 ) {

    			tzmin = ( box.min.z - origin.z ) * invdirz;
    			tzmax = ( box.max.z - origin.z ) * invdirz;

    		} else {

    			tzmin = ( box.max.z - origin.z ) * invdirz;
    			tzmax = ( box.min.z - origin.z ) * invdirz;

    		}

    		if ( ( tmin > tzmax ) || ( tzmin > tmax ) ) return null;

    		if ( tzmin > tmin || tmin !== tmin ) tmin = tzmin;

    		if ( tzmax < tmax || tmax !== tmax ) tmax = tzmax;

    		//return point closest to the ray (positive side)

    		if ( tmax < 0 ) return null;

    		return this.at( tmin >= 0 ? tmin : tmax, target );

    	}

    	intersectsBox( box ) {

    		return this.intersectBox( box, _vector$a ) !== null;

    	}

    	intersectTriangle( a, b, c, backfaceCulling, target ) {

    		// Compute the offset origin, edges, and normal.

    		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h

    		_edge1.subVectors( b, a );
    		_edge2.subVectors( c, a );
    		_normal$1.crossVectors( _edge1, _edge2 );

    		// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
    		// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
    		//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
    		//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
    		//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
    		let DdN = this.direction.dot( _normal$1 );
    		let sign;

    		if ( DdN > 0 ) {

    			if ( backfaceCulling ) return null;
    			sign = 1;

    		} else if ( DdN < 0 ) {

    			sign = - 1;
    			DdN = - DdN;

    		} else {

    			return null;

    		}

    		_diff.subVectors( this.origin, a );
    		const DdQxE2 = sign * this.direction.dot( _edge2.crossVectors( _diff, _edge2 ) );

    		// b1 < 0, no intersection
    		if ( DdQxE2 < 0 ) {

    			return null;

    		}

    		const DdE1xQ = sign * this.direction.dot( _edge1.cross( _diff ) );

    		// b2 < 0, no intersection
    		if ( DdE1xQ < 0 ) {

    			return null;

    		}

    		// b1+b2 > 1, no intersection
    		if ( DdQxE2 + DdE1xQ > DdN ) {

    			return null;

    		}

    		// Line intersects triangle, check if ray does.
    		const QdN = - sign * _diff.dot( _normal$1 );

    		// t < 0, no intersection
    		if ( QdN < 0 ) {

    			return null;

    		}

    		// Ray intersects triangle.
    		return this.at( QdN / DdN, target );

    	}

    	applyMatrix4( matrix4 ) {

    		this.origin.applyMatrix4( matrix4 );
    		this.direction.transformDirection( matrix4 );

    		return this;

    	}

    	equals( ray ) {

    		return ray.origin.equals( this.origin ) && ray.direction.equals( this.direction );

    	}

    	clone() {

    		return new this.constructor().copy( this );

    	}

    }

    class Matrix4 {

    	constructor( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

    		Matrix4.prototype.isMatrix4 = true;

    		this.elements = [

    			1, 0, 0, 0,
    			0, 1, 0, 0,
    			0, 0, 1, 0,
    			0, 0, 0, 1

    		];

    		if ( n11 !== undefined ) {

    			this.set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 );

    		}

    	}

    	set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

    		const te = this.elements;

    		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
    		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
    		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
    		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

    		return this;

    	}

    	identity() {

    		this.set(

    			1, 0, 0, 0,
    			0, 1, 0, 0,
    			0, 0, 1, 0,
    			0, 0, 0, 1

    		);

    		return this;

    	}

    	clone() {

    		return new Matrix4().fromArray( this.elements );

    	}

    	copy( m ) {

    		const te = this.elements;
    		const me = m.elements;

    		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
    		te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
    		te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
    		te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

    		return this;

    	}

    	copyPosition( m ) {

    		const te = this.elements, me = m.elements;

    		te[ 12 ] = me[ 12 ];
    		te[ 13 ] = me[ 13 ];
    		te[ 14 ] = me[ 14 ];

    		return this;

    	}

    	setFromMatrix3( m ) {

    		const me = m.elements;

    		this.set(

    			me[ 0 ], me[ 3 ], me[ 6 ], 0,
    			me[ 1 ], me[ 4 ], me[ 7 ], 0,
    			me[ 2 ], me[ 5 ], me[ 8 ], 0,
    			0, 0, 0, 1

    		);

    		return this;

    	}

    	extractBasis( xAxis, yAxis, zAxis ) {

    		xAxis.setFromMatrixColumn( this, 0 );
    		yAxis.setFromMatrixColumn( this, 1 );
    		zAxis.setFromMatrixColumn( this, 2 );

    		return this;

    	}

    	makeBasis( xAxis, yAxis, zAxis ) {

    		this.set(
    			xAxis.x, yAxis.x, zAxis.x, 0,
    			xAxis.y, yAxis.y, zAxis.y, 0,
    			xAxis.z, yAxis.z, zAxis.z, 0,
    			0, 0, 0, 1
    		);

    		return this;

    	}

    	extractRotation( m ) {

    		// this method does not support reflection matrices

    		const te = this.elements;
    		const me = m.elements;

    		const scaleX = 1 / _v1$5.setFromMatrixColumn( m, 0 ).length();
    		const scaleY = 1 / _v1$5.setFromMatrixColumn( m, 1 ).length();
    		const scaleZ = 1 / _v1$5.setFromMatrixColumn( m, 2 ).length();

    		te[ 0 ] = me[ 0 ] * scaleX;
    		te[ 1 ] = me[ 1 ] * scaleX;
    		te[ 2 ] = me[ 2 ] * scaleX;
    		te[ 3 ] = 0;

    		te[ 4 ] = me[ 4 ] * scaleY;
    		te[ 5 ] = me[ 5 ] * scaleY;
    		te[ 6 ] = me[ 6 ] * scaleY;
    		te[ 7 ] = 0;

    		te[ 8 ] = me[ 8 ] * scaleZ;
    		te[ 9 ] = me[ 9 ] * scaleZ;
    		te[ 10 ] = me[ 10 ] * scaleZ;
    		te[ 11 ] = 0;

    		te[ 12 ] = 0;
    		te[ 13 ] = 0;
    		te[ 14 ] = 0;
    		te[ 15 ] = 1;

    		return this;

    	}

    	makeRotationFromEuler( euler ) {

    		const te = this.elements;

    		const x = euler.x, y = euler.y, z = euler.z;
    		const a = Math.cos( x ), b = Math.sin( x );
    		const c = Math.cos( y ), d = Math.sin( y );
    		const e = Math.cos( z ), f = Math.sin( z );

    		if ( euler.order === 'XYZ' ) {

    			const ae = a * e, af = a * f, be = b * e, bf = b * f;

    			te[ 0 ] = c * e;
    			te[ 4 ] = - c * f;
    			te[ 8 ] = d;

    			te[ 1 ] = af + be * d;
    			te[ 5 ] = ae - bf * d;
    			te[ 9 ] = - b * c;

    			te[ 2 ] = bf - ae * d;
    			te[ 6 ] = be + af * d;
    			te[ 10 ] = a * c;

    		} else if ( euler.order === 'YXZ' ) {

    			const ce = c * e, cf = c * f, de = d * e, df = d * f;

    			te[ 0 ] = ce + df * b;
    			te[ 4 ] = de * b - cf;
    			te[ 8 ] = a * d;

    			te[ 1 ] = a * f;
    			te[ 5 ] = a * e;
    			te[ 9 ] = - b;

    			te[ 2 ] = cf * b - de;
    			te[ 6 ] = df + ce * b;
    			te[ 10 ] = a * c;

    		} else if ( euler.order === 'ZXY' ) {

    			const ce = c * e, cf = c * f, de = d * e, df = d * f;

    			te[ 0 ] = ce - df * b;
    			te[ 4 ] = - a * f;
    			te[ 8 ] = de + cf * b;

    			te[ 1 ] = cf + de * b;
    			te[ 5 ] = a * e;
    			te[ 9 ] = df - ce * b;

    			te[ 2 ] = - a * d;
    			te[ 6 ] = b;
    			te[ 10 ] = a * c;

    		} else if ( euler.order === 'ZYX' ) {

    			const ae = a * e, af = a * f, be = b * e, bf = b * f;

    			te[ 0 ] = c * e;
    			te[ 4 ] = be * d - af;
    			te[ 8 ] = ae * d + bf;

    			te[ 1 ] = c * f;
    			te[ 5 ] = bf * d + ae;
    			te[ 9 ] = af * d - be;

    			te[ 2 ] = - d;
    			te[ 6 ] = b * c;
    			te[ 10 ] = a * c;

    		} else if ( euler.order === 'YZX' ) {

    			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

    			te[ 0 ] = c * e;
    			te[ 4 ] = bd - ac * f;
    			te[ 8 ] = bc * f + ad;

    			te[ 1 ] = f;
    			te[ 5 ] = a * e;
    			te[ 9 ] = - b * e;

    			te[ 2 ] = - d * e;
    			te[ 6 ] = ad * f + bc;
    			te[ 10 ] = ac - bd * f;

    		} else if ( euler.order === 'XZY' ) {

    			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

    			te[ 0 ] = c * e;
    			te[ 4 ] = - f;
    			te[ 8 ] = d * e;

    			te[ 1 ] = ac * f + bd;
    			te[ 5 ] = a * e;
    			te[ 9 ] = ad * f - bc;

    			te[ 2 ] = bc * f - ad;
    			te[ 6 ] = b * e;
    			te[ 10 ] = bd * f + ac;

    		}

    		// bottom row
    		te[ 3 ] = 0;
    		te[ 7 ] = 0;
    		te[ 11 ] = 0;

    		// last column
    		te[ 12 ] = 0;
    		te[ 13 ] = 0;
    		te[ 14 ] = 0;
    		te[ 15 ] = 1;

    		return this;

    	}

    	makeRotationFromQuaternion( q ) {

    		return this.compose( _zero, q, _one );

    	}

    	lookAt( eye, target, up ) {

    		const te = this.elements;

    		_z.subVectors( eye, target );

    		if ( _z.lengthSq() === 0 ) {

    			// eye and target are in the same position

    			_z.z = 1;

    		}

    		_z.normalize();
    		_x.crossVectors( up, _z );

    		if ( _x.lengthSq() === 0 ) {

    			// up and z are parallel

    			if ( Math.abs( up.z ) === 1 ) {

    				_z.x += 0.0001;

    			} else {

    				_z.z += 0.0001;

    			}

    			_z.normalize();
    			_x.crossVectors( up, _z );

    		}

    		_x.normalize();
    		_y.crossVectors( _z, _x );

    		te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
    		te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
    		te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

    		return this;

    	}

    	multiply( m ) {

    		return this.multiplyMatrices( this, m );

    	}

    	premultiply( m ) {

    		return this.multiplyMatrices( m, this );

    	}

    	multiplyMatrices( a, b ) {

    		const ae = a.elements;
    		const be = b.elements;
    		const te = this.elements;

    		const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
    		const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
    		const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
    		const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

    		const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
    		const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
    		const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
    		const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

    		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

    		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

    		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

    		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    		return this;

    	}

    	multiplyScalar( s ) {

    		const te = this.elements;

    		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
    		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
    		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
    		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

    		return this;

    	}

    	determinant() {

    		const te = this.elements;

    		const n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
    		const n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
    		const n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
    		const n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

    		//TODO: make this more efficient
    		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

    		return (
    			n41 * (
    				+ n14 * n23 * n32
    				 - n13 * n24 * n32
    				 - n14 * n22 * n33
    				 + n12 * n24 * n33
    				 + n13 * n22 * n34
    				 - n12 * n23 * n34
    			) +
    			n42 * (
    				+ n11 * n23 * n34
    				 - n11 * n24 * n33
    				 + n14 * n21 * n33
    				 - n13 * n21 * n34
    				 + n13 * n24 * n31
    				 - n14 * n23 * n31
    			) +
    			n43 * (
    				+ n11 * n24 * n32
    				 - n11 * n22 * n34
    				 - n14 * n21 * n32
    				 + n12 * n21 * n34
    				 + n14 * n22 * n31
    				 - n12 * n24 * n31
    			) +
    			n44 * (
    				- n13 * n22 * n31
    				 - n11 * n23 * n32
    				 + n11 * n22 * n33
    				 + n13 * n21 * n32
    				 - n12 * n21 * n33
    				 + n12 * n23 * n31
    			)

    		);

    	}

    	transpose() {

    		const te = this.elements;
    		let tmp;

    		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
    		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
    		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

    		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
    		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
    		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

    		return this;

    	}

    	setPosition( x, y, z ) {

    		const te = this.elements;

    		if ( x.isVector3 ) {

    			te[ 12 ] = x.x;
    			te[ 13 ] = x.y;
    			te[ 14 ] = x.z;

    		} else {

    			te[ 12 ] = x;
    			te[ 13 ] = y;
    			te[ 14 ] = z;

    		}

    		return this;

    	}

    	invert() {

    		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
    		const te = this.elements,

    			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
    			n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
    			n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
    			n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

    			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
    			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
    			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
    			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

    		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

    		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

    		const detInv = 1 / det;

    		te[ 0 ] = t11 * detInv;
    		te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
    		te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
    		te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

    		te[ 4 ] = t12 * detInv;
    		te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
    		te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
    		te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

    		te[ 8 ] = t13 * detInv;
    		te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
    		te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
    		te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

    		te[ 12 ] = t14 * detInv;
    		te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
    		te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
    		te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

    		return this;

    	}

    	scale( v ) {

    		const te = this.elements;
    		const x = v.x, y = v.y, z = v.z;

    		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
    		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
    		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
    		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

    		return this;

    	}

    	getMaxScaleOnAxis() {

    		const te = this.elements;

    		const scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
    		const scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
    		const scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

    		return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

    	}

    	makeTranslation( x, y, z ) {

    		if ( x.isVector3 ) {

    			this.set(

    				1, 0, 0, x.x,
    				0, 1, 0, x.y,
    				0, 0, 1, x.z,
    				0, 0, 0, 1

    			);

    		} else {

    			this.set(

    				1, 0, 0, x,
    				0, 1, 0, y,
    				0, 0, 1, z,
    				0, 0, 0, 1

    			);

    		}

    		return this;

    	}

    	makeRotationX( theta ) {

    		const c = Math.cos( theta ), s = Math.sin( theta );

    		this.set(

    			1, 0, 0, 0,
    			0, c, - s, 0,
    			0, s, c, 0,
    			0, 0, 0, 1

    		);

    		return this;

    	}

    	makeRotationY( theta ) {

    		const c = Math.cos( theta ), s = Math.sin( theta );

    		this.set(

    			 c, 0, s, 0,
    			 0, 1, 0, 0,
    			- s, 0, c, 0,
    			 0, 0, 0, 1

    		);

    		return this;

    	}

    	makeRotationZ( theta ) {

    		const c = Math.cos( theta ), s = Math.sin( theta );

    		this.set(

    			c, - s, 0, 0,
    			s, c, 0, 0,
    			0, 0, 1, 0,
    			0, 0, 0, 1

    		);

    		return this;

    	}

    	makeRotationAxis( axis, angle ) {

    		// Based on http://www.gamedev.net/reference/articles/article1199.asp

    		const c = Math.cos( angle );
    		const s = Math.sin( angle );
    		const t = 1 - c;
    		const x = axis.x, y = axis.y, z = axis.z;
    		const tx = t * x, ty = t * y;

    		this.set(

    			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
    			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
    			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
    			0, 0, 0, 1

    		);

    		return this;

    	}

    	makeScale( x, y, z ) {

    		this.set(

    			x, 0, 0, 0,
    			0, y, 0, 0,
    			0, 0, z, 0,
    			0, 0, 0, 1

    		);

    		return this;

    	}

    	makeShear( xy, xz, yx, yz, zx, zy ) {

    		this.set(

    			1, yx, zx, 0,
    			xy, 1, zy, 0,
    			xz, yz, 1, 0,
    			0, 0, 0, 1

    		);

    		return this;

    	}

    	compose( position, quaternion, scale ) {

    		const te = this.elements;

    		const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
    		const x2 = x + x,	y2 = y + y, z2 = z + z;
    		const xx = x * x2, xy = x * y2, xz = x * z2;
    		const yy = y * y2, yz = y * z2, zz = z * z2;
    		const wx = w * x2, wy = w * y2, wz = w * z2;

    		const sx = scale.x, sy = scale.y, sz = scale.z;

    		te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
    		te[ 1 ] = ( xy + wz ) * sx;
    		te[ 2 ] = ( xz - wy ) * sx;
    		te[ 3 ] = 0;

    		te[ 4 ] = ( xy - wz ) * sy;
    		te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
    		te[ 6 ] = ( yz + wx ) * sy;
    		te[ 7 ] = 0;

    		te[ 8 ] = ( xz + wy ) * sz;
    		te[ 9 ] = ( yz - wx ) * sz;
    		te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
    		te[ 11 ] = 0;

    		te[ 12 ] = position.x;
    		te[ 13 ] = position.y;
    		te[ 14 ] = position.z;
    		te[ 15 ] = 1;

    		return this;

    	}

    	decompose( position, quaternion, scale ) {

    		const te = this.elements;

    		let sx = _v1$5.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
    		const sy = _v1$5.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
    		const sz = _v1$5.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

    		// if determine is negative, we need to invert one scale
    		const det = this.determinant();
    		if ( det < 0 ) sx = - sx;

    		position.x = te[ 12 ];
    		position.y = te[ 13 ];
    		position.z = te[ 14 ];

    		// scale the rotation part
    		_m1$2.copy( this );

    		const invSX = 1 / sx;
    		const invSY = 1 / sy;
    		const invSZ = 1 / sz;

    		_m1$2.elements[ 0 ] *= invSX;
    		_m1$2.elements[ 1 ] *= invSX;
    		_m1$2.elements[ 2 ] *= invSX;

    		_m1$2.elements[ 4 ] *= invSY;
    		_m1$2.elements[ 5 ] *= invSY;
    		_m1$2.elements[ 6 ] *= invSY;

    		_m1$2.elements[ 8 ] *= invSZ;
    		_m1$2.elements[ 9 ] *= invSZ;
    		_m1$2.elements[ 10 ] *= invSZ;

    		quaternion.setFromRotationMatrix( _m1$2 );

    		scale.x = sx;
    		scale.y = sy;
    		scale.z = sz;

    		return this;

    	}

    	makePerspective( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

    		const te = this.elements;
    		const x = 2 * near / ( right - left );
    		const y = 2 * near / ( top - bottom );

    		const a = ( right + left ) / ( right - left );
    		const b = ( top + bottom ) / ( top - bottom );

    		let c, d;

    		if ( coordinateSystem === WebGLCoordinateSystem ) {

    			c = - ( far + near ) / ( far - near );
    			d = ( - 2 * far * near ) / ( far - near );

    		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

    			c = - far / ( far - near );
    			d = ( - far * near ) / ( far - near );

    		} else {

    			throw new Error( 'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + coordinateSystem );

    		}

    		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a; 	te[ 12 ] = 0;
    		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b; 	te[ 13 ] = 0;
    		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c; 	te[ 14 ] = d;
    		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

    		return this;

    	}

    	makeOrthographic( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

    		const te = this.elements;
    		const w = 1.0 / ( right - left );
    		const h = 1.0 / ( top - bottom );
    		const p = 1.0 / ( far - near );

    		const x = ( right + left ) * w;
    		const y = ( top + bottom ) * h;

    		let z, zInv;

    		if ( coordinateSystem === WebGLCoordinateSystem ) {

    			z = ( far + near ) * p;
    			zInv = - 2 * p;

    		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

    			z = near * p;
    			zInv = - 1 * p;

    		} else {

    			throw new Error( 'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + coordinateSystem );

    		}

    		te[ 0 ] = 2 * w;	te[ 4 ] = 0;		te[ 8 ] = 0; 		te[ 12 ] = - x;
    		te[ 1 ] = 0; 		te[ 5 ] = 2 * h;	te[ 9 ] = 0; 		te[ 13 ] = - y;
    		te[ 2 ] = 0; 		te[ 6 ] = 0;		te[ 10 ] = zInv;	te[ 14 ] = - z;
    		te[ 3 ] = 0; 		te[ 7 ] = 0;		te[ 11 ] = 0;		te[ 15 ] = 1;

    		return this;

    	}

    	equals( matrix ) {

    		const te = this.elements;
    		const me = matrix.elements;

    		for ( let i = 0; i < 16; i ++ ) {

    			if ( te[ i ] !== me[ i ] ) return false;

    		}

    		return true;

    	}

    	fromArray( array, offset = 0 ) {

    		for ( let i = 0; i < 16; i ++ ) {

    			this.elements[ i ] = array[ i + offset ];

    		}

    		return this;

    	}

    	toArray( array = [], offset = 0 ) {

    		const te = this.elements;

    		array[ offset ] = te[ 0 ];
    		array[ offset + 1 ] = te[ 1 ];
    		array[ offset + 2 ] = te[ 2 ];
    		array[ offset + 3 ] = te[ 3 ];

    		array[ offset + 4 ] = te[ 4 ];
    		array[ offset + 5 ] = te[ 5 ];
    		array[ offset + 6 ] = te[ 6 ];
    		array[ offset + 7 ] = te[ 7 ];

    		array[ offset + 8 ] = te[ 8 ];
    		array[ offset + 9 ] = te[ 9 ];
    		array[ offset + 10 ] = te[ 10 ];
    		array[ offset + 11 ] = te[ 11 ];

    		array[ offset + 12 ] = te[ 12 ];
    		array[ offset + 13 ] = te[ 13 ];
    		array[ offset + 14 ] = te[ 14 ];
    		array[ offset + 15 ] = te[ 15 ];

    		return array;

    	}

    }

    const _v1$5 = /*@__PURE__*/ new Vector3();
    const _m1$2 = /*@__PURE__*/ new Matrix4();
    const _zero = /*@__PURE__*/ new Vector3( 0, 0, 0 );
    const _one = /*@__PURE__*/ new Vector3( 1, 1, 1 );
    const _x = /*@__PURE__*/ new Vector3();
    const _y = /*@__PURE__*/ new Vector3();
    const _z = /*@__PURE__*/ new Vector3();

    const _matrix$1 = /*@__PURE__*/ new Matrix4();
    const _quaternion$3 = /*@__PURE__*/ new Quaternion();

    class Euler {

    	constructor( x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER ) {

    		this.isEuler = true;

    		this._x = x;
    		this._y = y;
    		this._z = z;
    		this._order = order;

    	}

    	get x() {

    		return this._x;

    	}

    	set x( value ) {

    		this._x = value;
    		this._onChangeCallback();

    	}

    	get y() {

    		return this._y;

    	}

    	set y( value ) {

    		this._y = value;
    		this._onChangeCallback();

    	}

    	get z() {

    		return this._z;

    	}

    	set z( value ) {

    		this._z = value;
    		this._onChangeCallback();

    	}

    	get order() {

    		return this._order;

    	}

    	set order( value ) {

    		this._order = value;
    		this._onChangeCallback();

    	}

    	set( x, y, z, order = this._order ) {

    		this._x = x;
    		this._y = y;
    		this._z = z;
    		this._order = order;

    		this._onChangeCallback();

    		return this;

    	}

    	clone() {

    		return new this.constructor( this._x, this._y, this._z, this._order );

    	}

    	copy( euler ) {

    		this._x = euler._x;
    		this._y = euler._y;
    		this._z = euler._z;
    		this._order = euler._order;

    		this._onChangeCallback();

    		return this;

    	}

    	setFromRotationMatrix( m, order = this._order, update = true ) {

    		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

    		const te = m.elements;
    		const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
    		const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
    		const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

    		switch ( order ) {

    			case 'XYZ':

    				this._y = Math.asin( clamp( m13, - 1, 1 ) );

    				if ( Math.abs( m13 ) < 0.9999999 ) {

    					this._x = Math.atan2( - m23, m33 );
    					this._z = Math.atan2( - m12, m11 );

    				} else {

    					this._x = Math.atan2( m32, m22 );
    					this._z = 0;

    				}

    				break;

    			case 'YXZ':

    				this._x = Math.asin( - clamp( m23, - 1, 1 ) );

    				if ( Math.abs( m23 ) < 0.9999999 ) {

    					this._y = Math.atan2( m13, m33 );
    					this._z = Math.atan2( m21, m22 );

    				} else {

    					this._y = Math.atan2( - m31, m11 );
    					this._z = 0;

    				}

    				break;

    			case 'ZXY':

    				this._x = Math.asin( clamp( m32, - 1, 1 ) );

    				if ( Math.abs( m32 ) < 0.9999999 ) {

    					this._y = Math.atan2( - m31, m33 );
    					this._z = Math.atan2( - m12, m22 );

    				} else {

    					this._y = 0;
    					this._z = Math.atan2( m21, m11 );

    				}

    				break;

    			case 'ZYX':

    				this._y = Math.asin( - clamp( m31, - 1, 1 ) );

    				if ( Math.abs( m31 ) < 0.9999999 ) {

    					this._x = Math.atan2( m32, m33 );
    					this._z = Math.atan2( m21, m11 );

    				} else {

    					this._x = 0;
    					this._z = Math.atan2( - m12, m22 );

    				}

    				break;

    			case 'YZX':

    				this._z = Math.asin( clamp( m21, - 1, 1 ) );

    				if ( Math.abs( m21 ) < 0.9999999 ) {

    					this._x = Math.atan2( - m23, m22 );
    					this._y = Math.atan2( - m31, m11 );

    				} else {

    					this._x = 0;
    					this._y = Math.atan2( m13, m33 );

    				}

    				break;

    			case 'XZY':

    				this._z = Math.asin( - clamp( m12, - 1, 1 ) );

    				if ( Math.abs( m12 ) < 0.9999999 ) {

    					this._x = Math.atan2( m32, m22 );
    					this._y = Math.atan2( m13, m11 );

    				} else {

    					this._x = Math.atan2( - m23, m33 );
    					this._y = 0;

    				}

    				break;

    			default:

    				console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

    		}

    		this._order = order;

    		if ( update === true ) this._onChangeCallback();

    		return this;

    	}

    	setFromQuaternion( q, order, update ) {

    		_matrix$1.makeRotationFromQuaternion( q );

    		return this.setFromRotationMatrix( _matrix$1, order, update );

    	}

    	setFromVector3( v, order = this._order ) {

    		return this.set( v.x, v.y, v.z, order );

    	}

    	reorder( newOrder ) {

    		// WARNING: this discards revolution information -bhouston

    		_quaternion$3.setFromEuler( this );

    		return this.setFromQuaternion( _quaternion$3, newOrder );

    	}

    	equals( euler ) {

    		return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

    	}

    	fromArray( array ) {

    		this._x = array[ 0 ];
    		this._y = array[ 1 ];
    		this._z = array[ 2 ];
    		if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

    		this._onChangeCallback();

    		return this;

    	}

    	toArray( array = [], offset = 0 ) {

    		array[ offset ] = this._x;
    		array[ offset + 1 ] = this._y;
    		array[ offset + 2 ] = this._z;
    		array[ offset + 3 ] = this._order;

    		return array;

    	}

    	_onChange( callback ) {

    		this._onChangeCallback = callback;

    		return this;

    	}

    	_onChangeCallback() {}

    	*[ Symbol.iterator ]() {

    		yield this._x;
    		yield this._y;
    		yield this._z;
    		yield this._order;

    	}

    }

    Euler.DEFAULT_ORDER = 'XYZ';

    class Layers {

    	constructor() {

    		this.mask = 1 | 0;

    	}

    	set( channel ) {

    		this.mask = ( 1 << channel | 0 ) >>> 0;

    	}

    	enable( channel ) {

    		this.mask |= 1 << channel | 0;

    	}

    	enableAll() {

    		this.mask = 0xffffffff | 0;

    	}

    	toggle( channel ) {

    		this.mask ^= 1 << channel | 0;

    	}

    	disable( channel ) {

    		this.mask &= ~ ( 1 << channel | 0 );

    	}

    	disableAll() {

    		this.mask = 0;

    	}

    	test( layers ) {

    		return ( this.mask & layers.mask ) !== 0;

    	}

    	isEnabled( channel ) {

    		return ( this.mask & ( 1 << channel | 0 ) ) !== 0;

    	}

    }

    let _object3DId = 0;

    const _v1$4 = /*@__PURE__*/ new Vector3();
    const _q1 = /*@__PURE__*/ new Quaternion();
    const _m1$1 = /*@__PURE__*/ new Matrix4();
    const _target = /*@__PURE__*/ new Vector3();

    const _position$3 = /*@__PURE__*/ new Vector3();
    const _scale$2 = /*@__PURE__*/ new Vector3();
    const _quaternion$2 = /*@__PURE__*/ new Quaternion();

    const _xAxis = /*@__PURE__*/ new Vector3( 1, 0, 0 );
    const _yAxis = /*@__PURE__*/ new Vector3( 0, 1, 0 );
    const _zAxis = /*@__PURE__*/ new Vector3( 0, 0, 1 );

    const _addedEvent = { type: 'added' };
    const _removedEvent = { type: 'removed' };

    class Object3D extends EventDispatcher {

    	constructor() {

    		super();

    		this.isObject3D = true;

    		Object.defineProperty( this, 'id', { value: _object3DId ++ } );

    		this.uuid = generateUUID();

    		this.name = '';
    		this.type = 'Object3D';

    		this.parent = null;
    		this.children = [];

    		this.up = Object3D.DEFAULT_UP.clone();

    		const position = new Vector3();
    		const rotation = new Euler();
    		const quaternion = new Quaternion();
    		const scale = new Vector3( 1, 1, 1 );

    		function onRotationChange() {

    			quaternion.setFromEuler( rotation, false );

    		}

    		function onQuaternionChange() {

    			rotation.setFromQuaternion( quaternion, undefined, false );

    		}

    		rotation._onChange( onRotationChange );
    		quaternion._onChange( onQuaternionChange );

    		Object.defineProperties( this, {
    			position: {
    				configurable: true,
    				enumerable: true,
    				value: position
    			},
    			rotation: {
    				configurable: true,
    				enumerable: true,
    				value: rotation
    			},
    			quaternion: {
    				configurable: true,
    				enumerable: true,
    				value: quaternion
    			},
    			scale: {
    				configurable: true,
    				enumerable: true,
    				value: scale
    			},
    			modelViewMatrix: {
    				value: new Matrix4()
    			},
    			normalMatrix: {
    				value: new Matrix3()
    			}
    		} );

    		this.matrix = new Matrix4();
    		this.matrixWorld = new Matrix4();

    		this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;

    		this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer
    		this.matrixWorldNeedsUpdate = false;

    		this.layers = new Layers();
    		this.visible = true;

    		this.castShadow = false;
    		this.receiveShadow = false;

    		this.frustumCulled = true;
    		this.renderOrder = 0;

    		this.animations = [];

    		this.userData = {};

    	}

    	onBeforeShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

    	onAfterShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

    	onBeforeRender( /* renderer, scene, camera, geometry, material, group */ ) {}

    	onAfterRender( /* renderer, scene, camera, geometry, material, group */ ) {}

    	applyMatrix4( matrix ) {

    		if ( this.matrixAutoUpdate ) this.updateMatrix();

    		this.matrix.premultiply( matrix );

    		this.matrix.decompose( this.position, this.quaternion, this.scale );

    	}

    	applyQuaternion( q ) {

    		this.quaternion.premultiply( q );

    		return this;

    	}

    	setRotationFromAxisAngle( axis, angle ) {

    		// assumes axis is normalized

    		this.quaternion.setFromAxisAngle( axis, angle );

    	}

    	setRotationFromEuler( euler ) {

    		this.quaternion.setFromEuler( euler, true );

    	}

    	setRotationFromMatrix( m ) {

    		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

    		this.quaternion.setFromRotationMatrix( m );

    	}

    	setRotationFromQuaternion( q ) {

    		// assumes q is normalized

    		this.quaternion.copy( q );

    	}

    	rotateOnAxis( axis, angle ) {

    		// rotate object on axis in object space
    		// axis is assumed to be normalized

    		_q1.setFromAxisAngle( axis, angle );

    		this.quaternion.multiply( _q1 );

    		return this;

    	}

    	rotateOnWorldAxis( axis, angle ) {

    		// rotate object on axis in world space
    		// axis is assumed to be normalized
    		// method assumes no rotated parent

    		_q1.setFromAxisAngle( axis, angle );

    		this.quaternion.premultiply( _q1 );

    		return this;

    	}

    	rotateX( angle ) {

    		return this.rotateOnAxis( _xAxis, angle );

    	}

    	rotateY( angle ) {

    		return this.rotateOnAxis( _yAxis, angle );

    	}

    	rotateZ( angle ) {

    		return this.rotateOnAxis( _zAxis, angle );

    	}

    	translateOnAxis( axis, distance ) {

    		// translate object by distance along axis in object space
    		// axis is assumed to be normalized

    		_v1$4.copy( axis ).applyQuaternion( this.quaternion );

    		this.position.add( _v1$4.multiplyScalar( distance ) );

    		return this;

    	}

    	translateX( distance ) {

    		return this.translateOnAxis( _xAxis, distance );

    	}

    	translateY( distance ) {

    		return this.translateOnAxis( _yAxis, distance );

    	}

    	translateZ( distance ) {

    		return this.translateOnAxis( _zAxis, distance );

    	}

    	localToWorld( vector ) {

    		this.updateWorldMatrix( true, false );

    		return vector.applyMatrix4( this.matrixWorld );

    	}

    	worldToLocal( vector ) {

    		this.updateWorldMatrix( true, false );

    		return vector.applyMatrix4( _m1$1.copy( this.matrixWorld ).invert() );

    	}

    	lookAt( x, y, z ) {

    		// This method does not support objects having non-uniformly-scaled parent(s)

    		if ( x.isVector3 ) {

    			_target.copy( x );

    		} else {

    			_target.set( x, y, z );

    		}

    		const parent = this.parent;

    		this.updateWorldMatrix( true, false );

    		_position$3.setFromMatrixPosition( this.matrixWorld );

    		if ( this.isCamera || this.isLight ) {

    			_m1$1.lookAt( _position$3, _target, this.up );

    		} else {

    			_m1$1.lookAt( _target, _position$3, this.up );

    		}

    		this.quaternion.setFromRotationMatrix( _m1$1 );

    		if ( parent ) {

    			_m1$1.extractRotation( parent.matrixWorld );
    			_q1.setFromRotationMatrix( _m1$1 );
    			this.quaternion.premultiply( _q1.invert() );

    		}

    	}

    	add( object ) {

    		if ( arguments.length > 1 ) {

    			for ( let i = 0; i < arguments.length; i ++ ) {

    				this.add( arguments[ i ] );

    			}

    			return this;

    		}

    		if ( object === this ) {

    			console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', object );
    			return this;

    		}

    		if ( object && object.isObject3D ) {

    			if ( object.parent !== null ) {

    				object.parent.remove( object );

    			}

    			object.parent = this;
    			this.children.push( object );

    			object.dispatchEvent( _addedEvent );

    		} else {

    			console.error( 'THREE.Object3D.add: object not an instance of THREE.Object3D.', object );

    		}

    		return this;

    	}

    	remove( object ) {

    		if ( arguments.length > 1 ) {

    			for ( let i = 0; i < arguments.length; i ++ ) {

    				this.remove( arguments[ i ] );

    			}

    			return this;

    		}

    		const index = this.children.indexOf( object );

    		if ( index !== - 1 ) {

    			object.parent = null;
    			this.children.splice( index, 1 );

    			object.dispatchEvent( _removedEvent );

    		}

    		return this;

    	}

    	removeFromParent() {

    		const parent = this.parent;

    		if ( parent !== null ) {

    			parent.remove( this );

    		}

    		return this;

    	}

    	clear() {

    		return this.remove( ... this.children );

    	}

    	attach( object ) {

    		// adds object as a child of this, while maintaining the object's world transform

    		// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)

    		this.updateWorldMatrix( true, false );

    		_m1$1.copy( this.matrixWorld ).invert();

    		if ( object.parent !== null ) {

    			object.parent.updateWorldMatrix( true, false );

    			_m1$1.multiply( object.parent.matrixWorld );

    		}

    		object.applyMatrix4( _m1$1 );

    		this.add( object );

    		object.updateWorldMatrix( false, true );

    		return this;

    	}

    	getObjectById( id ) {

    		return this.getObjectByProperty( 'id', id );

    	}

    	getObjectByName( name ) {

    		return this.getObjectByProperty( 'name', name );

    	}

    	getObjectByProperty( name, value ) {

    		if ( this[ name ] === value ) return this;

    		for ( let i = 0, l = this.children.length; i < l; i ++ ) {

    			const child = this.children[ i ];
    			const object = child.getObjectByProperty( name, value );

    			if ( object !== undefined ) {

    				return object;

    			}

    		}

    		return undefined;

    	}

    	getObjectsByProperty( name, value, result = [] ) {

    		if ( this[ name ] === value ) result.push( this );

    		const children = this.children;

    		for ( let i = 0, l = children.length; i < l; i ++ ) {

    			children[ i ].getObjectsByProperty( name, value, result );

    		}

    		return result;

    	}

    	getWorldPosition( target ) {

    		this.updateWorldMatrix( true, false );

    		return target.setFromMatrixPosition( this.matrixWorld );

    	}

    	getWorldQuaternion( target ) {

    		this.updateWorldMatrix( true, false );

    		this.matrixWorld.decompose( _position$3, target, _scale$2 );

    		return target;

    	}

    	getWorldScale( target ) {

    		this.updateWorldMatrix( true, false );

    		this.matrixWorld.decompose( _position$3, _quaternion$2, target );

    		return target;

    	}

    	getWorldDirection( target ) {

    		this.updateWorldMatrix( true, false );

    		const e = this.matrixWorld.elements;

    		return target.set( e[ 8 ], e[ 9 ], e[ 10 ] ).normalize();

    	}

    	raycast( /* raycaster, intersects */ ) {}

    	traverse( callback ) {

    		callback( this );

    		const children = this.children;

    		for ( let i = 0, l = children.length; i < l; i ++ ) {

    			children[ i ].traverse( callback );

    		}

    	}

    	traverseVisible( callback ) {

    		if ( this.visible === false ) return;

    		callback( this );

    		const children = this.children;

    		for ( let i = 0, l = children.length; i < l; i ++ ) {

    			children[ i ].traverseVisible( callback );

    		}

    	}

    	traverseAncestors( callback ) {

    		const parent = this.parent;

    		if ( parent !== null ) {

    			callback( parent );

    			parent.traverseAncestors( callback );

    		}

    	}

    	updateMatrix() {

    		this.matrix.compose( this.position, this.quaternion, this.scale );

    		this.matrixWorldNeedsUpdate = true;

    	}

    	updateMatrixWorld( force ) {

    		if ( this.matrixAutoUpdate ) this.updateMatrix();

    		if ( this.matrixWorldNeedsUpdate || force ) {

    			if ( this.parent === null ) {

    				this.matrixWorld.copy( this.matrix );

    			} else {

    				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

    			}

    			this.matrixWorldNeedsUpdate = false;

    			force = true;

    		}

    		// update children

    		const children = this.children;

    		for ( let i = 0, l = children.length; i < l; i ++ ) {

    			const child = children[ i ];

    			if ( child.matrixWorldAutoUpdate === true || force === true ) {

    				child.updateMatrixWorld( force );

    			}

    		}

    	}

    	updateWorldMatrix( updateParents, updateChildren ) {

    		const parent = this.parent;

    		if ( updateParents === true && parent !== null && parent.matrixWorldAutoUpdate === true ) {

    			parent.updateWorldMatrix( true, false );

    		}

    		if ( this.matrixAutoUpdate ) this.updateMatrix();

    		if ( this.parent === null ) {

    			this.matrixWorld.copy( this.matrix );

    		} else {

    			this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

    		}

    		// update children

    		if ( updateChildren === true ) {

    			const children = this.children;

    			for ( let i = 0, l = children.length; i < l; i ++ ) {

    				const child = children[ i ];

    				if ( child.matrixWorldAutoUpdate === true ) {

    					child.updateWorldMatrix( false, true );

    				}

    			}

    		}

    	}

    	toJSON( meta ) {

    		// meta is a string when called from JSON.stringify
    		const isRootObject = ( meta === undefined || typeof meta === 'string' );

    		const output = {};

    		// meta is a hash used to collect geometries, materials.
    		// not providing it implies that this is the root object
    		// being serialized.
    		if ( isRootObject ) {

    			// initialize meta obj
    			meta = {
    				geometries: {},
    				materials: {},
    				textures: {},
    				images: {},
    				shapes: {},
    				skeletons: {},
    				animations: {},
    				nodes: {}
    			};

    			output.metadata = {
    				version: 4.6,
    				type: 'Object',
    				generator: 'Object3D.toJSON'
    			};

    		}

    		// standard Object3D serialization

    		const object = {};

    		object.uuid = this.uuid;
    		object.type = this.type;

    		if ( this.name !== '' ) object.name = this.name;
    		if ( this.castShadow === true ) object.castShadow = true;
    		if ( this.receiveShadow === true ) object.receiveShadow = true;
    		if ( this.visible === false ) object.visible = false;
    		if ( this.frustumCulled === false ) object.frustumCulled = false;
    		if ( this.renderOrder !== 0 ) object.renderOrder = this.renderOrder;
    		if ( Object.keys( this.userData ).length > 0 ) object.userData = this.userData;

    		object.layers = this.layers.mask;
    		object.matrix = this.matrix.toArray();
    		object.up = this.up.toArray();

    		if ( this.matrixAutoUpdate === false ) object.matrixAutoUpdate = false;

    		// object specific properties

    		if ( this.isInstancedMesh ) {

    			object.type = 'InstancedMesh';
    			object.count = this.count;
    			object.instanceMatrix = this.instanceMatrix.toJSON();
    			if ( this.instanceColor !== null ) object.instanceColor = this.instanceColor.toJSON();

    		}

    		if ( this.isBatchedMesh ) {

    			object.type = 'BatchedMesh';
    			object.perObjectFrustumCulled = this.perObjectFrustumCulled;
    			object.sortObjects = this.sortObjects;

    			object.drawRanges = this._drawRanges;
    			object.reservedRanges = this._reservedRanges;

    			object.visibility = this._visibility;
    			object.active = this._active;
    			object.bounds = this._bounds.map( bound => ( {
    				boxInitialized: bound.boxInitialized,
    				boxMin: bound.box.min.toArray(),
    				boxMax: bound.box.max.toArray(),

    				sphereInitialized: bound.sphereInitialized,
    				sphereRadius: bound.sphere.radius,
    				sphereCenter: bound.sphere.center.toArray()
    			} ) );

    			object.maxGeometryCount = this._maxGeometryCount;
    			object.maxVertexCount = this._maxVertexCount;
    			object.maxIndexCount = this._maxIndexCount;

    			object.geometryInitialized = this._geometryInitialized;
    			object.geometryCount = this._geometryCount;

    			object.matricesTexture = this._matricesTexture.toJSON( meta );

    			if ( this.boundingSphere !== null ) {

    				object.boundingSphere = {
    					center: object.boundingSphere.center.toArray(),
    					radius: object.boundingSphere.radius
    				};

    			}

    			if ( this.boundingBox !== null ) {

    				object.boundingBox = {
    					min: object.boundingBox.min.toArray(),
    					max: object.boundingBox.max.toArray()
    				};

    			}

    		}

    		//

    		function serialize( library, element ) {

    			if ( library[ element.uuid ] === undefined ) {

    				library[ element.uuid ] = element.toJSON( meta );

    			}

    			return element.uuid;

    		}

    		if ( this.isScene ) {

    			if ( this.background ) {

    				if ( this.background.isColor ) {

    					object.background = this.background.toJSON();

    				} else if ( this.background.isTexture ) {

    					object.background = this.background.toJSON( meta ).uuid;

    				}

    			}

    			if ( this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true ) {

    				object.environment = this.environment.toJSON( meta ).uuid;

    			}

    		} else if ( this.isMesh || this.isLine || this.isPoints ) {

    			object.geometry = serialize( meta.geometries, this.geometry );

    			const parameters = this.geometry.parameters;

    			if ( parameters !== undefined && parameters.shapes !== undefined ) {

    				const shapes = parameters.shapes;

    				if ( Array.isArray( shapes ) ) {

    					for ( let i = 0, l = shapes.length; i < l; i ++ ) {

    						const shape = shapes[ i ];

    						serialize( meta.shapes, shape );

    					}

    				} else {

    					serialize( meta.shapes, shapes );

    				}

    			}

    		}

    		if ( this.isSkinnedMesh ) {

    			object.bindMode = this.bindMode;
    			object.bindMatrix = this.bindMatrix.toArray();

    			if ( this.skeleton !== undefined ) {

    				serialize( meta.skeletons, this.skeleton );

    				object.skeleton = this.skeleton.uuid;

    			}

    		}

    		if ( this.material !== undefined ) {

    			if ( Array.isArray( this.material ) ) {

    				const uuids = [];

    				for ( let i = 0, l = this.material.length; i < l; i ++ ) {

    					uuids.push( serialize( meta.materials, this.material[ i ] ) );

    				}

    				object.material = uuids;

    			} else {

    				object.material = serialize( meta.materials, this.material );

    			}

    		}

    		//

    		if ( this.children.length > 0 ) {

    			object.children = [];

    			for ( let i = 0; i < this.children.length; i ++ ) {

    				object.children.push( this.children[ i ].toJSON( meta ).object );

    			}

    		}

    		//

    		if ( this.animations.length > 0 ) {

    			object.animations = [];

    			for ( let i = 0; i < this.animations.length; i ++ ) {

    				const animation = this.animations[ i ];

    				object.animations.push( serialize( meta.animations, animation ) );

    			}

    		}

    		if ( isRootObject ) {

    			const geometries = extractFromCache( meta.geometries );
    			const materials = extractFromCache( meta.materials );
    			const textures = extractFromCache( meta.textures );
    			const images = extractFromCache( meta.images );
    			const shapes = extractFromCache( meta.shapes );
    			const skeletons = extractFromCache( meta.skeletons );
    			const animations = extractFromCache( meta.animations );
    			const nodes = extractFromCache( meta.nodes );

    			if ( geometries.length > 0 ) output.geometries = geometries;
    			if ( materials.length > 0 ) output.materials = materials;
    			if ( textures.length > 0 ) output.textures = textures;
    			if ( images.length > 0 ) output.images = images;
    			if ( shapes.length > 0 ) output.shapes = shapes;
    			if ( skeletons.length > 0 ) output.skeletons = skeletons;
    			if ( animations.length > 0 ) output.animations = animations;
    			if ( nodes.length > 0 ) output.nodes = nodes;

    		}

    		output.object = object;

    		return output;

    		// extract data from the cache hash
    		// remove metadata on each item
    		// and return as array
    		function extractFromCache( cache ) {

    			const values = [];
    			for ( const key in cache ) {

    				const data = cache[ key ];
    				delete data.metadata;
    				values.push( data );

    			}

    			return values;

    		}

    	}

    	clone( recursive ) {

    		return new this.constructor().copy( this, recursive );

    	}

    	copy( source, recursive = true ) {

    		this.name = source.name;

    		this.up.copy( source.up );

    		this.position.copy( source.position );
    		this.rotation.order = source.rotation.order;
    		this.quaternion.copy( source.quaternion );
    		this.scale.copy( source.scale );

    		this.matrix.copy( source.matrix );
    		this.matrixWorld.copy( source.matrixWorld );

    		this.matrixAutoUpdate = source.matrixAutoUpdate;

    		this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
    		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

    		this.layers.mask = source.layers.mask;
    		this.visible = source.visible;

    		this.castShadow = source.castShadow;
    		this.receiveShadow = source.receiveShadow;

    		this.frustumCulled = source.frustumCulled;
    		this.renderOrder = source.renderOrder;

    		this.animations = source.animations.slice();

    		this.userData = JSON.parse( JSON.stringify( source.userData ) );

    		if ( recursive === true ) {

    			for ( let i = 0; i < source.children.length; i ++ ) {

    				const child = source.children[ i ];
    				this.add( child.clone() );

    			}

    		}

    		return this;

    	}

    }

    Object3D.DEFAULT_UP = /*@__PURE__*/ new Vector3( 0, 1, 0 );
    Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
    Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;

    const _v0$1 = /*@__PURE__*/ new Vector3();
    const _v1$3 = /*@__PURE__*/ new Vector3();
    const _v2$2 = /*@__PURE__*/ new Vector3();
    const _v3$1 = /*@__PURE__*/ new Vector3();

    const _vab = /*@__PURE__*/ new Vector3();
    const _vac = /*@__PURE__*/ new Vector3();
    const _vbc = /*@__PURE__*/ new Vector3();
    const _vap = /*@__PURE__*/ new Vector3();
    const _vbp = /*@__PURE__*/ new Vector3();
    const _vcp = /*@__PURE__*/ new Vector3();

    let warnedGetUV = false;

    class Triangle {

    	constructor( a = new Vector3(), b = new Vector3(), c = new Vector3() ) {

    		this.a = a;
    		this.b = b;
    		this.c = c;

    	}

    	static getNormal( a, b, c, target ) {

    		target.subVectors( c, b );
    		_v0$1.subVectors( a, b );
    		target.cross( _v0$1 );

    		const targetLengthSq = target.lengthSq();
    		if ( targetLengthSq > 0 ) {

    			return target.multiplyScalar( 1 / Math.sqrt( targetLengthSq ) );

    		}

    		return target.set( 0, 0, 0 );

    	}

    	// static/instance method to calculate barycentric coordinates
    	// based on: http://www.blackpawn.com/texts/pointinpoly/default.html
    	static getBarycoord( point, a, b, c, target ) {

    		_v0$1.subVectors( c, a );
    		_v1$3.subVectors( b, a );
    		_v2$2.subVectors( point, a );

    		const dot00 = _v0$1.dot( _v0$1 );
    		const dot01 = _v0$1.dot( _v1$3 );
    		const dot02 = _v0$1.dot( _v2$2 );
    		const dot11 = _v1$3.dot( _v1$3 );
    		const dot12 = _v1$3.dot( _v2$2 );

    		const denom = ( dot00 * dot11 - dot01 * dot01 );

    		// collinear or singular triangle
    		if ( denom === 0 ) {

    			target.set( 0, 0, 0 );
    			return null;

    		}

    		const invDenom = 1 / denom;
    		const u = ( dot11 * dot02 - dot01 * dot12 ) * invDenom;
    		const v = ( dot00 * dot12 - dot01 * dot02 ) * invDenom;

    		// barycentric coordinates must always sum to 1
    		return target.set( 1 - u - v, v, u );

    	}

    	static containsPoint( point, a, b, c ) {

    		// if the triangle is degenerate then we can't contain a point
    		if ( this.getBarycoord( point, a, b, c, _v3$1 ) === null ) {

    			return false;

    		}

    		return ( _v3$1.x >= 0 ) && ( _v3$1.y >= 0 ) && ( ( _v3$1.x + _v3$1.y ) <= 1 );

    	}

    	static getUV( point, p1, p2, p3, uv1, uv2, uv3, target ) { // @deprecated, r151

    		if ( warnedGetUV === false ) {

    			console.warn( 'THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().' );

    			warnedGetUV = true;

    		}

    		return this.getInterpolation( point, p1, p2, p3, uv1, uv2, uv3, target );

    	}

    	static getInterpolation( point, p1, p2, p3, v1, v2, v3, target ) {

    		if ( this.getBarycoord( point, p1, p2, p3, _v3$1 ) === null ) {

    			target.x = 0;
    			target.y = 0;
    			if ( 'z' in target ) target.z = 0;
    			if ( 'w' in target ) target.w = 0;
    			return null;

    		}

    		target.setScalar( 0 );
    		target.addScaledVector( v1, _v3$1.x );
    		target.addScaledVector( v2, _v3$1.y );
    		target.addScaledVector( v3, _v3$1.z );

    		return target;

    	}

    	static isFrontFacing( a, b, c, direction ) {

    		_v0$1.subVectors( c, b );
    		_v1$3.subVectors( a, b );

    		// strictly front facing
    		return ( _v0$1.cross( _v1$3 ).dot( direction ) < 0 ) ? true : false;

    	}

    	set( a, b, c ) {

    		this.a.copy( a );
    		this.b.copy( b );
    		this.c.copy( c );

    		return this;

    	}

    	setFromPointsAndIndices( points, i0, i1, i2 ) {

    		this.a.copy( points[ i0 ] );
    		this.b.copy( points[ i1 ] );
    		this.c.copy( points[ i2 ] );

    		return this;

    	}

    	setFromAttributeAndIndices( attribute, i0, i1, i2 ) {

    		this.a.fromBufferAttribute( attribute, i0 );
    		this.b.fromBufferAttribute( attribute, i1 );
    		this.c.fromBufferAttribute( attribute, i2 );

    		return this;

    	}

    	clone() {

    		return new this.constructor().copy( this );

    	}

    	copy( triangle ) {

    		this.a.copy( triangle.a );
    		this.b.copy( triangle.b );
    		this.c.copy( triangle.c );

    		return this;

    	}

    	getArea() {

    		_v0$1.subVectors( this.c, this.b );
    		_v1$3.subVectors( this.a, this.b );

    		return _v0$1.cross( _v1$3 ).length() * 0.5;

    	}

    	getMidpoint( target ) {

    		return target.addVectors( this.a, this.b ).add( this.c ).multiplyScalar( 1 / 3 );

    	}

    	getNormal( target ) {

    		return Triangle.getNormal( this.a, this.b, this.c, target );

    	}

    	getPlane( target ) {

    		return target.setFromCoplanarPoints( this.a, this.b, this.c );

    	}

    	getBarycoord( point, target ) {

    		return Triangle.getBarycoord( point, this.a, this.b, this.c, target );

    	}

    	getUV( point, uv1, uv2, uv3, target ) { // @deprecated, r151

    		if ( warnedGetUV === false ) {

    			console.warn( 'THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().' );

    			warnedGetUV = true;

    		}

    		return Triangle.getInterpolation( point, this.a, this.b, this.c, uv1, uv2, uv3, target );

    	}

    	getInterpolation( point, v1, v2, v3, target ) {

    		return Triangle.getInterpolation( point, this.a, this.b, this.c, v1, v2, v3, target );

    	}

    	containsPoint( point ) {

    		return Triangle.containsPoint( point, this.a, this.b, this.c );

    	}

    	isFrontFacing( direction ) {

    		return Triangle.isFrontFacing( this.a, this.b, this.c, direction );

    	}

    	intersectsBox( box ) {

    		return box.intersectsTriangle( this );

    	}

    	closestPointToPoint( p, target ) {

    		const a = this.a, b = this.b, c = this.c;
    		let v, w;

    		// algorithm thanks to Real-Time Collision Detection by Christer Ericson,
    		// published by Morgan Kaufmann Publishers, (c) 2005 Elsevier Inc.,
    		// under the accompanying license; see chapter 5.1.5 for detailed explanation.
    		// basically, we're distinguishing which of the voronoi regions of the triangle
    		// the point lies in with the minimum amount of redundant computation.

    		_vab.subVectors( b, a );
    		_vac.subVectors( c, a );
    		_vap.subVectors( p, a );
    		const d1 = _vab.dot( _vap );
    		const d2 = _vac.dot( _vap );
    		if ( d1 <= 0 && d2 <= 0 ) {

    			// vertex region of A; barycentric coords (1, 0, 0)
    			return target.copy( a );

    		}

    		_vbp.subVectors( p, b );
    		const d3 = _vab.dot( _vbp );
    		const d4 = _vac.dot( _vbp );
    		if ( d3 >= 0 && d4 <= d3 ) {

    			// vertex region of B; barycentric coords (0, 1, 0)
    			return target.copy( b );

    		}

    		const vc = d1 * d4 - d3 * d2;
    		if ( vc <= 0 && d1 >= 0 && d3 <= 0 ) {

    			v = d1 / ( d1 - d3 );
    			// edge region of AB; barycentric coords (1-v, v, 0)
    			return target.copy( a ).addScaledVector( _vab, v );

    		}

    		_vcp.subVectors( p, c );
    		const d5 = _vab.dot( _vcp );
    		const d6 = _vac.dot( _vcp );
    		if ( d6 >= 0 && d5 <= d6 ) {

    			// vertex region of C; barycentric coords (0, 0, 1)
    			return target.copy( c );

    		}

    		const vb = d5 * d2 - d1 * d6;
    		if ( vb <= 0 && d2 >= 0 && d6 <= 0 ) {

    			w = d2 / ( d2 - d6 );
    			// edge region of AC; barycentric coords (1-w, 0, w)
    			return target.copy( a ).addScaledVector( _vac, w );

    		}

    		const va = d3 * d6 - d5 * d4;
    		if ( va <= 0 && ( d4 - d3 ) >= 0 && ( d5 - d6 ) >= 0 ) {

    			_vbc.subVectors( c, b );
    			w = ( d4 - d3 ) / ( ( d4 - d3 ) + ( d5 - d6 ) );
    			// edge region of BC; barycentric coords (0, 1-w, w)
    			return target.copy( b ).addScaledVector( _vbc, w ); // edge region of BC

    		}

    		// face region
    		const denom = 1 / ( va + vb + vc );
    		// u = va * denom
    		v = vb * denom;
    		w = vc * denom;

    		return target.copy( a ).addScaledVector( _vab, v ).addScaledVector( _vac, w );

    	}

    	equals( triangle ) {

    		return triangle.a.equals( this.a ) && triangle.b.equals( this.b ) && triangle.c.equals( this.c );

    	}

    }

    const _colorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
    	'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
    	'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
    	'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
    	'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
    	'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
    	'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
    	'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
    	'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
    	'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
    	'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
    	'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
    	'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
    	'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
    	'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
    	'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
    	'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
    	'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
    	'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
    	'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
    	'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
    	'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
    	'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
    	'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };

    const _hslA = { h: 0, s: 0, l: 0 };
    const _hslB = { h: 0, s: 0, l: 0 };

    function hue2rgb( p, q, t ) {

    	if ( t < 0 ) t += 1;
    	if ( t > 1 ) t -= 1;
    	if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
    	if ( t < 1 / 2 ) return q;
    	if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
    	return p;

    }

    class Color {

    	constructor( r, g, b ) {

    		this.isColor = true;

    		this.r = 1;
    		this.g = 1;
    		this.b = 1;

    		return this.set( r, g, b );

    	}

    	set( r, g, b ) {

    		if ( g === undefined && b === undefined ) {

    			// r is THREE.Color, hex or string

    			const value = r;

    			if ( value && value.isColor ) {

    				this.copy( value );

    			} else if ( typeof value === 'number' ) {

    				this.setHex( value );

    			} else if ( typeof value === 'string' ) {

    				this.setStyle( value );

    			}

    		} else {

    			this.setRGB( r, g, b );

    		}

    		return this;

    	}

    	setScalar( scalar ) {

    		this.r = scalar;
    		this.g = scalar;
    		this.b = scalar;

    		return this;

    	}

    	setHex( hex, colorSpace = SRGBColorSpace ) {

    		hex = Math.floor( hex );

    		this.r = ( hex >> 16 & 255 ) / 255;
    		this.g = ( hex >> 8 & 255 ) / 255;
    		this.b = ( hex & 255 ) / 255;

    		ColorManagement.toWorkingColorSpace( this, colorSpace );

    		return this;

    	}

    	setRGB( r, g, b, colorSpace = ColorManagement.workingColorSpace ) {

    		this.r = r;
    		this.g = g;
    		this.b = b;

    		ColorManagement.toWorkingColorSpace( this, colorSpace );

    		return this;

    	}

    	setHSL( h, s, l, colorSpace = ColorManagement.workingColorSpace ) {

    		// h,s,l ranges are in 0.0 - 1.0
    		h = euclideanModulo( h, 1 );
    		s = clamp( s, 0, 1 );
    		l = clamp( l, 0, 1 );

    		if ( s === 0 ) {

    			this.r = this.g = this.b = l;

    		} else {

    			const p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
    			const q = ( 2 * l ) - p;

    			this.r = hue2rgb( q, p, h + 1 / 3 );
    			this.g = hue2rgb( q, p, h );
    			this.b = hue2rgb( q, p, h - 1 / 3 );

    		}

    		ColorManagement.toWorkingColorSpace( this, colorSpace );

    		return this;

    	}

    	setStyle( style, colorSpace = SRGBColorSpace ) {

    		function handleAlpha( string ) {

    			if ( string === undefined ) return;

    			if ( parseFloat( string ) < 1 ) {

    				console.warn( 'THREE.Color: Alpha component of ' + style + ' will be ignored.' );

    			}

    		}


    		let m;

    		if ( m = /^(\w+)\(([^\)]*)\)/.exec( style ) ) {

    			// rgb / hsl

    			let color;
    			const name = m[ 1 ];
    			const components = m[ 2 ];

    			switch ( name ) {

    				case 'rgb':
    				case 'rgba':

    					if ( color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

    						// rgb(255,0,0) rgba(255,0,0,0.5)

    						handleAlpha( color[ 4 ] );

    						return this.setRGB(
    							Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255,
    							Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255,
    							Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255,
    							colorSpace
    						);

    					}

    					if ( color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

    						// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)

    						handleAlpha( color[ 4 ] );

    						return this.setRGB(
    							Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100,
    							Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100,
    							Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100,
    							colorSpace
    						);

    					}

    					break;

    				case 'hsl':
    				case 'hsla':

    					if ( color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

    						// hsl(120,50%,50%) hsla(120,50%,50%,0.5)

    						handleAlpha( color[ 4 ] );

    						return this.setHSL(
    							parseFloat( color[ 1 ] ) / 360,
    							parseFloat( color[ 2 ] ) / 100,
    							parseFloat( color[ 3 ] ) / 100,
    							colorSpace
    						);

    					}

    					break;

    				default:

    					console.warn( 'THREE.Color: Unknown color model ' + style );

    			}

    		} else if ( m = /^\#([A-Fa-f\d]+)$/.exec( style ) ) {

    			// hex color

    			const hex = m[ 1 ];
    			const size = hex.length;

    			if ( size === 3 ) {

    				// #ff0
    				return this.setRGB(
    					parseInt( hex.charAt( 0 ), 16 ) / 15,
    					parseInt( hex.charAt( 1 ), 16 ) / 15,
    					parseInt( hex.charAt( 2 ), 16 ) / 15,
    					colorSpace
    				);

    			} else if ( size === 6 ) {

    				// #ff0000
    				return this.setHex( parseInt( hex, 16 ), colorSpace );

    			} else {

    				console.warn( 'THREE.Color: Invalid hex color ' + style );

    			}

    		} else if ( style && style.length > 0 ) {

    			return this.setColorName( style, colorSpace );

    		}

    		return this;

    	}

    	setColorName( style, colorSpace = SRGBColorSpace ) {

    		// color keywords
    		const hex = _colorKeywords[ style.toLowerCase() ];

    		if ( hex !== undefined ) {

    			// red
    			this.setHex( hex, colorSpace );

    		} else {

    			// unknown color
    			console.warn( 'THREE.Color: Unknown color ' + style );

    		}

    		return this;

    	}

    	clone() {

    		return new this.constructor( this.r, this.g, this.b );

    	}

    	copy( color ) {

    		this.r = color.r;
    		this.g = color.g;
    		this.b = color.b;

    		return this;

    	}

    	copySRGBToLinear( color ) {

    		this.r = SRGBToLinear( color.r );
    		this.g = SRGBToLinear( color.g );
    		this.b = SRGBToLinear( color.b );

    		return this;

    	}

    	copyLinearToSRGB( color ) {

    		this.r = LinearToSRGB( color.r );
    		this.g = LinearToSRGB( color.g );
    		this.b = LinearToSRGB( color.b );

    		return this;

    	}

    	convertSRGBToLinear() {

    		this.copySRGBToLinear( this );

    		return this;

    	}

    	convertLinearToSRGB() {

    		this.copyLinearToSRGB( this );

    		return this;

    	}

    	getHex( colorSpace = SRGBColorSpace ) {

    		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

    		return Math.round( clamp( _color.r * 255, 0, 255 ) ) * 65536 + Math.round( clamp( _color.g * 255, 0, 255 ) ) * 256 + Math.round( clamp( _color.b * 255, 0, 255 ) );

    	}

    	getHexString( colorSpace = SRGBColorSpace ) {

    		return ( '000000' + this.getHex( colorSpace ).toString( 16 ) ).slice( - 6 );

    	}

    	getHSL( target, colorSpace = ColorManagement.workingColorSpace ) {

    		// h,s,l ranges are in 0.0 - 1.0

    		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

    		const r = _color.r, g = _color.g, b = _color.b;

    		const max = Math.max( r, g, b );
    		const min = Math.min( r, g, b );

    		let hue, saturation;
    		const lightness = ( min + max ) / 2.0;

    		if ( min === max ) {

    			hue = 0;
    			saturation = 0;

    		} else {

    			const delta = max - min;

    			saturation = lightness <= 0.5 ? delta / ( max + min ) : delta / ( 2 - max - min );

    			switch ( max ) {

    				case r: hue = ( g - b ) / delta + ( g < b ? 6 : 0 ); break;
    				case g: hue = ( b - r ) / delta + 2; break;
    				case b: hue = ( r - g ) / delta + 4; break;

    			}

    			hue /= 6;

    		}

    		target.h = hue;
    		target.s = saturation;
    		target.l = lightness;

    		return target;

    	}

    	getRGB( target, colorSpace = ColorManagement.workingColorSpace ) {

    		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

    		target.r = _color.r;
    		target.g = _color.g;
    		target.b = _color.b;

    		return target;

    	}

    	getStyle( colorSpace = SRGBColorSpace ) {

    		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

    		const r = _color.r, g = _color.g, b = _color.b;

    		if ( colorSpace !== SRGBColorSpace ) {

    			// Requires CSS Color Module Level 4 (https://www.w3.org/TR/css-color-4/).
    			return `color(${ colorSpace } ${ r.toFixed( 3 ) } ${ g.toFixed( 3 ) } ${ b.toFixed( 3 ) })`;

    		}

    		return `rgb(${ Math.round( r * 255 ) },${ Math.round( g * 255 ) },${ Math.round( b * 255 ) })`;

    	}

    	offsetHSL( h, s, l ) {

    		this.getHSL( _hslA );

    		return this.setHSL( _hslA.h + h, _hslA.s + s, _hslA.l + l );

    	}

    	add( color ) {

    		this.r += color.r;
    		this.g += color.g;
    		this.b += color.b;

    		return this;

    	}

    	addColors( color1, color2 ) {

    		this.r = color1.r + color2.r;
    		this.g = color1.g + color2.g;
    		this.b = color1.b + color2.b;

    		return this;

    	}

    	addScalar( s ) {

    		this.r += s;
    		this.g += s;
    		this.b += s;

    		return this;

    	}

    	sub( color ) {

    		this.r = Math.max( 0, this.r - color.r );
    		this.g = Math.max( 0, this.g - color.g );
    		this.b = Math.max( 0, this.b - color.b );

    		return this;

    	}

    	multiply( color ) {

    		this.r *= color.r;
    		this.g *= color.g;
    		this.b *= color.b;

    		return this;

    	}

    	multiplyScalar( s ) {

    		this.r *= s;
    		this.g *= s;
    		this.b *= s;

    		return this;

    	}

    	lerp( color, alpha ) {

    		this.r += ( color.r - this.r ) * alpha;
    		this.g += ( color.g - this.g ) * alpha;
    		this.b += ( color.b - this.b ) * alpha;

    		return this;

    	}

    	lerpColors( color1, color2, alpha ) {

    		this.r = color1.r + ( color2.r - color1.r ) * alpha;
    		this.g = color1.g + ( color2.g - color1.g ) * alpha;
    		this.b = color1.b + ( color2.b - color1.b ) * alpha;

    		return this;

    	}

    	lerpHSL( color, alpha ) {

    		this.getHSL( _hslA );
    		color.getHSL( _hslB );

    		const h = lerp( _hslA.h, _hslB.h, alpha );
    		const s = lerp( _hslA.s, _hslB.s, alpha );
    		const l = lerp( _hslA.l, _hslB.l, alpha );

    		this.setHSL( h, s, l );

    		return this;

    	}

    	setFromVector3( v ) {

    		this.r = v.x;
    		this.g = v.y;
    		this.b = v.z;

    		return this;

    	}

    	applyMatrix3( m ) {

    		const r = this.r, g = this.g, b = this.b;
    		const e = m.elements;

    		this.r = e[ 0 ] * r + e[ 3 ] * g + e[ 6 ] * b;
    		this.g = e[ 1 ] * r + e[ 4 ] * g + e[ 7 ] * b;
    		this.b = e[ 2 ] * r + e[ 5 ] * g + e[ 8 ] * b;

    		return this;

    	}

    	equals( c ) {

    		return ( c.r === this.r ) && ( c.g === this.g ) && ( c.b === this.b );

    	}

    	fromArray( array, offset = 0 ) {

    		this.r = array[ offset ];
    		this.g = array[ offset + 1 ];
    		this.b = array[ offset + 2 ];

    		return this;

    	}

    	toArray( array = [], offset = 0 ) {

    		array[ offset ] = this.r;
    		array[ offset + 1 ] = this.g;
    		array[ offset + 2 ] = this.b;

    		return array;

    	}

    	fromBufferAttribute( attribute, index ) {

    		this.r = attribute.getX( index );
    		this.g = attribute.getY( index );
    		this.b = attribute.getZ( index );

    		return this;

    	}

    	toJSON() {

    		return this.getHex();

    	}

    	*[ Symbol.iterator ]() {

    		yield this.r;
    		yield this.g;
    		yield this.b;

    	}

    }

    const _color = /*@__PURE__*/ new Color();

    Color.NAMES = _colorKeywords;

    let _materialId = 0;

    class Material extends EventDispatcher {

    	constructor() {

    		super();

    		this.isMaterial = true;

    		Object.defineProperty( this, 'id', { value: _materialId ++ } );

    		this.uuid = generateUUID();

    		this.name = '';
    		this.type = 'Material';

    		this.blending = NormalBlending;
    		this.side = FrontSide;
    		this.vertexColors = false;

    		this.opacity = 1;
    		this.transparent = false;
    		this.alphaHash = false;

    		this.blendSrc = SrcAlphaFactor;
    		this.blendDst = OneMinusSrcAlphaFactor;
    		this.blendEquation = AddEquation;
    		this.blendSrcAlpha = null;
    		this.blendDstAlpha = null;
    		this.blendEquationAlpha = null;
    		this.blendColor = new Color( 0, 0, 0 );
    		this.blendAlpha = 0;

    		this.depthFunc = LessEqualDepth;
    		this.depthTest = true;
    		this.depthWrite = true;

    		this.stencilWriteMask = 0xff;
    		this.stencilFunc = AlwaysStencilFunc;
    		this.stencilRef = 0;
    		this.stencilFuncMask = 0xff;
    		this.stencilFail = KeepStencilOp;
    		this.stencilZFail = KeepStencilOp;
    		this.stencilZPass = KeepStencilOp;
    		this.stencilWrite = false;

    		this.clippingPlanes = null;
    		this.clipIntersection = false;
    		this.clipShadows = false;

    		this.shadowSide = null;

    		this.colorWrite = true;

    		this.precision = null; // override the renderer's default precision for this material

    		this.polygonOffset = false;
    		this.polygonOffsetFactor = 0;
    		this.polygonOffsetUnits = 0;

    		this.dithering = false;

    		this.alphaToCoverage = false;
    		this.premultipliedAlpha = false;
    		this.forceSinglePass = false;

    		this.visible = true;

    		this.toneMapped = true;

    		this.userData = {};

    		this.version = 0;

    		this._alphaTest = 0;

    	}

    	get alphaTest() {

    		return this._alphaTest;

    	}

    	set alphaTest( value ) {

    		if ( this._alphaTest > 0 !== value > 0 ) {

    			this.version ++;

    		}

    		this._alphaTest = value;

    	}

    	onBuild( /* shaderobject, renderer */ ) {}

    	onBeforeRender( /* renderer, scene, camera, geometry, object, group */ ) {}

    	onBeforeCompile( /* shaderobject, renderer */ ) {}

    	customProgramCacheKey() {

    		return this.onBeforeCompile.toString();

    	}

    	setValues( values ) {

    		if ( values === undefined ) return;

    		for ( const key in values ) {

    			const newValue = values[ key ];

    			if ( newValue === undefined ) {

    				console.warn( `THREE.Material: parameter '${ key }' has value of undefined.` );
    				continue;

    			}

    			const currentValue = this[ key ];

    			if ( currentValue === undefined ) {

    				console.warn( `THREE.Material: '${ key }' is not a property of THREE.${ this.type }.` );
    				continue;

    			}

    			if ( currentValue && currentValue.isColor ) {

    				currentValue.set( newValue );

    			} else if ( ( currentValue && currentValue.isVector3 ) && ( newValue && newValue.isVector3 ) ) {

    				currentValue.copy( newValue );

    			} else {

    				this[ key ] = newValue;

    			}

    		}

    	}

    	toJSON( meta ) {

    		const isRootObject = ( meta === undefined || typeof meta === 'string' );

    		if ( isRootObject ) {

    			meta = {
    				textures: {},
    				images: {}
    			};

    		}

    		const data = {
    			metadata: {
    				version: 4.6,
    				type: 'Material',
    				generator: 'Material.toJSON'
    			}
    		};

    		// standard Material serialization
    		data.uuid = this.uuid;
    		data.type = this.type;

    		if ( this.name !== '' ) data.name = this.name;

    		if ( this.color && this.color.isColor ) data.color = this.color.getHex();

    		if ( this.roughness !== undefined ) data.roughness = this.roughness;
    		if ( this.metalness !== undefined ) data.metalness = this.metalness;

    		if ( this.sheen !== undefined ) data.sheen = this.sheen;
    		if ( this.sheenColor && this.sheenColor.isColor ) data.sheenColor = this.sheenColor.getHex();
    		if ( this.sheenRoughness !== undefined ) data.sheenRoughness = this.sheenRoughness;
    		if ( this.emissive && this.emissive.isColor ) data.emissive = this.emissive.getHex();
    		if ( this.emissiveIntensity && this.emissiveIntensity !== 1 ) data.emissiveIntensity = this.emissiveIntensity;

    		if ( this.specular && this.specular.isColor ) data.specular = this.specular.getHex();
    		if ( this.specularIntensity !== undefined ) data.specularIntensity = this.specularIntensity;
    		if ( this.specularColor && this.specularColor.isColor ) data.specularColor = this.specularColor.getHex();
    		if ( this.shininess !== undefined ) data.shininess = this.shininess;
    		if ( this.clearcoat !== undefined ) data.clearcoat = this.clearcoat;
    		if ( this.clearcoatRoughness !== undefined ) data.clearcoatRoughness = this.clearcoatRoughness;

    		if ( this.clearcoatMap && this.clearcoatMap.isTexture ) {

    			data.clearcoatMap = this.clearcoatMap.toJSON( meta ).uuid;

    		}

    		if ( this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture ) {

    			data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON( meta ).uuid;

    		}

    		if ( this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture ) {

    			data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON( meta ).uuid;
    			data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();

    		}

    		if ( this.iridescence !== undefined ) data.iridescence = this.iridescence;
    		if ( this.iridescenceIOR !== undefined ) data.iridescenceIOR = this.iridescenceIOR;
    		if ( this.iridescenceThicknessRange !== undefined ) data.iridescenceThicknessRange = this.iridescenceThicknessRange;

    		if ( this.iridescenceMap && this.iridescenceMap.isTexture ) {

    			data.iridescenceMap = this.iridescenceMap.toJSON( meta ).uuid;

    		}

    		if ( this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture ) {

    			data.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON( meta ).uuid;

    		}

    		if ( this.anisotropy !== undefined ) data.anisotropy = this.anisotropy;
    		if ( this.anisotropyRotation !== undefined ) data.anisotropyRotation = this.anisotropyRotation;

    		if ( this.anisotropyMap && this.anisotropyMap.isTexture ) {

    			data.anisotropyMap = this.anisotropyMap.toJSON( meta ).uuid;

    		}

    		if ( this.map && this.map.isTexture ) data.map = this.map.toJSON( meta ).uuid;
    		if ( this.matcap && this.matcap.isTexture ) data.matcap = this.matcap.toJSON( meta ).uuid;
    		if ( this.alphaMap && this.alphaMap.isTexture ) data.alphaMap = this.alphaMap.toJSON( meta ).uuid;

    		if ( this.lightMap && this.lightMap.isTexture ) {

    			data.lightMap = this.lightMap.toJSON( meta ).uuid;
    			data.lightMapIntensity = this.lightMapIntensity;

    		}

    		if ( this.aoMap && this.aoMap.isTexture ) {

    			data.aoMap = this.aoMap.toJSON( meta ).uuid;
    			data.aoMapIntensity = this.aoMapIntensity;

    		}

    		if ( this.bumpMap && this.bumpMap.isTexture ) {

    			data.bumpMap = this.bumpMap.toJSON( meta ).uuid;
    			data.bumpScale = this.bumpScale;

    		}

    		if ( this.normalMap && this.normalMap.isTexture ) {

    			data.normalMap = this.normalMap.toJSON( meta ).uuid;
    			data.normalMapType = this.normalMapType;
    			data.normalScale = this.normalScale.toArray();

    		}

    		if ( this.displacementMap && this.displacementMap.isTexture ) {

    			data.displacementMap = this.displacementMap.toJSON( meta ).uuid;
    			data.displacementScale = this.displacementScale;
    			data.displacementBias = this.displacementBias;

    		}

    		if ( this.roughnessMap && this.roughnessMap.isTexture ) data.roughnessMap = this.roughnessMap.toJSON( meta ).uuid;
    		if ( this.metalnessMap && this.metalnessMap.isTexture ) data.metalnessMap = this.metalnessMap.toJSON( meta ).uuid;

    		if ( this.emissiveMap && this.emissiveMap.isTexture ) data.emissiveMap = this.emissiveMap.toJSON( meta ).uuid;
    		if ( this.specularMap && this.specularMap.isTexture ) data.specularMap = this.specularMap.toJSON( meta ).uuid;
    		if ( this.specularIntensityMap && this.specularIntensityMap.isTexture ) data.specularIntensityMap = this.specularIntensityMap.toJSON( meta ).uuid;
    		if ( this.specularColorMap && this.specularColorMap.isTexture ) data.specularColorMap = this.specularColorMap.toJSON( meta ).uuid;

    		if ( this.envMap && this.envMap.isTexture ) {

    			data.envMap = this.envMap.toJSON( meta ).uuid;

    			if ( this.combine !== undefined ) data.combine = this.combine;

    		}

    		if ( this.envMapIntensity !== undefined ) data.envMapIntensity = this.envMapIntensity;
    		if ( this.reflectivity !== undefined ) data.reflectivity = this.reflectivity;
    		if ( this.refractionRatio !== undefined ) data.refractionRatio = this.refractionRatio;

    		if ( this.gradientMap && this.gradientMap.isTexture ) {

    			data.gradientMap = this.gradientMap.toJSON( meta ).uuid;

    		}

    		if ( this.transmission !== undefined ) data.transmission = this.transmission;
    		if ( this.transmissionMap && this.transmissionMap.isTexture ) data.transmissionMap = this.transmissionMap.toJSON( meta ).uuid;
    		if ( this.thickness !== undefined ) data.thickness = this.thickness;
    		if ( this.thicknessMap && this.thicknessMap.isTexture ) data.thicknessMap = this.thicknessMap.toJSON( meta ).uuid;
    		if ( this.attenuationDistance !== undefined && this.attenuationDistance !== Infinity ) data.attenuationDistance = this.attenuationDistance;
    		if ( this.attenuationColor !== undefined ) data.attenuationColor = this.attenuationColor.getHex();

    		if ( this.size !== undefined ) data.size = this.size;
    		if ( this.shadowSide !== null ) data.shadowSide = this.shadowSide;
    		if ( this.sizeAttenuation !== undefined ) data.sizeAttenuation = this.sizeAttenuation;

    		if ( this.blending !== NormalBlending ) data.blending = this.blending;
    		if ( this.side !== FrontSide ) data.side = this.side;
    		if ( this.vertexColors === true ) data.vertexColors = true;

    		if ( this.opacity < 1 ) data.opacity = this.opacity;
    		if ( this.transparent === true ) data.transparent = true;

    		if ( this.blendSrc !== SrcAlphaFactor ) data.blendSrc = this.blendSrc;
    		if ( this.blendDst !== OneMinusSrcAlphaFactor ) data.blendDst = this.blendDst;
    		if ( this.blendEquation !== AddEquation ) data.blendEquation = this.blendEquation;
    		if ( this.blendSrcAlpha !== null ) data.blendSrcAlpha = this.blendSrcAlpha;
    		if ( this.blendDstAlpha !== null ) data.blendDstAlpha = this.blendDstAlpha;
    		if ( this.blendEquationAlpha !== null ) data.blendEquationAlpha = this.blendEquationAlpha;
    		if ( this.blendColor && this.blendColor.isColor ) data.blendColor = this.blendColor.getHex();
    		if ( this.blendAlpha !== 0 ) data.blendAlpha = this.blendAlpha;

    		if ( this.depthFunc !== LessEqualDepth ) data.depthFunc = this.depthFunc;
    		if ( this.depthTest === false ) data.depthTest = this.depthTest;
    		if ( this.depthWrite === false ) data.depthWrite = this.depthWrite;
    		if ( this.colorWrite === false ) data.colorWrite = this.colorWrite;

    		if ( this.stencilWriteMask !== 0xff ) data.stencilWriteMask = this.stencilWriteMask;
    		if ( this.stencilFunc !== AlwaysStencilFunc ) data.stencilFunc = this.stencilFunc;
    		if ( this.stencilRef !== 0 ) data.stencilRef = this.stencilRef;
    		if ( this.stencilFuncMask !== 0xff ) data.stencilFuncMask = this.stencilFuncMask;
    		if ( this.stencilFail !== KeepStencilOp ) data.stencilFail = this.stencilFail;
    		if ( this.stencilZFail !== KeepStencilOp ) data.stencilZFail = this.stencilZFail;
    		if ( this.stencilZPass !== KeepStencilOp ) data.stencilZPass = this.stencilZPass;
    		if ( this.stencilWrite === true ) data.stencilWrite = this.stencilWrite;

    		// rotation (SpriteMaterial)
    		if ( this.rotation !== undefined && this.rotation !== 0 ) data.rotation = this.rotation;

    		if ( this.polygonOffset === true ) data.polygonOffset = true;
    		if ( this.polygonOffsetFactor !== 0 ) data.polygonOffsetFactor = this.polygonOffsetFactor;
    		if ( this.polygonOffsetUnits !== 0 ) data.polygonOffsetUnits = this.polygonOffsetUnits;

    		if ( this.linewidth !== undefined && this.linewidth !== 1 ) data.linewidth = this.linewidth;
    		if ( this.dashSize !== undefined ) data.dashSize = this.dashSize;
    		if ( this.gapSize !== undefined ) data.gapSize = this.gapSize;
    		if ( this.scale !== undefined ) data.scale = this.scale;

    		if ( this.dithering === true ) data.dithering = true;

    		if ( this.alphaTest > 0 ) data.alphaTest = this.alphaTest;
    		if ( this.alphaHash === true ) data.alphaHash = true;
    		if ( this.alphaToCoverage === true ) data.alphaToCoverage = true;
    		if ( this.premultipliedAlpha === true ) data.premultipliedAlpha = true;
    		if ( this.forceSinglePass === true ) data.forceSinglePass = true;

    		if ( this.wireframe === true ) data.wireframe = true;
    		if ( this.wireframeLinewidth > 1 ) data.wireframeLinewidth = this.wireframeLinewidth;
    		if ( this.wireframeLinecap !== 'round' ) data.wireframeLinecap = this.wireframeLinecap;
    		if ( this.wireframeLinejoin !== 'round' ) data.wireframeLinejoin = this.wireframeLinejoin;

    		if ( this.flatShading === true ) data.flatShading = true;

    		if ( this.visible === false ) data.visible = false;

    		if ( this.toneMapped === false ) data.toneMapped = false;

    		if ( this.fog === false ) data.fog = false;

    		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

    		// TODO: Copied from Object3D.toJSON

    		function extractFromCache( cache ) {

    			const values = [];

    			for ( const key in cache ) {

    				const data = cache[ key ];
    				delete data.metadata;
    				values.push( data );

    			}

    			return values;

    		}

    		if ( isRootObject ) {

    			const textures = extractFromCache( meta.textures );
    			const images = extractFromCache( meta.images );

    			if ( textures.length > 0 ) data.textures = textures;
    			if ( images.length > 0 ) data.images = images;

    		}

    		return data;

    	}

    	clone() {

    		return new this.constructor().copy( this );

    	}

    	copy( source ) {

    		this.name = source.name;

    		this.blending = source.blending;
    		this.side = source.side;
    		this.vertexColors = source.vertexColors;

    		this.opacity = source.opacity;
    		this.transparent = source.transparent;

    		this.blendSrc = source.blendSrc;
    		this.blendDst = source.blendDst;
    		this.blendEquation = source.blendEquation;
    		this.blendSrcAlpha = source.blendSrcAlpha;
    		this.blendDstAlpha = source.blendDstAlpha;
    		this.blendEquationAlpha = source.blendEquationAlpha;
    		this.blendColor.copy( source.blendColor );
    		this.blendAlpha = source.blendAlpha;

    		this.depthFunc = source.depthFunc;
    		this.depthTest = source.depthTest;
    		this.depthWrite = source.depthWrite;

    		this.stencilWriteMask = source.stencilWriteMask;
    		this.stencilFunc = source.stencilFunc;
    		this.stencilRef = source.stencilRef;
    		this.stencilFuncMask = source.stencilFuncMask;
    		this.stencilFail = source.stencilFail;
    		this.stencilZFail = source.stencilZFail;
    		this.stencilZPass = source.stencilZPass;
    		this.stencilWrite = source.stencilWrite;

    		const srcPlanes = source.clippingPlanes;
    		let dstPlanes = null;

    		if ( srcPlanes !== null ) {

    			const n = srcPlanes.length;
    			dstPlanes = new Array( n );

    			for ( let i = 0; i !== n; ++ i ) {

    				dstPlanes[ i ] = srcPlanes[ i ].clone();

    			}

    		}

    		this.clippingPlanes = dstPlanes;
    		this.clipIntersection = source.clipIntersection;
    		this.clipShadows = source.clipShadows;

    		this.shadowSide = source.shadowSide;

    		this.colorWrite = source.colorWrite;

    		this.precision = source.precision;

    		this.polygonOffset = source.polygonOffset;
    		this.polygonOffsetFactor = source.polygonOffsetFactor;
    		this.polygonOffsetUnits = source.polygonOffsetUnits;

    		this.dithering = source.dithering;

    		this.alphaTest = source.alphaTest;
    		this.alphaHash = source.alphaHash;
    		this.alphaToCoverage = source.alphaToCoverage;
    		this.premultipliedAlpha = source.premultipliedAlpha;
    		this.forceSinglePass = source.forceSinglePass;

    		this.visible = source.visible;

    		this.toneMapped = source.toneMapped;

    		this.userData = JSON.parse( JSON.stringify( source.userData ) );

    		return this;

    	}

    	dispose() {

    		this.dispatchEvent( { type: 'dispose' } );

    	}

    	set needsUpdate( value ) {

    		if ( value === true ) this.version ++;

    	}

    }

    class MeshBasicMaterial extends Material {

    	constructor( parameters ) {

    		super();

    		this.isMeshBasicMaterial = true;

    		this.type = 'MeshBasicMaterial';

    		this.color = new Color( 0xffffff ); // emissive

    		this.map = null;

    		this.lightMap = null;
    		this.lightMapIntensity = 1.0;

    		this.aoMap = null;
    		this.aoMapIntensity = 1.0;

    		this.specularMap = null;

    		this.alphaMap = null;

    		this.envMap = null;
    		this.combine = MultiplyOperation;
    		this.reflectivity = 1;
    		this.refractionRatio = 0.98;

    		this.wireframe = false;
    		this.wireframeLinewidth = 1;
    		this.wireframeLinecap = 'round';
    		this.wireframeLinejoin = 'round';

    		this.fog = true;

    		this.setValues( parameters );

    	}

    	copy( source ) {

    		super.copy( source );

    		this.color.copy( source.color );

    		this.map = source.map;

    		this.lightMap = source.lightMap;
    		this.lightMapIntensity = source.lightMapIntensity;

    		this.aoMap = source.aoMap;
    		this.aoMapIntensity = source.aoMapIntensity;

    		this.specularMap = source.specularMap;

    		this.alphaMap = source.alphaMap;

    		this.envMap = source.envMap;
    		this.combine = source.combine;
    		this.reflectivity = source.reflectivity;
    		this.refractionRatio = source.refractionRatio;

    		this.wireframe = source.wireframe;
    		this.wireframeLinewidth = source.wireframeLinewidth;
    		this.wireframeLinecap = source.wireframeLinecap;
    		this.wireframeLinejoin = source.wireframeLinejoin;

    		this.fog = source.fog;

    		return this;

    	}

    }

    const _vector$9 = /*@__PURE__*/ new Vector3();
    const _vector2$1 = /*@__PURE__*/ new Vector2();

    class BufferAttribute {

    	constructor( array, itemSize, normalized = false ) {

    		if ( Array.isArray( array ) ) {

    			throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );

    		}

    		this.isBufferAttribute = true;

    		this.name = '';

    		this.array = array;
    		this.itemSize = itemSize;
    		this.count = array !== undefined ? array.length / itemSize : 0;
    		this.normalized = normalized;

    		this.usage = StaticDrawUsage;
    		this._updateRange = { offset: 0, count: - 1 };
    		this.updateRanges = [];
    		this.gpuType = FloatType;

    		this.version = 0;

    	}

    	onUploadCallback() {}

    	set needsUpdate( value ) {

    		if ( value === true ) this.version ++;

    	}

    	get updateRange() {

    		console.warn( 'THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.' ); // @deprecated, r159
    		return this._updateRange;

    	}

    	setUsage( value ) {

    		this.usage = value;

    		return this;

    	}

    	addUpdateRange( start, count ) {

    		this.updateRanges.push( { start, count } );

    	}

    	clearUpdateRanges() {

    		this.updateRanges.length = 0;

    	}

    	copy( source ) {

    		this.name = source.name;
    		this.array = new source.array.constructor( source.array );
    		this.itemSize = source.itemSize;
    		this.count = source.count;
    		this.normalized = source.normalized;

    		this.usage = source.usage;
    		this.gpuType = source.gpuType;

    		return this;

    	}

    	copyAt( index1, attribute, index2 ) {

    		index1 *= this.itemSize;
    		index2 *= attribute.itemSize;

    		for ( let i = 0, l = this.itemSize; i < l; i ++ ) {

    			this.array[ index1 + i ] = attribute.array[ index2 + i ];

    		}

    		return this;

    	}

    	copyArray( array ) {

    		this.array.set( array );

    		return this;

    	}

    	applyMatrix3( m ) {

    		if ( this.itemSize === 2 ) {

    			for ( let i = 0, l = this.count; i < l; i ++ ) {

    				_vector2$1.fromBufferAttribute( this, i );
    				_vector2$1.applyMatrix3( m );

    				this.setXY( i, _vector2$1.x, _vector2$1.y );

    			}

    		} else if ( this.itemSize === 3 ) {

    			for ( let i = 0, l = this.count; i < l; i ++ ) {

    				_vector$9.fromBufferAttribute( this, i );
    				_vector$9.applyMatrix3( m );

    				this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

    			}

    		}

    		return this;

    	}

    	applyMatrix4( m ) {

    		for ( let i = 0, l = this.count; i < l; i ++ ) {

    			_vector$9.fromBufferAttribute( this, i );

    			_vector$9.applyMatrix4( m );

    			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

    		}

    		return this;

    	}

    	applyNormalMatrix( m ) {

    		for ( let i = 0, l = this.count; i < l; i ++ ) {

    			_vector$9.fromBufferAttribute( this, i );

    			_vector$9.applyNormalMatrix( m );

    			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

    		}

    		return this;

    	}

    	transformDirection( m ) {

    		for ( let i = 0, l = this.count; i < l; i ++ ) {

    			_vector$9.fromBufferAttribute( this, i );

    			_vector$9.transformDirection( m );

    			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

    		}

    		return this;

    	}

    	set( value, offset = 0 ) {

    		// Matching BufferAttribute constructor, do not normalize the array.
    		this.array.set( value, offset );

    		return this;

    	}

    	getComponent( index, component ) {

    		let value = this.array[ index * this.itemSize + component ];

    		if ( this.normalized ) value = denormalize( value, this.array );

    		return value;

    	}

    	setComponent( index, component, value ) {

    		if ( this.normalized ) value = normalize( value, this.array );

    		this.array[ index * this.itemSize + component ] = value;

    		return this;

    	}

    	getX( index ) {

    		let x = this.array[ index * this.itemSize ];

    		if ( this.normalized ) x = denormalize( x, this.array );

    		return x;

    	}

    	setX( index, x ) {

    		if ( this.normalized ) x = normalize( x, this.array );

    		this.array[ index * this.itemSize ] = x;

    		return this;

    	}

    	getY( index ) {

    		let y = this.array[ index * this.itemSize + 1 ];

    		if ( this.normalized ) y = denormalize( y, this.array );

    		return y;

    	}

    	setY( index, y ) {

    		if ( this.normalized ) y = normalize( y, this.array );

    		this.array[ index * this.itemSize + 1 ] = y;

    		return this;

    	}

    	getZ( index ) {

    		let z = this.array[ index * this.itemSize + 2 ];

    		if ( this.normalized ) z = denormalize( z, this.array );

    		return z;

    	}

    	setZ( index, z ) {

    		if ( this.normalized ) z = normalize( z, this.array );

    		this.array[ index * this.itemSize + 2 ] = z;

    		return this;

    	}

    	getW( index ) {

    		let w = this.array[ index * this.itemSize + 3 ];

    		if ( this.normalized ) w = denormalize( w, this.array );

    		return w;

    	}

    	setW( index, w ) {

    		if ( this.normalized ) w = normalize( w, this.array );

    		this.array[ index * this.itemSize + 3 ] = w;

    		return this;

    	}

    	setXY( index, x, y ) {

    		index *= this.itemSize;

    		if ( this.normalized ) {

    			x = normalize( x, this.array );
    			y = normalize( y, this.array );

    		}

    		this.array[ index + 0 ] = x;
    		this.array[ index + 1 ] = y;

    		return this;

    	}

    	setXYZ( index, x, y, z ) {

    		index *= this.itemSize;

    		if ( this.normalized ) {

    			x = normalize( x, this.array );
    			y = normalize( y, this.array );
    			z = normalize( z, this.array );

    		}

    		this.array[ index + 0 ] = x;
    		this.array[ index + 1 ] = y;
    		this.array[ index + 2 ] = z;

    		return this;

    	}

    	setXYZW( index, x, y, z, w ) {

    		index *= this.itemSize;

    		if ( this.normalized ) {

    			x = normalize( x, this.array );
    			y = normalize( y, this.array );
    			z = normalize( z, this.array );
    			w = normalize( w, this.array );

    		}

    		this.array[ index + 0 ] = x;
    		this.array[ index + 1 ] = y;
    		this.array[ index + 2 ] = z;
    		this.array[ index + 3 ] = w;

    		return this;

    	}

    	onUpload( callback ) {

    		this.onUploadCallback = callback;

    		return this;

    	}

    	clone() {

    		return new this.constructor( this.array, this.itemSize ).copy( this );

    	}

    	toJSON() {

    		const data = {
    			itemSize: this.itemSize,
    			type: this.array.constructor.name,
    			array: Array.from( this.array ),
    			normalized: this.normalized
    		};

    		if ( this.name !== '' ) data.name = this.name;
    		if ( this.usage !== StaticDrawUsage ) data.usage = this.usage;

    		return data;

    	}

    }

    class Uint16BufferAttribute extends BufferAttribute {

    	constructor( array, itemSize, normalized ) {

    		super( new Uint16Array( array ), itemSize, normalized );

    	}

    }

    class Uint32BufferAttribute extends BufferAttribute {

    	constructor( array, itemSize, normalized ) {

    		super( new Uint32Array( array ), itemSize, normalized );

    	}

    }


    class Float32BufferAttribute extends BufferAttribute {

    	constructor( array, itemSize, normalized ) {

    		super( new Float32Array( array ), itemSize, normalized );

    	}

    }

    let _id$2 = 0;

    const _m1 = /*@__PURE__*/ new Matrix4();
    const _obj = /*@__PURE__*/ new Object3D();
    const _offset = /*@__PURE__*/ new Vector3();
    const _box$2 = /*@__PURE__*/ new Box3();
    const _boxMorphTargets = /*@__PURE__*/ new Box3();
    const _vector$8 = /*@__PURE__*/ new Vector3();

    class BufferGeometry extends EventDispatcher {

    	constructor() {

    		super();

    		this.isBufferGeometry = true;

    		Object.defineProperty( this, 'id', { value: _id$2 ++ } );

    		this.uuid = generateUUID();

    		this.name = '';
    		this.type = 'BufferGeometry';

    		this.index = null;
    		this.attributes = {};

    		this.morphAttributes = {};
    		this.morphTargetsRelative = false;

    		this.groups = [];

    		this.boundingBox = null;
    		this.boundingSphere = null;

    		this.drawRange = { start: 0, count: Infinity };

    		this.userData = {};

    	}

    	getIndex() {

    		return this.index;

    	}

    	setIndex( index ) {

    		if ( Array.isArray( index ) ) {

    			this.index = new ( arrayNeedsUint32( index ) ? Uint32BufferAttribute : Uint16BufferAttribute )( index, 1 );

    		} else {

    			this.index = index;

    		}

    		return this;

    	}

    	getAttribute( name ) {

    		return this.attributes[ name ];

    	}

    	setAttribute( name, attribute ) {

    		this.attributes[ name ] = attribute;

    		return this;

    	}

    	deleteAttribute( name ) {

    		delete this.attributes[ name ];

    		return this;

    	}

    	hasAttribute( name ) {

    		return this.attributes[ name ] !== undefined;

    	}

    	addGroup( start, count, materialIndex = 0 ) {

    		this.groups.push( {

    			start: start,
    			count: count,
    			materialIndex: materialIndex

    		} );

    	}

    	clearGroups() {

    		this.groups = [];

    	}

    	setDrawRange( start, count ) {

    		this.drawRange.start = start;
    		this.drawRange.count = count;

    	}

    	applyMatrix4( matrix ) {

    		const position = this.attributes.position;

    		if ( position !== undefined ) {

    			position.applyMatrix4( matrix );

    			position.needsUpdate = true;

    		}

    		const normal = this.attributes.normal;

    		if ( normal !== undefined ) {

    			const normalMatrix = new Matrix3().getNormalMatrix( matrix );

    			normal.applyNormalMatrix( normalMatrix );

    			normal.needsUpdate = true;

    		}

    		const tangent = this.attributes.tangent;

    		if ( tangent !== undefined ) {

    			tangent.transformDirection( matrix );

    			tangent.needsUpdate = true;

    		}

    		if ( this.boundingBox !== null ) {

    			this.computeBoundingBox();

    		}

    		if ( this.boundingSphere !== null ) {

    			this.computeBoundingSphere();

    		}

    		return this;

    	}

    	applyQuaternion( q ) {

    		_m1.makeRotationFromQuaternion( q );

    		this.applyMatrix4( _m1 );

    		return this;

    	}

    	rotateX( angle ) {

    		// rotate geometry around world x-axis

    		_m1.makeRotationX( angle );

    		this.applyMatrix4( _m1 );

    		return this;

    	}

    	rotateY( angle ) {

    		// rotate geometry around world y-axis

    		_m1.makeRotationY( angle );

    		this.applyMatrix4( _m1 );

    		return this;

    	}

    	rotateZ( angle ) {

    		// rotate geometry around world z-axis

    		_m1.makeRotationZ( angle );

    		this.applyMatrix4( _m1 );

    		return this;

    	}

    	translate( x, y, z ) {

    		// translate geometry

    		_m1.makeTranslation( x, y, z );

    		this.applyMatrix4( _m1 );

    		return this;

    	}

    	scale( x, y, z ) {

    		// scale geometry

    		_m1.makeScale( x, y, z );

    		this.applyMatrix4( _m1 );

    		return this;

    	}

    	lookAt( vector ) {

    		_obj.lookAt( vector );

    		_obj.updateMatrix();

    		this.applyMatrix4( _obj.matrix );

    		return this;

    	}

    	center() {

    		this.computeBoundingBox();

    		this.boundingBox.getCenter( _offset ).negate();

    		this.translate( _offset.x, _offset.y, _offset.z );

    		return this;

    	}

    	setFromPoints( points ) {

    		const position = [];

    		for ( let i = 0, l = points.length; i < l; i ++ ) {

    			const point = points[ i ];
    			position.push( point.x, point.y, point.z || 0 );

    		}

    		this.setAttribute( 'position', new Float32BufferAttribute( position, 3 ) );

    		return this;

    	}

    	computeBoundingBox() {

    		if ( this.boundingBox === null ) {

    			this.boundingBox = new Box3();

    		}

    		const position = this.attributes.position;
    		const morphAttributesPosition = this.morphAttributes.position;

    		if ( position && position.isGLBufferAttribute ) {

    			console.error( 'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this );

    			this.boundingBox.set(
    				new Vector3( - Infinity, - Infinity, - Infinity ),
    				new Vector3( + Infinity, + Infinity, + Infinity )
    			);

    			return;

    		}

    		if ( position !== undefined ) {

    			this.boundingBox.setFromBufferAttribute( position );

    			// process morph attributes if present

    			if ( morphAttributesPosition ) {

    				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

    					const morphAttribute = morphAttributesPosition[ i ];
    					_box$2.setFromBufferAttribute( morphAttribute );

    					if ( this.morphTargetsRelative ) {

    						_vector$8.addVectors( this.boundingBox.min, _box$2.min );
    						this.boundingBox.expandByPoint( _vector$8 );

    						_vector$8.addVectors( this.boundingBox.max, _box$2.max );
    						this.boundingBox.expandByPoint( _vector$8 );

    					} else {

    						this.boundingBox.expandByPoint( _box$2.min );
    						this.boundingBox.expandByPoint( _box$2.max );

    					}

    				}

    			}

    		} else {

    			this.boundingBox.makeEmpty();

    		}

    		if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

    			console.error( 'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this );

    		}

    	}

    	computeBoundingSphere() {

    		if ( this.boundingSphere === null ) {

    			this.boundingSphere = new Sphere();

    		}

    		const position = this.attributes.position;
    		const morphAttributesPosition = this.morphAttributes.position;

    		if ( position && position.isGLBufferAttribute ) {

    			console.error( 'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this );

    			this.boundingSphere.set( new Vector3(), Infinity );

    			return;

    		}

    		if ( position ) {

    			// first, find the center of the bounding sphere

    			const center = this.boundingSphere.center;

    			_box$2.setFromBufferAttribute( position );

    			// process morph attributes if present

    			if ( morphAttributesPosition ) {

    				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

    					const morphAttribute = morphAttributesPosition[ i ];
    					_boxMorphTargets.setFromBufferAttribute( morphAttribute );

    					if ( this.morphTargetsRelative ) {

    						_vector$8.addVectors( _box$2.min, _boxMorphTargets.min );
    						_box$2.expandByPoint( _vector$8 );

    						_vector$8.addVectors( _box$2.max, _boxMorphTargets.max );
    						_box$2.expandByPoint( _vector$8 );

    					} else {

    						_box$2.expandByPoint( _boxMorphTargets.min );
    						_box$2.expandByPoint( _boxMorphTargets.max );

    					}

    				}

    			}

    			_box$2.getCenter( center );

    			// second, try to find a boundingSphere with a radius smaller than the
    			// boundingSphere of the boundingBox: sqrt(3) smaller in the best case

    			let maxRadiusSq = 0;

    			for ( let i = 0, il = position.count; i < il; i ++ ) {

    				_vector$8.fromBufferAttribute( position, i );

    				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$8 ) );

    			}

    			// process morph attributes if present

    			if ( morphAttributesPosition ) {

    				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

    					const morphAttribute = morphAttributesPosition[ i ];
    					const morphTargetsRelative = this.morphTargetsRelative;

    					for ( let j = 0, jl = morphAttribute.count; j < jl; j ++ ) {

    						_vector$8.fromBufferAttribute( morphAttribute, j );

    						if ( morphTargetsRelative ) {

    							_offset.fromBufferAttribute( position, j );
    							_vector$8.add( _offset );

    						}

    						maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$8 ) );

    					}

    				}

    			}

    			this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

    			if ( isNaN( this.boundingSphere.radius ) ) {

    				console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this );

    			}

    		}

    	}

    	computeTangents() {

    		const index = this.index;
    		const attributes = this.attributes;

    		// based on http://www.terathon.com/code/tangent.html
    		// (per vertex tangents)

    		if ( index === null ||
    			 attributes.position === undefined ||
    			 attributes.normal === undefined ||
    			 attributes.uv === undefined ) {

    			console.error( 'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)' );
    			return;

    		}

    		const indices = index.array;
    		const positions = attributes.position.array;
    		const normals = attributes.normal.array;
    		const uvs = attributes.uv.array;

    		const nVertices = positions.length / 3;

    		if ( this.hasAttribute( 'tangent' ) === false ) {

    			this.setAttribute( 'tangent', new BufferAttribute( new Float32Array( 4 * nVertices ), 4 ) );

    		}

    		const tangents = this.getAttribute( 'tangent' ).array;

    		const tan1 = [], tan2 = [];

    		for ( let i = 0; i < nVertices; i ++ ) {

    			tan1[ i ] = new Vector3();
    			tan2[ i ] = new Vector3();

    		}

    		const vA = new Vector3(),
    			vB = new Vector3(),
    			vC = new Vector3(),

    			uvA = new Vector2(),
    			uvB = new Vector2(),
    			uvC = new Vector2(),

    			sdir = new Vector3(),
    			tdir = new Vector3();

    		function handleTriangle( a, b, c ) {

    			vA.fromArray( positions, a * 3 );
    			vB.fromArray( positions, b * 3 );
    			vC.fromArray( positions, c * 3 );

    			uvA.fromArray( uvs, a * 2 );
    			uvB.fromArray( uvs, b * 2 );
    			uvC.fromArray( uvs, c * 2 );

    			vB.sub( vA );
    			vC.sub( vA );

    			uvB.sub( uvA );
    			uvC.sub( uvA );

    			const r = 1.0 / ( uvB.x * uvC.y - uvC.x * uvB.y );

    			// silently ignore degenerate uv triangles having coincident or colinear vertices

    			if ( ! isFinite( r ) ) return;

    			sdir.copy( vB ).multiplyScalar( uvC.y ).addScaledVector( vC, - uvB.y ).multiplyScalar( r );
    			tdir.copy( vC ).multiplyScalar( uvB.x ).addScaledVector( vB, - uvC.x ).multiplyScalar( r );

    			tan1[ a ].add( sdir );
    			tan1[ b ].add( sdir );
    			tan1[ c ].add( sdir );

    			tan2[ a ].add( tdir );
    			tan2[ b ].add( tdir );
    			tan2[ c ].add( tdir );

    		}

    		let groups = this.groups;

    		if ( groups.length === 0 ) {

    			groups = [ {
    				start: 0,
    				count: indices.length
    			} ];

    		}

    		for ( let i = 0, il = groups.length; i < il; ++ i ) {

    			const group = groups[ i ];

    			const start = group.start;
    			const count = group.count;

    			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

    				handleTriangle(
    					indices[ j + 0 ],
    					indices[ j + 1 ],
    					indices[ j + 2 ]
    				);

    			}

    		}

    		const tmp = new Vector3(), tmp2 = new Vector3();
    		const n = new Vector3(), n2 = new Vector3();

    		function handleVertex( v ) {

    			n.fromArray( normals, v * 3 );
    			n2.copy( n );

    			const t = tan1[ v ];

    			// Gram-Schmidt orthogonalize

    			tmp.copy( t );
    			tmp.sub( n.multiplyScalar( n.dot( t ) ) ).normalize();

    			// Calculate handedness

    			tmp2.crossVectors( n2, t );
    			const test = tmp2.dot( tan2[ v ] );
    			const w = ( test < 0.0 ) ? - 1.0 : 1.0;

    			tangents[ v * 4 ] = tmp.x;
    			tangents[ v * 4 + 1 ] = tmp.y;
    			tangents[ v * 4 + 2 ] = tmp.z;
    			tangents[ v * 4 + 3 ] = w;

    		}

    		for ( let i = 0, il = groups.length; i < il; ++ i ) {

    			const group = groups[ i ];

    			const start = group.start;
    			const count = group.count;

    			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

    				handleVertex( indices[ j + 0 ] );
    				handleVertex( indices[ j + 1 ] );
    				handleVertex( indices[ j + 2 ] );

    			}

    		}

    	}

    	computeVertexNormals() {

    		const index = this.index;
    		const positionAttribute = this.getAttribute( 'position' );

    		if ( positionAttribute !== undefined ) {

    			let normalAttribute = this.getAttribute( 'normal' );

    			if ( normalAttribute === undefined ) {

    				normalAttribute = new BufferAttribute( new Float32Array( positionAttribute.count * 3 ), 3 );
    				this.setAttribute( 'normal', normalAttribute );

    			} else {

    				// reset existing normals to zero

    				for ( let i = 0, il = normalAttribute.count; i < il; i ++ ) {

    					normalAttribute.setXYZ( i, 0, 0, 0 );

    				}

    			}

    			const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
    			const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
    			const cb = new Vector3(), ab = new Vector3();

    			// indexed elements

    			if ( index ) {

    				for ( let i = 0, il = index.count; i < il; i += 3 ) {

    					const vA = index.getX( i + 0 );
    					const vB = index.getX( i + 1 );
    					const vC = index.getX( i + 2 );

    					pA.fromBufferAttribute( positionAttribute, vA );
    					pB.fromBufferAttribute( positionAttribute, vB );
    					pC.fromBufferAttribute( positionAttribute, vC );

    					cb.subVectors( pC, pB );
    					ab.subVectors( pA, pB );
    					cb.cross( ab );

    					nA.fromBufferAttribute( normalAttribute, vA );
    					nB.fromBufferAttribute( normalAttribute, vB );
    					nC.fromBufferAttribute( normalAttribute, vC );

    					nA.add( cb );
    					nB.add( cb );
    					nC.add( cb );

    					normalAttribute.setXYZ( vA, nA.x, nA.y, nA.z );
    					normalAttribute.setXYZ( vB, nB.x, nB.y, nB.z );
    					normalAttribute.setXYZ( vC, nC.x, nC.y, nC.z );

    				}

    			} else {

    				// non-indexed elements (unconnected triangle soup)

    				for ( let i = 0, il = positionAttribute.count; i < il; i += 3 ) {

    					pA.fromBufferAttribute( positionAttribute, i + 0 );
    					pB.fromBufferAttribute( positionAttribute, i + 1 );
    					pC.fromBufferAttribute( positionAttribute, i + 2 );

    					cb.subVectors( pC, pB );
    					ab.subVectors( pA, pB );
    					cb.cross( ab );

    					normalAttribute.setXYZ( i + 0, cb.x, cb.y, cb.z );
    					normalAttribute.setXYZ( i + 1, cb.x, cb.y, cb.z );
    					normalAttribute.setXYZ( i + 2, cb.x, cb.y, cb.z );

    				}

    			}

    			this.normalizeNormals();

    			normalAttribute.needsUpdate = true;

    		}

    	}

    	normalizeNormals() {

    		const normals = this.attributes.normal;

    		for ( let i = 0, il = normals.count; i < il; i ++ ) {

    			_vector$8.fromBufferAttribute( normals, i );

    			_vector$8.normalize();

    			normals.setXYZ( i, _vector$8.x, _vector$8.y, _vector$8.z );

    		}

    	}

    	toNonIndexed() {

    		function convertBufferAttribute( attribute, indices ) {

    			const array = attribute.array;
    			const itemSize = attribute.itemSize;
    			const normalized = attribute.normalized;

    			const array2 = new array.constructor( indices.length * itemSize );

    			let index = 0, index2 = 0;

    			for ( let i = 0, l = indices.length; i < l; i ++ ) {

    				if ( attribute.isInterleavedBufferAttribute ) {

    					index = indices[ i ] * attribute.data.stride + attribute.offset;

    				} else {

    					index = indices[ i ] * itemSize;

    				}

    				for ( let j = 0; j < itemSize; j ++ ) {

    					array2[ index2 ++ ] = array[ index ++ ];

    				}

    			}

    			return new BufferAttribute( array2, itemSize, normalized );

    		}

    		//

    		if ( this.index === null ) {

    			console.warn( 'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.' );
    			return this;

    		}

    		const geometry2 = new BufferGeometry();

    		const indices = this.index.array;
    		const attributes = this.attributes;

    		// attributes

    		for ( const name in attributes ) {

    			const attribute = attributes[ name ];

    			const newAttribute = convertBufferAttribute( attribute, indices );

    			geometry2.setAttribute( name, newAttribute );

    		}

    		// morph attributes

    		const morphAttributes = this.morphAttributes;

    		for ( const name in morphAttributes ) {

    			const morphArray = [];
    			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

    			for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

    				const attribute = morphAttribute[ i ];

    				const newAttribute = convertBufferAttribute( attribute, indices );

    				morphArray.push( newAttribute );

    			}

    			geometry2.morphAttributes[ name ] = morphArray;

    		}

    		geometry2.morphTargetsRelative = this.morphTargetsRelative;

    		// groups

    		const groups = this.groups;

    		for ( let i = 0, l = groups.length; i < l; i ++ ) {

    			const group = groups[ i ];
    			geometry2.addGroup( group.start, group.count, group.materialIndex );

    		}

    		return geometry2;

    	}

    	toJSON() {

    		const data = {
    			metadata: {
    				version: 4.6,
    				type: 'BufferGeometry',
    				generator: 'BufferGeometry.toJSON'
    			}
    		};

    		// standard BufferGeometry serialization

    		data.uuid = this.uuid;
    		data.type = this.type;
    		if ( this.name !== '' ) data.name = this.name;
    		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

    		if ( this.parameters !== undefined ) {

    			const parameters = this.parameters;

    			for ( const key in parameters ) {

    				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

    			}

    			return data;

    		}

    		// for simplicity the code assumes attributes are not shared across geometries, see #15811

    		data.data = { attributes: {} };

    		const index = this.index;

    		if ( index !== null ) {

    			data.data.index = {
    				type: index.array.constructor.name,
    				array: Array.prototype.slice.call( index.array )
    			};

    		}

    		const attributes = this.attributes;

    		for ( const key in attributes ) {

    			const attribute = attributes[ key ];

    			data.data.attributes[ key ] = attribute.toJSON( data.data );

    		}

    		const morphAttributes = {};
    		let hasMorphAttributes = false;

    		for ( const key in this.morphAttributes ) {

    			const attributeArray = this.morphAttributes[ key ];

    			const array = [];

    			for ( let i = 0, il = attributeArray.length; i < il; i ++ ) {

    				const attribute = attributeArray[ i ];

    				array.push( attribute.toJSON( data.data ) );

    			}

    			if ( array.length > 0 ) {

    				morphAttributes[ key ] = array;

    				hasMorphAttributes = true;

    			}

    		}

    		if ( hasMorphAttributes ) {

    			data.data.morphAttributes = morphAttributes;
    			data.data.morphTargetsRelative = this.morphTargetsRelative;

    		}

    		const groups = this.groups;

    		if ( groups.length > 0 ) {

    			data.data.groups = JSON.parse( JSON.stringify( groups ) );

    		}

    		const boundingSphere = this.boundingSphere;

    		if ( boundingSphere !== null ) {

    			data.data.boundingSphere = {
    				center: boundingSphere.center.toArray(),
    				radius: boundingSphere.radius
    			};

    		}

    		return data;

    	}

    	clone() {

    		return new this.constructor().copy( this );

    	}

    	copy( source ) {

    		// reset

    		this.index = null;
    		this.attributes = {};
    		this.morphAttributes = {};
    		this.groups = [];
    		this.boundingBox = null;
    		this.boundingSphere = null;

    		// used for storing cloned, shared data

    		const data = {};

    		// name

    		this.name = source.name;

    		// index

    		const index = source.index;

    		if ( index !== null ) {

    			this.setIndex( index.clone( data ) );

    		}

    		// attributes

    		const attributes = source.attributes;

    		for ( const name in attributes ) {

    			const attribute = attributes[ name ];
    			this.setAttribute( name, attribute.clone( data ) );

    		}

    		// morph attributes

    		const morphAttributes = source.morphAttributes;

    		for ( const name in morphAttributes ) {

    			const array = [];
    			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

    			for ( let i = 0, l = morphAttribute.length; i < l; i ++ ) {

    				array.push( morphAttribute[ i ].clone( data ) );

    			}

    			this.morphAttributes[ name ] = array;

    		}

    		this.morphTargetsRelative = source.morphTargetsRelative;

    		// groups

    		const groups = source.groups;

    		for ( let i = 0, l = groups.length; i < l; i ++ ) {

    			const group = groups[ i ];
    			this.addGroup( group.start, group.count, group.materialIndex );

    		}

    		// bounding box

    		const boundingBox = source.boundingBox;

    		if ( boundingBox !== null ) {

    			this.boundingBox = boundingBox.clone();

    		}

    		// bounding sphere

    		const boundingSphere = source.boundingSphere;

    		if ( boundingSphere !== null ) {

    			this.boundingSphere = boundingSphere.clone();

    		}

    		// draw range

    		this.drawRange.start = source.drawRange.start;
    		this.drawRange.count = source.drawRange.count;

    		// user data

    		this.userData = source.userData;

    		return this;

    	}

    	dispose() {

    		this.dispatchEvent( { type: 'dispose' } );

    	}

    }

    const _inverseMatrix$3 = /*@__PURE__*/ new Matrix4();
    const _ray$3 = /*@__PURE__*/ new Ray();
    const _sphere$6 = /*@__PURE__*/ new Sphere();
    const _sphereHitAt = /*@__PURE__*/ new Vector3();

    const _vA$1 = /*@__PURE__*/ new Vector3();
    const _vB$1 = /*@__PURE__*/ new Vector3();
    const _vC$1 = /*@__PURE__*/ new Vector3();

    const _tempA = /*@__PURE__*/ new Vector3();
    const _morphA = /*@__PURE__*/ new Vector3();

    const _uvA$1 = /*@__PURE__*/ new Vector2();
    const _uvB$1 = /*@__PURE__*/ new Vector2();
    const _uvC$1 = /*@__PURE__*/ new Vector2();

    const _normalA = /*@__PURE__*/ new Vector3();
    const _normalB = /*@__PURE__*/ new Vector3();
    const _normalC = /*@__PURE__*/ new Vector3();

    const _intersectionPoint = /*@__PURE__*/ new Vector3();
    const _intersectionPointWorld = /*@__PURE__*/ new Vector3();

    class Mesh extends Object3D {

    	constructor( geometry = new BufferGeometry(), material = new MeshBasicMaterial() ) {

    		super();

    		this.isMesh = true;

    		this.type = 'Mesh';

    		this.geometry = geometry;
    		this.material = material;

    		this.updateMorphTargets();

    	}

    	copy( source, recursive ) {

    		super.copy( source, recursive );

    		if ( source.morphTargetInfluences !== undefined ) {

    			this.morphTargetInfluences = source.morphTargetInfluences.slice();

    		}

    		if ( source.morphTargetDictionary !== undefined ) {

    			this.morphTargetDictionary = Object.assign( {}, source.morphTargetDictionary );

    		}

    		this.material = Array.isArray( source.material ) ? source.material.slice() : source.material;
    		this.geometry = source.geometry;

    		return this;

    	}

    	updateMorphTargets() {

    		const geometry = this.geometry;

    		const morphAttributes = geometry.morphAttributes;
    		const keys = Object.keys( morphAttributes );

    		if ( keys.length > 0 ) {

    			const morphAttribute = morphAttributes[ keys[ 0 ] ];

    			if ( morphAttribute !== undefined ) {

    				this.morphTargetInfluences = [];
    				this.morphTargetDictionary = {};

    				for ( let m = 0, ml = morphAttribute.length; m < ml; m ++ ) {

    					const name = morphAttribute[ m ].name || String( m );

    					this.morphTargetInfluences.push( 0 );
    					this.morphTargetDictionary[ name ] = m;

    				}

    			}

    		}

    	}

    	getVertexPosition( index, target ) {

    		const geometry = this.geometry;
    		const position = geometry.attributes.position;
    		const morphPosition = geometry.morphAttributes.position;
    		const morphTargetsRelative = geometry.morphTargetsRelative;

    		target.fromBufferAttribute( position, index );

    		const morphInfluences = this.morphTargetInfluences;

    		if ( morphPosition && morphInfluences ) {

    			_morphA.set( 0, 0, 0 );

    			for ( let i = 0, il = morphPosition.length; i < il; i ++ ) {

    				const influence = morphInfluences[ i ];
    				const morphAttribute = morphPosition[ i ];

    				if ( influence === 0 ) continue;

    				_tempA.fromBufferAttribute( morphAttribute, index );

    				if ( morphTargetsRelative ) {

    					_morphA.addScaledVector( _tempA, influence );

    				} else {

    					_morphA.addScaledVector( _tempA.sub( target ), influence );

    				}

    			}

    			target.add( _morphA );

    		}

    		return target;

    	}

    	raycast( raycaster, intersects ) {

    		const geometry = this.geometry;
    		const material = this.material;
    		const matrixWorld = this.matrixWorld;

    		if ( material === undefined ) return;

    		// test with bounding sphere in world space

    		if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

    		_sphere$6.copy( geometry.boundingSphere );
    		_sphere$6.applyMatrix4( matrixWorld );

    		// check distance from ray origin to bounding sphere

    		_ray$3.copy( raycaster.ray ).recast( raycaster.near );

    		if ( _sphere$6.containsPoint( _ray$3.origin ) === false ) {

    			if ( _ray$3.intersectSphere( _sphere$6, _sphereHitAt ) === null ) return;

    			if ( _ray$3.origin.distanceToSquared( _sphereHitAt ) > ( raycaster.far - raycaster.near ) ** 2 ) return;

    		}

    		// convert ray to local space of mesh

    		_inverseMatrix$3.copy( matrixWorld ).invert();
    		_ray$3.copy( raycaster.ray ).applyMatrix4( _inverseMatrix$3 );

    		// test with bounding box in local space

    		if ( geometry.boundingBox !== null ) {

    			if ( _ray$3.intersectsBox( geometry.boundingBox ) === false ) return;

    		}

    		// test for intersections with geometry

    		this._computeIntersections( raycaster, intersects, _ray$3 );

    	}

    	_computeIntersections( raycaster, intersects, rayLocalSpace ) {

    		let intersection;

    		const geometry = this.geometry;
    		const material = this.material;

    		const index = geometry.index;
    		const position = geometry.attributes.position;
    		const uv = geometry.attributes.uv;
    		const uv1 = geometry.attributes.uv1;
    		const normal = geometry.attributes.normal;
    		const groups = geometry.groups;
    		const drawRange = geometry.drawRange;

    		if ( index !== null ) {

    			// indexed buffer geometry

    			if ( Array.isArray( material ) ) {

    				for ( let i = 0, il = groups.length; i < il; i ++ ) {

    					const group = groups[ i ];
    					const groupMaterial = material[ group.materialIndex ];

    					const start = Math.max( group.start, drawRange.start );
    					const end = Math.min( index.count, Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) ) );

    					for ( let j = start, jl = end; j < jl; j += 3 ) {

    						const a = index.getX( j );
    						const b = index.getX( j + 1 );
    						const c = index.getX( j + 2 );

    						intersection = checkGeometryIntersection( this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

    						if ( intersection ) {

    							intersection.faceIndex = Math.floor( j / 3 ); // triangle number in indexed buffer semantics
    							intersection.face.materialIndex = group.materialIndex;
    							intersects.push( intersection );

    						}

    					}

    				}

    			} else {

    				const start = Math.max( 0, drawRange.start );
    				const end = Math.min( index.count, ( drawRange.start + drawRange.count ) );

    				for ( let i = start, il = end; i < il; i += 3 ) {

    					const a = index.getX( i );
    					const b = index.getX( i + 1 );
    					const c = index.getX( i + 2 );

    					intersection = checkGeometryIntersection( this, material, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

    					if ( intersection ) {

    						intersection.faceIndex = Math.floor( i / 3 ); // triangle number in indexed buffer semantics
    						intersects.push( intersection );

    					}

    				}

    			}

    		} else if ( position !== undefined ) {

    			// non-indexed buffer geometry

    			if ( Array.isArray( material ) ) {

    				for ( let i = 0, il = groups.length; i < il; i ++ ) {

    					const group = groups[ i ];
    					const groupMaterial = material[ group.materialIndex ];

    					const start = Math.max( group.start, drawRange.start );
    					const end = Math.min( position.count, Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) ) );

    					for ( let j = start, jl = end; j < jl; j += 3 ) {

    						const a = j;
    						const b = j + 1;
    						const c = j + 2;

    						intersection = checkGeometryIntersection( this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

    						if ( intersection ) {

    							intersection.faceIndex = Math.floor( j / 3 ); // triangle number in non-indexed buffer semantics
    							intersection.face.materialIndex = group.materialIndex;
    							intersects.push( intersection );

    						}

    					}

    				}

    			} else {

    				const start = Math.max( 0, drawRange.start );
    				const end = Math.min( position.count, ( drawRange.start + drawRange.count ) );

    				for ( let i = start, il = end; i < il; i += 3 ) {

    					const a = i;
    					const b = i + 1;
    					const c = i + 2;

    					intersection = checkGeometryIntersection( this, material, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

    					if ( intersection ) {

    						intersection.faceIndex = Math.floor( i / 3 ); // triangle number in non-indexed buffer semantics
    						intersects.push( intersection );

    					}

    				}

    			}

    		}

    	}

    }

    function checkIntersection( object, material, raycaster, ray, pA, pB, pC, point ) {

    	let intersect;

    	if ( material.side === BackSide ) {

    		intersect = ray.intersectTriangle( pC, pB, pA, true, point );

    	} else {

    		intersect = ray.intersectTriangle( pA, pB, pC, ( material.side === FrontSide ), point );

    	}

    	if ( intersect === null ) return null;

    	_intersectionPointWorld.copy( point );
    	_intersectionPointWorld.applyMatrix4( object.matrixWorld );

    	const distance = raycaster.ray.origin.distanceTo( _intersectionPointWorld );

    	if ( distance < raycaster.near || distance > raycaster.far ) return null;

    	return {
    		distance: distance,
    		point: _intersectionPointWorld.clone(),
    		object: object
    	};

    }

    function checkGeometryIntersection( object, material, raycaster, ray, uv, uv1, normal, a, b, c ) {

    	object.getVertexPosition( a, _vA$1 );
    	object.getVertexPosition( b, _vB$1 );
    	object.getVertexPosition( c, _vC$1 );

    	const intersection = checkIntersection( object, material, raycaster, ray, _vA$1, _vB$1, _vC$1, _intersectionPoint );

    	if ( intersection ) {

    		if ( uv ) {

    			_uvA$1.fromBufferAttribute( uv, a );
    			_uvB$1.fromBufferAttribute( uv, b );
    			_uvC$1.fromBufferAttribute( uv, c );

    			intersection.uv = Triangle.getInterpolation( _intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2() );

    		}

    		if ( uv1 ) {

    			_uvA$1.fromBufferAttribute( uv1, a );
    			_uvB$1.fromBufferAttribute( uv1, b );
    			_uvC$1.fromBufferAttribute( uv1, c );

    			intersection.uv1 = Triangle.getInterpolation( _intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2() );
    			intersection.uv2 = intersection.uv1; // @deprecated, r152

    		}

    		if ( normal ) {

    			_normalA.fromBufferAttribute( normal, a );
    			_normalB.fromBufferAttribute( normal, b );
    			_normalC.fromBufferAttribute( normal, c );

    			intersection.normal = Triangle.getInterpolation( _intersectionPoint, _vA$1, _vB$1, _vC$1, _normalA, _normalB, _normalC, new Vector3() );

    			if ( intersection.normal.dot( ray.direction ) > 0 ) {

    				intersection.normal.multiplyScalar( - 1 );

    			}

    		}

    		const face = {
    			a: a,
    			b: b,
    			c: c,
    			normal: new Vector3(),
    			materialIndex: 0
    		};

    		Triangle.getNormal( _vA$1, _vB$1, _vC$1, face.normal );

    		intersection.face = face;

    	}

    	return intersection;

    }

    class DepthTexture extends Texture {

    	constructor( width, height, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, format ) {

    		format = format !== undefined ? format : DepthFormat;

    		if ( format !== DepthFormat && format !== DepthStencilFormat ) {

    			throw new Error( 'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat' );

    		}

    		if ( type === undefined && format === DepthFormat ) type = UnsignedIntType;
    		if ( type === undefined && format === DepthStencilFormat ) type = UnsignedInt248Type;

    		super( null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

    		this.isDepthTexture = true;

    		this.image = { width: width, height: height };

    		this.magFilter = magFilter !== undefined ? magFilter : NearestFilter;
    		this.minFilter = minFilter !== undefined ? minFilter : NearestFilter;

    		this.flipY = false;
    		this.generateMipmaps = false;

    		this.compareFunction = null;

    	}


    	copy( source ) {

    		super.copy( source );

    		this.compareFunction = source.compareFunction;

    		return this;

    	}

    	toJSON( meta ) {

    		const data = super.toJSON( meta );

    		if ( this.compareFunction !== null ) data.compareFunction = this.compareFunction;

    		return data;

    	}

    }

    const emptyShadowTexture = /*@__PURE__*/ new DepthTexture( 1, 1 );
    emptyShadowTexture.compareFunction = LessEqualCompare;

    class Group extends Object3D {

    	constructor() {

    		super();

    		this.isGroup = true;

    		this.type = 'Group';

    	}

    }

    if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {

    	__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'register', { detail: {
    		revision: REVISION,
    	} } ) );

    }

    if ( typeof window !== 'undefined' ) {

    	if ( window.__THREE__ ) {

    		console.warn( 'WARNING: Multiple instances of Three.js being imported.' );

    	} else {

    		window.__THREE__ = REVISION;

    	}

    }

    function createMultiMaterialObject( geometry, materials ) {

    	const group = new Group();

    	for ( let i = 0, l = materials.length; i < l; i ++ ) {

    		group.add( new Mesh( geometry, materials[ i ] ) );

    	}

    	return group;

    }

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
     * *Must* specify "mapFile", a FileParser.
     * @param  {Object} context      Shared value object between renderers.
     * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
     */
    class TerrainRenderer extends DataRenderer {
        static rendererName = "TerrainRenderer";
        mapFile;
        mapRect;
        constructor(localReader, settings, context, logger) {
            super(localReader, settings, context, logger, "TerrainRenderer");
            this.mapFile = this.settings.mapFile;
        }
        drawWater(rect) {
            /// Add Water
            const material = new THREE.MeshBasicMaterial({
                color: 0x5bb1e8,
                wireframe: false,
                opacity: 0.35,
            });
            material.transparent = true;
            return renderRect(rect, 0, material);
        }
        parseNumChunks(terrainData) {
            terrainData.numChunksD_1 = Math.sqrt((terrainData.dims[0] * terrainData.chunkArray.length) / terrainData.dims[1]);
            terrainData.numChunksD_2 = terrainData.chunkArray.length / terrainData.numChunksD_1;
        }
        loadPagedImageCallback(callback, inflatedBuffer) {
            const self = this;
            // Prep output array
            self.getOutput().terrainTiles = [];
            const pimgFile = new t3dParser.FileParser(inflatedBuffer);
            const pimgTableDataChunk = pimgFile.getChunk("pgtb");
            const pimgData = pimgTableDataChunk && pimgTableDataChunk.data;
            this.mapRect = null;
            /// Fetch chunks
            const terrainData = this.mapFile.getChunk("trn").data;
            const parameterData = this.mapFile.getChunk("parm").data;
            /// Read settings
            const maxAnisotropy = this.settings.anisotropy ? this.settings.anisotropy : 1;
            //let chunks = [];
            const chunkW = 35;
            /// Calculate numChunksD_1 and _2
            this.parseNumChunks(terrainData);
            const xChunks = terrainData.numChunksD_1;
            const yChunks = terrainData.numChunksD_2;
            const allMaterials = terrainData.materials.materials;
            const allTextures = terrainData.materials.texFileArray;
            // Total map dx and dy
            /*
            old parameter data definition:
            "x1", "float32",
            "y1", "float32",
            "x2", "float32",
            "y2", "float32"
            */
            // var dx = parameterData.rect.x2 - parameterData.rect.x1;
            // var dy = parameterData.rect.y2 - parameterData.rect.y1;
            const dx = parameterData.rect[2] - parameterData.rect[0];
            const dy = parameterData.rect[3] - parameterData.rect[1];
            // Each chunk dx and dy
            const cdx = (dx / terrainData.numChunksD_1) * 1; //  35/33;
            const cdy = (dy / terrainData.numChunksD_2) * 1; // 35/33;
            let n = 0;
            const customMaterial = new THREE.MeshLambertMaterial({
                side: THREE.DoubleSide,
                color: 0x666666,
                flatShading: true,
            });
            //let texMats = {};
            /// Load textures from PIMG and inject as material maps (textures)
            const chunkTextures = {};
            /// Load textures
            if (pimgData) {
                const strippedPages = pimgData.strippedPages;
                /// Only use layer 0
                strippedPages.forEach(function (page) {
                    /// Only load layer 0 and 1
                    if (page.layer <= 1) {
                        const filename = page.filename;
                        //let color = page.solidColor;
                        const coord = page.coord;
                        let matName = coord[0] + "," + coord[1];
                        if (page.layer === 1)
                            matName += "-2";
                        /// Add texture to list, note that coord name is used, not actual file name
                        if (!chunkTextures[matName]) {
                            /// Load local texture, here we use file name!
                            const chunkTex = loadLocalTexture(self.localReader, filename);
                            if (chunkTex) {
                                /// Set repeat, antistropy and repeat Y
                                chunkTex.anisotropy = maxAnisotropy;
                                chunkTex.wrapS = THREE.RepeatWrapping;
                                chunkTex.wrapT = THREE.RepeatWrapping;
                            }
                            /// ...But store in coord name
                            chunkTextures[matName] = chunkTex;
                        }
                    }
                }); /// end for each stripped page in pimgData
            }
            /// Render Each chunk
            /// We'll make this async in order for the screen to be able to update
            const renderChunk = function (cx, cy) {
                const chunkIndex = cy * xChunks + cx;
                const pageX = Math.floor(cx / 4);
                const pageY = Math.floor(cy / 4);
                // TODO: Terrain texture LOD ?
                const chunkTextureIndices = allMaterials[chunkIndex].loResMaterial.texIndexArray;
                // let matFileName = allMaterials[chunkIndex].loResMaterial.materialFile;
                // let chunkTextureIndices = allMaterials[chunkIndex].hiResMaterial.texIndexArray;
                // let matFileName = allMaterials[chunkIndex].hiResMaterial.materialFile;
                // let chunkData = terrainData.chunkArray[chunkIndex];
                // let mainTex = allTextures[chunkTextureIndices[0]];
                let mat = customMaterial;
                /// TODO: just tick invert y = false...?
                const pageOffetX = (cx % 4) / 4.0;
                const pageOffetY = 0.75 - (cy % 4) / 4.0;
                // offset 0 -> 0.75
                // Make sure we have shared textures
                /// Load and store all tiled textures
                const fileNames = [];
                for (let gi = 0; gi < chunkTextureIndices.length / 2; gi++) {
                    const textureFileName = allTextures[chunkTextureIndices[gi]].filename;
                    fileNames.push(textureFileName);
                    /// If the texture is not already loaded, read it from the .dat!
                    if (!chunkTextures[textureFileName]) {
                        /// Load local texture
                        const chunkTex = loadLocalTexture(self.localReader, textureFileName);
                        if (chunkTex) {
                            /// Set repeat, antistropy and repeat Y
                            chunkTex.anisotropy = maxAnisotropy;
                            chunkTex.wrapS = THREE.RepeatWrapping;
                            chunkTex.wrapT = THREE.RepeatWrapping;
                        }
                        chunkTextures[textureFileName] = chunkTex;
                    }
                } /// End for each chunkTextureIndices
                /// Create Composite texture material, refering the shared textures
                const pageTexName = pageX + "," + pageY;
                const pageTexName2 = pageX + "," + pageY + "-2";
                /// Get haze color from environment rednerer
                const envOutput = self.getOutput(T3D.EnvironmentRenderer);
                if (envOutput.hazeColor) {
                    envOutput.hazeColor[2] / 255.0;
                    envOutput.hazeColor[1] / 255.0;
                    envOutput.hazeColor[0] / 255.0;
                }
                const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib["lights"]]);
                /// TODO: READ FROM VO, don't default to hard coded scale
                uniforms.uvScale = { value: new THREE.Vector2(8.0, 8.0) };
                uniforms.offset = {
                    value: new THREE.Vector2(pageOffetX, pageOffetY),
                };
                uniforms.texturePicker = {
                    value: chunkTextures[pageTexName],
                };
                uniforms.texturePicker2 = {
                    value: chunkTextures[pageTexName2],
                };
                uniforms.texture1 = { value: chunkTextures[fileNames[0]] };
                uniforms.texture2 = { value: chunkTextures[fileNames[1]] };
                uniforms.texture3 = { value: chunkTextures[fileNames[2]] };
                uniforms.texture4 = { value: chunkTextures[fileNames[3]] };
                if (self.settings && self.settings.export) {
                    mat = new THREE.MeshBasicMaterial({ visible: true });
                }
                else {
                    mat = new THREE.ShaderMaterial({
                        uniforms: uniforms,
                        fragmentShader: getFragmentShader(),
                        vertexShader: getVertexShader(),
                    });
                }
                /// -1 for faces -> vertices , -2 for ignoring outer faces
                const chunkGeo = new THREE.PlaneGeometry(cdx, cdy, chunkW - 3, chunkW - 3);
                let cn = 0;
                /// Render chunk
                /// Each chunk vertex
                for (let y = 0; y < chunkW; y++) {
                    for (let x = 0; x < chunkW; x++) {
                        if (x !== 0 && x !== chunkW - 1 && y !== 0 && y !== chunkW - 1) {
                            //@ts-ignore
                            chunkGeo.getAttribute("position").array[cn * 3 + 2] = terrainData.heightMapArray[n];
                            cn++;
                        }
                        n++;
                    }
                } // End each chunk vertex
                /// Flip the plane to fit wonky THREE js world axes
                const mS = new THREE.Matrix4().identity();
                mS.elements[5] = -1;
                chunkGeo.applyMatrix4(mS);
                /// Compute normals for lighting
                chunkGeo.computeVertexNormals();
                /// Build chunk mesh!
                let chunk;
                chunk = new THREE.Mesh(chunkGeo, customMaterial);
                if (Array.isArray(mat)) {
                    chunk = createMultiMaterialObject(chunkGeo, mat);
                }
                else {
                    chunk = new THREE.Mesh(chunkGeo, mat);
                }
                /// Move and rotate Mesh to fit in place
                chunk.rotation.set(Math.PI / 2, 0, 0);
                /// Last term is the new one: -cdx*(2/35)
                const globalOffsetX = parameterData.rect[0] + cdx / 2;
                const chunkOffsetX = cx * cdx;
                chunk.position.x = globalOffsetX + chunkOffsetX;
                /// Adjust for odd / even number of chunks
                if (terrainData.numChunksD_2 % 2 === 0) {
                    /// Last term is the new one: -cdx*(2/35)
                    const globalOffsetY = parameterData.rect[1] + cdy / 2 - 0; // -cdy*(1/35);
                    const chunkOffsetY = cy * cdy * 1; // 33/35;
                    chunk.position.z = chunkOffsetY + globalOffsetY;
                }
                else {
                    const globalOffsetY = parameterData.rect[1] - cdy / 2 + 0; // cdy*(1/35);
                    const chunkOffsetY = cy * cdy * 1; // 33/35;
                    chunk.position.z = globalOffsetY + chunkOffsetY;
                }
                const px = chunk.position.x;
                const py = chunk.position.z;
                if (!self.mapRect) {
                    self.mapRect = {
                        x1: px - cdx / 2,
                        x2: px + cdx / 2,
                        y1: py - cdy / 2,
                        y2: py + cdy / 2,
                    };
                }
                self.mapRect.x1 = Math.min(self.mapRect.x1, px - cdx / 2);
                self.mapRect.x2 = Math.max(self.mapRect.x2, px + cdx / 2);
                self.mapRect.y1 = Math.min(self.mapRect.y1, py - cdy / 2);
                self.mapRect.y2 = Math.max(self.mapRect.y2, py + cdy / 2);
                chunk.updateMatrix();
                chunk.updateMatrixWorld();
                /// Add to list of stuff to render
                /// TODO: Perhaps use some kind of props for each entry instead?
                self.getOutput().terrainTiles.push(chunk);
            }; /// End render chunk function
            const stepChunk = function (cx, cy) {
                if (cx >= xChunks) {
                    cx = 0;
                    cy++;
                }
                if (cy >= yChunks) {
                    /// Draw water surface using map bounds
                    self.getOutput().water = self.drawWater(self.mapRect);
                    /// Set bounds in output VO
                    self.getOutput().bounds = self.mapRect;
                    /// Fire call back, we're done rendering.
                    callback();
                    return;
                }
                const pct = Math.floor((100 * (cy * xChunks + cx)) / (xChunks * yChunks));
                self.logger.log(T3D.Logger.TYPE_PROGRESS, "Loading Terrain", pct);
                renderChunk(cx, cy);
                setTimeout(stepChunk, 1, cx + 1, cy);
            };
            stepChunk(0, 0);
        }
        /**
         * Output fileds generated:
         *
         * - *terrainTiles* An array of THREE.Mesh objects visualizing terrain of the map.
         *
         * - *water* A THREE.Mesh object visualizing the bounds of the map.
         *
         * - *bounds* An object wiht x1, x2, y1, and y2 properties specifying the bounds of the map.
         *
         * @async
         * @param  {Function} callback Fires when renderer is finished, does not take arguments.
         */
        renderAsync(callback) {
            /// Load all paged Images, requires inflation of other pack files!
            const pagedImageId = this.mapFile.getChunk("trn").data.materials.pagedImage;
            //@ts-ignore
            this.localReader.loadFile(pagedImageId, this.loadPagedImageCallback.bind(this, callback));
        }
        /**
         * TODO: write description. Used for export feature
         *
         * @param  {Function} callback [description]
         * @return {*}            [description]
         */
        getFileIdsAsync( /* callback */) {
            const terrainChunk = this.mapFile.getChunk("trn");
            const pimgTableDataChunk = this.mapFile.getChunk("pimg");
            const fileIds = [];
            /// ------------ SPLASH TEXTURES ------------
            const pimgData = pimgTableDataChunk && pimgTableDataChunk.data;
            const strippedPages = pimgData.strippedPages;
            /// Only use layer 0
            strippedPages.forEach(function (page) {
                /// Only load layer 0 and 1
                if (page.layer <= 1 && page.filename > 0) {
                    fileIds.push(page.filename);
                }
            });
            /// ------------ END SPLASH TEXTURES ------------
            /// ------------ TILED IMAGES ------------
            const terrainData = terrainChunk.data;
            const allTextures = terrainData.materials.texFileArray;
            allTextures.forEach(function (texture) {
                if (texture.filename > 0)
                    fileIds.push(texture.filename);
            });
            /// ------------ END TILED IMAGES ------------
            return fileIds;
        }
    }

    /**
     *
     * A renderer that generates zone models for a map.
     *
     * @class ZoneRenderer
     * @constructor
     * @extends DataRenderer
     * @param  {LocalReader} localReader  The LocalReader instance to read data from.
     * @param  {Object} settings     Any settings used by this renderer.
     * *Must* specify "mapFile", a FileParser.
     * @param  {Object} context      Shared value object between renderers.
     * @param  {Logger} logger       The logging class to use for progress, warnings, errors et cetera.
     */
    class ZoneRenderer extends DataRenderer {
        static rendererName = "ZoneRenderer";
        meshCache;
        textureCache;
        mapFile;
        constructor(localReader, settings, context, logger) {
            super(localReader, settings, context, logger, "ZoneRenderer");
            this.mapFile = this.settings.mapFile;
        }
        /**
         * TODO
         *
         * @param  {*} zone               [description]
         * @param  {*} zoneDefs           [description]
         * @param  {*} mapRect            [description]
         * @param  {*} renderZoneCallback [description]
         * @return {*}                    [description]
         */
        renderZone(zone, zoneDefs, mapRect, renderZoneCallback) {
            const self = this;
            /// Get Zone Definition
            let zoneDef = null;
            zoneDefs.forEach(function (zd) {
                if (!zoneDef && zd.token === zone.defToken)
                    zoneDef = zd;
            });
            /// Create array of all models to add:
            // let models = []
            const modelGroups = this.getModelGroups(zone, zoneDef, mapRect);
            /// Create empty mesh cache
            self.meshCache = {};
            self.textureCache = {};
            /*
             * ---Keeping this out of the doc for now---
             * Steps trough each model and renders it to the scene, allowing for efficient caching.
             * @param  {Number} i - Current index within the models array
             */
            // var lastPct = -1;
            const groupKeys = Object.keys(modelGroups);
            function stepModels(i) {
                /* var pct = Math.round(100.0*i / groupKeys.length);
                if(lastPct!=pct){
                  console.log("Rendering ZONE models "+pct);
                  lastPct = pct;
                } */
                if (i >= groupKeys.length) {
                    /// Empty mesh cache
                    self.meshCache = {};
                    self.textureCache = {};
                    /// Tell caller this zone is done loading
                    renderZoneCallback();
                    return;
                }
                /// Read model at index
                /// var model = models[i];
                const key = groupKeys[i]; /// key is model filename
                const group = modelGroups[key];
                const meshGroups = [];
                /// Get model just once for this group
                const showUnmaterialed = false;
                getMeshesForFilename(key, null, self.localReader, self.meshCache, self.textureCache, showUnmaterialed, function (meshes /*, isCached*/) {
                    /// If there were meshes, add them to the scene with correct scaling rotation etc.
                    if (meshes /* && meshes.length == 3 */) {
                        /// Add one copy per model instance
                        /// TODO: add rotation!
                        /// TODO: fine tune position?
                        /// TODO: POTIMIZE!
                        group.forEach(function (model, instanceIdx) {
                            //let isCached = true;
                            //let scale = 1.0;
                            /// For each Mesh in the model
                            meshes.forEach(function (mesh, meshIdx) {
                                if (mesh.materialFlags === 525 /* || mesh.materialFlags == 520 || mesh.materialFlags == 521 */) {
                                    // console.log("Skipping lod");
                                    return;
                                }
                                const move = { x: 0, y: 0, z: 0 };
                                /// Add to big mesh
                                if (!meshGroups[meshIdx]) {
                                    const mg = mesh.geometry.clone();
                                    meshGroups[meshIdx] = {
                                        readVerts: mg.getAttribute("position").array,
                                        verts: new Float32Array(group.length * mg.getAttribute("position").array.length),
                                        readIndices: mg.getIndex().array,
                                        indices: new Uint32Array(group.length * mg.getIndex().array.length),
                                        readUVs: mg.getAttribute("uv").array,
                                        uvs: new Float32Array(group.length * mg.getAttribute("uv").array.length),
                                        readNormals: mg.getAttribute("normal").array,
                                        normals: new Float32Array(group.length * mg.getAttribute("normal").array.length),
                                        material: mesh.material,
                                        // material:new THREE.MeshBasicMaterial( {color: 0xffcccc, wireframe:true} ),
                                        /* material : new THREE.PointCloudMaterial ({
                                            color: 0xFF0000,
                                            size: 20
                                          }), */
                                        position: { x: model.x, y: model.y, z: model.z },
                                    };
                                }
                                else {
                                    /// Translate
                                    move.x = model.x - meshGroups[meshIdx].position.x;
                                    move.y = model.z - meshGroups[meshIdx].position.z;
                                    move.z = model.y - meshGroups[meshIdx].position.y;
                                }
                                /// Add geom verts
                                const readVerts = meshGroups[meshIdx].readVerts;
                                const writeVerts = meshGroups[meshIdx].verts;
                                const stride = readVerts.length;
                                for (let i = 0, j = instanceIdx * stride; i < stride; i += 3, j += 3) {
                                    writeVerts[j + 0] = readVerts[i + 0] + move.x;
                                    writeVerts[j + 1] = readVerts[i + 1] + move.y;
                                    writeVerts[j + 2] = readVerts[i + 2] + move.z;
                                }
                                const readIndices = meshGroups[meshIdx].readIndices;
                                const writeIndices = meshGroups[meshIdx].indices;
                                const strideIndices = readIndices.length;
                                const shift = (stride * instanceIdx) / 3;
                                for (let i = 0, j = instanceIdx * strideIndices; i < strideIndices; i++, j++) {
                                    writeIndices[j] = readIndices[i] + shift;
                                }
                                const readUVs = meshGroups[meshIdx].readUVs;
                                const writeUvs = meshGroups[meshIdx].uvs;
                                const uvStride = readUVs.length;
                                for (let i = 0, j = instanceIdx * uvStride; i < uvStride; i++, j++) {
                                    writeUvs[j] = readUVs[i];
                                }
                                const readNormals = meshGroups[meshIdx].readNormals;
                                const writeNormals = meshGroups[meshIdx].normals;
                                const normalStride = readNormals.length;
                                for (let i = 0, j = instanceIdx * normalStride; i < normalStride; i++, j++) {
                                    writeNormals[j] = readNormals[i];
                                }
                            });
                        }); // End for each model in group
                    } /// End if meshes
                    /// Add each cluster of merged meshes to scene
                    meshGroups.forEach(function (meshGroup) {
                        const mergedGeom = new THREE.BufferGeometry();
                        mergedGeom.setAttribute("position", new THREE.BufferAttribute(meshGroup.verts, 3));
                        // mergedGeom.setAttribute( 'index', new THREE.BufferAttribute( meshGroup.indices, 1) );
                        mergedGeom.setIndex(new THREE.BufferAttribute(meshGroup.indices, 1));
                        mergedGeom.setAttribute("normal", new THREE.BufferAttribute(meshGroup.normals, 3));
                        mergedGeom.setAttribute("uv", new THREE.BufferAttribute(meshGroup.uvs, 2));
                        //@ts-ignore
                        mergedGeom.buffersNeedUpdate = true;
                        const mesh = new THREE.Mesh(mergedGeom, meshGroup.material);
                        mesh.position.set(meshGroup.position.x, meshGroup.position.z, meshGroup.position.y);
                        self.getOutput().meshes.push(mesh);
                    }); // End for each meshgroup
                    /// Rendering is done, render next.
                    stepModels(i + 1);
                });
            } /// End function stepModels
            /// Begin stepping trough the models, rendering them.
            stepModels(0);
        }
        /**
         * TODO
         *
         * @param  {*} zone    [description]
         * @param  {*} zoneDef [description]
         * @param  {*} mapRect [description]
         * @return {*}         [description]
         */
        getModelGroups(zone, zoneDef, mapRect) {
            /// Calculate rect in global coordinates
            // let zPos = zone.zPos;
            const mapX = mapRect[0];
            const mapY = mapRect[1];
            const c = 32 + 16;
            // ["x1","uint32","y1","uint32","x2","uint32", "y2", "uint32"]
            const zoneRect = {
                x1: zone.vertRect[0] * c + mapX,
                x2: zone.vertRect[2] * c + mapX,
                y1: zone.vertRect[1] * -c - mapY,
                y2: zone.vertRect[3] * -c - mapY,
            };
            /// Zone width and depth in local corrdinates
            /* var zdx = zone.vertRect.x1-zone.vertRect.x2;
            var zdy = zone.vertRect.y1-zone.vertRect.y2; */
            /// These zones seems to overflow :/
            if (zone.encodeData.length === 0) {
                return {};
            }
            // console.log("Get mdl groups", zone);
            /// Testing: Render Zone Vert Rect
            // RenderUtils.renderRect(zoneRect, -zPos);
            const zdx = zone.vertRect[0] - zone.vertRect[2];
            // let zdy = zone.vertRect[1] - zone.vertRect[3];
            /// Zone Flags increases a linear position, used to step trough the Zone.
            let linearPos = 0;
            const modelGroups = {};
            const terrainTiles = this.getOutput(T3D.TerrainRenderer).terrainTiles;
            for (let i = 0; i < zone.flags.length; i += 2) {
                /// Step forward
                linearPos += zone.flags[i];
                /// Check if a model should be placed
                const flag = zone.flags[i + 1];
                if (flag !== 0) {
                    /// Extract flag data
                    /// Layer is written in the last 4 bytes
                    const zoneDefLayer = flag >> 4;
                    /// Get Zone Definition Layer
                    const layer = zoneDef.layerDefArray[zoneDefLayer - 1];
                    /// TESTING Only show layers with height >= 3
                    if (layer /* && layer.height >= 0 */) {
                        /// Get X and Y from linear position
                        const modelX = (linearPos % zdx) * c + zoneRect.x1;
                        const modelY = Math.floor(linearPos / zdx) * c + zoneRect.y1;
                        /// Get Z from intersection with terrain
                        let modelZ = null;
                        const startZ = 100000;
                        const raycaster = new THREE.Raycaster(new THREE.Vector3(modelX, startZ, modelY), new THREE.Vector3(0, -1, 0));
                        /// TODO: OPT?
                        terrainTiles.forEach(function (chunk) {
                            if (modelZ === null) {
                                const intersections = raycaster.intersectObject(chunk);
                                if (intersections.length > 0) {
                                    modelZ = startZ - intersections[0].distance;
                                }
                            }
                        });
                        /// Get model id
                        /// TODO: check with modelIdx = flag & 0xf;
                        const modelIdx = 0;
                        const model = layer.modelArray[modelIdx];
                        const modelFilename = model.filename;
                        // let zOffsets = model.zOffsets;
                        // let layerFlags = layer.layerFlags; // NOrmaly 128, 128
                        // TODO: flip z,y?
                        const rotRangeX = layer.rotRangeX; // max min
                        const rotRangeY = layer.rotRangeY; // max min
                        const rotRangeZ = layer.rotRangeZ; // max min
                        const scaleRange = layer.scaleRange; // max min
                        const fadeRange = layer.fadeRange; // max min
                        // Unused
                        // tiling: 3
                        // type: 1
                        // width: 2
                        // radiusGround: 2
                        /// Create modelGroup (this zone only)
                        if (!modelGroups[modelFilename]) {
                            modelGroups[modelFilename] = [];
                        }
                        /// Add entry to model group
                        modelGroups[modelFilename].push({
                            x: modelX,
                            y: modelY,
                            z: modelZ,
                            rotRangeX: rotRangeX,
                            rotRangeY: rotRangeY,
                            rotRangeZ: rotRangeZ,
                            scaleRange: scaleRange,
                            fadeRange: fadeRange,
                        });
                    } /// End if layer
                } /// End if flag != 0
            } /// End for each flag
            return modelGroups;
        }
        /**
         * Renders all zone meshes in a GW2 map described by the map's "zon2" chunk.
         * Output fileds generated:
         *
         * - *meshes* An array of THREE.Mesh objects visualizing all zone models refered by this map.
         *
         * @async
         * @param  {Function} callback Fires when renderer is finished, does not take arguments.
         */
        renderAsync(callback) {
            const self = this;
            /// Set up output array
            self.getOutput().meshes = [];
            const zoneChunkData = this.mapFile.getChunk("zon2").data;
            const parameterChunkData = this.mapFile.getChunk("parm").data;
            // let terrainChunkData = this.mapFile.getChunk("trn").data;
            const mapRect = parameterChunkData.rect;
            /// Zone data
            const zones = zoneChunkData.zoneArray;
            const zoneDefs = zoneChunkData.zoneDefArray;
            /// Render each zone
            let lastPct = -1;
            /// Main render loop, render each zone
            function stepZone(i) {
                const pct = Math.round((100.0 * i) / zones.length);
                if (lastPct !== pct) {
                    self.logger.log(T3D.Logger.TYPE_PROGRESS, "Loading 3D Models (Zone)", pct);
                    lastPct = pct;
                }
                if (i >= zones.length) {
                    callback();
                    return;
                }
                /// Main zone render function call
                self.renderZone(zones[i], zoneDefs, mapRect, stepZone.bind(self, i + 1));
            }
            stepZone(0);
        }
    }
    /*
    /// NOT USED??
    // eslint-disable-next-line no-unused-vars
    function addZoneMeshesToScene(meshes, isCached, position, scale, rotation) {
      /// Called for each mesh in the zone
      /// TODO: Opt opt opt...

      meshes.forEach(function (mesh) {
        /// Create new mesh if we got back a cached original.
        if (isCached) mesh = new THREE.Mesh(mesh.geometry, mesh.material);

        /// Scale, position and rotate.
        mesh.scale.set(scale, scale, scale);
        if (rotation) {
          mesh.rotation.order = "ZXY";
          mesh.rotation.set(rotation.x, rotation.y, rotation.z);
        }
        mesh.position.set(position.x, position.y, position.z);

        /// Add to export
        this.getOutput().meshes.push(mesh);
      });
    }
    */
    /// / Not used: zone defintion per chunk data "images" 32*32 points
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

          RenderUtils.renderRect(rect, 4000,chunkMat, 4000);

          //for(var j=0; j<flags.length; j++){
          //  if(flags[j]>0){
          //    console.log("Found flag",flags[j],"@ zoneDef",zoneDef.token,"coord",coord,"index",j);
          //  }
          //}
        });

      }

    } */

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
    class StringRenderer extends DataRenderer {
        static rendererName = "StringRenderer";
        constructor(localReader, settings, context, logger) {
            super(localReader, settings, context, logger, "StringRenderer");
        }
        /**
         * Output fileds generated:
         *
         * - *strings* An array of objects. Each object has a "recid"-property specifing on what index within the file
         * a given string was found, and a "value"-property specigying the string value.
         *
         * - *language* An integer specifing the language of the loaded file.
         *
         * @async
         * @param  {Function} callback Fires when renderer is finished, does not take arguments.
         */
        renderAsync(callback) {
            const self = this;
            /// Get file id
            // const fileId = this.settings.id;
            /// Load the string file
            /// Set up output array
            this.getOutput().strings = [];
            this.localReader.loadFile(this.settings.id, function (inflatedData) {
                const dataView = new DataView(inflatedData);
                const end = dataView.byteLength - 2;
                /// skip past fcc
                let cursor = 4;
                let entryIndex = 0;
                while (end - cursor > 6) {
                    const size = dataView.getUint16(cursor, true);
                    cursor += 2;
                    const decryptionOffset = dataView.getUint16(cursor, true);
                    cursor += 2;
                    const bitsPerSymbol = dataView.getUint16(cursor, true);
                    cursor += 2;
                    const entry = { size, decryptionOffset, bitsPerSymbol };
                    entry.size -= 6;
                    if (entry.size > 0) {
                        const isEncrypted = entry.decryptionOffset !== 0 || entry.bitsPerSymbol !== 0x10;
                        /// UTF-16
                        if (!isEncrypted) {
                            const value = new Uint16Array(inflatedData, cursor, entry.size / 2);
                            cursor += entry.size;
                            self.getOutput().strings.push({ value: String.fromCharCode(...value), recid: entryIndex });
                        }
                    }
                    entryIndex++;
                }
                self.getOutput().language = dataView.getUint16(end, true);
                callback();
            });
        }
    }

    var version = "3.0.0";

    /* INCLUDES */
    /* PRIVATE VARS */
    const _settings = {
        t3dtoolsWorker: "modules/t3dtools/t3dworker.js",
        concurrentTasks: typeof navigator !== "undefined" ? navigator.hardwareConcurrency : 1,
    };
    // eslint-disable-next-line prefer-const
    T3D = {
        version: version,
        DataRenderer: DataRenderer,
        EnvironmentRenderer: EnvironmentRenderer,
        HavokRenderer: HavokRenderer,
        PropertiesRenderer: PropertiesRenderer,
        SingleModelRenderer: SingleModelRenderer,
        TerrainRenderer: TerrainRenderer,
        ZoneRenderer: ZoneRenderer,
        StringRenderer: StringRenderer,
        Logger: logger,
        MapFileList: mapMap,
        MaterialUtils: MaterialUtils,
        MathUtils: MathUtils,
        RenderUtils: RenderUtils,
        PersistantStore: PersistantStore,
        FileTypes: FileTypes,
        /**
         * Creates a new instance of LocalReader with an pNaCl inflater connected to it.
         */
        getLocalReader: function (file, callback, t3dtoolsWorker, noIndexedDB) {
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
         * from the "T3D/MapFileList" property.
         **/
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
                    if (i.name < j.name)
                        return -1;
                    if (i.name > j.name)
                        return 1;
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
            }
            else {
                localReader.getMapList().then((result) => {
                    callback(restoreOuput(result));
                });
            }
        },
        /**
         * Utility method used for rendering map files. Loads a map file and applies
         * the provided renderers to it.
         **/
        renderMapContentsAsync: function (localReader, fileName, renderers, callback, logger) {
            /// VO for storing result from renderers
            const context = {};
            let runAllRenderers;
            /// Make sure we got an actuall ID number
            if (parseInt(fileName)) {
                /// File name is baseId, load using local reader.
                localReader.loadFile(parseInt(fileName), function (arrayBuffer) {
                    /// Initiate Map file object. Connect callback
                    const mapFile = new t3dParser.FileParser(arrayBuffer);
                    /// Populate VO by running the renderers
                    runAllRenderers = function (i) {
                        /// Run each renderer
                        if (i < renderers.length) {
                            T3D.runRenderer(renderers[i].renderClass, localReader, Object.assign(renderers[i].settings, { mapFile: mapFile }), context, () => runAllRenderers(i + 1));
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
        runRenderer: function (renderClass, localReader, settings, context, cb) {
            const r = new renderClass(localReader, settings, context, undefined, renderClass.rendererName);
            r.renderAsync(cb);
        },
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
                    }
                    catch {
                        //continue
                    }
                }
                // WebGL is supported, but disabled
                return false;
            }
            // WebGL not supported
            return false;
        },
    };
    var T3D$1 = T3D;
    globalThis.T3D = T3D;
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
        if (typeof t3dParser.FileParser === "undefined") {
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

    return T3D$1;

})(T3DParser);
//# sourceMappingURL=T3D.js.map
