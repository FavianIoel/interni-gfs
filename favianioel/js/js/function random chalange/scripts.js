/*
=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-
FUNCTIONS RANDOM CHALANGE
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/





// WE ASK WITH PROMPT FOR THE NUMBERS 
	var min = parseInt(prompt( "Insert a first number :"));
	var max = parseInt(prompt("Inser a second number:"));



// MAKE SHURE VALUES ARE NUMBERS

if(  isNaN(min)  ||  isNaN(max)  === true   ) {
    alert("you should type only Digits, \n ! Please refresh the page !");
	throw new Error ('You should type only DIGITS  ');
}



// WE SET A FUNCTION THAT RANDOMIZES A NR BETWEN 2 SET NUMBER AND RETURN IT TO US
	function randWithRange( min, max)
	  {
		  var range = Math.abs(max - min) + 1;     
		  return Math.floor((Math.random() * range) + (min <= max ? min : max)) ;
	  }

// WE JUST CALL THE FUNCTION BACK ;

document.write("<h1>"+randWithRange( min, max)+"</h1>");

