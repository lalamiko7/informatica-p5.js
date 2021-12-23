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

let pressed; // Variable for id of pressed button
let current; // The id of the current code place

let output; // The output text for the lock

let windowWidth; // Variable for the width of the window
let windowHeight; // Variable for the height of the window

let yellowArray; // Variable for RGB values default lamp color
let color1Array; // Variable for lamp color
let color2Array; // Variable for lamp color
let color3Array; // Variable for lamp color

let test = 0; // Testing variable

// Function for creating light switches
// Arguments x, y for the coordinates and id for text in the switch
function createLightSwitch(x, y, id) {
    buttons.push([id, x, y, size]); // Push id and coordinates with size to the buttons list

    strokeWeight(5); // Set stroke thickness to 5
    stroke(102, 153, 255); // Set stroke color
    fill(77, 77, 77); // Set fill color
    rect(x, y, size, size); // Create rectangle on (x,y) with size
    noStroke(); // Remove the stroke
    fill(102, 153, 255); // Set fill color
    if (id === '*') { // Check if the id is a star
        textSize(50); // Large text size for the small * <- star
        text(id, x + 0.5 * size, y + 1.2 * size); // Create text, in the middle of the rectangle
    } else { // Check if the id is something other than a star
        textSize(32); // Small text size for the already larger icons
        text(id, x + 0.5 * size, y + 0.8 * size); // Create text, in the middle of the rectangle
    }
}

