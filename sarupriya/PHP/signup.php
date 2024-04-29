<?php
if(isset($_POST)){
    extract($_POST);
    echo $loginid."<br>".$email."<br>".$password."<br>";
}


//database connectivity
$server = "localhost";
$user = "root";
$password = "";
$dbname = "sample";
try{
    $conn = new PDO("mysql:host=$server;dbname=sample", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
}
catch(PDOException $e){
    echo "Connection failed: " . $e->getMessage();
}
?>