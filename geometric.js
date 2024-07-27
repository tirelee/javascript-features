const symbolsPath = path.join(buildOutputPath, 'symbols');
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const stringReverse = str => str.split("").reverse().join("");