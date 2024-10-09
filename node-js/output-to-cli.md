# Output to the command line using Node.js

## Basic output using the console module

Node.js provide a `console` ***module*** which provides tones of very useful ways to intercat with the comman line.

It is similar to `console` object you find in the browser.

The most basic and most used method is `console.log()`, which prints the string you pass to it to the console.

I a Object is passed, it will render it as a string.

you can pass mutiple variables to `console.log`, e.g:

```Js
const x = 'x';
const y = 'y';
console.log(x, y);
```

We can also format pretty phrases by passing variables and a format specifier.

Example:
```Js
console.log('My %s has %d ears', 'cat', '2')
```
  + `%s` format a variable as string
  + `%d` format a variable as a number 
  + `%i` format a variable as its interger part only
  + `%o` format a variable as an object

console.log('%o', Number);


