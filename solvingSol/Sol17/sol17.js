function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
	strokeWeight(4);
		stroke(255,50,50);
	for(var i = 0; i< height; i+=20){
		line(10, i, width, i);
	}
	
	noStroke();
	rect(width/4-10, 0, width*0.75+10, height);


	strokeWeight(4);
	stroke(50,255,50);
		for(var i = -300; i< height; i+=20){
		line(width/4+10, i, width/2, i+300);
	}

	
		
	noStroke();
	rect(width/2-10, 0, width*0.5+10, height);
	
	strokeWeight(4);
	stroke(50,50,255);
	for(var i = (width/2)+10; i< width*0.75; i+=20){
		line(i, 0, i, height);
	}
	
	noStroke();
	rect(width*0.75-10, 0, width, height);
	
	strokeWeight(4);
	stroke(230,210,10);
	for(var i = -200; i< height+300; i+=20){
		line(width*0.75+10, i, width-10, i-300);
	}
	
}