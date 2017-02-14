var locationArray = [];

function Location(isShip){
	this.isShip = isShip;
	this.hit = false;
	this.display = '*';

}
var shipsBeingBuilt = 20

for (var i = 0; i < 10; i++){
	var newArray = [];
	for (var innerI = 0; innerI < 10; innerI++){
		var isGoingToBeShip = false;
		newArray.push(new Location(isGoingToBeShip));
		}
	locationArray.push(newArray);
	// locationArray[i][(Math.floor((Math.random() * 10) + 1))].isShip = true;
}



var x = Math.floor((Math.random() * 9) + 1);
var y = Math.floor((Math.random() * 9) + 1);

while (shipsBeingBuilt > 0){
	if (locationArray[x][y].isShip === false){
		locationArray[x][y].isShip = true;
		shipsBeingBuilt--;
	}

	x = Math.floor((Math.random() * 9) + 1);
	y = Math.floor((Math.random() * 9) + 1);
	// x ++;
 //  if (x >= 9){
 //    x = 0;
 //    y++;
 //  }
 //  if (y >= 9){
 //    y = 0;
 //  }
// while(shipsBeingBuilt > 0){
//   if (Math.floor((Math.random() * 9) + 1) === 1 && shipsBeingBuilt > 0 && locationArray[x][y].isShip === false){
//     locationArray[x][y].isShip = true;
//     shipsBeingBuilt --;
//   }
//   x ++;
//   if (x >= 9){
//     x = 0;
//     y++;
//   }
//   if (y >= 9){
//     y = 0;
//   }
  // console.log(x, y)
}
console.log(locationArray)

function displayBoard(board){
	var display = '';
	for (var i = 0; i < board.length; i++){
		var row = '';
		for (var j = 0; j < board[i].length; j++){
			display += board[i][j].display + ' ';
		}
		display += '\n'
	}
	console.log(display);
}

displayBoard(locationArray);
var read = require('readline-sync');
var sunkCount = 0;

function getCoords(){
	do {
		var x = parseInt(read.keyIn('Choose a coordinate 0-9: '));
		var y = parseInt(read.keyIn('Choose a coordinate 0-9: '));
	} while (x < 0 || x > 9 || y < 0 || y > 9);
	updateBoard(x, y);
}

function updateBoard(x, y){
	if (locationArray[x][y].isShip){
		locationArray[x][y].display = 'X';
		sunkCount++;
	} else {
		locationArray[x][y].display = 'M'
	}
	displayBoard(locationArray)
}

function playBattleship(){
	console.log('Welcome to B-Shizzy');
	console.log('fresh water everywhere \n');
	displayBoard(locationArray);

	while (sunkCount < 4){
		getCoords();
	}

	console.log("You've won!");
}

playBattleship();

// var coordinates = read.question('What are the coordinates?');
// var coordinates = parseInt(coordinates);
// console.log(typeof coordinates);
// console.log(coordinates)

