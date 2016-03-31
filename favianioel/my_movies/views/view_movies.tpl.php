<?php include('models/db_func.php');  ?>
<html>
<head>
</head>
<body>
  <center>

    <header>
      <h1>My movies</h1>
    </header>
    
    <section>
      <ul> 
       <?php 
         for ($i = 0; $i < count($arrayMovies); $i++) { 
       ?>
       <li>
        <a href="movies_details.php?movie=<?php echo $i; ?>">
         <?php echo $arrayMovies[$i]['title']; 
       echo '</a>';
     echo '</li>';
      } ?>
     <ul> 
     </section>
   </center>

 </body>
 </html>