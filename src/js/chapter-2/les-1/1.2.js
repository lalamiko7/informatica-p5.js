function setup() {
    createCanvas(1425, 770);
  }
  
  function draw() {
      background('lightgrey');
      rectMode(CENTER);
      fill(102, 153, 255);
  
      if(mouseX>100){
          rect(150, 60, 20,20);
      }if(mouseX>200){
          rect(250, 60, 20,20);
      }if(mouseX>300){
          rect(350, 60, 20,20);
      }if(mouseX>400){
          rect(450, 60, 20,20);
      }if(mouseX>500){
          rect(550, 60, 20,20);
      }if(mouseX > 0){
        rect(50,60,20,20);
      }


      var redLight = 'white';
    var yellowLight = 'white';
    var greenLight = 'white';

    fill('darkgrey');
    rect(width / 2, height / 2,50,100); 

    if (mouseY > (height / 2 + 20)) { 
        greenLight = 'green' 
    }
    else if (mouseY > height / 2 - 20){ 
        yellowLight = 'yellow'; 
    }
    else {
        redLight = 'red';
    }

    fill(redLight);
    ellipse(width / 2, height / 2 - 25, 20, 20);
    fill(yellowLight);
    ellipse(width / 2, height / 2, 20, 20);
    fill(greenLight);
    ellipse(width / 2, height / 2 + 25, 20, 20);
  
  } 