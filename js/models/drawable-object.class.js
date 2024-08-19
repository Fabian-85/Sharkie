class DrawableObject {

    x;
    y;
    width;
    height;
    img;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    playAnimation(arr) {
        let i = this.currentImage % arr.length;
        let path = arr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawBorder(ctx) {
        ctx.beginPath();
        if (this instanceof Character) {
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.rect(this.x + 50, this.y + 120, this.width - 94, this.height - 180);
        } else if (this instanceof PufferFish) {
            //ctx.rect(this.x , this.y , this.width , this.height);
            //ctx.rect(this.x +5, this.y+5, this.width-15, this.height-30);
        } else if (this instanceof Endboss) {
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.rect(this.x + 30, this.y + 250, this.width - 70, this.height - 350);
        } else if (this instanceof JellyFish) {
            // ctx.rect(this.x , this.y , this.width , this.height);
            // ctx.rect(this.x , this.y +5 , this.width , this.height -10);
        }
        else if (this instanceof DangerousjellyFish) {
            // ctx.rect(this.x , this.y , this.width , this.height);
            // ctx.rect(this.x , this.y +5 , this.width , this.height -10);
        } else if (this instanceof Bubble) {
            ctx.rect(this.x, this.y, this.width, this.height);
        } else if (this instanceof PoissonBubble) {
            ctx.rect(this.x, this.y, this.width, this.height);
        } else if (this instanceof Poisson) {
            ctx.rect(this.x + 10, this.y, this.width - 20, this.height);
        } else if (this instanceof Coin) {
            ctx.rect(this.x, this.y, this.width, this.height);
        }
        ctx.stroke();
    }
}