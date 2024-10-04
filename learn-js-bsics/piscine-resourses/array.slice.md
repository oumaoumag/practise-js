# Arrya.prototype.slice()

## Baseline Widely available

The `slice()` method of Array instance returns a shallow copu of portion of an array into a new array object selected from `start` to `end` (`end` not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

```JavaScript
const animals = ['ant'const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "element"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
[// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected ouput: Array ["camel", "duck"]

console.log(animals.slice())]
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant]
```

## Syntax
```Js
slice()
slice(start)
slice(start, end)
```
## Parameters

 start - Optional
    zero-based index at which to start extraction, converted to integer.
    + Negative index counts back from the end of the array - if `-array.length <= start < 0, start + array.length` is used.
    + If `start < -array.length` or `start` is omitted, `0` is used.
    + If `start >= array.length`, an empty array is returned.

end - Optional
    Zero - based index at which to end extraction, converted to an interger. `slice()` extracts up to but not including `end`.
    + Negative index counts back from the end of the array - if `-array.length <= end < 0`, `end + array.length` is used.
    + If `end < -array.length,` `0` is used.
    + If `end` implies a position before or at the position that `start` implies, an empty array is returned.

## Return Value
A new array containing the extracted elements

## Description

The `slice()` method is a copying mehod. It does not alter `this` but instead returns a  shallow copy that constains some of the same elemets as the ones from the original array.

The `slice()` method preserves empty slots. If the sliced portion is sparse. the returned array is sparse as well.

The `slice()` method is generic. It only expects th `this` value to have a `length` property and interger-keyed properties.

## Examples

## Return a portion of an existing array

