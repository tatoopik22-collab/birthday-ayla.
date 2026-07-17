const PASSWORD = "1807";

const loginPage = document.getElementById("login-page");
const mainPage = document.getElementById("main-page");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");

function checkPassword() {
    if (passwordInput.value === PASSWORD) {

        loginPage.style.display = "none";
        mainPage.style.display = "block";

        const music = document.getElementById("music");
        if (music) {
            music.play();
        }

    } else {
        error.innerHTML = "❌ Password Salah!";
        passwordInput.value = "";
    }
}

function openGift() {
    alert("🎉 Happy Birthday Ayla ❤️");
}

window.onload = function () {
    mainPage.style.display = "none";
};
