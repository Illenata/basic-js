const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
  this.type = type;
  }

  err(message, key) {
    if (message === undefined || key === undefined) {
      throw Error;
    }
  }

  processor(message, key, method) {
    this.err(message, key);
    
    const uppMsg = message.toUpperCase();
    const uppKey = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for(let i = 0; i < uppMsg.length; i++) {
      let currIndex = uppMsg[i].charCodeAt();
      if (currIndex >= 65 && currIndex <= 90) {
        let letter = '';

        if (method === 'encrypt') {
          letter = String.fromCharCode((currIndex + uppKey.charCodeAt(keyIndex)) % 26 + 65);
        } else {
          letter = String.fromCharCode((currIndex + 26 - uppKey.charCodeAt(keyIndex)) % 26 + 65);
        }

        result.push(letter);
        
        if (keyIndex === uppKey.length - 1) {
          keyIndex = 0;
        } else {
          keyIndex++;
        }

      } else {
        result.push(uppMsg[i]);
      }

    } return this.type ?  result.join('') : result.reverse().join('');
  }

  encrypt(message, key) {
    return this.processor(message, key, 'encrypt');
  }

  decrypt(message, key) {
    return this.processor(message, key, 'decrypt');
  } 
}

module.exports = VigenereCipheringMachine;