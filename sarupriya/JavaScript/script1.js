function returnCall(){
    var username = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var doj = document.getElementById('doj').value;
    var dept = document.getElementById('dept').value;
    if(username == "" || lname == "" || dob == "" || email == "" || doj == "" || dept == ""){
        console.log("Please enter a required fields");
    } 
    else{
        console.log("Firstname : "+username);
        console.log("Lastname : "+lname);
        console.log("Date of Birth :"+dob);
        console.log("Email ID : "+email);
        console.log("Date of Joining : "+doj);
        console.log("Department : "+dept);
    }
}