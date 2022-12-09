"use strict";

import { ReadTxtToArray, arraysEqual } from "./helper.js";

let input = ReadTxtToArray('Day4Input.txt');
// let input = ReadTxtToArray('sample.txt');

let count = 0;

for (let i = 0; i < input.length; i++){
  let subInputArr = input[i].split(',');
  let first = subInputArr[0].split('-');
  let second = subInputArr[1].split('-');
  let firstStart = Number(first[0]);
  let firstEnd = Number(first[1]);
  let secondStart = Number(second[0]);
  let secondEnd = Number(second[1]);

  // if second contains first

  if (secondStart <= firstStart && secondEnd >= firstStart){
    count++;
    console.log('1-- ', first, second);
    continue;
  }

  // if first contains second
  
  if (secondStart >= firstStart && secondStart <= firstEnd){
    count++;
    console.log('2-- ', first, second);
    continue;
  }
}

console.log('PART 1 COUNT:  ', count);

