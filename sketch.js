var movingrect, fixedrect;




function setup() {
  createCanvas(800, 400);
  fixedrect = createSprite(200, 200, 60, 120);
  movingrect = createSprite(800, 200, 120, 60);

}

function draw() {
  background(255, 255, 255);
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY

  if (movingrect.x - fixedrect.x < fixedrect.width / 2 + movingrect.width / 2
    &&fixedrect.x-movingrect.x<fixedrect.width / 2 + movingrect.width / 2
    &&movingrect.y - fixedrect.y < fixedrect.width / 2 + movingrect.width / 2
    &&fixedrect.y-movingrect.y<fixedrect.width / 2 + movingrect.width / 2) {
    movingrect.shapeColor = "red"
    fixedrect.shapeColor = "red"
  }
  else {
    movingrect.shapeColor = "green"
    fixedrect.shapeColor = "green"
  }
  drawSprites();
}