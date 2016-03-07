// set the function 
function getRandomNumber(value) {
  return Math.floor( Math.random() * value ) + 1;
}

//set the corespndets variables
var randomNr = getRandomNumber(10000);


// counter
var i=0;

while ( randomNr !== botguess ) {
  var botguess = getRandomNumber(10000);
   i++;
}



document.write("<p>The random number was: " + randomNr + "<p>");
document.write("<p>It took the computer " + i + " attempts to get it right.</p>");


