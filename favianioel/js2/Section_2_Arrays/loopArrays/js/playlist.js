var	playList	=	['7 years - Lukas Graham'];
	playList.push(
		'Work (feat. Drake) - Rihanna',
		'Fast Car (feat. Dakota) - Jonas Blue', 
		'Pillowtalk - Jonas Blue',
		'Love Yourself  - Justin Bieber',
		'Lush Life - Zara Larsson',
		'Stitches - Secret Love Song (feat. Jason Derulo) - Shawn Mendes',
		'Sorry - Justin Bieber',
		'Hymn For The Weekend (feat. Beyoncé) - Coldplay',
		'In Ibiza - Mike Posner',
		'Light It Up (feat. Fuse ODG & Nyla) - Major Lazer',
		'When We Were Young - Adele',
		'All My Friends (feat. Tinashe & Chance the Rapper) - Snakehips',
		'Adventure Of A Lifetime - Coldplay',
		'Get Ugly - Jason Derulo'
		
	);

function print(message) {
	  document.write(message);
}

function printList( list ) {
	var listHTML	=	'<ol>';

		for (var i = 0 ; i < list.length; i++) {

			listHTML	+=	'<li>'	+	list[i]	+	'</li>';

		}
	listHTML	+=	'<ol>';
	print(listHTML);
}

printList(playList);