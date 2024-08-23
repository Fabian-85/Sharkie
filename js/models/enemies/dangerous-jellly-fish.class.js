class DangerousjellyFish extends MovableObject {

    x = 90;
    y = 150;
    width = 100;
    height = 100;
    energy = 40;
    firstMove = false;
    yUpCorrection = 5;
    yBottomCorrection = -5;
    speed = 1;

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

    constructor(x = 300) {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages();
        this.x = x;
        this.y = generateRadomNumbers(0, 370);
        this.animate();
    }

    animate() {
        setInterval(() => this.move(), 1000 / 60);
        setInterval(() => this.playAnimation(), 200);
    }

    loadImages() {
        super.loadImages(this.IMAGES_SWIMMING);
        super.loadImages(this.IMAGES_DEATH);
    }

    move() {
        if (this.isDead()) {
            this.moveUp();
        } else {
            this.moveToTheCharacter();
        }
    }

    moveToTheCharacter() {
        if (this.distanceToCharacter() < 1000 || this.firstMove) {
            this.firstMove = true;
            if (this.isCharacterOnTheLeftSide()) {
                this.moveLeft();
            } else if (this.isCharacterOnTheRightSide()) {
                this.moveRight();
            }
            if (this.isCharacterUpstairs()) {
                this.moveUp();
            } else if (this.isCharacterDownstairs()) {
                this.moveDown();
            }
        }
    }

    playAnimation() {
        if (this.isDead()) {
            super.playAnimation(this.IMAGES_DEATH);
        } else {
            super.playAnimation(this.IMAGES_SWIMMING);
        }
    }

    distanceToCharacter() {
        return this.x - world.character.x;
    }

    isCharacterOnTheLeftSide() {
        return this.x > world.character.x + world.character.xLeftCorrection;
    }

    isCharacterOnTheRightSide() {
        return this.x < world.character.x + world.character.xLeftCorrection;
    }

    isCharacterUpstairs() {
        return this.y > world.character.y + world.character.yUpCorrection;
    }

    isCharacterDownstairs() {
        return this.y < world.character.y + world.character.yUpCorrection;
    }
}