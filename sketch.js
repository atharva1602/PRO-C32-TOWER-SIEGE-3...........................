
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1;
var score;


function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(800,500,400,20);
    box1 = new Box(750,235,50,50);
    box2 = new Box(770,235,50,50);
    box8 = new Box(800,235,50,50);
    ball = new BALL(100,250,40);
    box3 = new Box(820,235,50,50);
    box4 = new Box(850,235,50,50);
    box5 = new Box(770,195,50,50)
    box13 = new Box(800,195,50,50);
    box6 = new Box(820,195,50,50);
    box7 = new Box(810,155,50,50);
   
   
    rope = new Hang(ball.body,{x:100,y:250})
}

function draw(){
    background("BLACK");
    Engine.update(engine);
  
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box6.display();
    box7.display();
    box8.display();  
    box4.display();
    box5.display();
   text ("SCORE:"+score,750,80)
    box13.display();  
    ball.display();
    rope.display();
    
    }
   function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope.FLY();
}

function keyPressed(){
if(keyCode===32){
rope.attach(ball.body)
}
}

function score(){
    
 


}

















