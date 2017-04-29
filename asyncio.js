var fs = require('fs');
var path = process.argv[2];

fs.readFile(
  path, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data.split('\n').length - 1);
  }
);


// var
//   fs  = require('fs');
//
// fs.readFile(
//   'a-text-file.txt',      //the filename of a text file that says "Hello!"
//   'utf8',                 //the encoding of the file, in this case, utf-8
//   function(err,text) {    //the callback
//     console.log('Error:',err);    //Errors, if any
//     console.log('Text:',text);    //the contents of the file
//   }
// );
// //Will this be before or after the Error / Text?
// console.log('Does this get logged before or after the contents of the text file?');
