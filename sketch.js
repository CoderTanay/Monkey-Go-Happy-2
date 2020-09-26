var monkey, monkey_running;
var bananaImage,banana;
var rockImage, rock, rockGroup;
var background1, backgroundImage, invisibleGround;
var score;

function preload() {
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_0.png");
  
  bananaImage=loadImage("banana.png");
  
  rockImage=loadImage("obstacle.png");
  
  backgroundImage=loadImage("jungle.jpg");
}

function setup() {
  createCanvas(800, 400);
  
  background1=createSprite(200,100,400,200);
  background1.addImage("background",backgroundImage);
  background1.x = background1.width / 2;
  background1.velocityX = -2;
  background1.scale = 1.4;
  
  monkey=createSprite(50,350,30,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  invisibleGround=createSprite(45,350,400,10);
  invisibleGround.visible = false;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  background(220);
  
  if(background1.x<100){
    background1.x=background1.width/2;
  }
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score = score + 20;
  }
  switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        case 50: monkey.scale=0.20;
                break;       
        case 60: monkey.scale=0.22;
                break;
        case 70: monkey.scale=0.24;
                break;       
        case 80: monkey.scale=0.26;
              break;        
      default: break;
  }
  
    if(keyDown("space") && monkey.y >= 314.3) {
      monkey.velocityY = -15;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(invisibleGround);
  
    Bananas();
    Rocks();
 
    if(obstaclesGroup.isTouching(monkey)){ 
      monkey.scale=0.08;
      score = score - 2;
    }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  drawSprites();
}

function Bananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(150,250);    
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 300;
    
    bananaGroup.add(banana);
  }
}

function Rocks() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(rockImage);     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    
    obstaclesGroup.add(obstacle);
  }
}