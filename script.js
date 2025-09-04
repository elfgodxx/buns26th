document.addEventListener('DOMContentLoaded', () => {
    const birthdayButton = document.getElementById('birthdayButton');
    const initialContainer = document.getElementById('initial-container');
    const longMessageContainer = document.getElementById('long-message-container');
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const replayButton = document.getElementById('replayButton');

    // --- FIX FOR THE INITIAL FLASH ---
    // This removes the invisibility class, causing the box to fade in smoothly.
    initialContainer.classList.remove('is-loading');

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
        
        setTimeout(() => { 
            fireworks.stop();
            startFallingStars(); 
        }, 20000);
    });

    replayButton.addEventListener('click', () => {
        longMessageContainer.classList.add('hidden');
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        setTimeout(() => { initialContainer.classList.remove('hidden'); }, 1500);
    });

    function startFallingStars() {
        if (window.innerWidth > 768) { return; }
        const starInterval = setInterval(() => {
            const star = document.createElement('div');
            star.classList.add('falling-star');
            star.style.left = Math.random() * 100 + '%';
            longMessageContainer.appendChild(star);
            setTimeout(() => { star.remove(); }, 11000);
        }, 1800);
    }
});

// ... The sparkle effect code below this line is fine and doesn't need to change ...
function createSparkle(x, y) { /* ... */ }
document.addEventListener('click', function(e) { /* ... */ });
let canCreateSparkle = true;
document.addEventListener('mousemove', function(e) { /* ... */ });
