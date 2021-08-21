
	
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	
//	Game
	var displayHeart = true;
	
	var currentHeart = 0;
	var heartList = {};
	var totalHeart = 25;
	var treeList = {};
	var totalTree = 5;
	var enemySpam = 0;
	var deplay = false;	//deplay draw enemy
	var roundStart = new roundStart("Round 1");
	var bossLevel2 = false;
	var bossLevel3 = false;

	
	
//	Round
	var secondAttack = false;
	var secondAttackLocation = [100,200,10,100,200];
	var currentSecondAttack = 0;
	var typeEnemy = [0,0,0,0];
	var enemyTotal = 10;
	var readyLv2 = false;
	var readyLv3 = false;
	var	timeSpam = 2000;
	var amoutSpam = 1;
	var heartImg = new Image();
	heartImg.src = "image/heart.png";
	var starImg = new Image();
	starImg.src = "image/star.png";
	var treeImg = new Image();
	treeImg.src = "image/tree.png";
	var backgroundImg1 = new Image();
	backgroundImg1.src = "image/road.jpg";
	var backgroundImg2 = new Image();
	backgroundImg2.src = "image/road.jpg";
	var bg = new drawBackground();


	var bulletImg = new Image();
	bulletImg.src = "image/bullet.png";
	
	var fireImg = new Image();
	fireImg.src = "image/fire.png";
	
	var arrowImg = new Image();
	arrowImg.src = "image/arrow.png";

    var car = new mainCar(25,100);

function setText(text, param2){
	roundStart.countText = 0;		
	roundStart.round = text;	
	roundStart.deplay = false;
	if (param2 != null)
		roundStart.param2 = param2; //	Set position, default center
}

function checkEnemyTouchBullet(enemyObj)	//	Null for check tree
{
	for (var i in bulletList)
	{
		if(bulletList[i].xCanvas > canvasWidth){	//	Far then Width Sceen
			delete bulletList[i];
			continue;
		}
		for (var treeNum in treeList)	//	Check touch Tree
		{
			if(bulletList[i].treeID == null && checkTouch(bulletList[i], treeList[treeNum]) ){
				bulletList[i].treeID = treeNum;
				continue;
			}
		}
		
		if(enemyObj !=null && enemyObj.visible == false && bulletList[i] != null && bulletList[i].treeID == null && checkTouch(bulletList[i], enemyObj) && enemyObj.display == true)	//	Check touch enemy
		{
			enemyObj.hp--;
			delete bulletList[i];
		}
	}
}

function arrowUpdate()
{
	for (var i in arrowEnemyList)
	{
		if (arrowEnemyList[i].display)
			arrowEnemyList[i].draw();
		else
			delete arrowEnemyList[i];
	}
}

function fireballUpdate()
{
	for (var i in fireballList)
	{
		if (fireballList[i].display)
			fireballList[i].draw();
		else
			delete fireballList[i];
	}
}

function fireBossUpdate()
{
	for (var i in fireList)
	{
		if (fireList[i].display)
			fireList[i].draw();
		else
			delete fireList[i];
	}
}

function skillEnemyUpdate()
{
	fireBossUpdate()
	fireballUpdate();
	arrowUpdate();
}

function bulletUpdate()
{
	for (var i in bulletList)
	{
		if(bulletList[i].display)
		{
			if(bulletList[i].treeID != null){
				bulletList[i].xCanvas -= 3.005 * Math.cos(bulletList[i].degree);
			}
			else
			{
				bulletList[i].xCanvas += bulletList[i].speed * Math.cos(bulletList[i].degree);
				bulletList[i].yCanvas +=  bulletList[i].speed * Math.sin(bulletList[i].degree);
			}	
		ctx.save();
		ctx.translate(bulletList[i].xCanvas + (car.width/2), bulletList[i].yCanvas + (car.height/2));
		ctx.rotate(bulletList[i].degree);
		ctx.drawImage(bulletImg, car.width/2, car.height/2, bulletList[i].width, bulletList[i].height);
		ctx.restore();
		}
	}
	checkEnemyTouchBullet(null);	
}

