var ISS,spaceCraft
var hasDocked=false

function preload(){
 ISSimg=loadImage('image/iss.png')
 SPACEBGimg=loadImage('image/spacebg.jpg')
 SPACECRAFT1img=loadImage('image/spacecraft1.png')
 SPACECRAFT2img=loadImage('image/spacecraft2.png')
 SPACECRAFT3img=loadImage('image/spacecraft3.png')
 SPACECRAFT4img=loadImage('image/spacecraft4.png')
} 
function setup() {
  createCanvas(600,350);
  ISS=createSprite(330, 130, 50, 50);
  ISS.addImage(ISSimg)
  ISS.scale=0.50
  SpaceC=createSprite(285,240,50,50)
  SpaceC.addImage(SPACECRAFT1img)
  SpaceC.scale=0.15
}
function draw() {
  background(SPACEBGimg);  
  if(!hasDocked){
    SpaceC.x=SpaceC.x+random(-1,1)
    if(keyDown("UP_ARROW")){
      SpaceC.y=SpaceC.y-2
    }
    if(keyDown("LEFT_ARROW")){
      SpaceC.addImage(SPACECRAFT4img)
      SpaceC.x=SpaceC.x-2
    }
    if(keyDown("RIGHT_ARROW")){
      SpaceC.addImage(SPACECRAFT3img)
      SpaceC.x=SpaceC.x+2
    }    
    if(keyDown("DOWN_ARROW")){
      SpaceC.addImage(SPACECRAFT2img)
      SpaceC.y=SpaceC.y+2
    }
  }
  if(SpaceC.y<=(ISS.y+70) && SpaceC.x<=(ISS.x-10)){
    hasDocked=true
    textSize(25)
    fill("white")
    text("Docking is succesful",150,260)
  }
  drawSprites();
}