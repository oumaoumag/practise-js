// https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true
'use strict';

// const fs = require('fs');

function mainModule() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => 
        parseInt(arrTemp, 10));
        const res = reverseArray(arr);
        console.log(res.join(' '));
}

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
    let reversed = []; 
    for ( let i = a.length-1; i >= 0; i-- ) {
        reversed.push(a[i]);
    }
    console.log(a);
    console.log(reversed);
    return reversed;
}
