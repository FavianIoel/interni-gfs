<?php 
/**
* METHODS POWER
*/
class Monster {
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

//set a method to return our  monster proprieties
	public function getStatus(){

		//return some info about our Monster.
		return "Monster Name: ". $this->name ."<br>"
		 			."Class : ". $this->class."<br>"
		 				."HP: ". $this->life. "<br>";
	}
}

// Declare our new Monster objects
$monsters = array(  

	$orc = new Monster("Pale-Face", "Orc", 100),
	$elf = new Monster("Miranda", "Elf", 900),
	$mamut = new Monster("Brown Vegeta", "Mamut", 1200),
	$pirate = new Monster("Black Beard", "Human", 300),
	$ninja = new Monster("Madara", "Human", 500),
	$saian = new Monster("Goku", "saian", 1400),
	$man = new Monster("My Mother", "No-Human", 900),
	$giant = new Monster("Titan", "Giant", 1000)

);


// Loop tro each object 
foreach ($monsters as $monster) {
	echo $monster->getStatus() . '<br>';
}
