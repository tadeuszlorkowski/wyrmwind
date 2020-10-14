/*
----------------------------------------------------------------------------------------
///                              +++ WYRMWIND.JS +++                              \\\
                              © 2020 Tadeusz Lorkowski

AN OPEN SOURCE JAVASCRIPT FRONTEND LIBRARY. USED FOR MAKING BEAUTIFUL WEB APPLICATIONS.
COMPATIBLE WITH MOST DESKTOP WEB BROWSERS, INCLUDING BUT NOT LIMITED TO GOOGLE CHROME,
                   OPERA, MOZILLA FIREFOX, AND MICROSOFT EDGE.
				   
                     SOURCE: epejsodion.herokuapp.com/wyrmwind.js
                            WRITTEN BY TADEUSZ LORKOWSKI
----------------------------------------------------------------------------------------
*/

//You may comment these logs if you don't wish them to appear. Showing them is appreciated though.
console.log("Wyrmwind Alpha 2 © 2020 Tadeusz Lorkowski.");
console.log("This is an open source library. Feel free to customize it to your liking.");

//control variables - should not be changed nor refered to 
npvisjzbmpifxkmb = false;

//Library

//Please ignore the class name. It should not be re-used.
//This is the main body of the Wyrmwind class containing most of the generic functions.
class G13653FASBX35B1ZX3B54 {
	constructor() {
		this.appType = 0;
		this.appName = "Wyrmwind Application";
		this.appDescription = "This app has no description.";
		this.appCreator = "";
		this.appVersion = "1.0";
		//The Keyset contains more friendly names for the ASCII KeyCodes.
		this.Keyset = {
		key_up : 38,
		key_down : 40,
		key_left : 37,
		key_right : 39,
		key_tab : 9,
		key_caps : 20,
		key_shift : 16,
		key_ctrl : 17,
		key_alt : 18,
		key_space : 32,
		key_none : 0,
		key_PR : 0,
		key_RL : 0,
		key_GET : 0,
		t_PR : 0,
		t_RL : 0,
		t_GET : 0
		}
		this.checkEnd = false;
		this.bvfdsboigvlz = 0;
		this.bpiusdvzkvib = 0;
		this.instList = [];
	}
	//test method
	Nekrolog() {
			alert("Dziadziuś nie żyje");
	}
	//alert app info
	InfoAlert() {
			alert(this.appName+" "+this.appVersion+"\nby "+this.appCreator+"\n"+this.appDescription);
	}
	//change app parameters
	SetDesc(a1, a2, a3, a4, a5, a6) {
		this.appType = a1;
		this.appName = a2;
		this.appDescription = a3;
		this.appCreator = a4;
		this.appVersion = a5;
		if(a6) {
			this.InfoAlert();
		}
	}
	//draw a circle
	Circle(a, x, y, d, c) {
	var canvas = document.getElementById(a);
	if (canvas.getContext) {
    this.ctx = canvas.getContext('2d');
	}
	this.ctx.fillStyle = c;
	this.ctx.arc(x, y, d, 0, Math.PI*2, false);
    this.ctx.fill();
	}
	//draw a ring
	Ring(a, x, y, d, t, c) {
		var canvas = document.getElementById(a);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
		for(this.i=0; this.i<t; this.i++) {
		this.ctx.strokeStyle = c;
		this.ctx.arc(x, y, d+this.i, 0, Math.PI*2, false);
		this.ctx.stroke();
		}
	}
	//draw a sprite
	Sprite(c, x, y, gfx) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
		this.currentImage = 0;
		this.ctx.drawImage(gfx, x, y);
	}
	//draw a stretched sprite
	SpriteStretch(c, x, y, w, h, gfx) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
		this.currentImage = 0;
		this.ctx.drawImage(gfx, x, y, w, h);
	}
	//draw part of a sprite
	SpritePartial(c, x, y, xp, yp, w, h, gfx) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
		this.currentImage = 0;
		this.ctx.drawImage(gfx, xp, yp, w, h, x, y, w, h);
	}
	//draw rotated sprite
	SpriteRotated(c, x, y, r, gfx) {
	var degs = (r*Math.PI)/180;
	var canvas = document.getElementById(c);
	if (canvas.getContext) {
	this.ctx = canvas.getContext('2d');
	}
	this.ctx.translate(x, y);
	this.ctx.rotate(degs);
	this.ctx.drawImage(gfx, -x/2, -y/2);
	this.ctx.rotate(-degs);
	this.ctx.translate(-x, -y);
	}
	//draw sprite with all functions
	SpriteComplete(c, x, y, w, h, xp, yp, wp, hp, r, gfx) {
	var degs = (r*Math.PI)/180;
	var canvas = document.getElementById(c);
	if (canvas.getContext) {
	this.ctx = canvas.getContext('2d');
	}
	this.ctx.translate(x, y);
	this.ctx.rotate(degs);
	this.ctx.drawImage(gfx, xp, yp, w, h, -x/2, -y/2, w, h);
	this.ctx.rotate(-degs);
	this.ctx.translate(-x, -y);
	}
	
	//draw text
	Text(c, font, str, x, y) {
	c.font = font;
	c.fillText(str, x, y);
	}
	
	//draw stroke text
	TextStroke(c, font, str, x, y) {
	c.font = font;
	c.strokeText(str, x, y);
	}
	
	//if key is pressed
	KeyPress(key) {
	document.addEventListener("keydown", event => {
		this.Keyset.key_PR = event.keyCode;
	});
			if (this.Keyset.key_PR == key && !this.checkEnd) {
				this.checkEnd = true;
				return true;
			} else {
				return false;
			}
	}
	
	//if key is released
	KeyRelease(key) {
	document.addEventListener("keyup", event => {
		this.Keyset.key_RL = event.keyCode;
	});
			if (this.Keyset.key_RL == key && !this.checkEnd) {
				this.checkEnd = true;
				return true;
			} else {
				return false;
			}
	}
	
	//get pressed key
	GetInput() {
		document.addEventListener('keydown', event => {
	this.Keyset.key_GET = event.keyCode;
	});
	console.log(this.Keyset.key_GET);
	if(this.checkEnd)
	return 0;
	this.checkEnd = true;
	return this.Keyset.key_GET;
	}
	
	//if mouse pressed
	GetMouse() {
		npvisjzbmpifxkmb = false;
		document.addEventListener('click', event => {
			npvisjzbmpifxkmb = true;
    });
	return npvisjzbmpifxkmb;
	}
	
	//refresh screen
	Refresh(c, x, y) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		this.ctx.clearRect(0, 0, x, y);
		}
		this.checkEnd = false;
	}

	//RNG
	RandomInt(x) {
		return Math.floor(Math.random() * x+1);
	}
	
	//Float RNG
	Random(x) {
		return Math.random() * x+1;
	}
	
	//Range RNG
	RandomIntRange(x, y) {
		return y-Math.floor(Math.random() * x+1);
	}
	
	//Range RNG
	RandomRange(x, y) {
		return y-(Math.random() * x+1);
	}
	
	//WEB DOM FUNCTIONS
	
	CreateHeading(priority, title, content) { //writes a heading of size priority
		if(priority == 1 || priority == 2 || priority == 3 || priority == 4 || priority == 5) {
		document.write("<h"+priority.toString()+">"+title+"</h"+priority.toString()+"><p>"+content+"</p>");
		} else {
		document.write("<h6>"+title+"</h6><p>"+content+"</p>");
		}
	}
	
	LoadImage(_imgid, _imgpath) { //load an image from the file system
		document.write('<img style="display:none" id="'+_imgid+'"; src="'+_imgpath+'">');
	}
	
	FromID(_str) { //alternate, easier spelling of document.getElementById
		return document.getElementById(_str);
	}
	
	CreateButton(_id, _text, _img) { //creates a button of text _text and image _img. Type _img = null for no image.
		if(_img == null) {
			document.write('<button id='+_anim+';text='+_text+';></button>');
		} else {
			document.write('<button id='+_anim+';text='+_text+';style="background-image:'+_img+'"></button>');
		}
	}
	
	
	
	//WEB CLIENT FUNCTIONS
	
	Receive(_url) { //receives data from the server
		RDH435H14GC5N23 = new WebSocket(_url);
		dat = null;
		RDH435H14GC5N23.onmessage = function(rec) {
		dat = rec.data;
		}
		RDH435H14GC5N23.close();
		return dat;
	}
	Send(_url, _data) { //sends data to the server
		RDH435H14GC5N23 = new WebSocket(_url);
		success = false;
		RDH435H14GC5N23.onopen = function() {
		RDH435H14GC5N23.send(_data);
		success = true;
		};
		RDH435H14GC5N23.close();
		return success;
	}
	
	//all for Wyrmwind
}

