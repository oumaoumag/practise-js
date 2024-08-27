# JavaScript Basics

JavaScript's basic ***syntax*** is similar to Java's despite being very different languages.

## Comments and Semicolons

```
// Comments are like C. Single-line comments start with two slashes,
/* and multiline comments start with slash-star
    and end with star-slash */

    // output will be shown with // = 
    1 + 1 // = 2 

    // Statements can be terminated by; 
    doStuff();

    // ... but they dont't have to be, as semicolons are automatically inserted
    // wherever there's a newline, except in certain cases.
    doStuff()

    // Because those cases can unexpected results, 
    // we'll keep on using semicolons in this guiede.
```

# NUmbers

JavaScript has one number typr (a 64-bit IEEE 754 double), with a 52-bit significand, which is enough to store intergers up to about 9x10^15 precisley.

```
3; // = 3

// All the basic arithmetic works as you'd expect.
1 + 1; // = 2

