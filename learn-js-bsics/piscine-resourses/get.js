// First let's decalare some data to use in our examples

const street = {
    number: 175,
    type: 'boulevard',
    name: 'Matabiau'
}

const address = {
    country: 'France',
    town: 'Toulouse',
    postalCOde: 31000,
    street,
}

const userClement = {
    firstname: 'Clement',
    lastname: 'Denis',
    email: 'cdenis@example.com',
    age: 29,
    address,
}

// let's create an array of users with 2 users
const users = [
    userClement,
    {
        firstname: 'Sofiane',
        lastname: 'Martinez',
        email: 'smartine@example.com',
        age: 32,
        address: {
            country: 'France',
            town: 'St-Queens',
            postalCode: 93400,
            street: {
                number: 78,
                type: 'rue',
                name: 'Garibaldi',
            },
        },
    },
]

const allowedCountries = ['France', 'Spain', 'Portugal', 'Russia', 'Iceland']

const coords = [
    [32, 45],
    [-38, 57],
    [87, 99],
    [57, -1],
    [-74, -125]
]

// Ok so now that we have all those structures, let's see how to access values,
// The first way to access a value is using square brackets and the key `['key']`

console.log(users[1].address.street['number'])
// this will get the value of the property at the key 'number'

console.log(street['name'])
// here we access the name of the street

// What happens if we try to access a non existing property ?
console.log(userClement['name']) 
// the key 'name' isn't defined in userClement so we get undefined

console.log(userClement['firstname'])
console.log(userClement['address']['town'])
console.log(userClement['address']['street'])
console.log(userClement['address']['street']['name'])

// What about arrays ?
// well it's pretty simple, since arrays keys are numeral indexes
// you jsut have to remember we start counting at 0

console.log(allowedCountries[0])
console.log(allowedCountries[1])
console.log(allowedCountries[2])

// Nested arrays ?
console.log(coords[0][0])
console.log(coords[0][1])
console.log(coords[3][1])
console.log(coords[3][0])

// But, you have to be carefull not try to access a property that 
// doesn't exist, uncomment this line to have an example of error:
// console.log(coords[151][0])

// Since keys are strings, we can use variables values to access our structures
const myKey = 'name'

// and so if we give our brackets an identifer instead of a string
// It will find the value of its's variable and use that as key.
// so here :
console.log(street[myKey])
// our key is 'name', the value of myKey

// But if we have written :
console.log(street['myKey'])
// now we are using a string again, those quotes here
// and we didn't set any property with the key 'myKey' so, that's undefined

// In fact you can write anything between those [] as long as it returns you a valid string
console.log(userClement['last' + myKey])

// You can use operators for Arrays too
const start = 1 
let position = 0

console.log(allowedCountries[start + position++])
console.log(allowedCountries[start + position++])
console.log(allowedCountries[start+ position++])


