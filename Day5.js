"use strict";

import { ReadTxtToArray, arraysEqual } from "./helper.js";

let input = ReadTxtToArray('Day5Input.txt');
// let input = ReadTxtToArray('sample.txt');

let stacksInput = input[0];
let directionInput = input[1];
let stacks = createStacks(stacksInput);
let directions = createDirections(directionInput).split('\n');
let result = [];

console.log(stacks, directions);

for(let i = 0; i < directions.length; i++){
  let directionsArr = directions[i].split(',');
  let numToMove = Number(directionsArr[0]);
  let start = directionsArr[1];
  let end = directionsArr[2];

  if (!numToMove) continue;

  let temp = stacks[start].slice(-1 * numToMove);
  stacks[end] = [...stacks[end], ...temp];

  for (let j = 0; j < numToMove; j++){
    if (stacks[start].length === 0) continue;
    stacks[start].pop();
    // stacks[end].push(crate);
    console.log('5--', j, numToMove.length);
  }

  console.log('4--', stacks);
}

for (const [key, value] of Object.entries(stacks)) {
  result.push(value.pop());
}

console.log('RESULT: ', result.join(''));



function createDirections(directionInput) {
  let newDirInput = directionInput
    .replaceAll(' ', '')
    .replaceAll('move', '')
    .replaceAll('from', ',')
    .replaceAll('to', ',')
  console.log('3.1--', newDirInput)

  return newDirInput;
}

function createStacks(stacksInput) {
  let obj = {};
  let newInput = stacksInput.split('\n');

  for (let i = 0; i < newInput.length; i++){
    let inputLine = newInput[i].split(' ');
    let stack = inputLine[0];
    let crates = inputLine[1];

    if (crates){
      obj[stack] = [];
      obj[stack].push(...crates.split(''));
    }
  }
  console.log('2--', obj);
  return obj;
}