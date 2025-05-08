let petals = [];
let petalCount = 26;
let backgroundWords = [];
let transitioning = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("sans-serif");
  textAlign(CENTER, CENTER);
  textSize(14);

  // Dandelion petal positions
  for (let i = 0; i < petalCount; i++) {
    let angle = TWO_PI / petalCount * i;
    let radius = 60;
    let x = width / 2 + cos(angle) * radius;
    let y = height / 2 + sin(angle) * radius;

    petals.push({
      x: x,
      y: y,
      dx: random(0.8, 2),
      dy: random(-0.5, 0.5),
      flying: false,
      alpha: 255
    });
  }

  // Create background floating "nonsense"
  for (let i = 0; i < 20; i++) {
    backgroundWords.push({
      x: random(width),
      y: random(height),
      speedX: random(0.3, 1),
      alpha: random(50, 100)
    });
  }
}

function draw() {
  clear();

  // floating background nonsense
  textSize(12);
  for (let w of backgroundWords) {
    fill(255, 150, 200, 180); // soft pink
    text("nonsense", w.x, w.y);
    w.x += w.speedX;

    if (w.x > width + 50) {
      w.x = -100;
      w.y = random(height);
    }
    let allGone = petals.every(p => p.alpha <= 0);

if (allGone && !transitioning) {
  transitioning = true; // prevent this from running more than once
  setTimeout(() => {
    window.location.href = "ghost.html"; // replace with your actual next page
  }, 1200); // 1.2 seconds delay before redirect
}
  }

  // dandelion stem
  stroke(255, 150, 200); // pink stem
  strokeWeight(3);
  line(width / 2, height / 2, width / 2, height);

  // dandelion petals
  noStroke();
  textSize(14);
  for (let p of petals) {
    if (p.flying) {
      p.x += p.dx;
      p.y += p.dy;
      p.dy -= 0.01;
      p.alpha -= 1.5;
      if (p.alpha < 0) p.alpha = 0;
    }
    fill(255, 150, 200, p.alpha); // pink petals
    text("nonsense", p.x, p.y);
  }

  // bottom message
  fill(255, 150, 200);
  textSize(24);
  textAlign(CENTER, BOTTOM);
  text("finding deeper meaning in", width / 2, height - 30);
}

function mousePressed() {
  for (let p of petals) {
    p.flying = true;
  }
}