let bubbles = [];
var xoffset = 0.0;

function setup() {
	createCanvas(600,400);

}

function mousePressed() {
//		for (let i = 0; i < 10; i++) {
//	let x = random(width);
	let r = random(10, 40);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);

	//}
}

function keyPressed() {
	if (keyCode = 'c') {
		bubbles.pop();
	}
	xoffset + 0.01;

}

function draw() {


	background(0);
	fill(255);
	text('click to add bubble object and press c to remove', 10, 10, width, 30)

for (let bubble of bubbles) {
	bubble.move();
	bubble.show();
}

/*	for of loop above functions same as below
for (let i = 0; i < bubbles.length; i++) {
xoffset = xoffset + 0.01;
	bubbles[i].move();
	bubbles[i].show();
	}
*/


}



class Bubble {
	constructor(x, y, r) {
	this.x = x;
	this.y = y;
	this.r = r;
	}

	move() {
	if (frameRate() % random(10, 30)) {
		//xoffset = xoffset + 0.01;
		xoffset = xoffset + random(0.01,1.0);
	}
	this.x = this.x + map(noise(xoffset+100), 0.0, 0.9, -6, 5.8);
	
	this.y = this.y + map(noise(xoffset), 0.0, 0.9, -6, 5.8);
	}

	// ISSUE; all bubbles move together randomly, i want them to individually pick places along noise

	show() {
	//stroke(50);
	//strokeWeight(4);
	//noFill();
	noStroke();
	fill(255,30);
	ellipse(this.x, this.y, this.r * 3);
	}

}

