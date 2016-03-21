

var student = "name";
switch(student) {
    case "blue": 
        document.write("This is blue.");
        break;
    case "red":     
        document.write("This is red.");
        break;
    case "green": 
        document.write("This is green.");    
        break;
    case "orange":  
        document.write("This is orange.");    
        break;
    default: 
        document.write("Student not found.");
}

while (true) {

  cauta = prompt('Cauta student: scrie nume [Ion] (sau scrie "inchide" sa inchizi)');
  
  if (cauta === null || cauta.toLowerCase() === 'inchide') {
    break;
  }
  for (var i = 0; i < studenti.length; i += 1) {
    student = studenti[i];
    if ( student.nume.toLowerCase() === cauta ) {
      mesaj = getStudentReport( student );
      print(mesaj);
    } 
  }
}



