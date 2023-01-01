const palindromes = function (string) {
  const toLower = string.toLowerCase().replace(/[\W]/g, "");
  const reversedWord = toLower.split("").reverse().join("");
  return reversedWord === toLower;
};

// Do not edit below this line
module.exports = palindromes;
