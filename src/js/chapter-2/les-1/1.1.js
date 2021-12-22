function setup() {
    x = 1425;
    y = 770;
    createCanvas(x, y);
}
  
function draw() {
    //start by setting the canvas to white
    background('lightgrey');
    fill('lightgrey');
    //when the x location of my mouse is greater than 300
    //turn the background black 
    if (mouseX > 300) {
      fill(100, 150, 100);
    }
    if (mouseY > 60) {
      fill(100, 150, 100);
    }

    rect(0, 0, 600, 120);

    var x = 10; //set the initial size to 10

    
    fill(50, 100, 150); //set the initial fill to red 
  
    if (mouseX < 200) {
      x = 60;
    }
    if (mouseY < 40) {
      fill(100, 150, 100);
    }
    if (mouseX > 590 && mouseY > 590 || mouseX > 590 && mouseY < 110) {
      ellipse(width / 2, height / 2, x, x);
    } else {
      rect(width / 2, height / 2, x, x);
    }
}