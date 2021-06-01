const Bodies = Matter.Bodies ; 
const Body = Matter.Body;
const World = Matter.World;
const Engine = Matter.Engine;

var bunny;
var road, groundImg;
var engine, world;
var ob = [];

function Preload(){
  groundImg = loadImage("g.jpg");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world; 

  bunny = new Bunny(200,200,20,20);
  road = new Ground(180,200,800,10);
 
 
}
if(frameCount%50 == 0){
ob = new Obst1(200,200,10,10);
ob.body.velocityX = -4;
}
function draw() {
  background(255,255,255);  
  
//  road.display();
//  bunny.display();
  
    bunny.body.velocityY = bunny.body.velocityY + 0.1;
   if (bunny.body.isTouching(road.body)){
    if(keyIsDown('32')){
      //console.log("f");
      //&& bunny.y >= 100 
      bunny.body.velocityY= -4;
       }else{ bunny.body.collide(road.body);}
   
   }
  
  drawSprites();
}
