var size;
var spacing;
var breedte;

var x;
var y;

function setup() {
    createCanvas(1425, 770);
    background('lightgrey');

    size = 40;
    spacing = 40;

    textSize(32);
    textAlign(CENTER);
}

function draw() {
    fill(255, 255, 128, 10);
    breedte = 3 * size + 2 * spacing;
    x = width/2 - 0.5 * breedte;
    y = height/2 - 0.5 * breedte;
    ellipse(x, y - size, 10, 10);


    fill(115, 115, 115);
    stroke('darkgrey');
    breedte = 3 * size + 4 * spacing;
    hoogte = 4 * size + 5 * spacing;
    x = width/2 - 0.5 * breedte;
    y = height/2 - 0.5 * hoogte;
    rect(x, y, breedte, hoogte + 2 * spacing, 10);

    fill('white');
    strokeWeight(5);
    stroke(102, 153, 255);

    breedte = 3 * size + 2 * spacing;
    hoogte = 4 * size + 3 * spacing;
    x = width/2 - 0.5 * breedte;
    y = height/2 - 0.5 * breedte;

    fill(77, 77, 77);

    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('1', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);
    
    x += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('2', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    x += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('3', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    x = width/2 - 0.5 * breedte;
    y += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('4', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    x += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('5', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    x += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('6', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    x = width/2 - 0.5 * breedte;
    y += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('7', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    x += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('8', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    x += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('9', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    x = width/2 - 0.5 * breedte;
    y += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    textSize(50);
    text('*', x + 0.5 * size, y + 1.2 * size);
    textSize(32);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    x += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('0', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    x += size + spacing;
    rect(x, y, 40, 40);
    noStroke();
    fill(102, 153, 255);
    text('#', x + 0.5 * size, y + 0.8 * size);
    stroke(102, 153, 255);
    fill(77, 77, 77);

    noStroke();
    x = width/2 - 0.5 * breedte;
    y = height/2 + 0.5 * hoogte + 1.5 * spacing;
    rect(x, y, breedte, 40);
}