const constVariablle = "this is a cns"
var globalVariable = "This is a global variable"

function variabales() {
   // constants can accessed form anywhere but will throw an error when theres is an attempt to change its value
   // constVariablle = "its value cannot be changed"
   


   let localVariable = "This is a local variable" 
    console.log(localVariable)
   globalVariable = "and can be accessed in any part of the program";
   console.log(globalVariable)
}

localStorage = "but I cant access this here"
globalVariable = "I can access it here"

function vars() {
        // uncomment the the code below to view
   // localVariable = "but I cant access this here"
    // console.log(localStorage)  
    globalVariable = "and here";
    console.log(globalVariable)
}


function main() {
   variabales()
   vars()

}
main()
