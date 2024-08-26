let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  addTouchButtonsForSmallDisplay();
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  setLevel();
  world.level = level1;
  world.draw();
  world.run();
  world.addBubble();
  addTouchEvents();
}

function playGame() {
  audios.background_music.play();
  document.getElementById('canvas').classList.remove('d-none');
  document.getElementById('startscreen').classList.add('d-none');
  init();
}

function showControlling() {
  document.getElementById('controlling').classList.remove('d-none');
  document.getElementById('startscreen').classList.add('d-none');
}

function closeControllingCenter() {
  document.getElementById('startscreen').classList.remove('d-none');
  document.getElementById('controlling').classList.add('d-none');
}

function backToTheMenu() {
  document.getElementById('canvas').classList.add('d-none');
  document.getElementById('winningscreen').style.transform = 'translateX(100%)';
  document.getElementById('losingscreen').style.transform = 'translateX(100%)';
  document.getElementById('startscreen').classList.remove('d-none');

}

function showLosingScreen() {
  audios.background_music.pause();
  audios.endboss_music.pause();
  audios.losing_sound.play();
  this.clearAllIntervals();
  document.getElementById('losingscreen').style.transform = 'translateX(0)';
}

function showWinningScreen() {
  audios.background_music.pause();
  audios.endboss_music.pause();
  audios.winning_sound.play();
  this.clearAllIntervals();
  document.getElementById('winningscreen').style.transform = 'translateX(0)';
}

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
}

function addTouchButtonsForSmallDisplay(){
  if(window.innerWidth<720){
    document.getElementById('touchableButtons').classList.remove('d-none');
  }
}

function generateRadomNumbers(from, to) {
  return Math.random() * (to - from) + from;
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode == 65 || event.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (event.keyCode == 68 || event.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode == 83 || event.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (event.keyCode == 87 || event.keyCode == 38) {
    keyboard.UP = true;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (event.keyCode == 77) {
    keyboard.M = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode == 65 || event.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (event.keyCode == 68 || event.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode == 83 || event.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (event.keyCode == 87 || event.keyCode == 38) {
    keyboard.UP = false;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (event.keyCode == 77) {
    keyboard.M = false;
  }
});
function addTouchEvents(){
document.getElementById('left').addEventListener('touchstart', (event) => keyboard.LEFT = true);
document.getElementById('top').addEventListener('touchstart', (event) => keyboard.UP = true);
document.getElementById('right').addEventListener('touchstart', (event) => keyboard.RIGHT = true);
document.getElementById('bubbleBotton').addEventListener('touchstart', (event) => keyboard.SPACE = true);
document.getElementById('poissonBubbleBotton').addEventListener('touchstart', (event) => keyboard.M = true);
document.getElementById('bottom').addEventListener('touchstart', (event) => keyboard.DOWN = true);
document.getElementById('left').addEventListener('touchend', (event) => keyboard.LEFT = false);
document.getElementById('top').addEventListener('touchend', (event) => keyboard.UP = false);
document.getElementById('right').addEventListener('touchend', (event) => keyboard.RIGHT = false);
document.getElementById('bottom').addEventListener('touchend', (event) => keyboard.DOWN = false);
document.getElementById('bubbleBotton').addEventListener('touchend', (event) => keyboard.SPACE = false);
document.getElementById('poissonBubbleBotton').addEventListener('touchend', (event) => keyboard.M = false);
}