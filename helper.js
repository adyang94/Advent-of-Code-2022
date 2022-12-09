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



export {ReadTxtToArray, arraysEqual}