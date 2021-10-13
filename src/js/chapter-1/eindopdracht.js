// Definieer variabel voor de grote van album
let album_size;
let seed;

function setup() {
    createCanvas(1425, 770);

    // Geef variabel een waarde
    album_size = 600;
}

function draw() {
    // Maak nulpunt het midden
    translate(width / 2, height / 2);

    fill('lightgrey');
    rect(- album_size / 2, - album_size / 2, album_size, album_size);

    fill('black');
    rect((album_size / 2) - ((album_size / 2) * 0.45), (album_size / 2) - ((album_size / 2) * 0.35), (album_size / 2) * 0.4, (album_size / 2) * 0.3);
    fill('white');
    textSize(100);
    text('PARENTAL', 0, 0);

}