// How To Get Today's Date
// 1. `new Date()`
const today = new Date();
console.log(today);

// To convert to local timezone format
console.log(today.toString());
console.log(today.toLocaleString());

// 2. `Date.now()
const timestamp = Date.now(); 
console.log(timestamp);

// Formating Dates
//IS0 format
const isoDate = new Date('2024-10-08'); 
console.log(isoDate.toISOString());