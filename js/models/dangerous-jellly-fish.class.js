class DangerousjellyFish extends MovableObject {


    x = 90;
    y = 150;
    width = 100;
    height = 100;
    energy = 40;

    speed;
    IMAGES_SWIMMING = [
        '../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        '../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        '../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        '../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
    ];

    IMAGES_DEATH =[
        'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g4.png',
    ];
    

    constructor() {
        super().loadImage('/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEATH);
        this.x = this.generateRadomNumbers(300,680);
        this.speed = this.generateRadomNumbers(0.15,0.25);
        this.yUpCorrection = 5;
        this.yBottomCorrection = -5;
        this.animate();
    }
 

     animate() {
        setInterval(() => {
            if (this.isDead()) {
                if(this.isAboveTheBottomBoundary()){
                    this.speed = 2;
                    this.moveUp();
                }
               
            } else {
                this.moveLeft();
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