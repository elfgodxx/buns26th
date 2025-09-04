document.addEventListener('DOMContentLoaded', () => {
    const birthdayButton = document.getElementById('birthdayButton');
    const birthdayMessage = document.getElementById('birthdayMessage');
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    const backgroundMusic = document.getElementById('backgroundMusic');

    const fireworks = new Fireworks.default(fireworksCanvas);

    birthdayButton.addEventListener('click', () => {
        // Hide the button
        birthdayButton.style.display = 'none';

        // Start the fireworks
        fireworks.start();

        // Show the birthday message after a delay
        setTimeout(() => {
            birthdayMessage.classList.remove('hidden');
        }, 1000); // 1-second delay

        // Play the background music
        backgroundMusic.play();

        // Stop the fireworks after some time (e.g., 15 seconds)
        setTimeout(() => {
            fireworks.stop();
        }, 15000); // 15 seconds
    });
});
