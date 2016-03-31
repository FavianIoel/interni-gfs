<?php
include("models/db_func.php");
include("models/model_genres.php");
?>
<section class="genre"></section>
<?php  

	for ($i=1; $i < count($arrayMovies); $i++) {
		$movie_title = $arrayMovies[$i]["title"];

			if (isset($_GET["genre"])) {
				foreach ($movies[$i]["genres"] as $genre) {	

		    if ($_GET["genre"] === $genre) {
				
				include("views/view_movie_genres.tpl.php");
				
				}
			}
		}
	}
?>
