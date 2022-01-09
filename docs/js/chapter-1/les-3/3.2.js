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

    colorMode(HSB);
}

function draw() {
    background('lightgrey');
    translate(x / 2, y / 2);
    
    strokeWeight(6);

    fill(267, 68, 56);
    circle(- 3.0 * spacing, 2.5 * spacing, size);

    fill(300, 100, 40);
    circle(- 1.5 * spacing, 2.5 * spacing, size);

    fill(300, 100, 70);
    circle(- 0.5 * spacing, 2.5 * spacing, size);

    fill(300, 100, 100);
    circle(0.5 * spacing, 2.5 * spacing, size);

    fill(300, 60, 100);
    circle(1.5 * spacing, 2.5 * spacing, size);

    fill(300, 20, 100);
    circle(2.5 * spacing, 2.5 * spacing, size);

    strokeWeight(5)

    fill(195, 100, 84);
    circle(- 3.0 * spacing, 1.5 * spacing, size);

    fill(240, 100, 40);
    circle(- 1.5 * spacing, 1.5 * spacing, size);

    fill(240, 100, 70);
    circle(- 0.5 * spacing, 1.5 * spacing, size);

    fill(240, 100, 100);
    circle(0.5 * spacing, 1.5 * spacing, size);

    fill(240, 60, 100);
    circle(1.5 * spacing, 1.5 * spacing, size);

    fill(240, 20, 100);
    circle(2.5 * spacing, 1.5 * spacing, size);

    strokeWeight(4)

    fill(91, 99, 80);
    circle(- 3.0 * spacing, 0.5 * spacing, size);

    fill(120, 100, 40);
    circle(- 1.5 * spacing, 0.5 * spacing, size);

    fill(120, 100, 70);
    circle(- 0.5 * spacing, 0.5 * spacing, size);

    fill(120, 100, 100);
    circle(0.5 * spacing, 0.5 * spacing, size);

    fill(120, 60, 100);
    circle(1.5 * spacing, 0.5 * spacing, size);

    fill(120, 20, 100);
    circle(2.5 * spacing, 0.5 * spacing, size);

    strokeWeight(3)

    fill(44, 93, 100);
    circle(- 3.0 * spacing, - 0.5 * spacing, size);

    fill(60, 100, 40);
    circle(- 1.5 * spacing, - 0.5 * spacing, size);

    fill(60, 100, 70);
    circle(- 0.5 * spacing, - 0.5 * spacing, size);

    fill(60, 100, 100);
    circle(0.5 * spacing, - 0.5 * spacing, size);

    fill(60, 60, 100);
    circle(1.5 * spacing, - 0.5 * spacing, size);

    fill(60, 20, 100);
    circle(2.5 * spacing, - 0.5 * spacing, size);

    strokeWeight(2)

    fill(22, 95, 96);
    circle(- 3.0 * spacing, - 1.5 * spacing, size);

    fill(22, 95, 96);
    circle(- 1.5 * spacing, - 1.5 * spacing, size);

    fill(39, 100, 70);
    circle(- 0.5 * spacing, - 1.5 * spacing, size);

    fill(39, 100, 100);
    circle(0.5 * spacing, - 1.5 * spacing, size);

    fill(39, 60, 100);
    circle(1.5 * spacing, - 1.5 * spacing, size);

    fill(39, 20, 100);
    circle(2.5 * spacing, - 1.5 * spacing, size);

    strokeWeight(1)

    fill(355, 92, 91);
    circle(- 3.0 * spacing, - 2.5 * spacing, size);

    fill(0, 100, 40);
    circle(- 1.5 * spacing, - 2.5 * spacing, size);

    fill(0, 100, 70);
    circle(- 0.5 * spacing, - 2.5 * spacing, size);

    fill(0, 100, 100);
    circle(0.5 * spacing, - 2.5 * spacing, size);

    fill(0, 60, 100);
    circle(1.5 * spacing, - 2.5 * spacing, size);

    fill(0, 20, 100);
    circle(2.5 * spacing, - 2.5 * spacing, size);
}
