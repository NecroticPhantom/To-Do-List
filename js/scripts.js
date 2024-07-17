//make some accounts have admin priviledges
function accountManagment() {
    accountManaging = True;
    while (accountManaging) {
        let loginOrCreate = window.prompt("Login or Create Account? ");
        let loginOrCreate = loginOrCreate.toLowerCase();
        if (loginOrCreate = "login") {
            accountManaging = False;
            window.location.replace("http://necroticphantom.github.io/To-Do-List/login");
        }
        else if (loginOrCreate = "create" || loginOrCreate = "create account") {
            accountManaging = False;
            window.location.replace("http://necroticphantom.github.io/To-Do-List/create-account");
        }
        else {
            windom.alert("INVALID INPUT");
        };
    };
};
const CurrentURL = window.location
if (CurrentURL = "https://necroticphantom.github.io/To-Do-List/create-account") {
    document.getElementById("signUpSubmit").addEventListener("click", signUp);
}
elif (currentURL = "https://necroticphantom.github.io/To-Do-List/login") {
    document.getElementById("loginSubmit").addEventListener("click", login);
};
function signUp() {
    signingUp = True
    while (signingUp) { //make sure email is valid before adding newUserDetails and the rest of the while loop
        let newEmail = document.getElementById("newEmailInput");
        let newUsername = docuemnt.getElementById("newUsernameInput");
        let newPassword = document.getElementById("newPasswordInput");
        const newUserDetails = {email: newEmail, username: newUsername, password: newPassword};
        const newUser = JSON.stringify(userDetails);
        localstorage.setItem(newUsername, newUser);
        loggingIn = False;
        const currentUser = userInfo.username;
        const currentUserPassword = userInfo.password;
        const currentUserEmail = userInfo.email;
        window.location.replace("http://necroticphantom.github.io/To-Do-List");
    };
};
function login() {
    loggingIn = True;
    while (logginIn) {
        let email = document.getElementById("emailInput");
        let username = document.getElementById("usernameInput");
        let password = document.getElementById("passwordInput");
        let userInfo = localstorage.getItem(username);
        let usernameCheck = userInfo.username;
        let passwordCheck = userInfo.password;
        let emailCheck = userInfo.email;
        if (userInfo === null) {
            window.alert("INVALID USER");
        }
        else if (password !== passwordCheck) {
            window.alert("INVALID PASSWORD");
        }
        else if (email !== emailCheck) {
            window.alert("INVALID EMAIL");
        }
        else {
            loggingIn = False;
            const currentUser = userInfo.username;
            const currentUserPassword = userInfo.password;
            const currentUserEmail = userInfo.email;
            window.location.replace("http://necroticphantom.github.io/To-Do-List");
        };
    };
};

//old shit for copying
var newUsername = window.prompt("Username: ");
    var newPassword = window.prompt("Password: ");
    const loginDetails = {username: newUsername, password: newPassword};
    const newUser = JSON.stringify(loginDetails);