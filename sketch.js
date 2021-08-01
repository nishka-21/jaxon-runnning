var pathImg,path;
var runner,runner_running
function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  runner_running=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.veocityY=4;
  path.scale=1.2;
  path.velocityY=4;
  
  if(path.y>100){
    path.y=height/2
    }

  runner= createSprite(320,300);
  runner.addAnimation("running",runner_running)
  runner.scale=0.07;
}

function draw() {
  drawSprites();
  background(0);
  if(keyDown("left"))
  {
    runner.velocityX= +5
  };
  if(keyDown("right"))
  {
    runner.velocityX= -5
  };
   drawSprites();
}
