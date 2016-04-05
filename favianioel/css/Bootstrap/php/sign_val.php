<?php 
//define values and set empty values:
$firstnameErr = $lastnameErr = $emailErr = $passwordErr = "";
$firstname = $lastname = $email = $password = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["firstname"])) {
     $firstnameErr = "* Firstname is required";
   } else {
     $firstname = test_input($_POST["firstname"]);
     if (!preg_match("/^[a-zA-Z ]*$/", $firstname)) {
     	$nameErr = "* Only letters and white space allowed"; 
     }
   }
  
   if (empty($_POST["lastname"])) {
     $lastnameErr = "* Lastname is required";
   } else {
     $lastname = test_input($_POST["lastname"]);
   }

   if (empty($_POST["email"])) {
     $emailErr = "* Email is required";
   } else {
     $email = test_input($_POST["email"]);
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "* Invalid email format"; 
     }
  }
    


   if (empty($_POST["password"])) {
     $passwordErr = "* password is required";
   } else {
     $password = test_input($_POST["password"]);
   }
}

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}
if (isset($_POST['password'])) {
	$i=0;
}
?> 