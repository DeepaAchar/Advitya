var movingRectangle,fixedRectangle, rect1, rect2;

function setup() {
  createCanvas(800,1200);
  movingRectangle=createSprite(400, 700, 50, 50);
  movingRectangle.shapeColor="red";

  fixedRectangle=createSprite(100,500,80,70);
  fixedRectangle.shapeColor="red";

  rect1=createSprite(400,200,50,50);
  rect1.velocityY=3;

  rect2=createSprite(400,500,100,20);
  rect2.velocityY=-5;
 
  rect3=createSprite(300,500,30,30);
  rect3.shapeColor="red";

  rect4=createSprite(500,500,70,200);
  rect4.shapeColor="red";

}

function draw() {
  background(255,255,255);
  movingRectangle.x=mouseX;
  movingRectangle.y=mouseY;

  //Is moving rectangle is touching fixed rectangle?
  if(isTouching(movingRectangle,fixedRectangle)===true){
      movingRectangle.shapeColor="green";
      fixedRectangle.shapeColor="green";
    }
    
  else{
    movingRectangle.shapeColor="red";
    fixedRectangle.shapeColor="red";
  }


  //Is movingRectangle touching rect3?
  if(isTouching(rect3,movingRectangle)===true){
    rect3.shapeColor="green";
    movingRectangle.shapeColor="green";
  }
  
  else{
    rect3.shapeColor="red";
    movingRectangle.shapeColor="red";
  }

  //Let rect1 and rect2 bounceOff from each other
  bounceOff(rect1,rect2);

   
  drawSprites();
}

