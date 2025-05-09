function createCounter(startValue) {
    let count = startValue; // This a toy inside our TOy Factory

    // This is our 'special key" - innner function
    return function increament() {
        count++
        return count;
    };
}

// LEt's create two different counters
const counter = createCounter (10)