// Function for generating new random codes
// Arguments for length and if you want duplicates or not
function generateCode(length, duplicate) {
    current = 0; // Set the current yet to solve id of the code to zero
    code = []; // Create new empty list
    if (duplicate === true) { // If user wants duplicates
        for (let i = 0; i < length; i++) { // Repeat until code is correct length
            number = int(random(0, 10)); // Generate a random number between 0, and 10
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
                number = int(random(0, 10)); // Generate new random number
                number = number.toString(); // Convert int to string
                while (code.includes(number)) { // If number is a duplicate repeat until it's not
                    number = int(random(0, 10)); // Generate new random number
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
function mousePressed() {
    if (current >= 3) { // If all the numbers are already cracked
        output = 'already solved!'; // Set the output value to 'already done!'
        console.log('already done!'); // Write output in the console because the code is cracked
        return true; // Stop the function and return true
    }

    pressed = checkButton(mouseX, mouseY); // Check if a button is pressed and store that result
    if (pressed === null) { // If the result is that no button is pressed
        output = 'nop'; // Set the output to 'nop'
        console.log(output); // Write output in the console
        return false; // Stop the function and return false
    } else if (pressed === code[current]) { // Check if the result is the current yet to solve number
        current++; // Update the current yet to solve number
        if (current >= 3) { // If all the numbers have been cracked
            output = 'done'; // Set the output to 'done'
            console.log(output); // Write output in the console because the code is cracked
        } else { // If there are still numbers in the code to be cracked
            output = 'yes'; // Set the output to 'yes'
            console.log(output); // Write output in the console
        }
        return true; // Stop the function and return true
    } else if (code.includes(pressed)) { // Check if te number is in the code
        output = 'almost'; // Set the output to 'almost'
        console.log(output); // Write output in the console
        return false; // Stop the function and return false
    } else { // If the pressed number is not the current yet to solve number and is not in the code
        output = 'nah'; // Set the output to 'nah'
        console.log(output); // Write nah in the console
        color1Array = [128, 0, 0]; // Make lamp one red
        return false; // Stop the function and return false
    }
}

// This function runs one time and sets up the canvas and its background
function setup() {
    // Following two lines for the responsive web design
    windowWidth = window.innerWidth; // Set the width of the window
    windowHeight = window.innerHeight; // Set the height of the window

    createCanvas(windowWidth, windowHeight); // Create new canvas
    background('lightgrey'); // Choose background color for said canvas

    size = 40; // Define size of the game elements
    spacing = 40; // Define the space between the elements

    yellowArray = [255, 255, 128]; // Set the value for the default lamp color
    output = 'click a button'; // Set the standard for the output value

    textSize(32); // Standard text size
    textAlign(CENTER); // Align text to center

    code = generateCode(3, false); // Run the generateCode function with said arguments
    console.log('Code: %o', code); // Write the code to the console

    color1Array = yellowArray; // Make lamp color yellow
    color2Array = yellowArray; // Make lamp color yellow
    color3Array = yellowArray; // Make lamp color yellow

    buttons = []; // Define new empty list for light switches

    fill(115, 115, 115); // Set the fill color
    stroke('darkgrey'); // Set the stroke color
    breedte = 3 * size + 4 * spacing; // Automatic define value for the width of the lock
    hoogte = 4 * size + 5 * spacing; // Automatic define value for the height of the lock
    x = width/2 - 0.5 * breedte; // X position for background of the lock
    y = height/2 - 0.5 * hoogte; // Y position for background of the lock
    rect(x, y, breedte, hoogte + 2 * spacing, 10); // Create rectangle for background of the lock

    breedte = 3 * size + 2 * spacing; // New automatic defined slightly smaller width
    hoogte = 4 * size + 3 * spacing; // New automatic defined slightly smaller height
    x = width/2 - 0.5 * breedte; // X position for light switch
    y = height/2 - 0.5 * breedte; // Y position for light switch
    createLightSwitch(x, y, '1'); // Create the light on (x,y) with given id

    x += size + spacing; // X position for light switch
    createLightSwitch(x, y, '2'); // Create the light on (x,y) with given id

    x += size + spacing; // X position for light switch
    createLightSwitch(x, y, '3'); // Create the light on (x,y) with given id

    x = width/2 - 0.5 * breedte; // X position for light switch
    y += size + spacing; // Y position for light switch
    createLightSwitch(x, y, '4'); // Create the light on (x,y) with given id

    x += size + spacing; // X position for light switch
    createLightSwitch(x, y, '5'); // Create the light on (x,y) with given id

    x += size + spacing; // X position for light switch
    createLightSwitch(x, y, '6'); // Create the light on (x,y) with given id

    x = width/2 - 0.5 * breedte; // X position for light switch
    y += size + spacing; // Y position for light switch
    createLightSwitch(x, y, '7'); // Create the light on (x,y) with given id

    x += size + spacing; // X position for light switch
    createLightSwitch(x, y, '8'); // Create the light on (x,y) with given id

    x += size + spacing; // X position for light switch
    createLightSwitch(x, y, '9'); // Create the light on (x,y) with given id

    x = width/2 - 0.5 * breedte; // X position for light switch
    y += size + spacing; // Y position for light switch
    createLightSwitch(x, y, '*'); // Create the light on (x,y) with given id

    x += size + spacing; // X position for light switch
    createLightSwitch(x, y, '0'); // Create the light on (x,y) with given id

    x += size + spacing; // X position for light switch
    createLightSwitch(x, y, '#') // Create the light on (x,y) with given id

    console.log('buttons: %o', buttons); // Console log the array of the buttons
}

// This function repeats indefinitely
function draw() {
    strokeWeight(3); // Set stroke thickness to 3
    breedte = 3 * size + 2 * spacing; // Define value for the width of the imaginary box around the lights

    fill(color1Array[0], color1Array[1], color1Array[2]); // Set fill color
    stroke(color1Array[0] * 0.5, color1Array[1] * 0.5, color1Array[2] * 0.5); // Set stroke color
    x = width/2 - 0.3 * breedte; // X position for the light
    y = height/2 - 0.5 * breedte; // Y position for the light
    ellipse(x, y - size, size - 15, size - 15); // Create the first light

    fill(color2Array[0], color2Array[1], color2Array[2]); // Set fill color
    stroke(color2Array[0] * 1/2, color2Array[1] * 1/2, color2Array[2] * 1/2); // Set stroke color
    x = width/2; // X position for the light
    ellipse(x, y - size, size - 15, size - 15); // Create the second light

    fill(color2Array[0], color2Array[1], color2Array[2]); // Set fill color
    stroke(color2Array[0] * 1/2, color2Array[1] * 1/2, color2Array[2] * 1/2); // Set stroke color
    x = width/2 + 0.3 * breedte; // X position for the light
    ellipse(x, y - size, size - 15, size - 15); // Create the third light

    fill(77, 77, 77); // Set fill color

    noStroke(); // Remove stroke
    x = width/2 - 0.5 * breedte - 4; // X position for the text box under the light switches
    y = height/2 + 0.5 * hoogte + 1.5 * spacing; // Y position for the text box under the light switches
    rect(x, y, breedte + 8, 40); // Create the box for the text

    textSize(32); // Small text size
    fill('red'); // Set the fill color to red
    text(output, x + 2.5 * size, y + 0.8 * size); // Create text
}
