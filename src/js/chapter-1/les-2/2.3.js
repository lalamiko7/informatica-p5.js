function setup() {
    createCanvas(1425, 770);
    background('lightgrey');
    setFrameRate(60);
}

function draw() {
    for (let i = 0; i < 100; i++) {
        fill(random(255));
        //fill(random(255), random(255), random(255));
        ellipse(random(width),random(height), random(20, 60), random(20, 60));
    }
}