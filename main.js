var n = 1;
const audio = new Audio();
var btn =  document.getElementById('button');
var img = document.getElementById("image");
btn.addEventListener('click', () => {
    document.getElementById("num").innerText = (`鳴らした回数:${n}回`);
    n=n+1;
    audio.src = "kane.mp3";
    audio.play();
    img.src = "img/年越しナナセ1.png";
    interval();
},false);

audio.onended = (event) =>{
    img.src = "img/年越しナナセ1.png";
};

function imgChange(){
    img.src = "img/年越しナナセ2.png";
}

function interval() {
    setTimeout(imgChange,100)
}