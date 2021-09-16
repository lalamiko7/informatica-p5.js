function preload() {
    img = loadImage('https://test.leanderbindt.dev/world.svg');
}

function setup() {
    createCanvas(1425, 770);
}

function draw() {
    background(100);

    stroke("#2977E2");
    strokeWeight(7);

    fill("#29ABE2");
    circle(1425 / 2, 770 / 2, 400);

    strokeWeight(3);
    fill("#00B245");
    
    image(world, 1425 / 2, 770 / 2);

    noStroke();
    fill("black");
    text(mouseX + ", " + mouseY, 1425 / 2, 770 / 2);
}
