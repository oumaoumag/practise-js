const { Console } = require("console");

// Access the command-line-tools
const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage : node day2.js <number>")
    return
} else {
    console.log("You entered : ", args.join(' '));
}

var num = parseInt(args[0])

function isOddOrEven(num) {
    if (num%2 === 0) {
        return "even"
    } else {
        return 'odd'
    }
}

console.log("%d is %s", num, isOddOrEven(num))