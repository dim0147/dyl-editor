//	get Canvas
	const canvas = document.getElementById('canvasID');
	const ctx = canvas.getContext('2d');
	const canvasWidth = 1306;
	const canvasHeight = 607;
	canvas.width = 1306;
    canvas.height = 607;
	const degreeChange = Math.PI / 360;
	var level = 1;
	var gameStop = false;
//	Animation Main 
	const mainWalking = {
		y :278,
		farm : 8
	}
	
	const mainShooting = {
		y :370,
		farm : 12
	}
		
	const mainDie = {
		y :186,
		farm : 5
	}

//	Variable
var	bulletList = {};
var totalBullet = 0;

var starList = {};
var totalStar = 0;

var enemyList = {};
var totalEnemy = 0;

var fireballList = {};
var totalFireball = 0;

var	fireList = {};
var totalfire = 0;

var arrowEnemyList = {};
var totalArrow = 0;

var setPlayerAnimation = function(Animation, Object, id)
{
	if (id == "player")
	{
		Object.x = 0;
		Object.y = Animation.y;
		Object.totalFramX = Animation.farm;
		Object.currentFram = 0;
	}
	if (id == "enemy")
	{
		Object.x = Object.standardX;
		Object.y = Animation.y;
		Object.totalFramX = Animation.farm;
		Object.currentFram = 0;
	}
}


 function checkTouch(obj1, obj2) // Checking Function
 {
	 var widthT =false;
     var heightT = false;
	 //	For Boss
	 if(obj2.standardX == 5000 && obj1.xCanvas   > obj2.xCanvas  && obj1.xCanvas  < obj2.xCanvas + obj2.width &&  obj1.yCanvas < obj2.yCanvas + 150 &&   obj1.yCanvas > obj2.yCanvas  - obj2.height)
		return true;
	 
		if (obj1.xCanvas > obj2.xCanvas + obj2.width/2 && obj1.xCanvas < obj2.xCanvas + obj2.width && obj2.standardX != 5000)
			widthT = true;
	    if( obj1.yCanvas < obj2.yCanvas + obj2.height  &&   obj1.yCanvas > obj2.yCanvas - 5 && obj2.standardX != 5000)
			heightT = true;	
	   
		return widthT && heightT;
 }
 
 
 var boss = function(hp, locationX, locationY, widthE, heightE, widthImg, heightImg, standardX1, urlImg, walkingY, walkingF, dieY, dieF){
	this.hp = hp;
	this.deplayhitMain = false;
	this.display = true;
	this.enemychangeFarm = true;
	this.delaySkill = false;
	this.delayDodge = false;
	this.visible = false;
	this.delayVisible = false;
	
	this.xCanvas = locationX;
	this.yCanvas = locationY;
	this.speed = 2;
	this.speedD = 50;
	this.degree = 0;
	this.width = widthE;
	this.height = heightE;
	
	//	Animation Enemy
	this.enemyWalking = {
		y : walkingY,
		farm : walkingF
	}

	this.enemyDie = {
		y : dieY,
		farm : dieF
	}
	
	this.enemySkill = {
		y : 1000,
		farm : 6
	}
	
	this.enemySkill2 = {
		y : 1500,
		farm : 4
	}
	
	
	this.standardX = standardX1;		//	Set Animation
	this.x = this.standardX;
	this.y = this.enemyWalking.y;
	this.totalFramX = this.enemyWalking.farm;
	this.currentFram = 0;
	this.ImgWidth = widthImg; // Img Standard
	this.ImgHeight = heightImg; // Img Standard
	this.animationFirst = true;
	this.shootA = false;
	this.delayTime = 100;
	this.idSkill = 1;
	this.time = null; 
	this.imgObject = new Image();
	this.imgObject.src = urlImg;
	this.test = false;
	this.moveID = 0;
	this.firstMove = true;
	var self = this;
	
	this.draw = function(){
		if(this.hp == 0 && this.y != this.enemyDie.y)		//	Check Die
			{
				setPlayerAnimation(this.enemyDie, this, "enemy");
				self.delayTime  = 300;
				this.animationFirst = true;
			}
			
		if (self.currentFram == self.totalFramX - 1 && (this.y == this.enemySkill.y || this.y == this.enemySkill2.y) )	//	USING SKILL
		{
			self.skillBoss();
			setPlayerAnimation(this.enemyWalking, this, "enemy");
			self.delayTime  = 100;
			clearTimeout(self.time);
			this.enemychangeFarm = true;
			setTimeout(function(){self.delaySkill = false;}, 3000);
		}
		
		if(this.enemychangeFarm){
				
				if (self.currentFram < self.totalFramX - 1 )
				{
					if (self.animationFirst != true)
					{
						self.x -= self.ImgWidth;
						self.currentFram++;
					}
					this.enemychangeFarm = false;
					self.animationFirst = false;
					this.time = setTimeout(function(){self.enemychangeFarm = true;}, self.delayTime);
				}
				
				else if (self.currentFram == self.totalFramX - 1 && this.y == this.enemyWalking.y && this.delaySkill == false && this.firstMove == false)
				{
					if(this.idSkill == 1){
						setPlayerAnimation(this.enemySkill, this, "enemy");
						self.delayTime = 200;
					}
					else{
						setPlayerAnimation(this.enemySkill2, this, "enemy");
						self.delayTime = 500;
					}
					this.delaySkill = true;
					
				}
				else if(self.currentFram == self.totalFramX - 1 && this.y == this.enemyDie.y)	//	Die Already
				{
					this.display = false;
				}
				else{	
					setPlayerAnimation(this.enemyWalking, this, "enemy");
				}
		}
	ctx.drawImage(this.imgObject, this.x, this.y, this.ImgWidth, this.ImgHeight, this.xCanvas, this.yCanvas, this.width, this.height);
	self.moveRandom();
	self.hpBar();
	self.unstopBabel();		//		Car Loose
	}
	

		
	
	this.hpBar = function(){
		var hpDraw = (500 / hp) * this.hp;
		if (self.hp > hp)
			self.hp = hp;
		else if (self.hp < 0)
			self.hp = 0;
		ctx.beginPath();
		ctx.lineWidth = "6";
		ctx.strokeStyle = "#663333";
		ctx.rect(500, 20, 500, 30); 
		ctx.stroke();
		if (hpDraw != 0){
			var grd = ctx.createLinearGradient(480, 0, 980, 0);
			grd.addColorStop(0, "black");
			grd.addColorStop("0.2", "DarkGray");
			grd.addColorStop(1, "DarkOrange");
			ctx.fillStyle = grd;
			ctx.fillRect(500+3, 19+4, hpDraw - 6, 29 - 5);
			ctx.lineWidth = "1";
		}
	}

	this.skillBoss = function(){
		if(this.idSkill == 1){
			 createFireball(this.xCanvas, this.yCanvas, 180, 130, 0);
			 createFireball(this.xCanvas, this.yCanvas, 180, 130, 0.5);
			 createFireball(this.xCanvas, this.yCanvas, 180, 130, 1);
			 createFireball(this.xCanvas, this.yCanvas, 180, 130, -0.1);
			 createFireball(this.xCanvas, this.yCanvas, 180, 130, -0.5);
			 createFireball(this.xCanvas, this.yCanvas, 180, 130, -0.8);
			 this.idSkill = 2;
		}
		else{
			 createFire(this.xCanvas, this.yCanvas + 120, 900, 250);
			 this.idSkill = 1;
		}

	}
	
	this.unstopBabel = function(){
		if (getCar().xCanvas + 150   > this.xCanvas)
		{
			getCar().hp = 0;
		}
	}
	
	this.moveRandom = function(){
		
		if(this.firstMove && this.xCanvas > 800)
		{
			this.xCanvas -= 3;
		}
		else
			this.firstMove = false;
		
		if (this.moveID == 0 && this.firstMove == false) 
			this.moveID = Math.floor((Math.random() * 4 + 1));
		
		if(this.moveID == 1 && this.xCanvas < 1200 && this.yCanvas < 200)
		{
			this.xCanvas++;
			this.yCanvas++;
		}
		else if (this.moveID == 2 && this.xCanvas > 500 && this.yCanvas > 50)
		{
			this.xCanvas--;
			this.yCanvas--;
		}
		else if (this.moveID == 3 && this.xCanvas < 800 && this.yCanvas < 100)
		{
			this.xCanvas++;
			this.yCanvas++;
		}
		
		else
			this.moveID = 0;
	}
}
 
