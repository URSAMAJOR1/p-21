var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var bin 

function preload(){
    binImage= loadImage("images/bin.png")
    music= loadSound("music.mp3")
    // load sound here
}

function setup(){
    canvas = createCanvas(800,600);
bin = createSprite(400,200,100,100)
bin.scale=0.5

    block1 = createSprite(0,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(200,580,200,30);
    block2.shapeColor = "orange";

   
    //create two more blocks i.e. block3 and block4 here]
     block3 = createSprite(400,580,200,30)
    block3.shapeColor = "green"

    block4 = createSprite(600,580,200,30)
    block4.shapeColor = "black";

  
    //write code to add velocityX and velocityY
    ball = createSprite(200,400,40,40);
    bin.addImage(binImage)
    ball.velocityX=10
    ball.velocityY=10
}

function draw() {
    bin.addImage(binImage)
background (rgb(random(0,255),random(0,255),random(0,255)))
   edges=createEdgeSprites()
   ball.bounceOff (edges)  
// ball.x=mouseX
// ball.y=mouseY
 if (ball.isTouching(block1)){
ball.shapeColor=block1.shapeColor
 }
 if (ball.isTouching(block2)){
    ball.shapeColor=block2.shapeColor
     }
     if (ball.isTouching(block3)){
        ball.shapeColor=block3.shapeColor
         }
         if (ball.isTouching(block4)){
            ball.shapeColor=block4.shapeColor
             }
             if(ball.isTouching(bin)){
                 ball.shapeColor=rgb(random(0,255),random(0,255),random(0,255))
             }
      drawSprites();
    }