let x = 150;
let y = 150;
let xspeed = 4;
let yspeed = 4;

var circleA = {
  d: 100,
  r: 50,
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  stroke(1);
  strokeWeight(4);
  noFill();
  ellipse(x, y, circleA.d);

  if (x > width - circleA.r || x < circleA.r) {
    xspeed = xspeed * -1;
  }
  if (y > height - circleA.r || y < circleA.r) {
    yspeed = yspeed * -1;
  }

  x = x + xspeed;
  y = y + yspeed;
}
