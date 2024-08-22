class DangerousjellyFish extends MovableObject {


    x = 90;
    y = 150;
    width = 100;
    height = 100;
    energy = 40;
    firstMove = false;
    speed;
    IMAGES_SWIMMING = [
        '../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        '../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        '../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        '../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
    ];

    IMAGES_DEATH = [
        'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g4.png',
    ];


    constructor(x = 300,) {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEATH);
        this.x = x;
        this.x = generateRadomNumbers(3800,5000);
        this.y =generateRadomNumbers(0,370), 
        this.speed =1;
        this.yUpCorrection = 5;
        this.yBottomCorrection = -5;
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.isDead()) {
             
                    this.speed = 2;
                    this.moveUp();
                
            } else {
                if(this.x - world.character.x <1000 || this.firstMove){ 
                    this.firstMove = true;
                if (this.x > world.character.x + world.character.xLeftCorrection) {
                  this.moveLeft();
                } else if (this.x   < world.character.x + world.character.xLeftCorrection) {
                    this.moveRight();
                }

                if (this.y > world.character.y + world.character.yUpCorrection ) {
                   this.moveUp();
                } else if (this.y   < world.character.y + world.character.yUpCorrection) {
                    this.moveDown();
                }

            }
                

                
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEATH);
            } else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 200);

    }


}