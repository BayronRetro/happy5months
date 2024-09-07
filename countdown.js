
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
        document.querySelector(".countdown").innerHTML = \`
            <button id="surpriseButton" onclick="showSurprise()">Show Surprise</button>
        \`;
    } else {
        // Display the countdown
        document.getElementById("timer").innerHTML = \`\${days}d \${hours}h \${minutes}m \${seconds}s\`;
    }
}

// Surprise function to show the slideshow
function showSurprise() {
    document.querySelector(".countdown").innerHTML = \`
        <div class="surprise-message">
            <h2>🎉 Surprise! 🎉</h2>
            <p>We've reached 6 months, my love! Here’s to many more beautiful moments together. ❤️</p>
            <div class="slideshow-container">
                <div class="slides fade">
                    <img src="image1.jpg" alt="Image 1" class="slideshow-img">
                </div>
                <div class="slides fade">
                    <img src="image2.jpg" alt="Image 2" class="slideshow-img">
                </div>
                <div class="slides fade">
                    <img src="image3.jpg" alt="Image 3" class="slideshow-img">
                </div>
                <!-- Add more slides if needed -->

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <div class="dots">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        \`;
    showSlides(slideIndex);
}

// Slideshow functions
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Start the countdown
setInterval(countdown, 1000);
