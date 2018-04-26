var myAlert = "please enter correct measurement"
var Null = "please enter measurement"

function feetToMeters ()
if(!measure){
alert ("please enter value")
}

else if(measure<=0) {
alert ("please ensure value is over 0")
}
else if(measure>0) 
{
  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message)
}


function inchesToCentimeters ()
if(!measure){
alert ("please enter value")
}

else if(measure<=0) {
alert ("please ensure value is over 0")
}
else if(measure>0) 
{
  var measure = parseInt(document.getElementById("value1").value);

  var inches = measure * 2.54;
  var message = measure + ' inches converts to ' + centimeters + ' centimeters.';
  console.log(message)
  
document.getElementbyId("resultSentence").innerHTML = message;
}



function yardsToMeters ()
if(!measure){
alert ("please enter value")
}

else if(measure<=0) {
alert ("please ensure value is over 0")
}
else if(measure>0) {
  var measure = parseInt(document.getElementById("value1").value);

  var yards = measure * 0.9144;
  var message = measure + ' yards converts to ' + meters + ' meters.';
  console.log(message)
  
document.getElementbyId("resultSentence").innerHTML = message;
}


function milesToKilometers ()
	if(!measure){
alert ("please enter value")
}

else if(measure<=0) {
alert ("please ensure value is over 0")
}
else if(measure>0) {
  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 1.60934;
  var message = measure + ' miles converts to ' + kilometers + ' meters.';
  console.log(message)

document.getElementbyId("resultSentence").innerHTML = message;
}







