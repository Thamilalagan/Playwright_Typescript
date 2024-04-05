//function to validate if the given number is odd or even 
function isOddOrEven(num) {
    if(num%2==0){
        console.log("The number ", num," is a even number");
    } else{
        console.log("The number ", num," is odd number");
    }
    
}
let num = 5;
//function is called and the number is passed in the argument
isOddOrEven(num);