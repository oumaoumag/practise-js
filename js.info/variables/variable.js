// A variable is a "named storage" for data.
/* To create variables in JavaScript, use the `let` keyword.
    The statement below declares(creates) a variable with the name "message"*/
let message;
 
// Now, we can put some data into it by using the assignment operator `=`:

message = 'Hello!' // store the string 'Hello' in the variable named message

// The string is now saved into the memory area associated with variable. We can acces it using the variable name:
alert(message); // shows the variable content

// We can combine the variable declaration and assignment into a single line:
let messages = 'Hello Godwin!' // define the variable
alert(messages) 

// We can also declare multiple variables in one line:
let user = 'John', age = 25, massage2 = 'Hello John!';

// That might seem shorter, but we don't recommend it. For the dake of better readability, please use a single line per variale.
// The multiline variant also define multiple variables in this multiline style:
    /*
     let user = 'John',
     age = 25,
     message = 'Hello John';
     */

// ...Or even in the "comma-first" style:
/* 
    let user = 'John'
    , age = 25
    , message = 'Hello';
     */

    // we can also change the values in the variables as many times as we want
    let message1;
    message1 = 'Hello!';
    message1 = 'World!';

    alert(message);
    // When the value is changed, the old data is removed from the variable:
    let hello = "Hello world!";

    let message3;

    // copy 'Hellow world!' from hello into message3
    message3 = hello;

    // now two variables hold the same data
    alert(hello); // Hello world!
    alert(message3);

    // now two variables hold the same data
    alert(hello);
    alert(message); 

    // Variable naming
/* There are tow limitations on variable names in  JavaScript:
        1. The name must contain only letters, digits, or the symbols `$` and `_`.
        2. The first character must n0ot be a digit.
    Examples of valid names:
        1. let userName;
        2. let test123;
    when the name constains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: `myVeryLongName`
    Whats
    */ 
