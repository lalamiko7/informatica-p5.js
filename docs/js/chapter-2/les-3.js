let elementWidth;
let elementHeight;

const opdracht_1 = function (p5) {
    let x, y;
    let diameter;
    let color;

    p5.setup = function () {
        elementWidth = document.getElementById('canvas1').clientWidth;
        elementHeight = document.getElementById('canvas1').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);

        p5.ellipseMode(p5.CENTER);

        p5.background('lightgray');

        p5.smooth();
        p5.noStroke();

        diameter = 20;

        color = p5.color('#6497B1');
    }

    p5.draw = function () {
        if (p5.mouseX >= 0 && p5.mouseX <= p5.width && p5.mouseY >= 0 && p5.mouseY <= p5.height) {
            p5.fill(color);
            if (p5.mouseIsPressed) {
                p5.circle(p5.mouseX, p5.mouseY, diameter);
            }

            if (p5.keyIsPressed) {
                switch (p5.key) {
                    case '1':
                        diameter = 20;
                        break;
                    case '2':
                        diameter = 25;
                        break;
                    case '3':
                        diameter = 30;
                        break;
                    case '4':
                        diameter = 35;
                        break;
                    case '5':
                        diameter = 40;
                        break;
                    case '6':
                        diameter = 45;
                        break;
                    case '7':
                        diameter = 50;
                        break;
                    case '8':
                        diameter = 55;
                        break;
                    case '9':
                        diameter = 60;
                        break;
                    case 'r':
                        color = p5.color('#800000');
                        break;
                    case 'g':
                        color = p5.color('green');
                        break;
                    case 'b':
                        color = p5.color('#6497B1');
                        break;
                }
            }
        }
    }
}

new p5(opdracht_1, 'canvas1');