const fibonacci = function (num) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  num = Number(num);
  if (num === 1) return 1;

  if (num >= 0) {
    for (let i = 1; i < num; i++) {
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
  } else if (num < 0) {
    return "OOPS";
  }

  return nextTerm;
};

// Do not edit below this line
module.exports = fibonacci;
