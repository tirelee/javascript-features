var DELIM_SIZE = 4;
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;