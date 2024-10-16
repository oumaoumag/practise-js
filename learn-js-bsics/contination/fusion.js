// Contcatinating Arrays :
// 1. Using `concat()` Method
//  - Can contatente two or more arrays
//  - Returns a new array that combines the elements of the original ones.
// - The elements are combineed in the order they are passed to the method

// Initial Arrays
const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];

// Concatenate arrays using concat()
const result = array1.concat(array2, array3);

console.log(result); 

// 2. Using the Spread Operator(...)
// - Spreads the elements of arrays into a new array.
// - Is a modern ES6 feature and is widely used to its simplicity.

// Initial arrays

const result2 = [...array1, ...array2, ...array3];

console.log(result2)
