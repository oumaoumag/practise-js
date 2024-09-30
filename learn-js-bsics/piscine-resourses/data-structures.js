// Data structures allow us to structure and organise multiple primitive data

/*
Object

Objects are the most common data structures in JavaScript
It is the base to all other data structures

They hold properties 
A property is a key / value pair

The key is a string and we associate it to a vlu, very much like variables

We usse the curly braces `{}` to create an object
*/

console.log({}) // loggin an empty object

// To create a property we use the colon `:`
// The first string is a key, and after the colon is the value
console.log({ 'awsome key' : 'great value'})

// Here I set the string 'great value' to the key 'awesome key'
// I repeat, keys are always strings

// No, the true power of objects lies in storing multiple properties in them
// To be that we jsut separate properties with a comma ',' like so :
console.log({'first key' : 1, 'second key': 22})

