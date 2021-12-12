var size;
var spacing;
var breedte;

var x;
var y;

var code1;
var code2;
var code3;

var code;

function setup() {
    createCanvas(1425, 770);
    background('lightgrey');

    size = 40;
    spacing = 40;

    textSize(32);
    textAlign(CENTER);

    code1 = int(random(0, 9));
    code2 = int(random(0, 9));
    code3 = int(random(0, 9));
    code = [code1, code2, code3];
    console.log(code);
}

function draw() {
    fill(115, 115, 115);
    stroke('darkgrey');
    breedte = 3 * size + 4 * spacing;
    hoogte = 4 * size + 5 * spacing;
    x = width/2 - 0.5 * breedte;
    y = height/2 - 0.5 * hoogte;
    rect(x, y, breedte, hoogte + 2 * spacing, 10);

    strokeWeight(3);
    stroke(255, 230, 100);
    fill(255, 255, 128);
    breedte = 3 * size + 2 * spacing;
    x = width/2;
    y = height/2 - 0.5 * breedte;
    ellipse(x, y - size, size - 15, size - 15);

    x = width/2 - 0.3 * breedte;
    ellipse(x, y - size, size - 15, size - 15);
    x = width/2 + 0.3 * breedte;
    ellipse(x, y - size, size - 15, size - 15);
    stroke('darkgrey');

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
    x = width/2 - 0.5 * breedte - 4;
    y = height/2 + 0.5 * hoogte + 1.5 * spacing;
    rect(x, y, breedte + 8, 40);


}