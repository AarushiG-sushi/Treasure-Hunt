var bg
var player
var ghost

function preload() {
bg = loadImage("/images/haunted_house1.jpg")
}

function setup() {
createCanvas(1000,1000);
}

function draw() {
background(55);
image(bg);
}