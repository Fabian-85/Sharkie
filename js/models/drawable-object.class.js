class DrawableObject {

    x;
    y;
    width;
    height;
    img;
    imageCache = {};
    currentImage = 0;

     /**
     * load a single image from the specified path .
     * @param {string} path - The file path of the image to load
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

     /**
     * save images into a image cache  
     * @param {array} arr - An array of file paths
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * play animation using the images in the array.
     * @param {array} arr - An array of file paths for the images that make up the animation.
     */
    playAnimation(arr) {
        let i = this.currentImage % arr.length;
        let path = arr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * draw the current image into the canvas  
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

   /**
     * draw a border around the drawable object 
     */
    drawBorder(ctx) {
        ctx.beginPath();
        if (this instanceof Character) {
            this.drawCharacterBorder(ctx);
        } else if (this instanceof PufferFish) {
            this.drawPufferFishBorder(ctx);
        } else if (this instanceof Endboss) {
            this.drawEndbossBorder(ctx);
        } else if (this instanceof JellyFish) {
            this.drawJellyFishBorder(ctx);
        } else if (this instanceof DangerousjellyFish) {
            this.drawDangerousJellyFishBorder(ctx);
        } else if (this instanceof Bubble) {
            this.drawBubbleBorder(ctx);
        } else if (this instanceof PoissonBubble) {
            this.drawPoissonBubbleBorder(ctx);
        } else if (this instanceof Poisson) {
            this.drawPoissonBorder(ctx);
        } else if (this instanceof Coin) {
            this.drawCoinBorder(ctx);
        }
        ctx.stroke();
    }

    drawCharacterBorder(ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.rect(this.x + 50, this.y + 120, this.width - 94, this.height - 180);
    }

    drawPufferFishBorder(ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.rect(this.x + 5, this.y + 5, this.width - 15, this.height - 30);
    }

    drawJellyFishBorder(ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.rect(this.x, this.y + 5, this.width, this.height - 10);
    }

    drawEndbossBorder(ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.rect(this.x + 30, this.y + 250, this.width - 70, this.height - 350);
    }

    drawDangerousJellyFishBorder(ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.rect(this.x, this.y + 5, this.width, this.height - 10);
    }

    drawBubbleBorder(ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
    }

    drawPoissonBubbleBorder(ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
    }

    drawPoissonBorder(ctx) {
        ctx.rect(this.x + 10, this.y, this.width - 20, this.height);
    }

    drawCoinBorder(ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
    }
}