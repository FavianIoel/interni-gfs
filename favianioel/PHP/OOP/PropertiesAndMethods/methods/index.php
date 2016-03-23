<?php 
/**
* METHODS POWER
*/
class Product {

	public $name = 'default_name';
	public $class = 'default_class';
	public $life  = 'default_life';
	public function getStatus(){

		//return some info about our Product.
		return "Product Name: ". $this->name ."<br>"
		 			."Class : ". $this->class."<br>"
		 				."HP: ". $this->life. "<br>";
	}
}

$Orc = new Product();

echo $Orc->getStatus();

