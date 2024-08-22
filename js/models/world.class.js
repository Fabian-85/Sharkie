class World {

    canvas;
    ctx; 
    keyboard;
    character ;
    bubbleBar = new BubbleBar();
    healthBar = new HealthBar();
    poisonBar = new PoissonBar();
    coinBar = new CoinBar();
    level;
    lastThrowBubbleTime = 0;
    camera_x = 0;
    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.character = new Character();
         
       
    }
    

     

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poissons);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bubbles);
        this.addToMap(this.character);


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

    addBubble() {
        setInterval(() => {
            for (let i = 0; i < 5; i++) {
                this.level.bubbles.push(new Bubble(this.generateRadomNumbers(this.character.x - 400, this.character.x + 800), this.generateRadomNumbers(480, 600)));
            }
        }, 3000);

    }


    checkCollisionsWithEnemies() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && this.character.isHurt() == false && enemy.isDead() == false) {
                this.character.hit();
                console.log('Collision ' + this.character.energy);

            }
            ;
        });

    }

    checkCollisionsWithBubbleAndCharacter() {
        for (let i = 0; i < this.level.bubbles.length; i++) {
            const bubble = this.level.bubbles[i];
            if (this.character.isColliding(bubble)) {
                this.character.bubbleCount++;
                this.level.bubbles.splice(i, 1);
            }
        }
    }

    checkCollisionsWithBubbleAndEnemy() {
        for (let i = 0; i < this.level.bubbles.length; i++) {
            const bubble = this.level.bubbles[i];
            for (let j = 0; j < this.level.enemies.length; j++) {
                const enemy = this.level.enemies[j];
                if (enemy.isColliding(bubble) && bubble.noDammage == false && !enemy.isDead()) {
                    this.level.bubbles.splice(i, 1);
                    this.level.enemies[j].hit(bubble.dammage);
                    //   if(enemy.energy == 0){ 
                    //  this.level.enemies.splice(j,1);
                    // }
                }

            }
        }
    }

    checkCollisionsWithPoisson() {
        for (let i = 0; i < this.level.poissons.length; i++) {
            const poisson = this.level.poissons[i];
            if (this.character.isColliding(poisson)) {
                this.level.poissons.splice(i, 1);
                this.character.poissonCount++;
            }
        }
    }

    checkCollisionsWithCoins() {
        for (let i = 0; i < this.level.coins.length; i++) {
            const coin = this.level.coins[i];
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(i, 1);
                this.character.coinCount++;
            }
        }
    }






    addToMap(object) {

        if (object.otherDirection == true) {
            this.flipImage(object);
        }

        object.draw(this.ctx);

   




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

    generateRadomNumbers(from, to) {
        return Math.random() * (to - from) + from;
    }
}