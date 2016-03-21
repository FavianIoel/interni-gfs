//Keep track of the score and the current question
//Like the playlist
//A collection of questions


//Create a question list
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}
//Going trow the questions
Quiz.prototype.guess = function(answer) {
   if(this.getCurrentQuestion().isCorrectAnswer(answer)){
       this.score++;
   }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function(){
    return this.currentQuestionIndex >= this.questions.length;
};


