let num = 5;
console.log(typeof num);

let str = 'string';
console.log(typeof str);

let luckynums = [1,2,3,5];
console.log(typeof luckynums);

const obj = {
  year1:  [
         {
            name: 'Godwin',
            age : 20,
            luckynums: luckynums,
            
        },
         {
            name: 'Grace',
            age: 18,
            luckynums: luckynums,

        },
    ],
    year2 : [
         {
            name: 'Godwin',
            age : 20,
            luckynums,
            
        },
        {
            name: 'Grace',
            age: 18,
            luckynums,

        },
    ],
}
console.log(obj)

// example of immutabilty
let a = 5;
let b = a;
a =10;
console.log(b, '\n');
// console.log('\n')
 


// Reference Data types
 // example of a function
 function favorite(question) {
    console.log(`Hi dear, do you like ${question} programming language?`)
 }
 favorite(`JavaScript`)

 // An example of an object
 const countriesVisited = [`Nigeria`, `Japan`, `Australia`]
 console.log(countriesVisited)

 // An example of an object:
 const touristData = {
    firstname: `Camila`, // firstname is called the `key` while `Camila` is the `Value`
    lastname: 'Pedro',
    Nationality: `Spanish`
 }
 console.log(touristData) 

// Mutability in JavaScript
const staff = {
    name: "Strengthened",
    age: 43,
    Hobbies: ["reading", "Swimming"]
}

const staff2 = staff;

console.log(staff);

console.log(staff2);
console.log()

staff.age = 53;

console.log(staff)

console.log(staff2)
console.log()

// How to Clone Object properties
// 1.  Using the `Object.assign()` 

const staff3 = Object.assign({}, staff)

console.log('staff3 - after cloning:- ',staff3)

staff3.age = 54;

console.log('staff :-  ',staff)

console.log('staff3 :- ',staff3)
console.log()

// 2. Using the `Spread Operator`

const staff4 = {...staff};

staff4.age = 25;

console.log('staff  :- ',staff)

console.log('staff4 :- ',staff4)