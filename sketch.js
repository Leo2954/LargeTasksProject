let redSquare, greenSquare, blueSquare;

function setup() {
  createCanvas(800, 600);
  redSquare = { x: width / 2, y: height / 4, size: 100, color: [255, 0, 0] };
  greenSquare = { x: width / 2, y: height / 2, size: 100, color: [0, 255, 0] };
  blueSquare = { x: width / 2, y: (3 * height) / 4, size: 100, color: [0, 0, 255] };
}

function draw() {
  background(0);
  drawSquare(redSquare);
  drawSquare(greenSquare);
  drawSquare(blueSquare);
}

function drawSquare(square) {
  fill(square.color);
  square.x = mouseX;
  rect(square.x, square.y, square.size, square.size);
}

function mousePressed() {
  redSquare.color = [random(255), random(255), random(255)];
  greenSquare.color = [random(255), random(255), random(255)];
  blueSquare.color = [random(255), random(255), random(255)];
}
