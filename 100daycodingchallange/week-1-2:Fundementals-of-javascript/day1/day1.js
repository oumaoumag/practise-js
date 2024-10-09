
// Access comman - line arguments
const args = process.argv.slice(2); // skips the first two elements

if (args.length !== 2) {
    console.log("Usage node day1.js <length> <width>")
    return
} else {
    console.log("You entered: ", args.join(' '));
}

var length = args[0];
var width  = args[1];

function area(length, width) {
    return length * width;
}
console.log("Area is %d", area(length, width))

process.exit(0)

