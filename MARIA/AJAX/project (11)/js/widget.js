var xhr = new XMLHttpRequest();

xhr.onreadystatechange =function(){
  if(xhr.readyState === 4){
      //console.log(xhr.responseText);

      var employees = JSON.parse(xhr.responseText);
      //console.log(employees);
      var statusHTML = '<ul class="bulleted">';
      for (var i=0;i<employees.length; i+=1){
          if(employees[i].inoffice === true){
              statusHTML += '<li class="in">';
          }else{
              statusHTML += '<li class="out">';

          }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
      }
  statusHTML += '</ul>';
  document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

xhr.open('GET','data/employees.json');
xhr.send();

///////////////////////////////////////////////////////////


var roomRequest = new XMLHttpRequest();

roomRequest.onreadystatechange =function(){
    if( roomRequest.readyState === 4){
        //console.log(xhr.responseText);

        var rooms =JSON.parse( roomRequest.responseText);

        var statusHtml = '<ul class="rooms">';
        for (var i=0;i<rooms.length;i+=1){
            if(rooms[i].available = true){
                statusHtml += '<li class="available">';
            }else{
                statusHtml += '<li class="unavailable">';
            }
            statusHtml += rooms[i].room;
            statusHtml += '</li>';
        }
        statusHtml += '</ul>';
        document.getElementById('roomList').innerHTML = statusHtml;
    }
};

roomRequest.open('GET','data/rooms.json');
roomRequest.send();


