let elementWidth;
let elementHeight;

const opdracht_1 = function (p5) {
    p5.setup = function () {
        elementWidth = document.getElementById('canvas1').clientWidth;
        elementHeight = document.getElementById('canvas1').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);
    }

    p5.draw = function () {
        //start by setting the canvas to white
        p5.background('lightgrey');
        p5.fill('lightgrey');
        //when the x location of my mouse is greater than 300
        //turn the background black
        if (p5.mouseX > 300) {
            p5.fill(100, 150, 100);
        }
        if (p5.mouseY > 60) {
            p5.fill(100, 150, 100);
        }

        p5.rect(0, 0, 600, 120);

        let x = 10; //set the initial size to 10


        p5.fill(50, 100, 150); //set the initial fill to red

        if (p5.mouseX < 200) {
            x = 60;
        }
        if (p5.mouseY < 40) {
            p5.fill(100, 150, 100);
        }
        if (p5.mouseX > 590 && p5.mouseY > 590 || p5.mouseX > 590 && p5.mouseY < 110) {
            p5.ellipse(p5.width / 2, p5.height / 2, x, x);
        } else {
            p5.rect(p5.width / 2, p5.height / 2, x, x);
        }
    }
}

const opdracht_2 = function (p5) {

    p5.setup = function () {
        elementWidth = document.getElementById('canvas2').clientWidth;
        elementHeight = document.getElementById('canvas2').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);
    }

    p5.draw = function () {
        p5.background('lightgrey');
        p5.rectMode(p5.CENTER);
        p5.fill(102, 153, 255);

        if (p5.mouseX > 100){
            p5.rect(150, 60, 20, 20);
        }
        if (p5.mouseX > 200){
            p5.rect(250, 60, 20, 20);
        }
        if (p5.mouseX > 300){
            p5.rect(350, 60, 20, 20);
        }
        if (p5.mouseX > 400){
            p5.rect(450, 60, 20, 20);
        }
        if (p5.mouseX > 500){
            p5.rect(550, 60, 20,20);
        }
        if (p5.mouseX > 0){
            p5.rect(50, 60, 20, 20);
        }


        let redLight = 'white';
        let yellowLight = 'white';
        let greenLight = 'white';

        p5.fill('darkgrey');
        p5.rect(p5.width / 2, p5.height / 2,50,100);

        if (p5.mouseY > (p5.height / 2 + 20)) {
            greenLight = 'green'
        }
        else if (p5.mouseY > p5.height / 2 - 20){
            yellowLight = 'yellow';
        }
        else {
            redLight = 'red';
        }

        p5.fill(redLight);
        p5.ellipse(p5.width / 2, p5.height / 2 - 25, 20, 20);
        p5.fill(yellowLight);
        p5.ellipse(p5.width / 2, p5.height / 2, 20, 20);
        p5.fill(greenLight);
        p5.ellipse(p5.width / 2, p5.height / 2 + 25, 20, 20);

    }
}

const opdracht_3 = function (p5) {
    let fill1;
    let fill2;
    let fill3;

    p5.setup = function () {
        elementWidth = document.getElementById('canvas3').clientWidth;
        elementHeight = document.getElementById('canvas3').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);
    }

    p5.draw = function () {
        p5.background('lightgrey');
        p5.rectMode(p5.CENTER);

        if ((p5.mouseX > p5.width / 3 - 20) && (p5.mouseX < p5.width / 3 + 20) && (p5.mouseY > p5.height / 2 - 20) && (p5.mouseY < p5.height / 2 + 20)) {
            fill1 = p5.color(102, 153, 255);
        } else if ((p5.mouseX > p5.width / 2 - 20) && (p5.mouseX < p5.width / 2 + 20) && (p5.mouseY > p5.height / 2 - 20) && (p5.mouseY < p5.height / 2 + 20)) {
            fill2 = p5.color(123, 179, 90);
        } else if (((p5.mouseX > p5.width / 2 - 20 + 100) && (p5.mouseX < p5.width / 2 + 20 + 100) && (p5.mouseY > p5.height / 2 - 20) && (p5.mouseY < p5.height / 2 + 20))) {
            fill3 = p5.color(221, 153, 255);
        } else {
            fill1 = 'white';
            fill2 = 'white';
            fill3 = 'white';
        }

        p5.fill(fill1);
        p5.rect(p5.width/3, p5.height/2, 40,40);
        p5.fill(fill2);
        p5.rect(p5.width/2, p5.height/2, 40,40);
        p5.fill(fill3);
        p5.rect(p5.width/2 + 100, p5.height/2, 40,40);
    }
}

const opdracht_4 = function (p5) {
    p5.setup = function () {
        elementWidth = document.getElementById('canvas4').clientWidth;
        elementHeight = document.getElementById('canvas4').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);

        p5.background('lightgrey');
        p5.stroke(255, 100);
    }

    p5.draw = function () {
        let weight = p5.dist(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY) * 1.1;
        p5.strokeWeight(weight);
        p5.stroke('#6894b4');
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }

    p5.mousePressed = function () {
        if (p5.mouseX >= 0 && p5.mouseX <= p5.width && p5.mouseY >= 0 && p5.mouseY <= p5.height) {
            return false;
        }
    }
}

const opdracht_5 = function (p5) {
    let x;
    let y;
    let z;

    p5.setup = function () {
        elementWidth = document.getElementById('canvas5').clientWidth;
        elementHeight = document.getElementById('canvas5').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);

        p5.background('lightgrey');
        z = p5.random(255);
    }

    p5.draw = function () {
        x = p5.map(p5.mouseX, 0, p5.width, 0, 255);
        y = p5.map(p5.mouseY, 0, p5.height, 0, 255);

        p5.background(x, y, z);
    }
}

new p5(opdracht_1, 'canvas1');
new p5(opdracht_2, 'canvas2');
new p5(opdracht_3, 'canvas3');
new p5(opdracht_4, 'canvas4');
new p5(opdracht_5, 'canvas5');
