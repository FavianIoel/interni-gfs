<?php include 'inc/header.php';
	  include 'inc/navbar.php';
?>
  
  

<section class="container">
	<div class="row">
	    <div class="col-md-12" >
	        <div id="logbox"  >
	            <form id="signup" method="post" action="/signup" >
	                <h1>Create an Account</h1>
					 <input name="user[email]" type="email" placeholder="Email address" class="input pass"/>
	                <input name="user[password]" type="password" placeholder="Choose a password" required="required" class="input pass"/>
	                <input name="user[password2]" type="password" placeholder="Confirm password" required="required" class="input pass"/>
	                <input type="submit" value="Sign me up!" class="inputButton"/>
	            </form>
	        </div>
	    </div>
	    <!--col-md-6-->
   </div>
</section>

<?php include 'inc/footer.php'; ?>