//Refer to this! (e.g. Wyrmwind.functionname();)
let Wyrmwind = new G13653FASBX35B1ZX3B54();

//Slideshows are used to display beautiful, paged slideshows. They can have up to 16 slides.
class WyrmwindSlideshow {
	constructor(c, n, files, xx, yy) {
		if(n>15) {
			n = 15;
		}
		this.slides = n-1;
		this.img0 = files[0];
		this.img1 = files[1];
		this.img2 = files[2];
		this.img3 = files[3];
		this.img4 = files[4];
		this.img5 = files[5];
		this.img6 = files[6];
		this.img7 = files[7];
		this.img8 = files[8];
		this.img9 = files[9];
		this.img10 = files[10];
		this.img11 = files[11];
		this.img12 = files[12];
		this.img13 = files[13];
		this.img14 = files[14];
		this.img15 = files[15];
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
		this.currentImage = 0;
		this.x = xx;
		this.y = yy;
		this.ctx.drawImage(this.img0, this.x, this.y);
		this.active = true;
		this.clicking = false;
	}
	Shown(c, n) {
		if(this.active) {
		this.canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
		switch(n) {
		case 0 : this.ctx.drawImage(this.img0, this.x, this.y); break;
		case 1 : this.ctx.drawImage(this.img1, this.x, this.y); break;
		case 2 : this.ctx.drawImage(this.img2, this.x, this.y); break;
		case 3 : this.ctx.drawImage(this.img3, this.x, this.y); break;
		case 4 : this.ctx.drawImage(this.img4, this.x, this.y); break;
		case 5 : this.ctx.drawImage(this.img5, this.x, this.y); break;
		case 6 : this.ctx.drawImage(this.img6, this.x, this.y); break;
		case 7 : this.ctx.drawImage(this.img7, this.x, this.y); break;
		case 8 : this.ctx.drawImage(this.img8, this.x, this.y); break;
		case 9 : this.ctx.drawImage(this.img9, this.x, this.y); break;
		case 10 : this.ctx.drawImage(this.img10, this.x, this.y); break;
		case 11 : this.ctx.drawImage(this.img11, this.x, this.y); break;
		case 12 : this.ctx.drawImage(this.img12, this.x, this.y); break;
		case 13 : this.ctx.drawImage(this.img13, this.x, this.y); break;
		case 14 : this.ctx.drawImage(this.img14, this.x, this.y); break;
		case 15 : this.ctx.drawImage(this.img15, this.x, this.y); break;
		default : this.ctx.drawImage(this.img0, this.x, this.y); break;
		}
		}
	}
}

