const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;


function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  var ceiling_options={
    isStatic:true
  }

  var ceiling=Bodies.rectangle(400, 100, 200, 15,ceiling_options);
  World.add(world,ceiling)

  var ball_options={
    isStatic:true
  }
  var ball = Bodies.circle(400,300,70,ball_options);
  World.add(world,ball)
  
  var options={
    bodyA:ball,
    bodyB:ceiling,
    length:100,
    stiffness:0.04
  }
  var chain = Constraint.create(options);
  World.add(world,chain);
  
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  rect(ceiling.position.x,ceiling.position.y,200,15)

  ellipse(ball.position.x,ball.position.y,70)

  line(ball.position.x,ball.position.y,ceiling.x,ceiling,y)
  
  
}