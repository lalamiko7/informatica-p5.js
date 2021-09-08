function setup() {
    createCanvas(1200, 1200);
    background(100);
    strokeWeight(10);
}

function draw () {
    rect(500, 200, 100, 100);
    rect(200, 300, 700, 600);
    rect(400, 700, 300, 100);

    circle(400, 500, 200);
    circle(700, 500, 200);
}