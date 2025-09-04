document.addEventListener('DOMContentLoaded', () => {
    const birthdayButton = document.getElementById('birthdayButton');
    const initialContainer = document.getElementById('initial-container');
    const longMessageContainer = document.getElementById('long-message-container');
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const exitButton = document.getElementById('exitButton');
    const finalMessageContainer = document.getElementById('final-message-container');

    const fireworks = new Fireworks.default(fireworksCanvas, {
        speed: 1, acceleration: 1.01, friction: 0.98, gravity: 1, opacity: 0.6,
        brightness: { min: 50, max: 70 }, flickering: 30, intensity: 10,
        colors: ['#D8A7B1', '#B58DB6', '#F2D7D9'],
        lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 0.5, max: 1 } }
    });

    birthdayButton.addEventListener('click', () => {
        initialContainer.classList.add('hidden');
        fireworks.start();
        backgroundMusic.play().catch(e => console.error("Audio play failed:", e));

        setTimeout(() => { longMessageContainer.classList.remove('hidden'); }, 2000);
        setTimeout(() => { fireworks.stop(); }, 20000);
    });

    // Event listener for the "One last thing..." button
    exitButton.addEventListener('click', () => {
        // 1. Fade out the long message container
        longMessageContainer.classList.add('hidden');

        // 2. Gently fade out the music over 2 seconds
        let musicVolume = backgroundMusic.volume;
        const fadeOutInterval = setInterval(() => {
            musicVolume -= 0.05;
            if (musicVolume < 0) {
                musicVolume = 0;
                backgroundMusic.pause();
                clearInterval(fadeOutInterval);
            }
            backgroundMusic.volume = musicVolume;
        }, 100); // Fades out over 20 * 100ms = 2 seconds

        // 3. After a delay, fade in the final message
        setTimeout(() => {
            finalMessageContainer.classList.remove('hidden');
        }, 1500); // 1.5-second delay
    });
});
