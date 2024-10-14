// Conditional (ternary) operator
// - Takes three operands:
//               1. a condtion, followed by a question mark (`?`)
//               2. an expression to execute if the condtion is truthy followed by a colon (`:`)
//               3. the expression to excute if the condition is falsy.
// - It mostly used as an `if...else` statement.

function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true));

console.log(getFee(false));

console.log(getFee(null));
console.log()

// Syntax
// condition ? exprIfTrue : exprIfFalse

// Parameters
// Condtion - an expression whose value is used as a condition

// exprIfTrue - An expression which is executed if the `condition` evaluates to a truthy value -(a value which equals or can be converted to true)

// exprIfFalse - An expression which is executed if the `condition` id falsy - (that is, has a value which can be converted to `false`)

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
console.log()

    // application areas
// Handling null values
const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
};

console.log(greeting({ name: "ALice"}));  // "Howdy, Alice"

console.log(greeting(null)); // "Howdy, stranger"

    // Conditional chains
function example() {
    return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}

// similar two
function example() {
    if (condition1) {
        return value1;
    } else if  (condition2) {
        return condition2
    } else if (condition3) {
        return value3
    } else {
        return value4
    }

    }
