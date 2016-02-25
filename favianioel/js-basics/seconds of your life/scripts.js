// LET DO SOME MAT
// --------------------------------

  var secondsPerMin = 60;
  var minsPerHour = 60;
  var hoursPerDay = 24;
  var daysPerWeek = 7;
  var weeksPerYear = 52;

  var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay ;
 

  var yearsAlive = prompt("How old are you  ?") ;
  var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;
  document.write("<h1>you lived more than " + secondsAlive + " seconds . live long !</h1>");




