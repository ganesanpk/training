// var name="JavaScript";
// console.log(name);
// function myFunction() {
//     document.getElementById("demo2").innerHTML = "Paragraph changed.";
// }
// function myFunction1() {
//     document.getElementById("demo4").innerHTML = "Paragraph changed file path.";
// }
// let x, y, z;  
// x = 5;       
// y = 16;        
// z = x + y; 
// console.log(z)
// const a=7;
// console.log(a)
// //Declare a variable
// let b;
// b="files";
// console.log(b);
// // declare multiple varible in one line
// let c=15,d=20,e=78;
// console.log(c,d,e)

// let f= "5" + 2 + 3;
// console.log(f);

// let g= 2 + 6 + "5";
// console.log(g);

// let $=6;
// let $$my=78;
// console.log($+$$my);

// var h=45;
// {
//     var h=7;
// }
// console.log(h);

// //operators
// let l=5;
// let m=2;
// let n=l+m;
// console.log(n);

// let l1=5;
// let m1=2;
// let n1=l-m;
// console.log(n1);

// let l2=5;
// let m2=2;
// let n2=l*m;
// console.log(n2);

// let l3=5;
// let m3=2;
// let n3=l/m;
// console.log(n3);

// let l4=5;
// let m4=2;
// let n4=l%m;
// console.log(n4);

// var dat = new Date();
// var day = dat.getDay();
// const days=['sun','monday','tuesday','wednessday','thusday','friday','saturday'];
// console.log(days[day]);
// var month = dat.getMonth();
// console.log(month);
// var dates = dat.getDate();
// console.log(dates);

// output
// 01-04-2024
// 01 Mon - 04 April - 2024
// give dob candidate adult or not
// age with month

let da = new Date();
let date = da.getDate();
let day = da.getDay();
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let month = da.getMonth();
const mon = ['01','02','03','04','05','06','07','08','09','10','11','12'];
const months = ['January','February','March','April','May','June','July','August',
                'September','October','November','December'];
let year = da.getFullYear();
console.log(date + "-" + mon[month] + "-" + year);
console.log(date+" "+days[day]+" - "+mon[month]+" "+months[month]+" - "+year);
var birthDate = new Date("2003/02/18");
var age = da.getFullYear() - birthDate.getFullYear();
var m = da.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && da.getDate() < birthDate.getDate())) {
    age-=1;
}
if(m<0){
    m*=-1;
}
if(m!=0 && m < birthDate.getMonth()){
    m=12-m;
}
console.log("Age is"+age+"Years "+m+"Month");
if(age>18){
    console.log("This given date of birth candidate is an adult");
}
else{
    console.log("This given date of birth candidate is not an adult")
}


