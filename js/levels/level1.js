let level1;


/**
 * create all level dependent objects
 */
function setLevel() {
    let enemies = createEnemies();
    let backgroundImages = createBackgroundImages();
    let bubbles = [];
    let coins = createCoins();
    let poissons = createPoissons();
    level1 = new Level(enemies, backgroundImages, poissons, coins, bubbles);
}

/**
 * create all enemies
 */
function createEnemies() {
    return [
        new Endboss(),
        new PufferFish(generateRadomNumbers(800, 1000)),
        new PufferFish(generateRadomNumbers(800, 1000)),
        new PufferFish(generateRadomNumbers(800, 1000)),
        new PufferFish(generateRadomNumbers(1400, 1800)),
        new PufferFish(generateRadomNumbers(1400, 1800)),
        new PufferFish(generateRadomNumbers(1400, 1800)),
        new PufferFish(generateRadomNumbers(2300, 2600)),
        new PufferFish(generateRadomNumbers(2300, 2600)),
        new PufferFish(generateRadomNumbers(2300, 2600)),
        new PufferFish(generateRadomNumbers(2800, 3100)),
        new PufferFish(generateRadomNumbers(2800, 3100)),
        new PufferFish(generateRadomNumbers(2800, 3100)),
        new JellyFish(700),
        new JellyFish(790),
        new JellyFish(1390),
        new JellyFish(2157),
        new JellyFish(2776),
        new JellyFish(2876),
        new JellyFish(4400),
        new JellyFish(4500),
        new DangerousjellyFish(generateRadomNumbers(3800,5000)),
        new DangerousjellyFish(generateRadomNumbers(3800,5000)),
        new DangerousjellyFish(generateRadomNumbers(3800,5000)),
        new DangerousjellyFish(generateRadomNumbers(3800,5000))
    ];
}

/**
 * create all background images
 */
function createBackgroundImages() {
    return [
        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png', -719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', -719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D2.png', -719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', -719),
        new BackgroundObject('./img/3. Background/Layers/1. Light/2.png', -719),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png', 719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D2.png', 719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', 719),
        new BackgroundObject('./img/3. Background/Layers/1. Light/2.png', 719),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', 2 * 719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 2 * 719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D1.png', 2 * 719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png', 2 * 719),
        new BackgroundObject('./img/3. Background/Layers/1. Light/1.png', 2 * 719),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png', 3 * 719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 3 * 719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D2.png', 3 * 719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', 3 * 719),
        new BackgroundObject('./img/3. Background/Layers/1. Light/2.png', 3 * 719),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', 4 * 719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 4 * 719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D1.png', 4 * 719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png', 4 * 719),
        new BackgroundObject('./img/3. Background/Layers/1. Light/1.png', 4 * 719),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png', 5 * 719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 5 * 719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D2.png', 5 * 719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', 5 * 719),
        new BackgroundObject('./img/3. Background/Layers/1. Light/2.png', 5 * 719),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', 6 * 719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 6 * 719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D1.png', 6 * 719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png', 6 * 719),
        new BackgroundObject('./img/3. Background/Layers/1. Light/1.png', 6 * 719),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png', 7 * 719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 7 * 719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D2.png', 7 * 719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', 7 * 719),
        new BackgroundObject('./img/3. Background/Layers/1. Light/2.png', 7 * 719),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', 8 * 719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 8 * 719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D1.png', 8 * 719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png', 8 * 719),
        new BackgroundObject('./img/3. Background/Layers/1. Light/1.png', 8 * 719),
    ];
}

/**
 * create all 50 coins
 */
function createCoins() {
    let coins = [];
    for (let i = 0; i < 50; i++) {
        coins.push(new Coin());
    }
    return coins;
}

/**
 * create all 50 poissson objects
 */
function createPoissons() {
    let poissons = [];
    for (let i = 0; i < 6; i++) {
        poissons.push(new Poisson());
    }
    return poissons;
}

