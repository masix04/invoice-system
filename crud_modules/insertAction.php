<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// // header('Access-Control-Allow-Methods: POST');
// header('Content-Type : application/json');
// header('Cache-Control: no-cache');

require_once "../config/connection.php";
include "../config/db.class.php";

date_default_timezone_set('Asia/Karachi');// Otherwise it shows -5 hoursn from PAKISTAN


$request_Method = $_SERVER['REQUEST_METHOD'];
if($request_Method == 'POST') {
    $type = $_POST['Type'];
    $price = $_POST['Price'];
    $name = $_POST['Name'];
    $quantity = $_POST['Quantity'];
} else if($request_Method =='GET') {
    $type = $_GET['Type'];
    $price = $_GET['Price'];
    $name = $_GET['Name'];
    $quantity = $_GET['Quantity'];
}
// echo $request_Method;

$date = date('Y-m-d h:i:s');

$db = new DB;
$getDBTableDataCount_query = "SELECT COUNT(*) count from product";
$dataCount = $db->rawSQLQuery($getDBTableDataCount_query);
$dbDataCount = 0;
/**NOTE: 
 *  Geeting Data from the form tof Object to Needed items. Using MYSQL Function.
 */
while($row = mysqli_fetch_assoc($dataCount)) {
    $dbDataCount = $row['count'];
}

$AddToProducts_query = "INSERT into Product(`id`,`name`) VALUES(".($dbDataCount+1).", '$name')";
// echo "\n".$AddToProducts_query;
if( $db->rawSQLQuery($AddToProducts_query) === TRUE) {
    echo "Product Data has been saved Successfully\n<br>";
} else{
    echo "ERROR => ". $AddToProducts_query."<br>".$conn->error;
}
$AddToTransactionDetails_query = "INSERT into transaction_detail(`product_id`,`quantity`,`price_per_item`,`type`,`datetime`) 
                                  VALUES(".($dbDataCount+1).", $quantity, $price, '$type', '$date') 
                                        ON DUPLICATE KEY UPDATE `quantity` = VALUES(`quantity`), 
                                        `price_per_item` = VALUES(`price_per_item`),  `type` = VALUES(`type`),  `datetime` = VALUES(`datetime`)";
// echo $AddToTransactionDetails_query;
// echo "\n".$AddToTransactionDetails_query;

if( $db->rawSQLQuery($AddToTransactionDetails_query) === TRUE) {
    echo "Transaction Detail's Data has been saved Successfully\n";
} else{
    echo "ERROR => ". $AddToTransactionDetails_query."<br>".$conn->error;
}
return;