/**
 * Organized thread pool of extractors
 */
export default class DataReader {
  _workerPool: any[];
  _workerLoad: any[];
  _inflateCallbacks: any[];

  constructor(
    public settings: {
      workersNb: number; // Amount of concurrent spawned workers
      workerPath: string; // Path to the worker script
    }
  ) {
    this._workerPool = [];
    this._workerLoad = [];
    this._inflateCallbacks = [];
    for (let i = 0; i < settings.workersNb; i++) {
      this._startWorker(settings.workerPath);
    }
  }

  inflate(
    buffer: ArrayBuffer,
    size: number,
    mftId: number,
    isImage?: boolean,
    capLength?: number
  ): Promise<{
    buffer: ArrayBuffer;
    dxtType: number;
    imageWidth: number;
    imageHeight: number;
  }> {
    return new Promise((resolve, reject) => {
      const arrayBuffer = buffer;

      // If no capLength then inflate the whole file
      if (!capLength || capLength < 0) {
        capLength = 0;
      }

      // Buffer length size check
      if (arrayBuffer.byteLength < 12) {
        T3D.Logger.log(
          T3D.Logger.TYPE_WARNING,
          `not inflating, length is too short (${arrayBuffer.byteLength})`,
          mftId
        );
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
      } else {
        this._inflateCallbacks[mftId] = [{ resolve: resolve, reject: reject }];
      }

      // Add the load to the worker
      const workerId = this._getBestWorkerIndex();
      this._workerLoad[workerId] += 1;
      this._workerPool[workerId].postMessage([mftId, arrayBuffer, isImage === true, capLength]);
    });
  }

  // Initialization function for creating a new worker (thread)
  _startWorker(path: any): void {
    const self = this;
    const worker = new Worker(path);
    const selfWorkerId = this._workerPool.push(worker) - 1;
    if (this._workerLoad.push(0) !== selfWorkerId + 1) {
      throw new Error("WorkerLoad and WorkerPool don't have the same length");
    }

    worker.onmessage = function (message_event) {
      let mftId: number;
      // Remove load
      self._workerLoad[selfWorkerId] -= 1;

      // If error
      if (typeof message_event.data === "string") {
        T3D.Logger.log(T3D.Logger.TYPE_WARNING, "Inflater threw an error", message_event.data);
        mftId = parseInt(message_event.data.split(":")[0]);
        for (const callback of self._inflateCallbacks[mftId]) {
          callback.reject();
        }
      } else {
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
  _getBestWorkerIndex(): number {
    return this._workerLoad.indexOf(Math.min(...this._workerLoad));
  }
}
