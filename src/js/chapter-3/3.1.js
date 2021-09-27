var x;
var y;
var spacing;
var circles;
var size;

function setup() {
    x = 1425;
    y = 770;
    createCanvas(x, y);
    background('lightgrey');
    
    spacing = 25;
    circles = 6;
    size = 50;
}

function draw() {
    translate(x / 2, y / 2);
    
    strokeWeight(10);

    for (i = 0; i < circles; i++) {
        Console.log('test');
    }
    ellipse(50,50,50);
    ellipse(125,50,50);
    ellipse(200,50,50);
    ellipse(275,50,50);
    ellipse(350,50,50);

    ellipse(50,125,50);
    ellipse(125,125,50);
    ellipse(200,125,50);
    ellipse(275,125,50);
    ellipse(350,125,50);
}
