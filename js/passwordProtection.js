document.addEventListener("DOMContentLoaded", encryptPassword)
function encryptPassword() {
    while (currentURL == "https://necroticphantom.github.io/To-Do-List/login" || currentURL == "https://necroticphantom.github.io/To-Do-List/create-account")
        const passwordInput = document.getElementById("myInput");
        passwordInput.addEventListener("keyup", (event) => {
            const password = event.target.value;
            const hiddenPassword = value.replace(/./g, "●");
            passwordInput.password = hiddenPassword;
        });
    };
}; //fix this