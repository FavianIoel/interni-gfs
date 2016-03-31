<?php  
$servername = "localhost";
$username = "root";
$password = "";
$dbname= "movielist";

try {
    $db = new PDO("mysql:host=" . $servername . ";dbname=" . $dbname . "", $username, $password);
	$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	$db->exec("SET NAMES 'utf8'"); 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    exit;
    }
?>