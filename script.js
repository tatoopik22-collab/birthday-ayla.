const gift=document.getElementById("gift");

const content=document.getElementById("content");

const music=document.getElementById("music");

gift.onclick=function(){

gift.style.display="none";

content.style.display="block";

music.play();

createHeart();

}

function createHeart(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

},300);

}
