
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
function preload()
{

}
function setup() {
  
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(500,800,1000,20);

  for( var i=0;i<=480;i=i+80)
  {
    divisions.push(new Division(i,650,10,300));
  }
  for(var j=40;j<=480;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=470;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  for(var j=40;j<=480;j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15;j<=470;j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {

  background("black"); 

  Engine.update(engine);
  
  ground.display();
  for(var i=0;i<divisions.length;i++)
  {
    divisions[i].display();
  }
  for(var j=0;j<plinkos.length;j++)
  {
    plinkos[j].display();
  }
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(220,260),10,10));
  }
  for(var j=0;j<particles.length;j++)
  {
    particles[j].display();
  }
}


