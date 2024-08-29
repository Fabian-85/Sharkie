class Character extends MovableObject {

    x = 10;
    y = 150;
    width = 250;
    height = 250;
    energy = 100;
    speed = 3.5;
    xLeftCorrection = 50;
    xRightCorrection = -44;
    yUpCorrection = 120;
    yBottomCorrection = -60;
    bubbleCount = 100;
    poissonCount = 100;
    coinCount = 0;
    lastThrowBubbleTime = 0;
    standTime = 0;
    losingScreenCounter = 0;
    i = 0;
    clickSpaceButton = false;
    clickMButton = false;


    IMAGES_STAND_ON_THE_SPOT = [
        './img/1.Sharkie/1.IDLE/1.png',
        './img/1.Sharkie/1.IDLE/2.png',
        './img/1.Sharkie/1.IDLE/3.png',
        './img/1.Sharkie/1.IDLE/4.png',
        './img/1.Sharkie/1.IDLE/5.png',
        './img/1.Sharkie/1.IDLE/6.png',
        './img/1.Sharkie/1.IDLE/7.png',
        './img/1.Sharkie/1.IDLE/8.png',
        './img/1.Sharkie/1.IDLE/9.png',
        './img/1.Sharkie/1.IDLE/10.png',
        './img/1.Sharkie/1.IDLE/11.png',
        './img/1.Sharkie/1.IDLE/12.png',
        './img/1.Sharkie/1.IDLE/13.png',
        './img/1.Sharkie/1.IDLE/14.png',
        './img/1.Sharkie/1.IDLE/15.png'
    ];

    IMAGES_STAND_ON_THE_SPOT_LONG = [
        './img/1.Sharkie/2.Long_IDLE/i1.png',
        './img/1.Sharkie/2.Long_IDLE/I4.png',
        './img/1.Sharkie/2.Long_IDLE/I5.png',
        './img/1.Sharkie/2.Long_IDLE/I8.png',
        './img/1.Sharkie/2.Long_IDLE/I9.png',
        './img/1.Sharkie/2.Long_IDLE/I10.png',
        './img/1.Sharkie/2.Long_IDLE/I11.png',
        './img/1.Sharkie/2.Long_IDLE/I12.png',
        './img/1.Sharkie/2.Long_IDLE/I13.png',
        './img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    IMAGES_SWIMMING = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_HURT = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    IMAGES_DEAD = [
        './img/1.Sharkie/6.dead/1.Poisoned/1.png',
        './img/1.Sharkie/6.dead/1.Poisoned/2.png',
        './img/1.Sharkie/6.dead/1.Poisoned/3.png',
        './img/1.Sharkie/6.dead/1.Poisoned/4.png',
        './img/1.Sharkie/6.dead/1.Poisoned/5.png',
        './img/1.Sharkie/6.dead/1.Poisoned/6.png',
        './img/1.Sharkie/6.dead/1.Poisoned/7.png',
        './img/1.Sharkie/6.dead/1.Poisoned/8.png',
        './img/1.Sharkie/6.dead/1.Poisoned/9.png',
        './img/1.Sharkie/6.dead/1.Poisoned/10.png',
        './img/1.Sharkie/6.dead/1.Poisoned/11.png',
        './img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    IMAGES_ATTACK_WITH_BUBBLES = [
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    IMAGES_ATTACK_WITH_POISSON_BUBBLES = [
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',

    ];

    IMAGES_ATTACK_WITHOUT_BUBBLES = [
        './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',

    ];

    /**
    * represents the character
    * @constructor
    */
    constructor() {
        super().loadImage(this.IMAGES_STAND_ON_THE_SPOT[0]);
        this.loadImages();
        this.animate();
    }

    animate() {
        setInterval(() => this.move(), 1000 / 60);
        setInterval(() => this.playCharacterAnimation(), 100);

    }

    /**
    * save all images in a image cache
    */
    loadImages() {
        super.loadImages(this.IMAGES_SWIMMING);
        super.loadImages(this.IMAGES_STAND_ON_THE_SPOT);
        super.loadImages(this.IMAGES_HURT);
        super.loadImages(this.IMAGES_DEAD);
        super.loadImages(this.IMAGES_ATTACK_WITH_BUBBLES);
        super.loadImages(this.IMAGES_ATTACK_WITHOUT_BUBBLES);
        super.loadImages(this.IMAGES_ATTACK_WITH_POISSON_BUBBLES);
        super.loadImages(this.IMAGES_STAND_ON_THE_SPOT_LONG);
    }

    /**
     * Move the character based on keyboard input and updates camera position
     */
    move() {
        if (this.canMoveRight()) {
            this.moveRight();
        }
        if (this.canMoveLeft()) {
            this.moveLeft();
        }
        if (this.canMoveUp()) {
            this.moveUp();
        }
        if (this.canMoveBottom()) {
            this.moveDown();
        }
        world.camera_x = -this.x + 100;
    }

     /**
     * play the animation of the character 
     */
    playCharacterAnimation() {
        if (this.isDead()) {
            this.playDeadAnimation();
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.standTime = 0;
        } else if ((world.keyboard.SPACE || world.keyboard.M) && this.bubbleCount == 0) {
            this.playAnimation(this.IMAGES_ATTACK_WITHOUT_BUBBLES);
            this.standTime = 0;
        } else if ((((world.keyboard.SPACE || this.clickSpaceButton)) || (world.keyboard.M && this.poissonCount == 0)) && this.canThrowBubble()) {
            this.playBubbleAnimation();
            this.standTime = 0;
        } else if ((world.keyboard.M || this.clickMButton) && this.canThrowPoissonBubble()) {
            this.playPoissonBubbleAnimation();
            this.standTime = 0;
        } else if (world.keyboard.LEFT || world.keyboard.RIGHT || world.keyboard.UP || world.keyboard.DOWN) {
            this.playAnimation(this.IMAGES_SWIMMING);
            this.standTime = 0;
        } else if (this.isSleep()) {
            this.playAnimation(this.IMAGES_STAND_ON_THE_SPOT_LONG);
        } else {
            this.playAnimation(this.IMAGES_STAND_ON_THE_SPOT);
            this.standTime++;
        }
    }

    /**
     * play the death animation of the character and
     * show the losing screen after a specific time
     */
    playDeadAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        this.losingScreenCounter++;
        if (this.losingScreenCounter > 11) {
            showLosingScreen();
        }
    }

    /**
     * play the bubble animation of the character 
     * After this the bubble is thrown
     */
    playBubbleAnimation() {
        this.clickSpaceButton = true;
        this.loadImage(this.IMAGES_ATTACK_WITH_BUBBLES[this.i]);
        this.i++;
        if (this.i > 7) {
            this.throwBubble();
            this.i = 0;
            this.clickSpaceButton = false;
        }

    }

    /**
     * play the poisson bubble animation of the character 
     * After this the poisson bubble is thrown
     */
    playPoissonBubbleAnimation() {
        this.clickMButton = true;
        this.loadImage(this.IMAGES_ATTACK_WITH_POISSON_BUBBLES[this.i]);
        if (this.i > 6) {
            this.throwPoissonBubble();
            this.i = 0;
            this.clickMButton = false;
        }
        this.i++;
    }

    hit() {
        audios.hurt_sound.play();
        super.hit();
    }

    isSleep() {
        return this.standTime > 100;
    }

    canMoveLeft() {
        return world.keyboard.LEFT && this.x >= -200 && !this.isDead();
    }

    canMoveRight() {
        return world.keyboard.RIGHT && this.x <= world.level.level_end && !this.isDead();
    }

    canMoveUp() {
        return world.keyboard.UP && this.isUnderTheTopBoundary() && !this.isDead();
    }

    canMoveBottom() {
        return (world.keyboard.DOWN || this.isSleep()) && this.isAboveTheBottomBoundary() && !this.isDead();
    }

    moveLeft() {
        this.otherDirection = true;
        super.moveLeft();
    }

    moveRight() {
        this.otherDirection = false;
        super.moveRight();
    }

    /**
     * a new poisson bubble is created and is trown on the left or right side 
     */
    throwPoissonBubble() {
        if (this.otherDirection == false) {
            this.throwPoissonBubbleRight();
        } else {
            this.throwPoissonBubbleLeft();
        }
        this.lastThrowBubbleTime = new Date().getTime();
        this.bubbleCount--;
        this.poissonCount--;
    }

    /**
     * a new bubble is created and is trown on the left or right side 
     */
    throwBubble() {
        if (this.otherDirection == false) {
            this.throwBubbleRight();
        } else {
            this.throwBubbleLeft();
        }
        this.lastThrowBubbleTime = new Date().getTime();
        this.bubbleCount--;
    }

    throwBubbleRight() {
        let bubble = new Bubble(this.x + this.width + this.xRightCorrection + 10, this.y + 0.5 * this.height);
        bubble.noDammage = false;
        world.level.bubbles.push(bubble);
        bubble.throwRight();
    }

    throwBubbleLeft() {
        let bubble = new Bubble(this.x - 10, this.y + 0.5 * this.height);
        bubble.noDammage = false;
        world.level.bubbles.push(bubble);
        bubble.throwLeft();
    }

    throwPoissonBubbleRight() {
        let bubble = new PoissonBubble(this.x + this.width + this.xRightCorrection + 10, this.y + 0.5 * this.height);
        bubble.noDammage = false;
        world.level.bubbles.push(bubble);
        bubble.throwRight();
    }

    throwPoissonBubbleLeft() {
        let bubble = new PoissonBubble(this.x - 10, this.y + 0.5 * this.height);
        bubble.noDammage = false;
        world.level.bubbles.push(bubble);
        bubble.throwLeft();
    }

     /**
     * a bubble can only throw after a specific time 
     * and the character must collected the bubble und don´t be hurt
     */
    canThrowBubble() {
        let timepassed = new Date().getTime() - this.lastThrowBubbleTime;
        timepassed = timepassed / 1000 // difference in second
        return timepassed > 1 && this.bubbleCount > 0 && !this.isHurt();
    }

    canThrowPoissonBubble() {
        return this.canThrowBubble() && this.poissonCount > 0;
    }
}