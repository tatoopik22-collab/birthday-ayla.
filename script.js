const PASSWORD = "1807";

function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === PASSWORD) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-page").style.display = "block";

        const music = document.getElementById("music");
        if (music) {
            music.play().catch(() => {});
        }

    } else {
        document.getElementById("error").innerHTML = "❌ Password Salah!";
    }
}

function openGift() {
    document.getElementById("giftPage").style.display = "flex";
}

// Efek bunga & love
function createFlower() {
    const item = document.createElement("div");

    const icons = ["🌸","🌺","💖","💕","❤️"];

    item.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    item.style.position = "fixed";
    item.style.left = Math.random()*window.innerWidth+"px";
    item.style.top = "-30px";
    item.style.fontSize = (20+Math.random()*20)+"px";
    item.style.pointerEvents = "none";
    item.style.zIndex = "9999";

    document.body.appendChild(item);

    let y = -30;

    const fall = setInterval(() => {

        y += 3;

        item.style.top = y+"px";

        if(y > window.innerHeight){

            clearInterval(fall);
            item.remove();

        }

    },20);
}

setInterval(createFlower,300);

// Slideshow foto
const photos = document.querySelectorAll(".gallery img");

let index = 0;

setInterval(() => {

    if(photos.length === 0) return;

    photos.forEach(img=>{
        img.style.display="none";
    });

    photos[index].style.display="block";

    index++;

    if(index>=photos.length){
        index=0;
    }

},2500);
