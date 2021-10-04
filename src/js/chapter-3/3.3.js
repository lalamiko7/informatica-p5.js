var x;
var y;
var eyeXLH;
var eyeXRH;
var eyeXLN;
var eyeXRN;
var eyeXLS;
var eyeXRS;
var eyeY;

function setup() {
    createCanvas(1425, 770);
    background('lightgrey');

    x = width / 2;
    y = height / 2;
    
    eyeXLH = x - 270;
    eyeXRH = x - 330;
    eyeXLN = x - 30;
    eyeXRN = x + 30;
    eyeXLS = x + 270;
    eyeXRS = x + 330;
    
    eyeY = y - 30;
}

function draw() {
    eyeY = map(mouseY, 0, height, y - 38, y  - 22);
    
    eyeXLH = map(mouseX + 300, 0, width, x - 278, x - 262);
    eyeXRH = map(mouseX + 300, 0, width, x - 338, x - 322);
    
    eyeXLN = map(mouseX, 0, width, x - 38, x - 22);
    eyeXRN = map(mouseX, 0, width, x + 22, x + 38);
    
    eyeXLS = map(mouseX - 300, 0, width, x + 262, x + 278);
    eyeXRS = map(mouseX - 300, 0, width, x + 322, x + 338);
    
    // Happy
    fill('#ffcc00');
    stroke('#e6b800');
    ellipse(x - 300, y, 200, 200);

    // ogen
    stroke('#cca300');
    fill(0);
    ellipse(x - 330, y - 30, 30, 30);
    ellipse(x - 270, y - 30, 30, 30);

    // pupil
    fill(255);
    noStroke();

    circle(eyeXLH, eyeY, 10);
    circle(eyeXRH, eyeY, 10);

    stroke(0);
    fill(0);
    
    // mond
    fill('#ffcc00');
    stroke('#cca300');
    strokeWeight(10);
    var startAng = .1 * PI;
    var endAng = .9 * PI;
    var smileDiam = .6 * 200;
    arc(x - 300, y, smileDiam, smileDiam, startAng, endAng);

    // Normal
    stroke('#cc0000');
    fill('#e60000');
    ellipse(x, y, 200, 200);

    // ogen
    stroke('#b30000');
    fill(0);
    ellipse(x - 30, y - 30, 30, 30);
    ellipse(x + 30, y - 30, 30, 30);

    // pupil
    fill(255);
    noStroke();

    circle(eyeXLN, eyeY, 10);
    circle(eyeXRN, eyeY, 10);

    stroke('#b30000');
    fill(0);

    // mond
    line(x - 50, y + 30, x + 50, y + 30);

    // Sad
    stroke('#0066cc');
    fill('#0073e6');
    ellipse(x + 300, y, 200, 200);
    
    // ogen
    stroke('#0059b3');
    fill(0);
    ellipse(x + 270, y - 30, 30, 30);
    ellipse(x + 330, y - 30, 30, 30);
    
    // pupil
    fill(255);
    noStroke();

    circle(eyeXLS, eyeY, 10);
    circle(eyeXRS, eyeY, 10);

    stroke('#0059b3');
    fill(0);
    
    // mond
    fill('#0073e6');
    strokeWeight(10);
    var startAng = 0 - .9 * PI;
    var endAng = 0 - .1 * PI;
    var smileDiam = .6 * 200;
    arc(x + 300, y + 70, smileDiam, smileDiam, startAng, endAng);
}