const currentURL = window.location;
if (currentURL == "https://necroticphantom.github.io/To-Do-List/login" || currentURL == "https://necroticphantom.github.io/To-Do-List/create-account")
window.onload = encryptPassword();
function encryptPassword() {
    const passwordInput = document.getElementById("myInput");
    passwordInput.addEventListener("keyup", (event) => {
        const password = event.target.value;
        const hiddenPassword = value.replace(/./g, "●");
        passwordInput.password = hiddenPassword;
    });
};