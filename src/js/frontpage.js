let elementWidth;
let elementHeight;

const canvas_landing = function (p5) {

    let width;
    let height;
    let columns;
    let rows;
    let board;
    let next;
    let status;
    let textList;
    let backgroundColor;

    p5.setup = function () {
        elementWidth = document.getElementById('landing').clientWidth;
        elementHeight = document.getElementById('landing').clientHeight;

        p5.createCanvas(elementWidth - 10, elementHeight);
        backgroundColor = 'lightgrey';

        width = p5.width / 37;
        height = p5.height / 7;

        status = false;

        columns = p5.floor(p5.width / width);
        rows = p5.floor(p5.height / height);
        board = new Array(columns);
        for (let i = 0; i < columns; i++) {
            board[i] = new Array(rows);
        }
        next = new Array(columns);
        for (i = 0; i < columns; i++) {
            next[i] = new Array(rows);
        }
        createBoard();
    }

    p5.draw = function() {
        p5.background(backgroundColor);
        if (status === true) {
            generate();
        }
        for ( let i = 0; i < columns;i++) {
            for ( let j = 0; j < rows;j++) {
                if ((board[i][j] == 1)) p5.fill('#6497B1');
                else p5.fill(backgroundColor);
                p5.noStroke();
                p5.rect(i * width, j * height, width-1, height-1);
            }
        }
    }

    p5.mousePressed = function () {
        if (p5.mouseX >= 0 && p5.mouseX <= p5.width && p5.mouseY >= 0 && p5.mouseY <= p5.height) {
            if (status === false) {
                status = true;
            } else {
                status = false;
            }
        }
    }

    function createBoard() {
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                board[i][j] = 0;
            }
        }

        textList = [
            [2, 2], [2, 3], [2, 4], [2, 5], [3, 6], [4, 4], [4, 5], [5, 6], [6, 2], [6, 3], [6, 4], [6, 5],
            [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [9, 2], [9, 4], [9, 6], [10, 2], [10, 4], [10, 6], [11, 2], [11, 6],
            [13, 2], [13, 3], [13, 4], [13, 5], [13, 6], [14, 6], [15, 6],
            [17, 3], [17, 4], [17, 5], [18, 2], [18, 6], [19, 2], [19, 6], [20, 2], [20, 6],
            [22, 3], [22, 4], [22, 5], [23, 2], [23, 6], [24, 2], [24, 6], [25, 3], [25, 4], [25, 5],
            [27, 3], [27, 4], [27, 5], [27, 6], [28, 2], [29, 3], [29, 4], [30, 2], [31, 3], [31, 4], [31, 5], [31, 6],
            [33, 2], [33, 3], [33, 4], [33, 5], [33, 6], [34, 2], [34, 4], [34, 6], [35, 2], [35, 4], [35, 6], [36, 2], [36, 6],
        ];
        textList.forEach(function (i) {
            board[i[0]-1][i[1] - 1] = 1;
        })
    }

    function generate() {

        for (let x = 1; x < columns - 1; x++) {
            for (let y = 1; y < rows - 1; y++) {
                let neighbors = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        neighbors += board[x+i][y+j];
                    }
                }

                neighbors -= board[x][y];
                if ((board[x][y] === 1) && (neighbors <  2)) {
                    next[x][y] = 0;
                } else if ((board[x][y] === 1) && (neighbors >  3)) {
                    next[x][y] = 0;
                } else if ((board[x][y] === 0) && (neighbors === 3)) {
                    next[x][y] = 1;
                } else {
                    next[x][y] = board[x][y];
                }
            }
        }

        let temp = board;
        board = next;
        next = temp;
    }

}

new p5(canvas_landing, 'landing')