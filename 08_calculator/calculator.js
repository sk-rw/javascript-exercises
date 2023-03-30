const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total,current) => total + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
}

const power = function(num, exponent) {
  return Math.pow(num, exponent);
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
