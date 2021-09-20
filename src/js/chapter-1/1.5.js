let r;

function setup() {
    createCanvas(1425, 770);
    r = 0;
}

function draw() {
    background('lightgrey');

    translate(width / 2, height / 2);
    rotate(r * PI);
    r += 0.01;

    const transparent = color(0);
    transparent.setAlpha(0);
    fill(transparent);
    stroke('#5d8d9f');
    strokeWeight(10);
    circle(0, 0, 400);

    noStroke();
    fill('#5d8d9f');
    circle(0, 0, 400);

    fill('#ffa3b9');
    arc(0, 0, 400, 400, HALF_PI, 0 - HALF_PI);
    circle(0, 0 - 100, 200);

    fill('#5d8d9f');
    circle(0, 0 + 100, 200);
    circle(0, 0 - 100, 50);
    
    fill('#ffa3b9');
    circle(0, 0 + 100, 50);
}
