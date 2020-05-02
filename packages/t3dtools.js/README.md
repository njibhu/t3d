# T3DTOOLS.js

## COPYRIGHT: The code in this repository comes from many different places
* [github.com/ahom](http://github.com/ahom)
* [github.com/RequestTimeout408](http://github.com/RequestTimeout408)
* The squish library is licensed under MIT license by Simon Brown (si@sjbrown.co.uk)

This is a port of the t3dgw2tools with emscripten.
Node example:

```javascript
const t3dtools = require('./t3dtools.js')(); //Extra parenthesis to load the emscripten module
const fs = require('fs');
var test = fs.readFileSync('chunk.packed');
var data = t3dtools.inflate(test);
```

## This is not some unworking code anymore ! Tested with Node and Firefox. Some changes since last attempt:
* Pepperjs is actually not such a good idea since it is unmaintained and both emscripten and the pepper API evolved.
* Tested with Tyria3DLibrary:(https://github.com/njibhu/Tyria3DLibrary/tree/t3dtools.js)
* The performance haven't been tested but it should be quite bad compared to the original version. But !
  there is a lot of work and optimizations that can be done which should make it even faster than the original.
* The best place for documentation is src/pre.js

## TODO next:
* Change all the exceptions to error checks (Will enable further optimisations with Emscripten)
* Enable WASM output (should provide much better perf)
* Remove as much as possible the data copy (see src/pre.js)
 