function enemyUpdate()
{
	if (level == 1 && secondAttack == false)	
	{
		if(enemySpam <= enemyTotal - 1 && deplay != true )		//	Level 1
		{
			for (var i = 1; i <= amoutSpam; i++)
			{
				var yCreate;
				if(enemySpam >= (enemyTotal/2) )
				{
					yCreate = secondAttackLocation[currentSecondAttack];
					currentSecondAttack++;
				}
				else
				{
					yCreate = Math.floor((Math.random() * 230) + 20);
				}
				createEnemy(5, canvas.width, yCreate, 180, 130, 245, 187, 1622, "1", false, false);
				enemySpam++;
				if(enemySpam == enemyTotal)
					break;
			}
				deplay = true;
				if (enemySpam == (enemyTotal/2) ){	//	Check for Incoming
					secondAttack = true;
					deplay = false;
					timeSpam = 1000;
					amoutSpam = 2;
					checkCleanEnemy("loop");
			}
			else if (enemySpam <= enemyTotal )
				setTimeout(function(){deplay = false;}, timeSpam);	// If not deplay a function
		}
		
		if (enemySpam >= enemyTotal && checkCleanEnemy()){	//Ready for lv2
			readyLv2 = true;
			secondAttack = true;
			recreateHeart();
			// TODO: Sound
			setText("Are you ready for Round 2?","20%");
			createStar();
		}
	}
	
	if (level == 2 && secondAttack == false)	//	Level 2
	{
		if(bossLevel2 == false && enemySpam >= enemyTotal && checkCleanEnemy())
		{
				recreateHeart();
				createEnemy(50, canvas.width, getCar().yCanvas - 100, 280, 200, 432, 187, 4752, "bosslv2", true, false);
				bossLevel2 = true;
		}
		if(enemySpam <= enemyTotal - 1 && deplay != true )		
		{
			for (var i = 1; i <= amoutSpam; i++)
			{
				var yCreate;
				var randomType;
				if(enemySpam >= (enemyTotal/2) )
				{
					yCreate = secondAttackLocation[currentSecondAttack];
					currentSecondAttack++;
				}
				else
				{
					yCreate = Math.floor((Math.random() * 230) + 20);
				}
				while(true)
				{
					randomType	=  Math.floor((Math.random() * 5) + 1);
					if (randomType == 1 && typeEnemy[0] < enemyTotal / 4){
						createEnemy(6, canvas.width, yCreate, 210, 180, 374, 160, 1498, "2", false, false);						
						enemySpam++;
						typeEnemy[0]++;
						break;
					}
					if (randomType == 2 && typeEnemy[1] < enemyTotal / 4){
						createEnemy(8, canvas.width, yCreate, 180, 130, 120, 105, 1214, "2.1", true, false);	
						enemySpam++;
						typeEnemy[1]++;
						break;
					}
					if (randomType == 3 && typeEnemy[2] < enemyTotal / 4){
						createEnemy(5, canvas.width, yCreate, 180, 130, 120, 108, 880, "2.2", false, false);
						enemySpam++;
						typeEnemy[2]++;
						 break;
					}
					if (randomType == 4 && typeEnemy[3] < enemyTotal / 4){
						createEnemy(7, canvas.width, yCreate, 180, 130, 120, 76, 1838, "2.3", true, false);
						enemySpam++; 
						typeEnemy[3]++;
						break;
					}
				}
				if(enemySpam == enemyTotal)
					break;
			}
			deplay = true;
			
			if (enemySpam == (enemyTotal/2) )	//	Check for Incoming
			{	
				secondAttack = true;
				deplay = false;
				timeSpam = 1000;
				amoutSpam = 2;
				checkCleanEnemy("loop");
			}
			else if (enemySpam <= enemyTotal )
				setTimeout(function(){deplay = false;}, timeSpam);	// If not deplay a function
		}
		if (enemySpam >= enemyTotal && checkCleanEnemy() && bossLevel2)
		{	//Ready for lv3
			readyLv3 = true;
			secondAttack = true;
			setText("Are you ready for Round 3?","20%");
			recreateHeart();
		}
	}
		
		
		
	if (level == 3 && secondAttack == false)	//	Level 2
	{
		if(bossLevel3 == false && enemySpam >= enemyTotal && checkCleanEnemy())
		{
				recreateHeart();
				createEnemy(500, canvasWidth, 100, 700, 600, 490, 500, 5000, "bosslv3", false, false)
				bossLevel3 = true;
		}
		if(enemySpam <= enemyTotal - 1 && deplay != true )		
		{
			for (var i = 1; i <= amoutSpam; i++)
			{
				var yCreate;
				var randomType;
				if(enemySpam >= (enemyTotal/2) )
				{
					yCreate = secondAttackLocation[currentSecondAttack];
					currentSecondAttack++;
				}
				else
				{
					yCreate = Math.floor((Math.random() * 230) + 20);
				}
				while(true)
				{
					randomType	=  Math.floor((Math.random() * 7) + 1);
					if (randomType == 1 && typeEnemy[0] < enemyTotal / 6){
						createEnemy(6, canvas.width, yCreate, 210, 180, 150, 122, 1074, "3", false, false);						
						enemySpam++;
						typeEnemy[0]++;
						break;
					}
					if (randomType == 2 && typeEnemy[1] < enemyTotal / 6){
						createEnemy(5, canvas.width, yCreate, 180, 130, 150, 108, 1916, "3.1", false, true);
						enemySpam++;
						typeEnemy[1]++;
						break;
					}
					if (randomType == 3 && typeEnemy[2] < enemyTotal / 6){
						createEnemy(5, canvas.width, yCreate, 180, 130, 150, 89, 714, "3.2", false, false);
						enemySpam++;
						typeEnemy[2]++;
						 break;
					}
					if (randomType == 4 && typeEnemy[3] < enemyTotal / 6){
						createEnemy(5, canvas.width, yCreate, 180, 130, 150, 72, 1253, "3.3", false, false);	
						enemySpam++; 
						typeEnemy[3]++;
						break;
					}
					if (randomType == 5 && typeEnemy[4] < enemyTotal / 6){
						createEnemy(5, canvas.width, yCreate, 180, 130, 150, 50, 1707, "3.4", false, false);
						enemySpam++; 
						typeEnemy[4]++;
						break;
					}
					if (randomType == 6 && typeEnemy[5] < enemyTotal / 6){
						createEnemy(5, canvas.width, yCreate, 280, 130, 150, 114, 1218, "3.5", false, false);
						enemySpam++; 
						typeEnemy[5]++;
						break;
					}
				}
				if(enemySpam == enemyTotal)
					break;
			}
			deplay = true;
			
			if (enemySpam == (enemyTotal/2) )	//	Check for Incoming
			{	
				secondAttack = true;
				deplay = false;
				timeSpam = 1000;
				amoutSpam = 2;
				recreateHeart();
				createStar();
				checkCleanEnemy("loop");
			}
			else if (enemySpam <= enemyTotal )
				setTimeout(function(){deplay = false;}, timeSpam);	// If not deplay a function
		}
		if (enemySpam >= enemyTotal && checkCleanEnemy() && bossLevel3)
		{	//Ready for lv3
			//readyLv3 = true;
			secondAttack = true;
			setText("WINNER!!!!","40%");
		}
	}	
		
		
		
		
	displayEnemy();
	
}

