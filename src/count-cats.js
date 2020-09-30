const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let result = [].concat(...matrix);
  let indices = [];
  let cat = '^^';
  let idx = result.indexOf(cat);
  while (idx != -1) {
    indices.push(idx);
    idx = result.indexOf(cat, idx + 1);
    
} return indices.length;
};