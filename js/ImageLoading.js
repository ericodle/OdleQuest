var mapWallPic1 = document.createElement('img');
var mapWallPic2 = document.createElement('img');
var mapDoorPic = document.createElement('img');
var mapDoorFramePic = document.createElement('img');
var anemone = document.createElement('img');
var mapForceFieldPic = document.createElement('img');
var spaceMarinePic = document.createElement('img');
var froggy = document.createElement('img');
var skyBox1 = document.createElement('img');
var skyBox2 = document.createElement('img');
var skyBox3 = document.createElement('img');
var sem1 = document.createElement('img');
var sem2 = document.createElement('img');
var sem3 = document.createElement('img');
var sem4 = document.createElement('img');
var sem5 = document.createElement('img');

var imagesToLoad = 0;

var smSprite1, smSprite2, smSprite3, smSprite4, doSprite1;
var spriteList = [];
var spriteDistance = [];
var spriteOrder = [];//Stores sorted spriteList indexes

function loadImages() {
	
	var imageList = [
		{varName: mapWallPic1, fileName: 'sea_wall.png'},
		{varName: mapWallPic2, fileName:  'sea_wall.png'},
		{varName: mapDoorPic, fileName: 'map_door.png'},
		{varName: mapDoorFramePic, fileName: 'map_door_frame.png'},
		{varName: anemone, fileName: 'anemone_1.png'},
		{varName: mapForceFieldPic, fileName: 'map_force_field.png'},
		{varName: froggy, fileName: 'froggy_4.png'},
		{varName: skyBox1, fileName: 'skybox1.png'},
		{varName: skyBox2, fileName: 'skybox2.png'},
		{varName: skyBox3, fileName: 'skybox3.png'},
		{varName: sem1, fileName: 'sem1_1.png'},
		{varName: sem2, fileName: 'sem2_3.png'},
		{varName: sem3, fileName: 'sem3_1.png'},
		{varName: sem4, fileName: 'sem4_1.png'},
		{varName: sem5, fileName: 'sem5_1.png'}
	]
	
	imagesToLoad = imageList.length;
	
	for (var i=0; i<imageList.length; i++) {
		if(imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].fileName)
		}
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.src = 'images/'+fileName;
	imgVar.onload = function() {countImagesOrStartGame()};
}	

function countImagesOrStartGame() {//Ensure that all images are loaded before trying to do anything with them.
	imagesToLoad--;
	if (imagesToLoad == 0) {
		loadSprites();
		frameCount = 0;
		lastFrame = performance.now();
		update();
	}
}

function loadSprites() {
	//Pixel art
	doSprite1 = new Sprite(froggy, 11, 11, 0, 256, 256);
	spriteList.push(doSprite1);
	doSprite2 = new Sprite(anemone, 12, 12, 0, 256, 256);
	spriteList.push(doSprite2);
	//SEM pics
	doSprite3 = new Sprite(sem1, 7, 5, 0, 1248, 1847);
	spriteList.push(doSprite3);
	doSprite4 = new Sprite(sem2, 5, 5, 0, 1016, 826);
	spriteList.push(doSprite4);
	doSprite5 = new Sprite(sem3, 3, 7, 0, 1239, 446);
	spriteList.push(doSprite5);
	doSprite6 = new Sprite(sem4, 5, 9, 0, 826, 799);
	spriteList.push(doSprite6);
	doSprite7 = new Sprite(sem5, 7, 9, 0, 759, 831);
	spriteList.push(doSprite7);

	for (var i=0; i<spriteList.length; i++) {
		spriteList[i].init();
	}
	
	spriteOrder.length = spriteList.length;
}
