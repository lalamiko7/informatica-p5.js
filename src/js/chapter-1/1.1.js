function setup() {
    createCanvas(1200, 1200);
    background(100);
    strokeWeight(10);
}

function draw () {
    // De robot
    fill('white');
    rect(200, 300, 700, 600);
    rect(400, 700, 300, 100);

    circle(400, 500, 200);
    circle(700, 500, 200);

    // De hoed
    fill('brown');
    rect(500, 200, 100, 100);
    rect(150, 250, 800, 50);

    // De symbolen
    beginShape();
    vertex(400, 550);
    bezierVertex(500, 450, 400, 450, 400, 500);
    bezierVertex(400, 450, 300, 450, 400, 550);
    endShape();

    beginShape();
    vertex(400 + 300, 550);
    bezierVertex(500 + 300, 450, 400 + 300, 450, 400 + 300, 500);
    bezierVertex(400 + 300, 450, 300 + 300, 450, 400 + 300, 550);
    endShape();

    // De mond
    fill('white');
    arc(700, 750, 100, 100, -0.5 * PI, 0.5 * PI, PIE);
    arc(400, 750, 100, 100, 0.5 * PI, -0.5 * PI, PIE);

    // De tanden
    line(350, 750, 750, 750);
    line(460, 700, 460, 800);
    line(520, 700, 520, 800);
    line(580, 700, 580, 800);
    line(640, 700, 640, 800);
}
