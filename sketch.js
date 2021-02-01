var monkey , monkey_running, monkey_collided;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var ground;
var Play, END
var gameOver,restart,gameOverImg,restartImg;
function preload(){
  
  gameOverImg=loadImage("gameOver.png")
  restartImg=loadImage("restart.png");
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkey_collided = loadImage("sprite_0.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(windowWidth,windowHeight);

  ground=createSprite(windowWidth,windowHeight-20,5000,5);
// ground.shapeColor("brown");

monkey=createSprite(windowWidth-1250,windowHeight-45,0,0);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1; 


gameOver=createSprite(windowWidth/2,windowHeight/2);
gameOver.addImage(gameOverImg)

restart=createSprite(windowWidth/2,windowHeight/2+10);
restart.addImage(restartImg);

FoodGroup = new Group();
obstacleGroup = new Group();

}


function draw() {
  background("grey");
stroke("white");
textSize(20);
fill("white");

stroke("red");
textSize(20);
fill("red");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time; "+survivalTime,windowWidth,50);

if (gameState===Play){

  spawnbanana();
spawnObstacle();

if(keyDown("space")) {
  monkey.velocityY = -20 ;
  monkey.velocityY = monkey.velocityY + 0.8;
}

gameOver.visible=false;
restart.visible=false;

if (monkey.isTouching(FoodGroup)){
  FoodGroup[0].destroy(obstacleGroup)
}

if(obstacleGroup.isTouching(monkey)){
 gameState===END;
 }
}
else if  (gameState===END){
  monkey.addImage=(monkey_collided)
  gameOver.visible=true;
  restart.visible=true;
  foodGroup.setVelocityX=0;
  obstacleGroup.setVelocityX=0;
  spawnbanana()=false;
}






monkey.collide(ground);


  drawSprites();
}


function spawnbanana(){
if (frameCount % 90===0){
var banana=createSprite(windowWidth,120,20,20);
banana.y=Math.round(random(520,90))
banana.addImage(bananaImage);
banana.scale=0.07;
//banana.setLifetimeEach(windowwidth+5);
banana.velocityX=-2;

FoodGroup.add(banana);
}

}

function spawnObstacle(){
 if (frameCount % 300===0){
var obstacle=createSprite(windowWidth,windowHeight-55,20,20);
obstacle.addImage(obstacleImage);
obstacle.scale=0.2;
//obstacle.setLifetimeEach(-1);
obstacle.velocityX=-3;

obstacleGroup.add(obstacle)
 } 
}

