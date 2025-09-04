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

    birthdayButton.addEventListener('click', () => {
        initialContainer.classList.add('hidden');
        fireworks.start();
        backgroundMusic.play().catch(e => console.error("Audio play failed:", e));
        setTimeout(() => { longMessageContainer.classList.remove('hidden'); }, 2000);
        setTimeout(() => { fireworks.stop(); }, 20000);
    });

    replayButton.addEventListener('click', () => {
        longMessageContainer.classList.add('hidden');
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        setTimeout(() => { initialContainer.classList.remove('hidden'); }, 1500);
    });
});


// --- NEW, SELF-CONTAINED SPARKLE EFFECT ---

// A helper function to create a sparkle at a specific position
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    sparkle.style.left = (x + offsetX) + 'px';
    sparkle.style.top = (y + offsetY) + 'px';
    
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 700);
}

// 1. Create a sparkle on every click (for mobile and PC)
document.addEventListener('click', function(e) {
    createSparkle(e.clientX, e.clientY);
});

// 2. Create a sparkle trail on mouse move (for PC)
let canCreateSparkle = true;
document.addEventListener('mousemove', function(e) {
    if (canCreateSparkle) {
        createSparkle(e.clientX, e.clientY);
        canCreateSparkle = false;
        setTimeout(() => {
            canCreateSparkle = true;
        }, 50);
    }
});
