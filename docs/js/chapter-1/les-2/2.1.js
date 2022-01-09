function setup() {
    createCanvas(1425, 770);
}

function draw() {
    background('lightgrey');

    fill('white');
    circle(width / 2, height / 2, 300);

    fill('black');
    text(width, 50, 50);
    text(height, 50, 65);

    ellipse(width / 3, height / 3, 60, 60);
    ellipse(width / 3, height / 2, 60, 60);
    ellipse(width / 3, 2 * height / 3, 60, 60);

    ellipse(2 * width / 3, height / 3, 60, 60);
    ellipse(2 * width / 3, height / 2, 60, 60);
    ellipse(2 * width / 3, 2 * height / 3, 60, 60);
}
