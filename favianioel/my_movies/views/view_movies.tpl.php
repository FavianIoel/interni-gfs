<center>
    <header>
      <h1>My movies</h1>
    </header>
    
    <section>
      <ul> 
       <?php 
         if(is_array($arrayMovies)){
         for ($i = 0; $i < count($arrayMovies); $i++) { 
       ?>
       <li>
        <a href="movies_details.php?movie=<?php echo $i; ?>">
         <?php echo $arrayMovies[$i]['title']; 
       echo '</a>';
     echo '</li>';
      } 
}
      ?>
     <ul> 
     </section>
   </center>
