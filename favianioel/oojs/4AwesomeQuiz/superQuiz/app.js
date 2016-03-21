//Create Questions

var questions = [
	new Question("Who was the first President of the USA ? ", [ "George Washington", "Thomas Jefferson" ], "George Washington"),
	new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", [ "PI", "42" ], "42")
];

//Create Quiz

var quiz = new Quiz(questions);


//Display Quiz 

QuizUI.displayNext();