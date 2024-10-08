// Comments

var number = 5; // in-line comment

/*
 This is a multi-line comment
 */
number = 9;

// Data Types and Variables

/* Data Types: 
undified*, null, boolean, string, symbol, number, and object*/

/* Variable Declation:
   -  A variable allows computers store and manipulate data in a dynamic fashion.
    - It's basically a lable to point to the data
    - A variable is almost like a box, and you can fill it with the data that you want.
- Can be declare in two ways:-
*/

// 1. The 'Var' keyword 
//  - Is used throught the program

var myName = "Beau";

myName = 8;

console.log(myName);

// 2.  THe 'let' keyword
//  - Is only used within the scope of where you decalared that

let ourName = "freeCodeCamp";
console.log(ourName)

// 3. The 'const' Keyword
//  - Is a variable that should never be changed, If you do try to change it you'll get an error
const pi = 3.14;
console.log(pi)
 
/* Storing Values with Assignment Operator
*/
// Declaring a variable
var a;

// Assigning a Varibale
a = 7

// Assigning and declaring variables
var b = 2;

// Initializing VAriables w/ Assignment Operator
// - Inializing a variable to an initial value at the same time it's declared.
var a = 9;

// Initialized three variables
var a;
var b;
var c;
// Before we do anything to this variables they are uninitialized, there
// values are undefined and have not been set to anything
// Do not change the code below this line


a = 5; 
b = 10;
c = "I am a ";
// Now they are initialzed coz we have assigned them values

a = 1 + 1;
b = b + 5;
c = c + " String!";
console.log(a,"\n",b,"\n",c,)

/* Case Sensitivitu in Variables
- Variable names and function names in JavaScript are case sensitive
- That means the capitalization matters
*/


// Declarations
var StdUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// // Assignments
// STUDLYCAPVAR = 10;
// PRoperCAmelCAse = "A String";
// tITLEcASEoVER = 9000;


// The variables decalared in the Example above are different from the the Assignmet variables, even
// if the letters are the same but the casing is different so it will run an error when you try to run 
// the code because the second banch are not declared.

// ADDING NUMBERS
// - Adding numbers is pretty straight forward just use the plus operator

var sum = 10 + 10;
console.log(sum)

// SUBTRACTING NUMBERS
// - To subtract you use the subtraction sign '-'
var difference = 45 - 33;
console.log("difference = ",difference)

// MULTIPLYING NUMBERS
// Multplication uses the '*' Asterick
var product = 8 * 10;
console.log("Product = ", product)

// DIVISION OF NUMBERS
// -Division uses the '/' slash symbol
var quotient = 66 / 33;
console.log("Quotient", quotient)

// INCREMENTING NUMBERS
// To increment a number means to add 1 to it.
var myVar = 97;

myVar = myVar + 1;
console.log("myVar = ", myVar)

// A quicker way
myVar++;
console.log("myVar = ", myVar)

// Decrimenting Numbers
myVar--;
console.log("myVar = ", myVar)

// DECIMAL NUMBERS
// - Are sometimes refered to as floating flaots
var ourDecimal = 5.7;
console.log("ourDecimal = ", ourDecimal)

// Anything with a point in it is decimal
var myDecimal = 0.009;
console.log("myDecimal = ", myDecimal)

// MULTIPLY DECIMALS
// - Is the same as multiplying intergers
var product = 2.0 * 0.5;
console.log("Product = ", product)

// DIVIVDE DECIMAL
// - same as division of intergers
var quotient = 4.4 / 2.0;
console.log("quotient = ", quotient)

// FNDING THE REMAINDER/ MUDULO
// - uses the '%' operator
// Commonly used to determine if a number is even or odd
var remainder;
remainder = 11 % 3;

// COMPOUND ASSINGMENTWITH AUGMENTED ADDITION
var a = 3;
var b = 17;
var c = 12;

a = a + 12;
b = 9 + b;
c = c + 7;
console.log(a,"\n",b,"\n",c,)





