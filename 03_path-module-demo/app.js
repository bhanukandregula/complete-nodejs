// Require the builtin module PARH from node.
const path = require('path');

// Parse will give you the complete path details of specified file.
var pathObj = path.parse(__filename);

console.log(pathObj);