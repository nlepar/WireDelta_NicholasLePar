/*
Task 2: The Lifetime Supply Calculator
By Nicholas LePar

This task tells you how many of your favorite snacks you need until you are
100 years old.
*/

//call the function three times, this was used for testing.
//calculateSupply(10,5);
//calculateSupply(32,22.5); //Bonus
//calculateSupply(99,-10);


/*
calculateSupply calculates the supply of your favorite snack you will need
to last you from your current age until your unfortunate passing at the ripe
old age of 100.

Parameters:
    age: the current age of the user.
    amountPerDay: the amount of snacks that the user eats per day

Return:
    returnMsg: Either the information of how many snacks you will need based of
    the maximum age and current age, or prompts to correct the input.
*/
function calculateSupply(){
    //return message
    var returnMsg;
    //the variables used for the calculation pulled from the input html.
    var age = document.getElementById("ageTask2").value;
    var amountPerDay = document.getElementById("amountPerDayTask2").value;
    
    //error handling to make sure the user entered in exactly one variable. used for testing.
    //if(arguments.length!=2){
    //    returnMsg = "You must enter in exactly 2 number values for the calculation."
    //    console.log(returnMsg);
    //    document.getElementById('lifetimeSupplyReturn').innerHTML = returnMsg;
    //    return returnMsg;
    //}

    //error handling to make sure the variable passed is a valid number
    if(isNaN(age)||isNaN(amountPerDay)|| age==null || age==""||
        amountPerDay==null || amountPerDay==""){

        returnMsg = "You must enter in a valid numbers.";
        console.log(returnMsg);
        document.getElementById('lifetimeSupplyReturn').innerHTML = returnMsg;
        return returnMsg;
    }
    //error handling to make sure none of the numbers are negative
    if(age<0 || amountPerDay<0){
        returnMsg = "Both values must be equal to or greater than zero.";
        console.log(returnMsg);
        document.getElementById('lifetimeSupplyReturn').innerHTML = returnMsg;
        return returnMsg;
    }
    if(age>=100){
        returnMsg = "Unfortunately you will only live to be 100.";
        console.log(returnMsg);
        document.getElementById('lifetimeSupplyReturn').innerHTML = returnMsg;
        return returnMsg;
    }
    
    //set the max age and calculate how many years you have left to live
    var maxAge = 100;
    var yearsLeft = maxAge - age;
    
    //Get the current date
    var dateStart = new Date();
    //set the end day to be exact day from now until the years left.
    var dateEnd = new Date(dateStart.getFullYear()+yearsLeft, 
                                    dateStart.getMonth(), dateStart.getDate());
    
    //find the difference in days between the start and the end by using the
    //time and convert it from milliseconds to days.
    var msToDay = 24*60*60*1000; 
    var dayDifference = Math.round((dateEnd.getTime()-dateStart.getTime())/msToDay);
    
    //Calculates the snacks required to last you a lifetime supply.
    var snacksNeeded = Math.round(dayDifference * amountPerDay);

    //creates the return message prints it to console and returns it to the screen
    returnMsg = "You will need " + snacksNeeded + " to last you until the ripe"
                        + " old age of " + maxAge + ".";
    console.log(returnMsg);
    document.getElementById('lifetimeSupplyReturn').innerHTML = returnMsg;
}