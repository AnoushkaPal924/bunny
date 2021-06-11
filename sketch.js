var bunny, ground, groundImg, bunnyImg, trees;
var gameState 
var obst1
var score
var obj =[]
function preload(){
    groundImg = loadImage('g.jpg')
    bunnyImg = loadImage('bunny.png');
}

function setup(){

    createCanvas(800,400)
    
    score = 0;
    bunny = createSprite(200,200,20,20)
    bunny.addImage(bunnyImg);
    bunny.scale = 0.125;
    ground= createSprite(180,350,800,10)
   // ground.x = ground.width/2-300;
    ground.velocityX = -3
  //  ground.addImage('ground', groundImg)
  
}
gameState = 'play1';

function draw(){
  //  background('black')
  
    //bunny.y = bunny.y + 5 
    // if(frameCount%10==0){
    //     score++;
    // };

    score = score + Math.round(getFrameRate()/60);

    bunny.velocityY = bunny.velocityY + 5

    text('score:'+ score,200,200);
    if(keyDown("space") && bunny.isTouching(ground)){
       // bunny.velocityY = bunny.velocityY-20;
        bunny.y = bunny.y - 50
        console.log("if")
    }
    else{ bunny.collide(ground);}

    if(ground.x < 0){
      //  ground.x = ground.width/2-300;
      ground.x = 180
         
     if(gameState == 'play1'){
         console.log("lol")
         obs1()
         obstacle2()
         background('black')
         if(score>5&&score<10){
        gameState = 'play2';
        score = 0;
        background('yellow')
    }
   } 

   if(gameState == 'play2'){
    if(score>10){
        gameState = 'play3';
        score = 0;
        background('red')
    }
   }
    }
     
   
    console.log(obst1)
    bunny.collide(ground)
    drawSprites();
}

function obs1(){

    //console.log("inside function")
    if(frameCount % 60 ==0){
        //console.log("inside if")
        obst1 = createSprite(300,150,10,10);
        obst1.velocityX = -4
        console.log(obst1)

       
    }
}

function obstacle2(){
    
    if(frameCount % 70 ==0)
    {
        var obst2 = createSprite(250,200,20,20)
        obst2.shapeColor = 'red'
        obst2.velocityX = -3;
    }
}