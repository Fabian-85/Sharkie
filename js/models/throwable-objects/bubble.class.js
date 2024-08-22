class Bubble extends ThrowableObject {

    
    dammage = 20;
    
    constructor(x,y) {
        super().loadImage('../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y; 
       this.moveUp();
    }
 
}