
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;
	roof=Bodies.rectangle(400,100,400,10,{isStatic:true})
	World.add(world,roof)
	
	
	bob1 = new Ball(260,400,30)
	bob2 = new Ball(320,400,30)
	bob3 = new Ball(380,400,30)
	bob4 = new Ball(440,400,30)
	bob5 = new Ball(500,400,30)

	rope1 = new String(bob1.body,{x:260 , y:100})
	rope2 = new String(bob2.body,{x:320 , y:100})
	rope3 = new String(bob3.body,{x:380 , y:100})
	rope4 = new String(bob4.body,{x:440 , y:100})
	rope5 = new String(bob5.body,{x:500 , y:100})
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	background(255);
  rectMode(CENTER);
  fill(0)
  rect(roof.position.x,roof.position.y,400,10)
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}




