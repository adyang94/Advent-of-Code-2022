"use strict";

import { ReadTxtToArray, arraysEqual } from "./helper.js";

// let input = ReadTxtToArray('sample.txt');
let input = ReadTxtToArray('Day3Input.txt');
let total = 0;

for (let i = 0; i < input.length; i++) {
  let half = input[i].length / 2;
  let firstHalf = input[i].slice(0, half);
  let secondHalf = input[i].slice(half);
  let set = new Set();
  let duplicate;
  let subtotal = 0;

  for (let j = 0; j < firstHalf.length; j++) {
    set.add(firstHalf[j]);
  }

  for (let k = 0; k < secondHalf.length; k++) {
    if (set.has(secondHalf[k])) {
      duplicate = secondHalf[k];
    }
  }

  subtotal = calculatePriority(duplicate);

  total += subtotal;
}
console.log('TOTAL: ', total);

/* -------------- PART 2 --------- */
total = 0;
let set1 = new Set();
let set2 = new Set();
let duplicate;

for (let i = 0; i < input.length; i++) {

  console.log((i + 1) % 3);
  if ((i + 1) % 3 === 0) {
    let sack = input[i];
    console.log(set1, set2)

    for (let j = 0; j < sack.length; j++) {
      if (set1.has(sack[j]) && set2.has(sack[j])) {
        duplicate = sack[j];
        console.log(duplicate)
        total += calculatePriority(duplicate);
        break;
      }
    }

    set1 = new Set();
    set2 = new Set();

  } else if ((i + 1) % 3 === 1) {
    let sack = input[i];
    for (let j = 0; j < sack.length; j++) {
      set1.add(sack[j])
    }
  } else if ((i + 1) % 3 === 2) {
    let sack = input[i];
    for (let j = 0; j < sack.length; j++) {
      set2.add(sack[j])
    }
  }

}
console.log('PART 2 TOTAL: ', total);

// NOT: 3719 too high








function calculatePriority(char) {
  let subtotal;
  if (char === char.toUpperCase()) {
    subtotal = char.charCodeAt(0) - 38;
  } else {
    subtotal = char.charCodeAt(0) - 96;
  }

  return subtotal;
}