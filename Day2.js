/* 

A = rock
B = paper
C = scissor

we think:
X = rock
Y = paper
Z = scissor

total score = sum of scores each round

points:
rock = 1
paper = 2
scissor = 3

lose = 0
draw = 3
win = 6

*/
"use strict";

import { ReadTxtToArray, arraysEqual } from "./helper.js";


let input = ReadTxtToArray('Day2Input.txt');
// let input = ReadTxtToArray('sample.txt');
let total = 0;
let shapePointsMap = {
  "rock": 1,
  "paper": 2,
  "scissor": 3
};
let shapeMap = {
  "A": "rock",
  "X": "rock",
  "B": "paper",
  "Y": "paper",
  "Z": "scissor",
  "C": "scissor"
};

for (let i = 0; i < input.length; i++) {
  let hands = input[i].split(" ");
  let oppChoice = shapeMap[hands[0]];
  let yourChoice = shapeMap[hands[1]];
  let oppHandPts = shapePointsMap[oppChoice];
  let yourHandPts = shapePointsMap[yourChoice];
  let subtotal = 0;

  subtotal += yourHandPts;

  if (yourHandPts > oppHandPts && (yourHandPts === 2 || oppHandPts === 2)) {
    subtotal += 6;
  } else if (yourHandPts === oppHandPts) {
    subtotal += 3;
  } else if (yourHandPts === 1 && oppHandPts === 3) {
    subtotal += 6;
  }

  total += subtotal;
}

console.log('PART 1 TOTAL: ', total);

// Not:  10656 too low

/* -------------------------- PART 2 ---------------------------- 
*/

let roundPts = {
  "X": 0,
  "Y": 3,
  "Z": 6
}
total = 0;

for (let i = 0; i < input.length; i++) {
  let hands = input[i].split(" ");
  let oppChoice = hands[0];
  let roundResult = hands[1];
  let subtotal = 0;

  switch (true) {
    case arraysEqual([oppChoice, roundResult], ["A", "X"]):
      subtotal += 0 + 3;
      break;
    case arraysEqual([oppChoice, roundResult], ["A", "Y"]):
      subtotal += 3 + 1;
      break;
    case arraysEqual([oppChoice, roundResult], ["A", "Z"]):
      subtotal += 2 + 6
      break;
    case arraysEqual([oppChoice, roundResult], ["B", "X"]):
      subtotal += 1 + 0
      break;
    case arraysEqual([oppChoice, roundResult], ["B", "Y"]):
      subtotal += 2 + 3
      break;
    case arraysEqual([oppChoice, roundResult], ["B", "Z"]):
      subtotal += 3 + 6
      break;
    case arraysEqual([oppChoice, roundResult], ["C", "X"]):
      subtotal += 2 + 0
      break;
    case arraysEqual([oppChoice, roundResult], ["C", "Y"]):
      subtotal += 3 + 3
      break;
    case arraysEqual([oppChoice, roundResult], ["C", "Z"]):
      subtotal += 1 + 6
      break;
    default:

  }

  total += subtotal;
}

console.log('PART 2 TOTAL: ', total)