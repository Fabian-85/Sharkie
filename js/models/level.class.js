class Level {

    enemies;
    backgroundObjects;
    bubbles;
    coins;
    level_end = 5800;

    constructor(enemies, backgroundObjects, poissons, coins, bubbles) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.poissons = poissons;
        this.coins = coins;
        this.bubbles = bubbles;
    }
}