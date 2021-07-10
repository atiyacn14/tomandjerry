var back
var cat1
var catWalking
var catStanding
var mouse1
var mouseTeasing
function preload() {
    //load the images here
    back=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    catWalking=loadAnimation("images/cat2.png", "images/cat3.png")
    catStanding=loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouseTeasing=loadAnimation("images/mouse2.png", "images/mouse3.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600)
    tom.addAnimation("sitting", cat1)
    tom.scale = 0.2
    jerry= createSprite(200,600)
    jerry.addAnimation("standing", mouse1)
    jerry.scale = 0.15
}

function draw() {

    background(back);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x<= tom.width/2 - jerry.width/2){
        tom.velocityX=0
        tom.addAnimation("standing", catStanding)
        tom.changeAnimation("standing")
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5
      tom.addAnimation("walking", catWalking)
      tom.changeAnimation("walking")

  }

}
