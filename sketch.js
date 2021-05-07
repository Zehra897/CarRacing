var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var gs=1;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");

  carImage = loadImage("tail-light-car.jpg");
  nextImage = loadImage("Next.png");
  carImage2 = loadImage("t8271.jpg");
  //bg1 = loadImage("black-background.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  
}




function draw(){
  if(gs === 1){  

    background(carImage);  
    textSize(100);
    textFont("amarante");
    text("GameName",displayWidth/2-50,displayHeight/2-100);
    next = createSprite(displayWidth/2+600,displayHeight/2-300);
    next.addImage(nextImage);
    next.scale = 0.08;
    if(keyDown("space")){
      gs = 2;
      console.log(gameState)
    }
  
  }
  else if(gs === 2){
    background(carImage2);
    
    console.log(2);

    textSize(30);
    fill("black");
    text("INSTRUCTIONS",displayWidth/2-300,displayHeight/2-300)
    text("1. This is a Car Racing Game.",displayWidth/2-650,displayHeight/2-200);
    text("2. You can choose different tracks on which you want to race.",displayWidth/2-650,displayHeight/2-150);
    text("3. Use the arrow keys to control your car.",displayWidth/2-650,displayHeight/2-100);
    text("4. You can modify your car to make it look more cool.",displayWidth/2-650,displayHeight/2-50);

    console.log("last")
    if(keyDown("p")){
      gs=3;
      initial();
    }
  }
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

function initial(){
  background(carImage);
  game = new Game();
  game.getState();
  game.start();
}
