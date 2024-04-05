//To print the length of the last word in the string
let str_1 = "Hello World";
let char_1 = str_1.split(' ');
console.log(char_1[char_1.length-1].length);


//To print the length of the last word in the string removing the spaces
let str_2 = "fly me  to the moon";
let char_2 = str_2.trim().split(' ');
console.log(char_2[char_2.length-1].length);


//Function to check if the given string is Anagram or not
function isAnagram(str_3, str_4) {
    trim_Str3 = str_3.trim().toLowerCase().split('').sort().join('');
    trim_Str4 = str_4.trim().toLowerCase().split('').sort().join('');
    if(trim_Str3==trim_Str4){
        return true;
    }else{
        return false;
    }
}

console.log(isAnagram('Listen', 'testing'));