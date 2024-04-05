// Function to validate the browser and print result accordingly
function launchBrowser(browserName) {
    if(browserName === 'chrome'){
        return "Chrome Browser";
    } else if (browserName === 'firefox'){
        return "Firefox Browser";
    } else if (browserName === 'safari'){
        return "Safari Browser";
    } else if (browserName === 'edge'){
        return "Edge Browser";
    }
    
}

let browserName = 'firefox';
// Function is called passing the browser name in argument
console.log(launchBrowser(browserName));


//Function to validate the type of testing and print it accordingly 
function runTests (){
    switch (testType) {
        case 'smoke':
            return "smoke testing";

        case 'sanity':
            return "sanity testing";

        case 'regression':
            return "regression testing";
    
        default:
            return "exploratory testing";
    }

}

let testType = "sanity";
//Function is called passing the test type as argument
console.log(runTests(testType));

