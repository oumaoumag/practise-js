// https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true
'use strict';

// const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    mainModule();
});

function readLine() {
    return inputString[currentLine++];
}

/*
* The function 'reverseArrsy' returns an INTEFER_ARRAY.
* The function accepts INTEGER_ARRAY as a parameter.
*/

function reverseArray(a) {
    // TODO
}
