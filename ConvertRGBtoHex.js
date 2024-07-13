const merge = [...new Set([...a, ...b])];
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const reversedString = str => str.split('').reverse().join('');