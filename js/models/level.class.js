class Level {

    enemies;
    backgroundObjects;;
    poissons;
    coins;
    level_end = 4000;
    
    constructor(enemies, backgroundObjects,poissons,coins) {
        this.enemies = enemies;
        this.backgroundObjects=backgroundObjects;
        this.poissons = poissons
        this.coins = coins;
    }

}