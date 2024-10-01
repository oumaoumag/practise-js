// How to dynamicaly access and set properties

// first let's create an empty Object and store it in a variable

const street = {}

console.log(street.name) // Yep it's empty

// Now much like a variable, we can assigne a value to a property
street.name =  'Matabiau'

console.log(street.name)

// We don't need to wwrite 'const' because we are not creating a new variable
// Just a property on our Object
street.number = 175

const address = {
    country: 'Peru',
    town: 'Toulouse',
}

// We can both declare and assign property later :
address.postalCode = 31000

// We can use a variable value
address.street = street

// And we can set a nested object
address.street.type = 'boulevard'

console.log(address)

const multipleOf5 = []

//We could do the same for arrays

multipleOf5[0] = 5
multipleOf5[1] = 10
multipleOf5[5] = 19
multipleOf5[2] = 15

console.log(multipleOf5)

// we just have to access the value we want to set
// and assign a value to it with `=`
// The way we access to set or get is exactly the same so every way to access
// show in the previous examples hold true here