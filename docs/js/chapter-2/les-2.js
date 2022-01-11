let elementWidth;
let elementHeight;

const opdracht_1 = function (p5) {
    let x, y;
    let diameter;

    p5.setup = function () {
        elementWidth = document.getElementById('canvas1').clientWidth;
        elementHeight = document.getElementById('canvas1').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);

        p5.ellipseMode(p5.CENTER);
        p5.noStroke();

        x = p5.width/2;
        y = p5.height/2;
        diameter = 40;
    }

    p5.draw = function () {
        p5.background('lightgrey');

        if (p5.mouseX >= 0 && p5.mouseX <= p5.width && p5.mouseY >= 0 && p5.mouseY <= p5.height) {
            let d = p5.dist(p5.mouseX, p5.mouseY, x, y);
            if (d < diameter/2) {
                p5.fill('#6497B1');
            } else {
                p5.fill('#B3CDE0');
            }

            x = p5.mouseX;
            y = p5.mouseY;

            p5.ellipse(x, y, diameter, diameter);
        }
    }
}

const opdracht_2 =  function (p5) {
    let r, g, b;
    let d;
    const radius = 60;

    let x;
    let y;

    let start;

    p5.setup = function () {
        elementWidth = document.getElementById('canvas2').clientWidth;
        elementHeight = document.getElementById('canvas2').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);

        start = true;

        p5.background('lightgray');

        p5.strokeWeight(20);
        p5.smooth();

        x = p5.width/2;
        y = p5.height/2;

        r = 100;
        g = 151;
        b = 177;

    }

    p5.draw = function () {
        p5.stroke(r, g, b);
        p5.fill(r, g, b);

        if (start === false) {
            p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
        }

        d = p5.dist(p5.mouseX, p5.mouseY, x, y);

        if (p5.mouseIsPressed){
            if (d < radius) {
                if (start === true) {
                    start = false;
                } else {
                    r = p5.random(0, 255);
                    g = p5.random(0, 255);
                    b = p5.random(0, 255);
                }
            }
        }

        p5.ellipse(x, y, radius, radius);
    }
}

