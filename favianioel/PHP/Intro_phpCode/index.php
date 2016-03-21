<?php 

$name = "Favian";
$location = "Oregon, FL";
$ms1 = "Let's Get Started!";
$ms2 = "Hello, world!";

?>
<!DOCTYPE html>
<html>
  <head>
  	<meta charset=utf-8>
  	<title><?php echo $name ; ?> | Treehouse Profile</title>
  	<link href="css/style.css" rel="stylesheet" />
  </head>
  
  <body>
    <section class="sidebar text-center">
      <div class="avatar">
        <img src="img/avatar.png" alt= <?php echo $name; ?> >
      </div>
      <h1><?php echo $name ?></h1>
      <p><?php echo $location; ?> </p>
      <hr />
      <p>Welcome to PHP Basics!</p>
      <hr />
      <ul class="social">
        <li><a href=""><span class="icon twitter"></span></a></li>
      </ul>
    </section>
    <section class="main">
      <p> <?php echo $ms1; ?> </p>
      <p> <?php echo $ms2; ?> </p>
    </section>
  </body>
</html>