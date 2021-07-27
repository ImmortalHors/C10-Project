var ship,ship_sailing,edges;
var seaimg; 
var shipimg;
var sea;
function preload(){
seaimg=loadImage("sea.png")
shipimg_1=loadImage("ship-1.png")
shipimg_2=loadImage("ship-2.png")
shipimg_3=loadImage("ship-3.png")
shipimg_4=loadImage("ship-4.png")
ship_sailing=loadAnimation(shipimg_1,shipimg_2)
}

function setup(){
  createCanvas(1800,1400);
  sea=createSprite(200,180,400,20)
  sea.addImage(seaimg)
  edges=createEdgeSprites(); 

  ship=createSprite(650,400)
  ship.addAnimation("FLOATING", ship_sailing)
  ship.scale=0.2


}

function draw() {
  background("blue");
  sea.velocityX=2
  if(sea.x<0){
    sea.x=sea.width/2
  }
  drawSprites();
}