					var game2 = prompt ('Do you want to play a game (yes or no) ?')
					function looser()
					{
						alert('Loooossseeerrr!');
					}
					function decenu(){
						alert('Why not?!')

					}
					function repeat1()
					{
						i = 0;
						while(i <=3)
						{
							i++;
							looser();
						}
					}
					function repeat2()
					{
						j = 0;
						while(j <=3)
						{
							j++;
							decenu();
						}
					}
					if(game2 === "yes")
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
							if(var1 == var2)
							{
								document.write("<br>Bravo! Ai ghicit.");
							}
							else
							{
								document.write("<br>Nu ai ghicit. Urmeaza pedeapsa.");
								repeat1();
							}
						}
						comp(myChoice, pcChoice);
					}
					else
					{
						repeat2();

					}
