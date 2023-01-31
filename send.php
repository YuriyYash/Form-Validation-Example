<?php

	$name = $_POST['firstNameInput'];	
	$phone = $_POST['phoneInput'];	
			
	$email_content = "User name: $name\n";
	$email_content .= "User phone: $phone\n";
		
	mail ("yashitweb@gmail.com", "Form sender", $email_content);

?>