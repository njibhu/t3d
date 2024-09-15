/**
 * File to test that the archive parser is working properly on a real archive.
 */

import * as ArchiveParser from "../src/archive-parser";

if (process.argv.length < 2) {
  console.log("Missing arguments. Expected: filePath");
  process.exit(1);
}

const filePath = process.argv[2];

ArchiveParser.readArchive(filePath as any).then((data) => {
  console.log(data);
});
