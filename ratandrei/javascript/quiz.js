	correctAnswers = 0;

	alert('Let\'s start the quiz !');

	var int1 = prompt('1+1 = ?');
	var int2 = prompt('1+2 = ?');
	var int3 = prompt('1+4 = ?');
	var int4 = prompt('1+3 = ?');
	var int5 = prompt('1+6 = ?');



	if (int1 === '2')
	{
		correctAnswers +=1;
	}
	if (int2 === '3') 
	{
		correctAnswers +=1;
	}
	if (int3 === '5') 
	{
		correctAnswers +=1;
	}
	if (int4 === '4') 
	{
		correctAnswers +=1;
	}
	if (int5 === '7') 
	{
		correctAnswers +=1;
	}

	alert('Let\'s find the result.');


	if(correctAnswers === 5)
	{
		alert('You won the gold medal! Correct answers : ' + correctAnswers);
	}

	else if(correctAnswers === 4 || correctAnswers === 3)
	{
		alert('You won the silver medal! Correct answers : ' + correctAnswers);
	}
	else if(correctAnswers === 2 || correctAnswers === 2)
	{
		alert('You won the bronze medal! Correct answers : ' + correctAnswers);

	}

	else 
	{

		alert('Try again next year! Correct answers : ' + correctAnswers);
	}
