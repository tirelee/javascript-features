const reversedString = str => str.split('').reverse().join('');
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const toggleBool = () => (bool = !bool);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
console.log("1 || 2 = "+(1 || 2));
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());