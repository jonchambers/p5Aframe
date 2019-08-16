/* 

p5.js A-Frame Class Library 

You'll need to include aframe.js and aframe-extras.js in your html file before calling this file

this is in development...

Jon Chambers 2019

*/

//create the a-frame scene element
function aFrameScene(){ 
	var p5Canvas = document.getElementById("defaultCanvas0");
	p5Canvas.style.position = "absolute";
	p5Canvas.style.zindex = "-1";
	this.scene = document.createElement("a-scene");
	this.scene.setAttribute("id", "vrScene");
	document.body.appendChild(this.scene);  
	var parent = document.getElementById("vrScene");
	this.assets = document.createElement("a-assets");
	this.assets.setAttribute("id", "mainAssets");
	parent.appendChild(this.assets);
	   
}

//create a custom positioned camera
function aFrameCamera(px, py, pz, rx, ry, rz){
	var parent = document.getElementById("vrScene");
	this.cameraRig = document.createElement("a-entity");
	this.cameraRig.setAttribute("id", "rig");
	this.cameraRig.setAttribute("movement-controls", '');
	parent.appendChild(this.cameraRig);
	var cameraParent = document.getElementById("rig");
	this.vrcamera = document.createElement("a-entity");
	cameraParent.appendChild(this.vrcamera);
	this.vrcamera.setAttribute('camera', 'active', true);
	this.vrcamera.setAttribute("look-controls", '');
	   

	this.px = px;
	this.py = py;
	this.pz = pz;
	this.rx = rx;
	this.ry = ry;
	this.rz = rz;

	this.vrcamera.setAttribute("position", this.px + " " + this.py + " " + this.pz);
	this.vrcamera.setAttribute("rotation", this.rx + " " + this.ry + " " + this.rz);
}

//a-frame animated camera class
class aFrameAnimCamera{
	constructor(){
		var parent = document.getElementById("vrScene");
	  	this.vrcamera = document.createElement("a-entity");
	  	parent.appendChild(this.vrcamera);
	  	this.vrcamera.setAttribute('camera', 'active', true);
	  	this.vrcamera.setAttribute("wasd-controls",'');
	  	this.vrcamera.setAttribute("look-controls", ''); 
	}

	display(px, py, pz, rx, ry, rz){
		this.px = px;
	  	this.py = py;
	  	this.pz = pz;
	  	this.rx = rx;
	  	this.ry = ry;
	  	this.rz = rz;
	  	this.vrcamera.setAttribute("position", this.px + " " + this.py + " " + this.pz);
	  	this.vrcamera.setAttribute("rotation", this.rx + " " + this.ry + " " + this.rz);  	
	}
}

//a-frame plane 
class aFramePlane{
	//generate the box element
	constructor(){
		var parent = document.getElementById("vrScene");
	  	this.vrplane = document.createElement("a-plane");
	  	parent.appendChild(this.vrplane);    
	}

	//display the box element 
	display(px, py, pz, rx, ry, rz, w, h, clr, texture){
		if (clr === undefined) { 
    		clr = "";
  		} 
  		if (texture === undefined) {
    		texture = "";
  		} 
		this.px = px;
	  	this.py = py;
	  	this.pz = pz;
	  	this.rx = rx;
	  	this.ry = ry;
	  	this.rz = rz;
	  	this.w = w;
	  	this.h = h;
	  	this.clr = clr;  
	  	this.texture = texture;
	  	this.vrplane.setAttribute("position", this.px + " " + this.py + " " + this.pz);
	  	this.vrplane.setAttribute("rotation", this.rx + " " + this.ry + " " + this.rz);
	  	this.vrplane.setAttribute("width", this.w);
	  	this.vrplane.setAttribute("height", this.h);
	  	this.vrplane.setAttribute("color", this.clr);
	  	this.vrplane.setAttribute("src", this.texture);	 
	  	this.vrplane.setAttribute("material", "side: double"); 		  	
	}
}

//a-frame box class
class aFrameBox{
	//generate the box element
	constructor(){
		var parent = document.getElementById("vrScene");
	  	this.vrbox = document.createElement("a-box");
	  	parent.appendChild(this.vrbox);    
	}
	//display the box element 
	display(px, py, pz, rx, ry, rz, clr, texture){
		if (clr === undefined) {
    		clr = "";
  		} 
  		if (texture === undefined) {
    		texture = "";
  		} 
		this.px = px;
	  	this.py = py;
	  	this.pz = pz;
	  	this.rx = rx;
	  	this.ry = ry;
	  	this.rz = rz;
	  	this.clr = clr;
	  	this.texture = texture;
	  	this.vrbox.setAttribute("position", this.px + " " + this.py + " " + this.pz);
	  	this.vrbox.setAttribute("rotation", this.rx + " " + this.ry + " " + this.rz);
	  	this.vrbox.setAttribute("color", this.clr);
	  	this.vrbox.setAttribute("src", this.texture);	  		  	
	}
}

