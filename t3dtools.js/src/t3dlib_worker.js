/*
 * Copyright 2018 Njibhu <manu@njibhu.eu>
 * This code is published under MIT License.
 **/

/**
 * Inflater + file-scan worker.
 *
 * Two message protocols are supported on the same worker:
 *
 * 1. Legacy "inflate" — array messages. The main thread reads the file slice
 *    itself and ships the ArrayBuffer over. Still used by full-file reads
 *    (image loading, file extraction) where the buffer is large enough to
 *    justify the main-thread read.
 *
 *      in:  [handle, arrayBuffer, isImage, capLength]
 *      out: [handle, buffer, dxtType, imgW, imgH]    on success
 *           "handle: error message"                  on error
 *
 * 2. Scan — object messages. Workers hold their own reference to the .dat
 *    File and slice it themselves, so the main thread never touches file
 *    I/O during the type-detection scan. This is the hot path for
 *    LocalReader.readFileList.
 *
 *      init scan:  { type: "init", file }
 *      scan:       { type: "scan", id, offset, length, capLength, compressed }
 *      ok:         { type: "scan-result", id, buffer }
 *      error:      { type: "scan-error",  id, error  }
 **/

let workerFile = null;

self.addEventListener(
  "message",
  function (e) {
    const data = e.data;

    // Object messages — new scan protocol.
    if (data && !Array.isArray(data) && typeof data === "object") {
      if (data.type === "init") {
        workerFile = data.file;
        return;
      }
      if (data.type === "scan") {
        handleScan(data);
        return;
      }
    }

    // Legacy array message — main-thread-sliced inflate.
    let handle = data[0];
    let arrayBuffer = data[1];
    let isImage = data[2];
    let capLength = data[3];
    let result;
    let error = false;

    try {
      result = Module.inflate(arrayBuffer, capLength, isImage);
    } catch (err) {
      error = true;
      self.postMessage(`${handle}: ${err.toString()}`);
    }

    if (!error) {
      self.postMessage([handle, result.data.buffer, result.dxtType, result.imgW, result.imgH], [result.data.buffer]);
    }
  },
  false
);

function handleScan(msg) {
  const id = msg.id;
  const offset = msg.offset;
  const length = msg.length;
  const capLength = msg.capLength;
  const compressed = msg.compressed;

  if (!workerFile) {
    self.postMessage({ type: "scan-error", id, error: "scan before init" });
    return;
  }

  workerFile
    .slice(offset, offset + length)
    .arrayBuffer()
    .then(function (arrayBuffer) {
      if (!compressed) {
        // Raw bytes — no wasm round-trip.
        self.postMessage({ type: "scan-result", id, buffer: arrayBuffer }, [arrayBuffer]);
        return;
      }
      try {
        const result = Module.inflate(arrayBuffer, capLength, false);
        self.postMessage({ type: "scan-result", id, buffer: result.data.buffer }, [result.data.buffer]);
      } catch (err) {
        self.postMessage({ type: "scan-error", id, error: err.toString() });
      }
    })
    .catch(function (err) {
      self.postMessage({ type: "scan-error", id, error: err.toString() });
    });
}
