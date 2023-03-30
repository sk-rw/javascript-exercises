const palindromes = function (str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  

// Do not edit below this line
module.exports = palindromes;
