class Jogo {
  constructor() {
 this.key1 =0;
 this.key2 =0;
 this.key3 =0;



  }

  intro() {
    fill("black");
    text("procure pelo easteregg", 450,590)
    textSize(30)
    text("<aperte spaço>",50,450)
    text("voce e um simples pirata que decidiu", 10,150);
    text("pescar,mas durante sua pescaria", 10,200);
    text("voce encontra um navio quebrado", 10,250);
    text("então decide embarcar nele", 10,300);
    textSize(35)
    text("mas mal voce sabe oque te espera", 5,350);

    

   };

   game1(){
  


  
  player.collide(wall);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  
  camera.position.y = player.position.y;
  camera.position.x = player.position.x;
    
   walker();
   }

   game2(){

    objeto.addImage(bau);
    objeto.scale = 0.3
  
  wall.visible=true
  wall.position.x = 15
  wall.shapeColor = "orange"
  wall4.visible=true
  wall4.position.x = 570
  wall4.shapeColor = "orange"

  wall10.shapeColor = "orange";
  wall10.visible = true;

  player.collide(wall);
  player.collide(wall4);
  player.collide(wall10);
 
  
  this.puzle();

   back.visible = false
   walker();

   }

  game3() {
  player.visible=false  
  wall.visible=false
  wall4.visible=false
  wall10.visible=false
  box1.visible=false
  box2.visible=false
  box3.visible=false
  objeto.visible=false

  textSize(25);
  fill("black")
  text("ao entrar na sala do tesouro voce sente um calafrio",10,-430);
  text("e que esta sendo observado...",40,-380);
  textSize(40);
  text("to be continued!",150,-300);
  }








   puzle() {
  fill("red");
  rect(100,-300,40,40);
  fill("blue");
  rect(450,-300,40,40);
  fill("purple")
  rect(280,-60,40,40)

  box1.visible=true;
  box2.visible=true;
  box3.visible=true;
  box1.collide(wall10);
  box2.collide(wall10);
  box3.collide(wall10);
  box1.collide(wall);
  box2.collide(wall);
  box3.collide(wall);
  box1.collide(wall4);
  box2.collide(wall4);
  box3.collide(wall4);

  player.displace(box1);
  player.displace(box2);
  player.displace(box3);

  if(box1.isTouching(red) || keyWentDown("a")){
    this.key1 = 1
    //console.log(this.key1)
  }
  if(box2.isTouching(purpl) || keyWentDown("a")){
    this.key2 = 1
   //console.log(this.key2)
  }
  if(box3.isTouching(blu) || keyWentDown("a")){
    this.key3 = 1
    //console.log(this.key3)
  }

  if(this.key1===1&&this.key2===1&&this.key3===1){
  objeto.y = -460
  objeto.setCollider("rectangle", 0,0,400,400)
  objeto.addImage(tesouro);
  objeto.scale = 0.3
  }

   }
 

game0() {
  
}


   
}



 

