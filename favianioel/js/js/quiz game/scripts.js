/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 QUIZ GAME
 ==-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/

//quiz begins with 0 answers correct!
var correct = 0;

//set empty answers
var ans;




//set a functions 
function question(answer, question1, correctAnswer){

	answer = prompt(question1);
	if (answer.toUpperCase() == correctAnswer) {
		correct += 1;
	}
}

function strongP(text){

	document.write("<p><strong>"+ text +"</strong></p>")
}

function strongH(text){

	document.write("<h1><strong>"+ text +"</strong></h1>")
}

// this is the math questioner :)
var i = 1;

while (i < 7) {
    question(ans, "1+"+ i , 1 + i);
    i++;
}

//OUTPUT THE RESULTS
strongH("You got "+ correct + " out of 6 questions !");


//output rank
if (correct === 6) {

	strongP("You earned a gold crown!")

}
else if (correct >= 4) {

    strongP("You earned a silver crown");
}
else if (correct >= 1){

	strongP("You earned a bronze crown");
}
else 
{
	strongP("you fool !!!")
}
