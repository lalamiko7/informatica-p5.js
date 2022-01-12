window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
    }
});

let elementWidth;
let elementHeight;

const canvas =  function (p5) {
    let x;
    let y;

    let start;

    let buttons;
    let pressed;

    let size;

    let xSpacing;

    let colorList;

    let brush;
    let thickness;
    let lineColor;
    let button;

    let eraser;

    function mouseInCanvas() {
        return p5.mouseX >= 0 && p5.mouseX <= p5.width && p5.mouseY >= 0 && p5.mouseY <= p5.height;
    }

    function createButton(x, y, id, color, setup) {
        if (setup === true) {
            buttons.push([id, x, y, size, color]);
            //console.log(buttons);
        }

        p5.strokeWeight(5);
        p5.stroke('#B3CDE0');
        p5.fill(color);
        p5.ellipse(x, y, size, size);
    }

    function checkButton(mouseX, mouseY) {
        console.log(buttons);
        button = [];
        for (let i = 0; i in buttons; i++) {
            let bX = buttons[i][1];
            let bY = buttons[i][2];
            let bSize = buttons[i][3];
            //console.log(p5.dist(mouseX, mouseY, bX, bY), bSize);
            if (p5.dist(bX, bY, mouseX, mouseY) <= bSize / 2) {
                button.push(buttons[i][0]);
                button.push(buttons[i][1]);
                return button;
            }
        }
        //console.log('Did not press a button'); // Console log that no button is pressed
        return null; // Return that user did not press any button
    }

    p5.setup = function () {
        elementWidth = document.getElementById('canvas').clientWidth;
        elementHeight = document.getElementById('canvas').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);

        start = true;
        buttons = [];
        pressed = null;

        size = 60;

        p5.background('lightgray');
        p5.smooth();

        colorList = [p5.color('#e71223'), p5.color('#f6630d'), p5.color('#ffc112'),
            p5.color('#65cc02'), p5.color('#00a0d7'), p5.color('#5a2e90')];

        lineColor = p5.color(100, 151, 177);

        thickness = 5;

        eraser = 0;

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


        p5.rect(10, 1.5 * y, 10 + 2 * size, 3.5 * y);
        createButton((10 + 20 + 2 * size) / 2, y + 1.5 * size, 'brush1', 'red', true);
        createButton((10 + 20 + 2 * size) / 2, y + 2.5 * size, 'brush2', 'red', true);
        createButton((10 + 20 + 2 * size) / 2, (4 * y + 5 * y) / 2, 'eraser', 'red', true);
        createButton((10 + 20 + 2 * size) / 2, (4 * y + 5 * y) / 2, 'eraser', 'red', true);
        p5.line(10, 4 * y, 20 + 2 * size, 4 * y);
        createButton((10 + 20 + 2 * size) / 2, (4 * y + 5 * y) / 2, 'eraser', 'red', true);
        //p5.text();

        y = y/2;

        for (let i = 0; i < 6; i++) {
            if (i <= 0) {
                createButton(x, y, "color", colorList[i], true);
            } else {
                x += xSpacing + size;
                createButton(x, y, "color", colorList[i], true);
            }
        }

        console.log(buttons);
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
                    break;
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


        p5.rect(10, 1.5 * y, 10 + 2 * size, 3.5 * y);
        createButton((10 + 20 + 2 * size) / 2, y + 1.5 * size, 'brush1', 'red');
        createButton((10 + 20 + 2 * size) / 2, y + 2.5 * size, 'brush2', 'red');
        createButton((10 + 20 + 2 * size) / 2, (4 * y + 5 * y) / 2, 'eraser', 'red');
        createButton((10 + 20 + 2 * size) / 2, (4 * y + 5 * y) / 2, 'eraser', 'red');
        p5.line(10, 4 * y, 20 + 2 * size, 4 * y);
        createButton((10 + 20 + 2 * size) / 2, (4 * y + 5 * y) / 2, 'eraser', 'lightgrey');
        //p5.text();

        y = y/2;

        for (let i = 0; i < 6; i++) {
            if (i <= 0) {
                createButton(x, y, "color", colorList[i]);
            } else {
                x += xSpacing + size;
                createButton(x, y, "color", colorList[i]);
            }
        }

        if (p5.mouseIsPressed){
            if (mouseInCanvas()) {
                switch (brush) {
                    case 'normal':
                        p5.stroke(lineColor);
                        p5.strokeWeight(thickness);
                        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
                        break;
                    case 'dot':
                        p5.noStroke();
                        p5.fill(lineColor);
                        p5.circle(p5.mouseX, p5.mouseY, thickness);
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

    p5.mouseClicked = function () {
        if (!mouseInCanvas()) {
            return;
        }
        pressed = checkButton(p5.mouseX, p5.mouseY);
        console.log(pressed);
        if (pressed === null) {
            return;
        } else if (pressed[0] === 'color') {
            switch (pressed[1]) {
                case buttons[5][1]:
                    lineColor = colorList[0];
                    break;
                case buttons[6][1]:
                    lineColor = colorList[1];
                    break;
                case buttons[7][1]:
                    lineColor = colorList[2];
                    break;
                case buttons[8][1]:
                    lineColor = colorList[3];
                    break;
                case buttons[9][1]:
                    lineColor = colorList[4];
                    break;
                case buttons[10][1]:
                    lineColor = colorList[5];
                    break;
            }
        } else if (pressed[0] === 'eraser') {
            if (eraser === 0) {
                eraser++;
            }
            lineColor = p5.color('lightgrey');
            brush = 'normal';
        } else if (pressed[0] === 'brush1') {
            if (eraser === 1) {
                lineColor = p5.color(100, 151, 177);
                eraser--;
            }
            brush = 'normal';
        } else if (pressed[0] === 'brush2') {
            if (eraser === 1) {
                lineColor = p5.color(100, 151, 177);
                eraser--;
            }
            brush = 'dot';
        }
    }
}

new p5(canvas, 'canvas');
