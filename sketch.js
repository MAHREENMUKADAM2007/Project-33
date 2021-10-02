const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var engine, world
var bg
var snowfall = []
function preload() {
  bg = loadImage("snow1.jpg")
}

function setup() {

  createCanvas(800, 400);
  engine = Engine.create()
  world = engine.world

}

function draw() {
  background(bg);

  if(frameCount%90===0){
    snowfall.push(new Snow(random(100,700),10,10)) ;
   
  }
  for(var i=0;i<snowfall.length;i++){
    snowfall[i].display();
  }
  drawSprites();
}
