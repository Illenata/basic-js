const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members) || members.length <= 0) {
    return false;
  }
  let titleArr = members.filter((name) => typeof name === 'string');
  let title = titleArr.map((member) => member.trim().substr(0, 1).toUpperCase()).sort().join('');
  return title;
};