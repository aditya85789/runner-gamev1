var bg,bgImage
var boy,boyImage
var invisibleGround
var stoneImg
var obstacle
var insectImg
var coin,coinImg
var dino,dinoImg
var math1


function preload(){
  bgImage=loadImage("images/background.jpg")
stoneImg=loadImage("images/stone.png")
insectImg=loadImage("images/insect.png");
dinoImg=loadAnimation("images/dino1.png","images/dino2.png","images/dino3.png","images/dino4.png","images/dino5.png","images/dino6.png","images/dino7.png")

coinImg=loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png","images/coin4.png","images/coin5.png","images/coin6.png","images/coin7.png","images/coin8.png","images/coin9.png")
  boyImage=loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png","images/boy5.png","images/boy6.png")
}
function setup() {
  createCanvas(950,500);
  bg=createSprite(475,250,950,500);
 
 bg.addImage(bgImage)

 bg.x=bg.width/2
boy=createSprite(40,420,10,10)
boy.addAnimation("running",boyImage)

boy.scale=0.7

invisibleGround=createSprite(475,470,950,10)
invisibleGround.visible=false;

}

function draw() {
  bg.velocityX=-2
  if(bg.x<300){
    bg.x=bg.width/2
  }
  //jump when the space key is pressed
  if(keyDown("space")&& boy.collide(invisibleGround)){
    boy.velocityY=-13;
  }
//add gravity to the boy
  boy.velocityY=boy.velocityY+0.8


  boy.collide(invisibleGround);    
   
   spawnCoins();
   
 
 math1= Math.round(random(1,2))
 switch(math1){
  case 1 : spawnObstacles();
  break;
  case 2 : spawnDino();
  break;


 }
 drawSprites();
  

}
function spawnObstacles(){
if(frameCount % 100===0){
obstacle=createSprite(950,430,10,10)
var number=Math.round(random(1,2))
switch(number){
  case 1 : obstacle.addImage(stoneImg)
  obstacle.scale=0.1;
  break;
  case 2 : obstacle.addImage(insectImg)
  obstacle.scale=1.2
  break;
 
  
}




obstacle.velocityX=-4
obstacle.lifetime=240

}



}
function spawnCoins(){
  if(frameCount % 95===0){
    coin=createSprite(970,400,10,10)
    coin.addAnimation("coin",coinImg)
    coin.y=Math.round(random(250,320))
    coin.scale=0.2
    coin.velocityX=-3
    coin.lifetime=320


  }
}

function spawnDino(){
  if(frameCount % 100===0){
    dino=createSprite(970,350,10,10)
    dino.addAnimation("dino",dinoImg)
    dino.velocityX=-3
    dino.lifetime=320
    dino.y=Math.round(random(300,370))
    dino.scale=0.3

  }

}