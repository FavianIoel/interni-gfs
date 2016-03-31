
<html >
<head>
</head>
<body>
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
        for ($i = 1; $i <= count($movies); $i++) { ?><?php } ?> 

         <img src="<?php print($movie_details['poster']); ?>" title="go to info" alt="poter" class="img-rounded">
       </a>
     </center>  

     <h3>Genre:</h3>
     <?php
     foreach ($movie_details["genres"] as $movie_detail_genres) {
      echo'<a href="movies_genres.php?genre=' . $movie_detail_genres .'">' . $movie_detail_genres . "</a>" . " ";
    }
    ?> 
</section>




<hr class="style-seven">

<section>
  <h3>Cast:</h3>
  <p><img src="<?php print($movie_actors['image1']); ?>" class="img-rounded"> <?php print($movie_actors['actor1'] ); ?> </p>
  <p><img src="<?php print($movie_actors['image2']); ?>" class="img-rounded"> <?php print($movie_actors['actor2'] ); ?> </p>
  <p><img src="<?php print($movie_actors['image3']); ?>" class="img-rounded"> <?php print($movie_actors['actor3'] ); ?> </p>
</section>



<hr  class="style-seven">
<footer>
  <p>
    <a class="btn btn-default" href="index.php" role="button">back to movies</a>
  </p>
</footer>

</body>
</head>