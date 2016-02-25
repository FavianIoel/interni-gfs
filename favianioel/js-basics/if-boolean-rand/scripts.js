
/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 GUESS THE RAND NUMBER
 ==-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/

// the player didn't guess corectly 
var correctGuess = false;

//i set the  random nr
var	randNr = Math.floor(Math.random() * 6) + 1;

var guess = prompt('I am thinking of a number between 1 and 6.What is it?');


//if the person guess is the random nr
if (parseInt(guess) === randNr) {
	correctGuess = true ;

//if not we give him/her another chance with a hint !!
} else if (parseInt(guess) < randNr) {
	var guessmore = prompt('try again . The nr i am thinking of is biger than ' + guess) ;
	if (parseInt(guessmore) === randNr) {
		correctGuess = true;
	}

}  else if (parseInt(guess) > randNr) {
	var guessless = prompt('Try again. The number i am thinking of is less than ' + guess) ;
	if (parseInt(guessmore) === randNr) {
		correctGuess = true;
	}
}


// run the boolean 

if(correctGuess){
	document.write('<h1> you guessed the nuber !!! Felzidades cabron!!!</h1>')
}
else {
	document.write('<p>sorry the number was '+ randNr +'</p>')
}