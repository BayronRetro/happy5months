
// Countdown timer script
function countdown() {
    const targetDate = new Date("2024-10-05T00:00:00"); // Set your 6-month anniversary date
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft < 0) {
        // Replace countdown with a button when the time is up
        document.querySelector(".countdown").innerHTML = `
            <button id="surpriseButton" onclick="showSurprise()">Show Surprise</button>
        `;
    } else {
        // Display the countdown
        document.getElementById("timer").innerHTML = \`\${days}d \${hours}h \${minutes}m \${seconds}s\`;
    }
}

// Surprise function
function showSurprise() {
    document.querySelector(".countdown").innerHTML = `
        <div class="surprise-message">
            <h2>🎉 Surprise! 🎉</h2>
            <p>We've reached 6 months, my love! Here’s to many more beautiful moments together. ❤️</p>
            <img src="surprise-image.jpg" alt="Surprise Image">
        </div>
    `;
}

// Start the countdown
setInterval(countdown, 1000);
