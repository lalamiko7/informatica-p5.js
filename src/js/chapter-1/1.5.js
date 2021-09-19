function setup() {
    createCanvas(1425, 770);
}

function draw() {
    background('lightgrey');

    const transparent = color(0);
    transparent.setAlpha(0);
    fill(transparent);
    stroke('#5d8d9f');
    strokeWeight(10);
    circle(1425 / 2, 770 / 2, 400);

    noStroke();
    fill('#5d8d9f');
    circle(1425 / 2, 770 / 2, 400, 400);

    fill('#ffa3b9');
    arc(1425 / 2, 770 / 2, 400, 400, HALF_PI, 0 - HALF_PI);
    circle(1425 / 2, 770 / 2 - 100, 200);

    fill('#5d8d9f');
    circle(1425 / 2, 770 / 2 + 100, 200);
    circle(1425 / 2, 770 / 2 - 100, 50);
    
    fill('#ffa3b9');
    circle(1425 / 2, 770 / 2 + 100, 50);
}
