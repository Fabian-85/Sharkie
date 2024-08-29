class BackgroundObject extends MovableObject {

    y = 0;
    width = 720;
    height = 480;

    /**
     * represents a background object
     * @param {string} imagePath - the path to the image file for the background object
     * @param {number} x - x-position in canvas
     * @constructor
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}