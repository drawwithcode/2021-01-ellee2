let n = 45;
let gap = 11;
var b;
var u;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  b = color(34, 100, 100);
  u = color(255, 100, 100);
  rectMode(CENTER);
 	strokeWeight(2);
 
}

function draw() {
  
 background(0);
 
 //text
 push();
  textSize(50);
  noStroke();
  fill("white");
  textStyle(BOLD);
  textAlign(LEFT);
  textFont();
  text("Move your cursor on the figure\nto change colors", 40, 50);
  textAlign(RIGHT, BOTTOM);
  text("Click to stop", 1500, 700 );
 pop();


 translate(width/2, height/2);

  //change stroke color with mouse movement 
  var t = map(mouseX, 0, width, 0, 1.0); 
  var f = lerpColor (b, u, t);
  stroke(f);

 
 push();
  // do the loop backwards by starting at n and counting down
  // check greater than zero
  for(let i = n; i >= 0; i--){
   rotate(radians(frameCount*0.05));
   fill(frameCount % 360, 20, 100);
   rect(0, 0, i * gap, i * gap);
 pop();
   }
  
  }

//stop and start the animation
function mouseClicked() {
  if (isLooping()) {
    noLoop();
  }
  else {
    loop();
  }
}

