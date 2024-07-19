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
        var loginOrCreate = window.prompt("Login or Create Account? ");
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
if (currentURL == "https://necroticphantom.github.io/To-Do-List/create-account") { //change - to %20 (space)???
    document.addEventListener("DOMContentLoaded", signUpEventListener() {
        document.getElementById("createAccountButton").addEventListener("click", signUp);
    });
}
else if (currentURL == "https://necroticphantom.github.io/To-Do-List/login") { //change - to %20 (space)???
    document.addEventListener("DOMContentLoaded", loginEventListener() {
        document.getElementById("loginButton").addEventListener("click", login);
    });
};
function validateEmail(testEmail) {
    return emailRegex.test(String(testEmail));
};
function signUp() {
    signingUp = true
    while (signingUp) {
        let newEmail = document.getElementById("newEmailInput");
        let newUsername = document.getElementById("newUsernameInput");
        let newPassword = document.getElementById("newPasswordInput");
        if (validateEmail(newEmail)) {
            const newUserDetails = {email: newEmail, username: newUsername, password: newPassword};
            const newUser = JSON.stringify(userDetails);
            localstorage.setItem(newUsername, newUser);
            signingUp = false;
            window.location.replace("http://necroticphantom.github.io/To-Do-List/create-account");
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
let userInfo = null;
function login() {
    loggingIn = true;
    while (logginIn) {
        let email = document.getElementById("emailInput");
        let username = document.getElementById("usernameInput");
        let password = document.getElementById("passwordInput");
        let userInfo = localstorage.getItem(username);
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
            document.getElementById("welcome").innerHTML = username;
        };
    };
};
if (userSignedIn == true) {
    var userAuth;
    document.addEventListener("DOMContentLoaded", function() {
        userAuth = document.getElementById("welcome").innerHTML;
    });
    if (userAuth !== "USER NOT SIGNED IN") {
        if (userInfo !== null) {
            var userInfoJS = JSON.parse(userInfo);
            const currentUser = userInfoJS.username;
            const currentUserPassword = userInfoJS.password;
            const currentUserEmail = userInfoJS.email;
            document.getElementById("welcome").innerHTML = "Welcome " + currentUser;
            window.location.replace("http://necroticphantom.github.io/To-Do-List");
        } 
        else {
            window.alert("USER DATA RETRIEVAL FAILED. RELOAD PAGE AND SIGN IN AGAIN");
        };
    }
    else {
        window.alert("USER AUTHENTICATION FAILED");
        accountManagement();
    };
};