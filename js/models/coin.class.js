class Coin extends MovableObject {


    x = 450;
    y = 395;
    width = 40;
    height = 40;
    IMAGES = [
        '../img/4. Marcadores/1. Coins/1.png',
        '../img/4. Marcadores/1. Coins/2.png',
        '../img/4. Marcadores/1. Coins/3.png',
        '../img/4. Marcadores/1. Coins/4.png',
    ];


    constructor() {
        super().loadImage('../img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES);
        this.x = this.generateRadomNumbers(0, 3595);
        this.y = this.generateRadomNumbers(3, 430);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200);
    }
}