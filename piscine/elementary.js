// Function to multiply two numbers without using '*'
function multiply(a, b) {
    let result = 0;
    const positiveB = Math.abs(b);

    // Add `a` b times
    for (let i = 0; i < positiveB; i++) {
        result += a;
    }

    // Adjust the sign of the result based on b
    return b < 0 ? -result : result;
}
console.log(multiply(5,5))

function divide(a,b) {
    let count = 0;
    const positiveB = Math.abs(b)

    if (b <= 0) {
        return 0
    } else {
    // Subtract b from a until zero 

        while (a > 0) {
            count++
            a -= b
        }
    }
    return count
}

console.log(divide(-25,5))

function modulo(a,b) {
    let result = 0;

    if (a === 0) {
        return 0
    }
}