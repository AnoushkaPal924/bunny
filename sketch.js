var bunny, ground, groundImg, bunnyImg, trees;
var gameState = 'play1';
var score = 0;
var bg = 'yellow'
var obj =[]
var jf, coins

function preload(){
    groundImg = loadImage('g.png')
    bunnyImg = loadImage('bunny.png');
}

function setup(){

    createCanvas(800,400)
    
    jf = new Group()
    coins = new Group()
    
    bunny = createSprite(200,200,20,20)
    //bunny.debug = true;
    bunny.setCollider("circle",0,0,220);
    bunny.addImage(bunnyImg);
    bunny.scale = 0.125;
    ground= createSprite(180,350,800,10)
   // ground.x = ground.width/2-300;
    ground.velocityX = -3
   ground.addImage('ground', groundImg)
  
}


function draw(){
   background(bg);
  
    //bunny.y = bunny.y + 5 
    // if(frameCount%10==0){
    //     score++;
    // };
    //obs1();
    //obstacle2();
    score = score + Math.round(getFrameRate()/60);

    

    text('score:'+ score,200,200);
    if(keyDown("space") && bunny.y <= 359){
        bunny.velocityY = -12 ;
      }
      bunny.velocityY = bunny.velocityY + 0.8;
    if(ground.x < 300){
      //  ground.x = ground.width/2-300;
      ground.x = 500
         
     if(gameState == 'play1'){
         //console.log("lol")
         obstacle2();
         if(score>175){
        gameState = 'play2';
        score = 0;
        console.log('h')
        bg = 'black';
    }
   } 

   if(gameState == 'play2'){
    obstacle2();
    console.log("play2")
    if(score>275){
        gameState = 'play3';
        score = 0;
    bg = 'pink';
    }
   }
    }
     
   
    //console.log(obst1)
    bunny.collide(ground)
    drawSprites();

    if(bunny.isTouching(jf)){
        reset();
    }
}

function obs1(){

    //console.log("inside function")
    if(frameCount % 100 ==0){
        //console.log("inside if")
        obst1 = createSprite(800,200,10,10);
        obst1.velocityX = -4
        obst1.lifetime = 200;
        console.log(obst1)
        coins.add(obst1);
       
    }
}

function obstacle2(){
    console.log("lo");
    if(frameCount % 10 ==0)
    { console.log("lol");
        var obst2 = createSprite(800,300,20,20)
        obst2.shapeColor = 'red'
        obst2.velocityX = -3;
        obst2.lifetime = 350;
        jf.add(obst2);
    }
}

function reset(){
    jf.setVelocityXEach(0); 
    coins.setVelocityXEach(0); 
    score = 0;
    ground.velocityX = 0; 

}