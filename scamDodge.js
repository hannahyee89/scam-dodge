var player;
var xPos;
let numScams = 3;
let scamX = [400,500,600];
let spd;
let yPos = [0,0,0];
let scamList = []
let numHit;
let start;

function preload(){
  imgPlayer = loadImage('player.png');
  imgScam = loadImage('scam.png');
  scam1 = loadImage('scam1.png');
  scam2 = loadImage('scam2.png');
  scam3 = loadImage('scam3.png');
  scam4 = loadImage('scam4.png');
  scam5 = loadImage('scam5.png');
}

function setup() {
  start = false;
  numHit = 0;
  scamList = [scam1, scam2, scam3, scam4, scam5];
  imageMode(CENTER);
  createCanvas(1000,1000);
  background('white');
  circle(910,20,20);
  circle(950,20,20);
  circle(990,20,20);
  spd = 30;
  xPos = 500;
  text('use left/right or A/D to move player. \n avoid the warning symbols.\n up to 3 lives.\n\nclick the i key to start', 400,500);
for (let i = 0; i < numScams; i++){
  yPos[i] = random(-400,0);
}
}


function draw() {
  if (start==true){
  noStroke();
  fill('white')
  quad(370,0,630,0,630,1000,370,1000);
  stroke('black');
  line(500,0,500,1000);
  line(400,0,400,1000);
  line(600,0,600,1000);
  fill('red');
  image(imgPlayer, xPos, 600, 40,40);
  for (let i = 0; i < numScams; i++){
    image(imgScam, scamX[i], yPos[i], 35,35);
    yPos[i]+=spd;
    if (yPos[i] > 800)
      yPos[i] = random(-400,0);
    if (numHit == 1)
      circle(910,20,20);
    if (numHit == 2)
      circle(950,20,20);
    if (numHit == 3){
      fill('red');
      circle(990,20,20);
      start=false;
      fill('black');
      textSize(20);
      text('game over!', 500,300);
      }
    if (yPos[i] > 598 && yPos[i] < 625 && scamX[i]==xPos){
      numHit++;
      for (let i = 0; i < scamList.length; i++){
       image(scamList[i], random(0,1000), random(100,1000), 200,200);
      }
      spd+=5;      
    }
  }
}
}

function keyPressed(){
  if (key === 'd' || keyCode === RIGHT_ARROW){
    if (xPos<600){
      xPos+=100;
    }
  }
  if (key === 'a' || keyCode === LEFT_ARROW){
    if (xPos>400)
      xPos-=100;
  }
  if (key === 'i'){
    start = true;
  }
}
