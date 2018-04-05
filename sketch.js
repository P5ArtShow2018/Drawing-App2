var backgroundColor = { r: undefined, g: undefined, b: undefined };

function setup() {
  createCanvas (windowWidth, windowHeight);
  background (116,244,66);
}

function draw() {
  //fill (0,0,200);
  //line (mouseX,mouseY,400,400);
  noStroke ();
  fill (255,45);
  ellipse (mouseX,mouseY,30);
  //fill (0,191,255);
  //rect (mouseX,mouseY,20,20);
  
}

function mousePressed () {
  var r = random (131);
  var g = random (66);
  var b = random (244);
  background (r,g, b);
  backgroundColor.r = r;
  backgroundColor.g = g;
  backgroundColor.b = b;
}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
  background (backgroundColor.r, backgroundColor.g, backgroundColor.b);
}