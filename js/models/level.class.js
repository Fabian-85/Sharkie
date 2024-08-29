class Level {

    enemies;
    backgroundObjects;
    bubbles;
    coins;
    level_end = 5800;

    /**
     * represents a level
     * @param {array} backgroundObjects - array wiith all backgroundobjects
     * @param {array} bubbles - array with bubbles
     * @param {array} enemies  - array with all enemies
     * @param {array} coins  - array with all coins
     * @param {array} poissons - array with all poisson objects
     * @constructor
     */
    constructor(enemies, backgroundObjects, poissons, coins, bubbles) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.poissons = poissons;
        this.coins = coins;
        this.bubbles = bubbles;
    }
}