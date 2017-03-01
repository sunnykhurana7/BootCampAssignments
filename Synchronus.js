var fs = require('fs');
var contents = fs.readFileSync('./package.json');

var lines = contents.toString().split('\n').length - 1;

console.log('Total Number of Lines Are :->' + lines);
