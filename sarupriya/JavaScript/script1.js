function returnCall(){
    const name = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const dob = document.getElementById('dob');
    const email = document.getElementById('email');
    const doj = document.getElementById('doj');
    const dept = document.getElementById('dept');
    const form = document.getElementById('form');
    const name_error = document.getElementById('name_error');
    const email_error = document.getElementById('email_error');
    const lame_error = document.getElementById('lname_error');

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
}
