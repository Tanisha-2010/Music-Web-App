song_garmi = "";
song_kesariya = "";

function setup() {
    canvas = createCanvas(550, 430);
    canvas.position(550, 250);
    ///canvas.center();
    video = createCapture(550, 430);
    video.hide();
}

function preload() {
    song_garmi = loadSound("Garmi.mp3");
    song_kesariya = loadSound("Kesariya.mp3");
}

function draw() {
    image(video, 0, 0, 550, 430);
}