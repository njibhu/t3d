import Logger from "../Logger";

// A progress cache is needed to debounce logs at the same percentage
const progressCache: Record<string, number | undefined> = {};

/**
 * This utility function is a helper for showing loading progress of dataRenderers.
 * It automatically generates progress logs which can be used outside of the library to show progress bars.
 * Must be used on loop implementations where the maximum index is known in advance
 *
 * @param {Object} logger The default logger or given one
 * @param {Number} currentIndex Current index of the item being loaded
 * @param {Number} maxIndex Maximum index of items to load
 * @param {String} progressName Name of the resource being loaded
 */
export function progress(logger: typeof Logger, currentIndex: number, maxIndex: number, progressName: string): void {
  const percent = Math.round((1000.0 * currentIndex) / maxIndex) / 10.0;
  // Make sure we don't spam logs
  if (progressCache[progressName] !== percent) {
    const consistentPercent = percent + (percent.toString().indexOf(".") < 0 ? ".0" : "");
    logger.log(Logger.TYPE_PROGRESS, progressName, consistentPercent);
    progressCache[progressName] = percent;
  }

  // Clean cache on last item
  if (currentIndex === maxIndex) {
    progressCache[progressName] = undefined;
  }
}
