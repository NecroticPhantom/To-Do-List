document.addEventListener("DOMContentLoaded", checkPage);
var passwordInput;
function checkPage() {
    while (currentURL == "https://necroticphantom.github.io/To-Do-List/login" || currentURL == "https://necroticphantom.github.io/To-Do-List/create-account") {
        if (currentURL == "https://necroticphantom.github.io/To-Do-List/login") {
            var passwordInput = document.getElementById("newPasswordInput");
        }
        else if (currentURL == "https://necroticphantom.github.io/To-Do-List/create-account") {
            var passwordInput = document.getElementById("password-input");
        };
        document.addEventListener("DOMContentLoaded", encryptPassword);
    };
};
function encryptPassword() {
    passwordInput.addEventListener("keyup", (event) => {
        const password = event.target.value;
        const hiddenPassword = value.replace(/./g, "●");
        passwordInput.password = hiddenPassword;
    });
};