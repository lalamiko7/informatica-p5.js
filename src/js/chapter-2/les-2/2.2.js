var r, g, b;
var d;
var radius = 60;

var x;
var y;

function setup() {
  createCanvas(1425, 770);
  background('lightgray');
  strokeWeight(20);
  smooth();

  x = width/2;
  y = height/2;

  r = 70;
  g = 70;
  b = 70;

}

function draw() {
    stroke(r, g, b);
    line(pmouseX, pmouseY, mouseX, mouseY);
    d = dist(mouseX, mouseY, x, y);

    if (d < radius) {
        stroke(r, g, b);
        fill(0);
    } else {
      fill(r, g, b);
    }

    ellipse(x, y, radius, radius);

    if (mouseIsPressed){
        if (d < radius) {
          r = random(0, 255);
          g = random(0, 255);
          b = random(0, 255);
        }
    }

}