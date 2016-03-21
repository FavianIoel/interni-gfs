var playlist = new Playlist();

//songs
var sax = new Song("Sax","Fleur","3:56");
var hotlineBling = new Song("Hotline Bling","Drake","4:27");

//movies
var manOfSteel = new Movie("Man of steel", 2013, "2:23:00");


//add to playlist songs
playlist.add(sax);
playlist.add(hotlineBling);

//movies
playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function () {
	 playlist.play();
	 playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function () {
	 playlist.next();
	 playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
playButton.onclick = function () {
	 playlist.stop();
	 playlist.renderInElement(playlistElement);
}