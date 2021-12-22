// Define global variables so all functions can acces them
let size; // Size variable
let spacing; // Space between buttons

let breedte; // Width of lock
let hoogte; // Height of lock

let x; // X position
let y; // Y position

let number; // Number of code
let code; // Code generated with numbers

let buttons; // List of clickable buttons

let test = 0; // Testing variable

function createLight(x, y, id) {
    buttons.push([id, x, y, size]);

    strokeWeight(5);
    stroke(102, 153, 255);
    fill(77, 77, 77);
    rect(x, y, size, size);
    noStroke();
    fill(102, 153, 255);
    if (id === '*') {
        textSize(50);
        text(id, x + 0.5 * size, y + 1.2 * size);
    } else {
        textSize(32);
        text(id, x + 0.5 * size, y + 0.8 * size);
    }
}

function generateCode(length, duplicate) {
    code = [];
    if (duplicate === true) {
        for (let i = 0; i < length; i++) {
            number = int(random(0, 10));
            code.push(number);
        }
        return code;
    } else {
        if (length > 10) {
            return 'Code generation not possible, only codes with length 10 or less are allowed with duplicate enabled.'
        } else {
            for (let i = 0; i < length; i++) {
                number = int(random(0, 10));
                while (code.includes(number)) {
                    number = int(random(0, 10));
                }
                code.push(number);
            }
            return code;
        }
    }
}

function checkButton(mouseX, mouseY) {

}

function setup() {
    createCanvas(1425, 770);
    background('lightgrey');

    size = 40;
    spacing = 40;

    textSize(32);
    textAlign(CENTER);

    code = generateCode(3, false);
    console.log(code);

    buttons = [];

    fill(115, 115, 115);
    stroke('darkgrey');
    breedte = 3 * size + 4 * spacing;
    hoogte = 4 * size + 5 * spacing;
    x = width/2 - 0.5 * breedte;
    y = height/2 - 0.5 * hoogte;
    rect(x, y, breedte, hoogte + 2 * spacing, 10);

    breedte = 3 * size + 2 * spacing;
    hoogte = 4 * size + 3 * spacing;
    x = width/2 - 0.5 * breedte;
    y = height/2 - 0.5 * breedte;
    createLight(x, y, '1');

    x += size + spacing;
    createLight(x, y, '2');

    x += size + spacing;
    createLight(x, y, '3');

    x = width/2 - 0.5 * breedte;
    y += size + spacing;
    createLight(x, y, '4');

    x += size + spacing;
    createLight(x, y, '5');

    x += size + spacing;
    createLight(x, y, '6');

    x = width/2 - 0.5 * breedte;
    y += size + spacing;
    createLight(x, y, '7');

    x += size + spacing;
    createLight(x, y, '8');

    x += size + spacing;
    createLight(x, y, '9');

    x = width/2 - 0.5 * breedte;
    y += size + spacing;
    createLight(x, y, '*');

    x += size + spacing;
    createLight(x, y, '0');

    x += size + spacing;
    createLight(x, y, '#')

    fill(77, 77, 77);

    noStroke();
    x = width/2 - 0.5 * breedte - 4;
    y = height/2 + 0.5 * hoogte + 1.5 * spacing;
    rect(x, y, breedte + 8, 40);

    console.log(buttons);
}

function mousePressed() {
    if (checkButton(mouseX, mouseY)) {

    }
}

function draw() {
    strokeWeight(3);
    stroke(255, 230, 100);
    fill(255, 255, 128);
    breedte = 3 * size + 2 * spacing;
    x = width/2;
    y = height/2 - 0.5 * breedte;
    ellipse(x, y - size, size - 15, size - 15);

    x = width/2 - 0.3 * breedte;
    ellipse(x, y - size, size - 15, size - 15);
    x = width/2 + 0.3 * breedte;
    ellipse(x, y - size, size - 15, size - 15);
}
