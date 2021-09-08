function setup() {
    createCanvas(1425, 770);
    background(100);
    strokeWeight(10);
}

function draw() {
    stroke('magenta');
    line(100, 100, 1425 - 100, 670);

    stroke('pink');
    line(150, 200, 600, 200);
    line(1425 - 150, 770 - 200, 1425 - 600, 770 - 200);

    line(712.5, 385 - 50, 712.5, 200 + 50);
    line(712.5, 385 + 50, 712.5, 770 - 250);

    stroke('purple');

    line(712.5, 200 + 50, 600, 200);
    line(712.5, 770 - 250, 1425 - 600, 770 - 200);

    point(1325, 100);
    point(712.5, 385);
    point(100, 670);
}
