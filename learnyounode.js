// Instructions: learnyounode print
// Execute: learnyounode run learnyounode.js
// Verify: learnyounode verify learnyounode.js

// console.log("HELLO WORLD");

// console.log(process.argv);

// Baby Steps
var array = process.argv.slice(2);
// var sum = function(arr) {
//   // var result = 0;
//   // arr.forEach(function(el) {
//   //   result += parseInt(el);
//   // });
//   //
//   // return result;
// };

var sum = function(arr) {
  return arr.reduce(function(result, el) {
    return result + parseInt(el);
  }, 0);
};

// console.log(array.reduce(function(result, el) {
//   return result + parseInt(el);
// }, 0));

console.log(sum(array));
