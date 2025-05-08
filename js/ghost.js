let ripples = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  clear(); // transparent so gif shows behind

  for (let i = ripples.length - 1; i >= 0; i--) {
    let r = ripples[i];
    
    stroke(255, r.alpha);
    strokeWeight(2);
    ellipse(r.x, r.y, r.radius);
    
    // 📝 Show text if this ripple is flagged
    if (r.word) {
      noStroke();
      fill(173,216,230, r.alpha);
      textSize(18);
      textAlign(CENTER);
      text("I need humanity", r.x, r.y);
    }

    r.radius += 2;
    r.alpha -= 3;

    if (r.alpha <= 0) {
      ripples.splice(i, 1);
    }
  }
}

function mousePressed() {
  ripples.push({
    x: mouseX,
    y: mouseY,
    radius: 0,
    alpha: 255,
    word: true // flag this ripple to show the text
  });
  setTimeout(() => {
    window.location.href = "sun.html";
  }, 5000); // delay for a gentle pause
}
