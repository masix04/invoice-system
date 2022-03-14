<?php

include_once "config.php";
include_once "connection.php";

class DB {
    var $conn;
    // var $user = username;
    // var $password = password;
    // var $database = database;
    // var $server = server;

    function open($database = database){

        // Create connection
        $this->conn = new mysqli(SERVER, USERNAME, PASSWORD, DATABASE);
        
        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        // $u = $this->username;
        // $p = $this->password;
        // $db = $this->database;
        // $s = $this->server;

        // $conn = mysqli_connect($s, $u, $p, $db);
        // if($this->connection == false) {
        //     die("ERROR: Could not connect.".mysqli_connect_error());
        // }
        // else {
        //     echo "connection Established.";
        // }
        // $this->connection = $conn;
        // return true;
    } 
    function rawSQLQuery($query) {
        $this->open(DATABASE);
        $result = mysqli_query($this->conn,$query); 
        return $result;
    }  
}