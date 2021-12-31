
var snowflake,snowflakeImg
var bgImg

function preload() {
  snowflakeImg = loadImage("snow2.jpg");
  bgImg = loadImage("unnamed (2).gif");
}
function setup() {
  createCanvas(800,400);
 

}

function draw() {
  background(bgImg);  
  drawSprites();
  
}

