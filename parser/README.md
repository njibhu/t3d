# t3d-parser

Implementation is based on the work done by kig on [Datastream.js](github.com/kig/Datastream.js).
It is tailored to the use for the t3d library.

# Demo usage (WIP)

```ts
import Parser from "@t3d/parser";
import definitions from "@t3d/definitions";

const AMSPParser = new Parser(definitions.AMSP);
const myBuffer = Buffer.from(/** opened chunk**/);
const parsedChunk = AMSPParser.parse(myBuffer); // Chunk will be automatically typed 🎉
```
