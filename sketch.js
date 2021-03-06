const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var ceiling_options, ceiling;
var ball_options, ball;
var chain, options;

function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

   ceiling_options={
    isStatic:true
  }

   ceiling=Bodies.rectangle(400, 100, 200, 15,ceiling_options);
  World.add(world,ceiling)

   ball_options={
    isStatic:true
  }
   ball = Bodies.circle(400,300,70,ball_options);
  World.add(world,ball)
  
   options={
    bodyA:ball,
    bodyB:ceiling,
    length:100,
    stiffness:0.05
  }
  chain = Constraint.create(options);
  World.add(world,chain);
  
}

function draw() {
  background(25,55,25); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ceiling.position.x,ceiling.position.y,200,15)

  ellipse(ball.position.x,ball.position.y,70)
  strokeWeight(10);
  line(ceiling.position.x,ceiling.position.y,ball.position.x,ball.position.y)

  if(keyCode===32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
}

  else if (keyCode === ENTER){
    ball.position.x = 400;

}

  
}
