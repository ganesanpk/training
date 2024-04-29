<?php
//echo "Welcome to php";
$name = "Sharu";
$age=21;
$salary =1000.00;
$salary = "ready cash";
echo $salary;
echo "<h1>Welcome to $name</h1>";
echo 'Welcome to $name';
$names = ['sharu','priya','gayathiri'];
print_r($names);
print_r($name);
foreach ($names as $value) {
   echo "$value <br>";
}
for($i=0;$i<count($names);$i++){
    echo "$names[$i] <br>";
}
$members = array("Name"=>"Sharu", "age"=>"21", "Salary"=>"2000");
foreach ($members as $x => $y) {
  echo "$x : $y <br>";
}
$var = "Associative arrays use named keys that you assign to them";
$arrcon = explode(" ",$var);
print_r($arrcon);
$strcon = implode(" ",$arrcon);
echo $strcon;

//reverse a string
echo $reversed_s = join(' ',array_reverse(explode(' ',"Hello World")));

?>