var z;
function setup() {
    createCanvas(1425, 770);
    z = random(255);
  
  }
  
  function draw() {
    var x = map(mouseX, 0, width, 0, 255);
    var y = map(mouseY, 0, height, 0, 255);

    background(x, y, z);
  }