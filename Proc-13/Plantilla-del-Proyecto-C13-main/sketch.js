var garden,rabbit;
var gardenImg,rabbitImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//crear sprite de rabbit (conejo)
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  // falta mover rabbit (conejo) en el eje x con el mouse
  rabbit.x = World.mouseX;

  var select_sprites = Math.round(random(1,3));

  if (frameCount % 80 == 0){

    if (select_sprites == 1){
    createApples(); 
    } else if (select_sprites == 2){
      createOrange(); 
      //Dani el último else ya solo es digamos lo que sobra, ya no agregamos condición va...
    } else {
      createRed();
    }  
      }



  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  // Dani en las condiciones de las línea 36 en adelante ya estás mandando llamar las funciones aqui ya no es necesario
  //por eso se ven amontonadas ya que el frameCount crea la separación arriba y estás las mandas llamar sin separación y se ven amontonadas :)
 // createApples();
  //createOrange();
  //createRed();
  

}


function createApples() {
apple = createSprite (random(50, 350),40,10,10)
apple.addImage(appleImg);
apple.scale = 0.07;
apple.velocityY = 3;
apple.lifetime = 150;
}
function createOrange() {
  orangeL = createSprite (random(50, 350),40,10,10)
  orangeL.addImage(orangeImg);
  orangeL.scale = 0.07;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150;
  }
  function createRed() {
    redL = createSprite (random(50, 350),40,10,10)
    redL.addImage(redImg);
    redL.scale = 0.07;
    redL.velocityY = 3;
    redL.lifetime = 150;
    }
    


  
 
  
