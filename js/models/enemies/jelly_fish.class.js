class JellyFish extends MovableObject {

    width = 100;
    height = 100;
    speed = 2;
    energy = 20;
    yUpCorrection = 5;
    yBottomCorrection = -5;
    isMoveDown = false;

    IMAGES_SWIMMING = [
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];
    IMAGES_DEATH = [
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ];

    /**
     * represents a jelly fish
     * @param {number} x - x-position in canvas 
     * @constructor
     */
    constructor(x = 900) {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages();
        this.x = x;
        this.y = generateRadomNumbers(0, 380);
        this.animate();
    }

    animate() {
        setInterval(() => this.move(), 1000 / 60);
        setInterval(() => this.playAnimation(), 200);
    }

    /**
     * save all images in a image cache
     */
    loadImages() {
        super.loadImages(this.IMAGES_SWIMMING);
        super.loadImages(this.IMAGES_DEATH);
    }

    playAnimation() {
        if (this.isDead()) {
            super.playAnimation(this.IMAGES_DEATH);
        } else {
            super.playAnimation(this.IMAGES_SWIMMING);
        }
    }

    move() {
        if (this.isDead()) {
            this.moveUp();
        } else {
            this.moveUpAndDown();
        }
    }

    /**
     * jelly fishs move up until the the top boundary and they go down until the bottom
     * This is repeated again and again
     */
    moveUpAndDown() {
        if (!this.isMoveDown) {
            this.moveUp();
            if (!this.isUnderTheTopBoundary()) {
                this.isMoveDown = true;
            }
        } else if (this.isMoveDown) {
            this.moveDown();
            if (!this.isAboveTheBottomBoundary()) {
                this.isMoveDown = false;
            }
        }
    }
}