function calculator(a, b) {
    // Ensure a and b are numbers
    a = parseFloat(a);
    b = parseFloat(b);
    var sum = a + b;
console.log("for the values %d and %d, the sums is %d", a ,b, sum)

    var diff = a - b;
console.log("for the values %d and %d, the difference is %d", a ,b, diff)

    var product = a *b;
console.log("for the values %d and %d, the product is %d", a ,b, product)

    
    if (b === 0) {
        var quotient = 0;
console.log("for the values %d and %d, the quotient is %d", a ,b, quotient)

    } else {
        var quotient = a / b;
console.log("for the values %d and %d, the quotient is %d", a ,b, quotient)

    }
}

function main() {
    var args = process.argv.slice(2)

    if (args.length !== 2) {
        console.log("Usage : node calc.js <number> <number>\nExample : node calc.js 8 8",)
        return
    }
    calculator(args[0], args[1])
}
main()