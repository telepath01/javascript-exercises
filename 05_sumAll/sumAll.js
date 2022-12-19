const sumAll = function (int1, int2) {
  let addArr = [];
  let initialValue = 0;
  for (let i = int1; i < int2 + 1; i++) {
    addArr.push(i);
  }
  let arrSum = addArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return arrSum;
};

// Do not edit below this line
module.exports = sumAll;
