class CoinBar extends DrawableObject {

    x = 650;
    y = 160;
    width = 35;
    height = 35;

    /**
     * represents a coin for a status bar
     * @constructor
     */
    constructor() {
        super().loadImage('./img/4. Marcadores/2_icons/icon_coin.png');
    }
}