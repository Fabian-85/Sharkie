class Character extends MovableObject {

    x = 10;
    y = 150;
    width = 250;
    height = 250;
    energy = 100;
    bubbleCount = 0;
    poissonCount = 0;
    coinCount = 0;
    lastThrowBubbleTime = 0;
    standTime = 0;

    IMAGES_STAND_ON_THE_SPOT = [
        '../img/1.Sharkie/1.IDLE/1.png',
        '../img/1.Sharkie/1.IDLE/2.png',
        '../img/1.Sharkie/1.IDLE/3.png',
       '../img/1.Sharkie/1.IDLE/4.png',
        '../img/1.Sharkie/1.IDLE/5.png',
        '../img/1.Sharkie/1.IDLE/6.png',
        '../img/1.Sharkie/1.IDLE/7.png',
        '../img/1.Sharkie/1.IDLE/8.png',
        '../img/1.Sharkie/1.IDLE/9.png',
        '../img/1.Sharkie/1.IDLE/10.png',
        '../img/1.Sharkie/1.IDLE/11.png',
        '../img/1.Sharkie/1.IDLE/12.png',
        '../img/1.Sharkie/1.IDLE/13.png',
        '../img/1.Sharkie/1.IDLE/14.png',
        '../img/1.Sharkie/1.IDLE/15.png'
    ];

    IMAGES_STAND_ON_THE_SPOT_LONG = [
        '../img/1.Sharkie/2.Long_IDLE/i1.png',
       // '../img/1.Sharkie/2.Long_IDLE/I2.png',
       // '../img/1.Sharkie/2.Long_IDLE/I3.png',
        '../img/1.Sharkie/2.Long_IDLE/I4.png',
        '../img/1.Sharkie/2.Long_IDLE/I5.png',
       // '../img/1.Sharkie/2.Long_IDLE/I6.png',
       // '../img/1.Sharkie/2.Long_IDLE/I7.png',
        '../img/1.Sharkie/2.Long_IDLE/I8.png',
        '../img/1.Sharkie/2.Long_IDLE/I9.png',
        '../img/1.Sharkie/2.Long_IDLE/I10.png',
        '../img/1.Sharkie/2.Long_IDLE/I11.png',
        '../img/1.Sharkie/2.Long_IDLE/I12.png',
        '../img/1.Sharkie/2.Long_IDLE/I13.png',
        '../img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    IMAGES_SWIMMING = [
        '../img/1.Sharkie/3.Swim/1.png',
        '../img/1.Sharkie/3.Swim/2.png',
        '../img/1.Sharkie/3.Swim/3.png',
        '../img/1.Sharkie/3.Swim/4.png',
        '../img/1.Sharkie/3.Swim/5.png',
        '../img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    IMAGES_DEAD = [
        '../img/1.Sharkie/6.dead/1.Poisoned/1.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/2.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/3.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/4.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/5.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/6.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/7.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/8.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/9.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/10.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/11.png',
        '../img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    IMAGES_ATTACK_WITH_BUBBLES = [
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    IMAGES_ATTACK_WITH_POISSON_BUBBLES = [
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',

    ];

    IMAGES_ATTACK_WITHOUT_BUBBLES = [
        '../img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png',

    ];

   // speed = 3.5;
   speed = 3.5;
    world;
    swimming_sound = new Audio('../audio/swimming.mp3');

    constructor() {
        super().loadImage('../img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_STAND_ON_THE_SPOT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK_WITH_BUBBLES);
        this.loadImages(this.IMAGES_ATTACK_WITHOUT_BUBBLES);
        this.loadImages(this.IMAGES_ATTACK_WITH_POISSON_BUBBLES);
        this.loadImages(this.IMAGES_STAND_ON_THE_SPOT_LONG);
        this.xLeftCorrection = 50;
        this.xRightCorrection = -44;
        this.yUpCorrection = 120;
        this.yBottomCorrection = -60;
        this.animate();
        this.swimming_sound.volume = 0.3;
    }

    animate() {
        
        
        setInterval(() => {
             
            if (this.world.keyboard.RIGHT && this.x <= this.world.level.level_end) {
                this.swimming_sound.play();
                this.otherDirection = false;
                this.moveRight();
            }
            if (this.world.keyboard.LEFT && this.x >= -200) {
                this.swimming_sound.play();
                this.otherDirection = true;
                this.moveLeft();
            }
            if (this.world.keyboard.UP && this.isUnderTheTopBoundary()) {
                this.swimming_sound.play();
                this.moveUp();
            }
            if ((this.world.keyboard.DOWN   || this.IsSleep()) && this.isAboveTheBottomBoundary()) {
                this.swimming_sound.play();
                this.moveDown();
            }
          
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


          
        setInterval(() => {
          
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.standTime=0;
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.standTime=0;
            } else if ((this.world.keyboard.SPACE || this.world.keyboard.M) && !this.canThrowBubble()) {
                this.playAnimation(this.IMAGES_ATTACK_WITHOUT_BUBBLES);
                this.standTime=0;
            } else if (this.world.keyboard.SPACE) {
                this.playAnimation(this.IMAGES_ATTACK_WITH_BUBBLES);
                this.standTime=0;
            } else if (this.world.keyboard.M) {
                this.playAnimation(this.IMAGES_ATTACK_WITH_POISSON_BUBBLES);
                this.standTime=0;
            } else if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIMMING);
                this.standTime=0;
            } else {
                if (this.IsSleep()) {
                    this.playAnimation(this.IMAGES_STAND_ON_THE_SPOT_LONG);
                } else {
                    this.playAnimation(this.IMAGES_STAND_ON_THE_SPOT);
                    this.standTime++;
                }
                
            }
        }, 200);

        setInterval(() => {
            this.throwBubble();
            this.throwPoissonBubble();
        }, 200);

    }

    IsSleep(){
        return this.standTime > 45;
    }
   

    throwPoissonBubble() {
        if (this.world.keyboard.M && this.poissonCount > 0 && this.canThrowBubble() && !this.isHurt()) {
            if (this.otherDirection == false) {
                let bubble = new PoissonBubble(this.x + this.width + this.xRightCorrection, this.y + 0.5 * this.height);
                bubble.noDammage = false;
                this.world.level.bubbles.push(bubble);
                bubble.throwRight();
            } else {
                let bubble = new PoissonBubble(this.x, this.y + 0.5 * this.height);
                bubble.noDammage = false;
                this.world.level.bubbles.push(bubble);
                bubble.throwLeft();
            }
            this.lastThrowBubbleTime = new Date().getTime();
            this.bubbleCount--;
            this.poissonCount--;
        }
    }

    canThrowBubble() {
        let timepassed = new Date().getTime() - this.lastThrowBubbleTime;
        timepassed = timepassed / 1000 // difference in second
        return timepassed > 1 && this.bubbleCount > 0;
    }

    throwBubble() {
        if (this.world.keyboard.SPACE && this.canThrowBubble() && !this.isHurt()) {
            if (this.otherDirection == false) {
                let bubble = new Bubble(this.x + this.width + this.xRightCorrection, this.y + 0.5 * this.height);
                bubble.noDammage = false;
                this.world.level.bubbles.push(bubble);
                bubble.throwRight();
            } else {
                let bubble = new Bubble(this.x, this.y + 0.5 * this.height);
                bubble.noDammage = false;
                this.world.level.bubbles.push(bubble);
                bubble.throwLeft();
            }
            this.lastThrowBubbleTime = new Date().getTime();
            this.bubbleCount--;
        }
    }


}