# An example using p5.js with A-Frame
Created at the p5.js contributor's conference 2019

in development ^_^

## Initialize the A-Frame Scene

aFrameScene( )


## If you want to create a custom positioned, static camera

aFrameCamera(px, py, pz, rx, ry, rz)

px = Number: x position

py = Number: y position

pz = Number: z position

rx = Number: x rotation

ry = Number: y rotation

rz = Number: z rotation


## Creating a Sky

aFrameSky(clr, [texture])

clr = String: Hex color value

texture = String: link to image texture


## Classes

aFrameAnimCamera

aFramePlane

aFrameBox

aFrameSphere

aFrameCylinder

aFrameModel


# Each class has a display function

## Animated Camera: If you want to animate the rotation and position on the camera use this instead of the aFrameCamera function

aFrameAnimCamera.display(px, py, pz, rx, ry, rz)

px = Number: x position

py = Number: y position

pz = Number: z position

rx = Number: x rotation

ry = Number: y rotation

rz = Number: z rotation

## Plane

aFramePlane.display(px, py, pz, rx, ry, rz, w, h, clr, texture)

px = Number: x position

py = Number: y position

pz = Number: z position

rx = Number: x rotation

ry = Number: y rotation

rz = Number: z rotation

w = Number: width

h = Number: height

clr = String: Hex color value

texture = String: link to image texture


## Box

aFrameBox.display(px, py, pz, rx, ry, rz, clr, [texture])

px = Number: x position

py = Number: y position

pz = Number: z position

rx = Number: x rotation

ry = Number: y rotation

rz = Number: z rotation

clr = String: Hex color value

texture = String: link to image texture


## Sphere

aFrameSphere.display(px, py, pz, r, clr, [texture])

px = Number: x position

py = Number: y position

pz = Number: z position

r = Number: radius

clr = String: Hex color value

texture = String: link to image texture


## Cylinder

aFrameCylinder.display(px, py, pz, w, h, rx, ry, rz, clr, [texture])

px = Number: x position

py = Number: y position

pz = Number: z position

w = Number: width

h = Number: height

rx = Number: x rotation

ry = Number: y rotation

rz = Number: z rotation

clr = String: Hex color value

texture = String: link to image texture


## Model

aFrameModel.display(modelName, px, py, pz, sx, sy, sz, rx, ry, rz)

modelName = String: link to model

px = Number: x position

py = Number: y position

pz = Number: z position

sx = Number: size x-axis

sy = Number: size y-axis

sz = Number: size z-axis

rx = Number: x rotation

ry = Number: y rotation

rz = Number: z rotation


## Example
```
//loading a box, custom positioned camera and a model

void setup(){
	aFrameScene( );

	aFrameCamera(0, 1.6, 8, 0, 0, 0);

	box = new aFrameBox();

	model = new aFrameModel();
}

void draw(){

	box.display(-1, 1, -3, 0, 45, 0, “#4CC3D9”, “texture.jpg”);
	model.display("model.gltf", -3, 0, -8, .03, .03, .03, 0, 0, 0);
}
```
