var fixedRect,movingRect;

function setup() {
  createCanvas(800,600);
  fixedRect=createSprite(400, 100, 20, 20);
  movingRect=createSprite(400, 200, 20, 20);
  
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";

}

function draw() {
  background("lightblue");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="black";
    movingRect.shapeColor="black";
}
else{
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";
}

  drawSprites();
}