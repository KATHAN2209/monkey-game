
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground,obstacle;
function preload(){
  

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
     


}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(78,358,50,50)
     monkey.addAnimation("running",monkey_running)                                                                               
  monkey.scale=0.1
  
  ground=createSprite(83,385,400,10)
  ground.x = ground.width /2;
  
  banana=createSprite(149,248,10,10)
 banana.addImage("food",bananaImage)
   banana.scale=0.1


//obstacle=createSprite(241,358,10,10)
  //obstacle.addImage("rock",obstaceImage)
  //obstacle.scale=0.1
  obstacleGroup=createGroup();
  
  
}


function draw() {
background("lightgray")
  
  
  
 monkey.velocityY = monkey.velocityY + 0.8
   
   
   
   
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 161) {
        monkey.velocityY = -12;
        
    }
  
  console.log(monkey)
  
  
  
  
  monkey.collide(ground);
  
  
  rock()
  
 drawSprites(); 
}

function rock (){
 //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(241,358,40,10);
    obstacle.y = Math.round(random(80,120));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     //aobstacle lifetime to the241r358le
    obstaclecle.lifetime = 200;
  
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    obstacleGroup.add(cloud);
  }


 
  
  
  
  
  
}
























