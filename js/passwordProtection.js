const passwordInput = document.getElementById("myInput");

passwordInput.addEventListener("keyup", (event) => {
    const password = event.target.value;
    const hiddenPassword = value.replace(/./g, "●");
    passwordInput.password = hiddenPassword;
});