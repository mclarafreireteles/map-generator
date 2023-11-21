function addSlider(){
    sliderZoom = createSlider(5, 15, 10);
    sliderZoom.position(width-width/10, 450);
    sliderWater = createSlider(0, 8, 2);
    sliderWater.position(width-width/10, 500);
    sliderBeach = createSlider(0, 8, 4);
    sliderBeach.position(width-width/10, 550);
  }
  
  function addBtn(){
    btnSeed = createButton('Tentar outro mapa!');
    btnSeed.mousePressed(generateSeed);
    btnSeed.position(width-width/10-40, 600);
    btnSeed.style('background-color: #574636;');
    btnSeed.style('color', '#FFFFFF');
    btnSeed.style('font-size', '15px');
    btnSeed.style('border-radius', '20px');
    btnSeed.style('padding', '10px');
    btnSeed.mouseOver(()=>btnSeed.style('background-color: #6B5642;'));
    btnSeed.mouseOut(()=>btnSeed.style('background-color: #574636;'));
  }
  
  function generateSeed(){
    noiseSeed(millis());
    drawMap();
  }
  
  function rectMenu(){
    fill('grey')
    rect(width/2+width/3, 0, width/6, height)
  }
  
  function addText(){
    fill(255);
    textSize(25);
    text('Zoom:', width-width/10 - 80, width/2-width/4)
    text('Água:', width-width/10 - 80, width/2-width/4+50)
    text('Praia:', width-width/10 - 80, width/2-width/4+100)
  }
  