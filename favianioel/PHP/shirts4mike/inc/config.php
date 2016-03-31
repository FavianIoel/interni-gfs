<?php

    // these two constants are used to create root-relative web addresses
    // and absolute server paths throughout all the code

	define("BASE_URL","/interni-gfs/favianioel/PHP/shirts4mike/");
	define("ROOT_PATH",$_SERVER["DOCUMENT_ROOT"] . "/interni-gfs/favianioel/PHP/shirts4mike/");

	define("DB_HOST", "localhost",true);
	define("DB_NAME", "shirts4mike",true);
	define("DB_PORT", "8889",true);//default: 3306
	define("DB_USER", "root",true);
	define("DB_PASS", "", true);
