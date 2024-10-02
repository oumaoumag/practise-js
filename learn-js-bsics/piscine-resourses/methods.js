/*
    Methods 

    Methods are a special kind of functions
    That are linked to some data.

    Each  type have it's own methods to help you deal common tasks
    Learn them, and use them.
    Read "The javascriptures" MDN to know all about them.

    To actually  use any mehods you can use . to access any of them just like
    normal property
    Them you can call them like normal functions\

    'pouet'.toUpperCase() // will return 'POUET'
*/

// Let's testout the examaple from before
console.log('pouet'.toUpperCase())
// here we call the string method toUpperCase
// We can acces it just like any object property
// But unlike a function, it takes no arguments
// It's using the source string as a context
// So it's like it had a hidden first argument that is the string itself
// A normal function call could have been: toUpperCase('pouet')
// But javaScript only gives us toUpperCase as a method so, we use that.

const baseStr = 'hey-this-is-fun'

// Some methods takes arguments, and we can use them from variables
console.log(baseStr.split('-'))
// Here we call split, which takes string that it will use to split our source
// It returns an Array of each string parts
// Try to play a bit with split, it's a very usefull method

// BUt the real fun comes when we start to chain them
console.log(baseStr.split('-').join('_'))
// SO here I split on dashes, it returns an array that I join with underscore 
// While split transform a string to an array,
// Join allow you to get from an Array to string

// We can easily convert a string to an Array of letters
// with a split on an empty string
console.log(baseStr.split(''))

// Likes we can use an empty string to join without separators
console.log(baseStr.split('-').join(''))
 
// Well from this point on they are pretty much like functions
// You need to use them to get the hang of it.

// Some work with split / join
// Capitalize

// after map reduce filter
// Jaden Smith Case

/**
 The more you know

 Methods are a part of OOP (object oriented programming)
 But we won't really use anything from OOP beside built-in methods

 First thing interesting to note is that all our data types have a Constructr

 Constructors are functions that are used to construct new data of this type 
 We rarely need them for our usual data types as they have a special syntax that do it for us.

 Constructors are: Boolean, Number, String, Array, Object, Some constructors contain functions like Arrays.isArray or Object.keys 
 those are just normal functions.

 But the shared methods of our data types are in a prototype.
 Which is juct an object at the property prototype of our function

 like so: String.prototype
 And agin, read "the javascriptures" MDN to get a detail list
 */