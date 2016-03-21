
$(document).ready(function(){
    auto_refresh();
});//end ready

function auto_refresh(){
    ////////////////////////// The Employee In Office ///////////////////
    setInterval(function(){
       var url = "data/employees.json";
        $.getJSON(url, function (response){
            var statusHTML = '<ul class="bulleted">';
            $.each(response, function(index,employee){
                //console.log(index,employee);
                if (employee.inoffice === true){
                    statusHTML +='<li class="in">';
                }else{
                    statusHTML += '<li class="out">';
                }
            statusHTML += employee.name + '</li>';
            });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
        }); //end get

    ////////////////////////// The Room Available///////////////////

        var path = "data/rooms.json";
        $.getJSON(path, function (response) {
            var statusHtml = '<ul class="rooms">';
            $.each(response, function (index, room) {
                //console.log(index,employee);
                if (room.available === true) {
                    statusHtml += '<li class="empty">';
                } else {
                    statusHtml += '<li class="full">';
                }
                statusHtml += room.room + '</li>';
            });
            statusHtml += '</ul>';
            $('#roomList').html(statusHtml);
        });//end $.getJSON
    }, 3000);//end setInterval
}








