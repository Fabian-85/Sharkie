class Coin extends MovableObject {


    x = 450;
    y = 395;
    width = 60;
    height = 60;
    IMAGES = [
        '../img/4. Marcadores/1. Coins/1.png',
        '../img/4. Marcadores/1. Coins/2.png',
        '../img/4. Marcadores/1. Coins/3.png',
        '../img/4. Marcadores/1. Coins/4.png',
    ];


    constructor() {
        super().loadImage('../img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200);
    }
}