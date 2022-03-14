<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// // header('Access-Control-Allow-Methods: POST');
// header('Content-Type : application/json');
// header('Cache-Control: no-cache');

require_once "../config/connection.php";
include "../config/db.class.php";



$request_Method = $_SERVER['REQUEST_METHOD'];
if($request_Method == 'POST') {
    $type = $_POST['Type'];
    $price = $_POST['Price'];
    $name = $_POST['Name'];
} else if($request_Method =='GET') {
    // $type = $_GET['PaymentType'];
    // $price = $_GET['ProductPrice'];
    // $name = $_GET['ProductName'];
    $type = $_GET['Type'];
    $price = $_GET['Price'];
    $name = $_GET['Name'];
}
// echo $request_Method;

// $type = $_GET['PaymentType'];
echo($type)."\n";
echo($price)."\n";
echo($name)."\n";
// die;
    // print_r($DataArray);
$db = new DB;
$query = "INSERT into Product() VALUES()";
$result = $db->rawSQLQuery($query);
// echo "Insert Message: ".$result;