<?php 
$name = "Favian";
$location = "Cluj-Napoca, CJ";
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
      <img src="img/favian.jpg" alt= <?php echo $name; ?> >
    </div>
    <h1><?php echo $name ?></h1>
    <p><?php echo $location; ?> </p>
    <hr />
    <p>I'm a awesome web developer</p>
    <hr />
    <ul class="social">

      <?php 

      include("icons.php");

      ?>

    </ul>
  </section>
  <section class="main">
    <pre>
      <p>
        <?php 
            echo "<br>";
            include("function.php")
         ?>
      </p>
    </pre>
  </section>
</body>
</html>