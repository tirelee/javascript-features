console.log(1 +  "2" + "2");
const results = await Promise.all(resultingPromises);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);