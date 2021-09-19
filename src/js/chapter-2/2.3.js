function setup() {
    createCanvas(1425, 770);
    background('lightgrey');
}

function draw() {
    fill(random(255));
    ellipse(random(width),random(height), random(20, 60), random(20, 60));
}