let isPlaying = false;
let audios = {
    'winning_sound': new Audio('./audio/winning.mp3'),
    'losing_sound': new Audio('./audio/losing.mp3'),
    'hurt_sound': new Audio('./audio/hurt.mp3'),
    'background_music': new Audio('./audio/background-music.mp3'),
    'endboss_music': new Audio('./audio/endboss.mp3')
};

audios.background_music.loop = true;
audios.endboss_music.loop = true;

/**
 * turn music on or of with a click on a button
 */
function configureSounds() {
    let configureSoundsButton = document.getElementById('configureSoundsButton');
    if (isPlaying) {
        designAudioOffButton(configureSoundsButton);
        isPlaying = false;
        removeSounds();
    } else {
        designAudioOnButton(configureSoundsButton);
        isPlaying = true;
        addSounds();
    }
}

/**
 * changes "Audio on"-Button to  "Audio off"-Button
 * @param {string} configureSoundsButton - id from sound-button
 */
function designAudioOffButton(configureSoundsButton) {
    configureSoundsButton.innerHTML = 'Audio: OFF';
    configureSoundsButton.classList.add('redButton');
    configureSoundsButton.classList.remove('greenButton');
}

/**
 * changes "Audio off"-Button to  "Audio on"-Button
 * @param {string} configureSoundsButton - id from sound-button
 */
function designAudioOnButton(configureSoundsButton) {
    configureSoundsButton.innerHTML = 'Audio: ON';
    configureSoundsButton.classList.remove('redButton');
    configureSoundsButton.classList.add('greenButton');
}

/**
 * add all sounds
 */
function addSounds() {
    audios.background_music.volume = 1;
    audios.winning_sound.volume = 1;
    audios.losing_sound.volume = 1;
    audios.hurt_sound.volume = 1;
    audios.background_music.volume = 1;
    audios.endboss_music.volume = 1;
}

/**
 * remove all sounds
 */
function removeSounds() {
    audios.background_music.volume = 0;
    audios.winning_sound.volume = 0;
    audios.losing_sound.volume = 0;
    audios.hurt_sound.volume = 0;
    audios.background_music.volume = 0;
    audios.endboss_music.volume = 0;
}



