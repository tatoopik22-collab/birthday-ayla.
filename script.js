const PASSWORD = "1807";

const loginPage = document.getElementById("login-page");
const mainPage = document.getElementById("main-page");
const errorText = document.getElementById("error");
const passwordInput = document.getElementById("password");

function checkPassword() {

    if (passwordInput.value === PASSWORD) {

        loginPage.style.opacity = "0";

        setTimeout(() => {

            loginPage.style.display = "none";

            mainPage.style.display = "flex";

        }, 500);

    } else {

        errorText.innerHTML = "❌ Password Salah!";

        passwordInput.value = "";

        passwordInput.focus();

    }

}

passwordInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        checkPassword();

    }

});

document.getElementById("giftButton").onclick = function(){

    alert("🎁 Selamat datang ❤️\n\nHadiahnya akan kita buat di langkah berikutnya 😊");

};
