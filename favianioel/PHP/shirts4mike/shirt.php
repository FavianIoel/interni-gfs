<?php include("inc/products.php"); 

if (isset($_GET["id"])) {
	$product_id = $_GET["id"];
		if (isset($products[$product_id])) {
			$product = $products[$product_id];
		} 
}
if (!isset($product)){
	header("Location: shirts.php");
	exit();
}

$section = "shirts";
$pageTitle = $product["name"];
include("inc/header.php");

echo <<<EOT

<div class="section page">
		<div class="wrapper">
			<div class="breadcrumb"><a href="shirts.php">Shirts</a> &gt; $product[name]
			</div>
			<div class="shirt-picture">
				<span>
					<img src="$product[img]" alt="$product[name]">
				</span>
			</div>
			<div class="shirt-details">
				<h1>
					<span class="price">
						$$product[price]
					</span>
					 	$product[name]
				</h1>
				<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
					<input type="hidden" name="cmd" value="_s-xclick">
					<input type="hidden" name="hosted_button_id" value="$product[paypal]">
					<input type="hidden" name="item_name" value="$product[name]">
					<table>
						<tr>
							<th>
								<input type="hidden" name="on0" value="Size">
								<label for="os0">Size</label>
							</th>
							<td>
										<select name="os0" id="os0">
EOT;
											foreach ($product["sizes"] as $size) {
												echo "<option value=". $size .">" . $size ."</option>";
											}
echo <<<END
										</select> 
							</td>
						</tr>
					</table>
					<input type="submit" value="Add to Cart" name="submit">
				</form>
			<p class="note-designer">* All shirts are designed by Mike the Frog.</p>
		</div>
	</div>
</div>

END;

include("inc/footer.php");
?>