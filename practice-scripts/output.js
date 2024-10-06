// Access command - line arguments
const args = process.argv.slice(2); // skips the first two elements

if (args.length == 0) {
    console.log("please provide some input.");
} else {
    console.log("You entered: ", args.join(' '));
}

process.exit(0);

const readline = require('readline');

// Create an interface for reading input
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask a question
r1.question('Enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);

    // close the interface
    r1.close();
});