class PufferFish extends MovableObject {


    x = 40;
    y = 150;
    width = 100;
    height = 100;
    energy = 20;
    IMAGES_SWIMMING = [
        '/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        '/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        '/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        '/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        '/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];
    IMAGE_DEATH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png'
    ]
    
    
    firstMove =false;
    
    constructor(x) {
        super().loadImage('/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGE_DEATH);
        this.x =  x;
        this.y = generateRadomNumbers(0, 400);
        this.xLeftCorrection = 5;
        this.xRightCorrection = -10;
        this.yUpCorrection = 5;
        this.yBottomCorrection = -25;
        this.speed = generateRadomNumbers(0.8, 1.3);
       
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                if(this.isAboveTheBottomBoundary()){
                    this.speed = 2;
                    this.moveDown();
                }
               
            } else {
                if(this.x - world.character.x <750 || this.firstMove){ 
                this.moveLeft();
                this.firstMove = true;
            }
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGE_DEATH);
            } else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 200);

    }



}