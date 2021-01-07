var box,ground;
var box2;
//namespacing or nicknaming
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world;

function setup() {
  createCanvas(400,400);
  engine=Engine.create(); //creating our own engine
  world= engine.world; //creating our own world
  
  box= new Box(200,200,50,50);
  box2=new Box(170,150,30,30);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  box.display();
  box2.display();
  drawSprites();
}