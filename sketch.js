var tempo = 100;
numerodeflexas = 10;
cont = 1000;
function preload() {
    cidade = loadImage("./assets/cidade_1.PNG");
    arqueiroimg = loadImage("./assets/arqueiro.png");
    flexaimg = loadImage("./assets/arrow.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = createSprite(windowWidth / 2, windowHeight / 2);
    bg.addImage(cidade);

    arqueiro = createSprite(windowWidth / 2 + 30, windowHeight / 2 + 250);
    arqueiro.addImage(arqueiroimg);
    arqueiro.scale = 0.04;
    arqueiro.rotation = +180;
    frameRate(30);
    tempo = 3000;
}

function draw() {
    background(0);
    //exibir pontuação
    frameRate(30);
    tempo = tempo - 1;
    tempo2 = round(tempo / 30);
    drawSprites();
    if (keyDown("RIGHT_ARROW")) {
        arqueiro.x = arqueiro.x + 14;
    }
    if (keyDown("LEFT_ARROW")) {
        arqueiro.x = arqueiro.x - 14;
    }

    if (keyWentDown("space")) {
        flexa = createSprite(arqueiro.x, arqueiro.y);

        flexa.velocityY = -15;
        flexa.addImage(flexaimg);
        flexa.scale = 0.06;
        flexa.rotation = -90;
    }

    text("Tempo restante: " + tempo2, windowWidth - 500, 100);
}
