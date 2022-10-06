var backgroundImage;
var gameState= "start"
var font
var startImage
var penguin1 
var penguin2
var form

function preload() {
  backgroundImage= loadImage("images/background.jpg");
  font= loadFont("farenheight-font/font.ttf");
  startImage = loadImage("images/startImage.jpg");
  penguin1Image = loadImage("images/penguin1.jpg");
  penguin2Image = loadImage("images/penguin2.jpg");
  penguin3Image = loadImage("images/penguin3.jpg");
  penguin4Image = loadImage("images/penguin4.jpg");
}

function setup() {
  createCanvas(400,400);
  form = new Form();
}

function draw() {
  background(backgroundImage);
  form.display();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}