var enemy = function(hp, locationX, locationY, widthE, heightE, widthImg, heightImg, standardX1, urlImg, walkingY, walkingF, dieY, dieF, dodge, usingSkill){
	// Health and delay 
	this.hp = hp;
	this.deplayhitMain = false;
	this.display = true;
	this.enemychangeFarm = true;
	this.delaySkill = false;
	this.dodge = dodge;
	this.usingSkill = usingSkill;
	this.delayDodge = false;
	this.visible = false;
	this.delayVisible = false;
	
	this.xCanvas = locationX;
	this.yCanvas = locationY;
	this.speed = 2;
	this.speedD = 50;
	this.degree = 0;
	this.width = widthE;
	this.height = heightE;
	
	//	Animation Enemy
	this.enemyWalking = {
		y : walkingY,
		farm : walkingF
	}

	this.enemyDie = {
		y : dieY,
		farm : dieF
	}
	
	this.enemySkill = {
		y : 0,
		farm : 5
	}
	
	
	this.standardX = standardX1;		//	Set Animation
	this.x = this.standardX;
	this.y = this.enemyWalking.y;
	this.totalFramX = this.enemyWalking.farm;
	this.currentFram = 0;
	this.ImgWidth = widthImg; // Img Standard
	this.ImgHeight = heightImg; // Img Standard
	this.animationFirst = true;
	this.shootA = false;
	
	this.imgObject = new Image();
	this.imgObject.src = urlImg;
	
	
	var self = this;
	
	

	this.draw = function(){
		//	Set Animation
			if(this.hp <= 0 && this.y != this.enemyDie.y)
			{
				setPlayerAnimation(this.enemyDie, this, "enemy");
				
				if(level == 1)
					this.x = 1377;	//	Special for levl 1
				
				this.animationFirst = true;
			}
			
			 if (self.currentFram == self.totalFramX -1 && this.y == this.enemySkill.y && this.shootA && this.usingSkill)	 //	USING SKILL
			 {
				var speed = 0;
				if (getCar().yCanvas > this.yCanvas)
				speed = -1;
				else if (getCar().yCanvas < this.yCanvas)
				speed = 1;
				// createArrow(this.xCanvas, this.yCanvas, 100, 50, 0.1, this, speed);
				this.shootA = false;
			 }				
			 
			 
			if(this.enemychangeFarm){
				
				if (self.currentFram < self.totalFramX - 1 )
				{
					if (self.animationFirst != true)
					{
						self.x -= self.ImgWidth;
						self.currentFram++;
					}
					this.enemychangeFarm = false;
					self.animationFirst = false;
					setTimeout(function(){self.enemychangeFarm = true;}, 100);
				}
				
				else if(self.currentFram == self.totalFramX - 1 && this.y == this.enemyDie.y)	//	Die Already
				{
					this.display = false;
				}
				
				else if (self.xCanvas <  window.innerWidth - 20 - 300 && self.currentFram == self.totalFramX - 1 && this.y == this.enemyWalking.y && this.usingSkill)	//	set skill
				{
					setPlayerAnimation(this.enemySkill, this, "enemy");	
					this.shootA = true;
				}
					
				else{	
					setPlayerAnimation(this.enemyWalking, this, "enemy");
				}
				
			}
		//	Draw Player
		ctx.save();
        ctx.translate(this.xCanvas + (this.width/2), this.yCanvas + (this.height/2));
        ctx.rotate(this.degree);
		ctx.drawImage(this.imgObject, this.x, this.y, this.ImgWidth, this.ImgHeight, this.width/2, this.height/2, this.width, this.height);
		ctx.restore();
		
		if(this.hp != 0)
		{
			if(this.usingSkill)
			{
				if (self.xCanvas >  window.innerWidth - 20 - 500)
				{
					self.followMain();
					self.hitMain();
					self.doggeBullet();
				}
			}
			else
			{
				self.followMain();
				self.hitMain();
				self.doggeBullet();
				self.skill();
				self.checkVisible();
			}
		}
	}
	
	this.checkVisible = function(){	//	Set Visible
		if(this.visible && this.delayVisible && level == 2){
			setTimeout(function(){self.visible = false;}, 2000);
			this.delayVisible = false;
		}
		else if (!this.visible && !this.delayVisible && level == 2){
			setTimeout(function(){self.visible = true;}, 5000);
			this.delayVisible = true;
		}
		if(this.visible){
		ctx.font="30px Comic Sans MS";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		ctx.fillText("Visible", this.xCanvas + this.width, this.yCanvas+this.height);
		}
		
	}
	
	this.doggeBullet = function()
	{
		if(this.delayDodge != true && this.dodge)
		{
			for (var i in bulletList)
			{
				if (bulletList[i].xCanvas > this.xCanvas - this.width/2 && bulletList[i].xCanvas < this.xCanvas + this.width && bulletList[i].yCanvas < this.yCanvas + this.height  &&   bulletList[i].yCanvas > this.yCanvas - 5)
				{
					if(this.yCanvas > 232)
						this.speedD = -50;
					else if(this.yCanvas < 4)
						this.speedD = 50;
					this.yCanvas += this.speedD;
						 this.delayDodge = true;
						 setTimeout( function(){self.delayDodge = false;}, 7000);
						 return;
				}
			}
		}
	}
	
	this.skill = function()
	{
		if(this.imgObject.src.indexOf("image/bosslevel2.png") >= 0)
		{
			self.hpBar();
			if(this.delaySkill != true){
			createFireball(this.xCanvas + 100, this.yCanvas + 80, 180, 130, 0);
			this.delaySkill = true;
			setTimeout(function(){self.delaySkill = false;}, 7000);
			}
		}
	}
		
	this.hpBar = function(){
		var hpDraw = (200 / 50) * this.hp;
		if (hpDraw > 200)
			hpDraw = 200;
		else if (hpDraw < 0)
			hpDraw = 0;
		ctx.beginPath();
		ctx.lineWidth = "6";
		ctx.strokeStyle = "#663333";
		ctx.rect(500, 40, 200, 30); 
		ctx.stroke();
		if (hpDraw != 0){
			var grd = ctx.createLinearGradient(480, 0, 700, 0);
			grd.addColorStop(0, "DarkOliveGreen ");
			grd.addColorStop("0.2", "DarkGray");
			grd.addColorStop(1, "FireBrick");
			ctx.fillStyle = grd;
			ctx.fillRect(500+3, 40+4, hpDraw - 6, 29 - 5);
			ctx.lineWidth = "1";
		}
	}
	
	this.hitMain = function()
	{
		if (this.xCanvas < getCar().xCanvas + 5 && this.deplayhitMain != true)
		{
			getCar().hp--;
			this.deplayhitMain = true;
			setTimeout(function(){self.deplayhitMain = false;}, 2000);
		}
	}
	
	this.followMain = function()
	{
		if (getCar().xCanvas - getCar().width / 2 > this.xCanvas)
		this.xCanvas += this.speed;
		else
		this.xCanvas -= this.speed;
		
		if (getCar().yCanvas - 60 > this.yCanvas && getCar().xCanvas + 350 > this.xCanvas)
		this.yCanvas += this.speed;
		else if (getCar().yCanvas - 60 < this.yCanvas && getCar().xCanvas + 350  > this.xCanvas)
		this.yCanvas -= this.speed;
	
	}
}




