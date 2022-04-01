<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once "../../config/connection.php";
include "../../config/db.class.php";

date_default_timezone_set('Asia/Karachi');// Otherwise it shows -5 hours from PAKISTAN


$request_Method = $_SERVER['REQUEST_METHOD'];
if($request_Method == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
} else if($request_Method =='GET') {
    $email = (!empty($_GET['email']))? $_GET['email']: '';
    $password = (!empty($_GET['password']))? $_GET['password']: '';
    $phone = (!empty($_GET['phone']))? $_GET['phone']: '';
}

$date = date('Y-m-d h:i:s');
$db = new DB;

/** NOTE: Verifying User for Login */

        /** NOTE: Creating Query based on parameters passed */
    $verifyUser = "SELECT * from `user` u 
                    WHERE u.password = '".$password."' ";

    if(empty($email) && !empty($phone)) {
        $verifyUser .= "AND u.telephone = ".$phone;
    }
    else if(!empty($email) && empty($phone)){
        $verifyUser .= "AND u.email = '".$email."'";
    }
    else {
        $verifyUser .= "AND (u.email = '".$email."') OR (u.telephone = '".$phone."')";
    }

        /** NOTE: executing the Query */
    $user = $db->rawSQLQuery($verifyUser);
    $response = [];

        /** NOTE: Message to User according to provided Credentials. */
    if (!empty($user->num_rows) && $user->num_rows > 0) {
        // while($row = $user->fetch_assoc()) {
        //     echo "User exists, ".$row['name']." have Logined Successfully.";
        // }
        $response['code'] = 200;
        $response['message'] = 'Success';
    }
    else {
        // echo "Login Failed, User doesn't Exists.\n";
        $response['code'] = 400;
        $response['message'] = 'Login Failed, User doesn\'t Exists';
            // echo "\n\tERROR => ". $verifyUser."<br>".$conn->error;
    }
    echo json_encode($response);