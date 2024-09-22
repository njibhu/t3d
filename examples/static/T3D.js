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

    const mapMap = {
        /**
         * @property maps
         * @type {Array.<{name: String, maps: Array.<{fileName: String, name: String}>}>}
         */
        maps: [
            {
                name: "Core - Ascalon [Regrown]",
                maps: [
                    { fileName: "131944.data", name: "(City) Black Citadel" },
                    { fileName: "196585.data", name: "(City) Black Citadel [MapRegrownCitadel]" },
                    { fileName: "1968107.data", name: "(City) Black Citadel" },
                    { fileName: "126118.data", name: "(1-15) Plains of Ashford" },
                    { fileName: "188591.data", name: "(1-15) Plains of Ashford [MapRegrownAshford]" },
                    { fileName: "127888.data", name: "(15-25) Diessa Plateau" },
                    { fileName: "190490.data", name: "(15-25) Diessa Plateau [MapRegrownRange]" },
                    { fileName: "283574.data", name: "(30-40) Fields of Ruin [MapRegrownHawke]" },
                    { fileName: "282668.data", name: "(40-50) Iron Marches [MapRegrownGullet]" },
                    { fileName: "280025.data", name: "(50-60) Blazeridge Steppes [MapRegrownBrand]" },
                    { fileName: "281313.data", name: "(60-70) Fireheart Rise [MapRegrownFlame]" },
                ],
            },
            {
                name: "Core - Kryta [Valley]",
                maps: [
                    { fileName: "128151.data", name: "(City) Divinity's Reach" },
                    { fileName: "191265.data", name: "(City) Divinity's Reach [MapValleyDivinity]" },
                    { fileName: "1968748.data", name: "(City) Divinity's Reach" },
                    { fileName: "129524.data", name: "(1-15) Queensdale" },
                    { fileName: "192711.data", name: "(1-15) Queensdale [MapValleyHill]" },
                    { fileName: "130970.data", name: "(15-25) Kessex Hills" },
                    { fileName: "194288.data", name: "(15-25) Kessex Hills [MapValleyWilderness]" },
                    { fileName: "861815.data", name: "(15-25) Kessex Hills [MapValleyWildernessFortSalma]" },
                    { fileName: "2737234.data", name: "(15-25) Kessex Hills [MapValleyWildernessTower]" },
                    { fileName: "289176.data", name: "(25-35) Gendarran Fields, Vigil Headquarters [MapValleySettlement]" },
                    { fileName: "191000.data", name: "(City) Lion's Arch [MapValleyArch]" },
                    { fileName: "1796999.data", name: "(City) Lion's Arch [MapValleyArchKiel]" },
                    { fileName: "1968576.data", name: "(City) Lion's Arch" },
                    { fileName: "287870.data", name: "(35-45) Harathi Hinterlands [MapValleyHeadland]" },
                    { fileName: "286945.data", name: "(45-55) Bloodtide Coast [MapValleyCoast]" },
                    { fileName: "295005.data", name: "(45-55) Chantry of Secrets [MapValleyWhisper]" },
                    { fileName: "520479.data", name: "(80) Southsun Cove, Crab Toss, Southsun Survival [MapEventValleyLost]" },
                ],
            },
            {
                name: "Core - Shiverpeak Mountains [Alpine]",
                maps: [
                    { fileName: "132434.data", name: "(City) Hoelbrak, Keg Brawl" },
                    { fileName: "197122.data", name: "(City) Hoelbrak, Keg Brawl [MapAlpineHall]" },
                    { fileName: "1966018.data", name: "(City) Hoelbrak, Keg Brawl" },
                    { fileName: "125199.data", name: "(1-15) Wayfarer Foothills" },
                    { fileName: "187611.data", name: "(1-15) Wayfarer Foothills [MapAlpineSnowline]" },
                    { fileName: "124093.data", name: "(15-25) Snowden Drifts" },
                    { fileName: "186397.data", name: "(15-25) Snowden Drifts [MapAlpinePowder]" },
                    { fileName: "277587.data", name: "(25-40) Lornar's Pass, The Durmand Priory [MapAlpineSlope]" },
                    { fileName: "275155.data", name: "(40-50) Dredgehaunt Cliffs [MapAlpineCrest]" },
                    { fileName: "278717.data", name: "(50-60) Timberline Falls [MapAlpineTimberland]" },
                    { fileName: "846866.data", name: "(50-60) Timberline Falls" },
                    { fileName: "276252.data", name: "(70-80) Frostgorge Sound [MapAlpineGlacier]" },
                    { fileName: "295282.data", name: "(HoM) Eye of the North [MapAlpineMonument]" },
                ],
            },
            {
                name: "Core - Tarnished Coast [Wetland]",
                maps: [
                    { fileName: "198272.data", name: "(City) Rata Sum [MapWetlandComplex]" },
                    { fileName: "1968896.data", name: "(City) Rata Sum" },
                    { fileName: "198076.data", name: "(City) The Grove [MapWetlandGrove]" },
                    { fileName: "1969341.data", name: "(City) The Grove" },
                    { fileName: "195149.data", name: "(1-15) Caledon Forest [MapWetlandBayou]" },
                    { fileName: "195493.data", name: "(1-15) Metrica Province [MapWetlandRiverside]" },
                    { fileName: "293307.data", name: "(15-25) Brisban Wildlands [MapWetlandGrotto]" },
                    { fileName: "292254.data", name: "(55-65) Sparkfly Fen [MapWetlandGlade]" },
                    { fileName: "291064.data", name: "(60-70) Mount Maelstrom [MapWetlandCape]" },
                ],
            },
            {
                name: "Core - Ruins of Orr [Risen]",
                maps: [
                    { fileName: "284829.data", name: "(70-75) Straits of Devastation [MapRisenBeachhead]" },
                    { fileName: "285089.data", name: "(75-80) Malchor's Leap [MapRisenCliff]" },
                    { fileName: "285634.data", name: "(80) Cursed Shore [MapRisenShore]" },
                ],
            },
            {
                name: "Core - Personal Story",
                maps: [
                    {
                        fileName: "295962.data",
                        name: "(20-60) A Vision of Darkness, A Light in the Darkness <The Grove, Cursed Shore> [MapWetlandDestiny]",
                    },
                    { fileName: "1019669.data", name: "(40-60) Old Lion's Arch [MapValleyArchOrig]" },
                    { fileName: "294938.data", name: "(60) Claw Island [MapValleyClaw]" },
                    {
                        fileName: "1018612.data",
                        name: "(70) Forging the Pact <Timberline Falls> [MapAlpineTimberlandBeforeConcordiaVines]",
                    },
                    {
                        fileName: "295179.data",
                        name: "(80) Temple of the Forgotten God <Straits of Devastation> [MapRisenBeachheadAbaddon]",
                    },
                    { fileName: "473765.data", name: "(80) Victory or Death <The Ruined City of Arah> [MapRisenDragonStory]" },
                ],
            },
            {
                name: "Core - Dungeon",
                maps: [
                    { fileName: "126840.data", name: "(30-35) Ascalonian Catacombs" },
                    { fileName: "189364.data", name: "(30-35) Ascalonian Catacombs [MapRegrownCatacomb]" },
                    { fileName: "287214.data", name: "(40-45) Caudecus's Manor <Queensdale> [MapValleyEstate]" },
                    { fileName: "291284.data", name: "(50) Twilight Arbor [MapWetlandGarden]" },
                    { fileName: "645968.data", name: "(55-80) Twilight Arbor <Twilight Arbor> [MapWetlandGardenRepeat]" },
                    { fileName: "275474.data", name: "(60-65) Sorrow's Embrace [MapAlpineFurnace]" },
                    { fileName: "284039.data", name: "(70-75) Citadel of Flame [MapRegrownShaman]" },
                    { fileName: "276520.data", name: "(76-80) Honor of the Waves [MapAlpineIceberg]" },
                    { fileName: "293606.data", name: "(78-80) Crucible of Eternity [MapWetlandWeapon]" },
                    { fileName: "473930.data", name: "(80) The Ruined City of Arah [MapRisenDragonRepeat]" },
                ],
            },
            {
                name: "(LW1) Living World Season 1: Scarlet's War - (SM) Strike Mission",
                maps: [
                    {
                        fileName: "2771534.data",
                        name: "(Lounge) Memory of Old Lion's Arch <Old Lion's Arch> [MapValleyArchProbed]",
                    },
                    { fileName: "568778.data", name: "(LW1.E1) Cragstead <Wayfarer Foothills, Diessa Plateau> [MapAlpineEnclave]" },
                    { fileName: "580061.data", name: "(LW1.E1) Molten Furnace [MapFlameFrost]" },
                    {
                        fileName: "2690992.data",
                        name: "(LW1.E2) Memorials on the Pyre, The Scene of the Crime <Old Lion's Arch> [MapValleyArchDragon]",
                    },
                    { fileName: "595722.data", name: "(LW1.E2) Aetherblade Retreat [MapValleyArchDungeon]" },
                    { fileName: "2711089.data", name: "(LW1.E3) Scarlet's Playhouse <The Crown Pavilion> [MapJubileeArena-2]" },
                    {
                        fileName: "672138.data",
                        name: "(LW1.E4) The Nightmare Unveiled <Kessex Hills> [MapValleyWildernessKraitTowerInstance]",
                    },
                    { fileName: "679089.data", name: "(LW1.E4) The Tower of Nightmares [MapValleyWildernessKraitTowerInterior]" },
                    {
                        fileName: "2469960.data",
                        name: "(LW1.E5) The Twisted Marionette <Lornar's Pass> [MapAlpineSlopeMarionette]",
                    },
                    { fileName: "2770873.data", name: "(LW1.E5) The Battle For Lion's Arch <Old Lion's Arch> [MapValleyArch2]" },
                    {
                        fileName: "2773298.data",
                        name: "(LW1.E5) North Evacuation Camp <Gendarran Fields> [MapValleySettlementFeb2014]",
                    },
                    { fileName: "814803.data", name: "(LW1.E5) Lion's Arch: Honored Guests <Old Lion's Arch> [MapValleyArch3]" },
                    { fileName: "2771205.data", name: "(SM) Old Lion's Court <The Battle For Lion's Arch> [MapValleyArch2Strike]" },
                ],
            },
            {
                name: "(LW2) Living World Season 2: Glint's Prophecy",
                maps: [
                    { fileName: "836211.data", name: "(LW2.E1, LW2.E2, LW2.E4) Dry Top [MapDryTop]" },
                    { fileName: "861770.data", name: "(LW2.E1, LW2.E2, LW2.E4) Dry Top [MapDryTopE2]" },
                    { fileName: "909361.data", name: "(LW2.E5, LW2.E6, LW2.E7, LW2.E8) The Silverwastes [MapSandCastle]" },
                    { fileName: "996202.data", name: "(LW2.E5, LW2.E6, LW2.E7, LW2.E8) The Silverwastes [MapSandcastleToFleet]" },
                    { fileName: "908730.data", name: "(LW2.E5.4) Hidden Arcana <The Durmand Priory> [MapSandGrain]" },
                    {
                        fileName: "922320.data",
                        name: "(LW2.E7.2) Meeting the Asura <Metrica Province> [MapWetlandRiversideAsuraFirstContact]",
                    },
                ],
            },
            {
                name: "(X1) Guild Wars 2: Heart of Thorns (HoT) - (Z) Zone - Maguuma Jungle [Jungle]",
                maps: [
                    { fileName: "969663.data", name: "(Z.1) Verdant Brink [MapJungleFleet]" },
                    { fileName: "1263739.data", name: "(Z.2) Auric Basin [MapJungleGold]" },
                    { fileName: "1264291.data", name: "(Z.3) Tangled Depths [MapJungleRoots]" },
                    { fileName: "1262310.data", name: "(Z.4) Dragon's Stand [MapJungleArmy]" },
                    { fileName: "1262460.data", name: "(X1.16) Hearts and Minds [MapJungleArmyNightmare]" },
                ],
            },
            {
                name: "(LW3) Living World Season 3: Glint's Legacy",
                maps: [
                    { fileName: "1472635.data", name: "(LW3.E1) Bloodstone Fen [MapJungleBloodstone]" },
                    { fileName: "1498071.data", name: "(LW3.E2.1) Taimi's Game [MapHoloRoom]" },
                    { fileName: "1498578.data", name: "(LW3.E2) Ember Bay [MapFireIsland]" },
                    { fileName: "1605211.data", name: "(LW3.E3) Bitterfrost Frontier [MapAlpineTundra]" },
                    { fileName: "1646520.data", name: "(LW3.E4) Lake Doric [MapValleyPort]" },
                    { fileName: "1645474.data", name: "(LW3.E4.6) Confessor's End <Caudecus's Manor> [MapValleyEstatePort]" },
                    { fileName: "1682493.data", name: "(LW3.E5) Draconis Mons [MapLavaLamp]" },
                    { fileName: "1682763.data", name: "(LW3.E5.5) Heart of the Volcano [MapLavaLampInstance2]" },
                    { fileName: "1734839.data", name: "(LW3.E6.1) White Mantle Hideout [MapS0E6AspectHunt]" },
                    { fileName: "1735440.data", name: "(LW3.E6.2) Shining Blade Headquarters [MapValleyBlade]" },
                    { fileName: "1735346.data", name: "(LW3.E6) Siren's Landing [MapReclaimed]" },
                ],
            },
            {
                name: "(X2) Guild Wars 2: Path of Fire (PoF) - (Z) Zone - Crystal Desert [Desert]",
                maps: [
                    { fileName: "1794574.data", name: "(Z.1) Crystal Oasis [MapDesertOasis]" },
                    { fileName: "1833034.data", name: "(Z.2) Desert Highlands [MapDesertHighlands]" },
                    {
                        fileName: "1840368.data",
                        name: "(X2.7, X2.OS) Facing the Truth: The Sanctum, The Dark Library [MapDesertSanctum]",
                    },
                    { fileName: "1840103.data", name: "(Z.3) Elon Riverlands [MapDesertRiver]" },
                    {
                        fileName: "1833726.data",
                        name: "(X2.8, X2.9) The Way Forward, The Departing <Elon Riverlands> [MapDesertMists]",
                    },
                    { fileName: "1842533.data", name: "(Z.4) The Desolation [MapDesertTorment]" },
                    { fileName: "1839188.data", name: "(Z.5) Domain of Vabbi [MapDesertPalace]" },
                ],
            },
            {
                name: "(LW4) Living World Season 4: Rise of Kralkatorrik",
                maps: [
                    {
                        fileName: "1903523.data",
                        name: "(LW4.E1.1) Eye of the Brandstorm <Crystal Oasis> [MapDesertOasisInstanceS4E1]",
                    },
                    { fileName: "1902235.data", name: "(LW4.E1) Domain of Istan [MapDesertJewel]" },
                    { fileName: "1901428.data", name: "(LW4.E1.6) Fahranur, the First City [MapDesertCity]" },
                    {
                        fileName: "1954984.data",
                        name: "(LW4.E2.1) Tracking the Scientist <Desert Highlands> [MapDesertArchipelago_Chapter1]",
                    },
                    {
                        fileName: "1955224.data",
                        name: "(LW4.E2.2) The Test Subject <Sandswept Isles> [MapDesertArchipelago_Chapter2]",
                    },
                    { fileName: "1957526.data", name: "(LW4.E2) Sandswept Isles [MapDesertArchipelagoLargeMap]" },
                    { fileName: "1955471.data", name: "(LW4.E2.5) The Charge <Sandswept Isles> [MapDesertArchipelago_Chapter5]" },
                    { fileName: "1955642.data", name: "(LW4.E2.5) ??? <Divinity's Reach> [MapDesertArchipelago_Chapter5Boss_1]" },
                    { fileName: "1955915.data", name: "(LW4.E2.5) ??? <Mount Maelstrom> [MapDesertArchipelago_Chapter5Boss_2]" },
                    { fileName: "1956140.data", name: "(LW4.E2.5) ??? <Frostgorge Sound> [MapDesertArchipelago_Chapter5Boss_3]" },
                    { fileName: "1956245.data", name: "(LW4.E2.5) ERROR: SIGNAL LOST [MapDesertArchipelago_Chapter5Boss_4]" },
                    { fileName: "2005467.data", name: "(LW4.E3.1) Seized <Crystal Oasis> [MapDesertOasisS4E3]" },
                    { fileName: "2004704.data", name: "(LW4.E3) Domain of Kourna [MapDesertMoon]" },
                    { fileName: "2044320.data", name: "(LW4.E4) Jahai Bluffs, Sun's Refuge [MapDesertBluffs]" },
                    { fileName: "2044502.data", name: "(LW4.E4.5) Storm Tracking [MapDesertBluffsCh5]" },
                    { fileName: "2093791.data", name: "(LW4.E5.1) Scion & Champion <Hidden Arcana> [MapThe_Begining]" },
                    { fileName: "2092435.data", name: "(LW4.E5) Thunderhead Peaks [MapAlpineKeep]" },
                    { fileName: "2092812.data", name: "(LW4.E5.3) The Crystal Blooms <Thunderhead Peaks> [MapAlpineKeepInstance]" },
                    {
                        fileName: "2093450.data",
                        name: "(LW4.E5.5) The Crystal Dragon <The Crystal Blooms> [MapAlpineKeepInstanceKralk]",
                    },
                    { fileName: "2124612.data", name: "(LW4.PP) Mists Rift [MapBrandedMistfight]" },
                    { fileName: "2146312.data", name: "(LW4.E6.1) The End <Thunderhead Peaks> [MapDesertDragonfallCh01]" },
                    { fileName: "2146346.data", name: "(LW4.E6.1) Dragonflight [MapDesertDragonfallCh02]" },
                    { fileName: "2146125.data", name: "(LW4.E6) Dragonfall [MapDesertDragonfall]" },
                    { fileName: "2146510.data", name: "(LW4.E6.5) Descent [MapDesertDragonfallFinalInstance]" },
                    { fileName: "2146376.data", name: "(LW4.E6.5) Epilogue [MapDesertDragonfallEpilogue]" },
                ],
            },
            {
                name: "(LW5) Living World Season 5: The Icebrood Saga (IBS) - (SM) Strike Mission, (DRM) Dragon Response Missions",
                maps: [
                    { fileName: "2203371.data", name: "(LW5.E0, SM.1) Grothmar Valley, Shiverpeaks Pass [MapRegrownBlood]" },
                    { fileName: "2251232.data", name: "(LW5.E1, LW5.E2) Bjora Marches [MapBjoraMarchesCombined]" },
                    { fileName: "2224355.data", name: "(SM.2) Voice of the Fallen and Claw of the Fallen [MapKodanBNB]" },
                    { fileName: "2224381.data", name: "(SM.3) Fraenir of Jormag [Mapshamanbnb]" },
                    { fileName: "2224406.data", name: "(SM.4) Boneskinner [MapWendigoBNB]" },
                    { fileName: "2249817.data", name: "(LW5.E2.5) Voice in the Deep [MapAlpineMarchesEp2FinalInstance]" },
                    { fileName: "2251486.data", name: "(SM.5) Whisper of Jormag [MapWhisperofJormag]" },
                    { fileName: "2251447.data", name: "(Lobby) Eye of the North <Eye of the North> [MapAlpineMonumentDragon]" },
                    { fileName: "2272807.data", name: "(LW5.VotP.1, SM.6) Forging Steel [MapAlpineClimb]" },
                    { fileName: "2273128.data", name: "(LW5.VotP.2) Darkrime Delves [MapAlpineDelves]" },
                    { fileName: "2298865.data", name: "(LW5.E3) Drizzlewood Coast [MapAlpineCascades]" },
                    { fileName: "2318029.data", name: "(LW5.E3, LW5.E4) Drizzlewood Coast [MapAlpineCascades02]" },
                    { fileName: "2299088.data", name: "(SM.7) Cold War <Drizzlewood Coast> [MapAlpineCascadesStrike]" },
                    { fileName: "2369582.data", name: "(LW5.E5.1) Primordus Rising <Rata Sum> [MapWetlandComplexE5Story]" },
                    {
                        fileName: "2370614.data",
                        name: "(LW5.E5.3, DRM.1) Metrica Province <Metrica Province> [MapWetlandRiversideS5E5]",
                    },
                    {
                        fileName: "2370017.data",
                        name: "(LW5.E5.3, DRM.2) Brisban Wildlands <Brisban Wildlands> [MapWetlandGrottoS5E5]",
                    },
                    {
                        fileName: "2369116.data",
                        name: "(LW5.E5.3, DRM.3) Gendarran Fields <Gendarran Fields> [MapValleySettlementS5E5]",
                    },
                    { fileName: "2366776.data", name: "(LW5.E5.4, DRM.4) Fields of Ruin <Fields of Ruin> [MapRegrownHawkeS5E5]" },
                    {
                        fileName: "2364032.data",
                        name: "(LW5.E5.4, DRM.5) Thunderhead Peaks <Thunderhead Peaks> [MapAlpineKeepS5E5]",
                    },
                    { fileName: "2368400.data", name: "(LW5.E5.5, DRM.6) Lake Doric <Lake Doric> [MapValleyPortS5E5]" },
                    { fileName: "2365787.data", name: "(LW5.E5.5, DRM.7) Snowden Drifts <Snowden Drifts> [MapAlpinePowderS5E5]" },
                    { fileName: "2369398.data", name: "(LW5.E5.6, DRM.8) Caledon Forest <Caledon Forest> [MapWetlandBayouS5E5]" },
                    { fileName: "2414140.data", name: "(LW5.E5.7) Wildfire <Heart of the Volcano> [MapLavaLampInstance_S5E5]" },
                    { fileName: "2367211.data", name: "(LW5.E5.8, DRM.9) Bloodtide Coast <Bloodtide Coast> [MapValleyCoastS5E5]" },
                    { fileName: "2366368.data", name: "(LW5.E5.9, DRM.10) Fireheart Rise <Fireheart Rise> [MapRegrownFlameS5E5]" },
                    { fileName: "2434582.data", name: "(LW5.E5) Dragonstorm [MapDragonFight]" },
                    { fileName: "2434675.data", name: "(LW5.E5.11) Champion's End <Dragonstorm> [MapDragonFightStoryInstance]" },
                ],
            },
            {
                name: "(X3) Guild Wars 2: End of Dragons (EoD) - (Z) Zone, (SM) Strike Mission - Cantha [Cantha]",
                maps: [
                    { fileName: "2669133.data", name: "(Lounge) Thousand Seas Pavilion [MapMTXLounge]" },
                    { fileName: "2639738.data", name: "(X3.1) Old Friends <Lornar's Pass> [MapAlpineSlopeX03]" },
                    { fileName: "2639795.data", name: "(X3.1) Aetherblade Armada [MapCanthaArmada]" },
                    { fileName: "2647516.data", name: "(Z.1) Seitung Province [MapCanthaShingJea]" },
                    { fileName: "2649141.data", name: "(SM.1) Aetherblade Hideout <Seitung Province> [MapMaiTrin]" },
                    { fileName: "2645519.data", name: "(Z.2) New Kaineng City [MapCanthaKaineng]" },
                    { fileName: "2645805.data", name: "(X3.7) Deepest Secrets: Yong Reactor [MapCanthaKainengCH5Reactor]" },
                    { fileName: "2640407.data", name: "(Lobby) Arborstone <The Echovald Wilds> [MapCanthaArborstone]" },
                    { fileName: "2641850.data", name: "(Z.3) The Echovald Wilds [MapCanthaEchovald]" },
                    {
                        fileName: "2642769.data",
                        name: "(SM.2) Xunlai Jade Junkyard <The Echovald Wilds> [MapCanthaEchovaldStrikeMissions]",
                    },
                    { fileName: "2646104.data", name: "(SM.3) Kaineng Overlook <New Kaineng City> [MapCanthaKainengMinSecStrike]" },
                    { fileName: "2644196.data", name: "(Z.4) Dragon's End [MapCanthaJadeSea]" },
                    { fileName: "2702043.data", name: "(SM.4) Harvest Temple <Dragon's End> [MapCanthaJadeSeaStrikeMission]" },
                    { fileName: "3012212.data", name: "(Z.5) Gyala Delve [MapCanthaDeep]" },
                    { fileName: "3043972.data", name: "(Z.5) Gyala Delve [MapCanthaDeepQR2]" },
                    {
                        fileName: "3100947.data",
                        name: "(X3.18) Forward <Seitung Province> [MapCanthaShingJeaExpac4AureneInstance]",
                    },
                ],
            },
            {
                name: "(X4) Guild Wars 2: Secrets of the Obscure (SotO) - (Z) Zone, (SM) Strike Mission - Skies of Tyria [Sky]",
                maps: [
                    {
                        fileName: "3134712.data",
                        name: "(X4.1) Commander without a Cause: Gendarran Fields <Gendarran Fields> [MapValleySettlementExpac4StealthMission]",
                    },
                    { fileName: "3134778.data", name: "(Z.1) Skywatch Archipelago [MapSkyRise]" },
                    {
                        fileName: "3135285.data",
                        name: "(SM.1) Cosmic Observatory <Skywatch Archipelago> [MapSkyRiseStrikeObservatory]",
                    },
                    { fileName: "3135660.data", name: "(Lobby) The Wizard's Tower [MapSkyTower]" },
                    { fileName: "3135805.data", name: "(Z.2) Amnytas [MapSkySpire]" },
                    { fileName: "3136072.data", name: "(SM.2) Temple of Febe [MapCerusArena]" },
                    { fileName: "3193573.data", name: "(?) Convergences [MapBountyIslands]" },
                    { fileName: "3194054.data", name: "(Z.3) Inner Nayos [MapDream]" },
                    { fileName: "3264516.data", name: "(Z.3) Inner Nayos [MapDream2]" },
                    { fileName: "3316196.data", name: "(Z.3) Inner Nayos [MapDream3]" },
                ],
            },
            {
                name: "(X5) Guild Wars 2: Janthir Wilds",
                maps: [
                    { fileName: "3399578.data", name: "(H) Homestead" },
                    { fileName: "3406364.data", name: "(X5.1) Prologue: The Tyrian Alliance: Lion's Arch" },
                    { fileName: "3414888.data", name: "(Z.1) Lowland Shore" },
                    { fileName: "3415804.data", name: "(Z.2) Janthir Syntri" },
                ],
            },
            {
                name: "(GH) Guild Halls",
                maps: [
                    { fileName: "1255378.data", name: "(GH.1-2) Gilded Hollow [MapGuildCavern]" },
                    { fileName: "1256064.data", name: "(GH.1-2) Lost Precipice [MapGuildHeights]" },
                    { fileName: "1843274.data", name: "(GH.3) Windswept Haven [MapGuildPyramid]" },
                    { fileName: "2648082.data", name: "(GH.4) Isle of Reflection [MapGuildIsle]" },
                ],
            },
            {
                name: "Cooperative - (FotM) Fractals of the Mists",
                maps: [
                    { fileName: "1733961.data", name: "(Lounge) Mistlock Sanctuary [MapInfiniteCosmicVIPLounge]" },
                    { fileName: "1498016.data", name: "(FotM.0) Mistlock Observatory <Fractals of the Mists> [MapInfiniteHub]" },
                    { fileName: "519839.data", name: "(FotM.0-9) Fractals of the Mists [MapInfiniteIslands]" },
                    { fileName: "2187042.data", name: "(FotM.0-9) Aquatic Ruins <Fractals of the Mists> [MapInfiniteUnderwater]" },
                    { fileName: "1426653.data", name: "(FotM.0-9) Cliffside <Fractals of the Mists> [MapInfiniteCliffside]" },
                    { fileName: "1472382.data", name: "(FotM.0-9) Snowblind <Fractals of the Mists> [MapInfiniteSnowblind]" },
                    { fileName: "1472406.data", name: "(FotM.0-9) Swampland <Fractals of the Mists> [MapInfiniteSwamp]" },
                    {
                        fileName: "1498798.data",
                        name: "(FotM.10-14) Aetherblade, Captain Mai Trin Boss <Aetherblade Retreat> [MapValleyArchDungeonUpdated02]",
                    },
                    {
                        fileName: "1905739.data",
                        name: "(FotM.10-14) Molten Furnace, Molten Boss <Molten Furnace> [MapFlameFrostFractalExtended]",
                    },
                    { fileName: "697450.data", name: "(FotM.10-14) Thaumanova Reactor [MapInfiniteReactor]" },
                    { fileName: "1472361.data", name: "(FotM.15) Chaos Isles [MapInfiniteChaos]" },
                    { fileName: "1605344.data", name: "(FotM.16) Nightmare [MapInfiniteToxic]" },
                    { fileName: "1733857.data", name: "(FotM.17) Shattered Observatory [MapInfiniteCosmic]" },
                    { fileName: "1905889.data", name: "(FotM.18) Twilight Oasis [MapInfiniteMordant]" },
                    { fileName: "2005713.data", name: "(FotM.19) Deepstone [MapInfiniteLabyrinth]" },
                    { fileName: "2094098.data", name: "(FotM.20) Siren's Reef [MapInfiniteCove]" },
                    { fileName: "2333932.data", name: "(FotM.21) Sunqua Peak [MapFractalElementalIslands]" },
                    { fileName: "3100195.data", name: "(FotM.22) Silent Surf [MapLuxonFractal]" },
                    { fileName: "3317434.data", name: "(FotM.23) Lonely Tower [MapSkyRiseFractalEparch]" },
                ],
            },
            {
                name: "Cooperative - (R) Raids",
                maps: [
                    {
                        fileName: "1427048.data",
                        name: "(Lobby, R.0) Lion's Arch Aerodrome, Special Forces Training Area [MapValleyArchRaidLobby]",
                    },
                    { fileName: "1151420.data", name: "(R.1) Spirit Vale [MapRaidJungle01]" },
                    { fileName: "1383309.data", name: "(R.2) Salvation Pass [MapE1R2]" },
                    { fileName: "1454070.data", name: "(R.3) Stronghold of the Faithful [MapE1R3]" },
                    { fileName: "1645215.data", name: "(R.4) Bastion of the Penitent [MapE1R4]" },
                    { fileName: "1906329.data", name: "(R.5) Hall of Chains [MapE1R5]" },
                    { fileName: "2045250.data", name: "(R.6) Mythwright Gambit [MapE2R2]" },
                    { fileName: "2157962.data", name: "(R.7) The Key of Ahdashim [MapE2R3]" },
                ],
            },
            {
                name: "Competitive - Player vs. Player (PvP) - (CQ) Conquest, (MB) Murderball, (SH) Stronghold, (TDM) Team Deathmatch",
                maps: [
                    { fileName: "132570.data", name: "(Lobby) Heart of the Mists" },
                    { fileName: "197249.data", name: "(Lobby) Heart of the Mists [MapPvPLobby]" },
                    { fileName: "1713939.data", name: "(Lobby) Heart of the Mists [Mappvplobbyrework_cats]" },
                    { fileName: "1734729.data", name: "(Lobby) Heart of the Mists [Mappvplobbyrework_catsMoreRoom]" },
                    { fileName: "2129692.data", name: "(Lobby) Heart of the Mists [MapPvPLobby1016rework]" },
                    { fileName: "132710.data", name: "(CQ.1-4) Battle of Khylo" },
                    { fileName: "197402.data", name: "(CQ.1-4) Battle of Kyhlo [MapPvPConquestSiege]" },
                    { fileName: "1644708.data", name: "(CQ.1-4) Battle of Khylo [MapPvPConquestSiege2]" },
                    { fileName: "1666233.data", name: "(CQ.1-4) Battle of Khylo [MapPvPConquestSiege3]" },
                    { fileName: "132837.data", name: "(CQ.1-4) Forest of Niflhel" },
                    { fileName: "197545.data", name: "(CQ.1-4) Forest of Niflhel [MapPvPConquestForest]" },
                    { fileName: "376916.data", name: "(CQ.1-4) Legacy of the Foefire [MapPvPConquestGuild]" },
                    { fileName: "467374.data", name: "(CQ.1-4) Raid on the Capricorn" },
                    { fileName: "520609.data", name: "(CQ.5) Temple of the Silent Storm [MapPvPConquestDojo]" },
                    { fileName: "556199.data", name: "(CQ.6) Spirit Watch" },
                    { fileName: "1473061.data", name: "(CQ.6) Spirit Watch [MapPVPConquestSpirit2]" },
                    { fileName: "579383.data", name: "(CQ.7) Skyhammer" },
                    { fileName: "677968.data", name: "(CQ.7) Skyhammer" },
                    { fileName: "1426736.data", name: "(CQ.7) Skyhammer [MapPvPConquestCannonCapture]" },
                    { fileName: "1934470.data", name: "(CQ.7) Skyhammer [MapPvPConquestCannonCapture2]" },
                    { fileName: "1472979.data", name: "(CQ.8) Revenge of the Capricorn [MapPvPConquestCoastReturn]" },
                    { fileName: "1644624.data", name: "(CQ.8) Revenge of the Capricorn [MapPvPConquestCoastReturnshrunk]" },
                    { fileName: "1498174.data", name: "(CQ.9) Eternal Coliseum [MapPVPConquestArenaGods2]" },
                    { fileName: "1704155.data", name: "(CQ.9) Eternal Coliseum [MapPVPConquestArenaGods4]" },
                    { fileName: "2128880.data", name: "(CQ.9) Eternal Coliseum [MapPVPConquestArenaGodsTheme]" },
                    { fileName: "2065760.data", name: "(CQ.10) Djinn's Dominion [Mapdesertconq]" },
                    { fileName: "2128938.data", name: "(CQ.10) Djinn's Dominion [MapDesertConqWallMid]" },
                    { fileName: "2175965.data", name: "(CQ.10) Djinn's Dominion [MapDesertConqWallMid2]" },
                    { fileName: "791564.data", name: "(MB, TDM.2) Courtyard [MapDMCourtyard]" },
                    { fileName: "1713054.data", name: "(MB, TDM.2) Courtyard [MapDMCourtyard2]" },
                    { fileName: "870987.data", name: "(SH) Battle of Champion's Dusk [MapPvPStrongholdCity]" },
                    { fileName: "871093.data", name: "(SH) Battle of Champion's Dusk [MapPvPStrongholdCityMercs]" },
                    { fileName: "1712986.data", name: "(TDM.1) Hall of the Mists [MapHallway2v2]" },
                    { fileName: "1712945.data", name: "(TDM.3) Asura Arena [Mapasura2v2]" },
                    { fileName: "2187125.data", name: "(TDM.4) Auric Span [MapJungle2v2]" },
                ],
            },
            {
                name: "Competitive - World vs. World (WvW) - (MW) Mist War, (EotM) Edge of the Mists",
                maps: [
                    { fileName: "2113077.data", name: "(Lounge) Armistice Bastion [MapWvwLounge]" },
                    { fileName: "131235.data", name: "(MW) Eternal Battlegrounds, Obsidian Sanctum" },
                    { fileName: "195806.data", name: "(MW) Eternal Battlegrounds, Obsidian Sanctum [MapWvWCenter]" },
                    { fileName: "1798709.data", name: "(MW) Eternal Battlegrounds, Obsidian Sanctum [MapWvWCenterGliding]" },
                    { fileName: "1885693.data", name: "(MW) Eternal Battlegrounds, Obsidian Sanctum [MapWvWCenter4]" },
                    {
                        fileName: "2263889.data",
                        name: "(MW) Eternal Battlegrounds, Obsidian Sanctum [MapWvWCenterWallChange10_19]",
                    },
                    { fileName: "131574.data", name: "(MW) Alpine Borderlands" },
                    { fileName: "641501.data", name: "(MW) Alpine Borderlands [MapWvWRedHomeLake01]" },
                    { fileName: "1799855.data", name: "(MW) Alpine Borderlands [MapWvWRedHomeLake01gliding]" },
                    { fileName: "1918037.data", name: "(MW) Alpine Borderlands [MapWvWRedHomeLake02]" },
                    { fileName: "1427803.data", name: "(MW) Desert Borderlands [MapWvWDesertHomeUpdate]" },
                    { fileName: "1647236.data", name: "(MW) Desert Borderlands [MapWvWDesertHomeUpdateMIDrework]" },
                    { fileName: "1799442.data", name: "(MW) Desert Borderlands [MapWvWDesertHome4]" },
                    { fileName: "2112733.data", name: "(MW) Desert Borderlands [MapWvWDesertHome]" },
                    { fileName: "736241.data", name: "(EotM) Edge of the Mists [MapWvWIslands]" },
                ],
            },
            {
                name: "Festival - (LNY) Lunar New Year",
                maps: [
                    { fileName: "1625212.data", name: "(City) Divinity's Reach <Divinity's Reach> [MapValleyDivinityLNY]" },
                    { fileName: "595582.data", name: "(LNY) Dragon Ball Arena [MapDragonBall]" },
                ],
            },
            {
                name: "Festival - (SAB) Super Adventure Festival - Super Adventure Box [SAB]",
                maps: [
                    { fileName: "1666365.data", name: "(City) Rata Sum <Rata Sum> [MapWetlandComplexSAB]" },
                    { fileName: "569756.data", name: "(SAB) Super Adventure Box" },
                    { fileName: "636133.data", name: "(Lobby) Hub [MapSABHub]" },
                    { fileName: "635555.data", name: "(SAB.1) World 1 [MapSABWorld1]" },
                    { fileName: "635960.data", name: "(SAB.2) World 2 [MapSABWorld2]" },
                    { fileName: "3024941.data", name: "(SAB.3) World 3 [MapSABWorld3-0]" },
                    { fileName: "3281398.data", name: "(SAB.3) World 3 [MapSABWorld3-1]" },
                ],
            },
            {
                name: "Festival - (DB) Dragon Bash",
                maps: [{ fileName: "2164993.data", name: "(City) Hoelbrak <Hoelbrak> [MapAlpineHallDragonBash]" }],
            },
            {
                name: "Festival - (FotFW) Festival of the Four Winds",
                maps: [
                    { fileName: "606255.data", name: "(FotFW) Labyrinthine Cliffs [MapEvenKiteCity]" },
                    { fileName: "605983.data", name: "(FotFW) Sanctum Sprint [MapEvenTriathlonKiteCity]" },
                    { fileName: "617120.data", name: "(FotFW) Aspect Arena [MapEvenPVPKiteCity]" },
                    { fileName: "622681.data", name: "(FotFW) The Crown Pavilion <Divinity's Reach> [MapJubileeArena]" },
                ],
            },
            {
                name: "Festival - (HW) Halloween - Mad King's Realm [MadKing]",
                maps: [
                    { fileName: "1869665.data", name: "(City) Lion's Arch <Lion's Arch> [MapValleyArchKielHalloween]" },
                    { fileName: "506670.data", name: "(HW) Mad King's Labyrinth, Lunatic Inquisition [MapMadKingMaze]" },
                    { fileName: "662436.data", name: "(HW) Mad King's Labyrinth, Lunatic Inquisition [MapMadKingMaze2013]" },
                    { fileName: "2499169.data", name: "(HW) Mad King's Labyrinth, Lunatic Inquisition [MapMadKingMaze2021]" },
                    { fileName: "506739.data", name: "(HW) Mad King's Clock Tower [MapMadKingTower]" },
                    { fileName: "506539.data", name: "(HW) Mad King's Raceway, Reaper's Rumble [MapMadKingField]" },
                    { fileName: "506592.data", name: "(HW) Ascent to Madness [MapMadKingBoss]" },
                ],
            },
            {
                name: "Festival - (WD) Wintersday - (SM) Strike Mission - Wintersday Celebration [Wintersday]",
                maps: [
                    {
                        fileName: "705746.data",
                        name: "(City) Divinity's Reach <Divinity's Reach> [MapWintersDayValleyDivinity2013]",
                    },
                    { fileName: "1917775.data", name: "(City) Divinity's Reach <Divinity's Reach> [MapValleyDivinityholiday]" },
                    { fileName: "529718.data", name: "(WD) Bell Choir Ensemble, Snowball Mayhem [MapWintersdaySnowGlobe]" },
                    { fileName: "529896.data", name: "(WD) Tixx's Infinirarium, Toypocalypse [MapWintersdayAirship]" },
                    { fileName: "529945.data", name: "(WD) Winter Wonderland [MapWintersdayFrostyland]" },
                    { fileName: "2076921.data", name: "(SM) Secret Lair of the Snowmen [MapFrozenTyrant]" },
                ],
            },
            {
                name: "Miscellaneous",
                maps: [
                    { fileName: "122695.data", name: "(((Empty Plane)))" },
                    { fileName: "129834.data", name: "Lake Doric" },
                    { fileName: "132853.data", name: "(((Empty Box)))" },
                    { fileName: "184799.data", name: "[MapDummy]" },
                    { fileName: "193081.data", name: "Lake Doric [MapValleyReach]" },
                    { fileName: "197562.data", name: "[MapPvPBlackBox]" },
                    { fileName: "606030.data", name: "Basket Brawl [MapBasketBrawl]" },
                    { fileName: "875614.data", name: "[MapTutorialChina]" },
                    { fileName: "969964.data", name: "Verdant Brink <Verdant Brink> [MapRootsAfterShip]" },
                    { fileName: "1255516.data", name: "[MapGuildColiseum]" },
                    { fileName: "1255634.data", name: "(((Unknown Town)))" },
                    { fileName: "1282201.data", name: "(((WvW)))" },
                    { fileName: "1498193.data", name: "[MapPvPConquestTemp]" },
                    { fileName: "1513556.data", name: "[MapPvPInfection2]" },
                    { fileName: "1513607.data", name: "[MapPvPConquestTest_01]" },
                    { fileName: "1513620.data", name: "[MapPvPConquestTest_02]" },
                    { fileName: "1513675.data", name: "[MapPvPConquestTest_04]" },
                    { fileName: "1956299.data", name: "[MapDesertArchipelago_Instance]" },
                    { fileName: "2204239.data", name: "<Grothmar Valley> [MapRegrownBloodCinematic]" },
                    { fileName: "2224545.data", name: "Jaga Moraine [MapAlpinemoraine]" },
                    { fileName: "2224624.data", name: "[MapAlpineMoraineFinalInstance]" },
                    { fileName: "2257438.data", name: "[MapTest]" },
                    { fileName: "2649061.data", name: "<Grothmar Valley> [MapRegrownBlood_CinematicEOD]" },
                    { fileName: "2644298.data", name: "[MapJadeSeaWhirlpool]" },
                    { fileName: "2689589.data", name: "<Desert Highlands> [MapDesertHighlandsE3]" },
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
        return new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
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
            finalMaterial = new THREE.MeshBasicMaterial({
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
                finalMaterial = new THREE.MeshBasicMaterial({
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
            return texture;
        }
        /// Load file using LocalReader.
        localReader.loadFile(fileId, function (inflatedData, dxtType, imageWidth, imageHeigth) {
            /// Require infalted data to be returned.
            if (!inflatedData) {
                if (onerror)
                    onerror();
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
                //eslint-disable-next-line no-constant-condition
                dxtType === 3 || dxtType === 5 || true ? THREE.RGBAFormat : THREE.RGBFormat;
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
            /// Ugly way of fixing UV maps for the skybox (I think)
            skyGeometry.faceVertexUvs[0].forEach((vecs, idx) => {
                const face = Math.floor(idx / 2);
                // PX NX
                // PY NY
                // PZ NZ
                /// PX - WEST   NX - EAST
                if (face === 0 || face === 1) {
                    vecs.forEach((vec2) => {
                        vec2.x = 1 - vec2.x;
                        vec2.y /= 2.0;
                        vec2.y += 0.5;
                    });
                }
                /// NZ - SOUTH   PZ - NORTH
                else if (face === 5 || face === 4) {
                    vecs.forEach((vec2) => {
                        vec2.y /= -2.0;
                        vec2.y += 0.5;
                    });
                }
                else {
                    vecs.forEach((vec2) => {
                        vec2.x = 1 - vec2.x;
                    });
                }
            });
            skyGeometry.uvsNeedUpdate = true;
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
                mat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
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
                const geom = new THREE.Geometry();
                /// Pass vertices
                for (let i = 0; i < collision.vertices.length; i++) {
                    const v = collision.vertices[i];
                    // "x","float32","z","float32","y","float32"]
                    geom.vertices.push(new THREE.Vector3(v[0], v[2], -v[1]));
                }
                /// Pass faces
                for (let i = 0; i < collision.indices.length; i += 3) {
                    const f1 = collision.indices[i];
                    const f2 = collision.indices[i + 1];
                    const f3 = collision.indices[i + 2];
                    if (f1 <= collision.vertices.length && f2 <= collision.vertices.length && f3 <= collision.vertices.length) {
                        geom.faces.push(new THREE.Face3(f1, f2, f3));
                    }
                    else {
                        this.logger.log(T3D.Logger.TYPE_ERROR, "Errorus index in havok model geometry.");
                    }
                }
                /// Prepare geometry and pass new mesh
                geom.computeFaceNormals();
                // geom.computeVertexNormals();
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
    /**
     * Merge multiple meshes together and return an instancedMesh for it
     * @param {Array} meshes Three Meshes to be merged into a single mesh
     * @param {Number} size Size of the instanced mesh
     * @param {Number} filterFlags When undefined, it will render all LODs. When using 0, only show most detailed LOD
     * @returns {Mesh} a Three instanced mesh
     */
    function getInstancedMesh(meshes, size, filterFlags) {
        const meshMaterials = [];
        const mergedGeometry = new THREE.Geometry();
        meshes.forEach((mesh, index) => {
            // If filterFlags is set, we ignore any mesh without the correct flag
            if (filterFlags !== undefined && mesh.flags !== filterFlags) {
                return;
            }
            meshMaterials.push(mesh.material);
            // It's only possible to merge geometries of the same type
            const meshGeometry = new THREE.Geometry().fromBufferGeometry(mesh.geometry);
            mergedGeometry.merge(meshGeometry, mesh.matrix, index);
        });
        const finalMesh = new THREE.InstancedMesh(mergedGeometry, meshMaterials, size);
        finalMesh.updateMatrix();
        finalMesh.matrixAutoUpdate = false;
        return finalMesh;
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
                        // NO lods
                        if (mesh.flags === 4 || mesh.flags === 1 || mesh.flags === 0) {
                            // return;
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
        getInstancedMesh: getInstancedMesh,
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
            const instancedMesh = getInstancedMesh(meshes, model.size);
            let instancedIndex = 0;
            for (const prop of model.props) {
                instancedMesh.setMatrixAt(instancedIndex, getMatrixForProp(prop));
                instancedIndex += 1;
                for (const transform of prop.transforms || []) {
                    instancedMesh.setMatrixAt(instancedIndex, getMatrixForProp(transform));
                    instancedIndex += 1;
                }
            }
            this.getOutput().meshes.push(instancedMesh);
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
                uniforms.uvScale = { type: "v2", value: new THREE.Vector2(8.0, 8.0) };
                uniforms.offset = {
                    type: "v2",
                    value: new THREE.Vector2(pageOffetX, pageOffetY),
                };
                uniforms.texturePicker = {
                    type: "t",
                    value: chunkTextures[pageTexName],
                };
                uniforms.texturePicker2 = {
                    type: "t",
                    value: chunkTextures[pageTexName2],
                };
                uniforms.texture1 = { type: "t", value: chunkTextures[fileNames[0]] };
                uniforms.texture2 = { type: "t", value: chunkTextures[fileNames[1]] };
                uniforms.texture3 = { type: "t", value: chunkTextures[fileNames[2]] };
                uniforms.texture4 = { type: "t", value: chunkTextures[fileNames[3]] };
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
                const chunkGeo = new THREE.PlaneBufferGeometry(cdx, cdy, chunkW - 3, chunkW - 3);
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
                /// Compute face normals for lighting, not used when textured
                //@ts-ignore
                chunkGeo.computeFaceNormals();
                chunkGeo.computeVertexNormals();
                /// Build chunk mesh!
                let chunk;
                chunk = new THREE.Mesh(chunkGeo, customMaterial);
                if (Array.isArray(mat)) {
                    chunk = THREE.SceneUtils.createMultiMaterialObject(chunkGeo, mat);
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
