var fixedRect , movingRect

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400, 100, 70, 50);
 fixedRect.shapeColor = "green";
 fixedRect.velocityY = 2;
movingRect = createSprite(400,600,50,70);
movingRect.shapeColor = "blue";
movingRect.velocityY = -2;
}

function draw() {
  background("yellow");
 // movingRect.x = World.mouseX;
//  movingRect.y = World.mouseY; 
 // console.log(movingRect.x-fixedRect.x);
/* if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x- movingRect.x < movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y- movingRect.y < movingRect.height/2+fixedRect.height/2){
   movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red";
 }
 else{
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
 }*/
 if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x- movingRect.x < movingRect.width/2+fixedRect.width/2 ){
    movingRect.velocityX = movingRect.velocityX*(-1)
    fixedRect.velocityX = fixedRect.velocityX*(-1)
 }

 if(movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y- movingRect.y < movingRect.height/2+fixedRect.height/2 ){
    movingRect.velocityY = movingRect.velocityY*(-1)
    fixedRect.velocityY = fixedRect.velocityY*(-1)
 }
  drawSprites();
}