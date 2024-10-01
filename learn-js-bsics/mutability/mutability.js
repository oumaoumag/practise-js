// let num1 = 5;
// console.log(typeof num1);

// let str = 'string';
// console.log(typeof str);

// let luckynums = [1,2,3,5];
// console.log(typeof luckynums);

// const obj = {
//   year1:  [
//          {
//             name: 'Godwin',
//             age : 20,
//             luckynums: luckynums,
            
//         },
//          {
//             name: 'Grace',
//             age: 18,
//             luckynums: luckynums,

//         },
//     ],
//     year2 : [
//          {
//             name: 'Godwin',
//             age : 20,
//             luckynums,
            
//         },
//         {
//             name: 'Grace',
//             age: 18,
//             luckynums,

//         },
//     ],
// }
// console.log(obj)

// // example of immutabilty
// let a = 5;
// let b = a;
// a =10;
// console.log(b, '\n');
// // console.log('\n')
 


// // Reference Data types
//  // example of a function
//  function favorite(question) {
//     console.log(`Hi dear, do you like ${question} programming language?`)
//  }
//  favorite(`JavaScript`)

//  // An example of an object
//  const countriesVisited = [`Nigeria`, `Japan`, `Australia`]
//  console.log(countriesVisited)

//  // An example of an object:
//  const touristData = {
//     firstname: `Camila`, // firstname is called the `key` while `Camila` is the `Value`
//     lastname: 'Pedro',
//     Nationality: `Spanish`
//  }
//  console.log(touristData) 

// // Mutability in JavaScript
// const staff = {
//     name: "Strengthened",
//     age: 43,
//     Hobbies: ["reading", "Swimming"]
// }

// const staff2 = staff;

// console.log(staff);

// console.log(staff2);
// console.log()

// staff.age = 53;

// console.log(staff)

// console.log(staff2)
// console.log()

// // How to Clone Object properties
// // 1.  Using the `Object.assign()` 

// const staff3 = Object.assign({}, staff)

// console.log('staff3 - after cloning:- ',staff3)

// staff3.age = 54;

// console.log('staff :-  ',staff)

// console.log('staff3 :- ',staff3)
// console.log()

// // 2. Using the `Spread Operator`

// const staff4 = {...staff};

// staff4.age = 25;

// console.log('staff  :- ',staff)

// console.log('staff4 :- ',staff4)
// console.log()

// // Immutability in Js
// const num = 46;
// const newNum = num;
// console.log('newNum ', newNum)
// console.log()

// let student1 = "Halina";
// console.log("V1- student1:- ", student1)

// let student2 = student1

// student1 = "Brookes"
// console.log("V2 - student1", student1)
// console.log("stdnt 2: ",student2)
// console.log()

// // How to Prevent Object Mutability
// const studentNames = {
//     student1: 'Halina',
//     student2: "Brookes",
//     student3: "Anthony"
// }

// Object.defineProperty(studentNames, "student4", {
//     value: "Mirabel",
// })

// console.log(studentNames)
// console.log()

// // How to use `Object.preventExtensions` Method
//     // How to add new properties using
//        // 1. using `dot notation`
//     const makeNonExtensive = {
//         firstname: "Charles",
//         lastname: "Chandlier"
//     }

//    Object.preventExtensions(makeNonExtensive)

//     makeNonExtensive.designation = "Software Engineer"; // adding property using the `dot notation`

//     console.log(makeNonExtensive)

    // 2. Using the `defineProperty` method

   // Object.defineProperty(makeNonExtensive, "age", {value : "twenty",})
    // console.log('m2 :- ', makeNonExtensive)
    // console.log()

    const isNonExtensive = {
        firstname: "Charles",
        lastname: "Chandlier"
    }

   Object.preventExtensions(isNonExtensive)

    Object.defineProperty(isNonExtensive, 'firstname', {
        value: 'Jason',
    })
    console.log(isNonExtensive)

    delete isNonExtensive.lastname
    console.log(isNonExtensive)
