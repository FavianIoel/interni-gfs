<?php  

$all_icons = array('twitter', 'facebook' , 'google' , 'linkedin' ,'instagram','github' ,'dribbble' , 'reddit' ,'treehouse');

foreach ($all_icons as $icon) {
	echo '<li><a href=""><span class="icon ' . $icon . '"></span></a></li>';
}


?>
