const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') {
    return false;
  }
  if (parseFloat(sampleActivity) <= 0) {
    return false;
  }
  if (parseFloat(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }
  if (isNaN(parseFloat(sampleActivity))) {
    return false;
  }
  let decayRate = parseFloat(sampleActivity);
  return Math.ceil(
    Math.log(MODERN_ACTIVITY / decayRate) /
      (0.693 / HALF_LIFE_PERIOD)
  );
};
