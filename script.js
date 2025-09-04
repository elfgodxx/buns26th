document.addEventListener('DOMContentLoaded', () => {
    const birthdayButton = document.getElementById('birthdayButton');
    const initialContainer = document.getElementById('initial-container');
    const longMessageContainer = document.getElementById('long-message-container');
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const replayButton = document.getElementById('replayButton');

    const fireworks = new Fireworks.default(fireworksCanvas, {
        speed: 1, acceleration: 1.01, friction: 0.98, gravity: 1, opacity: 0.6,
        brightness: { min: 50, max: 70 }, flickering: 30, intensity: 10,
        colors: ['#D8A7B1', '#B58DB6', '#F2D7D9'],
        lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 0.5, max: 1 } }
    });

    // When the first button is clicked
    birthdayButton.addEventListener('click', () => {
        initialContainer.classList.add('hidden');
        fireworks.start();
        backgroundMusic.play().catch(e => console.error("Audio play failed:", e));

        setTimeout(() => { longMessageContainer.classList.remove('hidden'); }, 2000);
        setTimeout(() => { fireworks.stop(); }, 20000);
    });

    // When the "See it again?" button is clicked
    replayButton.addEventListener('click', () => {
        // 1. Fade out the long message
        longMessageContainer.classList.add('hidden');
        
        // 2. Stop the music and reset its time to the beginning
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;

        // 3. After a short delay for the fade-out, show the initial screen again
        setTimeout(() => {
            initialContainer.classList.remove('hidden');
        }, 1500); // 1.5-second delay
    });
});
