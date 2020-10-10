const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

var ground1, ball;

function setup() {
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //object_options = {
    //  isStatic:true
   // }
//object = Bodies.rectangle(300,200,40,20,object_options);
//World.add(world,object);
//console.log(ground.type);
ground1_options = {
  isStatic:true
}
ground1 = Bodies.rectangle(200,370,400,30,ground1_options);
World.add(world,ground1);

ball_options = {
  isStatic:true
}
ball_options = {
  restitution:true
}
ball = Bodies.circle(200,100,30,ball_options);
World.add(world,ball);
}

function draw() {
  background(0);
  Engine.update(engine);
 rectMode(CENTER);
  rect(ground1.position.x,ground1.position.y,400,30);

ellipse(ball.position.x,ball.position.y,30);
  

}