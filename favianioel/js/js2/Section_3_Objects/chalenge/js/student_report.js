var mesaj = '';
var student;
var cauta;

function print(mesaj) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = mesaj;
}

function getStudentReport( student ) {
  var report = '<h2>Student: ' + student.nume + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Puncte: ' + student.puncte + '</p>';
  report += '<p>Realizari: ' + student.realizari + '</p>';
  return report;
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





