let baseY;
let waveOffset = 0;
let opacity = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);
  baseY = height / 2;
}

function draw() {
  clear();

  // slowly fade in
  if (opacity < 255) {
    opacity += 0.5;
  }

  // wave effect (like bobbing on water)
  let waveY = baseY + sin(waveOffset) * 10; // amplitude = 10px
  waveOffset += 0.01; // speed

  fill(255, opacity);
  text("I'm gonna be fine anyway.", width / 2, waveY);
}

function mousePressed() {
    window.location.href = "index.html";
  }
  