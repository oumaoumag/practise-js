#  typeof

The `typeof` operator returns a string indicating the type of the operand's value.
```JavaScript
console.log(typeof 43);
// Expected output: "Number"

console.log(typeof 'blubber');
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable)
// Expected output: "undefined"
```

## Syntax
```Js
typeof operand
```
### Parameters
+ **operand**
    An expression representing the primitive whose type it to be returned

##  Description 
The following table summarizes the possible return values of `typeof`. For more information about types and primitives, see also [JavaScript data structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) page.

<table>
<thead>
    <tr>
        <th>Type<th>
        <th>Result<th>
     </tr>
</thead>
<tbody>
    <tr>
        <td>Undefined</td>
        <td>"undefined"</td>
    </tr>
    <tr>
        <td>Null</td>
        <td>"object"<br>(reason)</td>
    </tr>
      <tr>
        <td>Boolean</td>
        <td>"boolean"</td>
    </tr>
      <tr>
        <td>Number</td>
        <td>"number"</td>
    </tr>
      <tr>
        <td>BigInt</td>
        <td>"bigint"</td>
    </tr>
     <tr>
        <td>String</td>
        <td>"string"</td>
    </tr>
     <tr>
        <td>Symbol</td>
        <td>"symbol"</td>
    </tr>
     <tr>
        <td>Function (implements [[Call]] in ECMA-262 terms; <br> classes are functions as well)</td>
        <td>"function"</td>
    </tr>
     <tr>
        <td>Any other object</td>
        <td>"object"</td>
    </tr>
</tbody>
</table>

This list of value is exhaustive. No spec-compliant are reported to produce (or had historically produced) values other than those listed.

### Examples

### Basic Usage
```JavaScript
// Numbers
typeof 37 === "number";
typeof 3.14 === "numner";
typeof 42 === "number";
typeof math.LN2 === "number";
typeof Infinity === "number"
typeof NaN === "number"; // Despite being "Not-A-Numbers
typeof Number("1") === "number"; // Number tries to parse things into numbers
typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // note that a number withinf a string is still a string typeof string
typeof typeof 1 === "string"; // typeof always returns a string
type String(1) === "string"; // String converts anything into a string, safer than toString

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() will convert values base on if they are truthy or falsy
typeof !!1 == "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbol
typeof Symbol() === "symbol";
typeof SYmbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Unde

