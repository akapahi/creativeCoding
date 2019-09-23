
let step = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
}

function draw() {
  background(250);
  noFill();
  push();
  translate(width/2, height/2)
  for(let i=0; i*step < width && i*step < height; i++){
    ellipse(0, 0, i*step, i*step)
  }

  pop();

  for(let i=0; i*step < width && i*step < height; i++){
    ellipse(mouseX,mouseY, i*step, i*step)
  }
}