function displayEnemy()
{
	for (var key in enemyList)	// Draw Enemy
	{	
		if (enemyList[key].display)
		{
			enemyList[key].draw();
			checkEnemyTouchBullet(enemyList[key]);	
		}
		else
			delete	enemyList[key];	//	Release if don't exist
	}
	
}

function checkCleanEnemy(agm)	//	null for default check
{
	var checking = false;
	for (var key in enemyList)
	{	
		if (enemyList[key].display)	//	Enemy still have
		{
			checking = true;
			if (agm == "loop"){
				setTimeout(function(){checkCleanEnemy("loop");}, 2000);	//	Continue Check
				return false;
			}			
		}
	}
	if (checking == false && level == 1 &&  agm == "loop")
	{	//	Enemy is empty and current level =	1 for Incoming!!!
		setText("Let's ready for Next Attack", "20%");
		setTimeout(function(){secondAttack = false; setText("Incoming!!!");}, 6000);
		recreateHeart()
		return;
	}
    else if (checking == false && level == 2 &&  agm == "loop")
	{	//	Enemy is empty and current level =	2 for Incoming!!!
		setText("Let's ready for Next Attack", "20%");
		setTimeout(function(){secondAttack = false; setText("Incoming!!!");}, 6000);
		recreateHeart()
		return;
	}
	else if (checking == false && level == 3 &&  agm == "loop")
	{	//	Enemy is empty and current level =	3 for Incoming!!!
		setText("Let's ready for Next Attack", "20%");
		setTimeout(function(){secondAttack = false; setText("Incoming!!!");}, 6000);
		recreateHeart()
		return;
	}
	else if (checking == false && agm == null)
		return true;
}


function carUpdate()
{
	car.checkKey();// 	Check key Press
	car.drawOnly();//	Draw Car
}

function getCar()
{
	return car;
}

