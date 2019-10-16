var x = 0;
var dir = 1;
var speed = 0;
var acc = 0.2;
var maxSpeed;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	rectMode(CENTER);
	colorMode(HSB, 360,255,255);
	maxSpeed = (Math.min(height, width) / 4) * 2 * acc;
	maxSpeed = Math.sqrt(maxSpeed);
	
}

function draw() {
	background(0);
	translate(width/2, height/2);
	rotate(radians(frameCount));
	
	for(var i =0; i < 8; i++){
    push();
    //this means that we are dividing 360 degrees into
    //8 portions
    rotate(TWO_PI * i / 8);
		translate(x, 0);
    
    rectMode(CENTER);
		rotate(radians(frameCount*2));
		fill((x+(i*45))%360, 255, 255);
		noStroke();
		rect(0, 0, 40, 40);
    pop();
  }
	
	
	speed+= acc;
	x+= speed*dir;
	if(speed > maxSpeed){
	//	console.log("speed: " + speed );
	//	console.log("x: " + x);
		acc = -acc;
	}
	if(speed < 0 ){
		acc = -acc;
		dir = -dir;
	}
}
