var step=30;
var wall = 0;

function setup() {
	createCanvas(windowHeight, windowHeight);
	background(255);
	step = height/30;
	drawGrid();
	drawLines();
}


function draw(){
	
}

function mouseClicked(){
		background(255);
		drawGrid();
		drawLines();
}


function drawGrid(){
		for(var i = 0; i < width; i+= step){
			for(var j = 0; j < height; j+= step){
				noFill();
				stroke(0);
				rect(i, j, step, step);
			}
		}
}

function drawLines() {
			stroke(255, 0, 0);
			for(var i=0; i<12; i++){
				line(0, height/2, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width/2, 0, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width, height/2, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width/2, height, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
			}
	
			stroke(0, 0, 255);
			for(var i=0; i<12; i++){	
				line(0, 0, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width, 0, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(0, height, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width, height, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
			}
	
			stroke(255,255,0);
			for(var i=0; i<25; i++){
				line(width/2, height/2, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
			}
}
