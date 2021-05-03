var backgrounds;
var bee;
var beeimage;

function preload() {
   backgrounds = loadImage("background.png");
   beeimage= loadAnimation("bee1.png","bee2.png");
}

function setup() {
  createCanvas(800,800);

  bee=createSprite(30,30,20,20);
  bee.addImage(beeimage);
  bee.scale=0.7;
}


function draw() {
  background(backgrounds);  
  drawSprites();
}