let msg = "I wish I was special, I gave all my special / Away to a loser… ";
let x = 0;
let bgGif;
let lineCount = 6; // how many lines you want
let flipStates = [];
let charPositions = [];





function preload() {
  // Load the GIF and hide the HTML image element
bgGif = createImg("img/ocean.gif");
  bgGif.hide();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  fill(255);
  noStroke();
}

// Randomly decide if each line is flipped
for (let i = 0; i < lineCount; i++) {
  flipStates.push(random() < 0.4); // 40% chance to flip
}


function draw() {
  clear();
  fill(255);
  textAlign(CENTER, BOTTOM);
  textSize(20);
  text("wish to start", width / 2, height - 40);

  charPositions = []; // reset each frame

  for (let l = 0; l < lineCount; l++) {
    let yOffset = 100 + l * 60;
    let horizontalShift = l * 100;
    let flipped = flipStates[l];

    for (let i = 0; i < msg.length; i++) {
      let charX = (x + i * 20 + horizontalShift) % width;
      let wave = sin((x + i * 10 + l * 50) * 0.02) * 30;
      let charY = flipped ? yOffset - wave : yOffset + wave;

      text(msg[i], charX, charY);
      charPositions.push({ x: charX, y: charY }); // store each char’s position
    }
  }

  x += 1;
}

function mousePressed() {
  for (let pos of charPositions) {
    let d = dist(mouseX, mouseY, pos.x, pos.y);
    if (d < 20) {
      window.location.href = "gone-girl.html"; // or whatever your next page is
      break;
    }
  }
}