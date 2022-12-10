'use strict';

import { ReadTxtToArray, arraysEqual, create2dArray } from './helper.js';

let input = ReadTxtToArray('Day8Input.txt');
// let input = ReadTxtToArray('sample.txt');

let grid = create2dArray(input);
let height = grid.length;
let width = grid[0].length;
let totalVisible = 2 * height + 2 * (width - 2);
let maxScenicScore = 0;

console.log('1-- ', grid)

for (let i = 1; i < width - 1; i++){
    for (let j = 1; j < height - 1; j++){
        // if (isVisibleLeft(i, j) || isVisibleTop(i, j) || isVisibleBottom(i, j) || isVisibleRight(i, j)){
        //     totalVisible++;
        // }
        
        let currScenicScore = (isVisibleLeft(i, j) * isVisibleTop(i, j) * isVisibleBottom(i, j) * isVisibleRight(i, j));
        console.log('2-- ', i, j, currScenicScore);
        
        maxScenicScore = Math.max(maxScenicScore, currScenicScore);
    }
}

console.log('TOTAL VISIBLE: ', totalVisible);
console.log('maxScenicScore: ', maxScenicScore);
// 157251 too low.

/* -------------- */

function isVisibleLeft (x, y) {
    let score = 1;
    for (let i = x - 1; i > 0; i--){
        if (grid[x][y] <= grid[i][y]) break;
        score++;
    }
    console.log('left-- ', score);

    return score;
}
function isVisibleTop (x, y) {
    let score = 1;
    for (let i = y - 1; i > 0; i--){
        if (grid[x][y] <= grid[x][i]) break;
        score++;
    }

    console.log('top-- ', score);

    return score;
}
function isVisibleBottom (x, y) {
    let score = 1;
    for (let i = y + 1; i < height - 1; i++){
        if (grid[x][y] <= grid[x][i]) break;
        score++;
    }
    console.log('bottom-- ', score);
    return score;
}
function isVisibleRight (x, y) {
    let score = 1;
    for (let i = x + 1; i < width - 1; i++){
        if (grid[x][y] <= grid[i][y]) break;
        score++;
    }
    console.log('right-- ', score);
    return score;
}