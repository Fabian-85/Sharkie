class BubbleBar extends DrawableObject {

    x = 660;
    y = 60;
    width = 30;
    height = 30;

    /**
     * represents a bubble for a status bar
     * @constructor
     */
    constructor() {
        super().loadImage('./img/4. Marcadores/2_icons/icon_bubble.png');
    }
}