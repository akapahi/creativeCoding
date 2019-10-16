function setup() {
	createCanvas(500, 500);
	background(255);
		scale(0.9);
}

function draw() {
	
	stroke(255,0,0);
	for(var i = 20; i < 120; i+=10){
		line(i, 0, i, height);
	}
	
		stroke(0,255,0);
	for(var i = 20; i < 120; i+=10){
		line(0, i, width, i);
	}
	
		stroke(0,0,255);
	for(var i = 0; i < 120; i+=12){
		line(i, 0, height, width-i);
	}
	
	for(var i = 10; i < 110; i+=12){
		line(0, i, height-i, width);
	}

}