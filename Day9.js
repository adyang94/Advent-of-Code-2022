'use strict';

import { ReadTxtToArray, arraysEqual, create2dArray } from './helper.js';

// let input = ReadTxtToArray('Day9Input.txt');
let input = ReadTxtToArray('sample.txt');
let grid = createGrid(input);
let start = [grid.length / 2, grid.length / 2];
let headLocation = start;
let tailLocation = start;

console.table(grid);

for (let i = 0; i < input.length; i++){
    let [dir, steps] = input[i].split(' ');

    
}




function checkTailNexToHead(a, b, x, y) {

}


function createGrid(input) {
    let longest = 0;
    let arr;

    for (let i = 0; i < input.length; i++){
        let number = input[i].split(' ').pop();
        longest += Number(number);
    }

    console.log('1--', longest);

    arr = Array(2 * longest).fill(null).map(() => Array(2 * longest).fill(undefined));

    return arr;
}