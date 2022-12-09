import { ReadTxtToArray } from "./helper.js";

var fs = require('fs');
var array = fs.readFileSync('Day1Input.txt').toString().split("\n");
for(i in array) {
    // console.log(i, array[i], Number(array[i]));
}

let currMax = 0;
let submax = 0;
let res;
let arr = [];

for (let i = 0; i < array.length; i++){
  // console.log('1-- ', array[i], submax);
  let val = Number(array[i])

  if (val > 0){
    submax += val;

    if (submax > currMax) {
      currMax = submax;
    };
  } else {
    arr.push(submax);
    submax = 0;
  }
}

arr.push(submax);


arr.sort((a, b) => b - a);

console.log(arr);

res = arr.slice(0, 3).reduce((a, b) => a + b)

console.log('answer: ', res);

// Not 1821, 1822, 267, 6