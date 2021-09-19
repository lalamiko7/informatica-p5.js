var x;
var y;

function setup() {
    createCanvas(1425, 770);
    background('lightgrey');

    x = width / 2;
    y = height / 2;
}

function draw() {
    // Boos
    fill(255);
    ellipse(x - 300, y, 200, 200);

    fill(0);
    ellipse(x - 330, y - 30, 30, 30);
    ellipse(x - 270, y - 30, 30, 30);

    fill(255)
    strokeWeight(10);
    var startAng = .1 * PI;
    var endAng = .9 * PI;
    var smileDiam = .6 * 200;
    arc(x - 300, y, smileDiam, smileDiam, startAng, endAng);

    // Normaal
    fill(255);
    ellipse(x, y, 200, 200);

    fill(0);
    ellipse(x - 30, y - 30, 30, 30);
    ellipse(x + 30, y - 30, 30, 30);

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