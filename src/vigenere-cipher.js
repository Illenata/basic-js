const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  // constructor(type = true) {
  // this.type = type;
  // }

  // err(message, key) {
  //   if (message === undefined || key === undefined) {
  //     throw Error;
  //   }
  // }

  // processor(message, key, method) {
  //   const upMessage = message.toUpperCase();
  //   const upKey = key.toUpperCase();
  // }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error;
    }
    return message.toUpperCase();
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error;
    }
    return message.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;