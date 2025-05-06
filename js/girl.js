let nonsenseWords = [];
let dandelion;
let bg;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  dandelion = loadImage("img/dand3.png");
  bg = loadImage("img/green.gif"); // or "img/green.gif" if it's in an img folder

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
  background(bg);

  image(dandelion, 40, height / 2 - 150, 800, 900);

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


function mousePressed() {
  for (let word of nonsenseWords) {
    let d = dist(mouseX, mouseY, word.x, word.y);
    if (d < 50) { // adjust the sensitivity if needed
      window.location.href = "ghost.html"; // replace with your next page
      break; // exit loop after the first match
    }
  }
}
