<?php
include('views/inc/header.php');
?>
<?php 
include("models/db_func.php");
// include ('models/model_actors.php');

 if (isset($_GET['movie'])) {

        //Display all movie details 
        $movie_position_in_array = $_GET['movie'];
        $movie_details = $arrayMovies[$movie_position_in_array];
        $movie_actors= $arrayActors[$movie_position_in_array];

        // display genres for each movie
        $movie_genres = get_genre_single($movie_position_in_array );

         // display cast for each movie
         $movie_cast = get_actor_single($movie_position_in_array);
}

        include('views/view_movie_details.tpl.php');


 ?>
<?php
include('views/inc/footer.php');
?>