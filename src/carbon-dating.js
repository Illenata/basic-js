const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' ||
    sampleActivity <= 0 ||
    sampleActivity > MODERN_ACTIVITY ||
    !isFinite(sampleActivity)) {
      return false;
  }
  let K = 0.693 / HALF_LIFE_PERIOD;
  let parseSampleActivity = parseInt(sampleActivity, 10);
  
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseSampleActivity) / K);
};
