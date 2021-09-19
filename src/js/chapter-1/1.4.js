function setup() {
    createCanvas(600, 120);
    background('lightgrey');
}

function draw() {
    
    fill('white');
    strokeWeight(1);
    triangle(50, 20, 60, 30, 70, 20);
    triangle(50, 40, 60, 30, 70, 40);
    triangle(50, 40, 60, 50, 70, 40);
    triangle(50, 60, 60, 50, 70, 60);
    triangle(50, 60, 60, 70, 70, 60);
    triangle(50, 80, 60, 70, 70, 80);
    triangle(50, 80, 60, 80, 70, 80);
    triangle(50, 80, 60, 90, 70, 80);
    triangle(50, 100, 60, 90, 70, 100);
    
    quad(100, 80, 110, 40, 130, 40, 140, 80);
    
    beginShape();
    vertex(165, 40);
    vertex(170, 55);
    vertex(180, 60);
    vertex(170, 65);
    vertex(175, 80);
    vertex(165, 70);
    vertex(155, 80);
    vertex(160, 65);
    vertex(150, 60);
    vertex(160, 55);
    endShape(CLOSE);
    
    beginShape();
    vertex(220, 40);
    vertex(250, 55);
    vertex(240, 55);
    vertex(240, 80);
    vertex(230, 80);
    vertex(230, 70);
    vertex(210, 70);
    vertex(210, 80);
    vertex(200, 80);
    vertex(200, 55);
    vertex(190, 55);
    endShape(CLOSE);
    
    arc(295, 60, 30, 30, 0, TWO_PI - QUARTER_PI, PIE);
    arc(335, 60, 30, 30, 230, PI, PIE);

    strokeWeight(4);
    point(295, 53);
    point(335, 53);
    strokeWeight(1);
    
    beginShape();
    vertex(400, 80);
    bezierVertex(460, 40, 400, 40, 400, 60);
    bezierVertex(400, 40, 340, 40, 400, 80);
    endShape();
    
    ellipse(475, 60, 50, 30);
    
    triangle(530, 20, 540, 30, 550, 20);
    triangle(530, 40, 540, 30, 550, 40);
    triangle(530, 40, 540, 50, 550, 40);
    triangle(530, 60, 540, 50, 550, 60);
    triangle(530, 60, 540, 70, 550, 60);
    triangle(530, 80, 540, 70, 550, 80);
    triangle(530, 80, 540, 80, 550, 80);
    triangle(530, 80, 540, 90, 550, 80);
    triangle(530, 100, 540, 90, 550, 100);

}
