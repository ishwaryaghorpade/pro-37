var database;
var dog;
var bedroom, vaccination, foodstock, Garden, lazy, livingroom, washroom
var dogImg, happyDogImg, deadDogImg, vaccinatedDogImg, dogRunningImg, dogRunningLeftSideImg, lazyDogImg;
var bedRoomImg, gardenImg, livingRoomImg, washRoomImg;
var foodStockImg, milkImg;
var injectionImg, vaccinationChartImg;
var foodS = 20;
var lastFed = 0;
var foodObj = null;
var feedButton, addButton, deadButton, vaccinatedDogButton, bedRoomButton, vaccinationChartButton, foodStockButton, gardenButton, lazyDogButton, livingRoomButton, runningDogButton, runningDogLeftSideButton, vaccinateButton, washRoomButton, homeButton;

function preload()
{
  backgroundImg = loadImage("images/bg.png");
  dogImg = loadImage("images/Dog.png");
  happyDogImg = loadImage("images/happydog.png");
  deadDogImg = loadImage("images/deadDog.png");
  vaccinatedDogImg = loadImage("images/Vaccination.jpg");
  bedRoomImg = loadImage("images/Bed Room.png");
  vaccinationChartImg = loadImage("images/dogVaccination.png");
  foodStockImg = loadImage("images/Food Stock.png");
  gardenImg = loadImage("images/Garden.png");
  lazyDogImg = loadImage("images/Lazy.png");
  livingRoomImg = loadImage("images/Living Room.png");
  dogRunningImg = loadImage("images/running.png");
  dogRunningLeftSideImg = loadImage("images/runningLeft.png");
  washRoomImg = loadImage("images/Wash Room.png")

}


function setup(){

  createCanvas(800, 700);

  foodObj = new Food();

  dog = createSprite(650, 140);
  dog.scale = 0.3;
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happyDogImg);
  dog.addImage("dog3", deadDogImg);
  dog.addImage("dog4", vaccinatedDogImg);
  dog.addImage("dog5", lazyDogImg);
  dog.addImage("dog6", dogRunningImg);
  dog.addImage("dog7", dogRunningLeftSideImg);

  feedButton = createButton("FEED DOG");
  feedButton.position(500, 720);
  feedButton.mousePressed(feedDog);

  addButton = createButton("ADD BOTTLES");
  addButton.position(1000, 720);
  addButton.mousePressed(addFood);

  deadButton = createButton("DEAD DOG");
  deadButton.position(670, 720);
  deadButton.mousePressed(deadDog);

  vaccinatedDogButton = createButton("VACCINATE THE DOG");
  vaccinatedDogButton.position(660, 620);
  vaccinatedDogButton.mousePressed(vaccinatedDog);

  bedRoomButton = createButton("GO TO BED ROOM");
  bedRoomButton.position(670, 670);
  bedRoomButton.mousePressed(bedRoom);

  vaccinationChartButton = createButton("SEE VACCINATION CHART");
  vaccinationChartButton.position(960, 620);
  vaccinationChartButton.mousePressed(vaccinationChart);

  foodStockButton = createButton("^");
  foodStockButton.position(360, 720);
  foodStockButton.mousePressed(foodStock);
  
  gardenButton = createButton("GO TO GARDEN");
  gardenButton.position(360, 670);
  gardenButton.mousePressed(garden);
  
  lazyDogButton = createButton("LAZY DOG");
  lazyDogButton.position(830, 720);
  lazyDogButton.mousePressed(lazyDog);

  livingRoomButton = createButton("GO TO LIVING ROOM");
  livingRoomButton.position(830, 670);
  livingRoomButton.mousePressed(livingRoom);

  runningDogButton = createButton("DOG RUNNING RIGHT");
  runningDogButton.position(360, 620);
  runningDogButton.mousePressed(runRight);

  runningDogLeftSideButton = createButton("DOG RUNNING LEFT");
  runningDogLeftSideButton.position(1000, 670);
  runningDogLeftSideButton.mousePressed(runLeft);

  washRoomButton = createButton("GO TO WASHROOM");
  washRoomButton.position(500, 670);
  washRoomButton.mousePressed(washRoom);

}


function draw() {  

  background(backgroundImg);

  fill("white");
  textSize(15);
  if(lastFed>=12){
    text("Last Fed (approx timing) : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Fed (approx timing) : 12 AM",350,30);
   }else{
     text("Last Fed (approx timing) : "+ lastFed + " AM", 350,30);
   }

  foodObj.display();

  drawSprites();

}

function addFood(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  if(foodS > 0){
    dog.changeAnimation("dog2", happyDogImg);
    dog.scale = 0.3
    foodS--;
    foodObj.updateFoodStock(foodS);
    lastFed = hour();
    foodObj.updateLastFed(lastFed);
  }
}

function deadDog(){
  dog.changeAnimation("dog3", deadDogImg);
  dog.scale = 0.3
}

function vaccinatedDog(){
  dog.changeAnimation("dog4", vaccinatedDogImg);
  dog.scale = 0.5;
}

function bedRoom(){
  bedroom = createSprite(400,400,800,800);
  bedroom.addImage("bedroom", bedRoomImg);
  bedroom.scale = 1.6;
}

function vaccinationChart(){
  vaccination = createSprite(610,405,50,50);
  vaccination.addImage("vaccination", vaccinationChartImg);
  vaccination.scale = 0.4
}

function foodStock(){
  foodstock = createSprite(70,490,10,10);
  foodstock.addImage("foodstock", foodStockImg);
  foodstock.scale = 0.2
}

function garden(){
  Garden = createSprite(400,400,800,800);
  Garden.addImage("garden", gardenImg);
  Garden.scale = 1.6;
}

function lazyDog(){
  dog.changeAnimation("dog5", lazyDogImg);
  dog.scale = 0.4;
}

function livingRoom(){
  livingroom = createSprite(400,400,800,800);
  livingroom.addImage("living", livingRoomImg);
  livingroom.scale = 1.6;
}

function runRight(){
  dog.changeAnimation("dog6", dogRunningImg);
}

function runLeft(){
  dog.changeAnimation("dog7", dogRunningLeftSideImg);
}

function washRoom(){
  wash = createSprite(400,400,800,800);
  wash.addImage("wash", washRoomImg);
  wash.scale = 1.6;
}