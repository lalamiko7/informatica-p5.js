var u = 20;

function setup() {
    createCanvas(600, 600);
    background(100);
}

function draw() {
    fill('black')
    grid();

    fill('white');
    strokeWeight(1)
    rect(0, 0, 100, 100);
    rect(500, 0, 100, 100);
    rect(500, 500, 100, 100);
    rect(0, 500, 100, 100);

    circle(50, 50, 98);
    circle(550, 50, 98);
    circle(550, 550, 98);
    circle(50, 550, 98);

    rect(300, 300, 100, 100);
    rect(200, 300, 100, 100);
    rect(200, 200, 100, 100);
    rect(300, 200, 100, 100);

    triangle(200, 200, 300, 100, 400, 200);
    triangle(200, 400, 300, 500, 400, 400);

    beginShape();
    vertex(400, 200);
    vertex(500, 260);
    vertex(500, 340);
    vertex(400, 400);
    endShape(CLOSE);

    beginShape();
    vertex(200, 200);
    vertex(100, 260);
    vertex(100, 340);
    vertex(200, 400);
    endShape(CLOSE);

    fill('black');
    displayMousePosition();
}

function grid() {
    stroke(220);
    strokeWeight(1);
    for (let x = 0; x <= width; x += u) {
        for (let y = 0; y <= height; y += u) {
          line(x, 0, x, height);
          line(0, y, width, y);
        }
    }
    stroke('black'); // reset stroke
}

function displayMousePosition() {
    textFont('menlo');
    textSize(14);
    noStroke();
    text("x:" + mouseX, 30, 40);
    text("y:" + mouseY, 30, 60);
}