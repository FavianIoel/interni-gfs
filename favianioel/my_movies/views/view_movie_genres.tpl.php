<html>
  <head>
     <style type="text/css">
         <?php include('views/style.css'); ?>
     </style>   
  </head>
  <body>
	<center>

<?php
include('models/db_func.php');
echo ('<li><a href="movies_details.php?movie=' . $i . '">' . $movie_title . '</a></li><br>');

?>
 </center>

</body>
</head>


