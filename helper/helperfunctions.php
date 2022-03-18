<?php

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
    
    $descion_Array['loss'] = $loss;
    $descion_Array['profit'] = $profit;

    return $descion_Array;
}