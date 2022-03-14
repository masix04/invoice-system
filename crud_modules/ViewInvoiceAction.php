<?php
header('Access-Control-Allow-Origin: *');

require_once "../config/connection.php";
include "../config/db.class.php";

// class product {
//     function addProduct() {

    /** NOTE: 
     *    Below Funcionality is to View Invoice
     */
        $db = new DB;
        $sql = "SELECT p.name,td.* FROM product p
                LEFT JOIN transaction_detail td ON td.`product_id` = p.`id`";

        $result = $db->rawSQLQuery($sql);

        $myArray = array();
        if ( !empty($result->num_rows) && $result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $myArray[] = $row;
            }
            print json_encode($myArray);
        } 
        else 
        {
            echo "0 results";
        }

//     }
// }
 