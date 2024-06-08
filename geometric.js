const appName = getAppName(channel);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];