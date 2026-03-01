import FileParser from "./file-parser";
import * as ArchiveParser from "./archive-parser";
import * as ParsingUtils from "./utils";
import * as Definitions from "../definitions";

export { FileParser, ArchiveParser, ParsingUtils, Definitions };

const T3DParser = {
  FileParser,
  ArchiveParser,
  ParsingUtils,
  Definitions,
} as const;

export default T3DParser;
