const caesar = function(str, shift) {
    // ensure the shift is within the range of 0-25
    shift = shift % 26;
    
    // convert the string to an array of characters
    const chars = str.split('');
    
    // map each character to its shifted counterpart, retaining capitalization
    const shifted = chars.map(char => {
      if (char.match(/[a-z]/i)) { // if it's a letter
        const code = char.charCodeAt(0) + shift;
        if ((char >= 'A' && char <= 'Z' && code > 90) || (char >= 'a' && char <= 'z' && code > 122)) { // if it goes beyond Z or z, wrap around
          return String.fromCharCode(code - 26);
        } else if ((char >= 'A' && char <= 'Z' && code < 65) || (char >= 'a' && char <= 'z' && code < 97)) { // if it goes below A or a, wrap around
          return String.fromCharCode(code + 26);
        } else {
          return String.fromCharCode(code);
        }
      } else { // if it's not a letter, leave it alone
        return char;
      }
    });
    
    // join the shifted characters back into a string
    return shifted.join('');
  }


// Do not edit below this line
module.exports = caesar;
