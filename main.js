var n = 1;
const audio = new Audio();
var btn =  document.getElementById('button');
var img = document.getElementById("image");
var change = document.getElementById("change");

btn.addEventListener('click', () => {
    document.getElementById("num").innerText = (`鳴らした回数:${n}回`);
    n=n+1;
    img.src = "img/nanase0.png";
    imgsChange();
},false);

audio.onended = (event) =>{
    img.src = "img/nanase0.png";
};

function imgsChange() {
    if (change.value == 1){
        setTimeout(imgChange1,100)
    }else if (change.value == 2){
        setTimeout(imgChange2,100)
    }else if (change.value == 3){
        setTimeout(imgChange3,100)
    }else if (change.value == 4){
        setTimeout(imgChange4,100)
    }else if (change.value == 5){
        setTimeout(imgChange5,100)
    }else if (change.value == 6){
        setTimeout(imgChange6,100)
    }else{
        setTimeout(random,100)
    };
};

function imgChange1(){
    img.src = "img/nanase1.png";
    audio.src = "SE/kane1.mp3";
    audio.play();
};

function imgChange2(){
    img.src = "img/nanase2.png";
    audio.src = "SE/kane2.mp3";
    audio.play();
};

function imgChange3(){
    img.src = "img/nanase3.png";
    audio.src = "SE/kane3.mp3";
    audio.play();
};

function imgChange4(){
    img.src = "img/nanase4.png";
    audio.src = "SE/kane4.mp3";
    audio.play();
};

function imgChange5(){
    img.src = "img/nanase5.png";
    audio.src = "SE/kane5.mp3";
    audio.play();
};

function imgChange6(){
    img.src = "img/nanase6.png";
    audio.src = "SE/kane6.mp3";
    audio.play();
};

function random(){
    const i = Math.floor(Math.random() * 6 + 1);
    console.log(i);
    img.src = `img/nanase${i}.png`;
    audio.src = `SE/kane${i}.mp3`;
    audio.play();
};
