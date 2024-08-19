 let canvas; 

let world;
let keyboard = new Keyboard();

function init(){ 
canvas = document.getElementById("canvas");
world = new World(canvas,keyboard);
  
}



document.addEventListener('keydown', (event)=> {    
     //console.log(event.keyCode);
      if(event.keyCode == 65 || event.keyCode == 37){
        keyboard.LEFT = true; 
      }
      if(event.keyCode == 68 || event.keyCode == 39){
        keyboard.RIGHT = true; 
      }
      if(event.keyCode == 83 || event.keyCode == 40){
        keyboard.DOWN = true; 
      }
      if(event.keyCode == 87 || event.keyCode == 38){
        keyboard.UP = true; 
      }
      if(event.keyCode == 32){
        keyboard.SPACE = true; 
      }
      if(event.keyCode == 77){
        keyboard.M = true; 
      }
 });

 document.addEventListener('keyup', (event)=> {    
      if(event.keyCode == 65 || event.keyCode == 37){
        keyboard.LEFT = false; 
      }
      if(event.keyCode == 68 || event.keyCode == 39){
        keyboard.RIGHT = false; 
      }
      if(event.keyCode == 83 || event.keyCode == 40){
        keyboard.DOWN = false; 
      }
      if(event.keyCode == 87 || event.keyCode == 38){
        keyboard.UP = false; 
      }
      if(event.keyCode == 32){
        keyboard.SPACE = false; 
      }
      if(event.keyCode == 77){
        keyboard.M = false; 
      }
 });