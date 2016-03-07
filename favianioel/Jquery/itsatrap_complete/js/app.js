//Hide Warning & Show Warning Slowly
//create de function

function mycode () {
    $(".warning").hide().show("slow");
}

//All three of the following syntaxes are equivalent:

    //$( document ).ready( handler )
    //$( handler )

$(document).ready(mycode);
