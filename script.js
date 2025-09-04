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
        
        // When fireworks are done...
        setTimeout(() => { 
            fireworks.stop();
            // ...start the falling star effect!
            startFallingStars(); 
        }, 20000); // 20 seconds
    });

    // When the replay button is clicked
    replayButton.addEventListener('click', () => {
        longMessageContainer.classList.add('hidden');
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        setTimeout(() => { initialContainer.classList.remove('hidden'); }, 1500);
    });

    // --- NEW FUNCTION FOR FALLING STARS ---
    function startFallingStars() {
        // First, check if we're on a mobile-sized screen. If not, do nothing.
        if (window.innerWidth > 768) {
            return; 
        }

        // Create a new star every 1.8 seconds
        const starInterval = setInterval(() => {
            const star = document.createElement('div');
            star.classList.add('falling-star');
            
            // Randomize the horizontal starting position inside the container
            star.style.left = Math.random() * 100 + '%';
            
            // Add the star to the message container
            longMessageContainer.appendChild(star);

            // Remove the star element from the page after its animation is done (11s)
            setTimeout(() => {
                star.remove();
            }, 11000); // 10s animation + 1s delay

        }, 1800);
    }
});


// --- Your existing sparkle effect code can remain below ---

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    sparkle.style.left = (x + offsetX) + 'px';
    sparkle.style.top = (y + offsetY) + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => { sparkle.remove(); }, 700);
}

document.addEventListener('click', function(e) {
    createSparkle(e.clientX, e.clientY);
});

let canCreateSparkle = true;
document.addEventListener('mousemove', function(e) {
    if (canCreateSparkle) {
        createSparkle(e.clientX, e.clientY);
        canCreateSparkle = false;
        setTimeout(() => { canCreateSparkle = true; }, 50);
    }
});
