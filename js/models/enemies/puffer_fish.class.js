class PufferFish extends MovableObject {

    x = 40;
    y = 150;
    width = 100;
    height = 100;
    energy = 20;
    xLeftCorrection = 5;
    xRightCorrection = -10;
    yUpCorrection = 5;
    yBottomCorrection = -25;
    firstMove = false;

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

    constructor(x) {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages();
        this.x = x;
        this.y = generateRadomNumbers(0, 400);
        this.speed = generateRadomNumbers(0.8, 1.3);
        this.animate();
    }

    animate() {
        setInterval(() => this.move(), 1000 / 60);
        setInterval(() => this.playAnimation(), 200);
    }

    move() {
        if (this.isDead()) {
            this.fallToTheBottom();
        } else {
            this.moveLeft();
        }
    }

    playAnimation() {
        if (this.isDead()) {
            super.playAnimation(this.IMAGE_DEATH);
        } else {
            super.playAnimation(this.IMAGES_SWIMMING);
        }
    }

    loadImages() {
        super.loadImages(this.IMAGES_SWIMMING);
        super.loadImages(this.IMAGE_DEATH);
    }

    fallToTheBottom() {
        if (this.isAboveTheBottomBoundary()) {
            this.moveDown();
        }
    }

    distanceToCharacter() {
        return this.x - world.character.x;
    }

    moveLeft() {
        if (this.distanceToCharacter() < 750 || this.firstMove) {
            super.moveLeft();
            this.firstMove = true;
        }
    }
}