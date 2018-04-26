//ensures user inputs value//
var myAlert = "please enter correct measurement"
var Null = "please enter measurement"

function feetToMeters ()
{
  var measure = parseInt(document.getElementById("value1").value);
//conversion ratio//
  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message)
  
 
  
		//ensures value is above 0//
		if(!measure){
			alert ("please enter value")
		}
			else if(measure<=0) {
				alert ("please ensure value is over 0")
			}

}


function inchesToCentimeters ()
{
  var measure = parseInt(document.getElementById("value1").value);

  var inches = measure * 2.54;
  var message = measure + ' inches converts to ' + inches + ' centimeters.';
  console.log(message)
  
		if(!measure){
			alert ("please enter value")
		}

			else if(measure<=0) {
				alert ("please ensure value is over 0")
			}
}



function yardsToMeters ()
{
  var measure = parseInt(document.getElementById("value1").value);

  var yards = measure * 0.9144;
  var message = measure + ' yards converts to ' + yards + ' meters.';
  console.log(message)
	
	if(!measure){
			alert ("please enter value")
		}

			else if(measure<=0) {
				alert ("please ensure value is over 0")
			}
}


function milesToKilometers ()
{
  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 1.60934;
  var message = measure + ' miles converts to ' + meters + ' meters.';
  console.log(message)
	
	if(!measure){
			alert ("please enter value")
		}

			else if(measure<=0) {
				alert ("please ensure value is over 0")
	        }
}