//An animation class used solely for WyrmwindGameObject. If you are not into it, ignore this class.

class WyrmwindAnimation {
	//takes an array of images collected with Wyrmwind.FromID() or getElementById()
	constructor(_imgs) {
		this.animframes = _imgs.length;
		this.animframe = [];
		this.animfr = 0;
		this.animspd = 10;
		this.animindex = 0;
		this.plays = false;
		for(var i=0; i<this.animframes; i++) {
			this.animframe[i] = _imgs[i];
		}
	}
	Reverse() { //reverses the animation
		this.animframe.reverse();
	}
	Play(_c, _x, _y, _willplay, _spd) { //test the animation
		this.plays = _willplay;
		this.animspd = _spd;
		if(this.plays) {
			Wyrmwind.Sprite(_c, _x, _y, this.animframe[this.animindex]);
			this.animfr++;
			if(this.animfr >= this.animspd) {
				if(this.animindex == this.animframes-1) {
					this.animindex = 0;
				} else {
					this.animindex++;
				}
				this.animfr = 0;
			}
		}
	}
}

//Game objects are used mainly for displaying video games. However, they can have other uses.
//They are based on game objects as seen in game engines. Wyrmwind is not really a game engine,
//but uses some friendly solutions which make HTML5 canvas gam programming easier.
//We recommend extending the class for more personalized use.

