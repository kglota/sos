let fog;
let baseLayer;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
  }
  
  

function setup() {
    createCanvas(windowWidth, windowHeight);

  baseLayer = createGraphics(width, height);
  baseLayer.background(50);
  baseLayer.fill(255);
  baseLayer.textSize(40);
  baseLayer.textAlign(CENTER, CENTER);
  baseLayer.text("I NEED\nHUMANITY", width / 2, height / 2);

  fog = createGraphics(width, height);
  fog.background(200);
  fog.noStroke();
}

function draw() {
  image(baseLayer, 0, 0);

  if (mouseIsPressed) {
    fog.erase();
    fog.ellipse(mouseX, mouseY, 50, 50);
    fog.noErase();
  }

  image(fog, 0, 0);
}