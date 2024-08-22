class ThrowableObject extends MovableObject{

    x = 50;
    y = 50;
    width = 50;
    height = 50;
    dammage;
    startposition;
    noDammage = true;


    throwRight() {
        this.startposition = this.x;
        setInterval(() => {
            if (this.startposition + 500 >this.x) {
                this.x += 10;
                this.y -= 1;
            }else{
                this.noDammage = true;
            }
        }, 40);
    }

    throwLeft() {
        this.startposition = this.x;
        setInterval(() => {
            if(this.startposition - 500 < this.x){ 
            this.x -= 10;
            this.y -= 1;
            }else{
                this.noDammage = true;
            }
        }, 40);
    }


    moveUp(){
        setInterval(() => {
            if(this.noDammage == true){ 
            this.y -= 3;
            } 
        }, 40);
    }
}