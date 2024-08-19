class Poisson extends MovableObject {


    x = 550;
    y = 395;
    width = 60;
    height = 60;
    IMAGES = [
        '../img/4. Marcadores/Posión/Animada/1.png',
        '../img/4. Marcadores/Posión/Animada/2.png',
        '../img/4. Marcadores/Posión/Animada/3.png',
        '../img/4. Marcadores/Posión/Animada/4.png',
        '../img/4. Marcadores/Posión/Animada/5.png',
        '../img/4. Marcadores/Posión/Animada/6.png',
        '../img/4. Marcadores/Posión/Animada/7.png',
        '../img/4. Marcadores/Posión/Animada/8.png'
    ];


    constructor() {
        super().loadImage('../img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES);
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