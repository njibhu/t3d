import DataRenderer from "./DataRenderer";

import type LocalReader from "../LocalReader/LocalReader";
import type Logger from "../Logger";

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
export default class StringRenderer extends DataRenderer {
  static rendererName = "StringRenderer";

  constructor(localReader: LocalReader, settings: any, context: any, logger: typeof Logger) {
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
  renderAsync(callback: Function): void {
    const self = this;

    /// Get file id
    // const fileId = this.settings.id;

    /// Load the string file

    /// Set up output array
    this.getOutput().strings = [];

    this.localReader.loadFile(this.settings.id, function (inflatedData) {
      const dataView = new DataView(inflatedData!);
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
            const value = new Uint16Array(inflatedData!, cursor, entry.size / 2);
            cursor += entry.size;
            self.getOutput().strings.push({ value: String.fromCharCode(...value), recid: entryIndex });
          }
          /// Other... ignored
          else {
            //continue
          }
        }

        entryIndex++;
      }

      self.getOutput().language = dataView.getUint16(end, true);
      callback();
    });
  }
}
