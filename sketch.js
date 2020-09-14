var ground1,ground2,ground3;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;
var string1;
var backgroundImg, bgImg;
var hexagon;
var score;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
   getBackgroundImage();
}

function setup() {
  createCanvas(1350,670);
	engine = Engine.create();
  world = engine.world;

  ground1 = new ground(630,550,367,10);
  ground2 = new ground(675,650,1350,20);
  ground3 = new ground(1085,350,250,10);

  //level1
  b1= new box(485,510,70,70);
  b2= new box(558,510,70,70);
  b3= new box(631,510,70,70);
  b4= new box(704,510,70,70);
  b5= new box(777,510,70,70);
  //level2
  b6 = new box(520,440,70,70);
  b7 = new box(593,440,70,70);
  b8 = new box(666,440,70,70);
  b9 = new box(739,440,70,70);
  //level3
  b10 = new box(555,370,70,70);
  b11 = new box(628,370,70,70);
  b12 = new box(701,370,70,70);
  //level4
  b13 = new box(590,300,70,70);
  b14 = new box(663,300,70,70);
  //level5
  b15 = new box(625,230,70,70);

  //level6
  b16 = new box(991,315,60,60);
  b17 = new box(1054,315,60,60);
  b18 = new box(1117,315,60,60);
  b19 = new box(1180,315,60,60);

  //level7
  b20 = new box(1020,255,60,60);
  b21 = new box(1083,255,60,60);
  b22 = new box(1146,255,60,60);

  //level8
  b23 = new box(1049,195,60,60);
  b24 = new box(1112,195,60,60);

  //level9
  b25 = new box(1078,135,60,60);

  hexagon = new polygon(200,335);
  string1 = new string(hexagon.body,{x:200,y:300});

  score = 0;
  
  Engine.run(engine);
}

function draw() {
  if (backgroundImg){
		background(backgroundImg);
	} 
  ground1.display(); 
  ground2.display();
  ground3.display();
  fill("yellow")
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  fill("orange");
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  fill("yellow");
  b10.display();
  b11.display();
  b12.display();
  fill("orange");
  b13.display();
  b14.display();
  fill("white");
  b15.display();
  hexagon.display();
  string1.display();
  fill("yellow");
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  fill("orange");
  b20.display();
  b21.display();
  b22.display();
  fill("yellow");
  b23.display();
  b24.display();
  fill("white");
  b25.display();

  textSize(20);
  fill("black");
  text("Score:"+score,1100,30);
}

function mouseDragged(){
	Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	string1.fly();
}

function keyPressed(){
  if(keyCode === 32){
     string1.attach(hexagon.body);
  }
}

async function getBackgroundImage(){
	var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
	var respJSON = await response.json();
	//console.log(respJSON);
	var dateTime = respJSON.datetime;
	var hour = dateTime.slice(11,13);
	//console.log(hour);
	if(hour>=6&&hour<=18){
		bgImg = "bg.png";
	}else{
		bgImg = "bg2.jpg";
	}
	backgroundImg = loadImage(bgImg);
	//console.log(backgroundImg);
}