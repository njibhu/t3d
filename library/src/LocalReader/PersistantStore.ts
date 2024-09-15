/// Indexed DB versioning
const DB_VERSION = 4;

/**
 * This class handles offline storage of the .dat indexes and files metadata
 * @class PersistantStore
 */
class PersistantStore {
  _dbConnection?: IDBDatabase;

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
  _getConnection(): Promise<IDBDatabase> {
    const self = this;
    return new Promise((resolve, reject) => {
      if (self._dbConnection) resolve(self._dbConnection);

      // Let us open our database
      const request = window.indexedDB.open("Tyria3DLibrary", DB_VERSION);

      /// onblocked is fired when the db needs an upgrade but an older version is opened in another tab
      request.onblocked = () => {
        T3D.Logger.log(
          T3D.Logger.TYPE_ERROR,
          "The T3D persistant database cannot be upgraded while the app is opened somewhere else."
        );
      };

      /// fired when the database needs to be upgraded (or the first time)
      request.onupgradeneeded = (event) => {
        // Probably bugged
        //@ts-ignore
        const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
        const currentVersion = event.oldVersion;

        if (currentVersion < 2) {
          db.createObjectStore("listings", {
            autoIncrement: true,
          });
        }

        if (currentVersion < 3) {
          const storeListing = (event.currentTarget as IDBOpenDBRequest).transaction!.objectStore("listings");
          storeListing.createIndex("filename", "filename", { unique: false });
        }
      };

      request.onsuccess = (event) => {
        self._dbConnection = (event.target as IDBOpenDBRequest).result;
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
  putListing(id: number | undefined, listing: any[], fileName: string, isComplete: boolean): Promise<number> {
    const self = this;
    return new Promise((resolve, reject) => {
      self._getConnection().then((db) => {
        const store = db.transaction(["listings"], "readwrite").objectStore("listings");

        const request = id
          ? store.put({ array: listing, filename: fileName, complete: isComplete }, id)
          : store.put({ array: listing, name: fileName });

        request.onsuccess = () => {
          resolve(request.result as number);
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
  getLastListing(fileName: string): Promise<{
    array: any[];
    key: any;
    complete: boolean;
  }> {
    const self = this;
    return new Promise((resolve) => {
      self._getConnection().then((db) => {
        const listingsStore = db.transaction(["listings"], "readonly").objectStore("listings").index("filename");

        listingsStore.openCursor(IDBKeyRange.only(fileName), "prev").onsuccess = (event) => {
          const cursor: IDBCursorWithValue = (event.target as IDBRequest).result;
          if (!cursor) resolve({ array: [], key: undefined, complete: true });
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

export default PersistantStore;
