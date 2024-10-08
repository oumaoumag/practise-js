// In a JavaScript a `Map` is a collection of key-value pairs where both key and values can e any data type.
// It is a usefull alternative to obejcts when you need keys that aren't strings or symbols, or when you
// need reliable iteration over key-value pairs in insertion order

// Creating a Map
let myMap = new Map();

// Adding elements to a map:
// You can use the `set()` method to add key-value pairs.

myMap.set ('name', 'Godwin');
myMap.set(1, 'one');
myMap.set(true, 'Boolean True');
console.log(myMap);

// Accessing values:
// To access a value by key, use the `get()` method
console.log(myMap.get('name'));

// Checking for a Key:
// The `has()` method checks if a key exists in the map
console.log(myMap.has('name')); // Output: true

// Deleting Elements
// You can use the `delete()` method to remove an entry by key
myMap.delete('name')
console.log(myMap.has('name')); // Output: false

// Iterating over a Map:
// Maps preserve insertion order, and you can iterate over them using
// 1. `forEach`
myMap.forEach((value, key) =>{
    console.log(`${key}: ${value}`);
});

myMap.set('name','Jackson')
console.log(myMap.has('name')); // Output: true

var ist;

myMap.forEach((value, key) =>{
   // let name;
    ist += ' ' + value + ' ';
   // name += key;
});
console.log(ist)

// `for...of` loop:
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

// Size of the Map:
// You can get the size of the map with the `size` property
console.log(myMap.size);

// Clearing a Map:
// The `clear()` method removes all key-values pairs from the map.
myMap.clear();

console.log(myMap)

/* Map vs Objects:
    + Objects only allow strings or symbols as keys, while Maps allow any type.
    + Maps are optimized from frequent additions and removles of key-value pairs
    + Iteration in Maps is predictable and occurs in the insertion order.
*/
