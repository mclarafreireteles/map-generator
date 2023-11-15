let tileSize = 16;
let zoomFactor = 10;

let xoff = 0;
let yoff = 0;

let sliderZoom;
let sliderWater;

let imgGrass;
let imgSand;
let imgOcean;
let imgDirt;

let tilesImages = [];

function preload(){
  tilesImages[4] = loadImage('./assets/grass-clara.png')
  tilesImages[2] = loadImage('./assets/grass-escura.png')
  tilesImages[1] = loadImage('./assets/areia.png')
  tilesImages[0] = loadImage('./assets/mar.png')
  tilesImages[3] = loadImage('./assets/dirt.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  addSlider();
  addBtn();
  noStroke();
}

function draw() {
  fill('red');
  textSize(100);
  text("Olá, mundo!", width/2, 1000);
  background(220);
  drawMap();
  rectMenu();
}

function drawMap(){
  zoomFactor = sliderZoom.value();
  for(let x = 0;x < width/tileSize; x++){
    for(let y=0; y< height/tileSize; y++){
      image(tilesImages[getTile(x, y)], x * tileSize, y * tileSize, tileSize, tileSize)
    }
  }
}

function getTile(x, y){
  let noiseValue = noise(x/zoomFactor, y/zoomFactor);
  if (noiseValue < sliderWater.value()/10) {
    return 0;
  } else if (noiseValue < 0.4) {
    return 1;
  } else if (noiseValue< 0.6) {
    return 4;
  } else if (noiseValue < 0.7) {
    return 2;
  } else {
    return 3;
  }
} 

function addSlider(){
  sliderZoom = createSlider(5, 15, 10);
  sliderZoom.position(width-width/10, 450);
  sliderWater = createSlider(0, 8, 2)
  sliderWater.position(width-width/10, 500)
}

function addBtn(){
  btnSeed = createButton('Tentar outro mapa!')
  btnSeed.mousePressed(generateSeed)
  btnSeed.position(width-width/10, 600);
}

function generateSeed(){
  noiseSeed(millis());
  drawMap();
}

function rectMenu(){
  fill('grey')
  rect(width/2+width/3, 0, width/6, height)
}






