			var game = prompt ('Do you want to play a game (yes or no) ?');
			if(game === "yes")
			function looser(){
				alert('Loooossseeerrr!');
			}
			function repeat(){
				i = 0;
				while(i <=100)
				{
					i++;
					looser();
				}
			}		
		{

			var userChoice= prompt('Do you choose rock, paper or scissors?');
			var compChoice = Math.random ();

			if(compChoice <0.34)
			{
				compChoice = "rock";
			}
			else if (compChoice <= 0.67)
			{
				compChoice = "paper";
			}

			else
			{
				compChoice = "scissors";
			}

				document.write('Computer choice : ' + compChoice);
				var compare = function (choice1, choice2)
				{
				if(choice1 === choice2)
					{
						document.write('<br>The result is a tie.');
					}
				else if(choice1 === "rock")
				{
					if(choice2 === "scissors")
					{
						document.write("<br>Rock wins");
					}
					else
					{
						document.write("<br>Paper wins");
					}
				}
				}

			}
			compare(userChoice,compChoice);

			var game2= prompt("Another game (yes or no) ? ");
			if(game2=== "yes")
			{
				var myChoice = prompt ("Ghiceste numarul la care ma gandesc, 1 sau 2? ");
				var pcChoice = Math.random();

				if(pcChoice <= 0.6)
				{
					pcChoice = "1";
				}
				else
				{
					pcChoice = "2";
				}

				document.write("<br>Computer : " + pcChoice);
				var comp = function(var1, var2)
				{
				if(var1 === var2)
				{
					document.write("Bravo! Ai ghicit.");
				}
				else if(var1 === "1")
				{
					if(var2 === "2")
					{
					document.write("Nu ai ghicit.");
					}
					else
					{
						document.write()
					}
				}
				comp(myChoice, pcChoice);
			}
		}
			else
			{
				repeat();

			}