const PASSWORD = "1807";

function checkPassword() {
    const input = document.getElementById("password").value;

    if (input === PASSWORD) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-page").style.display = "flex";
    } else {
        document.getElementById("error").innerHTML = "❌ Password Salah!";
    }
}

// buka hadiah
document.addEventListener("DOMContentLoaded", () => {

    const gift = document.getElementById("giftButton");

    if(gift){
        gift.onclick = function(){

            document.getElementById("gift").style.display="none";

            document.getElementById("content").style.display="block";

            const music=document.getElementById("music");
            if(music) music.play();

        };
    }

});
