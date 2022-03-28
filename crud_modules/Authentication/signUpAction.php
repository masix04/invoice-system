<?php 

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once "../../config/connection.php";
include "../../config/db.class.php";

date_default_timezone_set('Asia/Karachi');// Otherwise it shows -5 hours from PAKISTAN


$request_Method = $_SERVER['REQUEST_METHOD'];
if($request_Method == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $title = $_POST['title'];
} else if($request_Method =='GET') {
    $name = $_GET['name'];
    $email = $_GET['email'];
    $password = $_GET['password'];
    $phone = $_GET['phone'];
    $title = $_GET['title'];
}

/** NOTE: Sign UP Process Started */

    $date = date('Y-m-d h:i:s');
    $db = new DB;

    $addUser = "INSERT INTO `user` (`name`,`email`,`telephone`,`title`,`password`,`datetime`)
                    VALUES ('$name', '$email', $phone, '$title', '$password', '$date')
                    ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), 
                        `title` = VALUES(`title`), `password` = VALUES(`password`), `datetime` = VALUES(`datetime`)";
 
    if($db->rawSQLQuery($addUser) === TRUE) {
        echo "You have successfully completed signUp Process.";
    }
    else {
        echo "SignUp process didn't completed.\n\tERROR => ". $addUser."<br>".$conn->error;;
    }

return;