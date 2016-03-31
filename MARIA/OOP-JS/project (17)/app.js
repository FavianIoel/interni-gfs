var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes The Sun","The Beatles", "2:54");
var walkingOnSunShine = new Song("Walking On Sun Shine", "Katrina","3:43");

var manOfSteel = new Movie("Man Of Steel",2013,"2:23:00");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunShine);
playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
    playButton.onclick = function(){
        playlist.play();
        playlist.renderInElement(playlistElement);
    };

var nextButton = document.getElementById("next");
    nextButton.onclick = function(){
        playlist.next();
        playlist.renderInElement(playlistElement);
    };

var stopButton = document.getElementById("stop");
    stopButton.onclick = function(){
        playlist.stop();
        playlist.renderInElement(playlistElement);

    };
