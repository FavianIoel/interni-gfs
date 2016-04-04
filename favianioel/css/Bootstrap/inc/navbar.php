     <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- Mobile mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.php">Vimperial</a>
        </div>
        
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav ">

            <li><a href="#about">newest</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Man</a></li>
                <li><a href="#">Woman</a></li>
                <li><a href="#">Kids</a></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">Brands</li>
                <li><a href="#">New Balance</a></li>
                <li><a href="#">Adidas</a></li>
                <li><a href="#">Mosquino</a></li>
              </ul>
            </li>
            <li><a href="contact.php">Contact</a></li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
              <li><a href="sign.php"><span class="glyphicon glyphicon-shopping-cart"></span> Cart  |</a></li>
              <li><a href="sign.php"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-log-in"></span><b> Login</b><span class="caret"></a>
                <ul id="login-dp" class="dropdown-menu">
                  <li>
                     <div class="row">
                        <div class="col-md-12">
                           <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                              <div class="form-group">
                                 <label class="sr-only" for="exampleInputEmail2">Email address</label>
                                 <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email address" required>
                              </div>
                              <div class="form-group">
                                 <label class="sr-only" for="exampleInputPassword2">Password</label>
                                 <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required>
                                                       <div class="help-block text-right"><a href="#">Forget the password ?</a></div>
                              </div>
                              <div class="form-group">
                                 <button type="submit" class="btn btn-primary btn-block sign-in">Sign in</button>
                              </div>
                              <div class="checkbox">
                                 <label>
                                 <input type="checkbox"> keep me logged-in
                                 </label>
                              </div>
                           </form>
                        </div>
                        <div class="bottom text-center">
                          New here ? <a href="sign.php"><b>Join Us</b></a>
                        </div>
                     </div>
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
<br><br>

