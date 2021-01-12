
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bgImg,boy,boyImg,treeImg;
var gameState="attach";

function preload()
{
bgImg=loadImage("bg.png");	
boyImg=loadImage("boy.png");
treeImg=loadImage("tree.png");
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	boy= createSprite(200,540,10,10);
	boy.addImage(boyImg);
	boy.scale= 0.15;


	var tt=createSprite(1000,300,10,10);
	tt.addImage(treeImg);
	tt.scale= 0.55;
	//tree= new Tree(1000,300,700,700);
	mango1= new Mango(1000,200,50);
	mango2= new Mango(900,100,50);
	mango3= new Mango(1100,120,50);
	mango4= new Mango(800,180,50);
	mango5= new Mango(1200,120,50);
	mango6= new Mango(1050,80,50);
	mango7= new Mango(1150,230,50);
	mango8= new Mango(1300,200,50);
	mango9= new Mango(900,230,50);
	mango10= new Mango(980,40,50);

	stone= new Stone(130,450,60);

	slingshot= new SlingShot(stone.body,{x:130,y:450} );
	ground= new Ground(675,630,1350,20);

	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine);

  rectMode(CENTER);
  background(bgImg);

  drawSprites();
 
  
  //tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone.display();
  slingshot.display();
  ground.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
textSize(30);
fill("red");
text("Press 'Space' for second chance",100,50);
  
}
function mouseDragged(){
	//if(gameState !="fly" ){
	   Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
  // }
   }
   function mouseReleased(){
	   slingshot.fly();
	   //gameState="fly";
   }
   function keyPressed(){
	   if(keyCode === 32){
		   Matter.Body.setPosition(stone.body, {x:450, y:60})
		   slingshot.attach(stone.body);
		   //gameState="attach";
	   }
	}
	function detectCollision(lstone,lmango){

		mangoBodyPosition=lmango.mango.position
		stoneBodyPosition=lstone.body.position
		
		var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		  if(distance<=lmango.r+lstone.r)
		  {
			Matter.Body.setStatic(lmango.mango,false);
		  } 
	  
		}
	
	

