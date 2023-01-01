const add = function (a, b) {
  let addition = a + b;
  return addition;
};

const subtract = function (a, b) {
  let minus = a - b;
  return minus;
};

const sum = function (arr) {
  const sumAll = arr.reduce((a, b) => a + b, 0);
  return sumAll;
};

const multiply = function (array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum = sum * array[i];
  }
  return sum;
};

const power = function (a, b) {
  const powerValue = Math.pow(a, b);
  return powerValue;
};

const factorial = function (n) {
  let answer = 1;
  if (n === 0 || n === 1) {
    return answer;
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
