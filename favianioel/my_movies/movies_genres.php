<?php
include('views/inc/header.php');
?>
<?php
include("models/db_func.php");
// include("models/model_genres.php");
?>
<section class="genre"></section>
<?php  
if(is_array($arrayMovies)){
	for ($i=0; $i < count($arrayMovies); $i++) {
		$movie_title = $arrayMovies[$i]["title"];

		if (isset($_GET["genre"])) {
			if (is_array(get_genre_single($i)["genres"])){
				foreach (get_genre_single($i)["genres"] as $genre) {
					
					
					if ($_GET["genre"] === $genre) {
						
						include("views/view_movie_genres.tpl.php");
						
					}
				}
			}
		}
	}
}
?>
<?php
include('views/inc/footer.php');
?>