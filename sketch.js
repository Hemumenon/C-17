
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup , bananaGroup
var score = 0;
var gameState = "play";

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
createCanvas(600,600);
  monkey=createSprite(60,400,20,20);
 monkey.scale=0.2;      
  ground=createSprite(50,470,1050,20)
  ground.x = ground.width /2;    
  //ground.velocityX = -6;

  monkey = createSprite(80,230,10,10);
  monkey.scale = 0.2;
  
  monkey.addAnimation("monkey", monkey_running);
  
  obstaclesGroup = new Group();
  bananaGroup = new Group();
  
}


function draw() {
background("white");
text("LIFE TIME: "+score, 470, 20);
      
  
  

  if(gameState === "play"){
    
    score = Math.round(score + getFrameRate()/60);
    
      if(keyDown("Space")){
         monkey.velocityY=-10;

    }
    monkey.velocityY = monkey.velocityY + 0.8
    
      spawnBanana();
      spawnObstacles();
    
    if(monkey.isTouching(obstaclesGroup)){
      gameState ="end";
    }
  }
  
  if (gameState === "end"){
    
      stroke("yellow")
      textSize(30);
      text("Game Over!", 220, 170);
      fill("black");
      textSize(15);
      bananaGroup.setVelocityXEach(0);
      obstaclesGroup.setVelocityXEach(0);
      bananaGroup.setLifetimeEach(-1);
      obstaclesGroup.setLifetimeEach(-1)
      
  }
  
  
  monkey.collide(ground);
  
    drawSprites();
}
 
function spawnBanana(){
  if (frameCount%60 === 0){
    
    banana = createSprite(620,120, 50, 50 )
    banana.addImage(bananaImage);
    
    banana.scale = 0.1;
    banana.velocityX =-6;   
    
    banana.lifetime = 220;
    bananaGroup.add(banana);
  }
    
}


function spawnObstacles(){
  if (frameCount%140 === 0){
    
    obstacle = createSprite(620,430,50,50);
    obstacle.addImage(obstacleImage);
    
    obstacle.setCollider("circle", 0, 0, 180);
    obstacle.scale = 0.25 ;
    obstacle.velocityX = -6;
    
    obstacle.lifetime = 220;
    obstaclesGroup.add(obstacle)
  }
}

