const progressCache = {};

function progress(logger, currentIndex, maxIndex, progressName) {
  const percent = Math.round((1000.0 * currentIndex) / maxIndex) / 10.0;
  // Make sure we don't spam logs
  if (progressCache[progressName] !== percent) {
    const consistentPercent = percent + (percent.toString().indexOf(".") < 0 ? ".0" : "");
    logger.log(T3D.Logger.TYPE_PROGRESS, progressName, consistentPercent);
    progressCache[progressName] = percent;
  }

  // Clean cache on last item
  if (currentIndex === maxIndex) {
    progressCache[progressName] = undefined;
  }
}

module.exports = {
  progress,
};
