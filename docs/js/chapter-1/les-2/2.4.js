let height;
let amplitude;
let speed;

let x;
let y;
let size;

function setup() {
    createCanvas(1425, 770);
    background('lightgrey');
    size = 250;
}

function draw() {
    // Type 1: hartje
    x = 150;
    y = 500;
    stroke('#e65fa2');
    strokeWeight(5);
    fill('#ff69b4');
    beginShape();
    vertex(x, y);
    bezierVertex(x + size, y - size, x, y - size, x, y - (size / 2));
    bezierVertex(x, y - size, x - size, y - size, x, y);
    endShape();

    // Type 2: pac-man
    stroke('#e3d339');
    strokeWeight(5);
    var colorX = map(mouseX, 0, 1425, 1, 100);
    var colorY = map(mouseY, 0, 770, 1, 2);
    x = 400;
    y = 500;
    fill(2.52 * colorX, 2.34 * (colorX / 2) * colorY, 0.63 * colorX);
    arc(x, y - ((size / 1.2) / 2), size / 1.2, size / 1.2, 0, TWO_PI - QUARTER_PI, PIE);

    // Type 3: pride flag
    noStroke();
    x = 800;
    y = 515;

    fill('#D12229');
    rect((x - size), (y - size), size * 2, size / 6);
    
    fill('#F68A1E');
    rect((x - size), (y - size) + size / 6, size * 2, size / 6);
   
    fill('#FDE01A');
    rect((x - size), (y - size) + (2 * (size / 6)), size * 2, size / 6);
    
    fill('#007940');
    rect((x - size), (y - size) + (3 * (size / 6)), size * 2, size / 6);
   
    fill('#24408E');
    rect((x - size), (y - size) + (4 * (size / 6)), size * 2, size / 6);
    
    fill('#732982');
    rect((x - size), (y - size) + (5 * (size / 6)), size * 2, size / 6);
    
    fill('#000000');
    beginShape();
    vertex((x - size), (y - size));
    vertex((x - size), (y - size) + size);
    vertex((x - size) + (2.5 * (size / 6)), (y - size) + size);
    vertex((x - size) + size, (y - size) + (size / 2));
    vertex((x - size) + (2.5 * (size / 6)), (y - size));
    endShape(CLOSE); 
    
    fill('#603814');
    beginShape();
    vertex((x - size), (y - size));
    vertex((x - size), (y - size) + size);
    vertex((x - size) + (1.5 * (size / 6)), (y - size) + size);
    vertex((x - size) + size - (size / 6), (y - size) + (size / 2));
    vertex((x - size) + (1.5 * (size / 6)), (y - size));
    endShape(CLOSE); 
    
    fill('#75D5EB');
    beginShape();
    vertex((x - size), (y - size));
    vertex((x - size), (y - size) + size);
    vertex((x - size) + (0.5 * (size / 6)), (y - size) + size);
    vertex(((x - size) + size) - (2 * (size / 6)), (y - size) + (size / 2));
    vertex((x - size) + (0.5 * (size / 6)), (y - size));
    endShape(CLOSE); 
    
    fill('#FDAFC7');
    triangle((x - size), (y - size) + (0.5 * (size / 6)), (x - size), ((y - size) + size) - (0.5 * (size / 6)), ((x - size) + size) - (3 * (size / 6)), (y - size) + (size / 2));
    
    fill('#FFFFFF');
    triangle((x - size), (y - size) + (1.5 * (size / 6)), (x - size), ((y - size) + size) - (1.5 * (size / 6)), ((x - size) + size) - (4 * (size / 6)), (y - size) + (size / 2));

    // Type 4: schuine mond smiley
    stroke('#e2bb3c');
    strokeWeight(5);
    x = 1200;
    y = 500;
    fill('#fbd043');
    circle(x, y - ((size / 1.2) / 2), size / 1.2);
    noStroke();

    fill(0);
    circle(x - size / (200 / 30), (y - ((size / 1.2) / 2)) - size / (200 / 30), size / (200 / 30));
    circle(x + size / (200 / 30), (y - ((size / 1.2) / 2)) - size / (200 / 30), size / (200 / 30));

    var eyeY = map(mouseY, 0, 770, (y - ((size / 1.2) / 2)) - size / (200 / 30) - 5, (y - ((size / 1.2) / 2)) - size / (200 / 30) + 5);
    
    var eyeXL = map(mouseX, 0, 1425, x - size / (200 / 30) - 5, x - size / (200 / 30) + 5);
    var eyeXR = map(mouseX, 0, 1425, x + size / (200 / 30) - 5, x + size / (200 / 30) + 5);

    fill(255);
    circle(eyeXL, eyeY, 10);
    circle(eyeXR, eyeY, 10);

    stroke(0);
    fill('#fbd043');
    strokeWeight(size / (200 / 10));
    line(x - size / (200 / 40), (y - ((size / 1.2) / 2)) + size / (200 / 40), x + size / (200 / 40), (y - ((size / 1.2) / 2)) + size / (200 / 25));
}
