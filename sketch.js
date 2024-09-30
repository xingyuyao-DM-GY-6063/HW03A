function setup() {
  createCanvas(windowWidth, windowHeight);
  background(238, 210, 10);

  for (let d = 15; d < windowWidth; d += 50) {
    for (let c = 0; c < windowHeight; c += 50) {
      fill(15, 15, 15);
      ellipse(d, c, 20);
    }
  }
  for (let d = 40; d < windowWidth; d += 50) {
    for (let c = 30; c < windowHeight; c += 50) {
      fill(15, 15, 15);
      ellipse(d, c, 10, 10);
    }
  }
}

function draw() {}
