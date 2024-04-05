// Function to check if the number is positive, negative or zero
function numberValidation(num) {
    if(num > 0){
        console.log("The given number is positive");
    } else if (num < 0){
        console.log("The given number is negative");
    } else {
        console.log("The given number is zero");
    }
}

let num = -1;
// Calls the function by passing the number in the argument
numberValidation(num);