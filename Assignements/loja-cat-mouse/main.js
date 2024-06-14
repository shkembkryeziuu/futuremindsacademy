const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const bgGame = new Image();
bgGame.src = "images/background.png";

let ticTimer = 15;

let points = 0;
let winpt = 5;
let gameover = false;

let bgReady = false;
bgGame.onload = function(){
    bgReady = true;
}


let startOver = document.createElement("button");
startOver.innerText = "Start Over";
startOver.style.fontSize = "20px";
startOver.style.padding = "10px";
startOver.style.visibilty = "hidden";
document.body.appendChild(startOver);

let catObj = {};
    catObj.x = 0;
    catObj.width = 128;
    catObj.height = 128
    catObj.y = 40;
    catObj.speed = 10;

let catReady = false;
const catImg = new Image();
catImg.src = "images/cat.png";
catImg.onload = function(){
    catReady = true;
}

let mouseObj = {};
    mouseObj.width = 52;
    mouseObj.height = 54;

    mouseObj.x = Math.floor(Math.random()*460);
    mouseObj.y =30 + Math.floor(Math.random()*396);

let mouseReady = false;
const mouseImg = new Image();
mouseImg.src = "images/mouse.png";
mouseImg.onload = function(){
    mouseReady = true;
}

function render(){
    if(bgReady) { ctx.drawImage(bgGame, 0, 0); }
    if(catReady) { ctx.drawImage(catImg, catObj.x, catObj.y); }
    if(mouseReady) { ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y); }

    if(catObj.x > 500){ catObj.x=-50; }
    if(catObj.x < -51){ catObj.x=499; }

    if(catObj.y > 460){ catObj.y=-50; }
    if(catObj.y < 40){ catObj.y=41; }

    ctx.font = "20px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Points: " +points, 10, 25);

    ctx.fillText("Timer: "+ticTimer, 400, 25);


    if (catObj.x + catObj.width > mouseObj.x &&
        catObj.y + catObj.height > mouseObj.y &&
        catObj.x+10 < mouseObj.x + mouseObj.width &&
        catObj.y+10 < mouseObj.y + mouseObj.height 
    ){
    mousePos();
    if(ticTimer != 0){
 points++;
    }
       
    }
}

if(ticTimer == 0){mouseObj.x= 3000
    if(points >3){
 ctx.fillStyle = "green"
    ctx.fillText ("You win",220,200)
    }

       if(points <3){
 ctx.fillStyle = "red"
    ctx.fillText ("You lose",220,200)
    }
   
}

addEventListener("keydown", function (e) {

    /*
    switch(e.key){
    case 'ArrowRight':
        catObj.x +=catObj.speed;
        break;
    }
    */

    if(e.key == 'ArrowRight'){
        catObj.x +=catObj.speed;
    }
    if(e.key == 'ArrowLeft'){
        catObj.x -=catObj.speed;
    }
    if(e.key == 'ArrowDown'){
        catObj.y +=catObj.speed;
    }
    if(e.key == 'ArrowUp'){
        catObj.y -=catObj.speed;
    }
});

function timer(){
  if(ticTimer== 0){
    clearInterval(timeRunner)
  }else{
ticTimer--;
  }  
}


  if (gameover) {
    if (points >= winpt && timer === 0) {
      ctx.fillText("YOU WIN!", 200, 30);
    }
    if (points <= 4 && timer === 0) {
      ctx.fillText("YOU LOSE!", 200, 30);
    }
  }

function mousePos(){
     mouseObj.x = Math.floor(Math.random()*460);
    mouseObj.y =30 + Math.floor(Math.random()*396);
}


startOver.addEventListener("click", function () {
  window.location.reload();
});


const renderframe = setInterval(render,1); // thirre render cdo 1/1000 second
const timeRunner=setInterval(timer, 1000);