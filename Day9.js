'use strict';

import { ReadTxtToArray, arraysEqual, create2dArray } from './helper.js';

// let input = ReadTxtToArray('Day9Input.txt');
let input = ReadTxtToArray('sample.txt');
// let grid = createGrid(input);
let start = [0, 0];
let arrOfKnots = Array(10).fill([0, 0]);

let tailLocation = start;
let visited = new Set();

visited.add(JSON.stringify(tailLocation));

for (let i = 0; i < input.length; i++) {
    // iterate through the directions
    let [dir, steps] = input[i].split(' ');
    let headLocation = arrOfKnots[0];
    
    
    // for loop to iterate through the steps
    for (let j = 0; j < Number(steps); j++) {
        let previousKnotLastPosition = headLocation;
        let tmp;
        
        // console.log('1-- ', j);

        // move head position
        arrOfKnots[0] = returnNewHeadPosition(dir, headLocation);
        
        // iterate through all other knots
        for (let k = 1; k < arrOfKnots.length; k++){
            let currKnotPos = arrOfKnots[k];
            let prevKnotPos = arrOfKnots[k-1];
            
            // if knot next to last knot, continue
            // console.log(i, j, checkTailNexToHead(headLocation, tailLocation));
            if (checkTailNexToHead(prevKnotPos, currKnotPos)) {
                continue;
            }

            tmp = currKnotPos;
            currKnotPos = previousKnotLastPosition;
            previousKnotLastPosition = tmp;
            
            
            // store visited positions of tail
            if (k === 9) visited.add(arrOfKnots[9]);
        }

    }

}

console.log('VISITED SIZE: ', visited.size);


function returnNewHeadPosition(dir, [a, b]) {
    switch (dir) {
        case 'L':
            b--;
            break;
        case 'R':
            b++;
            break;
        case 'U':
            a--;
            break;
        case 'D':
            a++;
            break;
    }

    return [a, b];
}


function checkTailNexToHead([a, b], [x, y]) {
    if (Math.abs(a - x) > 1 || Math.abs(b - y) > 1) {
        return false;
    }
    return true;
}

function createGrid(input) {
    let longest = 0;
    let arr;

    for (let i = 0; i < input.length; i++) {
        let number = input[i].split(' ').pop();
        longest += Number(number);
    }

    // console.log('1--', longest);

    // arr = Array(2 * longest).fill(null).map(() => Array(2 * longest).fill(undefined));

    return longest;
}