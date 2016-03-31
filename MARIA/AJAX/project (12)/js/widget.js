var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i=0; i<employees.length; i += 1) {
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
xhr.open('GET', 'data/employees.json');
xhr.send();

///////////////////////////////////////////////////////////


var roomRequest = new XMLHttpRequest();

roomRequest.onreadystatechange = function(){
    if( roomRequest.readyState === 4 && roomRequest.status === 200){
        //console.log(roomRequest.responseText);

        var rooms = JSON.parse(roomRequest.responseText);

        var displayRoom = '<ul class="rooms">';
        for (var i=0;i<rooms.length;i+=1){
            if(rooms[i].available === true){
                displayRoom += '<li class="empty">';
            }else{
                displayRoom += '<li class="full">';
            }
            displayRoom += rooms[i].room;
            displayRoom += '</li>';
        }
        displayRoom += '</ul>';
        document.getElementById('roomList').innerHTML = displayRoom;
    }
};

roomRequest.open('GET','data/rooms.json');
roomRequest.send();