function  nthFib(n) {
    if (n <= 1) {
        return n;  
    }
    return nthFib(n-1) + nthFib(n-2);
}

function sequence() {
    // var fibs = [];

    for (let i = 0; i < 10; i++) {
        let fib = nthFib(i)
        console.log(fib)
        // fibs.push(fib)
    }
    // return fibs
} 

console.log(sequence())