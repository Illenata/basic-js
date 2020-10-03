const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator == undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.addition == null) {
    options.addition = 'null';
  }

  let repeater = [];

  for(let i = 0; i < options.repeatTimes; i++) {
    let arr =[];
      for(let j = 0; j < options.additionRepeatTimes; j++) {
        arr.push(options.addition);
      }
      repeater.push(str + arr.join(options.additionSeparator));
  }
  return repeater.join(options.separator);
};