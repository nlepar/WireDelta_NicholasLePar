/*
Task 4: The temperature converter
By: Nicholas LePar

This task calculates various degree conversions from celsius to fahrenheit and
vice versa.
*/

//For testing purposes
////celsius to fahrenheit tests
//celsiusToFahrenheit(0);
//celsiusToFahrenheit(-12);
//celsiusToFahrenheit(12+"a");
////fahrenheit to celsius tests
//fahrenheitToCelsius(32);
//fahrenheitToCelsius(1.7);
//fahrenheitToCelsius(-12,1);

function temperatureConverter(){
    var temperature = document.getElementById("degrees").value;
    if(document.getElementById("cToF").checked){
        document.getElementById("temperatureConvReturn").innerHTML = celsiusToFahrenheit(temperature);
    }else{
        document.getElementById("temperatureConvReturn").innerHTML = fahrenheitToCelsius(temperature);
    }

}

/*
celsiusToFahrenheit covnerts a celsius temperature passed to the function into a
fahrenheit temperature.

Parameters:
    celsius: the temperature in celsius

Return:
    returnMsg: provides feedback on the conversion result, or returns with error
    handling update.
*/
function celsiusToFahrenheit(celsius){
    
    var returnMsg;
    
    //error handling to make sure the user entered in exactly one variable.
    if(arguments.length!=1){
        returnMsg = "You must enter in exactly one number value for the conversion.";
        console.log(returnMsg);
        return returnMsg;
    }
    //error handling to make sure the variable passed is a valid number
    if(isNaN(celsius) || celsius==null || celsius==""){
        returnMsg = "You must enter in a valid number.";
        console.log(returnMsg);
        return returnMsg;
    }
    
    
    //Calculates the conversion, prints and returns the return message with conversion
    var cToF = (celsius*(9/5)) + 32;
    returnMsg = (celsius +"\xB0C is " + cToF + "\xB0F");
    console.log(returnMsg);
    return returnMsg;
}


/*
fahrenheitToCelsisu covnerts a fahrenheit temperature passed to the function into a
 celsius temperature.

Parameters:
    fahrenheit: the temperature in fahrenheit

Return:
    returnMsg: provides feedback on the conversion result, or returns with error
    handling update.
*/
function fahrenheitToCelsius(fahrenheit){
    
    var returnMsg;
    
    //error handling to make sure the user entered in exactly one variable.
    if(arguments.length!=1){
        returnMsg = "You must enter in exactly one number value for the conversion.";
        console.log(returnMsg);
        return returnMsg;
    } 
    //error handling to make sure the variable passed is a valid number
    if(isNaN(fahrenheit)  || fahrenheit==null || fahrenheit==""){
        returnMsg = "You must enter in a valid number.";
        console.log(returnMsg);
        return returnMsg;
    }
    
    //Calculates the conversion, prints and returns the return message with conversion
    var fToC = (fahrenheit - 32) * (5/9);
    returnMsg = (fahrenheit +"\xB0F is " + fToC + "\xB0C");
    console.log(returnMsg);
    return returnMsg;
}