/**
 * Organized thread pool of extractors
 */
import Logger from "../Logger";

interface ScanCallback {
  resolve: (buffer: ArrayBuffer) => void;
  reject: (err: Error) => void;
}

interface ScanJob {
  kind: "scan";
  id: number;
  mftId: number;
  offset: number;
  length: number;
  capLength: number;
  compressed: boolean;
}

interface InflateJob {
  kind: "inflate";
  mftId: number;
  buffer: ArrayBuffer;
  isImage: boolean;
  capLength: number;
}

export default class DataReader {
  _workerPool: any[];
  _workerLoad: any[];
  _inflateCallbacks: any[];
  _scanCallbacks: Array<ScanCallback[] | undefined>;
  _scanByMft: Map<number, number>;
  _nextScanId: number;
  _pendingScanJobs: ScanJob[];
  _pendingInflateJobs: InflateJob[];

  constructor(
    public settings: {
      workersNb: number; // Amount of concurrent spawned workers
      workerPath: string; // Path to the worker script
    }
  ) {
    this._workerPool = [];
    this._workerLoad = [];
    this._inflateCallbacks = [];
    this._scanCallbacks = [];
    this._scanByMft = new Map();
    this._nextScanId = 1;
    this._pendingScanJobs = [];
    this._pendingInflateJobs = [];
    for (let i = 0; i < settings.workersNb; i++) {
      this._startWorker(settings.workerPath);
    }
  }

  /**
   * Give every worker its own reference to the archive File so they can
   * do their own slicing during the type-detection scan. Cheap — the
   * underlying blob handle is shared, not copied.
   */
  init(file: File): void {
    for (const worker of this._workerPool) {
      worker.postMessage({ type: "init", file });
    }
  }

  /**
   * Worker-side scan: slice `length` bytes at `offset`, inflate up to
   * `capLength` bytes if `compressed`, return the resulting buffer.
   * Concurrent calls for the same `mftId` are coalesced.
   */
  scan(mftId: number, offset: number, length: number, capLength: number, compressed: boolean): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const existingId = this._scanByMft.get(mftId);
      if (existingId !== undefined && this._scanCallbacks[existingId]) {
        this._scanCallbacks[existingId]!.push({ resolve, reject });
        return;
      }

      const id = this._nextScanId++;
      this._scanCallbacks[id] = [{ resolve, reject }];
      this._scanByMft.set(mftId, id);
      this._enqueueScanJob({
        kind: "scan",
        id,
        mftId,
        offset,
        length,
        capLength,
        compressed,
      });
    });
  }

  inflate(
    buffer: ArrayBuffer,
    _size: number,
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
        Logger.log(Logger.TYPE_WARNING, `not inflating, length is too short (${arrayBuffer.byteLength})`, mftId);
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

      this._enqueueInflateJob({
        kind: "inflate",
        mftId,
        buffer: arrayBuffer,
        isImage: isImage === true,
        capLength,
      });
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
      self._workerLoad[selfWorkerId] = 0;
      const data = message_event.data;

      // Scan protocol — object messages with a `type` field.
      if (data && !Array.isArray(data) && typeof data === "object" && data.type) {
        self._handleScanResponse(data);
        self._drainQueues(selfWorkerId);
        return;
      }

      let mftId: number;
      // Legacy inflate error path — string message.
      if (typeof data === "string") {
        Logger.log(Logger.TYPE_WARNING, "Inflater threw an error", data);
        mftId = parseInt(data.split(":")[0]);
        const callbacks = self._inflateCallbacks[mftId];
        delete self._inflateCallbacks[mftId];
        if (callbacks) {
          for (const callback of callbacks) {
            callback.reject(new Error(data));
          }
        }
      } else {
        mftId = data[0];
        const callbacks = self._inflateCallbacks[mftId];
        delete self._inflateCallbacks[mftId];
        if (callbacks) {
          for (const callback of callbacks) {
            callback.resolve({
              buffer: data[1],
              dxtType: data[2],
              imageWidth: data[3],
              imageHeight: data[4],
            });
          }
        } else {
          Logger.log(Logger.TYPE_ERROR, "Inflater threw an error", data);
        }
      }

      self._drainQueues(selfWorkerId);
    };
  }

  private _handleScanResponse(data: {
    type: string;
    id: number;
    mftId?: number;
    buffer?: ArrayBuffer;
    error?: string;
  }): void {
    const callbacks = this._scanCallbacks[data.id];
    this._scanCallbacks[data.id] = undefined;
    // Drop the mftId→id mapping. We don't know which mftId this was for from
    // the response, but the dedup map's lifecycle matches the callbacks: when
    // callbacks resolve, no future scan() can coalesce onto this id anyway.
    // Walk the small map to find and remove; map stays bounded by concurrent
    // unique mftIds in flight, never the full archive.
    for (const [mft, sid] of this._scanByMft) {
      if (sid === data.id) {
        this._scanByMft.delete(mft);
        break;
      }
    }
    if (!callbacks) return;
    if (data.type === "scan-result" && data.buffer) {
      for (const cb of callbacks) cb.resolve(data.buffer);
    } else {
      const err = new Error(data.error || "scan failed");
      for (const cb of callbacks) cb.reject(err);
    }
  }

  private _enqueueScanJob(job: ScanJob): void {
    const workerId = this._findIdleWorkerIndex();
    if (workerId !== -1 && this._pendingInflateJobs.length === 0) {
      this._dispatchScanJob(workerId, job);
      return;
    }
    this._pendingScanJobs.push(job);
  }

  private _enqueueInflateJob(job: InflateJob): void {
    const workerId = this._findIdleWorkerIndex();
    if (workerId !== -1) {
      this._dispatchInflateJob(workerId, job);
      return;
    }
    this._pendingInflateJobs.push(job);
  }

  private _drainQueues(workerId: number): void {
    if (this._workerLoad[workerId] !== 0) return;

    const inflateJob = this._pendingInflateJobs.shift();
    if (inflateJob) {
      this._dispatchInflateJob(workerId, inflateJob);
      return;
    }

    const scanJob = this._pendingScanJobs.shift();
    if (scanJob) {
      this._dispatchScanJob(workerId, scanJob);
    }
  }

  private _dispatchScanJob(workerId: number, job: ScanJob): void {
    this._workerLoad[workerId] = 1;
    this._workerPool[workerId].postMessage({
      type: "scan",
      id: job.id,
      mftId: job.mftId,
      offset: job.offset,
      length: job.length,
      capLength: job.capLength,
      compressed: job.compressed,
    });
  }

  private _dispatchInflateJob(workerId: number, job: InflateJob): void {
    this._workerLoad[workerId] = 1;
    this._workerPool[workerId].postMessage([job.mftId, job.buffer, job.isImage, job.capLength], [job.buffer]);
  }

  private _findIdleWorkerIndex(): number {
    for (let i = 0; i < this._workerLoad.length; i++) {
      if (this._workerLoad[i] === 0) return i;
    }
    return -1;
  }
}
