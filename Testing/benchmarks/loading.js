const packageName = '@fjrodafo/free-port';
const startTime = process.hrtime();
const myPackage = require(packageName);
const endTime = process.hrtime(startTime);
const loadTimeInMilliseconds = endTime[0] * 1000 + endTime[1] / 1e6;

console.log(myPackage);
console.log(`'${packageName}' loading time: \x1B[1m${loadTimeInMilliseconds.toFixed(2)}\x1B[22m ms`);
