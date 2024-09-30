// lines starting with two slashes are comments.
// Comments allow you to annotate your code with text that will be ignored by javascript,
// it's for keeping notes and helps to clarify code

/* To avoid adding // before each lines
    Multiple comments start with slash-star,
    and end with star-slash
 */

/* 
    Primitives and Operators
*/

// Booleans are the simplest type
console.log(true)
console.log(false)

// Numbers
console.log(42)
console.log(21 + 21)
console.log(21 * 2)
console.log(84 / 2)
console.log(1042 % 50)
console.log(2.1 * 10 + 21)
console.log(4.2 * (5 + 5)) // Precedence is enforced with parentheses.

// Strings are with ', ", or `
console.log('Hello World!')
console.log("I'm such a nice boy") // but you may use " if your string contains '

// if you need to have a quote in a string you can escape it with a backslash \
console.log("It's time to escape !!")
console.log('Hello My name is \"Godwin\"')
console.log('Hello' + 'World!')
console.log('Hello\nWorld!')
console.log(`Hello
World!`) // only works with backtics

// There's also `null` and `undefined`.
console.log(null) // Used to indicate a deliberate non-value
console.log(undefined) // used to indicate a value is not currently present
// (although `undfined` is usually a value itself)
// It is recommended to avoid using null as much as possible and always use undefined

// You may mix types, but results may not be what you expect
console.log('21' + 21)
console.log('21' * 2)
console.log('21' * true) // true is coerced to be the number 1
console.log('21' * false) // false become the number 0

// When JavaScript can't compute a number it returns NaN (stands for 'Not a NuMBER')
console.log(NaN)
console.log('21' * 'pouet')

// Infinity is another special number
console.log(Infinity)
console.log(1 / 0)
console.log(-Infinity) // it can be negative
console.log(-1 / 0)

// Comparisons always return a boolean :

// Equality is === 
console.log(1 === 1) // true
console.log(1 === 2) // false

// Inequality is !== 
console.log(1 !== 1) // = false
console.log(1 !== 2) // = true

// You can use the Negation ! symbol to get the inverse boolean of any valiue
console.log(!true) // = false
console.log(!false) // = true

// Greater that and lesser than
console.log(1 < 10) // = true
console.log(1 > 10) // = false 
console.log(2 <= 2) // = true
console.log(2 >= 2) // = true 

// and it works for strings
console.log('a' < 'b') // = true
console.log('aba' < 'abc') // = true

// THE MORE YOU KNOW :

// Non boolean values are either 'truthy' or falsy'



/*
    Variables
*/
// A variable allow you to store any value at the given identifier
// To achieve such feat we first need to declare our variable
// We do that using the keyword `let` and then ick an identifier of our liking 
let pouet
console.log(pouet)
// Now the identifier pouet can be use in the the rest of the code 
// but we didn't give any value to our variable so showing it's value 
// wll output undefined