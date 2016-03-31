<?php 
include("models/db_func.php");
include ('models/model_actors.php');

 if (isset($_GET['movie'])) {

        //Display all movie details 
        $movie_position_in_array = $_GET['movie'];
        $movie_details = $arrayMovies[$movie_position_in_array];
        $movie_actors= $arrayActors[$movie_position_in_array];
}

        include('views/view_movie_details.tpl.php');


 ?>


