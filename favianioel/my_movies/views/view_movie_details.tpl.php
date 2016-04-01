 <!-- back to movies / heading title . -->
<header>
     <p>
      <a class="btn btn-default" href="index.php" role="button">Home</a>
    </p>

    <center>
      <h1 title="Title"> <?php print($movie_details['title']); ?> </h1>
    </center>
</header>

<section>
      <center>

        <h2 title="year"> <?php print($movie_details['year']); ?> </h2>

        <?php
        for ($i = 0; $i <= count($arrayMovies); $i++) { ?><?php } ?> 

         <img src="<?php print($movie_details['poster']); ?>" title="go to info" alt="poter" class="img-rounded">
       </a>
     </center>  

     <h3>Genre:</h3>
     <?php
     if(is_array($movie_genres["genres"])){
     foreach ($movie_genres["genres"] as $movie_detail_genres) {
      echo'<a href="movies_genres.php?genre=' . $movie_detail_genres .'">' . $movie_detail_genres . "</a>" . " ";
    }
  }
    ?> 
</section>




<hr class="style-seven">

<section>
  <h3>Cast:</h3>
<?php 

if(is_array($movie_cast)){
  for ($i=0; $i < 3; $i++) { 
    ?>
    <p><img src="<?php echo $movie_cast["profile"][$i]; ?>" class="img-rounded"> <?php echo $movie_cast["actors"][$i]; ?> </p>
    <?php
  }//end of for

}//and of if:
 ?>
</section>




<hr  class="style-seven">
<footer>
  <p>
    <a class="btn btn-default" href="index.php" role="button">back to movies</a>
  </p>
</footer>

