//make localstorage work
function signIn() {
    username = window.prompt("Username: ");
    password = window.prompt("Password: ");
    if (localstorage.getItem("username") === null) { //figure out how to have multiple accounts (e.g. object: account 1, properties: username: <insert username>   password: <insert password>)
        localstorage.username = username
        localstorage.password = password
    };
};