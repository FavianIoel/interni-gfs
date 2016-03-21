function Song( title, artist, duration) {
    Media.call(this, title, duration);// because the "new" key word is missing, Media is acting as a regular function
    this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
    var htmlString = '<li';
    if (this.isPlaying){
        htmlString += ' class="current" ';
    }
        htmlString += '>';
        htmlString += this.title;
        htmlString += ' - ';
        htmlString += this.artist;
        htmlString += '<span class="duration">';
        htmlString += this.duration;
        htmlString += '</span></li>';
    return htmlString;
};