// require the OS module.
const os = require('os');

// totalmem() and freemem() are the default functions on OS module.
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log('Free Memory: ' + freeMemory);

console.log();
// This is a way to print with Template String.
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);