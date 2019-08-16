//a-frame objects
let box1;
let box2;
let sphere; 
let plane;
let model;
let sky;

//animation variables
let rotY;
let modelRotY = 0;
let speed;
let mappedX;
let mappedY;
let mappedRadius;
let mappedModelScale;
let sphereColor; 

 
function setup(){
	
	rotY = 45;
	speed = 1; 

	//initialize the a-frame scene
	aFrameScene(); 

	aFrameCamera(0,0,0,0,0,0);
	//initialize the box objects
	box1 = new aFrameBox(); 
	box2 = new aFrameBox();

	//initialize the model object
	model = new aFrameModel();
 	
 	//initialize the sphere object
	sphere = new aFrameSphere();

	//initialize the plane object
	plane = new aFramePlane();

	//initialize the sky
	aFrameSky("#6EBAA7", "img/night-sky.jpg");

}
 
function draw(){
	//change the rotY variable
	rotY = rotY + speed; 

	//mapping the box variables 
	mappedX = map(mouseX, 0, displayWidth, 0, 360);
	mappedY = map(mouseY, 0, displayHeight, 0, 360);

	//mapping the sphere radius variable 
	mappedRadius = map(mouseX, 0, displayWidth, .6, 1); 

	//mapping the model scale variable
	mappedModelScale = map(mouseX, 0, displayWidth, .01, .03);

	//if the radius of sphere reaches 2.5, change color
	if(mappedRadius > .7){ 
		sphereColor = "#EF2D5E";
	}else{
		sphereColor = "#f542da"; 
	}

	//displaying and animating box with a texture
	box1.display(-1, 1, -3, 0, rotY, 0, "#fff", "img/night-sky.jpg");

	//displaying and rotating box with mouse
	box2.display(1, 2, -3, mappedX, mappedY, 0, "#4CC3D9");

	//displaying and scaling sphere with mouse and changing color variables 
	sphere.display(0, 1.25, -8, mappedRadius, sphereColor);  
	
	//if key is pressed, rotate the model on Y axis
	if (keyIsPressed === true) {
    	modelRotY = modelRotY + speed*2;
  	} else {
    	modelRotY;
  	}

  	//display and add model with rotate and scale variable
	model.display("model/Capoeira.gltf", -3, 0, -8, mappedModelScale, mappedModelScale, mappedModelScale, 0, modelRotY, 0);

	//display plane
	plane.display(0, -.5, -9, 90, 0, 0, 19, 10, "#FFC65D");
}






