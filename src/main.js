const game = new Game();

let img;
let tr_img;
let x = 0;
let y = 0;
let treasure_x = 500;
let treasure_y = 500;
let score = 0;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  image(img, x, y,100,100);
  image(tr_img, treasure_x, treasure_y, 100, 100);

 if(x === treasure_x && y === treasure_y)
 {
   treasure_x = (Math.floor(Math.random() * 10)) * 100;
   treasure_y = (Math.floor(Math.random() * 10)) * 100;
   score += 1;
 }
 document.querySelector('h2').querySelector('span').innerText = score;   
}

function preload () {
  img = loadImage('assets/character-down.png');
  tr_img = loadImage('assets/treasure.png');
}

function keyPressed (){
if (keyCode === 39) {
  x = x+100;
  img = loadImage('assets/character-right.png');
 }
if (keyCode === 37) {
  x = x-100;
  img = loadImage('assets/character-left.png');
}
if (keyCode === 38) {
  y = y-100;
  img = loadImage('assets/character-up.png');
}
if (keyCode === 40) {
  y = y+100;
  img = loadImage('assets/character-down.png');
}
}





