<?php 
/**
* METHODS POWER
*/
class Creature {
//define our proprieties
	public $name = 'default_name';
	public $class = 'default_class';
	public $life  = 'default_life';

//pass arguments to method with constructor
	function __construct($name, $class, $life){
		$this->name = $name;
		$this->class = $class;
		$this->life = $life;
	}

//set a method to return our  Creature proprieties
	public function getStatus(){

		//return some info about our Creature.
		return "Creature Name: ". $this->name ."<br>"
		 			."Class : ". $this->class."<br>"
		 				."HP: ". $this->life. "<br>";
	}
}
//extend Creature class to make items
class Item extends Creature {
	
//pass arguments to method with constructor
	function __construct($name, $class, $life, $utility){
		parent::__construct($name,$class, $life);
		$this->utility = $utility;

	}

//set a method to return our  Creature proprieties
	public function getStatus(){

		//return some info about our Creature.
		return          "Name: ". $this->name ."<br>"
		 			 ."Class : ". $this->class."<br>"
		 				. "HP: ". $this->life. "<br>"
		 		    ."utility: ". $this->utility."<br>";
	}
}


// Declare our new Creature objects
$creatures = array(  

	$orc = new Creature("Pale-Face", "Orc", 100),
	$elf = new Creature("Miranda", "Elf", 900),
	$mamut = new Creature("Brown Vegeta", "Mamut", 1200),
	$pirate = new Creature("Black Beard", "Human", 300),
	$ninja = new Creature("Madara", "Human", 500),
	$saian = new Creature("Goku", "saian", 1400),
	$man = new Creature("My Mother", "No-Human", 900),
	$giant = new Creature("Titan", "Giant", 1000),
	$sword = new Item("Ebony Dark", "sword", 200 , "cut the heads off")

);


// Loop tro each object 
foreach ($creatures as $creature) {
	echo $creature->getStatus() . '<br>';
}
