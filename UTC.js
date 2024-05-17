const lastElement = arr => arr[arr.length - 1];
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());