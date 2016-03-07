var html = '';
var red;
var green;
var blue;
var rgbColor;


function dry(){
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	html += '<div style="background-color:' + rgbColor + '"></div>';

}

for (var i = 0 ; i < 100
	; i++) {
	dry();
};

document.write(html);