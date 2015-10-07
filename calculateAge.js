/*
Task 1: The Age Calculator
By: Nicholas LePar
*/


//testing three calls to calculate age
// calculateAge(1995);
// calculateAge(2001);
// calculateAge(1872);


/*
calculateAge calculates the age of a person based off of the birth year
of and current year. Prints the ages the user could possibly be

Parameters:
    birthyear: The birth year of the user

Returns:
    returnMsg: the statement of two ages that the user could be, or a prompt to 
    update the birth year to a valid one
*/
function calculateAge(){

    //The variable used to calculate the age. pulled from the site
    var birthYear=document.getElementById("birthyear").value;
    //the return message.
    var returnMsg;
    
    // //Error handling to check if right amount of variables was passed, for testing
    // if(arguments.length!=1){
    //     returnMsg = "You must enter in exactly one number value for the conversion."
    //     console.log(returnMsg);
    //     return returnMsg;
    // }
    
    //error handling to make sure that birthyear is a valid number
    if(isNaN(birthYear) || birthYear==null || birthYear==""){
        returnMsg = "You must enter in a valid number." + birthYear;
        console.log(returnMsg);
        document.getElementById('calculateAgeReturn').innerHTML = returnMsg;
        return;
    }
    //error handling to make sure birthyear is greater than zero.
    if(birthYear<0){
        returnMsg = "Your birth year must be greater than or equal to zero.";
        console.log(returnMsg);
        document.getElementById('calculateAgeReturn').innerHTML = returnMsg;
        return;
    }
    
    //Gets the current year based on todays date
     var currentYear = new Date().getFullYear();

    if(birthYear>currentYear){
        returnMsg = "You are either a time traveler or a liar, How could be born in the future?";
        console.log(returnMsg);
        document.getElementById('calculateAgeReturn').innerHTML = returnMsg;
        return;
    }

     //Your age could either be depedent on whether your birthday has occured
     //or not for the current year. Thus there are two ages.
     var ageNoBirthday = Math.round(currentYear - birthYear - 1);
     var ageBirthday = Math.round(currentYear - birthYear);
     //prints out the two ages the user could possibly be.
     returnMsg = "You are either " + ageNoBirthday + " or " + ageBirthday +".";
     //prints it out to the console.
     console.log(returnMsg);
     //returns the message as well.
     document.getElementById('calculateAgeReturn').innerHTML = returnMsg;
}