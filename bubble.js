var x;
var y;
var radius;

function setup() {
  createCanvas(540, 400);
  x = random(width);
  y = random(height);
  radius = 25;
}

function draw() {
  background(255);

  if (dist(mouseX, mouseY, x, y) < radius) {
   {
      x = random(width);
      y = random(height);
      radius += random(-20, 20)
    }
    fill(255, 200, 200, 200);
  }
  else {
    fill(255, 200, 255, 200);
  }

  ellipse(x, y, radius * 2);
  x += random(-3, 3);
  y += random(-3, 3);
}
