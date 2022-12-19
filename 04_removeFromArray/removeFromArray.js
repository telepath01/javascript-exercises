const removeFromArray = function (arr, arg) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === arg) {
      arr.splice(i, 1);
    } else i++;
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
