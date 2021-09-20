var x;
var y;
var eyeXL;
var eyeXR;
var eyeY;

function setup() {
    createCanvas(1425, 770);
    background('lightgrey');

    x = width / 2;
    y = height / 2;

    eyeXL = x - 30;
    eyeXR = x + 30;
    eyeY = y - 30;
}

function draw() {
    // Boos
    fill(255);
    ellipse(x - 300, y, 200, 200);

    fill('white');
    ellipse(x - 330, y - 30, 40, 40);
    ellipse(x - 270, y - 30, 40, 40);

    fill(255)
    strokeWeight(10);
    var startAng = .1 * PI;
    var endAng = .9 * PI;
    var smileDiam = .6 * 200;
    arc(x - 300, y, smileDiam, smileDiam, startAng, endAng);

    // Normaal
    fill(255);
    ellipse(x, y, 200, 200);

    // ogen
    fill(0);
    ellipse(x - 30, y - 30, 30, 30);
    ellipse(x + 30, y - 30, 30, 30);

    // pupil
    fill(255);
    noStroke();

    circle(eyeXL, eyeY, 10);
    circle(eyeXR, eyeY, 10);

    eyeY = map(mouseY, 0, height, y - 38, y  - 22);
    eyeXL = map(mouseX, 0, width, x - 38, x  - 22);
    eyeXR = map(mouseX, 0, width, x + 22, x  + 38);

    stroke(0);
    fill(0);

    // mond
    line(x - 50, y + 30, x + 50, y + 30);

    // Blij
    fill(255);
    ellipse(x + 300, y, 200, 200);

    fill(0);
    ellipse(x + 270, y - 30, 30, 30);
    ellipse(x + 330, y - 30, 30, 30);

    fill(255)
    strokeWeight(10);
    var startAng = 0 - .9 * PI;
    var endAng = 0 - .1 * PI;
    var smileDiam = .6 * 200;
    arc(x + 300, y + 70, smileDiam, smileDiam, startAng, endAng);
}