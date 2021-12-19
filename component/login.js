function signup(e) {
    e.preventDefault();
    let myform = document.getElementById("myform");
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let mobile = document.getElementById("mobile").value;

    if (name == "") {
        alert("Please enter your name");
        return false;
    } else if (lastname == "") {
        alert("Please enter your last name");
        return false;
    } else if (email == "") {
        alert("Please enter your email");
        return false;
    } else if (password == "") {
        alert("Please enter your password");
        return false;
    } else if (confirmPassword == "") {
        alert("Please enter your confirm password");
        return false;
    } else if (mobile == "") {
        alert("Please enter your mobile");
        return false;
    } else if (password != confirmPassword) {
        alert("Password and confirm password does not match");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    } else if (mobile.length < 10) {
        alert("Mobile must be at least 10 characters");
        return false;
    } else if (email.indexOf("@") == -1) {
        alert("Please enter a valid email");
        return false;
    } else if (email.indexOf(".") == -1) {
        alert("Please enter a valid email");
        return false;
    } else if (email.indexOf("@") > email.indexOf(".")) {
        alert("Please enter a valid email");
        return false;
    } else if (email.indexOf("@") == 0) {
        alert("Please enter a valid email");
        return false;
    } else if (email.indexOf(".") == email.length - 1) {
        alert("Please enter a valid email");
        return false;
    } else if (email.indexOf("@") == email.length - 1) {
        alert("Please enter a valid email");
        return false;
    }

    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]));
    }

    let user = {
        name: name,
        lastname: lastname,
        email: email,
        password: password,

        mobile: mobile,
    };

    let arr = JSON.parse(localStorage.getItem("users"));
    arr.push(user);
    localStorage.setItem("users", JSON.stringify(arr));
    alert("You have successfully registered");
    myform.reset();
    window.location.href = "";
}

// login

let loggedInUser = JSON.parse(localStorage.getItem("users"));

function signin(e) {
    e.preventDefault();
    let loginform = document.getElementById("loginform");
    let loginemail = document.getElementById("loginemail").value;
    let loginpassword = document.getElementById("loginpassword").value;

    let all_users = JSON.parse(localStorage.getItem("users"));
    let user = all_users.find((user) => user.email === loginemail);
    if (user === undefined) {
        alert("Email does not exist");
    } else if (user.password !== loginpassword) {
        alert("Password is incorrect");
    } else {
        alert("Login successful");
        loginform.reset();
        window.location.href = "../products/landingpage.html";
    }
}

all_users.forEach((user) => {
    if (user.email === loginemail) {
        if (user.password === loginpassword) {
            alert("Login successful");
            loginform.reset();
            window.location.href = "../products/landingpage.html";

        } else {
            alert("Password is incorrect");
        }
    }
});
