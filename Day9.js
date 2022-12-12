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
    console.log('1--');

    // for loop to iterate through the steps
    for (let j = 0; j < Number(steps); j++) {
        let headLocation = arrOfKnots[0];
        let previousKnotLastPosition = headLocation;
        let tmp;

        // console.log('1-- ', j);

        // move head position
        arrOfKnots[0] = returnNewHeadPosition(dir, headLocation);

        // iterate through all other knots
        for (let k = 1; k < arrOfKnots.length; k++) {
            let currKnotPos = arrOfKnots[k];
            let prevKnotPos = arrOfKnots[k - 1];

            // if knot next to last knot, continue
            // console.log(i, j, checkTailNexToHead(headLocation, tailLocation));
            if (checkKnotsAreNeighbors(prevKnotPos, currKnotPos)) {
                continue;
            }

            for (let subarr of [[-1, 1], [1, -1], [1, 1], [-1, -1], [0, -1], [0, 1], [-1, 0], [1, 0]]) {
                let nextKnotPos = arrOfKnots[k + 1];
                let [x, y] = subarr;
                let potentialKnotPos = [Number(x) + currKnotPos[0], Number(y) + currKnotPos[1]];

                if (!nextKnotPos) break;
                console.log('2-- ', checkKnotsAreNeighbors(prevKnotPos, potentialKnotPos) && checkKnotsAreNeighbors(potentialKnotPos, nextKnotPos));

                if (checkKnotsAreNeighbors(prevKnotPos, potentialKnotPos) && checkKnotsAreNeighbors(potentialKnotPos, nextKnotPos)) {
                    previousKnotLastPosition = potentialKnotPos;
                    break;
                }
            }

            tmp = currKnotPos;
            currKnotPos = previousKnotLastPosition;
            previousKnotLastPosition = tmp;

            arrOfKnots[k] = currKnotPos;


            // store visited positions of tail
            if (k === 9) visited.add(JSON.stringify(arrOfKnots[9]));
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


function checkKnotsAreNeighbors([a, b], [x, y]) {
    if (Math.abs(a - x) > 1 || Math.abs(b - y) > 1) {
        return false;
    }
    return true;
}

function findBestNextSpot() {

}