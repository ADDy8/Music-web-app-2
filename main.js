music = "";
music2 = "";

function preload() {
   music = loadSound('music.mp3');
   music2 = loadSound('music2.mp3');
}

function setup() {
    canvas = createCanvas(500 , 400);
    canvas.position(500 , 310);
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function draw() {
    image(webcam , 0 , 0 , 600 , 500);
}