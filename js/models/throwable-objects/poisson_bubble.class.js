class PoissonBubble extends ThrowableObject {

    dammage = 40;
    
    constructor(x, y) {
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.moveUp();
    }
}