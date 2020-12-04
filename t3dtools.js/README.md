# T3DTOOLS.js

## COPYRIGHT: The code in this repository comes from many different places

- [github.com/ahom](http://github.com/ahom)
- [github.com/RequestTimeout408](http://github.com/RequestTimeout408)
- The squish library is licensed under MIT license by Simon Brown (si@sjbrown.co.uk)

This is a port of the t3dgw2tools with emscripten.
Node example:

```javascript
const fs = require("fs");
require("./t3dtools.js").then((t3dtools) => {
  const test = fs.readFileSync("chunk.packed");
  const data = t3dtools.inflate(test);
});
```

## What is this ?

This package contain the necessary code to deal with the raw binary data from .dat archives before they can be parsed.
It can:

- Decompress byte arrays marked as compressed
- Unpack textures

Default target depends on emscripten, but as version 2.0.9 it will output loadable modules with their corresponding wasm binaries.

### What is the difference between t3dtools and t3dworker ?

The t3dtools.js file can be loaded by nodejs or browsers and will run in the main thread.
The t3dworker is Web-Worker ready module allowing to offload heavy work off the main thread in browsers.

## How to build it ?

- You need CMake and emscripten
- run `cmake .`
- run `emmake make`

## What can be done next:

- Change all the exceptions to error checks since exceptions are anyway ignored by emscripten.
- Remove as much as possible the data copy (see src/pre.js)
- Use a SharedArrayBuffer instead of passing the data around in channels.
