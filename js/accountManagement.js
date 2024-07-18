//local storage not working, popup also being very weird
//encrypt password before storing as it shows in URL (mabey encrypt all values)
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var userSignedIn = false;
if (userSignedIn = false) {
    window.onload = accountManagement();
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
            windom.alert("INVALID INPUT");
        };
    };
};
const currentURL = window.location
if (currentURL == "https://necroticphantom.github.io/To-Do-List/create-account") { //change - to %20 (space)???
    document.getElementById("signUpSubmit").addEventListener("click", signUp);
}
else if (currentURL == "https://necroticphantom.github.io/To-Do-List/login") { //change - to %20 (space)???
    document.getElementById("loginSubmit").addEventListener("click", login);
};
function validateEmail(testEmail) {
    return emailRegex.test(String(testEmail));
};
function signUp() {
    signingUp = true
    while (signingUp) {
        let newEmail = document.getElementById("newEmailInput");
        let newUsername = docuemnt.getElementById("newUsernameInput");
        let newPassword = document.getElementById("newPasswordInput");
        if (validateEmail(newEmail)) {
            const newUserDetails = {email: newEmail, username: newUsername, password: newPassword};
            const newUser = JSON.stringify(userDetails);
            localstorage.setItem(newUsername, newUser);
            signingUp = false;
            const currentUser = userInfo.username;
            const currentUserPassword = userInfo.password;
            const currentUserEmail = userInfo.email;
            var userSignedIn = true;
            window.location.replace("http://necroticphantom.github.io/To-Do-List");
        }
        else {
            window.alert("INVALID EMAIL")
        };
    };
};
let userInfo;
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
        }
        else if (password !== passwordCheck) {
            window.alert("INVALID PASSWORD");
        }
        else if (email !== emailCheck) {
            window.alert("INVALID EMAIL");
        }
        else {
            loggingIn = false;
            document.getElementById("welcome").innerHTML = username;
        };
    };
};
if (userSignedIn = true) {
    var userAuth;
    document.addEventListener("DOMContentLoaded", function() {
        userAuth = document.getElementById("welcome").innerHTML;
    });
    if (userAuth !== "USER NOT SIGNED IN") {
        const currentUser = JSON.parse(userInfo).username;
        const currentUserPassword = JSON.parse(userInfo).password;
        const currentUserEmail = JSON.parse(userInfo).email;
        document.getElementById("welcome").innerHTML = "Welcome " + currentUser;
        window.location.replace("http://necroticphantom.github.io/To-Do-List");
    }
    else {
        window.alert("USER AUTHENTICATION FAILED");
        accountManagement();
    };
};