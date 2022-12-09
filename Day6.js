"use strict";

import { ReadTxtToArray, arraysEqual } from "./helper.js";

let input = ReadTxtToArray('Day6Input.txt')[0].split('');
// let input = ReadTxtToArray('sample.txt')[0].split('');

let map = {};

for (let j = 0; j < 14; j++){
  input[j] in map ? map[input[j]]++ : map[input[j]] = 1;
}


for (let i = 14; i < input.length; i++){
  let start = input[i];
  let end = input[i - 14];

  let sumValues=  Object.values(map).reduce((a, b) => a + b, 0);

  // console.log('1--', map)
  if (sumValues === 14 && Object.keys(map).length === 14){
    console.log('RESULT: ', i);
    break;
  }

  map[start] ? map[start]++ : map[start] = 1;

  map[end]--;
  if (map[end] === 0) delete map[end]
}

// not 4095
