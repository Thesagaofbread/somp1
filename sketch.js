const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var bg, bgImg
var bottomGround
var topGround
var mango, balloonImg
var canvas
var ground;

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

 createCanvas( windowWidth, windowHeight); 
 edges = createEdgeSprites();

 engine = Engine.create();
 world = engine.world;

ground = new Platform(width, height, windowWidth*2 ,windowHeight/8,);


obstacle1 = new Platform(0, height - 81, windowWidth/7,windowHeight/7) 
obstacle1s = createSprite(width -1050, height - 81, windowWidth/7,windowHeight/7)
//obstacle1s.visible = false
obstacle1s.shapeColor ="brown";

obstacle2 = new Platform(width +300, height - 81, windowWidth/7,windowHeight/7) 
obstacle2s = createSprite(width - 1150, height - 81, windowWidth/7,windowHeight/7)
//obstacle2s.visible = false
obstacle2s.shapeColor ="blue";

obstacle3 = new Platform(0, height - 81, windowWidth/7,windowHeight/7) 
obstacle3s = createSprite(0, height - 81, windowWidth/7,windowHeight/7)
//obstacle3s.visible = false
obstacle3s.shapeColor ="red";

obstacle4 = new Platform(0, height - 81, windowWidth/7,windowHeight/7) 
obstacle4s = createSprite(0, height - 168, windowWidth/7,windowHeight/7)
//obstacle4s.visible = false
obstacle4s.shapeColor ="purple";

obstacle5 = new Platform(0, height - 81, windowWidth/7,windowHeight/7) 
obstacle5s = createSprite(0, height - 255, windowWidth/7,windowHeight/7)
//obstacle5s.visible = false
obstacle5s.shapeColor ="yellow";

obstacle6 = new Platform(0, height - 81, windowWidth/7,windowHeight/7) 
obstacle6s = createSprite(width - 1109, height - 168, windowWidth/14,windowHeight/7)
//obstacle6s.visible = false
obstacle6s.shapeColor ="white";

//background image
/*bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3*/

//creating top and bottom grounds
bottomGround = createSprite(width,height,windowWidth*2,windowHeight/8);
bottomGround.visible = false;




      
mango = createSprite(500,200,20,20);
mango.depth = 1;
mango.shapeColor = "red";
mango.setCollider("circle" ,0, 0, 20);
mango.debug = true;


/*balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;*/



}

function draw() {
  
  background("grey");
        
          //making the hot air balloon jump
          if(keyDown("space") && mango.y >= windowHeight/2) {
            mango.y = mango.y -30 ;
            
          }
          if(keyDown("D")){
            mango.x = mango.x + 10
          }
          if(keyDown("A")){
            mango.x = mango.x - 10
          }
          ground.show();
          obstacle1.show();
        

          //adding gravity
           mango.velocityY = mango.velocityY + 2;
           mango.collide(bottomGround);
           mango.collide(edges);
           mango.collide(obstacle1s);
           mango.collide(obstacle2s);
           mango.collide(obstacle3s);
           mango.collide(obstacle4s);
           mango.collide(obstacle5s);
           mango.collide(obstacle6s);

   
        drawSprites();
        

        Engine.update(engine);
}


