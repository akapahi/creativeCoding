var step=30;
var wall = 0;

function setup() {
	createCanvas(600, 600);
	background(0);
	drawGrid();
	drawLines();
}

function draw() {

}

function drawGrid(){
		background(0);
		for(var i = 0; i < width; i+= step){
			for(var j = 0; j < height; j+= step){
				noFill();
				stroke(255);
				rect(i, j, step, step);
			}
		}
}

function drawLines(){
		if(wall === 0){
		for(var i=0; i<25; i++){
			line(width/2, height/2, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
		}
	} else if(wall === 1){
			for(var i=0; i<12; i++){
				line(0, height/2, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width/2, 0, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width, height/2, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width/2, height, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
			}
	} else if(wall === 2){
			for(var i=0; i<12; i++){
				line(0, 0, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width, 0, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(0, height, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width, height, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
			}
		} else if(wall === 3){
			for(var i=0; i<12; i++){
				line(0, height/2, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width/2, 0, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width, height/2, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width/2, height, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(0, 0, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width, 0, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(0, height, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
				line(width, height, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
			}
			for(var i=0; i<25; i++){
				line(width/2, height/2, Math.ceil(random(0, (width/step)))*step, Math.ceil(random(0, (height/step)))*step);
			}
		}
	}


function mousePressed(){
	wall++;
	if(wall>3) wall = 0;
	drawGrid();
	drawLines();
}