document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements we need
    const birthdayButton = document.getElementById('birthdayButton');
    const initialContainer = document.getElementById('initial-container');
    const longMessageContainer = document.getElementById('long-message-container');
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    const backgroundMusic = document.getElementById('backgroundMusic');

    const fireworks = new Fireworks.default(fireworksCanvas);

    // Listen for a click on the button
    birthdayButton.addEventListener('click', () => {
        // 1. Fade out the initial container (title and button)
        initialContainer.classList.add('hidden');

        // 2. Start the fireworks immediately
        fireworks.start();

        // 3. Play the background music
        // Use a .catch() in case the browser has autoplay issues
        backgroundMusic.play().catch(e => console.error("Audio play failed:", e));

        // 4. Wait for a moment before showing the long message
        setTimeout(() => {
            // Fade in the long message container
            longMessageContainer.classList.remove('hidden');
        }, 2000); // 2-second delay (2000 milliseconds)

        // 5. Stop the fireworks after a longer period
        setTimeout(() => {
            fireworks.stop();
        }, 25000); // Stop after 25 seconds
    });
});
