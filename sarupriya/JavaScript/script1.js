<<<<<<< HEAD
<<<<<<< HEAD

document.getElementById('myform').addEventListener("submit", function(event) {
    event.preventDefault();
    var fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
=======
function returnCall(){
=======



















/*function returnCall(){
>>>>>>> 639f51f4b4ff5e3f8d4f49c48837337d2022fefd
    const name = document.getElementById('fname');
    const lname = document.getElementById('lname');
>>>>>>> 5c35989cf7d8e63d807c14658ddfc34152a68d96
    const dob = document.getElementById('dob');
    const email = document.getElementById('email');
    const doj = document.getElementById('doj');
    const dept = document.getElementById('dept');
    const form = document.getElementById('form');
    const name_error = document.getElementById('name_error');
    const email_error = document.getElementById('email_error');
    const lame_error = document.getElementById('lname_error');
<<<<<<< HEAD
    var isValid=true;

    if(fname==""){
        document.getElementById('error').innerHTML="Please Enter Firstname";
        isValid=false;
    }else{
        document.getElementById('error').innerHTML="";
        
    }
    if(isValid){
        event.target.submit();
    }


});




// function returnCall(){
//     const name = document.getElementById('fname');
//     const lname = document.getElementById('lname');
//     const dob = document.getElementById('dob');
//     const email = document.getElementById('email');
//     const doj = document.getElementById('doj');
//     const dept = document.getElementById('dept');
//     const form = document.getElementById('form');
//     const name_error = document.getElementById('name_error');
//     const email_error = document.getElementById('email_error');
//     const lame_error = document.getElementById('lname_error');

//     form.addEventListener('submit',(e) =>
//     {
//         const email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//         if(name == '' || name.value == null){
//             e.preventDefault(); 
//         }
//         if(lname == '' || lname.value == null){
//             e.preventDefault();
//         }
        
//         if(!email.value.match(email_check)){
//             e.preventDefault();
//         }
//     }
// );
// }
=======

    form.addEventListener('submit',(e) =>
    {
        const email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(name == '' || name.value == null){
            e.preventDefault(); 
        }
        if(lname == '' || lname.value == null){
            e.preventDefault();
        }
        
        if(!email.value.match(email_check)){
            e.preventDefault();
        }
    }
);
<<<<<<< HEAD
}
>>>>>>> 5c35989cf7d8e63d807c14658ddfc34152a68d96
=======
}*/
>>>>>>> 639f51f4b4ff5e3f8d4f49c48837337d2022fefd
