const convertToCelsius = function (degree) {
  degree = (degree - 32) * 0.556;
  const celsiusFixed = Number(degree.toFixed(0));
  return celsiusFixed;
};

const convertToFahrenheit = function (degree) {
  degree = degree * 1.8 + 32;
  const fahrenheitFixed = Number(degree.toFixed(0));
  return fahrenheitFixed;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
