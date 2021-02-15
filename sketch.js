const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball1,ball2,ball3


function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

  
    ball1 = new  balls (700,320,300,30);
    ball2 =  new   balls (810,300,30,100);
    ball3 = new  balls (600,300,30,100);
   
Engine.run(engine)
var ball_options={
  isStatic:false,
  restitution:0.3,
  friction:0.5,
  density:1.2

}
}

function draw(){
	background("lightblue");

    Engine.update(engine);
  
  

  

    ball1.display();
    ball2.display(); 
    ball4.display();


    drawSprites()
   
}