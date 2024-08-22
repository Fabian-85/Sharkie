class JellyFish extends MovableObject {



    width = 100;
    height = 100;
    speed;
    energy = 20;
    IMAGES_SWIMMING = [
        '../img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        '../img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        '../img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        '../img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];
    IMAGES_DEATH = [
        '../img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        '../img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        '../img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        '../img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ];

    isMoveDown = false;


    constructor(x = 900) {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEATH);
        this.speed = generateRadomNumbers(2,3);
        this.x = x;
        this.y = generateRadomNumbers(0, 380);
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
                 
                if (this.isMoveDown ==false) {
                    this.moveUp();
                    if(!this.isUnderTheTopBoundary()){
                        this.isMoveDown =true;
                    }
                } else if (this.isMoveDown==true) {
                    this.moveDown();
                    if(!this.isAboveTheBottomBoundary()){
                        this.isMoveDown =false;
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