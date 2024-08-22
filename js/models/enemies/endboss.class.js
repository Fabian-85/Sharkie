class Endboss extends MovableObject {

    x = 5200;
    y = 0;
    width = 500;
    height = 500;
    energy = 200;
    hadFirstContact = false;
    speed = 2;
    isAttack = false;
    


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

    IMAGES_ATTACK = [
        '../img/2.Enemy/3 Final Enemy/Attack/1.png',
        '../img/2.Enemy/3 Final Enemy/Attack/2.png',
        '../img/2.Enemy/3 Final Enemy/Attack/3.png',
        '../img/2.Enemy/3 Final Enemy/Attack/4.png',
        '../img/2.Enemy/3 Final Enemy/Attack/5.png',
        '../img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];

    IMAGES_INTRODUCTION = [
        '../img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        '../img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        '../img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        '../img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        '../img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        '../img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        '../img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        '../img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        '../img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        '../img/2.Enemy/3 Final Enemy/1.Introduce/10.png',

    ];

    IMAGES_DEATH = [
        '../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        '../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        '../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        '../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        '../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',

    ]


    constructor() {
        super().loadImage(this.IMAGES_INTRODUCTION[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_INTRODUCTION);
        this.loadImages(this.IMAGES_DEATH);
        this.loadImages(this.IMAGES_ATTACK);
        this.xLeftCorrection = 30;
        this.xRightCorrection = -40;
        this.yUpCorrection = 250;
        this.yBottomCorrection = -100;
        this.animate();
    }



    animate() {

        setInterval(() => {
            if (this.hadFirstContact == true) {
                if ((world.character.y + 0.5 * (world.character.height - world.character.yUpCorrection + world.character.yBottomCorrection) + world.character.yUpCorrection) < (this.y + 0.5 * (this.height - this.yUpCorrection + this.yBottomCorrection) + this.yUpCorrection)) {
                    this.moveUp();
                } else if ((world.character.y + 0.5 * (world.character.height - world.character.yUpCorrection + world.character.yBottomCorrection) + world.character.yUpCorrection) > (this.y + 0.5 * (this.height - this.yUpCorrection + this.yBottomCorrection) + this.yUpCorrection)) {
                    this.moveDown();
                }

                if (world.character.x - world.character.xRightCorrection < this.x - this.xLeftCorrection && this.isAttack == true) {
                    this.otherDirection = false;
                    this.moveLeft();
                }
                if (world.character.x - world.character.xRightCorrection > this.x - this.xLeftCorrection && this.isAttack == true) {
                    this. otherDirection = true;
                    this.moveRight();
                }
               

            }
        }, 1000 / 60);




        let i = 0;
        let j = 1;
        let k = 0;

        setInterval(() => {
            console.log(j)
            if (i < 10) {
                this.loadImage(this.IMAGES_INTRODUCTION[i]);
                i++;
            } else {
                this.hadFirstContact = true;
                if (this.isDead()) {
                    this.playAnimation(this.IMAGES_DEATH);
                } else if (j % 10 == 0) {
                    if (k < this.IMAGES_ATTACK.length) {
                        this.isAttack = true;
                        this.loadImage(this.IMAGES_ATTACK[k]);
                        k++;
                    } else {
                        j++;
                        k = 0;
                        this.isAttack = false;
                    }
                } else {
                    this.playAnimation(this.IMAGES_SWIMMING);
                    j++;
                }
            }


            if (world.character.x < 4800 && this.hadFirstContact == false) {
                i = 0;
            }



        }, 200);

    }





}