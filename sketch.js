const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paper;
var ground;

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	paper= new Paper(200,380)
	bin1= new Dustbin(900,380,150,10);
	bin2= new Dustbin(980,340,10,80);
	bin3= new Dustbin(820,340,10,80);
	ground = new Ground(600,390,1200,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  ground.display();
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:4,y:-6.5})
  }
}



