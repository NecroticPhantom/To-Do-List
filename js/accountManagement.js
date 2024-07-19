//local storage not working
//replace visual password masking inputs with proper form and post method + hashing to fully secure data (this can wait as this is just a To-Do list website, securtiy isn't even neccessary)
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i;
const currentURL = window.location
var userSignedIn = false;
if (userSignedIn == false && currentURL == "https://necroticphantom.github.io/To-Do-List/") {
    window.onload = accountManagement(); //change to onDOMcontentloaded
};
function accountManagement() { //make an account with admin privileges
    accountManaging = true;
    while (accountManaging) {
        var loginOrCreate = window.prompt("Login or Create Account? "); //add an if undefined option, telling user to reload the page
        var loginOrCreate = loginOrCreate.toLowerCase();
        if (loginOrCreate == "login") {
            accountManaging = false;
            window.location.replace("http://necroticphantom.github.io/To-Do-List/login"); //change - to %20 (space)???
        }
        else if (loginOrCreate == "create" || loginOrCreate == "create account") {
            accountManaging = false;
            window.location.replace("http://necroticphantom.github.io/To-Do-List/create-account"); //change - to %20 (space)???
        }
        else {
            window.alert("INVALID INPUT");
        };
    };
};
function signUpEventListener() {
    document.getElementById("createAccountButton").addEventListener("click", signUp);
};
function loginEventListener() {
    document.getElementById("loginButton").addEventListener("click", login);
};
if (currentURL == "https://necroticphantom.github.io/To-Do-List/create-account") { //change - to %20 (space)???
    document.addEventListener("DOMContentLoaded", signUpEventListener())
}
else if (currentURL == "https://necroticphantom.github.io/To-Do-List/login") { //change - to %20 (space)???
    document.addEventListener("DOMContentLoaded", loginEventListener())
};
function validateEmail(testEmail) {
    return emailRegex.test(String(testEmail));
};
function signUp() {
    signingUp = true
    while (signingUp) {
        let newEmail = document.getElementById("newEmailInput").value;
        let newUsername = document.getElementById("newUsernameInput").value;
        let newPassword = document.getElementById("newPasswordInput").value;
        if (validateEmail(newEmail)) {
            const newUserDetails = {email: newEmail, username: newUsername, password: newPassword};
            const newUser = JSON.stringify(newUserDetails);
            localStorage.setItem(newUsername, newUser);
            signingUp = false;
            window.location.replace("http://necroticphantom.github.io/To-Do-List/login");
            window.onload = document.getElementById("loginSubmit").addEventListener("click", login);
            login();
        }
        else {
            window.alert("INVALID EMAIL");
            signingUp = false;
            signUpEventListener();
        };
    };
};
var userInfo = null;
const currentUser = null;
function signInEndstep() {
    if (userSignedIn == true) {
        if (userInfo !== null) {
            const currentUser = userInfo.username;
            window.location.replace("http://necroticphantom.github.io/To-Do-List");
            onload = document.getElementById("welcome").innerHTML = "Welcome " + currentUser;
        } 
        else {
            window.alert("USER DATA RETRIEVAL FAILED. RELOAD PAGE AND SIGN IN AGAIN");
        };
    };
};
function login() {
    loggingIn = true;
    while (loggingIn) {
        let email = document.getElementById("email-input").value;
        let username = document.getElementById("username-input").value;
        let password = document.getElementById("password-input").value;
        var userInfo = localStorage.getItem(username);
        var userInfo = JSON.parse(userInfo);
        let usernameCheck = userInfo.username;
        let passwordCheck = userInfo.password;
        let emailCheck = userInfo.email;
        if (userInfo === null) {
            window.alert("INVALID USERNAME");
            logginIn = false;
            loginEventListener();
        }
        else if (password !== passwordCheck) {
            window.alert("INVALID PASSWORD");
            logginIn = false;
            loginEventListener();
        }
        else if (email !== emailCheck) {
            window.alert("INVALID EMAIL");
            logginIn = false;
            loginEventListener();
        }
        else {
            loggingIn = false;
            userSignedIn = true;
            SignInEndstep();
        };
    };
};