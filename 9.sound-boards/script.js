const sounds = document.querySelectorAll('audio');
let soundIds = [];

sounds.forEach((sound) => soundIds.push(sound.id));
soundIds.forEach((soundId) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = soundId;

    btn.addEventListener('click', () => {
        stopPreviousPlays();
        document.getElementById(btn.innerText).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopPreviousPlays() {
    soundIds.forEach((soundId) => {
        const sound = document.getElementById(soundId);
        sound.pause();
        sound.currentTime = 0;
    });
}
