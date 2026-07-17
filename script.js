const PASSWORD = "1807";

function checkPassword() {
    const input = document.getElementById("password").value;

    if (input === PASSWORD) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-page").style.display = "block";

        // Musik otomatis
        const music = document.getElementById("bgMusic");
        if (music) music.play().catch(() => {});
    } else {
        document.getElementById("error").innerHTML = "❌ Password Salah!";
    }
}

// Tombol buka hadiah
document.addEventListener("DOMContentLoaded", () => {

    const gift = document.getElementById("giftButton");

    if (gift) {
        gift.onclick = function () {

            document.getElementById("gift").style.display = "none";
            document.getElementById("content").style.display = "block";

            alert("❤️ Selamat ulang tahun cantikku ❤️");
        };
    }
});
