let mPos;

function setup() {
  createCanvas(1080, 1080);
  responsiveSketch();
}

function draw() {
  background(255);
  
  mPos = responsiveMousePos();
  
  // Wrong position
  strokeWeight(1);
  circle(mouseX, mouseY, 150);

  // Right position
  strokeWeight(10);
  circle(mPos.x, mPos.y, 150);
}