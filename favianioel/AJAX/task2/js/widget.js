//people in & out:::::::::::::::::::::::::::::::::::::::::::::::::::::
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = xhr.responseText;
    var employees = JSON.parse(response);
    var statusHTML  = '<ul class="bulleted">';
    for (var i = 0 ; i<employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json', true);

xhr.send();


//rooms availble ::::::::::::::::::::::::::::::::::::::::::::::::::::::
var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function() {
  if (roomRequest.readyState === 4 && roomRequest.status === 200) {
var rooms = JSON.parse(roomRequest.responseText);
var statusHTML = '<ul class="rooms">';
    var statusHTML  = '<ul class="rooms">';
    for (var i = 0 ; i<rooms.length; i++) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomRequest.open('GET', 'data/rooms.json', true);

roomRequest.send();
