var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) 
{
	computerChoice = "rock";
}
else if(computerChoice <= 0.67) 
{
	computerChoice = "paper";
} 
else
{
	computerChoice = "scissors";
} 
console.log("Computer: " + computerChoice);
var compare = function (choice1,choice2)
{
    if (choice1 === choice2)
    {
        console.log ("The result is a tie!");
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            console.log("rock wins");
        }
        else
        {
            console.log("paper wins")
        }
    }

};
compare(userChoice, computerChoice);
var mesaj1 = prompt("New game?");
if(mesaj1 === "yes")
{
   var mesaj = prompt("alba sau neagra?");
var pcChoice = Math.random();
if (pcChoice <= 0.70)
{
    pcChoice = "alba";
}
else
{
    pcChoice = "neagra";
}
console.log("Computer:" + pcChoice);

var compare = function(var1, var2)
{
    if(var1 === var2)
    {
        console.log("Rezultat egal!")
    }
    else if(var1 === "alba")
    {
        if(var2 === "neagra")
        {
            console.log ("Ai castigat!")
        }
        else
        {
            console.log("Ai pierdut!")    
        }
    }
    
};
compare(userChoice, pcChoice)
}
else
{
    console.log("La revedere !")
}