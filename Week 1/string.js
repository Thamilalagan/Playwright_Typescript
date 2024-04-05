// Function to check if the string is palindrome or not
function reverseString(str){
    let char = str.split('');
    for (let index = str.length-1; index >=0; index--) {
        reserved = reserved + char [index];
        
    }
    
    if(str == reserved){
        return true;
    }else{
        return false;
    }

}

let str = "malayalam";
let reserved = "";
//Calls the function by passing the string in the argument
console.log(reverseString(str));

