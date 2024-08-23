let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  setLevel();
  world.level = level1;
  world.draw();
  world.run();
  world.addBubble();
}

function playGame() {
  init();
  document.getElementById('canvas').classList.remove('d-none');
  document.getElementById('startscreen').classList.add('d-none');
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
  this.clearAllIntervals();
  document.getElementById('losingscreen').style.transform = 'translateX(0)';
}

function showWinningScreen() {
  this.clearAllIntervals();
  document.getElementById('winningscreen').style.transform = 'translateX(0)';
}

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
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