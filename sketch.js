var bg1, pl1, pl2, bg2;
var back;

var player;
var game
var bau,tesouro;

var box1,box2, box3;
var bx1,bx2,bx3;
var red,blu,purpl;


var wall, wall2,wall3, wall4,wall5, wall6, wall7, wall8, wall9, wall10;
var door;
 var kez = 0;
 var key;
 var kimg, vc;
 var vc2;
 var objeto;
 var egg

var gameState = 0

function preload(){

 egg = loadImage("assets/eatseregg.png");

bg1 = loadImage("assets/pixil-frame-0 (1).png")

pl1 = loadImage("assets/pixil-frame-0 (2).png");

pl2 = loadImage("assets/pixil-frame-0 (7).png");

kimg =  loadImage("assets/pixil-frame-0 (6).png");

vc = loadImage("assets/pixil-frame-0 (5).png");

bau = loadImage("assets/pixil-frame-0 (3).png");
tesouro = loadImage("assets/pixil-frame-0 (11).png")

bg2 = loadImage("assets/pixil-frame-0 (4).png")

bx1 = loadImage("assets/pixil-frame-0 (8).png");
bx2  = loadImage("assets/pixil-frame-0 (9).png");
bx3  = loadImage("assets/pixil-frame-0 (10).png");

}


function setup() {
  createCanvas(600,600);

  game = new Jogo();

  back = createSprite(300,300,0,0);
  back.addImage("navio", bg1);
  back.scale =1.5
  back.visible = false

  wall = createSprite(80,300,70,1550);
  wall2 = createSprite(400,470,300,10);
  wall3 = createSprite(430,460,150,90);
  wall4 = createSprite(540,300,70,1550);
  wall5 = createSprite(400,600,1000,10);
  wall6 = createSprite(120,560,40,60);
  wall7 = createSprite(400,-120,1000,10);
  wall8 = createSprite(300,550,150,100);
  wall9 = createSprite(315,-38,258,38);
  wall10 = createSprite(310,-460,600,70);


  door = createSprite(300,-30,20,20);
  objeto = createSprite(310,-410,1,1);
  objeto.debug=true
  objeto.setCollider("rectangle", 0,-400,400,400);
 

  wall.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  wall10.visible=false;
  door.visible = false;

  chave = createSprite(323,-100,1,1)
  chave.addImage("chave",  kimg);
  chave.scale = 0.5

  red = createSprite(120,-280,20,20);
  blu = createSprite(470,-280,20,20);
  purpl = createSprite(300,-40,20,20);

  box1 = createSprite(470,-100,0,0);
  box1.addImage(bx1)
  box1.scale = 0.15;
  box1.debug = true;
  box1.setCollider("rectangle", -10,-10,350,350);

  box2 = createSprite(120,-30,0,0);
  box2.addImage(bx2)
  box2.scale = 0.15;
  box2.debug = true;
  box2.setCollider("rectangle", -10,-10,350,350);

  box3 = createSprite(150,-350,0,0);
  box3.addImage(bx3)
  box3.scale = 0.15;
  box3.debug = true;
  box3.setCollider("rectangle", -10,-10,350,350)

  box1.visible=false;
  box2.visible=false;
  box3.visible=false;

  red.visible=false;
  blu.visible=false;
  purpl.visible=false;
 

  player = createSprite(200,300,20,20);
  player.addImage("lnk", pl1);
  player.scale =0.11
  player.debug = true
  player.setCollider("rectangle",-40,0,500,600);
  player.visible = false

  vc2 = createSprite(340,0);
  vc2.addImage("i", vc);
  vc2.scale = 2
  
  
}

function draw() {
  background("lightblue");  
  vc2.visible = false

if(gameState === 0 ) {
 game.intro();
 if (keyWentDown("space")) {
  gameState = 1
 
}
}



  if(gameState === 1) {
    player.visible = true
    back.visible = true
  game.game1();

  }

  if(player.isTouching(chave)){
  chave.visible = false
  kez= 1
  }


  if(player.isTouching(door) && kez ===1){
    gameState = 2;
   }else if(player.isTouching(door)) {
    vc2.visible = true
    
    }
 
  if(gameState === 2){
    background(bg2)
   game.game2();
   easteregg();
   camera.position.y = -200;
  }

  if(gameState ===7){
    player.visible=false  
    wall.visible=false
    wall4.visible=false
    wall10.visible=false
    box1.visible=false
    box2.visible=false
    box3.visible=false
    objeto.visible=false
   background(egg);
   textSize(20)
   fill("black")
   text("voce achou o easteregg parabens,", 200,-20)
 
  }
 
  

  if(player.isTouching(objeto)){
   gameState = 3;
  }
  if(gameState === 3){
    game.game3();
  }
  
  

  drawSprites();
  
}

function walker(){

  if (keyIsDown(UP_ARROW)) {
    player.position.y -= 10;
    
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.position.y += 10;
    
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x += 10;
    player.addImage("lnk", pl1);
    player.setCollider("rectangle",-40,0,400,500);
    player.scale =0.11
    
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= 10;
    player.addImage("lnk", pl2);
    player.scale =0.14
    player.setCollider("rectangle",-40,0,300,400);
    
  }

}


function easteregg(){
  if(player.y > 140){
  gameState = 7
   
  }
}



