<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <div class="bg_img style padding">
        <div class="width margin bg-white">
            <h1 class="p-4 color_a txtalign">Registration Page</h1>
            <form action="signup.php" method="post" id="myformreg">
                <div class="p-3 color_a width_a margin">
                    <label for="username">Username</label>
                    <div>
                        <input type="text" id="login" name="loginid" placeholder="Enter your name.." minlength="3"
                            maxlength="20">
                    </div> 
                    <span class="error_msg" id="name_error"></span>
                </div>
                <div class="p-3 color_a width_a margin">
                    <label for="email">Email</label>
                    <div>
                        <input type="email" id="email" name="email" placeholder="Enter your email id.." minlength="3"
                            maxlength="20">
                    </div>
                    <span class="error_msg" id="email_error"></span>
                </div>
                <div class="p-3 color_a width_a margin">
                    <label for="password">Password</label>
                    <div>
                        <input type="text" id="pswd" name="password" placeholder="Enter your password.." minlength="2"
                            maxlength="14">
                    </div>
                    <span class="error_msg" id="pswd_error"></span>
                </div>
                <div class="p-2 txtalign">
                    <input type="submit" id="sumbit" class="bg_a width_b" value="Submit">
                </div>
                <div class="pb-5 txtalign">
                    <a href="#" class="create account" style="text-decoration: none;" onclick="window.location='index.html'">Already have an account?Please
                        login</a>
                </div>
            </form>
        </div>
    </div>

</body>

</html>
<script>
    document.getElementById('myform').addEventListener("submit", function (event) {

        event.preventDefault();
        var login = document.getElementById('login').value;
        var email = document.getElementById('email').value;
        var pswd = document.getElementById('pswd').value;
        var name_error = document.getElementById('name_error').value;
        var email_error = document.getElementById('email_error').value;
        var pswd_error = document.getElementById('pswd_error').value;
        if (login == "") {
            document.getElementById('name_error').innerHTML = "Please enter your firstname";
            isvalid = false;
        }
        else {
            document.getElementById('name_error').innerHTML = "";
        }

        if (email == "") {
            document.getElementById('email_error').innerHTML = "Please enter your email id";
            isvalid = false;
        }
        else {
            document.getElementById('email_error').innerHTML = "";
        }
        if (pswd == "") {
            document.getElementById('pswd_error').innerHTML = "Please enter your password";
            isvalid = false;
        }
        else {
            document.getElementById('pswd_error').innerHTML = "";
        }
    }
    );
</script>