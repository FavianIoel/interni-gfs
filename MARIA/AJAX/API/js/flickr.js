$(document).ready(function(){

    $('button').click(function(){
        $("button").removeClass('selected');
        $(this).addClass('selected');

            var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";// "?jsoncallback=?" -- lets us get around the security limitations
            var animal =$(this).text(); //GETS THE TEXT ON THE BUTTON
            var flickerOptions = {//an object to send along with the getJSON request
                tags: animal,
                format: "json"
            };

            function displayPhotos(data){
                var photoHTML ='<ul>';

                $.each(data.items, function(i, photo){
                    photoHTML += '<li class="grid-25 tablet-grid-50">';
                    photoHTML += '<a href="'+photo.link+'" class="image">';
                    photoHTML += '<img src="'+photo.media.m+'"></a></li>';
                });
                photoHTML += '</ul>';
                $('#photos').html(photoHTML);
            }//end displayPhotos
            $.getJSON(flickerAPI, flickerOptions, displayPhotos);
            console.log('loaded');

    });// end click
});//end ready