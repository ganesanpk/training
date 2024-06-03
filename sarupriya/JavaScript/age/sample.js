// var name ="world";
// console.log(name);

// document.getElementById("demo").innerHTML="example for JS";
// function myFunction(){
//     document.getElementById("demo").innerHTML="changes there";
// }

var da = new Date();
var date = da.getDate();
console.log();
var day = da.getDay();
var days = ['Sun','Mon',"tue","Wed","Thus","Fri","sat"]; // index 0 
console.log(days[day]);
var month = da.getMonth();
var months = ["Jan","Feb","Mar","Apr","May","Jun"];
console.log(months[month]);
var year = da.getFullYear();
console.log( date +" - "+months[month]+" - "+year);