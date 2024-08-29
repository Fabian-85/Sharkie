class MovableObject extends DrawableObject {

    speed;
    otherDirection = false;
    energy;
    lastHit = 0;
    xLeftCorrection = 0;
    xRightCorrection = 0;
    yUpCorrection = 0;
    yBottomCorrection = 0;

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }
    
     /**
     * checks if this object is colliding with another object
     * @param {Object} object - The object to check collision against
     * @returns {boolean} - Returns true if this object is colliding with the specified object, otherwise false
     */
    isColliding(object) {
        return this.x + this.width + this.xRightCorrection > object.x + object.xLeftCorrection &&
            this.x + this.xLeftCorrection < object.x + object.width + object.xRightCorrection &&
            this.y + this.height + this.yBottomCorrection > object.y + object.yUpCorrection &&
            this.y + this.yUpCorrection < object.y + object.height + object.yBottomCorrection;
    }

    /**
     * Reduces the energy of the object by the specified damage value and
     * updates the last hit time if the object is not dead
     * @param {number} dammage - amount of damage to be added to the object.
     */
    hit(dammage = 20) {
        this.energy -= dammage;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

     /**
     * Checks if object is hurt  
     * A object has been hurt if the last was more than two seconds
     * @returns {boolean} - Returns true if the object is hurt, otherwise false.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000 // difference in second
        return timepassed < 2;
    }

    isAboveTheBottomBoundary() {
        return this.y + this.height + this.yBottomCorrection < 460;
    }

    isUnderTheTopBoundary() {
        return this.y + this.yUpCorrection > 15;
    }
}