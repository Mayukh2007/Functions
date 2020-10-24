var fixedRect, movingRect;

function setup() {
  createCanvas(1200,1200);

  fixedRect = createSprite(100, 400, 100, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 5;
  fixedRect.velocityX = 5;

  movingRect = createSprite(800,400,50,100);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  movingRect.velocityX = -5;
}

function draw() {
  background(255,255,255);  
 
  BounceOff(movingRect,fixedRect);

  drawSprites();
}
function BounceOff(object1,object2){
  if (object1.x - object2.x < object1.width/2  + object2.width/2 &&
    object2.x - object1.x <  object2.width/2 + object1.width/2  ) {
    object2.velocityX = object2.velocityX * (-1);
 object1.velocityX = object1.velocityX  *  (-1);
 }
 if ( object1.y - object2.y < object1.height/2 + object2.height/2 &&
  object2.y - object1.y < object2.height/2 + object1.height/2){
    object2.velocityY = object2.velocityY * (-1);
    object1.velocityY = object1.velocityY  *  (-1);
 }
}