var mainCar = function(xcanvas, ycanvas){
	this.xCanvas = xcanvas;
	this.yCanvas = ycanvas;
	this.degree = 0;
	this.go = 2;	//	Speed of Car
	this.hp = 50;
	this.width = 110;
	this.height = 100;
	this.armor = 1;
	this.shooting = true;	//	Car Deplay
	this.changeFarm = true;
	
	//	Key is press
	this.leftkey = false;
	this.rightkey = false;
	this.upkey = false;
	this.downkey = false;
	this.createBullet = false;
	
	//	ANIMATION
	this.x = 0;
	this.y = mainWalking.y;
	this.totalFramX = mainWalking.farm;//  Edit
	this.currentFram = 0;
	this.ImgWidth = 83; // Img Standard
	this.ImgHeight = 90; // Img Standard
	
	this.image = new Image();
	this.image.src = "image/main.png";
	
	var self = this;
	
	this.checkKey = function(){
		if (this.y != mainDie.y){
		if(this.leftkey)
			this.degree -= degreeChange;
		if(this.rightkey)
			this.degree += degreeChange;
		if(this.upkey)
			this.goStraight();
		if (this.downkey)
			this.goBack();
		if (this.createBullet)
		{
			//TODO: Sound bullet
			if (self.shooting){
				var yBullet = self.yCanvas - 20;
				var degreetemp = this.degree;
				for (var i = 0; i < this.armor; i++)
				{
					createBulletItem(self.xCanvas + 50, yBullet + 30, degreetemp, 10, 70, 70); 
					degreetemp += 0.1;
				}
				// createBulletItem(self.xCanvas + 50, yBullet + 30, this.degree + 0.1, 10, 70, 70); 
				// createBulletItem(self.xCanvas + 50, yBullet + 30, this.degree + 0.2, 10, 70, 70); 
				self.shooting = false;
				setPlayerAnimation(mainShooting, this, "player");
				setTimeout(function(){self.shooting = true;}, 200);
			}
		}			
		}
			
	}
	
	this.drawOnly = function(){
		ctx.save();
		
		if(this.hp <= 0 && this.y != mainDie.y)
			{
				setPlayerAnimation(mainDie, this, "player");
			}

		//	Set Animation
		if(self.changeFarm){
			if (self.currentFram < self.totalFramX - 1 ){
				self.x += self.ImgWidth;
				self.currentFram++;
				self.changeFarm = false;
				setTimeout(function(){self.changeFarm = true;}, 100);
			}
			
			else if(self.currentFram == self.totalFramX - 1 && this.y == mainDie.y)	//	Die Already
			{
				gameStop = true;
				var messenger = confirm("Want to try again?")
				if (messenger)
					location.reload();
				else
					ThanksForPlay();
			}
			
			else{	
				setPlayerAnimation(mainWalking, this, "player")
			}
			
		}
		//	Draw Player
        ctx.translate(this.xCanvas + (this.width/2), this.yCanvas + (this.height/2));
        ctx.rotate(this.degree);
		ctx.drawImage(this.image,this.x, this.y, this.ImgWidth, this.ImgHeight, this.width/2, this.height/2, this.width, this.height);
		ctx.restore();	
		this.hpBar();	//	BAR
	}
	
	this.hpBar = function(){
		var hpDraw = (150 / 10) * this.hp;
		// if (this.hp > 10)
			// this.hp = 10;
		if (this.hp < 0)
			this.hp = 0;
		ctx.beginPath();
		ctx.lineWidth = "6";
		ctx.strokeStyle = "#663333";
		ctx.rect(20, 20, 150, 30); 
		ctx.stroke();
		if (this.hp > 0){
			var drawGra = ctx.createLinearGradient(0, 0, 170, 0);
			drawGra.addColorStop(0, "black");
			drawGra.addColorStop(0.5, "red");
			drawGra.addColorStop(1, "white");
			ctx.fillStyle = drawGra;
			ctx.fillRect(19+4, 19+4, hpDraw - 6, 29 - 5);
			ctx.lineWidth = "1";
		}
	}
	
	this.goStraight = function() {
	var unMove = false;
    for (var key in enemyList){
		if (enemyList[key].xCanvas < self.xCanvas + 5 && enemyList[key].display)
			unMove = true;
	}
	if(unMove != true){
        this.xCanvas += this.go * Math.cos(this.degree);
	    this.yCanvas += this.go * Math.sin(this.degree);}
    }
	
	this.goBack = function(){
		this.xCanvas -= this.go * Math.cos(this.degree);
        this.yCanvas -= this.go * Math.sin(this.degree);
	}	
}

