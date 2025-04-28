let nonsenseWords = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}


function setup() {
  createCanvas(windowWidth, windowHeight);  
  textSize(20);
  fill(255, 150, 200); 
  noStroke();

  for (let i = 0; i < 25; i++) {
    nonsenseWords.push({
      x: random(width),
      y: random(height),
      speedX: random(0.5, 1.5),  // wind pushing right
      speedY: random(-0.2, 0.2)  // a little wiggle
    });
  }
}

function draw() {
  background(15, 40, 30); 

  for (let word of nonsenseWords) {
    text("nonsense", word.x, word.y);
    word.x += word.speedX;
    word.y += word.speedY;

    if (word.x > width + 50) {
      word.x = -100;
      word.y = random(height);
    }
  }
}