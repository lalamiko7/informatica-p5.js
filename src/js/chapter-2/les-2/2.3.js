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

// Function for creating light switches
// Arguments x, y for the coordinates and id for text in the switch
function createLightSwitch(x, y, id) {
    buttons.push([id, x, y, size]); // Push id and coordinates with size to buttons list

    strokeWeight(5); // Set stroke thickness to 5
    stroke(102, 153, 255); // Set stroke color
    fill(77, 77, 77); // Set fill color
    rect(x, y, size, size); // Create rectangle on (x,y) with size
    noStroke(); // Remove the stroke
    fill(102, 153, 255); // Set fill color
    if (id === '*') {
        textSize(50); // Large text size for small *
        text(id, x + 0.5 * size, y + 1.2 * size); // Create text, in the middle of the rectangle
    } else {
        textSize(32); // Small text for larger icons
        text(id, x + 0.5 * size, y + 0.8 * size); // Create text, in the middle of the rectangle
    }
}

// Function for generating new random codes
// Arguments for length and if you want duplicates or not
function generateCode(length, duplicate) {
    code = []; // Create new empty list
    if (duplicate === true) { // If user wants duplicates
        for (let i = 0; i < length; i++) { // Repeat until code is correct length
            number = int(random(0, 10)); // Generate a random number between 0, and 10
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
                while (code.includes(number)) { // If number is a duplicate repeat until it's not
                    number = int(random(0, 10)); // Generate new random number
                }
                code.push(number); // Add number to code
            }
            return code; // Return the code
        }
    }
}

// Function for checking if the mouse is hovering a lightSwitch yes or no
// Arguments mouseX and mouseY, reads from buttons array
function checkButton(mouseX, mouseY) {

}

// Function activates if the mouse is pressed
function mousePressed() {
    if (checkButton(mouseX, mouseY)) {

    }
}

// Run this function one time
function setup() {
    createCanvas(1425, 770); // Create new canvas
    background('lightgrey'); // Choose background color for said canvas

    size = 40; // Define size of the game elements
    spacing = 40; // Define the space between the elements

    textSize(32); // Standard text size
    textAlign(CENTER); // Align text to center

    code = generateCode(3, false); // Run the generateCode function with said arguments
    console.log(code); // Write the code to the console

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

    fill(77, 77, 77); // Set fill color

    noStroke(); // Remove stroke
    x = width/2 - 0.5 * breedte - 4; // X position for the text box under the light switches
    y = height/2 + 0.5 * hoogte + 1.5 * spacing; // Y position for the text box under the light switches
    rect(x, y, breedte + 8, 40); // Create the box for the text

    console.log(buttons); // Console log the array of the buttons
}

// This function repeats indefinitely
function draw() {
    strokeWeight(3); // Set stroke thickness to 3
    stroke(255, 230, 100); // Set stroke color
    fill(255, 255, 128); // Set fill color
    breedte = 3 * size + 2 * spacing; // Define value for the width of the imaginary box around the lights

    x = width/2; // X position for the light
    y = height/2 - 0.5 * breedte; // Y position for the light
    ellipse(x, y - size, size - 15, size - 15); // Create the first light

    x = width/2 - 0.3 * breedte; // X position for the light
    ellipse(x, y - size, size - 15, size - 15); // Create the second light
    x = width/2 + 0.3 * breedte; // X position for the light
    ellipse(x, y - size, size - 15, size - 15); // Create the third light
}