var fireOfBoss = function(xcanvas, ycanvas, width, height){
	this.xCanvas = xcanvas;
	this.yCanvas = ycanvas;
	this.perWidth = width/3;
	this.width = this.perWidth;
	this.height = height;
	this.delay = false;
	this.cout = 0;
	this.ImgWidth = 0;
	this.ImgHeight = 240;
	this.display = true;
	this.time = 300;
	this.hurt = true;
	var self = this;
	this.draw = function(){
		ctx.drawImage(fireImg, 0, 0, this.ImgWidth, this.ImgHeight, this.xCanvas, this.yCanvas, this.width, this.height);
		self.checkMainTouch();
		if (this.cout == 3 && this.delay != true)
			this.display = false;
		else
		{
			if(this.delay == false){
			this.ImgWidth += 204;
			this.width += this.perWidth;
			this.xCanvas -= this.perWidth;
			this.cout++;
			this.delay = true;
			if (this.cout == 3)
				this.time = 1000;
			setTimeout(function(){self.delay = false;}, this.time);
			}
		}
	}
	
		this.checkMainTouch = function(){
		if(getCar().yCanvas > 90 && getCar().yCanvas < 365 && this.hurt && this.cout == 3)
		{
			// alert("OK");
			this.hurt = false;
			getCar().hp -= 1;
		}
	}
}
var fireball = function(xcanvas, ycanvas, width, height, degree){
	this.xCanvas = xcanvas;
	this.yCanvas = ycanvas;
	this.width = width;
	this.height = height;
	this.display = true;
	this.image = new Image();
	this.image.src = "image/fireball.png";
	this.degree = degree;
	this.speed = 6;
	
	var self = this;
	
	var car = getCar();
	
	this.draw = function (){
		if(this.display != true)
			return;
		if(car.xCanvas > this.xCanvas && car.xCanvas < this.xCanvas + this.width/2 &&  car.yCanvas  <	this.yCanvas + 150 &&   getCar().yCanvas  > this.yCanvas - 50)
		{
			this.display = false;
			car.hp -= 1;
			return;
		}
		else if	(this.xCanvas < - 330)
		{
			this.display = false;
			return;
		}
		
		
		// this.xCanvas -= 5;
		this.xCanvas -= this.speed * Math.cos(this.degree);
		this.yCanvas -=  0.5 * Math.sin(this.degree);
		ctx.save();
        ctx.translate(this.xCanvas + (this.width/2), this.yCanvas + (this.height/2));
		ctx.drawImage(this.image, this.width/2, this.height/2, this.width, this.height);
		ctx.restore();
	}
	
}


