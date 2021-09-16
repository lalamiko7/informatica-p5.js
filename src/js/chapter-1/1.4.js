function setup() {
    createCanvas(600, 120);
    background(150);
}

function draw() {
    // Quadrilateral
    //quad(100, 100, 300, 40, 400, 110, 100, 110);

    // Polygon
    beginShape();
    vertex(10, 10);
    vertex(200, 15);
    vertex(300, 20);
    vertex(100, 50);
    vertex(420, 70);
    vertex(69, 69);
    endShape(CLOSE);

}