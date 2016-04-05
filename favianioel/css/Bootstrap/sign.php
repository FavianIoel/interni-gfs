<?php 
require_once('db/db_conn.php');
include 'inc/header.php';
include 'inc/navbar.php';
require('php/sign_val.php');
?>
<section class="container">
	<div class="row">
		<div class="col-md-12 col-sm-12" >
			<div id="logbox">
				<form id="signup" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" >
					<h1>Create an Account</h1>

					<input name="firstname"type="firstname"placeholder="Firstname"class="input pass"/>
					<span class="error"><?php echo $firstnameErr; ?></span>
					<input name="lastname"type="lastname"placeholder="Lastname"class="input pass"/>
					<span class="error"><?php echo $lastnameErr; ?></span>
					<input name="email"type="email"placeholder="Email address"class="input pass"/>
					<span class="error"><?php echo $emailErr; ?></span>
					<input name="password"type="password"placeholder="Choose a password"class="input pass"/>
					<span class="error"><?php echo $passwordErr; ?></span>

					<input type="submit" value="Sign me up!" class="inputButton"/>
				</form>
			</div>
		</div>
		<!--col-md-12-->
	</div>
</section>

<?php include 'inc/footer.php'; ?>