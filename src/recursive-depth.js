const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let countDepth = 1;
    arr.forEach(count => {
      let depth = 1;
      if (Array.isArray(count)) {
        const depthCalc = this.calculateDepth(count);
        depth += depthCalc;
        countDepth = depth > countDepth ? depth : countDepth;
      } 
    }); return countDepth;
}
};