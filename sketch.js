var s;
var scl = 20;
var food;

function setup() { 
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
//   food = pickLocation();
    food= createVector(random(width), random(height));
  console.log(food);
} 

function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() { 
  background(51);
  s.update();
  s.show();
  if (s.eat(food)){
      food = pickLocation();
  }
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW){
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW){
    s.dir(1, 0)
  } else if (keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }
}

//constructor function for the snake
function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  
  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }
  
  //updates current x and y location based on speed
  this.update = function (){
    this.x += this.xspeed*scl;
    this.y += this.yspeed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }
  
  //creates the look of the snake
  this.show = function(){
    fill(255);
    rect(this.x, this.y, scl, scl);
  }
  
  this.eat = function(pos){
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d<1){
          return true;
      } else {
          return false;
      }
  }

}