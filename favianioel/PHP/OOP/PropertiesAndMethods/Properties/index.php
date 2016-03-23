<?php  

/*
 Properties
 	1. Public ('can be accesed from anywhere in your code .')
 	2. Protected ('can be accessed only from within the class itself, as well as any parent or inherited classes.')
 	3. Private ( 'properties can only be accessed by the class that has defined them.')

 	if you do not define the property as one of three above keywords or you use the var keyword then the property will be public by default.
 */

?>
<?php 

/**
* 
*/
class Product {

	public $name;
}

$p = new Product();
$p->name = "Space Juice Soda";

echo $p->name;

 ?>