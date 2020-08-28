//aliases which will be constants 
const ENGINE = Matter.Engine;
const WORLD = Matter.World;
const BODIES = Matter.Bodies;

//created some local variables
var engine, world;

var ground;
var o1;

function setup(){
    var canvas = createCanvas(400,400);
    //creating an engine
    engine = ENGINE.create();
    //add a world to the engine
    world = engine.world;

    var prop ={
        isStatic: true
    }

    ground = BODIES.rectangle(200,380,400,20,{isStatic: true});
    WORLD.add(world,ground);

    o1= BODIES.circle(150,150,50,{restitution: 1});
    WORLD.add(world, o1);
   
}

function draw(){
    background(0);

    //run the engine
    ENGINE.update(engine);

    console.log(o1);

   rectMode(CENTER);
   
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(o1.position.x, o1.position.y, 50,50);
}