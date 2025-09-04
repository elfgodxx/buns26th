document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements we need
    const birthdayButton = document.getElementById('birthdayButton');
    const initialContainer = document.getElementById('initial-container');
    const longMessageContainer = document.getElementById('long-message-container');
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // --- FIREWORKS CUSTOMIZATION ---
    const fireworks = new Fireworks.default(fireworksCanvas, {
        // Opacity: Lower value means more transparent. 0.7 is a good start.
        opacity: 0.7,
        
        // Brightness: Controls the brightness range of the firework particles.
        brightness: {
          min: 50,
          max: 80
        },

        // Colors: An array of hex codes that match your background.
        colors: [
            '#D8BFD8', // Thistle (light purple)
            '#FFC0CB', // Pink
            '#E6E6FA'  // Lavender
        ],
        
        // Other settings to make them feel softer
        intensity: 20,
        flickering: 20,
        lineWidth: {
            explosion: {
              min: 1,
              max: 3
            },
            trace: {
              min: 0.5,
              max: 1.5
            }
        }
    });

    // Listen for a click on the button
    birthdayButton.addEventListener('click', () => {
        // 1. Fade out the initial container (title and button)
        initialContainer.classList.add('hidden');

        // 2. Start the fireworks
        fireworks.start();

        // 3. Play the background music
        backgroundMusic.play().catch(e => console.error("Audio play failed:", e));

        // 4. Wait for a moment before showing the long message
        setTimeout(() => {
            longMessageContainer.classList.remove('hidden');
        }, 2000);

        // 5. Let the fireworks run for a while, then gently stop
        setTimeout(() => {
            fireworks.stop();
        }, 20000); // Stop after 20 seconds
    });
});
