class Poisson extends MovableObject {

    width = 60;
    height = 60;
    IMAGES = [
        './img/4. Marcadores/Posión/Animada/1.png',
        './img/4. Marcadores/Posión/Animada/2.png',
        './img/4. Marcadores/Posión/Animada/3.png',
        './img/4. Marcadores/Posión/Animada/4.png',
        './img/4. Marcadores/Posión/Animada/5.png',
        './img/4. Marcadores/Posión/Animada/6.png',
        './img/4. Marcadores/Posión/Animada/7.png',
        './img/4. Marcadores/Posión/Animada/8.png'
    ];

    constructor() {
        super().loadImage('./img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES);
        this.x = generateRadomNumbers(0, 3595);
        this.y = generateRadomNumbers(3, 430);
        this.xLeftCorrection = 10;
        this.xRightCorrection = -10;
        this.animate();

    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200);
    }
}