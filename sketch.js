var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(100, 200, 50, 50);
  movingrect.shapeColor = "green";
  movingrect.velocityX = 3;
  
  fixedrect = createSprite(700, 200, 50, 50);
  fixedrect.shapeColor = "green";
  fixedrect.velocityX = -3;
  
}

function draw() {
  background("black");


   
bounce(movingrect , fixedrect);

  drawSprites();
}


