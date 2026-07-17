function createFlower() {
    const flower = document.createElement("div");

    const icons = ["🌸", "🌺", "💖", "💕", "❤️", "🌷"];
    flower.innerHTML = icons[Math.floor(Math.random() * icons.length)];

    flower.style.position = "fixed";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = "-50px";
    flower.style.fontSize = (20 + Math.random() * 20) + "px";
    flower.style.pointerEvents = "none";
    flower.style.zIndex = "9999";

    document.body.appendChild(flower);

    let y = -50;
    let x = parseFloat(flower.style.left);

    const speed = 2 + Math.random() * 2;
    const swing = Math.random() * 2;

    const fall = setInterval(() => {
        y += speed;
        x += Math.sin(y / 40) * swing;

        flower.style.top = y + "px";
        flower.style.left = x + "px";

        if (y > window.innerHeight + 50) {
            clearInterval(fall);
            flower.remove();
        }
    }, 20);
}

setInterval(createFlower, 300);
