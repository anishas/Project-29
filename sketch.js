const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;
var platform
var polygon, line1

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  b1 = new Block(330,235,30,40);
  b2 = new Block(360,235,30,40);
  b3 = new Block(390,235,30,40);
  b4 = new Block(420,235,30,40);
  b5 = new Block(450,235,30,40);
  b9 = new Block(360,195,30,40);
  b6 = new Block(390,195,30,40);
  b7 = new Block(420,195,30,40);
  b8 = new Block(390,155,30,40);

  platform = new Plat(389,266,190,20);

  polygon = new Poly(100,100,20,20);

  line1 = new Sling(polygon.body,{x:200, y:100});

}

function draw() {
  background("floralwhite");  
  Engine.update(engine);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  platform.display();

  polygon.display();

  line1.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  line1.fly();
}