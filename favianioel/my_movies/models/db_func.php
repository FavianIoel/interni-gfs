<?php
//  COUNT MOVIES ===================================================
function countMovies() {
    require("conn_db.php");
    try {
        $results = $db->query("
            SELECT COUNT(*) FROM 
            movies
            ");
    } catch (Exception $e) {
        var_dump($e);
        echo "Data could not be retrieved from the database.";
        exit;
    }

    $num_rows = $results->fetchColumn();
    return $num_rows;
}
$countMovies = countMovies();
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