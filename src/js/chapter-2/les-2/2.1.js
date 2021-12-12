var x, y;
var diameter;

function setup() {
  createCanvas(600, 120);
  ellipseMode(CENTER);
  noStroke();

  x = 300;
  y = 60;
  diameter = 40;
}

function draw() {
  background(230);
  var d = dist(mouseX, mouseY, x, y);
  if (d < diameter/2) {
    fill(235, 198, 217);
  } else {
    fill(255);
  }

  x = mouseX;
  y = mouseY;

  if (x > 300) {
      background(153, 51, 102);
  }
  ellipse(x, y, diameter, diameter);
}