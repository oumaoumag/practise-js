// console.log("Start of script"); // This synchronous

// setTimeout(function() {
//     console.log("Timeout callback executed!"); // This asynchronouse
// }, 0);

// Promise.resolve("Promise resolves!").then(function(value) {
//     console.log(value); // This is an asynchronous (microtask)
// });

// console.log("End of script") // This s synchronous

console.log.apply("Start of the script"); // Synchronous

setTimeout(function() {
    console.log("TimeOUT exceucted")  /// This is an asynchronous function
}, 0);

Promise.resolve("Task is waiting").then(function(value){
    console.log(value);
});
