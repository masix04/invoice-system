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
                /**NOTE: Calculating Total Price  */
                $total_price = (!empty($row['quantity']) || $row['quantity'] != NULL || $row['quantity']!=0)? $row['price_per_item'] * $row['quantity'] : 0; 
                $row['total_price'] = $total_price;
                $myArray[] = $row;
            }
            $descion_array = calculate_profit_loss($myArray);

            $response['invoice']['descion'] = $descion_array;
            $response['invoice']['data'] = $myArray;
            $response['message'] = 'Success';
            $response['code'] = 200;

            echo json_encode($response);
        } 
        else 
        {
            echo "0 results";
        }

    function calculate_profit_loss($stored_invoice) {
        $purchase_array = [];
        $sale_array = [];
        $Total_purchase = 0;
        $Total_sale = 0;

        $descion_Array = [];

        /** NOTE:  You got 2 arrays */
        foreach($stored_invoice as $row) {
            /** NOTE: Calculating Profit / Loss */
            if($row['type'] == 'Purchase') {
                array_push($purchase_array, $row);
            }
            if($row['type'] == 'Sale') {
                array_push($sale_array, $row);
            }
        }
        /**NOTE: You got Total amounts */
        for($i=0; $i<count($purchase_array); $i++) {
            $Total_purchase = $Total_purchase + $purchase_array[$i]['total_price'];
        }
        for($i=0; $i<count($sale_array); $i++) {
            $Total_sale = $Total_sale + $sale_array[$i]['total_price'];
        }

        $descion_Array['Total_purchase'] = $Total_purchase;
        $descion_Array['total_sale'] = $Total_sale;
        $Descion_Amount = ($Total_sale - $Total_purchase);

        if($Descion_Amount > 0) {
            $profit = $Descion_Amount;
            $loss = 0;
        } elseif($Descion_Amount < 0) {
            $profit = 0;
            $loss = $Descion_Amount;
        } else {
            $loss = 0;
            $profit = 0;
        }
        
        $descion_Array['loss'] = ($loss < 0)? ($loss * -1): $loss;
        $descion_Array['profit'] = $profit;

        return $descion_Array;
    }