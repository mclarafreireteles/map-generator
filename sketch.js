let tileSize = 16;
let zoomFactor = 10;

let xoff = 0;
let yoff = 0;

let sliderZoom;

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
  createCanvas(windowWidth, 700);
  addSlider();
  addBtn();
  noStroke();
}

function draw() {
  background(220);
  drawMap();
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
  if (noiseValue < 0.3) {
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
}

function addBtn(){
  btnSeed = createButton('Tentar outro mapa!')
  btnSeed.mousePressed(generateSeed)
}

function generateSeed(){
  noiseSeed(millis());
  drawMap();
}






