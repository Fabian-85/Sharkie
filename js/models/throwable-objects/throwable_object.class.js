class ThrowableObject extends MovableObject {

    x = 50;
    y = 50;
    width = 50;
    height = 50;
    dammage;
    startposition;
    noDammage = true;


    /**
     * throws the object 500px to the right and a bit upward.
     * after then the object make no dammage and move up
     */
    throwRight() {
        this.startposition = this.x;
        setInterval(() => {
            if (this.startposition + 500 > this.x) {
                this.x += 10;
                this.y -= 1;
            } else {
                this.noDammage = true;
            }
        }, 40);
    }

    /**
    * throws the object 500px to the left and a bit upward.
    * after then the object make no dammage and move up
    */
    throwLeft() {
        this.startposition = this.x;
        setInterval(() => {
            if (this.startposition - 500 < this.x) {
                this.x -= 10;
                this.y -= 1;
            } else {
                this.noDammage = true;
            }
        }, 40);
    }

    /**
     *all throwable objects who makes no dammage go up
     */
    moveUp() {
        setInterval(() => {
            if (this.noDammage) {
                this.y -= 3;
            }
        }, 40);
    }
}