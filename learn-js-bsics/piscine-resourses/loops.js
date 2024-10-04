/* 
    While 

    While is the first loop statement that we will learn to use.
    It allows you to repeat a block of code while the condition is truthy.

    Here is the basic syntax :

    while (condition) {
        // code
    }

*/

// // The most common while loop is a simple counter
// let count = 0 // `count` value will change so it needs to declared with let !

// while (count < 10) {
//     // count += 1 // we update the value of count to it's previous value + 1
//     count = count + 1
//     console.log('counter at', count)
//     // Here we add all the code we want to repeat
// }

// Let's create a function that add the given arguments 5 times with while
const times5 = (n) => {
    let result = 0 // create for holding the result or our operation
    let counter = 0 // create a counter to keep track of how many loops we did

    while (counter < 5) {
        // check the condition, see if we have made enough loops
        counter += 1 // increament our loop counter variable by one
        result += n // add our given valu 'n` to our result
    }
    // loop is over !
    return result // return our result
}

console.log(times5(5))

/* 
    for..of

    For..Of is a cleaner way to iterate over an iterable (Array, String, etc...)
    It's the most usefull of type of loops

    Here is the basic syntax :
    for (const elemtent of iterable) {
        //
    }
*/

// Let's see how to we could count how many letter o are in this sentence :
const sentence = 'How many are you today ?'


function countO(str){
    let countOfTheLetterO = 0 // this will hold out totall

// for each element of our string 
// we assign it's value to a const variable named letter
for (const letter of str) {
    // our loop will stop on reaching the end 
    if (letter === 'o') {
        // we have a match ! better add it to our totak now...
        countOfTheLetterO = countOfTheLetterO + 1
    }
    
}
return countOfTheLetterO
}

console.log(countO(sentence))