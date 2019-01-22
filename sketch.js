var custompointX;
var custompointY;

let customPtArrayX= [];
let customPtArrayY= [];

function setup() {
custompointX = 0;
custompointY = 0;
	createCanvas(400,400);
	background(0);

stroke(255);
noFill();
}

function draw() {
	
background(0);
noFill();
	point(mouseX, mouseY);
		ellipse(customPtArrayX[2], 50, 40);
	beginShape();
	vertex(100,50);
	vertex(200,20);
	curveVertex(custompointX, custompointY);

	curveVertex(200,300);
	vertex(40,90);
	endShape(CLOSE);

fill(50);
translate(width/2,height/2);
beginShape();
vertex(-27.46, 0.925);
bezierVertex(-10.741, 30.767, 22.638, 65.443, 46.362, 86.044);
bezierVertex(40.273, 49.07, 53.737, 103.694, 62.859, 109.777);
bezierVertex(62.859, 109.777, 54.741, 129.886, -23.718, -21.525);
bezierVertex(-40.916, -49.927, -35.218, -49.21, -56.457, -77.832);
bezierVertex(-60.737, -89.943, -64.239, -114.837, -64.239, -114.837);
bezierVertex(-72.106, -147.476, -38.932, -124.643, -31.382, -118.442);
bezierVertex(-31.382, -118.442, -20.417, -114.956, -23.334, -89.185);
bezierVertex(-5.762, 23.446, 33.937, 58.866, 33.937, 58.866);
bezierVertex(38.494, 50.084, 13.178, 5.126, 28.485, 10.054);
bezierVertex(37.898, 17.653, 70.782, 119.662, 62.859, 109.777);
bezierVertex(48.799, 121.726, 26.664, 94.616, 6.795, 67.376);
bezierVertex(-0.501, 59.375, -30.838, 19.038, -37.685, 10.355);
bezierVertex(-38.723, 4.455, -32.308, -5.54, -27.46, 0.925);
endShape();


	}

function mousePressed() {
   for (var i = 0; i <= 4; i++) {
       if (i in customPtArrayX) {
	customPtArrayX[i] = mouseX;
	customPtArrayY[i] = mouseY;    s = myStringArray[i];

  }
   


	
	
	}
	i++;
}