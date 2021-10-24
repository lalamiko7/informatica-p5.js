// Definieer variabel voor de grote van album
let album_size;
let x;
let y;
let xr;
let yr;
let size;

function setup() {
    createCanvas(700, 700);
    background('#ED2240');

    // Geef variabel een waarde
    album_size = 300;
    
    // Maak nulpunt het midden
    translate(width / 2, height / 2);

    //de cover (waar het plaatje op komt)
    stroke('#FFCE71');
    strokeWeight(8);
    fill('lightgrey');
    rect(- album_size / 2, - album_size / 2, album_size, album_size);
  
    // Grote
    size = 20;
    x = - album_size / 2;
    y = - album_size / 2;
    yr = 0;
    xr = 0;
}

function draw() {
    // Maak nulpunt het midden
    translate(width / 2, height / 2);
    
    // Loop met random vakjes
    noStroke();
    if (yr < 15) {
        for (xr = 0; xr < 15; xr++) {
            fill(random(50), random(50), random(150));
            rect(x, y, size, size);
            x += size;
        }
        x = - album_size / 2;
        y += size;
        yr++;
        xr++
    }

    //rect(random(- album_size / 2, (album_size / 2) - 20), random(- album_size / 2, (album_size / 2) - 20), 20, 20)
    
    // parental advisory box
    noStroke();
    fill('#000000');
    rect((album_size / 2) - ((album_size / 2) * 0.45), (album_size / 2) - ((album_size / 2) * 0.35), (album_size / 2) * 0.4,  (album_size / 2) * 0.28);
    
    fill('#FFFFFF');
    rect((album_size / 2) - ((album_size / 2) * 0.45), (album_size / 2) - ((album_size / 2) * 0.27),  (album_size / 2) * 0.4,  (album_size / 2) * 0.12);
    
    // "parental" tekst
    fill('FFFFFF');
    textSize(8);
    text('PARENTAL', (album_size / 2) - ((album_size / 2) * 0.37), (album_size / 2) - ((album_size / 2) * 0.29));
    
    // "advisory" tekst
    fill('#000000');
    textSize(11);
    text('ADVISORY', (album_size / 2) - ((album_size / 2) * 0.44), (album_size / 2) - ((album_size / 2) * 0.18));
    
    // "explicit content" tekst
    fill('#FFFFFF');
    textSize(6);
    text('EXPLICIT CONTENT', (album_size / 2) - ((album_size / 2) * 0.44), (album_size / 2) - ((album_size / 2) * 0.1));
    
    //de cover (waar het plaatje op komt)
    stroke('#FFCE71');
    strokeWeight(8);
    fill(0,0,0,0);
    rect(- album_size / 2, - album_size / 2, album_size, album_size);
}