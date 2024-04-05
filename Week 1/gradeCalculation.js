//Function to calculate the grade based on the score
function gradeCal(){
    switch (true) {
        case score >=50 && score < 60:
            return "D Grade";
            break;

        case score >= 60 && score < 70:
            return "C Grade";

        case score >= 70 && score < 80:
            return "B Grade";

        case score >= 80 && score < 90:
            return "A Grade";

        case score >= 90 && score <=100:
            return "Outstanding Grade";
    
        default:
            return "Not a valid score";
    }
}

let score = 60;
//Function is called to calculate the grade by passing the score
console.log(gradeCal(score));