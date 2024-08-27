let number = 100;

function printIf(number) {
   // let result = ""
    if (number > 10) {
        return "Greater that 10"
    } else if (number == 10) {
        return "Equal to 10"        
    } else if (number < 10) {
        return "Less that 10"        
    }   
}

let result = printIf(number)
console.log(result)