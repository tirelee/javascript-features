const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(false === '0');