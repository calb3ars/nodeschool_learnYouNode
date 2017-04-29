// read file
// count and print number of \n

var fs = require('fs');
var path = process.argv[2];


var stringBuffer = fs.readFileSync(path).toString();

var split = function(str) {
  return (str.split('\n').length - 1);
};

console.log(split(stringBuffer));
