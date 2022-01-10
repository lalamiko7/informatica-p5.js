window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
    }
});

let elementWidth;
let elementHeight;

const canvas =  function (p5) {
    let r, g, b;
    let d;

    let x;
    let y;

    let start;

    let buttons;

    let size;

    let xSpacing;

    let colorList;

    let brush;
    let thickness;
    let lineColor;

    function mouseInCanvas() {
        return p5.mouseX >= 0 && p5.mouseX <= p5.width && p5.mouseY >= 1.5 * size && p5.mouseY <= p5.height;
    }

    function createButton(x, y, id, color) {
        buttons.push([id, x, y, size, color]);

        p5.strokeWeight(5);
        p5.stroke('#B3CDE0');
        p5.fill(color);
        //p5.noStroke();
        p5.circle(x, y, size)
    }

    p5.setup = function () {
        elementWidth = document.getElementById('canvas').clientWidth;
        elementHeight = document.getElementById('canvas').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);

        start = true;
        buttons = [];

        size = 60;

        p5.background('lightgray');
        p5.smooth();

        colorList = [p5.color('#e71223'), p5.color('#f6630d'), p5.color('#ffc112'),
            p5.color('#65cc02'), p5.color('#00a0d7'), p5.color('#5a2e90')];


        lineColor = p5.color(100, 151, 177);

        thickness = 5;
    }

    p5.draw = function () {
        if (p5.keyIsPressed) {
            switch (p5.key) {
                case ' ':
                    p5.background('lightgrey');
                    break;
                case '1':
                    thickness = 5;
                    break;
                case '2':
                    thickness = 7.5;
                    break;
                case '3':
                    thickness = 10;
                    break;
                case '4':
                    thickness = 12.5;
                    break;
                case '5':
                    thickness = 15;
                    break;
                case '6':
                    thickness = 20;
                    break;
                case '7':
                    thickness = 25;
                    break;
                case '8':
                    thickness = 30;
                    break;
                case '9':
                    thickness = 40;
                    break;
                case 's':
                    lineColor = p5.color(p5.random(0, 255), p5.random(0, 255), p5.random(0, 255));
            }
        }

        p5.noStroke();
        p5.fill('#6497B1');
        p5.rect(0, 0, p5.width, 1.5 * size);

        xSpacing = (p5.width - 6 * size) / 7;
        x = xSpacing + 0.5 * size;
        y = 1.5 * size

        p5.strokeWeight(5);
        p5.stroke('#B3CDE0');
        p5.line(0, y, p5.width, y);
        p5.line(0, p5.height - 2.5, p5.width, p5.height - 2.5);

        p5.line(0, 2 * y, 2 * size, 2 * y);

        y = y/2;

        for (let i = 0; i < 6; i++) {
            if (i <= 0) {
                createButton(x, y, "Yellow", colorList[i]);
            } else {
                x += xSpacing + size;
                createButton(x, y, "Yellow", colorList[i]);
            }
        }

        p5.stroke(r, g, b);
        p5.fill(r, g, b);

        d = p5.dist(p5.mouseX, p5.mouseY, x, y);

        if (p5.mouseIsPressed){
            if (mouseInCanvas()) {
                switch (brush) {
                    case 'normal':
                        p5.strokeWeight(thickness);
                        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
                        break;
                    case 'dot':
                        break;
                    default:
                        p5.stroke(lineColor);
                        p5.strokeWeight(thickness);
                        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
                        break;
                }
            }
        }
    }
}


new p5(canvas, 'canvas');