var fs = require('fs');

var path = process.argv[2];
var ext = "." + process.argv[3];
var extLen = ext.length;

fs.readdir(path, (err, list) => {
  if(err) {
    console.log(err);
  }
  list.forEach(file => {
    if(file.slice(-(extLen)) === ext) {
      console.log(file);
    }
  });
});
