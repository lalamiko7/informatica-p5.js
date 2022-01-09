function setup() {
    createCanvas(600, 120);
  }
  
  function draw() {
      background(220);
      rectMode(CENTER);
  
      if ((mouseX  > width/3 - 20) && (mouseX < width/3 + 20) && (mouseY > height / 2 - 20) && (mouseY < height/2 + 20)){
          fill1 = color(102, 153, 255);
      }
      else if ((mouseX  > width/2 - 20) && (mouseX < width/2 + 20) && (mouseY > height / 2 - 20) && (mouseY < height/2 + 20)){
          fill2 = color(255, 179, 255);
      }
      else if (((mouseX  > width/2 - 20 + 100) && (mouseX < width/2 + 20 + 100) && (mouseY > height / 2 - 20) && (mouseY < height/2 + 20))) {
          fill3 = color(221, 153, 255);
      }
      else{
          fill1  = 'white';
          fill2 = 'white';
          fill3 = 'white';
      }
  
      fill(fill1);
      rect(width/3, height/2, 40,40);
      fill(fill2);
      rect(width/2, height/2, 40,40);
      fill(fill3);
      rect(width/2 + 100, height/2, 40,40);
  }