<?php 
function get_list_view_html($product_id, $product) {
	$output = "";

	$output = $output . "<li>";
	$output = $output . '<a href="shirt.php?id='. $product_id .'">';
	$output = $output . '<img src="'. $product["img"] .'" alt="' . $product["name"] . '">';
	$output = $output . "<p>View Details</p>";
	$output = $output . "</a>";
	$output = $output . "</li>";

	return $output;
}
 ?>
<?php 
$products[101] = array(
	"name" => "Logo Shirt, Red",
	"img" => "img/shirts/shirt-101.jpg",
	"price" => 20,
	"paypal" => "CS823L78DMD4G",
	"sizes" => array('Small','Medium','Large', 'X-Large' )
	);
$products[102] = array(
	"name" => "Mike frog Shirt, Gray",
	"img" => "img/shirts/shirt-102.jpg",
	"price" => 25,
	"paypal" => "2M9Z3YLSGZT32",
	"sizes" => array('Small','Medium','Large', 'X-Large' )
	);
$products[103] = array(
	"name" => "Mike frog Shirt, Blue",
	"img" => "img/shirts/shirt-103.jpg",
	"price" => 25,
	"paypal" => "7MYSRYXMGHGR8",
	"sizes" => array('Small','Medium','Large', 'X-Large' )
	);
$products[104] = array(
	"name" => "Logo Shirt, Green",
	"img" => "img/shirts/shirt-104.jpg",
	"price" => 20,
	"paypal" => "HVHMWJRJKCDQU",
	"sizes" => array('Small','Medium','Large', 'X-Large' )
	);
$products[105] = array(
	"name" => "Mike frog Shirt, Yellow",
	"img" => "img/shirts/shirt-105.jpg",
	"price" => 25,
	"paypal" => "URX8CH92WMHCG",
	"sizes" => array('Small','Medium','Large', 'X-Large' )
	);
$products[106] = array(
	"name" => "Logo Shirt, Gray",
	"img" => "img/shirts/shirt-106.jpg",
	"price" => 20,
	"paypal" => "A6WBQL8B6J9N8",
	"sizes" => array('Small','Medium','Large', 'X-Large' )
	);
$products[107] = array(
	"name" => "Logo Shirt, Turquoise",
	"img" => "img/shirts/shirt-107.jpg",
	"price" => 20,
	"paypal" => "SRH36K3HFF9RL",
	"sizes" => array('Small','Medium','Large', 'X-Large' )
	);
$products[108] = array(
	"name" => "Mike frog Shirt, Orange",
	"img" => "img/shirts/shirt-108.jpg",
	"price" => 25,
	"paypal" => "5HSUKN6MH52YU",
	"sizes" => array('Large', 'X-Large' )
	);

	?>