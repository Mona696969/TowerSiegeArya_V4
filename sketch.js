
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, polygon;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;


  
  

  // TOWER1
  ground = new Ground(750, 600, 1500, 50);
  platform = new Ground(700,350,280,10);
  // LEVEL 1 - TOWER1
  Block1 = new block(608,340,30,40)
  Block2 = new block(630,340,30,40)
  Block3 = new block(655,340,30,40)
  Block4 = new block(680,340,30,40)
  Block5 = new block(705,340,30,40)
  Block6 = new block(730,340,30,40)
  Block7 = new block(755,340,30,40)
  Block8 = new block(780,340,30,40)
  //LEVEL 2 - TOWER1
  Block9 = new block(630,295,30,40)
  Block10 = new block(655,295,30,40)
  Block11 = new block(680,295,30,40)
  Block12 = new block(705,295,30,40)
  Block13 = new block(730,295,30,40)
  Block14 = new block(755,295,30,40)
  //LEVEL 3 - TOWER1
Block15 = new block(648,250,30,40)
Block16 = new block(680,250,30,40)
Block17 = new block(710,250,30,40)
Block18 = new block(738,250,30,40)
  //LEVEL 4 - TOWER1
  Block19 = new block(675,210,30,40)
  Block20 = new block(705,210,30,40)
  //LEVEL 5 - TOWER1
  Block21 = new block(690,170,30,40)


  // TOWER2
  platform2 = new  Ground(1200,200,220,10)
  // LEVEL 1 - TOWER2
  Block22 = new block(1130,170,30,40)
  Block23 = new block(1160,170,30,40)
  Block24 = new block(1190,170,30,40)
  Block25 = new block(1220,170,30,40)
  Block26 = new block(1250,170,30,40)
  Block27 = new block(1280,170,30,40)
  // LEVEL 2 - TOWER2
  Block28 = new block(1160,130,30,40)
  Block29 = new block(1190,130,30,40)
  Block30 = new block(1220,130,30,40)
  Block31 = new block(1250,130,30,40)
  // LEVEL 3 - TOWER2
  Block32 = new block(1190,90,30,40)
  Block33 = new block(1220,90,30,40)
  // LEVEL 4 - TOWER2
  Block34 = new block(1205,50,30,40)

//polygon = new Polygon(50,200,20)




ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingShot = new Slingshot(this.ball,{x:150,y: 400})

}

function draw() {
  background("Cyan");    
  Engine.update(engine);

  

 
  ground.display();
  platform.display();
  Block1.display()
  Block2.display()
  Block3.display()
  Block4.display()
  Block5.display()
  Block6.display()
  Block7.display()
  Block8.display()
  Block9.display()
  Block10.display()
  Block11.display()
  Block12.display()
  Block13.display()
  Block14.display()
  Block15.display()
  Block16.display()
  Block17.display()
  Block18.display()
  Block19.display()
  Block20.display()
  Block21.display()
  Block22.display()
  Block23.display()
  Block24.display()
  Block25.display()
  Block26.display()
  Block27.display()
  Block28.display()
  Block29.display()
  Block30.display()
  Block31.display()
  Block32.display()
  Block33.display()
  Block34.display()
 // polygon.display()
 slingShot.display()

  platform2.display()

  fill("Red")
  textSize(20)
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 500,500)
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
}

