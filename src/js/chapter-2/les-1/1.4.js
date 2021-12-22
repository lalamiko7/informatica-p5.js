function setup(){
    createCanvas(1425, 770);
    background('lightgrey');
    stroke(255, 100);
}

function draw() {
    var weight = dist(mouseX, mouseY, pmouseX, pmouseY) * 3;
    strokeWeight(weight);
    stroke('#6894b4');
    line(mouseX, mouseY, pmouseX, pmouseY);
}