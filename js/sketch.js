let msg = "I wish I was special, I gave all my special / Away to a loser… ";
let x = 0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10, 30, 50); // deep ocean blue

  for (let i = 0; i < msg.length; i++) {
    let charX = (x + i * 20) % width; 
    let charY = 200 + sin((x + i * 10) * 0.02) * 30;
    text(msg[i], charX, charY);
  }

  x += 1; 
}