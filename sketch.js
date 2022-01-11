  //variaveis
var path, path_sprite;
var runner, runner_sprite;
var invisible_wall;
var invisible_wall2;
function preload(){
  //imagens pré-carregadas
path_sprite = loadImage("path.png");
runner_sprite = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //crie sprite aqui
  path = createSprite(200,200);
  path.addAnimation("caminho", path_sprite);
  path.scale = 1.2;

  runner = createSprite(100,300);
  runner.addAnimation("corredor", runner_sprite);
  runner.scale = 0.1;
}

function draw() {
  background(0);
  
  //estrada
  path.velocityY = 5;
  if(path.y > 500){
    path.y = height/2;
  }

  //movimentação
  runner.x = World.mouseX;

  drawSprites();
}
