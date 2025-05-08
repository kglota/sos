let targetX, targetY;
let showMessage = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  targetX = width / 2;
  targetY = height * 0.8; // where the beam should touch
  textAlign(CENTER, CENTER);
  textSize(15);
}

function draw() {
  clear(); // transparent canvas over the gif

  // triangle beam flaring from sun toward mouse
  fill(255, 140, 0, 200); // soft orange
  noStroke();
  beginShape();
  vertex(width / 2 - 118, height * 0.67);  // fixed top left (sun center)
  vertex(width / 2 + 148, height * 0.67);  // fixed top right (sun center)
  vertex(mouseX + 180, height);          // base right follows mouse
  vertex(mouseX - 180, height);          // base left follows mouse
  endShape(CLOSE);


  // check if beam touches message zone
  if (mouseX > targetX - 80 && mouseX < targetX + 80) {
    showMessage = true;
    setTimeout(() => {
        window.location.href = "end.html"; // or whatever your final page is
      }, 5000); // 3 seconds after alignment
  } else {
    showMessage = false;
  }

  if (showMessage) {
    fill(0, 0, 139);
    text("not doing everything, but doing enough.", targetX, targetY);
  }
}