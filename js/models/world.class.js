class World {

    canvas;
    ctx;
    character = new Character();
    bubbleBar = new BubbleBar();
    healthBar = new HealthBar();
    poisonBar = new PoissonBar();
    coinBar = new CoinBar();
    bubbles = [];
    poissons =[new Poisson()];
    coins =[new Coin()]
    level = level1;
    lastThrowBubbleTime = 0;
    keyboard;
    camera_x = 0;
    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poissons);
        this.addObjectsToMap(this.coins);
        this.ctx.translate(-this.camera_x, 0);


        this.ctx.font = "25px Luckiest Guy";
        this.ctx.fillText(this.character.energy, 615, 50);
        this.addToMap(this.healthBar);
        this.ctx.fillText(this.character.bubbleCount, 615, 85);
        this.addToMap(this.bubbleBar);
        this.ctx.fillText(this.character.poissonCount, 615, 135);
        this.addToMap(this.poisonBar);
        this.ctx.fillText(this.character.coinCount, 615, 190);
        this.addToMap(this.coinBar);
         
         
      


        let self = this;
        requestAnimationFrame(
            function () {
                self.draw();
            }
        );

    }

    run() {
        setInterval(() => {
            this.checkCollisionsWithEnemies();
            this.checkCollisionsWithPoisson();
            this.checkCollisionsWithCoins();
            this.checkCollisionsWithBubbleAndCharacter();
            this.checkCollisionsWithBubbleAndEnemy();
        }, 100);

    }


    checkCollisionsWithEnemies() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && this.character.isHurt() ==false && enemy.isDead() ==false) {
                this.character.hit();
                console.log('Collision ' + this.character.energy);
                 
            }
            ;
        });

    }

    checkCollisionsWithBubbleAndCharacter(){
        for (let i = 0; i < this.bubbles.length; i++) {
            const bubble = this.bubbles[i];
            if(this.character.isColliding(bubble)){
                this.character.bubbleCount++;
                this.bubbles.splice(i,1);
            }
        }
    }

    checkCollisionsWithBubbleAndEnemy(){
        for (let i = 0; i < this.bubbles.length; i++) {
            const bubble = this.bubbles[i];
            for (let j = 0; j < this.level.enemies.length; j++) {
                const enemy = this.level.enemies[j];
                if (enemy.isColliding(bubble)  && bubble.noDammage == false) {
                    this.bubbles.splice(i,1);
                    this.level.enemies[j].hit(bubble.dammage);
                 //   if(enemy.energy == 0){ 
                  //  this.level.enemies.splice(j,1);
                   // }
                }         
              
            } 
        }
    }

    checkCollisionsWithPoisson(){
        for (let i = 0; i < this.poissons.length; i++) {
            const poisson = this.poissons[i];
            if (this.character.isColliding(poisson)) {
                this.poissons.splice(i,1);
                this.character.poissonCount++;  
            }
        }
    }

    checkCollisionsWithCoins(){
        for (let i = 0; i < this.coins.length; i++) {
            const coin = this.coins[i];
            if (this.character.isColliding(coin)) {
                this.coins.splice(i,1);
                this.character.coinCount++;  
            }
        }
    }






    addToMap(object) {

        if (object.otherDirection == true) {
            this.flipImage(object);
        }

        object.draw(this.ctx);

        object.drawBorder(this.ctx);




        if (object.otherDirection == true) {
            this.flipImageBack(object);
        }

    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        }
        );
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }
}