var Object = function(xcanvas, ycanvas, totalFramX, ImgWidth, ImgHeight, type){
	this.xCanvas = xcanvas;
	this.yCanvas = ycanvas;
	this.width = 180;
	this.height = 130;
	this.display = true;
	this.deplayChange = true;
	
	//	Animation
	this.x = 0;
	this.y = 0;
	this.totalFramX = totalFramX;
	this.currentFram = 0;
	this.ImgWidth = ImgWidth; // Img Standard
	this.ImgHeight = ImgHeight; // Img Standard
	
	if (type == "heart")
		this.img = heartImg;
	else
		this.img = starImg;
	
	var self = this;
	
	this.draw = function (){
		if(this.deplayChange){
			if (self.currentFram < self.totalFramX - 1 )
			{
				self.x += self.ImgWidth;
				self.currentFram++;
				this.deplayChange = false;
				setTimeout(function(){self.deplayChange = true;}, 100);
			}
			else
			{
				this.x = 0;
				this.currentFram = 0;
			}
	}
		ctx.save();
        ctx.translate(this.xCanvas + (this.width/2), this.yCanvas + (this.height/2));
		ctx.drawImage(this.img, this.x, this.y, this.ImgWidth, this.ImgHeight, this.width/2, this.height/2, this.width, this.height);
		ctx.restore();
					
}
}


