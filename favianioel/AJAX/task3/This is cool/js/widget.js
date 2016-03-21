
$(document).ready(function () {
    auto_refresh();
}); // end ready

function auto_refresh() {
  var randomnumber = Math.floor(Math.random() * 100);
  
   $.getJSON('data/rooms.json', function (data) {
    var statusHTML = '<ul class="rooms">';
    $.each(data,function (index, rooms) {
      if (rooms.available === true) {
        statusHTML +='<li class="empty">';
      } else {
        statusHTML +='<li class="full">';
      }
      statusHTML += rooms.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML)
  }); // end getJSON
  
  $.getJSON('data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON

console.log('reloading');

}

var refreshId = setInterval(auto_refresh, 1000);



