'use strict';

import { ReadTxtToArray, arraysEqual } from './helper.js';

let input = ReadTxtToArray('Day7Input.txt');
// let input = ReadTxtToArray('sample.txt');

class Node {
  constructor(name, size, parentNode) {
    this.name = name;
    this.folderSize = 0;
    this.subfolders = {};
    this.files = {};
    this.fileSize = Number(size);
    this.parentNode = parentNode;
  }

  addSubfolder(name, parent) {
    let subfolder = new Node(name, 0, parent);
    this.subfolders[name] = subfolder;
  }
  addFile(name, size) {
    let file = new Node(name, size);
    this.files[name] = file;
    this.folderSize += Number(size);
  }
}

let root = new Node('root', 0, null);
let total = 0;
let map = {};
let min = Infinity;


DfsBuild(root, 1);

console.log('1--', map);

DfsTotal(root);

console.log('2-- ', total);

for (const [key, value] of Object.entries(map)) {
  if (key === 'root') continue;
  let remaining = 70000000 - root.folderSize; // 29,086,555
  let diff = 30000000 - remaining; // 913,445
  if (value >= diff && value < min) min = value;
}

console.log('3-- ', min);
// 952823 to high






function DfsTotal (currNode) {
  if (currNode.folderSize <= 100000){
    total += Number(currNode.folderSize);
  }

  for (const [key, node] of Object.entries(currNode.subfolders)) {
    DfsTotal(node);
  }
}

function DfsBuild(currNode, i) {
  if (i >= input.length){
    return;
  }

  let terminalOutput = input[i];

  if (terminalOutput.indexOf('..') > -1) {
    DfsBuild(currNode.parentNode, i + 1);
  } else if (terminalOutput.indexOf('$ ls') > -1) {
    for (let j = i + 1; j < input.length && input[j].indexOf('$') === -1; j++) {
      let currOutput = input[j].split(' ');
      let folderOrSize = currOutput[0];
      let name = currOutput[1];

      if (currOutput.indexOf('dir') > -1) {
        currNode.addSubfolder(name, currNode);
      } else {
        if (j > 505) {
          // console.log('1-- ', j, currNode);
        }
        currNode.addFile(name, folderOrSize);
      }
      i = j;
    }

    DfsBuild(currNode, i + 1);

  } else if (terminalOutput.indexOf('$ cd') > -1) {
    let nextFolder = terminalOutput.split(' ')[2];
    let nextNode = currNode.subfolders[nextFolder];

    DfsBuild(nextNode, i + 1);
  }

  currNode.folderSize = 0;
  // loop over subfolders, adding to size of curr folder.
  for (const [key, value] of Object.entries(currNode.subfolders)) {
    currNode.folderSize += Number(value.folderSize);
  }
  // loop over files, adding to size of curr folder.
  for (const [key, value] of Object.entries(currNode.files)) {
    currNode.folderSize += Number(value.fileSize);
  }

  map[currNode.name] = currNode.folderSize;
  return;
}

