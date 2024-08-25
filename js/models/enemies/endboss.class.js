class Endboss extends MovableObject {

    x = 5200;
    y = 0;
    width = 500;
    height = 500;
    energy = 200;
    xLeftCorrection = 30;
    xRightCorrection = -40;
    yUpCorrection = 250;
    yBottomCorrection = -100;
    hadFirstContact = false;
    speed = 2;
    isAttack = false;
    introductionImageCounter = 0;
    attackCounter = 1;
    i = 0;
    winningScreenCounter = 0; 
    firstTimePlay = true;

    IMAGES_SWIMMING = [
        './img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_ATTACK = [
        './img/2.Enemy/3 Final Enemy/Attack/1.png',
        './img/2.Enemy/3 Final Enemy/Attack/2.png',
        './img/2.Enemy/3 Final Enemy/Attack/3.png',
        './img/2.Enemy/3 Final Enemy/Attack/4.png',
        './img/2.Enemy/3 Final Enemy/Attack/5.png',
        './img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];

    IMAGES_INTRODUCTION = [
        './img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/10.png',

    ];

    IMAGES_DEATH = [
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_INTRODUCTION[0]);
        this.loadImages();
        this.animate();
    }

    animate() {
        setInterval(() => this.move(), 1000 / 60);
        setInterval(() => this.playAudioForEndBoss(), 1000 / 60);
        setInterval(() => this.playAnimation(), 200);
    }

    loadImages() {
        super.loadImages(this.IMAGES_SWIMMING);
        super.loadImages(this.IMAGES_INTRODUCTION);
        super.loadImages(this.IMAGES_DEATH);
        super.loadImages(this.IMAGES_ATTACK);
    }

    move() {
        if (this.hadFirstContact) {
            if (this.isCharacterHigher()) {
                this.moveUp();
            } else if (this.isCharacterLower()) {
                this.moveDown();
            }
            if (this.isCharacterOnTheLeftSide()) {
                this.moveLeft();
            }
            if (this.isCharacterOnTheRightSide()) {
                this.moveRight();
            }
        }
    }

    playAnimation() {
        if (this.introductionImageCounter < 10) {
            this.loadImage(this.IMAGES_INTRODUCTION[this.introductionImageCounter]);
            this.introductionImageCounter++;
        } else {
            this.hadFirstContact = true;
            this.playAnimationAfterFirstContact();
        }
        if (world.character.x < 4800 && this.hadFirstContact == false) {
            this.introductionImageCounter = 0;
        }
    }

    playAudioForEndBoss(){
        if(this.hadFirstContact && this.firstTimePlay){
            audios.background_music.pause();
            audios.endboss_music.play();
            this.firstTimePlay = false;
        }
    }

    playAnimationAfterFirstContact() {
        if (this.isDead()) {
            this.playDeadAnimation();
        } else if (this.attackCounter % 5 == 0) {
            if (this.i < this.IMAGES_ATTACK.length) {
                this.playAttackAnimation();
            } else {
                this.finishedAttack();
            }
        } else {
            super.playAnimation(this.IMAGES_SWIMMING);
            this.attackCounter++;
        }
    }

    playDeadAnimation() {
        super.playAnimation(this.IMAGES_DEATH);
        this.winningScreenCounter++;
        if (this.winningScreenCounter > 12) {
            showWinningScreen();
        }
    }

    playAttackAnimation() {
        this.isAttack = true;
        this.loadImage(this.IMAGES_ATTACK[this.i]);
        this.i++;
    }

    finishedAttack() {
        this.attackCounter++;
        this.i = 0;
        this.isAttack = false;
    }

    isCharacterOnTheLeftSide() {
        return world.character.x - world.character.xRightCorrection < this.x - this.xLeftCorrection && this.isAttack == true
    }

    isCharacterOnTheRightSide() {
        return world.character.x - world.character.xRightCorrection > this.x - this.xLeftCorrection && this.isAttack == true
    }

    isCharacterHigher() {
        return (world.character.y + 0.5 * (world.character.height - world.character.yUpCorrection + world.character.yBottomCorrection) + world.character.yUpCorrection) < (this.y + 0.5 * (this.height - this.yUpCorrection + this.yBottomCorrection) + this.yUpCorrection);
    }

    isCharacterLower() {
        return (world.character.y + 0.5 * (world.character.height - world.character.yUpCorrection + world.character.yBottomCorrection) + world.character.yUpCorrection) > (this.y + 0.5 * (this.height - this.yUpCorrection + this.yBottomCorrection) + this.yUpCorrection);
    }

    moveLeft() {
        this.otherDirection = false;
        super.moveLeft();
    }

    moveRight() {
        this.otherDirection = true;
        super.moveRight();
    }
}