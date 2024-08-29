class Bubble extends ThrowableObject {

    dammage = 20;

    /**
     * represents a bubble
     * @param {number} x - x-position in canvas
     * @param {number} y - y-position in canvas
     * @constructor
     */
    constructor(x, y) {
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.moveUp();
    }
}