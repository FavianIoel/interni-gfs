<?php require_once('db_links.php');

try {
	$conn = new PDO("mysql:host=$servername;$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
	$error = "<br><br><h1>Connection failed: ";
	$error.=  $e->getMessage();
	$error.= "</h1>";
	echo $error;
}