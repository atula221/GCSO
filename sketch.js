var car,wall;
var speed,weight;

var car,wall;
var speed,weight;

var car,wall;
var speed,weight;



speed=random(55,90)
weight=random(400,1500)

car=createSprite(50,200,50)
wall=createSprite(1500,200,height/2)
background(black)

car=createSprite(50,200,50)
wall=createSprite(1500,200,height/2)
background(black)

car=createSprite(50,200,50)
wall=createSprite(1500,200,height/2)
background(black)

car.velocityX=speed;


if(wall.x-car.x < (car.width,wall.width/2)){
 
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if (deformation>180)
  {
    car.shapeColor=blue(255,0,0);
  }

  if(deformation<180 && deformation>100)
  {
    car.shapeColor=red(230,230,0);

  }
  if(deformation>100)
  {
    car.shapeColor=green(0,255,0);
    
  }
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


}

function draw() {
  background(255,255,255);  
  drawSprites();
}