var tree = function(xcanvas, ycanvas){
	
	this.xCanvas = xcanvas;
	this.yCanvas = ycanvas;
	this.width = 180;
	this.height = 130;
	this.display = true;
	
	var self = this;
	
	this.draw = function (){
		ctx.save();
        ctx.translate(this.xCanvas + (this.width/2), this.yCanvas + (this.height/2));
		ctx.drawImage(treeImg, this.width/2, this.height/2, this.width, this.height);
		ctx.restore();
	}	
}

var arrowEnemy = function(xcanvas, ycanvas, width, height, degree, object, speed){
	this.xCanvas = xcanvas;
	this.yCanvas = ycanvas;
	this.width = width;
	this.height = height;
	this.degree = degree;
	this.speed = speed;
	this.display = true;
	this.checkHalfWay = true;
	this.touchOne = true;
	
	this.draw = function()
	{
		
		this.xCanvas -=	 3 * Math.cos(this.degree);
		if (this.speed > 0 )
		this.yCanvas -=  3 * Math.sin(this.degree);
		else 
		this.yCanvas +=  3 * Math.sin(this.degree);
		ctx.save();
		ctx.translate(this.xCanvas + (object.width/2), this.yCanvas + (object.height/2));
		ctx.rotate(this.degree);
		ctx.drawImage(arrowImg, object.width/2, object.height/2, this.width, this.height);
		ctx.restore();
		
		if (this.touchOne && getCar().xCanvas - (2 * Math.cos(degreeChange)) > this.xCanvas && getCar().xCanvas - (2 * Math.cos(degreeChange))< this.xCanvas + this.width/2 &&  getCar().yCanvas - 39 < this.yCanvas + this.height  &&   getCar().yCanvas + 39 > this.yCanvas){
			getCar().hp -= 5;
			this.touchOne = false;
			this.display = false;
			return;
		}
		else if	(this.xCanvas < - 330)
		{
			this.display = false;
			return;
		}
	}
}


function createEnemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, type, dodge, createEnemy)
{
	if (type == "1")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv1.png", 0, 8, 187, 6, dodge, createEnemy);
	else if (type == "2")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv2.png", 0, 5, 160, 5, dodge, createEnemy);
	else if (type == "2.1")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv2_1.png", 105, 11, 0, 8, dodge, createEnemy);
	else if (type == "2.2")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv2_2.png", 0, 8, 108, 7, dodge, createEnemy);
	else if (type == "2.3")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv2_3.png", 0, 16, 78, 6, dodge, createEnemy);
	else if (type == "3")	//	EDIT LATER
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv3.png", 122, 8, 0, 5, dodge, createEnemy);
	else if (type == "3.1")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv3_1.png", 216, 14, 108, 6, dodge, createEnemy);
	else if (type == "3.2")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv3_2.png", 89, 6, 0, 4, dodge, createEnemy);
	else if (type == "3.3")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv3_3.png", 72, 9, 0, 5, dodge, createEnemy);
	else if (type == "3.4")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv3_4.png", 50, 13, 0, 7, dodge, createEnemy);
	else if (type == "3.5")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/zombielv3_5.png", 114, 9, 0, 5, dodge, createEnemy);
	else if (type == "bosslv2")
		enemyList[totalEnemy] = new enemy(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/bosslevel2.png", 0, 12, 187, 5, dodge, createEnemy);
	else if (type == "bosslv3")
		enemyList[totalEnemy]= new boss(hp, xE, yE, widthE, heightE, widthImg, heightImg, standardX1, "image/bosslevel3.png", 0, 11, 500, 9)
	totalEnemy++;
}


function createBulletItem(xCar, yCar, degreeCar, speedTem, widthTem, heightTem)
{
	var bulletTem = {
		xCanvas : xCar,
		yCanvas : yCar,
		degree : degreeCar,
		speed : speedTem,
		width : widthTem,
		height : heightTem,
		treeID : null,
		display : true
	}
	bulletList[totalBullet] = bulletTem;
	totalBullet++;
}

function createArrow(xcanvas, ycanvas, width, height, degree, object, speed)
{
	arrowEnemyList[totalArrow] = new arrowEnemy(xcanvas, ycanvas, width, height, degree, object, speed);
	totalArrow++;
}

function createFire(xcanvas, ycanvas, width, height)
{
	// TODO: Sound here
	fireList[totalfire] = new fireOfBoss(xcanvas, ycanvas, width, height);
	totalfire++;
}

function createFireball(xcanvas, ycanvas, width, height, degree)
{
	fireballList[totalFireball] = new fireball(xcanvas, ycanvas, width, height, degree);
	totalFireball++;
}

function createStar()	// heartList[currentHeart] = new heart(xCreate, yCreate, 6, 300, 216, "star");
{
	var yCreate = Math.floor((Math.random() * 230) + 20);
	var xCreate = Math.floor((Math.random() * car.xCanvas + 100) + canvasWidth);
	starList[totalStar] = new Object(xCreate, yCreate, 6, 300, 216, "star");
}

function drawBackground()
{
	this.x = 0;
	this.y = 0;
	this.x2 = 0;
	this.y2 = 0;
	this.currentDraw = "bg1";
	this.draw = function()
	{
		if (this.x < -(canvasWidth) && this.currentDraw == "bg1")	// check is full screen
		{
			this.currentDraw = "bg2";
			
			if(readyLv2)		// change new background level 2 
			{	
				if(backgroundImg2.src.indexOf("image/roadlv2.jpg") >= 0)
				{
					backgroundImg1.src = "image/roadlv2.jpg";
					readyLv2 = false;
					level = 2;
					setVariable(2);
					setText("Round 2");
					treeImg.src = "image/treelv2.png";
				}
				else
				backgroundImg1.src = "image/roadlv2.jpg";
			}
			
			if(readyLv3)		// change new background level 2 
			{	
				if(backgroundImg2.src.indexOf("image/roadlv3.jpg") >= 0)
				{
					backgroundImg1.src = "image/roadlv3.jpg";
					readyLv3 = false;
					level = 3;
					setVariable(3);
					setText("Round 3");
					treeImg.src = "image/treelv3.png";
				}
				else
				backgroundImg1.src = "image/roadlv3.jpg";
			}
			
		}
		else if (this.x2 < -(canvasWidth) && this.currentDraw == "bg2")	// check is full screen
		{
			this.currentDraw = "bg1";
			
			if(readyLv2)
			{			// change new background level 2
				if(backgroundImg1.src.indexOf("image/roadlv2.jpg") >= 0)
				{
					backgroundImg2.src = "image/roadlv2.jpg";
					readyLv2 = false;
					level = 2;
					setVariable(2);
					setText("Round 2");
					treeImg.src = "image/treelv2.png";
				}
				else
				backgroundImg2.src = "image/roadlv2.jpg";
			}
			
				if(readyLv3)
			{			// change new background level 2
				if(backgroundImg1.src.indexOf("image/roadlv3.jpg") >= 0)
				{
					backgroundImg2.src = "image/roadlv3.jpg";
					readyLv3 = false;
					level = 3;
					setVariable(3);
					setText("Round 3");
					treeImg.src = "image/treelv3.png";
				}
				else
				backgroundImg2.src = "image/roadlv3.jpg";
			}
			
			
		}
		
		if (this.currentDraw == "bg1")	// Draw depend status
		{
		this.x -= 3;
		this.x2 = this.x + canvasWidth;
		ctx.clearRect(this.x, this.y, canvasWidth, canvasHeight);
		ctx.drawImage(backgroundImg1, this.x, this.y, canvasWidth, canvasHeight);
		ctx.drawImage(backgroundImg2, this.x2, this.y2, canvasWidth, canvasHeight);
		}
		
		else if (this.currentDraw == "bg2")
		{
		this.x2 -= 3;
		this.x = this.x2 + canvasWidth;
		ctx.clearRect(this.x, this.y, canvasWidth, canvasHeight);
		ctx.drawImage(backgroundImg1, this.x, this.y, canvasWidth, canvasHeight);
		ctx.drawImage(backgroundImg2, this.x2, this.y2, canvasWidth, canvasHeight);
		}
		
	}
}


function roundStart(text)
{
	this.countText = 0;		
	this.round = text;	
	this.deplay = false;
	var self = this;
	this.param2 = null;
	this.art = function(){
	 if (this.countText < this.round.length && this.deplay == false) {
		if (this.param2 != null)
		document.getElementById("round").style.left = this.param2;
	
		document.getElementById("round").style.padding = "5px";
		document.getElementById("round").innerHTML += this.round.charAt(this.countText);
		if (this.countText == this.round.length - 1 ){
			setTimeout(function(){	document.getElementById("round").style.left="40%";document.getElementById("round").innerHTML = "";document.getElementById("round").style.padding = "0px";self.param2 = null;}, 2000);
			this.deplay = true;
		}
		else{
		this.countText++;
		this.deplay = true;
		setTimeout(function(){self.deplay = false;}, 50);
		}
	 }
	}
}

