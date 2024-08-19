class Endboss extends Enemy {

    x = 3800;
    y = 10;
    width = 500;
    height = 500;
    energy = 200;


    IMAGES_SWIMMING = [
        '../img/2.Enemy/3 Final Enemy/2.floating/1.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/2.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/3.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/4.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/5.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/6.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/7.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/8.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/9.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/10.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/11.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/12.png',
        '../img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_ATTACK =[
        '../img/2.Enemy/3 Final Enemy/Attack/1.png',
        '../img/2.Enemy/3 Final Enemy/Attack/2.png',
        '../img/2.Enemy/3 Final Enemy/Attack/3.png',
        '../img/2.Enemy/3 Final Enemy/Attack/4.png',
        '../img/2.Enemy/3 Final Enemy/Attack/5.png',
        '../img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];

    IMAGES_DEATH = [
        '../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        '../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        '../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        '../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        '../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',

    ]


    constructor() {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEATH);
        this.xLeftCorrection = 30;
        this.xRightCorrection = -40;
        this.yUpCorrection = 250;
        this.yBottomCorrection = -100;
        this.animate();
    }

 

    animate() {
        setInterval(() => {
            
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