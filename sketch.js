var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

//var cars, car1, car2, car3, car4;
var planes, plane1, plane2, plane3, plane4;

var track, plane1_img, plane2_img, plane3_img, plane4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  plane1_img = loadImage("../images/plane1.jpg");
  plane2_img = loadImage("../images/plane2.PNG");
  plane3_img = loadImage("../images/plane3.jpg");
  plane4_img = loadImage("../images/plane4.PNG");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
