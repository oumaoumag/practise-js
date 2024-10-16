const obj ={ name : "Godwin",
age : 24,
height : 157,
}

console.log(obj.prototype)

console.log()
const obj2 = Object({name : "Godwin, age:24"})
console.log(obj2)
// JavaScript is built on an Object-oriented framework
// An object is a collction of properties, where each property links a key to a value
// The value of a JavaScript property can be a method (function)
// object properties can be updated, modifeid, added or deleted.
// Sometimes properties are static and cannot be changed

// Creating Object Properties
// 1. Using the dot Operator
//      We are using dot notation(.), to assign values to object properties directly by spcifying
// the object name followed by the property name and value.
// syntanx
//          objectName.property;
let student = new Object();
student.name = "ishika";
student.section = "b9";
student.cgpa = "9.52";
student.branch = "CSE";
console.log(student)

// 2. Using Square Bracket Notation
// We use square brackets to assign vlues to objects properties.
// The key is specified as a string inside the bracketes, and the value is assigned 
// to the corresponding property.
// This method is particulaly useful when the propery name is dynamic or when
// the property name contains special characters or spaces
// Syntax
// const objectNAme = {};
// objectName["PropertyName"] = propertyValue;
const student1 = {};

student ["name"] = "pratyusha";
student["section"] = "b9";
student["gpa"] = "9";
student["branch"] = "cse"

console.log(student1)