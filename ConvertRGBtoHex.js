console.log( "A" - "B" + 2);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const uniqueArray = arr => [...new Set(arr)];