//load font 
let LHFConvectaBASE;
let helveticaBold; 
let helveticaBoldItalic;




function preload() {
  LHFConvectaBASE = loadFont('LHFConvectaBASE.otf');
  helveticaBold = loadFont('HelveticaNeue-Bold.otf');
  helveticaBoldItalic = loadFont('HelveticaNeue-BoldItalic.otf');
}

function setup() {
  createCanvas(screen.width, screen.height);
  // background(152,217,255,100);
  // background(214,238,253);
  background("#ffd9e0");

}

function draw() {
  noStroke();
  fill("#b6d594");
  ellipse(mouseX,mouseY,200,200);
  textFont(helveticaBold);
  textSize(60);
  // fill(214,238,253);
  fill("#ffd9e0");
  noStroke();
  textAlign(CENTER, CENTER);
  text("I'm",width/2-400, height/2);
    textFont(helveticaBoldItalic);
    text("Dejana", width/2-240, height/2);
   textFont(helveticaBold);
    textAlign(CENTER, CENTER);
  text("and this is some of my", width/2+195, height/2);
  stroke("#ffd9e0");
  strokeWeight(2);
  noFill();
   textAlign(CENTER, CENTER);
 text("work",width/2+50,height/2+100);
  
}




  
  

