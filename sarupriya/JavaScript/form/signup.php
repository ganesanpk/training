<?php
if(isset($_POST['signup'])){
    extract($_POST);
    echo $loginid."<br>".emailid."<br>".$password."<br>";
}


//database connectivity
$server = "localhost";
$user = "root";
$password = "";
$dbname = "sampple";
try{
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
}
catch(PDOException $e){
    echo "Connection failed: " . $e->getMessage();
}
?>