//a-frame sphere class
class aFrameSphere{
	//generate the sphere
	constructor(){
		var parent = document.getElementById("vrScene");
	  	this.vrshpere = document.createElement("a-sphere");
	  	parent.appendChild(this.vrshpere);    
	}
	//display the sphere element
	display(px, py, pz, r, clr, texture){
		if (clr === undefined) {
    		clr = "";
  		} 
  		if (texture === undefined) {
    		texture = "";
  		} 
		this.px = px;
	  	this.py = py;
	  	this.pz = pz;
	  	this.r = r;
	  	this.clr = clr;
	  	this.texture = texture;
	  	this.vrshpere.setAttribute("position", this.px + " " + this.py + " " + this.pz);
	  	this.vrshpere.setAttribute("radius", this.r);
	  	this.vrshpere.setAttribute("color", this.clr);
	  	this.vrshpere.setAttribute("src", this.texture); 		  	
	}
}

//a-frame cylinder class
class aFrameCylinder{
	//generate the cylinder
	constructor(){
		var parent = document.getElementById("vrScene");
	  	this.vrcylinder = document.createElement("a-cylinder");
	  	parent.appendChild(this.vrcylinder);
	}
	//display the cylinder element
	display(px, py, pz, w, h, clr, texture){
		if (clr === undefined) {
    		clr = "";
  		} 
  		if (texture === undefined) {
    		texture = "";
  		} 
		this.px = px;
	  	this.py = py;
	  	this.pz = pz;
	  	this.w = w;
	  	this.h = h;
	  	this.clr = clr;
	  	this.texture = texture;
	  	this.vrcylinder.setAttribute("position", this.px + " " + this.py + " " + this.pz);
	  	this.vrcylinder.setAttribute("radius", this.w);
	  	this.vrcylinder.setAttribute("height", this.h);
	  	this.vrcylinder.setAttribute("color", this.clr);
	  	this.vrcylinder.setAttribute("src", this.texture); 

	}

}

//a-frame model class
class aFrameModel{
	//generte the model 
	constructor(){
		var parent = document.getElementById("vrScene");
	  	this.vrmodel = document.createElement("a-entity");
	  	parent.appendChild(this.vrmodel);
	}
	//display the model
	display(modelName, px, py, pz, sx, sy, sz, rx, ry, rz){
		this.modelName = modelName;
		this.px = px;
	  	this.py = py;
	  	this.pz = pz;
	  	this.sx = sx;
	  	this.sy = sy;
	  	this.sz = sz;
	  	this.rx = rx;
	  	this.ry = ry;
	  	this.rz = rz;  
	  	this.vrmodel.setAttribute("position", this.px + " " + this.py + " " + this.pz);
	  	this.vrmodel.setAttribute("scale", this.sx + " " + this.sy + " " + this.sz);
	  	this.vrmodel.setAttribute("rotation", this.rx + " " + this.ry + " " + this.rz);
	  	this.vrmodel.setAttribute("gltf-model", this.modelName);
	  	this.vrmodel.setAttribute("animation-mixer", "");
	}

}

//a-frame texture class
class aFrameTexture{
	//generate the texture element
	constructor(){
		var parent = document.getElementById("mainAssets");
	  	this.texture = document.createElement("img");
	  	parent.appendChild(this.texture);
	}
	//add the texture to the assets tag
	addTexture(textureName, textureSrc){
		this.textureName = textureName;
		this.textureSrc = textureSrc;
		this.texture.setAttribute("id", textureName);
		this.texture.setAttribute("src", textureSrc);
	}
}

//a-frame sky class
function aFrameSky(clr, texture){
	if (clr === undefined) {
    		clr = "";
  		} 
  		if (texture === undefined) {
    		texture = "";
  		} 
	var parent = document.getElementById("vrScene");
	this.vrsky = document.createElement("a-sky");
	this.vrsky.setAttribute("color", clr);
	this.vrsky.setAttribute("src", texture);
	parent.appendChild(this.vrsky);
}






