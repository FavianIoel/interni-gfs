// RANDOM NUMBERS FROM 1 TO 100
// -----------------------------------------------------


// var ruleta = Math.floor(Math.random() * 100) +1 ;

// document.write("<h1>"+ruleta+"</h1>");


//  NUMBER BETWEN
// ----------------------------------------

 var userNumber = parseInt(prompt("set a number !"));

 var rand1 = Math.floor(Math.random()* userNumber)  ;
 var rand2 = userNumber + Math.floor(Math.random()* userNumber) +1 ;


 var message = "<h1>your number " + userNumber + " is betwen " + rand1 + " & " + rand2 +"</h1>";
 document.write(message);


