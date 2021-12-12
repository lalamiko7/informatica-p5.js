var x;
var y;
var size;
var spacing;

function setup() {
    x = 1425;
    y = 770;
    createCanvas(x, y);
    
    size = 75;
    spacing = 40;
    spacing += size
}

function draw() {
    background('lightgrey');
    translate(x / 2, y / 2);
    
    strokeWeight(6);

    fill('#5a2e90');
    circle(- 3.0 * spacing, 2.5 * spacing, size);

    fill('#660066');
    circle(- 1.5 * spacing, 2.5 * spacing, size);

    fill('#b300b3');
    circle(- 0.5 * spacing, 2.5 * spacing, size);

    fill('#ff00ff');
    circle(0.5 * spacing, 2.5 * spacing, size);

    fill('#ff66ff');
    circle(1.5 * spacing, 2.5 * spacing, size);

    fill('#ffccff');
    circle(2.5 * spacing, 2.5 * spacing, size);

    strokeWeight(5)

    fill('#00a0d7');
    circle(- 3.0 * spacing, 1.5 * spacing, size);

    fill('#000066');
    circle(- 1.5 * spacing, 1.5 * spacing, size);

    fill('#0000b3');
    circle(- 0.5 * spacing, 1.5 * spacing, size);

    fill('#0000ff');
    circle(0.5 * spacing, 1.5 * spacing, size);

    fill('#6666ff');
    circle(1.5 * spacing, 1.5 * spacing, size);

    fill('#ccccff');
    circle(2.5 * spacing, 1.5 * spacing, size);

    strokeWeight(4)

    fill('#65cc02');
    circle(- 3.0 * spacing, 0.5 * spacing, size);

    fill('#006600');
    circle(- 1.5 * spacing, 0.5 * spacing, size);

    fill('#00b300');
    circle(- 0.5 * spacing, 0.5 * spacing, size);

    fill('#00ff00');
    circle(0.5 * spacing, 0.5 * spacing, size);

    fill('#66ff66');
    circle(1.5 * spacing, 0.5 * spacing, size);

    fill('#ccffcc');
    circle(2.5 * spacing, 0.5 * spacing, size);

    strokeWeight(3)

    fill('#ffc112');
    circle(- 3.0 * spacing, - 0.5 * spacing, size);

    fill('#666600');
    circle(- 1.5 * spacing, - 0.5 * spacing, size);

    fill('#b3b300');
    circle(- 0.5 * spacing, - 0.5 * spacing, size);

    fill('#ffff00');
    circle(0.5 * spacing, - 0.5 * spacing, size);

    fill('#ffff66');
    circle(1.5 * spacing, - 0.5 * spacing, size);

    fill('#ffffcc');
    circle(2.5 * spacing, - 0.5 * spacing, size);

    strokeWeight(2)

    fill('#f6630d');
    circle(- 3.0 * spacing, - 1.5 * spacing, size);

    fill('#664200');
    circle(- 1.5 * spacing, - 1.5 * spacing, size);

    fill('#b37400');
    circle(- 0.5 * spacing, - 1.5 * spacing, size);

    fill('#ffa500');
    circle(0.5 * spacing, - 1.5 * spacing, size);

    fill('#ffc966');
    circle(1.5 * spacing, - 1.5 * spacing, size);

    fill('#ffedcc');
    circle(2.5 * spacing, - 1.5 * spacing, size);

    strokeWeight(1)

    fill('#e71223');
    circle(- 3.0 * spacing, - 2.5 * spacing, size);

    fill('#660000');
    circle(- 1.5 * spacing, - 2.5 * spacing, size);

    fill('#b30000');
    circle(- 0.5 * spacing, - 2.5 * spacing, size);

    fill('#ff0000');
    circle(0.5 * spacing, - 2.5 * spacing, size);

    fill('#ff6666');
    circle(1.5 * spacing, - 2.5 * spacing, size);

    fill('#ffcccc');
    circle(2.5 * spacing, - 2.5 * spacing, size);
}
