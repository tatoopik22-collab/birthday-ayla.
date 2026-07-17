const PASSWORD = "1807";

// LOGIN
function checkPassword() {
    const input = document.getElementById("password").value;

    if (input === PASSWORD) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-page").style.display = "block";
    } else {
        document.getElementById("error").innerHTML = "❌ Password Salah!";
    }
}

// TOMBOL HADIAH
document.addEventListener("DOMContentLoaded", function () {

    const giftButton = document.getElementById("giftButton");

    if (giftButton) {
        giftButton.addEventListener("click", function () {

            alert("🎉 Selamat Ulang Tahun Ayla ❤️\n\nSemoga semua impianmu tercapai, selalu sehat, selalu bahagia, dan aku akan selalu ada buat kamu ❤️");

        });
    }

});
