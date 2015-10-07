/*
Task 3: The Geometrizer
By: Nicholas LePar

This task calculates the circumference and area of a circle
*/

//Used for testing
////Calculate circumference tests.
//calcCircumfrence(4);
//calcCircumfrence(2.3);
//calcCircumfrence(-1);
////Calculate area tests.
//calcArea(4);
//calcArea(2.3);
//calcArea(0);


/*
geometrizer function handler used to call the correct function calculation
based on the users option through radio buttons. Functions will be called
accordingly and passed the radius that was received. The return from those functions
are then set to the proper return paragraph on the screen.

Parameters:
    radius: the radius the user enters.

Returns:
    no objects just sets the webpage.
 */
function geometrizer(){
    //radius from the input
    var radius = document.getElementById("radius").value;
    //checks if the area button is selected. Sends it to the correct function.
    if(document.getElementById('circleFunctionA').checked==true){
        document.getElementById("geometrizerReturn").innerHTML = calcArea(radius);
    }else{
        document.getElementById("geometrizerReturn").innerHTML = calcCircumfrence(radius);
    }
}

/*
calcCircumfrence calculates the circumfrence of a circle based on the 
radius that is passed to it

Parameters:
    radius: the radius of the circle used for the calculation

Returns:
    returnMsg: the statement containing the circumference of the cirlce. Or a 
    message if the radius was not valid in anyway.
*/
function calcCircumfrence(radius){
    //the return message.
    var returnMsg;
    //Error handling to check if right amount of variables was passed
    if(arguments.length!=1){
        returnMsg = "You must enter in exactly one number value for the conversion.";
        console.log(returnMsg);
        return returnMsg;
    }
    //error handling to make sure that radius is a valid number
    if(isNaN(radius)|| radius==null || radius==""){
        returnMsg = "You must enter in a valid number.";
        console.log(returnMsg);
        return returnMsg;
    }
    //error handling to make sure radius is greater than zero.
    if(radius<0){
        returnMsg = "The radius must be greater than or equal to zero.";
        console.log(returnMsg);
        return returnMsg;
    }
    
    //calculates the circumference, prints and returns the message.
    var circumference = 2*Math.PI*radius;
    returnMsg = "The circumference is " + circumference;
    console.log(returnMsg);
    return returnMsg;
}


/*
calcArea calculates the area of a circle based on the 
radius that is passed to it

Parameters:
    radius: the radius of the circle used for the calculation

Returns:
    returnMsg: the statement containing the area of the cirlce. Or a 
    message if the radius was not valid
*/
function calcArea(radius){
   //the return message.
    var returnMsg;
    //Error handling to check if right amount of variables was passed
    if(arguments.length!=1){
        returnMsg = "You must enter in exactly one number value for the conversion.";
        console.log(returnMsg);
        return returnMsg;
    }
    //error handling to make sure that radius is a valid number
    if(isNaN(radius)|| radius==null || radius==""){
        returnMsg = "You must enter in a valid number.";
        console.log(returnMsg);
        return returnMsg;
    }
    //error handling to make sure radius is greater than zero.
    if(radius<0){
        returnMsg = "The radius must be greater than or equal to zero.";
        console.log(returnMsg);
        return returnMsg;
    }
    
    //calculates the area, prints and returns the message.
    var area = Math.PI*Math.pow(radius,2);
    returnMsg = "The area is " + area;
    console.log(returnMsg);
    return returnMsg;
}

