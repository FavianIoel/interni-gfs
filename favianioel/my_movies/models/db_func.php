<?php
// ARRAY MOVIES =================================================
function arrayMovies() {

    require("conn_db.php");

    try {
        $results = $db->query("
            SELECT * FROM 
            movies
            ");
    } catch (Exception $e) {
        echo "Data could not be retrieved from the database.";
        exit;
    }

    $arrayMv = $results->fetchAll(PDO::FETCH_ASSOC);
    return $arrayMv;
}
$arrayMovies = arrayMovies();

// ARRAY ACTORS ===================================================
function arrayActors() {

    require("conn_db.php");

    try {
        $results = $db->query("
            SELECT * FROM 
            actors
            ");
    } catch (Exception $e) {
        echo "Data could not be retrieved from the database.";
        exit;
    }

    $arrayAc = $results->fetchAll(PDO::FETCH_ASSOC);
    return $arrayAc;
}
$arrayActors = arrayActors();

// GENRES =========================================================

function get_genre_single($ID){
    require("conn_db.php");

    try {
        $results = $db->prepare("SELECT * FROM movies WHERE ID = ? ");
        $results->bindParam(1,$ID);
        $results->execute();
    } catch (Exception $e) {
        echo "Data could not be retrieved from the database.";
        exit;
    }

    $movie = $results->fetch(PDO::FETCH_ASSOC);

    if ($movie === false) return $movie;

    $movie["genres"] = array();

    try {

        $results = $db->prepare("
            SELECT genre 
            FROM movie_genres ps 
            INNER JOIN genres s 
            ON ps.genre_ID = s.ID
            WHERE movie_ID = ?
        ");
        $results->bindParam(1,$ID);
        $results->execute();
        
    } catch (Exception $e) {
        echo "Data could not be retrieved from the database.";
        exit;
    }

    while ( $row = $results->fetch(PDO::FETCH_ASSOC)) {
       $movie["genres"][] = $row["genre"];
    };

    return $movie;
}

// GET PICTURES FOR EACH MOVIE ======================
function get_actor_single($ID){
    require("conn_db.php");

    try {
        $results = $db->prepare("SELECT * FROM movies WHERE ID = ? ");
        $results->bindParam(1,$ID);
        $results->execute();
    } catch (Exception $e) {
        echo "Data could not be retrieved from the database.";
        exit;
    }

    $movie = $results->fetch(PDO::FETCH_ASSOC);

    if ($movie === false) return $movie;

    $movie["actors"] = array();

    try {

        $results = $db->prepare("
            SELECT name , image
            FROM movie_actors ps 
            INNER JOIN actors s 
            ON ps.actor_ID = s.ID
            WHERE movie_ID = ?
        ");
        $results->bindParam(1,$ID);
        $results->execute();
        
    } catch (Exception $e) {
        echo "Data could not be retrieved from the database.";
        exit;
    }

    while ( $row = $results->fetch(PDO::FETCH_ASSOC)) {
       $movie["actors"][] = $row["name"];
       $movie["profile"][] = $row["image"];
    };

    return $movie;
}
// echo '<pre>';
// print_r($arrayMovies);
// print_r($arrayMovies);
// echo '</pre>';