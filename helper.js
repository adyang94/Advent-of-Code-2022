import { createRequire } from "module";
const require = createRequire(import.meta.url);

function ReadTxtToArray (fileName) {
  var fs = require('fs');
  var array = fs.readFileSync(`${fileName}`).toString().split("\n");
  for(let i in array) {
      // console.log(i, array[i]);
  }

  return array;
}

function arraysEqual(a, b) {
  console.log('Comparing arrays');

  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function create2dArray(input) {
  // Input is array with each index being the line of the provided problem input.
  let finalArr = [];

  for (let i = 0; i < input.length; i++){
    finalArr.push(input[i].split(''));
  }

  return finalArr;

}



export {ReadTxtToArray, arraysEqual, create2dArray}