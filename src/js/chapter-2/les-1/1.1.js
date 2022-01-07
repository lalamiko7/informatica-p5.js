const canvas1 = function (p5js) {
    p5js.setup = function () {
        p5js.createCanvas(100, 100);
        p5js.background("red");
    }

    p5js.draw = function () {
        p5js.fill('blue');
        p5js.rect(0, 0, 50, 50);
    }
}

const canvas2 = function (p5js) {
    p5js.setup = function () {
        x = 1425;
        y = 770;
        p5js.createCanvas(x, y);
    }

    p5js.draw = function () {
        //start by setting the canvas to white
        p5js.background('lightgrey');
        p5js.fill('lightgrey');
        //when the x location of my mouse is greater than 300
        //turn the background black
        if (p5js.mouseX > 300) {
            p5js.fill(100, 150, 100);
        }
        if (p5js.mouseY > 60) {
            p5js.fill(100, 150, 100);
        }

        p5js.rect(0, 0, 600, 120);

        let x = 10; //set the initial size to 10


        p5js.fill(50, 100, 150); //set the initial fill to red

        if (p5js.mouseX < 200) {
            x = 60;
        }
        if (p5js.mouseY < 40) {
            p5js.fill(100, 150, 100);
        }
        if (p5js.mouseX > 590 && p5js.mouseY > 590 || p5js.mouseX > 590 && p5js.mouseY < 110) {
            p5js.ellipse(p5js.width / 2, p5js.height / 2, x, x);
        } else {
            p5js.rect(p5js.width / 2, p5js.height / 2, x, x);
        }
    }
}

new p5(canvas2);
new p5(canvas1);