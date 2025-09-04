document.addEventListener('DOMContentLoaded', () => {
    const birthdayButton = document.getElementById('birthdayButton');
    const initialContainer = document.getElementById('initial-container');
    const longMessageContainer = document.getElementById('long-message-container');
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // --- FINAL, THEMED FIREWORKS CUSTOMIZATION ---
    const fireworks = new Fireworks.default(fireworksCanvas, {
        // --- Speed Adjustments ---
        speed: 1,                 // Lower overall speed
        acceleration: 1.01,       // Very slow acceleration
        friction: 0.98,           // More friction to slow them down
        gravity: 1,               // Lower gravity so they hang in the air a bit
        
        // --- Color & Style Adjustments ---
        opacity: 0.6,             // Soft transparency
        brightness: { min: 50, max: 70 },
        flickering: 30,
        intensity: 10,            // Fewer fireworks for a calmer feel
        
        // New color palette to match the sunset background
        colors: [
            '#D8A7B1', // Dusty Rose
            '#B58DB6', // Soft Lilac
            '#F2D7D9'  // Pale Pink
        ],

        lineWidth: {
            explosion: { min: 1, max: 3 },
            trace: { min: 0.5, max: 1 }
        }
    });

    // --- Event Listener ---
    birthdayButton.addEventListener('click', () => {
        initialContainer.classList.add('hidden');
        fireworks.start();
        backgroundMusic.play().catch(e => console.error("Audio play failed:", e));

        setTimeout(() => {
            longMessageContainer.classList.remove('hidden');
        }, 2000);

        setTimeout(() => {
            fireworks.stop();
        }, 20000);
    });
});
