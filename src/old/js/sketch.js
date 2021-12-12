var x;
var y;
var row_size;
var size;
var spacing;

function setup() {
    x = 1425;
    y = 770;
    createCanvas(x, y);
    background('lightgrey');

    row_size = 175;
    size = 100;
    spacing = size + 50;
}

function draw() {
    translate(x / 2, y / 2);

    // Outlines
    strokeWeight(5);
    line(0 - ((x / 2) - row_size), 0 - ((y / 2) - row_size), x / 2, 0 - ((y / 2) - row_size));
    line(0 - ((x / 2) - row_size), 0 - ((y / 2) - row_size),0 - ((x / 2) - row_size), y / 2);

    // Head circle
    circle(0 - ((x / 2) - (row_size / 2)), 0 - ((y / 2) - (row_size / 2)), size);

    // Y circles
    circle(0 - ((x / 2) - (row_size / 2)), (0 - ((y / 2) - (row_size / 2))) + (1 * spacing), size);
    circle(0 - ((x / 2) - (row_size / 2)), (0 - ((y / 2) - (row_size / 2))) + (2 * spacing), size);
    circle(0 - ((x / 2) - (row_size / 2)), (0 - ((y / 2) - (row_size / 2))) + (3 * spacing), size);
    circle(0 - ((x / 2) - (row_size / 2)), (0 - ((y / 2) - (row_size / 2))) + (4 * spacing), size);

    // X circles
    circle((0 - ((x / 2) - (row_size / 2)) + (1 * spacing)), 0 - ((y / 2) - (row_size / 2)), size);
    circle((0 - ((x / 2) - (row_size / 2)) + (2 * spacing)), 0 - ((y / 2) - (row_size / 2)), size);
    circle((0 - ((x / 2) - (row_size / 2)) + (3 * spacing)), 0 - ((y / 2) - (row_size / 2)), size);
    circle((0 - ((x / 2) - (row_size / 2)) + (4 * spacing)), 0 - ((y / 2) - (row_size / 2)), size);
    circle((0 - ((x / 2) - (row_size / 2)) + (5 * spacing)), 0 - ((y / 2) - (row_size / 2)), size);
    circle((0 - ((x / 2) - (row_size / 2)) + (6 * spacing)), 0 - ((y / 2) - (row_size / 2)), size);
    circle((0 - ((x / 2) - (row_size / 2)) + (7 * spacing)), 0 - ((y / 2) - (row_size / 2)), size);
    circle((0 - ((x / 2) - (row_size / 2)) + (8 * spacing)), 0 - ((y / 2) - (row_size / 2)), size);
}
