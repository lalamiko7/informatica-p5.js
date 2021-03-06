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
        color = p5.color(color);
        color.setAlpha(255);
        p5.fill(color);

        if (id === 'eraser') {
            p5.rect(x, y + 5, 2 * size + 10, 1.5 * size);
        } else if (id === 'brush1' || id === 'brush2' || id === 'brush3') {
            p5.rect(x, y + 5, 2 * size + 10, 1.2 * size);
        }else {
            p5.ellipse(x, y, size, size);
        }
    }

    function checkButton(mouseX, mouseY) {
        //console.log(buttons);
        for (let i = 0; i in buttons; i++) {
            button = [];
            let bX = buttons[i][1];
            let bY = buttons[i][2];
            let bSize = buttons[i][3];
            let dist = p5.dist(bX, bY, mouseX, mouseY);
            //console.log(p5.dist(mouseX, mouseY, bX, bY), bSize);
            button.push(buttons[i][0]);
            button.push(buttons[i][1]);
            //console.log('X:', bX, ' Y:', bY, ' Size:', bSize, ' MX:', mouseX, ' MY', mouseY);
            //console.log('Size:', dist);
            if (dist < bSize / 2) {
                if (buttons[i][0] === 'eraser' && mouseY < 6 * bSize && mouseX < 10) {
                    return null;
                } else if (buttons[i][0] === 'brush1' && (mouseY < 2.2 * bSize || mouseX < 10)) {
                    return null;
                } else if (buttons[i][0] === 'brush2' && (mouseY < 3.5 * bSize || mouseX < 10)) {
                    return null;
                } else if (buttons[i][0] === 'brush3' && (mouseY < 4.8 * bSize || mouseX < 10)) {
                    return null;
                }
                return button;
            }
            if ((buttons[i][0] === 'eraser' || buttons[i][0] === 'brush1' || buttons[i][0] === 'brush2' ||
                buttons[i][0] === 'brush3') && p5.mouseX >= bX && p5.mouseY >= bY && p5.mouseX <= bX + 2 * bSize &&
                p5.mouseY <= bY + 1.5 * bSize) {
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
        createButton(10, 2.2 * size, 'brush1', 'red', true);
        createButton(10, 3.5 * size, 'brush2', 'red', true);
        createButton(10, 4.8 * size, 'brush3', 'red', true);
        //p5.line(10, 4 * y, 20 + 2 * size, 4 * y);
        createButton(10, 6 * size, 'eraser', 'red', true);
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

        //console.log(buttons);
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
        createButton(10, 2.2 * size, 'brush1', 'red');
        createButton(10, 3.5 * size, 'brush2', 'red');
        createButton(10, 4.8 * size, 'brush3', 'red');
        //p5.line(10, 4 * y, 20 + 2 * size, 4 * y);
        createButton(10, 6 * size, 'eraser', 'lightgrey');
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
                        lineColor.setAlpha(255);
                        p5.stroke(lineColor);
                        p5.strokeWeight(thickness);
                        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
                        break;
                    case 'dot':
                        lineColor.setAlpha(255);
                        p5.noStroke();
                        p5.fill(lineColor);
                        p5.circle(p5.mouseX, p5.mouseY, thickness);
                        break;
                    case 'trans':
                        lineColor.setAlpha(100);
                        p5.stroke(lineColor);
                        p5.strokeWeight(thickness);
                        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
                        break;
                    default:
                        p5.stroke(lineColor);
                        p5.strokeWeight(thickness);
                        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
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
        if (pressed !== null) {
            if (pressed[0] === 'color') {
                switch (pressed[1]) {
                    case buttons[4][1]:
                        lineColor = colorList[0];
                        eraser = 0;
                        break;
                    case buttons[5][1]:
                        lineColor = colorList[1];
                        eraser = 0;
                        break;
                    case buttons[6][1]:
                        lineColor = colorList[2];
                        eraser = 0;
                        break;
                    case buttons[7][1]:
                        lineColor = colorList[3];
                        eraser = 0;
                        break;
                    case buttons[8][1]:
                        lineColor = colorList[4];
                        eraser = 0;
                        break;
                    case buttons[9][1]:
                        lineColor = colorList[5];
                        eraser = 0;
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
            } else if (pressed[0] === 'brush3') {
                if (eraser === 1) {
                    lineColor = p5.color(100, 151, 177);
                    eraser--;
                }
                brush = 'trans';
            }
        }
    }

    p5.mousePressed = function () {
        if (p5.mouseX >= 0 && p5.mouseX <= p5.width && p5.mouseY >= 0 && p5.mouseY <= p5.height) {
            return false;
        }
    }
}

new p5(canvas, 'canvas');
