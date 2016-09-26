var parse = require('./JSONConcat.js');
var fs = require('fs');

var path = __dirname + "\\data";
fs.writeFileSync("output.json", JSON.stringify(parse(path)));
