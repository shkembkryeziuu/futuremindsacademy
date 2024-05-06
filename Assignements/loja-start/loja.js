let rrafshi = document.createElement("canvas");
rrafshi.width = 512;
rrafshi.height = 480;
document.body.appendChild(rrafshi);

const ctx = rrafshi.getContext("2d");

let br = document.createElement("br");
document.body.appendChild(br);

let startOver = documnet.createElement("button");
startOver.innerText = "Start Over";
startOver.style.fontSize = "20px";
startOver.style.padding = "10px";
startOver.style.visibilty = "hidden";
document.body.appendChild(startOver);

let points = 0;
let winpt = 5;
let gameover = false;

let bgrReady = false;
let bgrImg = new Image();
bgrImg.src = "images/background.png";
bgrImg.onload = function () {
  bgrReady = true;
};

let macaReady = false;
let maca = {};
maca.x = 300;
maca.y = 300;
maca.speed = 10;
maca.width = 128;
maca.height = 128;
let macaImg = new Image();
macaImg.src = "images/cat.png";
macaImg.onload = function () {
  macaReady = true;
};

let miuReady = false;
let miu = {};
miu.x = 50;
miu.y = 50;
miu.width = 52;
miu.height = 54;
let miuImg = new Image();
miuImg.src = "images/mouse.png";
miuImg.onload = function () {
  miuReady = true;
};

addEventListener("keydown", function (e) {
  if (e.key == "ArrowUp") {
    maca.y -= maca.speed;
  }

  if (e.key == "ArrowDown") {
    maca.y += maca.speed;
  }

  if (e.key == "ArrowLeft") {
    maca.x -= maca.speed;
  }

  if (e.key == "ArrowRight") {
    maca.x += maca.speed;
  }
});

let miuPosition = function () {
  miu.x = Math.floor(Math.random() * 422) + 20;
  miu.y = Math.floor(Math.random() * 360) + 50;
};

let count = 20;
const timer = setInterval(function () {
  if (count !== 0) {
    count--;
  } else {
    gameover = true;
    startOver.style.visibility - "visible";
  }
}, 1000);

let render = function () {
  if (bgrReady) {
    ctx.drawImage(bgrImg, 0, 0);
  }
  if (macaReady) {
    ctx.drawImage(macaImg, maca.x, maca.y);
  }

  if (miuReady) {
    ctx.drawImage(miuImg, miu.x, miu.y);
  }

  if (maca.x > rrafshi.width - maca.width / 2) {
    maca.x = 0 - maca.width / 2;
  }

  if (maca.x < 0 - maca.width / 2) {
    maca.x = rrafshi.width - maca.width / 2 - 6;
  }

  if (maca.y < 0 - maca.width / 2) {
    maca.y = rrafshi.height - maca.height / 2 - 6;
  }

  if (maca.y > rrafshi.height - maca.height / 2) {
    maca.y = 0 - maca.width / 2;
  }

  if (
    maca.x < miu.x + miu.width &&
    maca.y > miu.y - maca.height &&
    maca.x > miu.x - maca.width &&
    maca.y < miu.y + miu.height
  ) {
    miuPosition();
    if (count != 0) points++;
  }

  ctx.font = "20px serif";
  ctx.fillStyle = "white";
  ctx.fillText("Points:" + points, 20, 30);
  ctx.fillText("Time:" + count, 400, 30);

  if (gameover) {
    if (points >= winpt && count === 0) {
      ctx.fillText("YOU WIN!", 200, 30);
    }
    if (points <= 4 && count === 0) {
      ctx.fillText("YOU LOSE!", 200, 30);
    }
  }
};

startOver.addEventListener("click", function () {
  location.reload;
});
setInterval(render, 10);
