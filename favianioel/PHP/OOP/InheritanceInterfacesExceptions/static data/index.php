<?php 
class Employee {
	static public $NextId = 4;
	public $ID;

	public function __construct() {
		$this->ID = self::$NextId++;
	}
}

$bob = new Employee;
$jan = new Employee;
$simon = new Employee;

print $bob->ID . "\n";
print $jan->ID . "\n";
print $simon->ID . "\n";
print Employee::$NextId . "\n";

 ?>