class WyrmwindGameObject {
	
	//EVENTS
	
	Created() {
		//This will be executed on every instatiation. It is empty on default and is made to be overloaded when a custom WyrmwindGameObject
		//derivative is created.
	}
	
	Updated() {
		//This will be executed on every browser frame. It is empty on default and is made to be overloaded when a custom WyrmwindGameObject
		//derivative is created.
	}
	
	constructor(_awake, _canvas) {
		this.x = 0; //the x position of the object
		this.y = 0; //the y position of the object
		this.xspeed = 0; //the horizontal speed of the object
		this.yspeed = 0; //the vertical speed of the object
		this.speed = 0; //the speed of the object; read-only. Writing it has no effect.
		this.visual = false; //if the object has a WyrmwindAnimation.
		this.animation = []; //the object's animation. Requires a WyrmwindAnimation to be loaded.
		this.animspd = 10; //the speed of the object's animation. Requires a WyrmwindAnimation to be loaded.
		this.animfr = 0; //animation frame. Should not be changed.
		this.animfrn = 1; //the number of animation frame. Requires a WyrmwindAnimation to be loaded. Changing it can cause errors.
		this.animindex = 0; //the speed of the object's animation. Requires a WyrmwindAnimation to be loaded.
		this.awake = _awake; //if false, the object will not react.
		this.canvas = _canvas; //the canvas to draw on. If null, the drawing funcions will not work.
		this.canvasw = 800; //the canvas width. Defaults to 800. Should be set manually.
		this.canvash = 600; //the canvas height. Defaults to 600. Should be set manually.
		this.canOB = true; //if the object can go out of bounds.
		this.isOB = false; //if the object is out of bounds.
		//Colissions
		this.coltype = 0; //colission type, 0 - none, 1 - rectangle, 2 - circle
		this.colrectx = 0; //width of rectangle colission
		this.colrecty = 0; //height of rectangle colission
		this.coldiameter = 0; //diameter of circle colission
		//Other
		this.createEV = false; //changing this only fires the Create() method again.
	}
	SetMotion(xs, ys) { //sets the xspeed and yspeed
		this.xspeed = xs;
		this.yspeed = ys;
	}
	Stop() { //stops the object
		this.xspeed = 0;
		this.yspeed = 0;
	}
	SetAnimation(_wyrmwindanimation) {
		this.animation = [];
		an = _wyrmwindanimation.animframes;
		this.animfrn = an;
		for(i=0; i<an; i++) {
			this.animation[i] = _wyrmwindanimation.animframe[i];
		}
		this.animindex = 0;
		this.visual = true;
	}
	SetCanvas(c, x, y) { //sets the drawing canvas, canvasw and canvash
		this.canvas = c;
		this.canvasw = x;
		this.canvash = y;
	}
	
	
	//The following function is auto-called each browser frame. Please do not call it manually.
	hbf34rb4561g3n65() {
		//move with xspeed/yspeed
		if(!this.canOB) {
			if(this.x + this.xspeed > 0 && this.x + this.xspeed < this.canvasw)
				this.x += this.xspeed;
			if(this.y + this.yspeed > 0 && this.y + this.yspeed < this.canvash)
				this.y += this.yspeed;
		} else {
			this.x += this.xspeed;
			this.y += this.yspeed;
		}
		
		//animation/visuals
		if(this.visual) {
			Wyrmwind.Sprite(this.canvas, this.x, this.y, this.animation[this.animindex]);
			this.animfr++;
			if(this.animfr >= this.animspd) {
				if(this.animindex = this.animfrn-1) {
					this.animindex = 0;
				} else {
					this.animindex++;
				}
				this.animfr = 0;
			}
		}
	}
}