function TreeAndHeart(){

	//	Heart
	if(currentHeart <= totalHeart - 1 && displayHeart){
		var yCreate = Math.floor((Math.random() * 230) + 20);
		var xCreate = Math.floor((Math.random() * car.xCanvas + 100) + canvasWidth);
		heartList[currentHeart] = new Object(xCreate, yCreate, 7, 100, 100, "heart");
		// heartList[currentHeart] = new heart(xCreate, yCreate, 6, 300, 216, "star");
		currentHeart++;
		displayHeart = false;
		setTimeout(function(){displayHeart = true;}, 4000);
	}
	
	for (var i in heartList)
	{	//	Draw and check Touch
		if (heartList[i].display){
			if	(heartList[i].xCanvas < - 330)
			{
					delete	heartList[i];
					continue;
			}
			heartList[i].xCanvas -= 3;
			heartList[i].draw();
		if (car.xCanvas - (2 * Math.cos(degreeChange)) > heartList[i].xCanvas && car.xCanvas - (2 * Math.cos(degreeChange))< heartList[i].xCanvas + heartList[i].width/2 &&  car.yCanvas - 39 < heartList[i].yCanvas + heartList[i].height  &&   car.yCanvas + 39 > heartList[i].yCanvas){
			if (10 - car.hp < 3)
				car.hp += 10 - car.hp;
			else
				car.hp += 3;
			delete heartList[i];
		}
		}
	}
	
	//	Tree
	var randomTree = Math.floor((Math.random() * 50) + 1);
	if(randomTree == 10){
		treeList[totalTree] = new tree(canvas.width, - 120);
		totalTree++;
	}
	
	for (var i in treeList){	
		if (treeList[i].display){
			treeList[i].xCanvas -= 3;
			treeList[i].draw();
		}
		if	(treeList[i].xCanvas < - 330){
			for (var bulletNum in bulletList){
				if(bulletList[bulletNum].treeID == i)
					delete	bulletList[bulletNum];
			}
			delete treeList[i];
		}
	}
}

function startUpdate(){
	
	for (var i in starList)
	{	//	Draw and check Touch
		if (starList[i].display){
			if	(starList[i].xCanvas < - 330)
			{
					delete	starList[i];
					continue;
			}
			starList[i].xCanvas -= 3;
			starList[i].draw();
		if (car.xCanvas - (2 * Math.cos(degreeChange)) > starList[i].xCanvas && car.xCanvas - (2 * Math.cos(degreeChange))< starList[i].xCanvas + starList[i].width/2 &&  car.yCanvas - 39 < starList[i].yCanvas + starList[i].height  &&   car.yCanvas + 39 > starList[i].yCanvas){
			getCar().armor++;
			delete starList[i];
		}
		}
	}
}

function recreateHeart()
{
		displayHeart = true;
		totalHeart += 5;
}

function setVariable(levelC)
{
	if(levelC == 2)
	{
		recreateHeart();
		enemySpam = 0;
		deplay = false;	//deplay draw enemy

		secondAttack = false;
		secondAttackLocation = [100,200,10,100,200,120,140,160,180,230];	//EDIT
		currentSecondAttack = 0;
		typeEnemy = [0,0,0,0];
		enemyTotal = 20;
		readyLv2 = false;
		timeSpam = 2000;
		amoutSpam = 1;
	
	}
	if(levelC == 3)
	{

		recreateHeart();
		enemySpam = 0;
		deplay = false;	//deplay draw enemy

		secondAttack = false;
		secondAttackLocation = [100,200,10,100,200,120,140,160,180,230,100,200,10,100,200];	//EDIT
		currentSecondAttack = 0;
		typeEnemy = [0,0,0,0,0,0];
		enemyTotal = 30;
		readyLv2 = false;
		timeSpam = 1000;
		amoutSpam = 1;
	
	}
	
	if(levelC == "Default")
	{
		
	}
}

function ThanksForPlay(){
	canvas.style.display = "none";
	var  endg = document.getElementById('image');
	endg.style.display ="block";
	var  endg = document.getElementById('butt');
	endg.style.display ="block";
}

function main()
{
	if(!gameStop)
	{
		roundStart.art();
		bg.draw();//	Draw background
		TreeAndHeart();
		startUpdate();
		carUpdate();
		enemyUpdate();
		bulletUpdate();
		skillEnemyUpdate();
		requestAnimationFrame(main);
	}
}



main();

  // check press key
 function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") 
        car.rightkey = true;
    
    else if(e.key == "Left" || e.key == "ArrowLeft") 
        car.leftkey = true;
    
	if(e.key == "ArrowUp") 
        car.upkey = true;
    
    else if(e.key == "ArrowDown") 
        car.downkey = true;
	
	 if(e.keyCode == 32)
		car.createBullet = true;
}
	
	// check release key
 function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") 
        car.rightkey = false;
    
    else if(e.key == "Left" || e.key == "ArrowLeft") 
        car.leftkey = false;
    
	if(e.key == "ArrowUp") 
        car.upkey = false;
    
    else if(e.key == "ArrowDown") 
        car.downkey = false;
	
		 if(e.keyCode == 32)
		car.createBullet = false;
}
	

