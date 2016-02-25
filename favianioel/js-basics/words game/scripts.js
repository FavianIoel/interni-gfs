// COOL GAME WITH PROMPT  :)) 
// ---------------------------


  var name = prompt("Please write a name that comes in your mind .");
  var name2 = prompt("now another name and we almost finish");
  var place = prompt("write a place and we are done .");

  alert("We are done click on 'ok' and let us see what you\'ve done !");

  var message = "Wololo , ";

  message += name.toUpperCase() + " and " +name2.toUpperCase() ;
  message += " are wasting time at " + place.toUpperCase() ;

  var message2 = "<h1>" + message + "</h1>";
  document.write(message2);