const opdracht_3 = function (p5) {
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

    let i; // General variable for loops and other recursive elements
    let j; // Second venerable for loops and other recursive elements

    let pressed; // Variable for id of pressed button
    let current; // The id of the current code place

    let output; // The output text for the lock

    let colorsArray; // Variable for all the lamp colors

    let color1Array; // Variable for lamp 1 color
    let color2Array; // Variable for lamp 2 color
    let color3Array; // Variable for lamp 3 color

    let inputArray; // Variable for the user inputs
    let inputReady; // Variable for boolean to check user inputs
    let realInputArray;

    let yellowArray; // Variable for RGB values default lamp color
    let redArray; // Value for the red lamp color
    let whiteArray; // Value for the white lamp color

    let two; // Value for the correct pressed switches
    let one; // Value for the semi correct pressed switches
    let zero; // value for the wrong pressed switches

    let wins;
    let losses;
    let tries;

    // Function for creating light switches
    // Arguments x, y for the coordinates and id for text in the switch
    function createLightSwitch(x, y, id) {
        p5.strokeWeight(5); // Set stroke thickness to 5
        p5.stroke(102, 153, 255); // Set stroke color
        p5.fill(77, 77, 77); // Set fill color
        if (id === 'Opnieuw spelen') {
            buttons.push([id, x, y, 5 * size]); // Push id and coordinates with size to the buttons list
            p5.rect(x, y, 5 * size, size); // Create rectangle on (x,y) with size
            p5.noStroke(); // Remove the stroke
            p5.fill(102, 153, 255); // Set fill color
            p5.textSize(25);
            p5.text(id, x + 2.5 * size, y + 0.7 * size);
        } else if (id === 'remove again') {
            buttons.pop();
            p5.stroke('lightgrey');
            p5.fill('lightgrey'); // Set fill color
            p5.rect(x, y, 5 * size, size); // Create rectangle on (x,y) with size
        } else {
            buttons.push([id, x, y, size]); // Push id and coordinates with size to the buttons list
            p5.rect(x, y, size, size); // Create rectangle on (x,y) with size
            p5.noStroke(); // Remove the stroke
            p5.fill(102, 153, 255); // Set fill color
            if (id === '*') { // Check if the id is a star
                p5.textSize(50); // Large text size for the small * <- star
                p5.text(id, x + 0.5 * size, y + 1.2 * size); // Create text, in the middle of the rectangle
            } else { // Check if the id is something other than a star
                p5.textSize(32); // Small text size for the already larger icons
                p5.text(id, x + 0.5 * size, y + 0.8 * size); // Create text, in the middle of the rectangle
            }
        }
    }

// Function for generating new random codes
// Arguments for length and if you want duplicates or not
    function generateCode(length, duplicate) {
        code = []; // Create new empty list
        if (duplicate === true) { // If user wants duplicates
            for (let i = 0; i < length; i++) { // Repeat until code is correct length
                number = p5.int(p5.random(0, 10)); // Generate a random number between 0, and 10
                number = number.toString(); // Convert int to string
                code.push(number); // Add to the list
            }
            return code; // Return the code
        } else { // If user doesn't want duplicates
            if (length > 10) { // If asked length is bigger than 10 return that it is not possible
                // Catch and return the error before it happens
                return 'Code generation not possible, only codes with length 10 or less are allowed with duplicate enabled.'
            } else { // If asked length is less 10 or less
                for (let i = 0; i < length; i++) { // Repeat until code is correct length
                    number = p5.int(p5.random(0, 10)); // Generate new random number
                    number = number.toString(); // Convert int to string
                    while (code.includes(number)) { // If number is a duplicate repeat until it's not
                        number = p5.int(p5.random(0, 10)); // Generate new random number
                        number = number.toString(); // Convert int to string
                    }
                    code.push(number); // Add number to code
                }
                return code; // Return the code
            }
        }
    }

// Function for checking if the mouse is hovering a lightSwitch yes or no
// Arguments mouseX and mouseY, reads from the already defined buttons array
    function checkButton(mouseX, mouseY) {
        for (i = 0; i in buttons; i++) { // Repeats code for all elements in buttons
            if (mouseX >= buttons[i][1] && mouseX <= buttons[i][1] + buttons[i][3] // Check if the mouseX is in the button box
                && mouseY >= buttons[i][2] && mouseY <= buttons[i][2] + buttons[i][3]) { // Check if the mouseY is in the button box
                console.log('Pressed the ' + buttons[i][0] + ' button'); // Console log which button is pressed
                return buttons[i][0]; // Return the id of the button box
            }
        }
        console.log('Did not press a button'); // Console log that no button is pressed
        return null; // Return that user did not press any button
    }

// This function activates if the mouse is pressed
    p5.mousePressed = function () {
        if (!(p5.mouseX >= 0 && p5.mouseX <= p5.width && p5.mouseY >= 0 && p5.mouseY <= p5.height)) {
            return;
        }

        pressed = checkButton(p5.mouseX, p5.mouseY); // Check if a button is pressed and store that result
        if (pressed === '#') {
            if (inputArray.length < 3) {
                console.log('Je moet wel drie getallen invoeren');
                output = 'Not ready';
                return;
            } else {
                inputReady = true;
                return;
            }
        } else if (pressed === '*') {
            if (inputArray.length <= 0) {
                console.log("Vul eerst een getal in");
                output = 'Not possible';
                return;
            } else {
                current--;
                inputArray.pop();
                realInputArray.pop();
                return;
            }
        } else if (pressed === "Opnieuw spelen") {
            //console.log('begin maar');
            current = 0;
            code = generateCode(3, false);
            inputArray = [];
            output = realInputArray = [];
            zero = 0;
            one = 0;
            two = 0;
            colorsArray = [yellowArray, yellowArray, yellowArray];
            color1Array = colorsArray[0];
            color2Array = colorsArray[1];
            color3Array = colorsArray[2];
            createLightSwitch(10, 10, 'remove again');
            return;
        }


        if (current >= 3) { // If all the numbers are already cracked
            console.log("Al gehaald of al drie nummers ingetypt"); // Write output in the console because the code is cracked
            return; // Stop the function
        }

        if (pressed === null) { // If the result is that no button is pressed
            console.log(output); // Write output in the console
            return; // Stop the function
        } else if (pressed === code[current]) { // Check if the result is the current yet to solve number
            current++; // Update the current yet to solve number
            if (current >= 3) { // If all the numbers have been cracked
                console.log(output); // Write output in the console because the code is cracked
            } else { // If there are still numbers in the code to be cracked
                console.log(output); // Write output in the console
            }
            inputArray.push(2); // Save in the array that the user pressed a correct switch
            console.log(inputArray);
            realInputArray.push(pressed);
            return; // Stop the function
        } else if (code.includes(pressed)) { // Check if te number is in the code
            current++; // Update the current yet to solve number
            console.log(output); // Write output in the console
            inputArray.push(1); // Save in the array that the user pressed a semi correct switch
            console.log(inputArray);
            realInputArray.push(pressed);
            return; // Stop the function
        } else { // If the pressed number is not the current yet to solve number and is not in the code
            current++; // Update the current yet to solve number
            console.log(output); // Write nah in the console
            inputArray.push(0); // Save in the array that the user pressed a wrong switch
            console.log(inputArray);
            realInputArray.push(pressed);
            return; // Stop the function
        }
    }

    // This function runs one time and sets up the canvas and its background
    p5.setup = function () {
        // Following two lines for the responsive web design
        elementWidth = document.getElementById('canvas1').clientWidth;
        elementHeight = document.getElementById('canvas1').clientHeight;
        p5.createCanvas(elementWidth, elementHeight);

        p5.background('lightgrey'); // Choose background color for said canvas

        size = 40; // Define size of the game elements
        spacing = 40; // Define the space between the elements

        yellowArray = [255, 255, 128]; // Set the value for the default lamp color
        redArray = [128, 1, 1]; // Red lamp value
        whiteArray = [240, 240, 240]; // White lamp value

        two = 0;
        one = 0;
        zero = 0;

        wins = 0;
        losses = 0;
        tries = 0;

        realInputArray = [];

        output = 'Click a button'; // Set the standard for the output value

        p5.textSize(32); // Standard text size
        p5.textAlign(p5.CENTER); // Align text to center

        code = generateCode(3, false); // Run the generateCode function with said arguments
        console.log('Code: %o', code); // Write the code to the console

        colorsArray = [yellowArray, yellowArray, yellowArray]; // Set default lamp color

        color1Array = colorsArray[0]; // Make lamp color yellow
        color2Array = colorsArray[1]; // Make lamp color yellow
        color3Array = colorsArray[2]; // Make lamp color yellow

        buttons = []; // Define new empty list for light switches

        current = 0; // Set the current yet to solve id of the code to zero
        inputArray = []; // Define new empty list for user inputs
        inputReady = false;

        p5.fill(115, 115, 115); // Set the fill color
        p5.stroke('darkgrey'); // Set the stroke color
        breedte = 3 * size + 4 * spacing; // Automatic define value for the width of the lock
        hoogte = 4 * size + 5 * spacing; // Automatic define value for the height of the lock
        x = p5.width/2 - 0.5 * breedte; // X position for background of the lock
        y = p5.height/2 - 0.6 * hoogte; // Y position for background of the lock
        p5.rect(x, y, breedte, hoogte + 2 * spacing, 10); // Create rectangle for background of the lock

        breedte = 3 * size + 2 * spacing; // New automatic defined slightly smaller width
        hoogte = 4 * size + 3 * spacing; // New automatic defined slightly smaller height
        x = p5.width/2 - 0.5 * breedte; // X position for light switch
        y = p5.height/2 - 0.6 * breedte; // Y position for light switch
        createLightSwitch(x, y, '1'); // Create the light on (x,y) with given id

        x += size + spacing; // X position for light switch
        createLightSwitch(x, y, '2'); // Create the light on (x,y) with given id

        x += size + spacing; // X position for light switch
        createLightSwitch(x, y, '3'); // Create the light on (x,y) with given id

        x = p5.width/2 - 0.5 * breedte; // X position for light switch
        y += size + spacing; // Y position for light switch
        createLightSwitch(x, y, '4'); // Create the light on (x,y) with given id

        x += size + spacing; // X position for light switch
        createLightSwitch(x, y, '5'); // Create the light on (x,y) with given id

        x += size + spacing; // X position for light switch
        createLightSwitch(x, y, '6'); // Create the light on (x,y) with given id

        x = p5.width/2 - 0.5 * breedte; // X position for light switch
        y += size + spacing; // Y position for light switch
        createLightSwitch(x, y, '7'); // Create the light on (x,y) with given id

        x += size + spacing; // X position for light switch
        createLightSwitch(x, y, '8'); // Create the light on (x,y) with given id

        x += size + spacing; // X position for light switch
        createLightSwitch(x, y, '9'); // Create the light on (x,y) with given id

        x = p5.width/2 - 0.5 * breedte; // X position for light switch
        y += size + spacing; // Y position for light switch
        createLightSwitch(x, y, '*'); // Create the light on (x,y) with given id

        x += size + spacing; // X position for light switch
        createLightSwitch(x, y, '0'); // Create the light on (x,y) with given id

        x += size + spacing; // X position for light switch
        createLightSwitch(x, y, '#') // Create the light on (x,y) with given id

        console.log('buttons: %o', buttons); // Console log the array of the buttons
    }

// This function repeats indefinitely
    p5.draw = function () {
        p5.strokeWeight(3); // Set stroke thickness to 3
        breedte = 3 * size + 2 * spacing; // Define value for the width of the imaginary box around the lights

        // If user pressed three switches
        if (inputReady === true) {
            //console.log('klaar bitches');
            tries++;
            if (tries >= 8) {
                colorsArray = [redArray, redArray, redArray];
            } else {
                inputArray.forEach(function (item) {
                    switch (item) {
                        case 0:
                            zero++;
                            break;
                        case 1:
                            one++;
                            break;
                        case 2:
                            two++;
                            break;
                    }
                });
                i = 0;
                while (i < 3) {
                    for (j = 0; j < two; j++) {
                        colorsArray[i] = redArray;
                        i++;
                    }
                    for (j = 0; j < one; j++) {
                        colorsArray[i] = whiteArray;
                        i++;
                    }
                    for (j = 0; j < zero; j++) {
                        colorsArray[i] = yellowArray;
                        i++;
                    }
                }
            }
            zero = 0;
            one = 0;
            two = 0;
            inputArray = [];
            current = 0;
            inputReady = false;
            realInputArray = [];
        }

        if (realInputArray !== []) {
            output = realInputArray;
        }

        if (colorsArray[2] === redArray) {
            current = 69;
            if (tries >= 8) {
                output = "Gefaald!";
                losses++
            } else {
                output = "Gehaald!";
                wins++
            }
            if (current === 69) {
                createLightSwitch(10, 10, 'Opnieuw spelen');
                inputReady = false;
                current++;
            }
        }

        color1Array = colorsArray[0];
        color2Array = colorsArray[1];
        color3Array = colorsArray[2];

        p5.fill(color1Array[0], color1Array[1], color1Array[2]); // Set fill color
        p5.stroke(color1Array[0] * 1/2, color1Array[1] * 1/2, color1Array[2] * 1/2); // Set stroke color
        x = p5.width/2 - 0.3 * breedte; // X position for the light
        y = p5.height/2 - 0.6 * breedte; // Y position for the light
        p5.ellipse(x, y - size, size - 15, size - 15); // Create the first light

        p5.fill(color2Array[0], color2Array[1], color2Array[2]); // Set fill color
        p5.stroke(color2Array[0] * 1/2, color2Array[1] * 1/2, color2Array[2] * 1/2); // Set stroke color
        x = p5.width/2; // X position for the light
        p5.ellipse(x, y - size, size - 15, size - 15); // Create the second light

        p5.fill(color3Array[0], color3Array[1], color3Array[2]); // Set fill color
        p5.stroke(color3Array[0] * 1/2, color3Array[1] * 1/2, color3Array[2] * 1/2); // Set stroke color
        x = p5.width/2 + 0.3 * breedte; // X position for the light
        p5.ellipse(x, y - size, size - 15, size - 15); // Create the third light

        p5.fill(77, 77, 77); // Set fill color

        p5.noStroke(); // Remove stroke
        x = p5.width/2 - 0.5 * breedte - 4; // X position for the text box under the light switches
        y = p5.height/2 + 0.4 * hoogte + 1.5 * spacing; // Y position for the text box under the light switches
        p5.rect(x, y, breedte + 8, 40); // Create the box for the text

        p5.textSize(32); // Small text size
        p5.fill(whiteArray[0], whiteArray[1], whiteArray[2]); // Set the fill color
        p5.text(output, x + 2.5 * size, y + 0.8 * size); // Create text
    }

}

new p5(opdracht_1, 'canvas1');
new p5(opdracht_2, 'canvas2');
new p5(opdracht_3, 'canvas3');