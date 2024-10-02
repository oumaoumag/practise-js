/* 
    Function

    The principle of a function is to transform data

    it has arguments (also caled parameters)
    That is the input values of your functions

    It has a body, that will do a bunch of operations using those
    arguments and return the processed result

    We symbolize this transformation with the fat arrow `=>` operator so 
    simple function look like that: (input) => result

    Functions are magical and allow you to express powerfull logic but
    before doing that, let's try some simple operations using functions
*/

// You have been using `console.log` since the beginning which is a function
// In JavaScript, functions are values too
// So to use them we need ti declare them, and using for that we use a variable

// Let's see an example with a function that add 5 
const add5 = (n) => n + 5
 /* let's break this down
 fisrst I declare the constant variable identified by add5 and set it's value to our freshly made function
 (n) here is the argument
 then the => tells us this is a function declaration and following is the instruction
 that will be executed so here we tell it to use what ever value is given to 'n'
 and apply the operator `+` on it with the value 5
 */

 /* How to apply functions 
 You've been calling functions since the begining with console.log
  */
 console.log(add5(13))
 console.log(add5(20))
 console.log(add5(30))

 // The paren `(13)` are the mark that the function is called, [] is to access () to call 
 // (calling a functions is synonymous with executing it) 
 // () between the paren we pass the values of the functions' arguments
 // So here 13 become the value of `n` for this call, n + 5 become 13 + 5 
 // and returns the result of the operation, so 18
 // Functions can take and return any values

 // So what happen if I give a string to add5 :
 console.log(add5('pouet'))
 // `n` became 'pouet', so we did 'pouet', so it converted 5 to a string and concatenated them!
 // But if you can,  it's preferable always give and return the same types of values with your functions
 // This is way JavaScript optimises the, for you
 // and it makes the code more predictable, which is good.
 
 // let's try a function that takes 2 arguments
 // we just have to separate them by a comma, like values in arrays
 const multiply = (a,b) => a * b
 // Same this to pass 2 arguments when you call the function

 console.log(multiply(5, 10))
 console.log(multiply(75, 1.5))
 console.log(multiply(75, -1.5))

 // we can store the return values of functions in variables
 const result = multiply(100, 5)

 console.log(result)
 
 // we can also use variables as function arguments
 console.log(multiply(result, 15))
 console.log(multiply(result, result))

 // But that's not it we can nest function calls!
 console.log(multiply(add5(5), 2))
 /* So what's happening here  is that JavaScript read this line and the functions in order
but it needs the paren to be closed before the call is executed 
so here the first multiply is read but before the call is over another function call begins
, add5 with the value 5.
now seeing the closing paren it's return value, 10
JavaScript is now left with multiply(10, 2), which return 20!    */

// More nesting !!!!
console.log(multiply(multiply(5, add5(5)), multiply(2, add5(10))))

// We can also call other functions from a function !
// let's use that to create add10 just using add5;
const add10 = (n) => add5(add5(n))

console.log(add10(10))

// And just like that build up complexity
const op1 = (n) => add10(multiply(n, add5(n)))
console.log(op1(10))

/*

### Exercises proposal

sub5 // substract five to the given argument and return the result
sub // takes 2 arguments and return the substraction of the first from the second
getFirst // return the first element of an array
getSecond // return the second element of an array
getLast // return the last element of an array
over0 // using Math.max, limit numbers to 0
notOver9000 // using Math.min, limit the number to 9000
clamp9000 // clamp the given value between 0 and 9000
*/
console.log()
console.log("Exercise :- ")

const sub5 = (n) => n - 5
console.log(sub5(10))

console.log()

const sub = (a,b) => a - b
console.log(sub(10,5))
console.log()

const arr = [1,2,3,4]

function getFirst(arr) {
    return arr[0]
}

console.log(getFirst(arr))
console.log()

function getLast(arr) {
    return arr[arr.length - 1]
}

console.log(getLast(arr))



